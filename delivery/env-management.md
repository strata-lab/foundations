# Environment Management

How we handle environment variables across Vercel, local dev, and CI.

## Golden rule

**Vercel project settings are the source of truth.** `.env.local` is a local pull, never a source file. Never commit secrets to git.

## Daily workflow

```bash
# Pull all vars from Vercel to your local .env.local
vercel env pull .env.local

# Add a new variable (prompts for value and which environments)
vercel env add MY_NEW_VAR

# List current variables
vercel env ls
```

## `.env.example`

Every repo has a committed `.env.example` listing every variable with a short description and an example value (never a real secret):

```env
# URL of the deployed site — used for absolute URLs in OG tags, sitemaps, etc.
NEXT_PUBLIC_SITE_URL=https://example.com

# Sentry DSN — set before first client-facing deploy
SENTRY_DSN=https://abc123@o0.ingest.sentry.io/0
```

When adding a new variable: add an entry to `.env.example` first, then `vercel env add`.

## Per-environment scoping

Vercel supports three scopes. Use them:

| Scope | Purpose |
|-------|---------|
| Production | Live site. Real API keys, real DSNs. |
| Preview | All branch deploys. Can use test/sandbox keys. |
| Development | Local dev via `vercel env pull`. |

For Sentry, use the same DSN for Production and Preview so preview-deploy errors show up in Sentry. Use a separate project or environment for Development.

## OIDC (no long-lived keys in CI)

For Vercel → external service auth in GitHub Actions, prefer OIDC tokens over static secrets. Vercel generates OIDC tokens natively; configure the external service to accept them. Avoids rotating long-lived secrets.

## What never goes in git

- `.env.local`
- Any file matching `.env.*.local`
- Database connection strings
- Payment provider API keys
- Sentry DSNs
- OAuth client secrets

These are in `.gitignore` by default on every Next.js scaffold. Double-check before any `git add .`.
