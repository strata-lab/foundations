# Engineering Playbook

Default decisions for every Strata client engagement.
When starting a new client repo, fork `strata-lab/foundations` and update this file with client-specific overrides.

---

## Stack decisions

| Decision | Choice | Rationale |
|----------|--------|-----------|
| Framework | Next.js App Router | Best-in-class SSR, SEO, and performance primitives on Vercel |
| Language | TypeScript strict | Catches bugs at compile time; required for shadcn/ui |
| Styling | Tailwind CSS v4 | Utility-first, pairs naturally with shadcn |
| UI components | shadcn/ui | Copy-paste components, no black-box library overhead |
| Fonts | next/font/google | Inlined at build time, zero FLIT, no external requests |
| Deploy | Vercel (strata-labs team) | Node 24, Fluid Compute, preview per branch |
| Error tracking | Sentry | Wire before any client-facing deploy |
| Env management | vercel env pull | Golden source is Vercel; `.env.local` is a pull, never source of truth |

---

## Environment management

1. **Source of truth:** Vercel project settings (strata-labs team dashboard).
2. **Local development:** `vercel env pull .env.local` syncs all variables.
3. **New variables:** add via `vercel env add` or the Vercel dashboard, then commit an updated `.env.example` entry with a description.
4. **Secrets:** never commit to git. Never echo in CI logs.
5. **Per-environment:** use Vercel's environment scoping (Development / Preview / Production).
6. **SENTRY_DSN:** stored as server-only env var; `next.config.ts` re-exposes it as `NEXT_PUBLIC_SENTRY_DSN` so a single Vercel var covers both runtimes.

---

## Git workflow

- `main` is production — always deployable.
- Feature branches: `feat/<short-description>`.
- Bug fixes: `fix/<short-description>`.
- PRs required for all changes to `main`.
- Squash merge into `main` to keep history clean.
- Commit messages follow Conventional Commits: `feat:`, `fix:`, `chore:`, `docs:`.
- Co-author every commit: `Co-Authored-By: Paperclip <noreply@paperclip.ing>`

---

## Starting a new client repo

1. Fork `strata-lab/foundations` to `strata-lab/<client>`.
2. Update `README.md` title and stack table if any choices differ.
3. Update this `docs/playbook.md` with client-specific overrides.
4. Run `vercel link` to create a new Vercel project under the `strata-labs` team.
5. Add required env vars via `vercel env add`.
6. Create Sentry project, add DSN to Vercel env as `SENTRY_DSN`.
7. Verify a preview deploy succeeds and `/api/sentry-test` returns `ok: true`.

---

## SEO checklist (per page)

- [ ] `metadata` export with `title` and `description`
- [ ] Root layout has `metadataBase` set to site URL env var
- [ ] OG image path is correct (`/og-image.png` in `public/`)
- [ ] Semantic heading hierarchy (one `<h1>` per page)
- [ ] All images have `alt` text

---

## Performance checklist

- [ ] No `"use client"` on leaf components that can be server components
- [ ] Images use `next/image` with explicit width/height
- [ ] Fonts use `next/font` with `display: "swap"`
- [ ] No third-party scripts loaded synchronously

---

## Accessibility checklist

- [ ] All interactive elements reachable via keyboard
- [ ] Focus styles visible (Tailwind `ring` classes)
- [ ] ARIA labels on icon-only buttons
- [ ] Form fields have associated `<label>` elements
- [ ] Error messages use `role="alert"` and `aria-live="assertive"`

---

## Code review checklist

- [ ] TypeScript errors: `npm run build` passes cleanly.
- [ ] No hardcoded secrets or env values.
- [ ] New env vars documented in `.env.example`.
- [ ] Sentry error boundaries in place for user-facing errors.
- [ ] Accessible: semantic HTML, ARIA labels on interactive elements.
