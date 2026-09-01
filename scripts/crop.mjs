/**
 * Slice a tall full-page capture into readable, overlapping sections.
 *   node scripts/crop.mjs screens/home-mobile.png 900
 */
import sharp from "sharp";
import { join, basename, dirname } from "node:path";

const file = process.argv[2];
const sliceH = Number(process.argv[3] || 1000);
const img = sharp(file);
const { width, height } = await img.metadata();
const name = basename(file, ".png");
const dir = dirname(file);

let i = 0;
for (let y = 0; y < height; y += sliceH) {
  const h = Math.min(sliceH, height - y);
  if (h < 60) break;
  await sharp(file)
    .extract({ left: 0, top: y, width, height: h })
    .toFile(join(dir, `${name}--s${String(++i).padStart(2, "0")}.png`));
  process.stdout.write(`${name}--s${String(i).padStart(2, "0")}.png  (y=${y}, h=${h})\n`);
}
