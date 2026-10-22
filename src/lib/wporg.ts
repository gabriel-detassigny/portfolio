import { fetchJson, loadRemote } from './remote';

const AUTHOR = 'gdetassigny';
/** Install counts below this are hidden, so a new plugin isn't shown with "0+ installs". */
export const MIN_INSTALLS_TO_SHOW = 100;

export interface Plugin {
	name: string;
	slug: string;
	version: string;
	tested: string;
	activeInstalls: number;
	url: string;
}

interface QueryPluginsResponse {
	plugins: { name: string; slug: string; version: string; tested: string; active_installs: number }[];
}

export function installsToShow(activeInstalls: number): number | null {
	return activeInstalls >= MIN_INSTALLS_TO_SHOW ? activeInstalls : null;
}

export async function getPlugins(): Promise<Plugin[]> {
	return loadRemote('wporg-plugins', async () => {
		const url = `https://api.wordpress.org/plugins/info/1.2/?action=query_plugins&request%5Bauthor%5D=${AUTHOR}`;
		const { plugins } = await fetchJson<QueryPluginsResponse>(url);
		return plugins.map((plugin) => ({
			name: plugin.name.replace(/&#8211;/g, '–'),
			slug: plugin.slug,
			version: plugin.version,
			tested: plugin.tested,
			activeInstalls: plugin.active_installs,
			url: `https://wordpress.org/plugins/${plugin.slug}/`,
		}));
	});
}
