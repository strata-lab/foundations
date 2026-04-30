# Incident Playbook — Client Site Down

What to do when a client site is unavailable or behaving incorrectly in production.

## Severity levels

| Severity | Definition | Response time |
|----------|------------|---------------|
| P1 — Site down | Homepage / core flows return 5xx or timeout | Within 30 min |
| P2 — Core feature broken | Checkout, forms, key pages broken but site loads | Within 2 hours |
| P3 — Degraded experience | Visual/layout issues, non-critical feature broken | Next business day |

## P1 Response steps

1. **Confirm the incident.** Check from a different network/device. Verify via Vercel dashboard → Deployments → check if the production deployment is healthy.

2. **Check recent deploys.** Was there a deploy in the last 30 minutes? If yes:
   - Vercel Dashboard → Deployments → click last known-good deploy → **"Promote to Production"** (instant rollback, no code change needed).
   - Notify the client immediately: "We identified a deployment issue and are rolling back. ETA 5 minutes."

3. **Check Sentry.** Look for a spike in errors matching the incident window. Note the error message and stack trace.

4. **Check Vercel logs.** Dashboard → Functions → Logs. Filter to the last 30 minutes.

5. **If rollback doesn't fix it**, the problem is likely infrastructure or DNS:
   - Check Vercel status page: [vercel-status.com](https://www.vercel-status.com)
   - Check DNS propagation if domain was recently changed.

6. **Communicate every 30 minutes** to the client until resolved. Use plain language: no jargon, no "our engineers are investigating" boilerplate.

7. **Document the incident** in the client's `docs/incidents/YYYY-MM-DD.md` with: timeline, root cause, resolution, follow-up items.

## After the incident

- Root-cause analysis within 24 hours for P1s.
- Create a follow-up issue in Paperclip for any systemic fix needed.
- Review whether this incident could be caught by the [QA checklist](../delivery/qa-checklist.md) or Sentry alerting — tighten both if not.

## Client communication template (P1)

> **Subject: [site name] — service disruption update**
>
> We're aware of an issue affecting [site name] and are actively investigating. We'll send another update in 30 minutes or sooner once we have a resolution.
>
> [Your name], Strata Consult

## Escalation

- No Vercel access to roll back → contact CEO immediately.
- Third-party service outage (Stripe, SendGrid, etc.) → confirm via their status page, notify client, no ETA until vendor resolves.
- Data breach suspected → stop, do not communicate externally without CEO approval. Document privately.
