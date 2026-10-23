import { defineCollection } from 'astro:content';
import { file, glob } from 'astro/loaders';
import { z } from 'astro/zod';

const localized = z.object({ en: z.string(), fr: z.string() });
const localizedList = z.object({ en: z.array(z.string()), fr: z.array(z.string()) });
const yearMonth = z.string().regex(/^\d{4}-\d{2}$/);

// Technologies the experience timeline can be filtered by.
export const FILTERS = ['wordpress', 'php', 'symfony', 'javascript', 'java', 'ruby'] as const;

const experience = defineCollection({
	loader: file('src/content/experience.yml'),
	schema: z.object({
		company: z.string(),
		companyUrl: z.url().optional(),
		role: localized,
		start: yearMonth,
		end: yearMonth.nullable(),
		location: localized,
		ref: z.string(),
		highlights: localizedList,
		stack: z.array(z.string()),
		filters: z.array(z.enum(FILTERS)),
	}),
});

const education = defineCollection({
	loader: file('src/content/education.yml'),
	schema: z.object({
		school: z.string(),
		url: z.url().optional(),
		degree: localized,
		start: z.number(),
		end: z.number(),
		location: z.string(),
	}),
});

const certifications = defineCollection({
	loader: file('src/content/certifications.yml'),
	schema: z.object({
		name: z.string(),
		issuer: z.string(),
		date: yearMonth,
		url: z.url(),
	}),
});

const projects = defineCollection({
	loader: glob({ pattern: '**/*.md', base: 'src/content/projects' }),
	schema: z.object({
		title: z.string(),
		kind: z.string(),
		summary: z.string(),
		repo: z.string().optional(),
		url: z.url().optional(),
		tags: z.array(z.string()),
		order: z.number(),
		featured: z.boolean().default(false),
	}),
});

const contributions = defineCollection({
	loader: file('src/content/contributions.yml'),
	schema: z.object({
		kind: z.enum(['core', 'plugin', 'pull-request', 'package']),
		title: localized,
		description: localized,
		url: z.url(),
		date: yearMonth,
		project: z.string(),
	}),
});

const services = defineCollection({
	loader: file('src/content/services.yml'),
	schema: z.object({
		title: localized,
		description: localized,
		proof: z.string().optional(),
		order: z.number(),
	}),
});

export const collections = { experience, education, certifications, projects, contributions, services };
