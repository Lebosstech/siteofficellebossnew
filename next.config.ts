import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "play-lh.googleusercontent.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "mongestionnairepro.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "lebosstech.ci",
        pathname: "/**",
      },
    ],
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=(self)",
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/produits",
        destination: "/realisations",
        permanent: true,
      },
      {
        source: "/catalogue",
        destination: "/realisations",
        permanent: true,
      },
      {
        source: "/materiel-informatique",
        destination: "/expertises",
        permanent: true,
      },
      {
        source: "/services",
        destination: "/expertises",
        permanent: true,
      },
      {
        source: "/solutions",
        destination: "/realisations",
        permanent: true,
      },

      {
        source: "/developpement",
        destination: "/expertises",
        permanent: true,
      },
      {
        source: "/panier",
        destination: "/contact",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
