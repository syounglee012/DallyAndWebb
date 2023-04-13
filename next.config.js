/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {

  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/home',
        permanent: true,
      },
    ]
  },
  compiler: {
    styledComponents: true,
  }
};

module.exports = nextConfig;
