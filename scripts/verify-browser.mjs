import { chromium } from "playwright";
import assert from "node:assert/strict";
import { mkdir } from "node:fs/promises";
const base = process.env.TEST_BASE_URL || "http://127.0.0.1:3001";
const browser = await chromium.launch({
  headless: true,
  ...(process.env.CHROMIUM_PATH
    ? { executablePath: process.env.CHROMIUM_PATH }
    : {}),
  args: ["--no-sandbox", "--enable-unsafe-swiftshader"],
});
const errors = [];
try {
  const page = await browser.newPage({
    viewport: { width: 1440, height: 900 },
  });
  page.on("pageerror", (e) => errors.push(e.message));
  await mkdir("artifacts", { recursive: true });
  const routes = [
    "/",
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
  ];
  for (const route of routes) {
    const response = await page.goto(base + route, {
      waitUntil: "networkidle",
    });
    assert.equal(response.status(), 200, route);
    assert.equal(await page.locator("h1,h2").first().isVisible(), true, route);
  }
  await page.goto(base, { waitUntil: "networkidle" });
  for (const [width, height] of [
    [1920, 1080],
    [1440, 900],
    [1280, 800],
    [1024, 768],
    [768, 1024],
    [390, 844],
    [360, 800],
  ]) {
    await page.setViewportSize({ width, height });
    assert.equal(
      await page.evaluate(
        () => document.documentElement.scrollWidth > innerWidth,
      ),
      false,
      `overflow ${width}`,
    );
    await page.screenshot({ path: `artifacts/home-${width}.png` });
  }
  await page.setViewportSize({ width: 1440, height: 900 });
  const automation = page.locator(".automation-demo");
  await automation.scrollIntoViewIfNeeded();
  const pause = automation.getByRole("button", { name: "Mettre en pause" });
  if (await pause.count()) await pause.click();
  await automation
    .getByRole("button", { name: "Validation métier", exact: true })
    .click();
  await automation.getByRole("button", { name: "Étape suivante" }).click();
  await automation.getByRole("button", { name: "Étape suivante" }).click();
  assert.match(
    await automation.locator("[role=status]").innerText(),
    /Intervention nécessaire/,
  );
  await page.waitForTimeout(850);
  await automation.screenshot({ path: "artifacts/automation.png" });
  await automation
    .getByRole("button", { name: "Ajouter un justificatif (simulation)" })
    .click();
  assert.match(
    await automation.locator("[role=status]").innerText(),
    /Justificatif ajouté/,
  );
  const dev = page.locator(".development-demo");
  await dev
    .getByRole("button", { name: "Application mobile", exact: true })
    .click();
  await dev.getByRole("button", { name: "04 Déploiement" }).click();
  assert.equal(await dev.locator(".mode-1.stage-3").count(), 1);
  await page.waitForTimeout(850);
  await dev.screenshot({ path: "artifacts/development.png" });
  const infra = page.locator(".infrastructure-demo");
  await infra.getByRole("button", { name: "Maintenance", exact: true }).click();
  assert.equal(await infra.locator(".has-incident").count(), 1);
  await page.waitForTimeout(850);
  await infra.screenshot({ path: "artifacts/infrastructure.png" });
  const network = page.locator(".network-demo");
  await network
    .getByRole("button", { name: "Imprimante partagée", exact: true })
    .click();
  assert.match(
    await network.locator("[role=status]").innerText(),
    /imprimante réseau/,
  );
  await network.screenshot({ path: "artifacts/network.png" });
  await page.setViewportSize({ width: 390, height: 844 });
  await page.getByRole("button", { name: "Ouvrir le menu" }).click();
  await page.keyboard.press("Escape");
  assert.equal(await page.locator("#mobile-nav").count(), 0);
  await page.goto(base + "/contact");
  await page
    .getByRole("textbox", { name: "Votre nom" })
    .fill("Test de formulaire");
  await page
    .getByRole("textbox", { name: "Votre email" })
    .fill("test@example.com");
  await page.getByRole("combobox").selectOption({ label: "Développement" });
  await page
    .getByRole("textbox", { name: "Parlez-nous" })
    .fill("Une demande de projet suffisamment détaillée.");
  await page.waitForTimeout(1600);
  await page.getByRole("button", { name: "Envoyer mon projet" }).click();
  await page
    .getByRole("status")
    .filter({ hasText: /indisponible/ })
    .waitFor();
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto(base);
  await page.waitForLoadState("networkidle");
  assert.equal(await page.locator(".engine-window").count(), 1);
  assert.equal(await page.locator(".digital-engine canvas").count(), 0);
  await page.locator("#automatisation").scrollIntoViewIfNeeded();
  assert.equal(
    await page
      .locator(".automation-demo")
      .getByRole("button", { name: "Lancer la démonstration" })
      .count(),
    1,
  );
  for (const route of ["/expertises/inconnu", "/realisations/inconnu"]) {
    assert.equal((await page.goto(base + route)).status(), 404);
  }
  assert.deepEqual(errors, []);
  console.log(
    `PASS: ${routes.length} routes, 7 formats, 4 démonstrations, formulaire, menu, reduced motion, 404, aucune erreur navigateur.`,
  );
} finally {
  await browser.close();
}
