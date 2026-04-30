# Observability

What we monitor, when to wire it up, and what thresholds trigger action.

## Sentry

Wire Sentry before any client-facing deploy. Non-negotiable.

### Setup

1. Create a Sentry project (or add to the Strata Sentry org if one exists) at [sentry.io](https://sentry.io).
2. Install the SDK: `npm install @sentry/nextjs`.
3. Run the Sentry wizard: `npx @sentry/wizard@latest -i nextjs`. It writes `sentry.*.config.ts`, patches `next.config.ts`, and adds `instrumentation.ts`.
4. Add environment variables to Vercel:

   ```
   SENTRY_DSN                # the project DSN
   SENTRY_AUTH_TOKEN         # for source map uploads (from Sentry API keys)
   SENTRY_ORG                # your Sentry org slug
   SENTRY_PROJECT            # your Sentry project slug
   ```

5. Verify with a test event:

   ```
   GET /api/sentry-test
   ```

   Returns `{ ok: true, sentryEventId: "..." }` when wired correctly.

### What to capture

- Unhandled exceptions (automatic via SDK).
- User-facing error boundaries — wrap top-level layouts.
- Failed payment webhooks / external API failures — explicit `Sentry.captureException`.
- Performance: enable tracing (`tracesSampleRate: 0.1` in production, `1.0` in dev).

### Alert thresholds (defaults — tune per client)

| Signal | Threshold | Action |
|--------|-----------|--------|
| New unhandled exception | First occurrence | Notify on-call |
| Error rate spike | > 5× baseline in 5 min | Page on-call |
| P95 response time | > 3 s on key routes | Investigate next business day |
| Apdex score | < 0.8 | Review in next sprint |

## Vercel logs

Vercel dashboard → Functions → Logs. Use for quick triage on serverless function errors. For structured querying, export to a log drain (Datadog, Axiom, or Logtail are all available in the Vercel Marketplace).

## When to add more

This baseline (Sentry + Vercel logs) is enough for sites under ~10k monthly active users. Once a client's site crosses that threshold or has SLA commitments, add:

- Uptime monitoring (Better Uptime or Vercel's built-in health checks).
- Real-user monitoring (Sentry Performance or Vercel Speed Insights).
- Log drain to a searchable service.

Document any additions in the client repo's `docs/` folder.
