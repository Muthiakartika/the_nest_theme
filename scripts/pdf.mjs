/**
 * Export every route as its own PDF, for client review.
 *
 *   node scripts/pdf.mjs [baseUrl] [desktop|mobile|both]
 *
 * Each page is exported as a single continuous PDF page sized to the full
 * content height, so no section is cut in half by a paper break. Backgrounds
 * are printed — the whole design is background colour.
 *
 * Files land in ./pdf, numbered in reading order.
 */

import { mkdirSync } from "node:fs";
import { join } from "node:path";
import puppeteer from "puppeteer-core";

const BASE = process.argv[2] || "http://localhost:3212";
const MODE = (process.argv[3] || "desktop").toLowerCase();
const OUT = join(process.cwd(), "pdf");

const CHROME = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";

const ROUTES = [
  ["01-home", "/"],
  ["02-about-our-story", "/about"],
  ["03-our-people-and-care", "/about/people-and-care"],
  ["04-health-hygiene-nutrition", "/about/health-hygiene-nutrition"],
  ["05-our-approach", "/our-approach"],
  ["06-programs", "/programs"],
  ["07-program-infants", "/programs/infants"],
  ["08-program-toddlers", "/programs/toddlers"],
  ["09-program-preschool", "/programs/preschool"],
  ["10-program-kids-club", "/programs/kids-club"],
  ["11-child-safety", "/child-safety"],
  ["12-admissions-enrollment", "/admissions"],
  ["13-faqs", "/faqs"],
  ["14-contact-book-a-tour", "/contact"],
  ["15-privacy-policy", "/privacy-policy"],
  ["16-terms-of-use", "/terms-of-use"],
  ["17-404-not-found", "/page-that-does-not-exist"],
];

const VIEWPORTS =
  MODE === "mobile"
    ? [{ tag: "mobile", width: 390, height: 844 }]
    : MODE === "both"
      ? [
          { tag: "desktop", width: 1440, height: 900 },
          { tag: "mobile", width: 390, height: 844 },
        ]
      : [{ tag: "desktop", width: 1440, height: 900 }];

mkdirSync(OUT, { recursive: true });

const browser = await puppeteer.launch({
  executablePath: CHROME,
  headless: "new",
  args: ["--hide-scrollbars"],
});

for (const vp of VIEWPORTS) {
  const page = await browser.newPage();
  await page.setViewport({ width: vp.width, height: vp.height, deviceScaleFactor: 1 });

  for (const [name, route] of ROUTES) {
    await page.goto(BASE + route, { waitUntil: "networkidle0", timeout: 60000 });

    // Walk the page so every scroll-reveal has fired before we print,
    // otherwise stitched rules and motif rows export half-drawn.
    await page.evaluate(async () => {
      const step = Math.round(innerHeight * 0.6);
      for (let y = 0; y < document.body.scrollHeight; y += step) {
        scrollTo(0, y);
        await new Promise((r) => requestAnimationFrame(() => setTimeout(r, 200)));
      }
      scrollTo(0, 0);
      await new Promise((r) => setTimeout(r, 1200));
    });

    const height = await page.evaluate(
      () => document.documentElement.scrollHeight
    );

    // print media would drop the sticky header and some backgrounds; the
    // design is meant to be seen as it renders on screen.
    await page.emulateMediaType("screen");

    const suffix = VIEWPORTS.length > 1 ? `-${vp.tag}` : "";
    const file = join(OUT, `${name}${suffix}.pdf`);

    await page.pdf({
      path: file,
      printBackground: true,
      width: `${vp.width}px`,
      height: `${height + 2}px`,
      pageRanges: "1",
      margin: { top: 0, right: 0, bottom: 0, left: 0 },
    });

    process.stdout.write(`  ${name}${suffix}.pdf  (${vp.width}×${height})\n`);
  }

  await page.close();
}

await browser.close();
console.log(`\n${ROUTES.length * VIEWPORTS.length} PDFs written to ${OUT}`);
