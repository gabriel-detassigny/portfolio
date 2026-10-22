import { fetchJson, loadRemote } from './remote';

export interface RepoStats {
	stars: number;
	language: string | null;
	pushedAt: string;
}

interface RepoResponse {
	full_name: string;
	stargazers_count: number;
	language: string | null;
	pushed_at: string;
}

/** Stars, main language and last push date for each repo, keyed by "owner/name". */
export async function getRepoStats(repos: string[]): Promise<Record<string, RepoStats>> {
	return loadRemote('github-repos', async () => {
		const headers: Record<string, string> = { Accept: 'application/vnd.github+json' };
		if (process.env.GITHUB_TOKEN) {
			headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
		}
		const entries = await Promise.all(
			repos.map(async (repo) => {
				const data = await fetchJson<RepoResponse>(`https://api.github.com/repos/${repo}`, headers);
				return [repo, { stars: data.stargazers_count, language: data.language, pushedAt: data.pushed_at }] as const;
			}),
		);
		return Object.fromEntries(entries);
	});
}
