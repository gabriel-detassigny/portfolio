import { fetchJson, loadRemote } from './remote';

const FEED_URL = 'https://blog.detassigny.net/feed_json_created.json';
export const MAX_POST_AGE_DAYS = 365;
export const MAX_POSTS = 5;

export interface BlogPost {
	title: string;
	url: string;
	date: string;
	summary: string;
}

interface JsonFeed {
	items: { title: string; url: string; date_published: string; content_html?: string }[];
}

/** Posts published in the last MAX_POST_AGE_DAYS days, newest first, at most MAX_POSTS. */
export function selectRecentPosts(posts: BlogPost[], now: Date): BlogPost[] {
	const cutoff = now.getTime() - MAX_POST_AGE_DAYS * 24 * 60 * 60 * 1000;
	return posts
		.filter((post) => new Date(post.date).getTime() >= cutoff)
		.sort((a, b) => b.date.localeCompare(a.date))
		.slice(0, MAX_POSTS);
}

/** The first paragraph of a post, as plain text. */
function summarize(html = ''): string {
	const paragraph = html.match(/<p>([\s\S]*?)<\/p>/)?.[1] ?? '';
	return paragraph
		.replace(/<[^>]+>/g, '')
		.replace(/\s+/g, ' ')
		.trim();
}

export async function getRecentPosts(now = new Date()): Promise<BlogPost[]> {
	const posts = await loadRemote('blog', async () => {
		const feed = await fetchJson<JsonFeed>(FEED_URL);
		return feed.items.map((item) => ({
			title: item.title,
			url: item.url,
			date: item.date_published,
			summary: summarize(item.content_html),
		}));
	});
	return selectRecentPosts(posts, now);
}
