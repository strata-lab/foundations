import * as Sentry from "@sentry/nextjs";
import { NextResponse } from "next/server";

// GET /api/sentry-test — sends a test event to Sentry.
// Call once after setting SENTRY_DSN in Vercel env to verify the pipeline.
// Remove or protect this route before going live.
export async function GET() {
  const eventId = Sentry.captureMessage("Sentry test event — foundations repo", {
    level: "info",
    tags: { test: "true" },
  });
  return NextResponse.json({ ok: true, sentryEventId: eventId ?? null });
}
