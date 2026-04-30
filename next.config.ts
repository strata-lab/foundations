import type { NextConfig } from "next";
import path from "path";
import { withSentryConfig } from "@sentry/nextjs";

const nextConfig: NextConfig = {
  turbopack: {
    root: path.join(__dirname),
  },
};

export default withSentryConfig(nextConfig, {
  // Sentry org/project slug — set these if you use source maps upload
  silent: true,
  sourcemaps: { disable: true },
});
