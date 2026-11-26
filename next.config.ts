import type { NextConfig } from "next";

// Static export: `next build` writes plain HTML/CSS/JS to out/, which a tiny Caddy
// container serves on the EC2 box (see deploy/README.md). No Node server in production.
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
