import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/photo-1511671782779-c97d3d27a1d4",
      },
      {
        protocol: "https",
        hostname: "i.ytimg.com",
        pathname: "/vi/**",
      },
      ...[
        "photo-1478720568477-152d9b164e26",
        "photo-1489599849927-2ee91cede3ba",
        "photo-1560066984-138dadb4c035",
        "photo-1507238691740-187a5b1d37b8",
        "photo-1551288049-bebda4e38f71",
        "photo-1460925895917-afdab827c52f",
        "photo-1556742049-0a67d934f82d",
        "photo-1618005182384-a83a8bd57fbe",
        "photo-1493225457124-a3eb161ffa5f",
        "photo-1516280440614-37939bbacd81",
        "photo-1510915361894-db8b60106cb1",
        "photo-1511379938547-c1f69419868d",
        "photo-1506157786151-b8491531f063",
        "photo-1516450360452-9312f5e86fc7",
      ].map((photo) => ({
        protocol: "https" as const,
        hostname: "images.unsplash.com",
        pathname: `/${photo}`,
      })),
    ],
  },
  experimental: {
    agentFeedback: true,
  },
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
