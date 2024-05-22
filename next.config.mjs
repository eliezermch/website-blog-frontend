/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.placeholders.dev',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
