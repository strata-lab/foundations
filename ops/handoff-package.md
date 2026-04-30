# Handoff Package — End of Engagement

What we deliver to a client when an engagement closes. The goal: the client can run their own site without us and can onboard a future developer without starting from scratch.

## Deliverables checklist

### Access & credentials
- [ ] Client has owner-level access to their GitHub repo (`strata-lab/<client>` — transfer or add them as admin).
- [ ] Client has access to the Vercel project under their own account or team (transfer project out of `strata-labs`).
- [ ] Client has access to the Sentry project (invite or transfer).
- [ ] Any third-party service accounts (Stripe, SendGrid, Google Analytics, etc.) are owned by the client's email, not ours.
- [ ] DNS is managed from the client's registrar account, not ours.

### Documentation
- [ ] `README.md` updated: reflects the final stack, how to run locally, how to deploy.
- [ ] `docs/playbook.md` (or equivalent) captures any project-specific decisions and deviations from Strata defaults.
- [ ] All environment variables documented in `.env.example` with descriptions.
- [ ] At least one `docs/incidents/` entry exists if there were any P1 incidents during the engagement.

### Code quality
- [ ] `npm run build` passes cleanly with no warnings.
- [ ] No outstanding `// TODO` or `// FIXME` comments left for the client to trip over without a companion issue.
- [ ] Sentry is wired and has at least one verified test event in the project history.
- [ ] No secrets, credentials, or `.env.local` committed anywhere in git history (`git log --all -- .env*`).

### Handoff call
Conduct a 30-minute walkthrough with the client covering:
1. How to push a change and watch it deploy on Vercel.
2. How to read Sentry alerts.
3. Who to call (and what to say) if the site goes down — point them to the incident playbook pattern.
4. How to add/change content (if there's a CMS) or who to call for content changes.

### Retainer / ongoing support
Confirm in writing (email is fine) whether the client is entering a retainer or ending the engagement. If retainer:
- Document scope of retainer in a separate agreement.
- Create a `maintenance` label in the GitHub repo for ongoing work.
- Keep Strata as a collaborator with write access (not owner).

If engagement is fully closing:
- Remove Strata team members from the GitHub repo (leave the client as sole admin).
- Remove the Vercel project from the `strata-labs` team (transfer to client).
- Archive the Paperclip project.
