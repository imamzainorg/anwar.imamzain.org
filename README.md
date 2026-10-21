# Anwar Sajjadiya — Landing Page

The marketing landing page for the **Anwar Sajjadiya** mobile app (أنوار سجادية),
the integrated encyclopedia of Imam Zayn al-Abidin, ʿAli ibn al-Husayn as-Sajjad
(عليه السلام), published by the **Imam Zayn al-Abidin (as) Foundation**. It lives
on its own subdomain, [anwar.imamzain.org](https://anwar.imamzain.org), and its
single purpose is to convert visitors into app downloads.

## What it offers

- **Device-aware download CTA** — detects iOS, Android, or desktop and highlights
  the matching app store; desktop visitors get a scan-to-download QR code that
  forwards a phone straight to the correct store.
- **Trilingual** — Arabic (`/`), English (`/en/`), and Farsi (`/fa/`), each with
  its own copy, metadata, and keywords.
- **Faithful brand identity** — mirrors the app's own visual language (warm cream
  surfaces, gold-gradient accents, olive/sage cards, charcoal pill bars) with app
  screenshots shown in device mockups, in both light and dark themes.
- **Built for discovery** — full SEO with per-locale titles/descriptions,
  `hreflang`, canonicals, Open Graph & Twitter cards, an i18n sitemap, and rich
  JSON-LD structured data, plus an iOS smart app banner.

## Scope & architecture

- A static site built with **Astro**, shipping near-zero JavaScript (only a tiny
  inline device-detection script).
- Responsive **AVIF/WebP** imagery generated at build time; social cards and
  icons are pre-generated with `sharp`.
- Deployed as static output (Vercel).
