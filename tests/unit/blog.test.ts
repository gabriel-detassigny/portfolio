import { describe, expect, it } from 'vitest';
import { MAX_POSTS, selectRecentPosts, type BlogPost } from '../../src/lib/blog';

const post = (date: string): BlogPost => ({ title: date, url: `https://example.com/${date}`, date, summary: '' });
const now = new Date('2026-10-22T00:00:00Z');

describe('selectRecentPosts', () => {
	it('excludes posts older than a year', () => {
		const posts = [post('2026-10-12T00:00:00Z'), post('2025-10-21T00:00:00Z'), post('2021-06-25T00:00:00Z')];
		expect(selectRecentPosts(posts, now).map((p) => p.date)).toEqual(['2026-10-12T00:00:00Z']);
	});

	it('keeps a post published exactly a year ago', () => {
		expect(selectRecentPosts([post('2025-10-22T00:00:00Z')], now)).toHaveLength(1);
	});

	it(`returns at most ${MAX_POSTS} posts, newest first`, () => {
		const posts = ['01', '02', '03', '04', '05', '06', '07'].map((m) => post(`2026-${m}-01T00:00:00Z`));
		const result = selectRecentPosts(posts, now);
		expect(result).toHaveLength(MAX_POSTS);
		expect(result[0]?.date).toBe('2026-07-01T00:00:00Z');
	});

	it('returns nothing when the blog has been idle', () => {
		expect(selectRecentPosts([post('2021-06-25T00:00:00Z')], now)).toEqual([]);
	});
});
