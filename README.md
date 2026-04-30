# Strata Consulting — Marketing Site

The consultancy's own marketing site, built as proof of work for client engagements.

## Stack

| Layer | Choice |
|-------|--------|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| Components | shadcn/ui |
| Email | Resend |
| Deploy | Vercel (Fluid Compute) |

## Local development

```bash
# Copy env vars
cp .env.local.example .env.local
# Edit .env.local with your Resend API key and email addresses

npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment variables

| Variable | Required | Description |
|----------|----------|-------------|
| `NEXT_PUBLIC_SITE_URL` | Yes | Production URL (e.g. `https://strataconsult.io`) |
| `RESEND_API_KEY` | Yes | API key from [resend.com](https://resend.com) |
| `CONTACT_TO_EMAIL` | Yes | Where contact form submissions land |
| `CONTACT_FROM_EMAIL` | Yes | Verified sending address in Resend |

## Deploy to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Link and deploy preview
vercel

# Deploy to production
vercel --prod
```

Add all environment variables via `vercel env add` or the Vercel dashboard before deploying.

## Pages

| Route | Purpose |
|-------|---------|
| `/` | Home — hero + services overview |
| `/services` | Full service descriptions |
| `/work` | Case study portfolio (placeholder content) |
| `/about` | Company story and values |
| `/contact` | Contact form (Resend delivery + honeypot) |

## SEO

- Metadata on every page (title, description, OG, Twitter card)
- JSON-LD Organization schema in root layout
- `sitemap.xml` and `robots.txt` generated via Next.js file conventions
- `NEXT_PUBLIC_SITE_URL` must be set for correct canonical URLs in production

## Quality targets

| Metric | Target |
|--------|--------|
| Lighthouse Performance | ≥ 95 |
| Lighthouse SEO | ≥ 95 |
| Lighthouse Accessibility | ≥ 95 |
