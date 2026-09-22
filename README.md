# My Story Detective website

Public project website for **My Story Detective**, an AI-powered dialogic reading and phonics platform supporting early literacy for young learners.

Live site: [my-story-detective.warschauer.chatgpt.site](https://my-story-detective.warschauer.chatgpt.site)

## Local development

Requirements: Node.js 22.13 or later and pnpm.

```bash
pnpm install
pnpm dev
```

Create a production build with:

```bash
pnpm build
```

The site content and layout live in `app/page.tsx`; global styles are in `app/globals.css`.

## Cloudflare deployment

The repository is prepared for direct Cloudflare Workers hosting. The original ChatGPT Sites deployment remains live until the domain transition is completed.

In Cloudflare Workers & Pages, import this repository with production branch `main`, build command `pnpm build`, and deploy command `pnpm exec wrangler deploy`. Use Node.js 22.13 or newer. No application secrets or database bindings are required for this informational website.

For a manual deployment after Cloudflare authentication, run `pnpm deploy`. Test the generated workers.dev address before attaching `mystorydetective.org` and `www.mystorydetective.org` through Domains & Routes. Domain routing is intentionally managed in the dashboard and is not enabled by the initial deployment.

The domain currently uses external nameservers. Confirm the Cloudflare domain onboarding requirements with the DNS administrators and preserve the complete existing DNS zone, including all email records, before any nameserver change.
