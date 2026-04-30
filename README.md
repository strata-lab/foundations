# Strata Foundations

The engineering team's reference manual. This is not a deployable app — it's a living collection of how-we-work documents covering our default stack, delivery process, and operational playbooks.

Every new client engagement starts here. New team members read this on day one.

---

## Stack

Decisions we've already made — don't relitigate them.

| Doc | What it covers |
|-----|---------------|
| [stack/default-stack.md](stack/default-stack.md) | Our default technology choices: Next.js App Router, TypeScript, Tailwind, shadcn/ui, Vercel, Sentry |
| [stack/why-not.md](stack/why-not.md) | Rejected alternatives and why, so we don't keep having the same conversation |

---

## Delivery

How we build and ship.

| Doc | What it covers |
|-----|---------------|
| [delivery/repo-template.md](delivery/repo-template.md) | Step-by-step: how to start a new client repo, naming conventions, git workflow |
| [delivery/deploy-pattern.md](delivery/deploy-pattern.md) | Vercel project setup, preview/production branches, rollbacks, custom domains |
| [delivery/env-management.md](delivery/env-management.md) | `vercel env pull`, `.env.example` conventions, per-environment scoping, OIDC |
| [delivery/observability.md](delivery/observability.md) | When to wire Sentry, what to monitor, alert thresholds |
| [delivery/qa-checklist.md](delivery/qa-checklist.md) | Pre-launch checklist: SEO, performance, accessibility, content, security |

---

## Ops

What happens after launch.

| Doc | What it covers |
|-----|---------------|
| [ops/incident-playbook.md](ops/incident-playbook.md) | What to do when a client site goes down, severity levels, communication templates |
| [ops/handoff-package.md](ops/handoff-package.md) | What we hand to a client at end of engagement: access, docs, handoff call checklist |

---

## Contributing

These are living documents. When you make a decision on a client project that contradicts a default here, either:
- Update this repo if the decision should become the new default, **or**
- Document the override in the client repo under `docs/stack-overrides.md` if it's client-specific.

Changes follow the same process as code: PR against `main`, at least one review.
