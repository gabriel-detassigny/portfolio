import { readFile, writeFile } from 'node:fs/promises';
import { join } from 'node:path';

// Resolved from the project root: this module is bundled elsewhere during the build.
const CACHE_DIR = join(process.cwd(), 'data-cache');

// Each source is fetched once per build, however many pages use it.
const pending = new Map<string, Promise<unknown>>();

export const USER_AGENT = 'detassigny-portfolio-build (+https://detassigny.net)';

/**
 * Fetches remote data at build time. A successful fetch refreshes data-cache/<name>.json;
 * a failed one falls back to that file, so an API outage never breaks the build.
 * Set PORTFOLIO_OFFLINE=1 to skip the network entirely.
 */
export function loadRemote<T>(name: string, fetcher: () => Promise<T>): Promise<T> {
	if (!pending.has(name)) {
		pending.set(name, load(name, fetcher));
	}
	return pending.get(name) as Promise<T>;
}

async function load<T>(name: string, fetcher: () => Promise<T>): Promise<T> {
	const cacheFile = join(CACHE_DIR, `${name}.json`);

	if (process.env.PORTFOLIO_OFFLINE !== '1') {
		try {
			const data = await fetcher();
			await writeFile(cacheFile, JSON.stringify(data, null, '\t') + '\n');
			return data;
		} catch (error) {
			console.warn(`[${name}] fetch failed, using cached data: ${(error as Error).message}`);
		}
	}

	return JSON.parse(await readFile(cacheFile, 'utf8')) as T;
}

export async function fetchJson<T>(url: string, headers: Record<string, string> = {}): Promise<T> {
	const response = await fetch(url, {
		headers: { 'User-Agent': USER_AGENT, Accept: 'application/json', ...headers },
		signal: AbortSignal.timeout(15_000),
	});
	if (!response.ok) {
		throw new Error(`${url} returned ${response.status}`);
	}
	return (await response.json()) as T;
}
