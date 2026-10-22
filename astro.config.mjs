// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://detassigny.net',
	trailingSlash: 'always',
	i18n: {
		defaultLocale: 'en',
		locales: ['en', 'fr'],
		routing: { prefixDefaultLocale: false },
	},
	integrations: [
		// The CV and social-preview pages only exist to be rendered to PDF/PNG.
		sitemap({
			filter: (page) => !/\/(cv|og)\/$/.test(page),
			i18n: { defaultLocale: 'en', locales: { en: 'en', fr: 'fr' } },
		}),
	],
});
