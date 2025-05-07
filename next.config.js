/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['img1.wsimg.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img1.wsimg.com',
        pathname: '/**',
      },
    ],
  },
}

module.exports = nextConfig