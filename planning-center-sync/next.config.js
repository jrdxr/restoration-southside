/** @type {import('next').NextConfig} */
const nextConfig = {
  // Required for Webflow Cloud deployment
  basePath: process.env.BASE_PATH || '',
  assetPrefix: process.env.ASSETS_PREFIX || '',
}

module.exports = nextConfig
