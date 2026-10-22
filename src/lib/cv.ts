import type { Locale } from '../i18n/ui';

/** The CV PDFs are rendered from the /cv/ pages after the build (scripts/render-assets.mjs). */
export const cvPath = (locale: Locale) => `/cv/gabriel-de-tassigny-cv-${locale}.pdf`;
