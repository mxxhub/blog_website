import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['dcvrbapvsyfjctzxxdqg.supabase.co'],
    minimumCacheTTL: 600,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'dcvrbapvsyfjctzxxdqg.supabase.co',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/home',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
