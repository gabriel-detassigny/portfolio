import { getCollection, type CollectionEntry } from 'astro:content';
import { localizePath, type Locale } from '../i18n/ui';
import { getRepoStats } from './github';

export type Project = CollectionEntry<'projects'>;

export const projectSlug = (project: Project) => project.id.split('/').pop()!;
export const projectPath = (locale: Locale, project: Project) =>
	localizePath(locale, `/projects/${projectSlug(project)}/`);

export async function getProjects(locale: Locale): Promise<Project[]> {
	const projects = await getCollection('projects', (project) => project.id.startsWith(`${locale}/`));
	return projects.sort((a, b) => a.data.order - b.data.order);
}

export async function getProjectRepoStats() {
	const projects = await getProjects('en');
	const repos = projects.flatMap((project) => (project.data.repo ? [project.data.repo] : []));
	return getRepoStats(repos);
}
