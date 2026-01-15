/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'plus.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'images.pexels.com', // <--- This fixes your error
      },
      {
        protocol: 'https',
        hostname: 'cdn.pexels.com',
      },
    ],
  },
};

export default nextConfig;