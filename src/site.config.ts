/**
 * Single source of truth for non-copy configuration: canonical origin, store
 * links, publisher identity and brand colours. Copy/translations live in
 * `src/i18n/content.ts`.
 */

export const SITE = {
  /** Canonical production origin (no trailing slash). Mirror in astro.config `site`. */
  origin: 'https://anwar-sajjadiya.imamzain.org',

  /** App store destinations (real, live links). */
  stores: {
    ios: 'https://apps.apple.com/app/id6503963375',
    android:
      'https://play.google.com/store/apps/details?id=org.masaha.anwarsajjad',
  },

  /** App identifiers used in structured data. */
  app: {
    iosAppId: '6503963375',
    androidPackage: 'org.masaha.anwarsajjad',
    category: 'Books & Reference',
    operatingSystems: ['iOS', 'Android'],
    priceCurrency: 'USD',
    price: '0',
  },

  /** Publisher / parent organisation. */
  org: {
    url: 'https://imamzain.org',
    logo: 'https://imamzain.org/logo.png',
  },

  /** Brand palette derived from the app's visual identity (cream + gold + charcoal,
   *  with the logo's emerald green as the accent). `primary` is used for the QR
   *  colour and theme-color. */
  brand: {
    primary: '#007062', // emerald green (logo) — QR + theme-color
    green: '#007062',
    gold: '#b8935a', // primary accent
    charcoal: '#2b2822', // dark bars / CTA / footer
    cream: '#f2efe8', // surfaces
  },

  /** Ordered locales; `ar` is the default (served at "/"). */
  locales: ['ar', 'en', 'fa'] as const,
  defaultLocale: 'ar' as const,
} as const;

export type Locale = (typeof SITE.locales)[number];
