# Strata Consulting — Engineering Playbook

Canonical decisions for this repo. Copy this file to new client repos as a starting template.

## Default stack decisions

| Decision | Choice | Rationale |
|----------|--------|-----------|
| Framework | Next.js App Router | Best-in-class SSR, SEO, and performance primitives on Vercel |
| Language | TypeScript strict | Catches bugs at compile time; required for shadcn/ui |
| Styling | Tailwind CSS v4 | Utility-first, pairs naturally with shadcn |
| UI components | shadcn/ui | Copy-paste components, no black-box library overhead |
| Fonts | next/font/google | Inlined at build time, zero FLIT, no external requests |
| Email | Resend | Best DX, Vercel Marketplace integration, generous free tier |
| Deploy | Vercel Fluid Compute | Node 24, no edge footgun, same price as edge |
| Error tracking | Sentry (optional) | Wire before any client-facing deploy |
| Env management | vercel env pull | Golden source is Vercel; `.env.local` is a pull, never source of truth |

## Project structure

```
src/
  app/                  # App Router pages, layouts, route handlers
    layout.tsx          # Root layout: nav, footer, metadata, JSON-LD
    page.tsx            # Home
    services/page.tsx
    work/page.tsx
    about/page.tsx
    contact/
      page.tsx          # Server component wrapper
      contact-form.tsx  # "use client" form with useActionState
      actions.ts        # "use server" Server Action
    sitemap.ts          # Next.js sitemap convention
    robots.ts           # Next.js robots convention
  components/
    nav.tsx             # Sticky header, mobile menu
    footer.tsx          # Site footer
    ui/                 # shadcn/ui components (generated, do not hand-edit)
  lib/
    utils.ts            # cn() helper from shadcn
docs/
  playbook.md           # This file
```

## SEO checklist (per page)

- [ ] `metadata` export with `title` and `description`
- [ ] Root layout has `metadataBase` set to `NEXT_PUBLIC_SITE_URL`
- [ ] Root layout has JSON-LD Organization schema
- [ ] OG image path is correct (`/og-image.png` in `public/`)
- [ ] `sitemap.ts` includes the new route
- [ ] Semantic heading hierarchy (one `<h1>` per page)
- [ ] All images have `alt` text

## Performance checklist

- [ ] No `"use client"` on leaf components that can be server components
- [ ] Images use `next/image` with explicit width/height
- [ ] Fonts use `next/font` with `display: "swap"`
- [ ] No third-party scripts loaded synchronously

## Accessibility checklist

- [ ] All interactive elements reachable via keyboard
- [ ] Focus styles visible (Tailwind `ring` classes)
- [ ] ARIA labels on icon-only buttons
- [ ] Form fields have associated `<label>` elements
- [ ] Error messages use `role="alert"` and `aria-live="assertive"`
- [ ] Success messages use `role="status"` and `aria-live="polite"`

## Contact form pattern

Server Action (`actions.ts`) with honeypot field checked server-side before Resend call. No CAPTCHA dependency. Pattern:

1. Form has a hidden `name="website"` input (off-screen, `tabIndex={-1}`)
2. Server Action checks: if `website` is filled, silently return `{ status: "success" }`
3. Validate required fields server-side
4. Call `resend.emails.send()`
5. Return typed `ContactState` union to client

## Environment variables convention

- All vars live in Vercel (source of truth)
- Local devs run `vercel env pull .env.local` to sync
- `.env.local.example` documents all required vars with descriptions
- Never commit `.env.local` (it's in `.gitignore`)
- Never commit secrets in code

## Commit convention

```
feat: add services page
fix: correct OG image path
chore: update shadcn button component
docs: add playbook
```

Co-author every commit:
```
Co-Authored-By: Paperclip <noreply@paperclip.ing>
```

## Deployment

1. `vercel` → preview deploy
2. Review in Vercel preview URL
3. `vercel --prod` → production

Vercel auto-deploys main branch on push if project is linked.
