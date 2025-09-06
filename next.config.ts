import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['upload.wikimedia.org'], // allow this hostname
  }
};

export default nextConfig;
