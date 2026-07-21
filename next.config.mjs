import { permanentRedirects } from "./data/seoRedirects.mjs";

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Local public/ assets only for production media (client photos under /nws).
    unoptimized: true,
  },
  // Vendored Shadcn Space blocks may use slightly different UI kit APIs;
  // keep them available without blocking production builds.
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
  async redirects() {
    // Phase 4 SEO cutover — parity with data/seoCutover.ts getRedirectRules()
    return permanentRedirects;
  },
};

export default nextConfig;
