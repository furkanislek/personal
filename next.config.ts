import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'qqhkuxtkfzejqnldouzo.supabase.co',
        pathname: '/storage/v1/object/public/**',
      },
      {
        protocol: 'https',
        hostname: 'r.resimlink.com',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
