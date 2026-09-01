/**
 * Screenshot harness for design review.
 *
 * Captures every route at desktop and mobile widths, full page, into
 * ./screens. Dev-only — not part of the site build.
 *
 *   node scripts/shoot.mjs [baseUrl]
 */

import { mkdirSync, rmSync } from "node:fs";
import { join } from "node:path";
import puppeteer from "puppeteer-core";

const BASE = process.argv[2] || "http://localhost:3212";
const OUT = join(process.cwd(), "screens");

const CHROME =
  "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";

const ROUTES = [
  ["home", "/"],
  ["about", "/about"],
  ["people", "/about/people-and-care"],
  ["health", "/about/health-hygiene-nutrition"],
  ["approach", "/our-approach"],
  ["programs", "/programs"],
  ["program-infants", "/programs/infants"],
  ["program-preschool", "/programs/preschool"],
  ["program-kidsclub", "/programs/kids-club"],
  ["safety", "/child-safety"],
  ["admissions", "/admissions"],
  ["faqs", "/faqs"],
  ["contact", "/contact"],
  ["privacy", "/privacy-policy"],
  ["notfound", "/nope"],
];

const VIEWPORTS = [
  { tag: "desktop", width: 1440, height: 900, dsf: 1 },
  { tag: "mobile", width: 390, height: 844, dsf: 1 },
];

rmSync(OUT, { recursive: true, force: true });
mkdirSync(OUT, { recursive: true });

const browser = await puppeteer.launch({
  executablePath: CHROME,
  headless: "new",
  args: ["--hide-scrollbars", "--force-device-scale-factor=1"],
});

const only = process.env.ONLY ? process.env.ONLY.split(",") : null;

for (const vp of VIEWPORTS) {
  const page = await browser.newPage();
  await page.setViewport({
    width: vp.width,
    height: vp.height,
    deviceScaleFactor: vp.dsf,
    isMobile: vp.tag === "mobile",
    hasTouch: vp.tag === "mobile",
  });

  for (const [name, route] of ROUTES) {
    if (only && !only.includes(name)) continue;
    await page.goto(BASE + route, { waitUntil: "networkidle0", timeout: 45000 });

    // Walk the page so every IntersectionObserver fires. Observer callbacks
    // are coalesced, so scripted scrolling has to pause long enough at each
    // stop for the notification to be delivered — jumping the page in one go
    // leaves most sections un-revealed.
    await page.evaluate(async () => {
      const step = Math.round(innerHeight * 0.6);
      for (let y = 0; y < document.body.scrollHeight; y += step) {
        scrollTo(0, y);
        await new Promise((r) => requestAnimationFrame(() => setTimeout(r, 220)));
      }
      scrollTo(0, 0);
      await new Promise((r) => setTimeout(r, 1400));
    });

    await page.screenshot({
      path: join(OUT, `${name}-${vp.tag}.png`),
      fullPage: true,
    });
    process.stdout.write(`  ${name}-${vp.tag}\n`);
  }

  await page.close();
}

await browser.close();
console.log(`\nWritten to ${OUT}`);
