/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  /**
   * `next dev` and `next build` write incompatible manifests, so sharing one
   * output directory means whichever ran last breaks the other — the dev
   * server starts throwing "Cannot find module" 500s.
   *
   * Production builds therefore go to their own directory (`npm run preview`
   * sets NEXT_DIST), leaving `.next` to the dev server alone. Run both at
   * once safely.
   */
  distDir: process.env.NEXT_DIST || ".next",
};

export default nextConfig;
