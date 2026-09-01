/**
 * Production preview that cannot break `npm run dev`.
 *
 *   node scripts/preview.mjs [port]        build, then serve
 *   node scripts/preview.mjs [port] --serve  serve an existing build
 *
 * Builds into `.next-prod` (via NEXT_DIST, see next.config.mjs) so the dev
 * server keeps `.next` to itself. Cross-platform — no shell env syntax, no
 * extra dependency.
 */

import { spawn } from "node:child_process";

const args = process.argv.slice(2);
const port = args.find((a) => /^\d+$/.test(a)) || "3212";
const serveOnly = args.includes("--serve");

const env = { ...process.env, NEXT_DIST: ".next-prod" };

function run(cmdArgs) {
  return new Promise((resolve, reject) => {
    const child = spawn("npx", cmdArgs, {
      env,
      stdio: "inherit",
      shell: process.platform === "win32",
    });
    child.on("exit", (code) =>
      code === 0 ? resolve() : reject(new Error(`exit ${code}`))
    );
    child.on("error", reject);
  });
}

if (!serveOnly) {
  console.log("Building into .next-prod …");
  await run(["next", "build"]);
}

console.log(`\nServing production build on http://localhost:${port}\n`);
await run(["next", "start", "-p", port]);
