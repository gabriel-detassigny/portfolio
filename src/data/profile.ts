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
		items: ['PHP 5.3 → 8.5', 'Symfony', 'API Platform', 'Slim', 'Java', 'Ruby', 'Node.js'],
	},
	{
		group: { en: 'WordPress', fr: 'WordPress' },
		items: ['Plugins', 'Block themes', 'Gutenberg blocks', 'Headless', 'WP-CLI', 'Core Web Vitals'],
	},
	{ group: { en: 'Frontend', fr: 'Frontend' }, items: ['React', 'TypeScript', 'JavaScript', 'HTML', 'CSS / Sass'] },
	{ group: { en: 'Data', fr: 'Données' }, items: ['MySQL', 'PostgreSQL', 'MongoDB', 'SQLite'] },
	{
		group: { en: 'Testing', fr: 'Tests' },
		items: ['TDD', 'PHPUnit', 'Playwright', 'API tests', 'Load tests (Artillery)'],
	},
	{
		group: { en: 'DevOps', fr: 'DevOps' },
		items: ['GitHub Actions', 'Docker', 'AWS', 'Kubernetes', 'Terraform', 'Linux'],
	},
] as const;
