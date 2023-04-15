/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {},

  compiler: {
    styledComponents: true,
  },
};

module.exports = {
  nextConfig,
  images: {
    unoptimized: true,
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
};
