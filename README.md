# Anwar Sajjadiya — landing page

A standalone, conversion‑focused landing page for the **Anwar Sajjadiya** mobile app
(أنوار سجادية) — the integrated encyclopedia of Imam Zayn al‑Abidin, ʿAli ibn
al‑Husayn as‑Sajjad (عليه السلام), published by the Imam Zayn al‑Abidin (as)
Foundation. Built to live on its own subdomain, e.g. `anwar-sajjadiya.imamzain.org`.

Its single job is to convert visitors into app downloads.

## Highlights

- **Astro, static, ~zero JS.** No client framework. The only script is a ~0.5 KB
  inline device sniffer. Pages are ~9 KB gzipped; images ship as responsive
  AVIF/WebP via `astro:assets`.
- **Trilingual + world‑class SEO.** Arabic (`/`), English (`/en/`), Farsi (`/fa/`)
  with per‑locale titles/descriptions/keywords, `hreflang` (+ `x-default`),
  canonicals, Open Graph & Twitter cards, an i18n sitemap, and JSON‑LD
  (`SoftwareApplication`/`MobileApplication`, `Organization`, `WebSite`,
  `BreadcrumbList`, `FAQPage`). iOS Safari smart‑app‑banner included.
- **Device‑aware CTA.** Detects iOS / Android / desktop and highlights the matching
  store as the primary button with a "recommended" pill; desktop additionally shows
  a **scan‑to‑download QR** (generated at build time, no client JS). Scanning it on a
  phone (`?go=1`) forwards straight to the correct store.
- **Brand identity from the app.** Warm cream surfaces, gold `#b8935a` as the primary
  accent, charcoal `#2b2822` bars/CTA and the logo's emerald `#007062` as an accent —
  with the app's real emerald‑and‑gold logo (extracted from the app, transparent).
  Frameless app screenshots are shown in CSS device mockups; subtle Islamic geometry;
  light & dark themes mirroring the app.

## Develop

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # → dist/  (static)
npm run preview
```

## Content & config

- **Copy / translations:** `src/i18n/content.ts` — one typed `Content` object per
  locale (identical shape). Section/feature `id`s are stable across locales.
- **Links, colours, identity:** `src/site.config.ts` — store URLs, app ids,
  publisher org, brand palette, locales.
- **Canonical origin:** `astro.config.mjs` `site` (override at build with the
  `SITE_URL` env var). Also update the `Sitemap:` line in `public/robots.txt`.

## Social / icon assets

`public/og/{ar,en,fa}.jpg` (1200×630), `public/apple-touch-icon.png` and `public/favicon.png` are
pre‑generated (committed) — regenerate after a brand/screenshot change:

```bash
npm run og         # node scripts/make-og.mjs  (uses sharp; NOT part of the build)
```

They are generated locally rather than in CI so the Vercel build stays free of any
font/runtime dependency.

## Deploy to Vercel

1. Import this directory as a new Vercel project (framework preset **Astro**,
   detected via `vercel.json`; output `dist`).
2. Add the domain `anwar-sajjadiya.imamzain.org` in **Settings → Domains** and point
   the subdomain's CNAME at Vercel.
3. Set env var `SITE_URL=https://anwar-sajjadiya.imamzain.org` (Production) so
   canonicals, `hreflang`, sitemap and JSON‑LD use the final origin, then deploy.

`vercel.json` sets long‑lived immutable caching for `/_astro/*` and `/fonts/*` and
sensible security headers.

## Project structure

```
src/
  site.config.ts        store links, brand palette, locales
  i18n/                 locale helpers + all copy (content.ts)
  lib/                  jsonld.ts (structured data), screens.ts (image map)
  styles/global.css     design system (logical props → RTL + LTR)
  components/           Header, Hero, StoreButtons, Qr, Showcase, ContentSection,
                        LiteratureBand, FeatureGrid, Faq, CtaBand, Footer, Seo, …
  layouts/Base.astro    <html> + head + device script
  pages/                index.astro (ar), en/index.astro, fa/index.astro
scripts/make-og.mjs     social image + icon generator (sharp)
```
