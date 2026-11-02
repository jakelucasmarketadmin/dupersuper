# Super Duper Contractor Man Dude Company (test site)

Test build for self-hosting client sites off Wix. Astro static site, Tailwind, no Wix dependencies. Builds to plain HTML in `dist/`, hosted free on Cloudflare Pages.

## Make a new client site from this
1. Copy this repo (GitHub "Use this template").
2. Edit `src/site.config.ts`: name, phone, address, towns, services, hours, `jotformId`, `url`.
3. Swap the logo in `src/layouts/Base.astro` and `public/favicon.svg`.
4. Push. Cloudflare builds and deploys automatically.

## Local
```
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs dist/
```

## Cloudflare Pages (one-time per site)
Workers & Pages → Create → Pages → Connect to Git → pick the repo.
- Framework preset: Astro
- Build command: `npm run build`
- Output directory: `dist`

Every push to `main` redeploys. Add the client's domain under the project's Custom domains tab.

## What's included
- Home, services index, one page per service, about, contact, 404
- GeneralContractor, Service and FAQPage schema
- sitemap-index.xml and robots.txt generated at build
- JotForm embed (set `jotformId`), with a call/email fallback when blank
