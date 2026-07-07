// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Public origin of the deployed site. Override in CI/Vercel with SITE_URL.
const site = process.env.SITE_URL || 'https://anwar-sajjadiya.imamzain.org';

// https://astro.build/config
export default defineConfig({
  site,
  // Match Vercel's `trailingSlash: false` so emitted URLs (canonical, hreflang,
  // sitemap) are the final non-redirecting form.
  trailingSlash: 'never',
  // Trilingual routing: Arabic at "/", English at "/en/", Farsi at "/fa/".
  i18n: {
    defaultLocale: 'ar',
    locales: ['ar', 'en', 'fa'],
    routing: {
      prefixDefaultLocale: false,
      redirectToDefaultLocale: false,
    },
  },
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'ar',
        locales: { ar: 'ar', en: 'en', fa: 'fa' },
      },
    }),
  ],
  build: {
    // Inline small stylesheets to cut requests; keep the page tiny and fast.
    inlineStylesheets: 'auto',
  },
  image: {
    // Ship modern formats; Astro generates responsive variants at build time.
    responsiveStyles: true,
  },
});
