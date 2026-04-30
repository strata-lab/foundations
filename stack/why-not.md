# Why Not — Rejected Stacks

Decisions we have considered and rejected, so we don't relitigate them.

## Remix instead of Next.js

Remix has strong data-loading primitives but Vercel's first-class Next.js integration (ISR, PPR, Image Optimization, AI SDK) gives us more leverage on our target platforms. Revisit if a client project is overwhelmingly form-heavy with complex nested mutations.

## Astro instead of Next.js

Astro is excellent for mostly-static marketing sites and beats Next.js on bundle size. We may reach for it for pure content sites with no auth or dynamic data, but the island-only approach makes it awkward when we need server actions or authenticated routes. We'd need two paradigms in the team's head. Not worth the split.

## Prisma + PlanetScale / Neon directly

We don't own a database abstraction layer across clients. Each client project should use Vercel Marketplace storage (Neon Postgres via `@neondatabase/serverless`, Upstash Redis for cache) rather than a pooled setup we manage. Reduces our operational surface.

## Styled Components / Emotion instead of Tailwind

We've used both. Tailwind's utility approach scales better across part-time contributors and paired AI tooling. The "hard to read" argument doesn't hold once you're past the learning curve. Not going back.

## Contentful / Prismic for all CMS needs

Too expensive for small Caribbean business clients. We default to no-CMS (content in code) or offer Sanity (open-source tier + Vercel integration) for clients who need an editor. Always evaluate against the client's monthly revenue before recommending a paid CMS tier.

## Vercel Edge Runtime

The Edge runtime has compatibility limits (no full Node.js). Fluid Compute runs in the same regions, same price, and allows full Node. Default to Fluid Compute; only use Edge if you need <1ms cold start in middleware and have confirmed no incompatible Node APIs are needed.
