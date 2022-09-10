/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['play-lh.googleusercontent.com', 'firebasestorage.googleapis.com', 'blog.scholarly.africa'],
  }
}

module.exports = nextConfig
