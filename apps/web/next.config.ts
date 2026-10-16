// apps/web/next.config.ts
//
// Settings for Next.js, the tool that builds and serves the web app.
// "transpilePackages" tells Next.js to also compile our shared toolbox
// (packages/shared), because it is written in TypeScript and not pre-built.

import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  transpilePackages: ['@garmentpulse/shared'],
};

export default nextConfig;
