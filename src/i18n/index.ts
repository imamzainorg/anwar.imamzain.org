/**
 * i18n helpers: locale direction, URL building and hreflang alternates.
 * Arabic is the default locale and lives at the site root ("/"); English and
 * Farsi are prefixed ("/en/", "/fa/").
 */
import { SITE, type Locale } from '@/site.config';

export const LOCALES = SITE.locales;
export const DEFAULT_LOCALE = SITE.defaultLocale;

/** Text direction per locale (English is LTR; Arabic & Farsi are RTL). */
export const DIR: Record<Locale, 'rtl' | 'ltr'> = {
  ar: 'rtl',
  en: 'ltr',
  fa: 'rtl',
};

/** BCP-47 language tags for <html lang> and hreflang. */
export const HTML_LANG: Record<Locale, string> = {
  ar: 'ar',
  en: 'en',
  fa: 'fa',
};

/** Human label for each locale, shown in the language switcher (endonyms). */
export const LOCALE_LABEL: Record<Locale, string> = {
  ar: 'العربية',
  en: 'English',
  fa: 'فارسی',
};

/**
 * Root-relative path for a locale's landing page. Non-default locales are
 * slashless (`/en`, `/fa`) to match the Vercel serving config
 * (`trailingSlash: false` + `cleanUrls`), so canonical/hreflang/sitemap URLs
 * are the final, non-redirecting form.
 */
export function localePath(locale: Locale): string {
  return locale === DEFAULT_LOCALE ? '/' : `/${locale}`;
}

/** Absolute canonical URL for a locale. */
export function canonicalUrl(locale: Locale): string {
  return `${SITE.origin}${localePath(locale)}`;
}

/**
 * hreflang alternates for every locale plus x-default (points at Arabic root).
 * Emitted in <head> and consumed by the sitemap for maximal SEO coverage.
 */
export function alternates(): { hreflang: string; href: string }[] {
  const list = LOCALES.map((l) => ({ hreflang: HTML_LANG[l], href: canonicalUrl(l) }));
  return [...list, { hreflang: 'x-default', href: canonicalUrl(DEFAULT_LOCALE) }];
}
