import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'play-lh.googleusercontent.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'mongestionnairepro.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'lebosstech.ci',
        pathname: '/**',
      },
    ],
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=(self)',
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      {
        source: '/categories/imprimantes-360',
        destination: '/categories/imprimante',
        permanent: true,
      },
      {
        source: '/marque/dell-737',
        destination: '/marque/dell',
        permanent: true,
      },
      {
        source: '/marque/dell-937',
        destination: '/marque/dell',
        permanent: true,
      },
      {
        source: '/mentions-legales',
        destination: '/cgu#art-1',
        permanent: true,
      },
      {
        source: '/catalogue',
        destination: '/produits',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
