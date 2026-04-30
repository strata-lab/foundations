# Strata Foundations

Engineering baseline template for Strata Consult client engagements.
Every new client repo is forked from this one so the stack decisions don't need to be re-made.

## Stack

| Layer | Choice |
|-------|--------|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript (strict) |
| Styling | Tailwind CSS v4 |
| UI components | shadcn/ui |
| Error tracking | Sentry (`@sentry/nextjs` v10) |
| Hosting | Vercel (strata-labs team) |
| Package manager | npm |

## Prerequisites

- Node.js 22+
- npm 10+
- [Vercel CLI](https://vercel.com/docs/cli): `npm i -g vercel`

## Running locally

```bash
# 1. Install dependencies
npm install

# 2. Pull environment variables from Vercel (requires Vercel access)
vercel env pull .env.local

# 3. Start dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

If you don't have Vercel access yet, copy `.env.example` to `.env.local` and fill in the values manually.

## Environment variables

See `.env.example` for all variables and their descriptions.
Never commit `.env.local` — it's in `.gitignore`.

## Deploying

Vercel is connected to this repo. Pushes to **any branch** create preview deployments.
Merges to **`main`** trigger a production deployment automatically.

To deploy manually:

```bash
# Preview
vercel

# Production
vercel --prod
```

## Sentry test event

Once `SENTRY_DSN` is set in Vercel env vars, hit this endpoint to fire a test event:

```
GET /api/sentry-test
```

Returns `{ ok: true, sentryEventId: "..." }` and sends a message-level event to Sentry.

## Project structure

```
app/                 # Next.js App Router pages and API routes
  api/sentry-test/   # Sentry connectivity test endpoint
components/ui/       # shadcn/ui components
docs/                # Architecture decisions and playbooks
lib/                 # Shared utilities
public/              # Static assets
sentry.*.config.ts   # Sentry SDK init (client / server / edge)
instrumentation.ts   # Next.js instrumentation entry point
.env.example         # Template for required environment variables
```
