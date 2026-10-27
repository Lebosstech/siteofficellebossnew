import { chromium } from "playwright";
import { spawn } from "node:child_process";
import assert from "node:assert/strict";
import { mkdir, writeFile } from "node:fs/promises";
const base = process.env.TEST_BASE_URL || "http://127.0.0.1:3002";
await mkdir("artifacts/hero-phase01", { recursive: true });
const browser = await chromium.launch({
  headless: true,
  executablePath: process.env.CHROMIUM_PATH || "/usr/bin/chromium",
  args: ["--no-sandbox"],
});
const errors = [];
const frames = [];
try {
  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 },
  });
  const page = await context.newPage();
  page.on("pageerror", (e) => errors.push(e.message));
  const recorder = spawn(
    "/usr/bin/ffmpeg",
    [
      "-y",
      "-f",
      "image2pipe",
      "-vcodec",
      "mjpeg",
      "-framerate",
      "12",
      "-i",
      "pipe:0",
      "-c:v",
      "libx264",
      "-pix_fmt",
      "yuv420p",
      "artifacts/hero-phase01/hero-demo.mp4",
    ],
    { stdio: ["pipe", "ignore", "ignore"] },
  );
  const recording = await context.newCDPSession(page);
  recording.on("Page.screencastFrame", (e) => {
    recorder.stdin.write(Buffer.from(e.data, "base64"));
    recording
      .send("Page.screencastFrameAck", { sessionId: e.sessionId })
      .catch(() => {});
  });
  await recording.send("Page.startScreencast", {
    format: "jpeg",
    quality: 80,
    maxWidth: 1440,
    maxHeight: 900,
    everyNthFrame: 2,
  });
  await page.goto(base, { waitUntil: "networkidle" });
  await page.waitForTimeout(4200);
  assert.equal(
    await page.locator(".engine-deploy-states .deploy-done").count(),
    4,
  );
  await page.getByRole("button", { name: "Rejouer le Digital Engine" }).click();
  for (let i = 0; i < 8; i++) {
    await page.waitForTimeout(470);
    frames.push({
      step: i,
      log: await page.locator(".engine-console [role=status]").innerText(),
      complete: await page
        .locator(".engine-deploy-states .deploy-done")
        .count(),
      written: await page.locator(".engine-code-line.line-written").count(),
    });
  }
  assert.match(frames.at(-1).log, /terminée/);
  assert.equal(frames.at(-1).complete, 4);
  assert.ok(new Set(frames.map((f) => f.log)).size >= 4);
  assert.ok(new Set(frames.map((f) => f.written)).size >= 2);
  await page.screenshot({ path: "artifacts/hero-phase01/desktop-1440.png" });
  for (const [i, mode] of [
    "Automatisation",
    "Développement",
    "Infrastructure",
  ].entries()) {
    await page.getByRole("tab", { name: new RegExp(mode) }).click();
    await page.waitForTimeout(950);
    assert.equal(await page.locator(`.engine-mode-${i}`).count(), 1);
    await page.screenshot({ path: `artifacts/hero-phase01/mode-${i}.png` });
    await page
      .getByRole("button", { name: "Rejouer le Digital Engine" })
      .click();
    await page.waitForTimeout(3700);
  }
  await recording.send("Page.stopScreencast");
  recorder.stdin.end();
  await new Promise((resolve) => recorder.on("close", resolve));
  await page.getByRole("tab", { name: /Infrastructure/ }).focus();
  await page.keyboard.press("Home");
  await page.waitForTimeout(950);
  assert.equal(
    await page
      .getByRole("tab", { name: /Automatisation/ })
      .getAttribute("aria-selected"),
    "true",
  );
  await page.keyboard.press("ArrowRight");
  await page.waitForTimeout(950);
  assert.equal(
    await page
      .getByRole("tab", { name: /Développement/ })
      .getAttribute("aria-selected"),
    "true",
  );
  await page.getByRole("button", { name: "Rejouer le Digital Engine" }).click();
  await page.waitForTimeout(500);
  await page
    .getByRole("button", { name: "Mettre le Digital Engine en pause" })
    .click();
  const paused = await page
    .locator(".engine-console [role=status]")
    .innerText();
  await page.waitForTimeout(700);
  assert.equal(
    await page.locator(".engine-console [role=status]").innerText(),
    paused,
  );
  await page.getByRole("button", { name: "Passer l’animation" }).click();
  assert.equal(
    await page.locator(".engine-deploy-states .deploy-done").count(),
    4,
  );
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto(base, { waitUntil: "networkidle" });
  await page.waitForTimeout(4300);
  await page.screenshot({ path: "artifacts/hero-phase01/mobile-390.png" });
  await page
    .locator(".hero")
    .screenshot({ path: "artifacts/hero-phase01/mobile-full.png" });
  for (const width of [360, 390, 768, 1024, 1440, 1920]) {
    await page.setViewportSize({ width, height: 900 });
    assert.equal(
      await page.evaluate(
        () => document.documentElement.scrollWidth > innerWidth,
      ),
      false,
      `overflow ${width}`,
    );
  }
  await page.setViewportSize({ width: 390, height: 844 });
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto(base, { waitUntil: "networkidle" });
  assert.equal(await page.locator(".digital-engine canvas").count(), 0);
  assert.equal(
    await page.locator(".engine-deploy-states .deploy-done").count(),
    4,
  );
  await page.getByRole("button", { name: "Rejouer le Digital Engine" }).click();
  await page.waitForTimeout(600);
  assert.match(
    await page.locator(".engine-console [role=status]").innerText(),
    /Prêt/,
  );
  await page
    .getByRole("button", { name: "Étape suivante du Digital Engine" })
    .click();
  assert.match(
    await page.locator(".engine-console [role=status]").innerText(),
    /Réception/,
  );
  for (const mode of ["Développement", "Infrastructure", "Automatisation"]) {
    await page.getByRole("tab", { name: new RegExp(mode) }).click();
    assert.equal(
      await page
        .getByRole("tab", { name: new RegExp(mode) })
        .getAttribute("aria-selected"),
      "true",
    );
  }
  const targets = await page
    .locator(".engine-tabs button,.engine-playback button")
    .evaluateAll((els) =>
      els.map((e) => ({
        height: e.getBoundingClientRect().height,
        label: e.getAttribute("aria-label") || e.textContent,
      })),
    );
  assert.ok(targets.every((t) => t.height >= 44 && t.label));
  const client = await context.newCDPSession(page);
  const ax = await client.send("Accessibility.getFullAXTree");
  assert.ok(
    ax.nodes.some(
      (n) =>
        n.role?.value === "tablist" && n.name?.value.includes("Digital Engine"),
    ),
  );
  assert.deepEqual(errors, []);
  await writeFile(
    "artifacts/hero-phase01/motion-observations.json",
    JSON.stringify({ frames, errors, targets }, null, 2),
  );
  await context.close();
  console.log(
    "PASS: progression workflow/code/deploy, 3 modes, clavier, pause/replay/skip, mouvement réduit, 6 largeurs, noms accessibles et cibles tactiles; aucune exception navigateur.",
  );
} finally {
  await browser.close();
}
