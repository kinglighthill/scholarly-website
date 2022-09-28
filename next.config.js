/** @type {import('next').NextConfig} */
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
})

const nextConfig = withBundleAnalyzer({
  reactStrictMode: true,
  images: {
    domains: ['play-lh.googleusercontent.com', 'firebasestorage.googleapis.com', 'blog.scholarly.africa'],
  },
  experimental: {
    scrollRestoration: true,
  }
})

module.exports = nextConfig
