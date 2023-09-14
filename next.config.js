/** @type {import('next').NextConfig} */
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
})

const nextConfig = withBundleAnalyzer({
  reactStrictMode: true,
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
  images: {
    domains: ['play-lh.googleusercontent.com', 'firebasestorage.googleapis.com', 'blog.scholarly.africa'],
  },
  experimental: {
    scrollRestoration: true,
  },
  async redirects() {
    return [
      {
        source: '/jamb',
        destination: '/jamb-utme',
        permanent: true
      },
      {
        source: '/waec',
        destination: '/waec-ssce',
        permanent: true
      },
    ]
  }
})

module.exports = nextConfig
