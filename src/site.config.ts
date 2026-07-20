/**
 * Single source of truth for non-copy configuration: canonical origin, store
 * links, publisher identity and brand colours. Copy/translations live in
 * `src/i18n/content.ts`.
 */

export const SITE = {
	/** Canonical production origin (no trailing slash). Mirror in astro.config `site`. */
	origin: "https://anwar.imamzain.org",

	/** App store destinations (real, live links). */
	stores: {
		ios: "https://apps.apple.com/app/id6503963375",
		android:
			"https://play.google.com/store/apps/details?id=org.masaha.anwarsajjad",
	},

	/** App identifiers used in structured data. */
	app: {
		iosAppId: "6503963375",
		androidPackage: "org.masaha.anwarsajjad",
		category: "Books & Reference",
		operatingSystems: ["iOS", "Android"],
		priceCurrency: "USD",
		price: "0",
	},

	/** Publisher / parent organisation. */
	org: {
		url: "https://imamzain.org",
		logo: "https://imamzain.org/logo.png",
	},

	/** Brand palette derived from the app's visual identity: cream surfaces,
	 *  luminous gold-gradient accents, olive cards and charcoal pill bars. The
	 *  logo's emerald green belongs to the logo artwork only. `primary` is used
	 *  for the QR colour and theme-color (the app's charcoal chrome). */
	brand: {
		primary: "#2b2822", // charcoal (app bars) — QR + theme-color
		green: "#007062", // logo emerald (artwork only)
		gold: "#c9a55e", // primary accent — the app's luminous gold
		charcoal: "#2b2822", // dark bars / nav sheet / footer
		cream: "#f2efe8", // surfaces
	},

	/** Ordered locales; `ar` is the default (served at "/"). */
	locales: ["ar", "en", "fa"] as const,
	defaultLocale: "ar" as const,
} as const

export type Locale = (typeof SITE.locales)[number]
