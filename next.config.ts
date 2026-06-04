import createNextIntlPlugin from "next-intl/plugin"
import type { NextConfig } from "next"

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts")

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.mickiesoft.lk",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "mickiesoft.lk",
        pathname: "/**",
      },
      {
        protocol: "http",
        hostname: "localhost",
        port: "8000",
        pathname: "/**",
      },
    ],
  },
  outputFileTracingIncludes: {
    '/api/**/*': ['./data/**/*'],
    // Sitemap reads blog JSON directly — include data dir for serverless tracing
    '/sitemap': ['./data/blog/list/**/*'],
  },
}

export default withNextIntl(nextConfig)
