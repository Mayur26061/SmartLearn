import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async redirects() {
    return [
      // Basic redirect
      {
        source: '/',
        destination: '/courses',
        permanent: true,
      },
    ]
  },
};

export default nextConfig;
