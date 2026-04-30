# Default Stack

Strata's opinionated defaults for every client engagement. These are the decisions we have already made — don't re-litigate them unless you have a strong reason and document the override in the client's `docs/` folder.

## Core choices

| Layer | Choice | Rationale |
|-------|--------|-----------|
| Framework | Next.js App Router | Best-in-class SSR, SEO, and performance primitives on Vercel |
| Language | TypeScript (strict) | Catches bugs at compile time; required for shadcn/ui |
| Styling | Tailwind CSS v4 | Utility-first, pairs naturally with shadcn |
| UI components | shadcn/ui | Copy-paste components, no black-box library overhead |
| Fonts | `next/font/google` | Inlined at build time, zero FLIT, no external requests |
| Deploy | Vercel (strata-labs team) | Node 24, Fluid Compute, preview per branch |
| Error tracking | Sentry | Wire before any client-facing deploy |
| Env management | `vercel env pull` | Vercel is the golden source; `.env.local` is a pull, never committed |
| AI features | Vercel AI SDK + AI Gateway | `"provider/model"` strings; default to `anthropic/claude-sonnet-4-6` |

## Quality non-negotiables

- Lighthouse performance ≥ 95 on landing pages.
- WCAG AA accessibility — tested, not assumed.
- SEO basics: `<title>`, OG tags, `sitemap.xml`, `robots.txt`, structured data.
- Real error tracking (Sentry) before any client-facing deploy.

## Client-specific overrides

When a client engagement requires a stack deviation (e.g. headless CMS, different auth provider), document the override in the client repo under `docs/stack-overrides.md` with a one-line reason. This keeps the client repo's decisions auditable without muddying this reference.
