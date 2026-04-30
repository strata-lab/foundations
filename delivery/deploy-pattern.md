# Deploy Pattern

How Strata deploys client sites on Vercel.

## Standard setup

- **Team:** `strata-labs` on Vercel. All client projects live here.
- **Branch model:** every push to any branch creates a preview deployment; merge to `main` triggers production.
- **Node version:** 24 LTS (Fluid Compute default). Do not pin lower.
- **Runtime:** Fluid Compute. No Edge Runtime unless a specific, documented reason exists.

## Preview vs production

| Environment | When | URL pattern |
|-------------|------|-------------|
| Preview | Push to any branch | `<project>-<hash>-strata-labs.vercel.app` |
| Production | Merge to `main` | Custom domain or `<project>.vercel.app` |

All new features should be verified on a preview URL before merging to `main`.

## Rolling releases (gradual rollout)

For high-traffic clients, use Vercel Rolling Releases to canary a deploy to 5–10% of traffic before full promotion. Enable in the Vercel project settings under Deployments → Rolling Releases. Only worth the overhead for client sites with meaningful traffic (>1k daily sessions).

## Manual deploy commands

```bash
# Preview
vercel

# Production
vercel --prod
```

## Custom domains

1. Add domain in Vercel project → Domains.
2. Update DNS at registrar: `CNAME` to `cname.vercel-dns.com` (or `A` record to Vercel IP for apex domains).
3. Vercel auto-provisions TLS.

## Rollback

If a bad production deploy goes out:

1. Vercel Dashboard → Deployments → click the last known-good deploy → "Promote to Production".
2. Notify the client immediately with an ETA for the fix.
3. Open a `fix/` branch to address root cause; do not hotfix directly to `main`.

## Vercel CLI reference

See [`delivery/env-management.md`](env-management.md) for env var commands.
See [`ops/incident-playbook.md`](../ops/incident-playbook.md) for escalation path when a deploy causes a live outage.
