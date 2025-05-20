/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  experimental: {
    optimizeServerComponents: true,
    serverMinification: true,
  },
  // Add automatic performance optimization
  productionBrowserSourceMaps: false,
  poweredByHeader: false,
  compress: true,
}

module.exports = nextConfig
