import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async rewrites() {
    return {
      beforeFiles: [
        {
          // Intercepts localhost:3000/admin and forwards to Laravel
          source: '/admin/:path*',
          destination: 'http://127.0.0.1:8000/admin/:path*', 
        },
        {
          // Intercepts Laravel's Vite assets
          source: '/build/:path*',
          destination: 'http://127.0.0.1:8000/build/:path*',
        },
      ],
    };
  },
};

export default nextConfig;
