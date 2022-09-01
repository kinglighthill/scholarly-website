/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['play-lh.googleusercontent.com', 'firebasestorage.googleapis.com'],
  }
}

module.exports = nextConfig
