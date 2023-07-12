/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["cdn.imagin.studio"],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  env: {
    RAPID_API_KEY: process.env.RAPID_API_KEY,
  },
};

module.exports = nextConfig;
