export const locales = ['en', 'fr'] as const;
export type Locale = (typeof locales)[number];

export const ui = {
	en: {
		'meta.title': 'Gabriel de Tassigny · Senior PHP & WordPress Engineer',
		'meta.description':
			'Staff Engineer with {years} years of PHP, Symfony and WordPress experience. Available for freelance projects.',
		'nav.main': 'Main',
		'nav.experience': 'Experience',
		'nav.projects': 'Projects',
		'nav.openSource': 'Open source',
		'nav.writing': 'Writing',
		'nav.services': 'Services',
		'nav.contact': 'Contact',
		'nav.otherLanguage': 'Français',
		'nav.skip': 'Skip to content',
		'theme.toggle': 'Toggle dark mode',
		'hero.role': 'Staff Engineer · PHP, Symfony & WordPress · since {start}',
		'hero.pitch':
			"I build and maintain web platforms for publishers and product teams, from REST APIs and headless WordPress to Gutenberg blocks and Core Web Vitals work. I'm based in Poitiers, France, and have worked remotely with teams in Dublin, London and beyond.",
		'hero.available': 'Open to freelance projects',
		'hero.employers.label': 'For employers',
		'hero.employers.title': 'Hiring a senior engineer?',
		'hero.employers.text':
			'{years} years across agency, product and media companies. Backend depth, frontend fluency, and product-owner experience.',
		'hero.employers.cta': 'Download CV',
		'hero.employers.secondary': 'See experience',
		'hero.clients.label': 'For clients',
		'hero.clients.title': 'Need a WordPress or PHP developer?',
		'hero.clients.text':
			'Plugins and themes, site migrations and upgrades, performance audits, and long-term maintenance.',
		'hero.clients.cta': 'Start a project',
		'hero.clients.secondary': 'See services',
		'experience.title': 'Experience',
		'experience.filter': 'Filter by technology',
		'experience.all': 'All',
		'experience.present': 'now',
		'experience.education': 'Education',
		'experience.certifications': 'Certifications',
		'filter.wordpress': 'WordPress',
		'filter.php': 'PHP',
		'filter.symfony': 'Symfony / API Platform',
		'filter.javascript': 'React / JS',
		'filter.java': 'Java',
		'filter.ruby': 'Ruby',
		'projects.title': 'Projects',
		'projects.details': 'Read more',
		'projects.repo': 'Source',
		'projects.live': 'Live site',
		'projects.stars': '{count} stars',
		'projects.back': 'All projects',
		'openSource.title': 'Open source',
		'openSource.plugins': 'On wordpress.org',
		'openSource.contributions': 'Contributions',
		'openSource.tested': 'Tested up to WordPress {version}',
		'openSource.installs': '{count}+ active installs',
		'openSource.version': 'v{version}',
		'writing.title': 'Writing',
		'writing.more': 'Read the blog',
		'writing.empty':
			'I write about backend engineering, testing and clean code: design patterns, mocking in PHP, refactoring.',
		'skills.title': 'Skills',
		'skills.languages': 'Languages',
		'services.title': 'Freelance services',
		'services.intro':
			"I work in small, reviewable steps, write tests, and leave documentation so you're never locked in.",
		'services.proof': 'Example: {project}',
		'contact.title': 'Contact',
		'contact.text': 'The quickest way to reach me is by email, for job opportunities and freelance projects alike.',
		'contact.email': 'Email me',
		'contact.cv': 'CV (PDF)',
		'contact.cvOther': 'French version',
		'contact.subject': 'Project enquiry',
		'footer.source': 'Source on GitHub',
		'footer.built': 'Built with Astro on {date}',
		'cv.title': 'CV',
		'cv.profile': 'Profile',
		'cv.profileText':
			'Web developer since 2012 with deep backend skills and solid frontend knowledge. PHP expert across modern and legacy codebases, frameworks and CMSs. User-focused problem solver who grew into a product owner. Comfortable working both autonomously and in teams, with strong written and verbal communication in remote environments.',
		'cv.experience': 'Experience',
		'cv.skills': 'Skills',
		'cv.interests': 'Interests',
		'cv.interestsText': 'Badminton, science fiction and fantasy, electric and acoustic guitar.',
		'404.title': 'Page not found',
		'404.text': "This page doesn't exist. If you were looking for a blog post, the blog now lives at",
		'404.home': 'Back to the home page',
	},
	fr: {
		'meta.title': 'Gabriel de Tassigny · Ingénieur PHP & WordPress senior',
		'meta.description':
			"Staff Engineer avec {years} ans d'expérience en PHP, Symfony et WordPress. Disponible pour des missions freelance.",
		'nav.main': 'Principal',
		'nav.experience': 'Expérience',
		'nav.projects': 'Projets',
		'nav.openSource': 'Open source',
		'nav.writing': 'Articles',
		'nav.services': 'Services',
		'nav.contact': 'Contact',
		'nav.otherLanguage': 'English',
		'nav.skip': 'Aller au contenu',
		'theme.toggle': 'Activer ou désactiver le mode sombre',
		'hero.role': 'Staff Engineer · PHP, Symfony & WordPress · depuis {start}',
		'hero.pitch':
			"Je conçois et maintiens des plateformes web pour des éditeurs de presse et des équipes produit : API REST, WordPress headless, blocs Gutenberg et optimisation des Core Web Vitals. Basé à Poitiers, j'ai travaillé à distance avec des équipes à Dublin, Londres et ailleurs.",
		'hero.available': 'Disponible pour des missions freelance',
		'hero.employers.label': 'Recruteurs',
		'hero.employers.title': 'Vous recrutez un développeur senior ?',
		'hero.employers.text':
			'{years} ans en agence, chez des éditeurs de produits et dans les médias. Une solide expertise backend, une bonne maîtrise du frontend et une expérience de product owner.',
		'hero.employers.cta': 'Télécharger le CV',
		'hero.employers.secondary': "Voir l'expérience",
		'hero.clients.label': 'Clients',
		'hero.clients.title': 'Besoin d’un développeur WordPress ou PHP ?',
		'hero.clients.text':
			'Plugins et thèmes, migrations et mises à jour, audits de performance et maintenance sur le long terme.',
		'hero.clients.cta': 'Démarrer un projet',
		'hero.clients.secondary': 'Voir les services',
		'experience.title': 'Expérience',
		'experience.filter': 'Filtrer par technologie',
		'experience.all': 'Tout',
		'experience.present': "aujourd'hui",
		'experience.education': 'Formation',
		'experience.certifications': 'Certifications',
		'filter.wordpress': 'WordPress',
		'filter.php': 'PHP',
		'filter.symfony': 'Symfony / API Platform',
		'filter.javascript': 'React / JS',
		'filter.java': 'Java',
		'filter.ruby': 'Ruby',
		'projects.title': 'Projets',
		'projects.details': 'En savoir plus',
		'projects.repo': 'Code source',
		'projects.live': 'Site en ligne',
		'projects.stars': '{count} étoiles',
		'projects.back': 'Tous les projets',
		'openSource.title': 'Open source',
		'openSource.plugins': 'Sur wordpress.org',
		'openSource.contributions': 'Contributions',
		'openSource.tested': "Testé jusqu'à WordPress {version}",
		'openSource.installs': '{count}+ installations actives',
		'openSource.version': 'v{version}',
		'writing.title': 'Articles',
		'writing.more': 'Lire le blog',
		'writing.empty':
			"J'écris (en anglais) sur le développement backend, les tests et le code propre : design patterns, mocks en PHP, refactoring.",
		'skills.title': 'Compétences',
		'skills.languages': 'Langues',
		'services.title': 'Services freelance',
		'services.intro':
			"Je travaille par petites étapes faciles à valider, j'écris des tests et je laisse de la documentation pour que vous ne soyez jamais dépendant de moi.",
		'services.proof': 'Exemple : {project}',
		'contact.title': 'Contact',
		'contact.text': 'Le plus simple est de m’écrire par e-mail, que ce soit pour un poste ou un projet freelance.',
		'contact.email': 'M’écrire',
		'contact.cv': 'CV (PDF)',
		'contact.cvOther': 'Version anglaise',
		'contact.subject': 'Demande de projet',
		'footer.source': 'Code source sur GitHub',
		'footer.built': 'Construit avec Astro le {date}',
		'cv.title': 'CV',
		'cv.profile': 'Profil',
		'cv.profileText':
			'Développeur web depuis 2012, avec une solide expertise backend et de bonnes connaissances frontend. Expert PHP sur des bases de code modernes comme historiques, avec ou sans framework ou CMS. Orienté utilisateur, je suis devenu product owner. À l’aise en autonomie comme en équipe, avec une communication écrite et orale efficace en télétravail.',
		'cv.experience': 'Expérience',
		'cv.skills': 'Compétences',
		'cv.interests': "Centres d'intérêt",
		'cv.interestsText': 'Badminton, science-fiction et fantasy, guitare électrique et acoustique.',
		'404.title': 'Page introuvable',
		'404.text': "Cette page n'existe pas. Si vous cherchiez un article, le blog se trouve désormais sur",
		'404.home': "Retour à l'accueil",
	},
} as const;

export type UiKey = keyof (typeof ui)['en'];

export function useTranslations(locale: Locale) {
	return (key: UiKey, params: Record<string, string | number> = {}): string =>
		ui[locale][key].replace(/\{(\w+)\}/g, (_, name: string) => String(params[name] ?? `{${name}}`));
}

/** Path for `path` (e.g. "/projects/x/") in the given locale. English has no prefix. */
export function localizePath(locale: Locale, path = '/'): string {
	return locale === 'en' ? path : `/${locale}${path}`;
}

/** The other locale's version of the current path. */
export function alternatePath(currentPath: string, target: Locale): string {
	const bare = currentPath.replace(/^\/fr(?=\/)/, '');
	return localizePath(target, bare || '/');
}

export function formatMonth(locale: Locale, yearMonth: string): string {
	const [year, month] = yearMonth.split('-').map(Number);
	return new Intl.DateTimeFormat(locale, { month: 'short', year: 'numeric', timeZone: 'UTC' }).format(
		new Date(Date.UTC(year!, month! - 1)),
	);
}

export function formatDate(locale: Locale, date: string | Date): string {
	return new Intl.DateTimeFormat(locale, { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' }).format(
		new Date(date),
	);
}

export const yearsOfExperience = (since: number, now = new Date()) => now.getFullYear() - since;
