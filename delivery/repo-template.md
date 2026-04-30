# Repo Template — Starting a New Client Repo

How to spin up a net-new client project from scratch.

## Prerequisites

- Vercel CLI: `npm i -g vercel`
- GitHub access to `strata-lab` org
- Vercel `strata-labs` team membership

## Steps

1. **Create repo** in the `strata-lab` GitHub org. Name: `strata-lab/<client-short-name>` (e.g. `strata-lab/trinity-legal`).

2. **Scaffold the app**

   ```bash
   npx create-next-app@latest <client-short-name> \
     --typescript --tailwind --app --no-src-dir --import-alias "@/*"
   cd <client-short-name>
   ```

3. **Init shadcn/ui**

   ```bash
   npx shadcn@latest init
   ```

4. **Link to Vercel** under the `strata-labs` team:

   ```bash
   vercel link --yes
   ```

5. **Add env vars** for everything in `.env.example`:

   ```bash
   vercel env add NEXT_PUBLIC_SITE_URL
   # … add all required vars
   ```

6. **Pull env locally**:

   ```bash
   vercel env pull .env.local
   ```

7. **Wire Sentry** once the client's domain is confirmed (see [`delivery/observability.md`](observability.md)).

8. **First deploy** — push `main`, verify green in Vercel dashboard.

## Naming conventions

| Thing | Convention | Example |
|-------|-----------|---------|
| Repo | `strata-lab/<client>` | `strata-lab/patraj-realty` |
| Vercel project | `<client>` | `patraj-realty` |
| Branch: features | `feat/<short-description>` | `feat/property-listings` |
| Branch: fixes | `fix/<short-description>` | `fix/mobile-nav-overlap` |

## Git workflow

- `main` is always production-deployable.
- Feature and fix branches → PR → squash-merge to `main`.
- Conventional commits: `feat:`, `fix:`, `chore:`, `docs:`.
- Co-author every commit: `Co-Authored-By: Paperclip <noreply@paperclip.ing>`
- PRs require at least one review before merge to `main`.
