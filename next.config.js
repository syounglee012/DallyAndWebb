/** @type {import('next').NextConfig} */
const nextRuntimeDotenv = require("next-runtime-dotenv");

const withConfig = nextRuntimeDotenv({
  path: ".env.local",
  public: ["NEXT_PUBLIC_GOOGLE_API", "NEXT_PUBLIC_GOOGLE_RECAPTCHA_SITE_KEY"],
  server: ["NEXT_PUBLIC_GOOGLE_RECAPTCHA_SECRET_KEY", "EMAIL", "PASSWORD"],
});
const nextConfig = {
  reactStrictMode: true,

  compiler: {
    styledComponents: true,
  },
};

module.exports = withConfig({
  nextConfig,
});
