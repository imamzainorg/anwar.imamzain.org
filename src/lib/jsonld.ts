/**
 * Structured data (schema.org) for rich results. We deliberately DO NOT emit an
 * aggregateRating — we have no verified rating figure and fabricating one risks
 * a Google structured-data penalty. Everything here is factual.
 */
import { SITE } from '@/site.config';
import type { Content } from '@/i18n/content';

const OG_LOCALE: Record<string, string> = { ar: 'ar_AR', en: 'en_US', fa: 'fa_IR' };

export function ogLocale(locale: string): string {
  return OG_LOCALE[locale] ?? 'ar_AR';
}

interface Ctx {
  content: Content;
  url: string; // canonical absolute URL of this page
  ogImage: string; // absolute URL
}

export function buildJsonLd({ content, url, ogImage }: Ctx): object[] {
  const publisher = {
    '@type': 'Organization',
    '@id': `${SITE.origin}/#org`,
    name: content.brand.org,
    url: SITE.org.url,
    logo: SITE.org.logo,
    sameAs: [SITE.stores.ios, SITE.stores.android, SITE.org.url],
  };

  const app = {
    '@type': ['SoftwareApplication', 'MobileApplication'],
    '@id': `${SITE.origin}/#app`,
    name: content.brand.name,
    alternateName: content.brand.nameLatin,
    description: content.seo.ogDescription,
    url,
    applicationCategory: SITE.app.category,
    operatingSystem: SITE.app.operatingSystems.join(', '),
    inLanguage: SITE.locales as unknown as string[],
    isFamilyFriendly: true,
    image: ogImage,
    downloadUrl: [SITE.stores.ios, SITE.stores.android],
    installUrl: [SITE.stores.ios, SITE.stores.android],
    sameAs: [SITE.stores.ios, SITE.stores.android],
    offers: {
      '@type': 'Offer',
      price: SITE.app.price,
      priceCurrency: SITE.app.priceCurrency,
      availability: 'https://schema.org/InStock',
    },
    publisher: { '@id': `${SITE.origin}/#org` },
    author: { '@id': `${SITE.origin}/#org` },
  };

  const website = {
    '@type': 'WebSite',
    '@id': `${SITE.origin}/#website`,
    url: `${SITE.origin}/`,
    name: content.brand.name,
    inLanguage: content.locale,
    publisher: { '@id': `${SITE.origin}/#org` },
    about: { '@id': `${SITE.origin}/#app` },
  };

  const breadcrumbs = {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: content.brand.name, item: url },
    ],
  };

  const faq = {
    '@type': 'FAQPage',
    '@id': `${url}#faq`,
    mainEntity: content.faq.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  return [
    { '@context': 'https://schema.org', '@graph': [publisher, website, app, breadcrumbs, faq] },
  ];
}
