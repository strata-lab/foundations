# QA Checklist — Pre-Launch

Run this before handing a site to a client or promoting to production for the first time. Check every item; don't skip categories.

## SEO

- [ ] Every page has a unique `<title>` and `<meta name="description">` via Next.js `metadata` export.
- [ ] Root layout has `metadataBase` pointing to the production URL env var.
- [ ] OG image exists at `/og-image.png` (or via `opengraph-image.tsx`) and renders correctly on social preview tools.
- [ ] Semantic heading hierarchy — one `<h1>` per page, `<h2>`/`<h3>` used consistently.
- [ ] All images have `alt` text.
- [ ] `sitemap.xml` is reachable at `/sitemap.xml`.
- [ ] `robots.txt` is present and correct (no accidental `Disallow: /`).
- [ ] Structured data (JSON-LD) for business / local SEO where applicable (especially for T&T-based clients).
- [ ] Canonical URLs set where pages are accessible via multiple routes.

## Performance

- [ ] Lighthouse performance score ≥ 95 on the homepage and primary landing page (run on the Vercel preview URL, not localhost).
- [ ] Core Web Vitals are green: LCP < 2.5 s, FID/INP < 200 ms, CLS < 0.1.
- [ ] Images use `next/image` with explicit `width`/`height` or `fill` with `sizes`.
- [ ] Fonts use `next/font` with `display: "swap"`.
- [ ] No synchronous third-party scripts in `<head>`.
- [ ] No `"use client"` on server-only components.
- [ ] Bundle size reviewed — no obviously heavy packages in the client bundle.

## Accessibility (WCAG AA)

- [ ] All interactive elements are keyboard-reachable and have visible focus styles.
- [ ] Icon-only buttons have `aria-label`.
- [ ] Form fields have associated `<label>` elements (explicit `for`/`id` or wrapping label).
- [ ] Error messages use `role="alert"` or `aria-live="assertive"`.
- [ ] Colour contrast ≥ 4.5:1 for body text, ≥ 3:1 for large text and UI components.
- [ ] `lang` attribute set on `<html>` element.
- [ ] Skip-navigation link present for long-nav pages.

## Content & copy

- [ ] All placeholder text (Lorem ipsum, "TBD", [COMPANY NAME]) replaced.
- [ ] Phone numbers, addresses, and business hours are correct.
- [ ] Contact forms tested: submission works, client receives notification.
- [ ] Legal pages present if required (Privacy Policy, Terms of Service).
- [ ] Currency and date formats match client's locale (TTD for T&T clients; USD for diaspora-facing pages if relevant).

## Security & environment

- [ ] No secrets hardcoded in source. `git log --all -- .env*` shows nothing sensitive.
- [ ] All required env vars are set in Vercel Production environment.
- [ ] HTTPS enforced (Vercel default — verify custom domain TLS is active).
- [ ] Security headers present: `X-Frame-Options`, `X-Content-Type-Options`, `Referrer-Policy`. Use `next.config.ts` headers or Vercel Edge Config.

## Deployment

- [ ] Clean `npm run build` with no type errors or ESLint warnings.
- [ ] Preview deploy verified on a real mobile device (Android Chrome as a minimum — popular in the Caribbean market).
- [ ] Sentry DSN set; test event fires successfully from `/api/sentry-test`.
- [ ] Client has been walked through the Vercel dashboard and knows how to check deploy status.
