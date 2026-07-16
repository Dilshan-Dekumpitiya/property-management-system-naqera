import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async rewrites() {
    const backendUrl = process.env.BACKEND_URL;
    return {
      beforeFiles: [
        {
        source: '/admin',
        destination: `${backendUrl}/admin`,
        },
        {
          source: '/admin/:path*',
          destination: `${backendUrl}/admin/:path*`,
        },
        {
          source: '/build/:path*',
          destination: `${backendUrl}/build/:path*`,
        },
        {
          source: '/css/:path*',
          destination: `${backendUrl}/css/:path*`,
        },
        {
          source: '/js/:path*',
          destination: `${backendUrl}/js/:path*`,
        }
      ],
    };
  },
};

export default nextConfig;
