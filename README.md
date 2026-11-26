# numan-razzaq.duckdns.org

Personal portfolio of **Numan Razzaq**, Software Engineer (React, TypeScript, Next.js, NestJS).

- **Next.js 16** (App Router, static export) + **React 19** + **Tailwind CSS 4**
- Dark/light theme, scroll-driven reveals in pure CSS, reduced-motion aware
- SEO: metadata, Open Graph image generated at build, JSON-LD `Person`, sitemap, robots
- Self-hosted on AWS EC2 behind Caddy (automatic HTTPS), next to Shortlist

## Editing content

All content lives in [`lib/data.ts`](lib/data.ts): bio, stats, experience, projects
and skills. The Resume button downloads `public/Numan_Razzaq_Resume.pdf`; replace that
file to update it.

## Optional setup

In `lib/data.ts`, under `site`:

- `booking`: your Calendly link (e.g. `https://calendly.com/<you>/intro-call`). Every
  "Book a free call" button uses it; while empty they open WhatsApp instead.
- `umamiWebsiteId`: the Website ID from cloud.umami.is to turn on cookie-free analytics.

## Develop

```bash
npm install
npm run dev        # http://localhost:3000
npm run lint && npm run typecheck && npm run build   # static site in out/
```

## Deploy

See [`deploy/README.md`](deploy/README.md): one Docker container on the existing EC2
server, served through Shortlist's Caddy on a free DuckDNS hostname.
