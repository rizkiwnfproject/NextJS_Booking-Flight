import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack: (config) => {
    config.externals.push("@node-rs/bcrypt");

    return config;
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "eftqbpuvxuepcxjpfbfi.supabase.co",
        port: "",
        pathname: "/storage/v1/object/public/**",
      },
    ],
    unoptimized: true,
  },
  experimental: {
    // missingSuspenseWithCSRBailout: false,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
