import * as Sentry from "@sentry/nextjs";

export async function GET() {
  const eventId = Sentry.captureMessage("Sentry test event — foundations repo wired successfully", "info");
  return Response.json({ ok: true, sentryEventId: eventId });
}
