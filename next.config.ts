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
        source: '/produits',
        destination: '/work',
        permanent: true,
      },
      {
        source: '/catalogue',
        destination: '/work',
        permanent: true,
      },
      {
        source: '/materiel-informatique',
        destination: '/expertise',
        permanent: true,
      },
      {
        source: '/services',
        destination: '/expertise',
        permanent: true,
      },
      {
        source: '/solutions',
        destination: '/work',
        permanent: true,
      },
      {
        source: '/realisations',
        destination: '/work',
        permanent: true,
      },
      {
        source: '/a-propos',
        destination: '/studio',
        permanent: true,
      },
      {
        source: '/developpement',
        destination: '/expertise',
        permanent: true,
      },
      {
        source: '/panier',
        destination: '/contact',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
