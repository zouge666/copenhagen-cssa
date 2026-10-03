import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  devIndicators: false,
  agentRules: false,
  turbopack: { root: process.cwd() },
  async redirects() {
    return [
      { source: "/", destination: "/zh", permanent: false },
      {
        source: "/:page(about|events|guide|contact|join)",
        destination: "/zh/:page",
        permanent: false,
      },
      { source: "/events/:slug", destination: "/zh/events/:slug", permanent: false },
    ];
  },
};

export default nextConfig;
