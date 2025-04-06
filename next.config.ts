import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  devIndicators: false,
  /* config options here */
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@": path.resolve(__dirname, "src"),
    };
    return config;
  },
  eslint: {
    // ESLint 검사를 빌드 시간에 사용할지 결정
    ignoreDuringBuilds: true,
  },
  typescript: {
    // TypeScript 타입 검사를 빌드 시간에 사용할지 결정
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'media.githubusercontent.com',
        pathname: '/media/**',
      },
    ],
  },
};

export default nextConfig;
