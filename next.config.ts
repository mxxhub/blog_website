import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['dcvrbapvsyfjctzxxdqg.supabase.co'],
    minimumCacheTTL: 600,
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
