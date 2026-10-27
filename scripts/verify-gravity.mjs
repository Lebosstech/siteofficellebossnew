import { chromium } from "playwright";
import assert from "node:assert/strict";
import { mkdir, writeFile } from "node:fs/promises";
const base = process.env.TEST_BASE_URL || "http://127.0.0.1:3003";
await mkdir("artifacts/gravity", { recursive: true });
const browser = await chromium.launch({
  headless: true,
  executablePath: process.env.CHROMIUM_PATH || "/usr/bin/chromium",
  args: ["--no-sandbox", "--enable-unsafe-swiftshader"],
});
const errors = [];
try {
  const page = await browser.newPage({
    viewport: { width: 1440, height: 900 },
  });
  page.on("pageerror", (e) => errors.push(e.message));
  await page.goto(base, { waitUntil: "networkidle" });
  await page
    .locator(".gravity-loader")
    .waitFor({ state: "hidden", timeout: 30000 });
  await page.waitForTimeout(3200);
  await page.screenshot({ path: "artifacts/gravity/desktop-1440.png" });
  assert.equal(await page.locator(".gravity-field canvas").count(), 1);
  assert.equal(await page.locator(".gravity-fallback").count(), 0);
  assert.match(await page.locator("h1").innerText(), /Nous donnons vie/);
  console.log("Desktop WebGL captured");
  const stages = [];
  for (const [id, name] of [
    ["#automatisation", "drop"],
    ["#developpement", "heart"],
    ["#infrastructure", "release"],
  ]) {
    await page.locator(id).scrollIntoViewIfNeeded();
    await page.waitForTimeout(1200);
    stages.push(
      await page.locator(".gravity-field").getAttribute("data-progress"),
    );
    await page.screenshot({ path: `artifacts/gravity/${name}.png` });
  }
  console.log("Scroll states captured");
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.waitForTimeout(500);
  await page.evaluate(() => window.scrollTo(0, 0));
  await page
    .getByRole("button", { name: "Ouvrir les réglages du studio" })
    .click();
  assert.equal(await page.getByRole("dialog").isVisible(), true);
  await page.getByRole("button", { name: /Arctic Sky/ }).click();
  assert.equal(await page.locator(".gravity-field.palette-3").count(), 1);
  await page.keyboard.press("Escape");
  assert.equal(await page.getByRole("dialog").isVisible(), false);
  await page
    .getByRole("button", { name: "Ouvrir les réglages du studio" })
    .click();
  await page.getByRole("button", { name: "Réinitialiser" }).click();
  assert.equal(await page.locator(".gravity-field.palette-0").count(), 1);
  await page.keyboard.press("Escape");
  await page.mouse.move(700, 300);
  await page.mouse.down();
  await page.mouse.move(950, 450, { steps: 6 });
  await page.mouse.up();
  await page.waitForTimeout(500);
  console.log("Palettes and keyboard checked");
  await page.emulateMedia({ reducedMotion: "no-preference" });
  await page.setViewportSize({ width: 390, height: 844 });
  await page.reload({ waitUntil: "networkidle" });
  await page
    .locator(".gravity-loader")
    .waitFor({ state: "hidden", timeout: 30000 });
  await page.waitForTimeout(2400);
  await page.screenshot({ path: "artifacts/gravity/mobile-390.png" });
  await page.getByRole("button", { name: "Ouvrir le menu" }).click();
  await page.keyboard.press("Escape");
  assert.equal(await page.locator("#mobile-nav").count(), 0);
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.reload({ waitUntil: "networkidle" });
  await page.locator(".gravity-loader").waitFor({ state: "hidden" });
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
  await page
    .getByRole("button", { name: "Ouvrir les réglages du studio" })
    .click();
  assert.match(
    await page.locator(".gravity-render-info").innerText(),
    /MOUVEMENT RÉDUIT/,
  );
  await page.keyboard.press("Escape");
  for (const route of [
    "/expertises",
    "/expertises/automatisation",
    "/expertises/developpement",
    "/expertises/cloud-infrastructure",
    "/expertises/maintenance",
    "/realisations",
    "/realisations/sra",
    "/realisations/mon-gestionnaire-pro",
    "/realisations/lounan",
    "/ecosysteme",
    "/a-propos",
    "/contact",
    "/cgu",
    "/politique-confidentialite",
  ]) {
    assert.equal(
      (await page.goto(base + route, { waitUntil: "networkidle" })).status(),
      200,
      route,
    );
    assert.equal(
      await page.evaluate(
        () => document.documentElement.scrollWidth > innerWidth,
      ),
      false,
      route,
    );
  }
  assert.deepEqual(errors, []);
  await writeFile(
    "artifacts/gravity/results.json",
    JSON.stringify(
      {
        stages,
        errors,
        checks:
          "14 internal routes, 6 widths, WebGL, palettes, drawer, keyboard, reduced motion, preserved headline",
      },
      null,
      2,
    ),
  );
  console.log(
    "PASS: scène WebGL, étapes de scroll, palettes, tiroir, clavier, mouvement réduit, 14 routes internes et 6 largeurs.",
  );
} finally {
  await browser.close();
}
