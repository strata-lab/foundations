import type { NextConfig } from "next";
import path from "path";
import { withSentryConfig } from "@sentry/nextjs";

const nextConfig: NextConfig = {
  turbopack: {
    root: path.join(__dirname),
  },
  // Re-expose SENTRY_DSN (server-only var) to the client bundle.
  env: {
    NEXT_PUBLIC_SENTRY_DSN: process.env.SENTRY_DSN ?? "",
  },
};

export default withSentryConfig(nextConfig, {
  // org/project/authToken read from SENTRY_ORG, SENTRY_PROJECT, SENTRY_AUTH_TOKEN env vars.
  // Source maps upload only when SENTRY_AUTH_TOKEN is present (i.e. in Vercel production).
  sourcemaps: {
    disable: !process.env.SENTRY_AUTH_TOKEN,
    deleteSourcemapsAfterUpload: true,
  },
  silent: !process.env.CI,
});
