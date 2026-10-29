export const profile = {
	name: 'Gabriel de Tassigny',
	email: 'contact@detassigny.net',
	location: { en: 'Poitiers, France', fr: 'Poitiers, France' },
	careerStart: 2012,
	repo: 'https://github.com/gabriel-detassigny/portfolio',
	links: {
		github: 'https://github.com/gabriel-detassigny',
		linkedin: 'https://www.linkedin.com/in/gabriel-de-tassigny-24a03160/',
		wordpress: 'https://profiles.wordpress.org/gdetassigny/',
		blog: 'https://blog.detassigny.net/',
	},
	// Shown in the hero. Set to false to hide the "open to freelance projects" badge.
	availableForFreelance: true,
	cities: ['Paris', 'Dublin', 'Incheon', 'London', 'Seoul', 'Jeonju', 'Poitiers'],
	languages: [
		{ en: 'French (native)', fr: 'Français (langue maternelle)' },
		{ en: 'English (fluent)', fr: 'Anglais (courant)' },
		{ en: 'Korean (conversational)', fr: 'Coréen (conversationnel)' },
	],
} as const;

export const skills = [
	{
		group: { en: 'Backend', fr: 'Backend' },
		items: ['PHP 8.x (and legacy upgrades from 5.3)', 'Symfony', 'API Platform', 'Slim', 'Node.js'],
	},
	{
		group: { en: 'WordPress', fr: 'WordPress' },
		items: ['Plugins', 'Block themes', 'Gutenberg blocks', 'Headless', 'WP-CLI'],
	},
	{
		group: { en: 'Frontend', fr: 'Frontend' },
		items: ['React', 'TypeScript', 'JavaScript', 'HTML', 'CSS / Sass', 'Core Web Vitals'],
	},
	{ group: { en: 'Data', fr: 'Données' }, items: ['MySQL', 'PostgreSQL', 'MongoDB', 'SQLite'] },
	{
		group: { en: 'Testing', fr: 'Tests' },
		items: ['TDD', 'PHPUnit', 'Playwright', 'API tests', 'Load tests (Artillery)', 'Profiling (Blackfire)'],
	},
	{
		group: { en: 'DevOps', fr: 'DevOps' },
		items: ['GitHub Actions', 'Docker', 'AWS', 'Kubernetes', 'Linux'],
	},
	{ group: { en: 'Previously', fr: 'Auparavant' }, items: ['Java', 'Spring Boot', 'Ruby on Rails'] },
] as const;
