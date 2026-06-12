import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/rank-sarthi",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  turbopack: {
    root: process.cwd(),
  },
};

export default nextConfig;
