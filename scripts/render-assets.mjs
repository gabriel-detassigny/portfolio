// Renders files that are generated from built pages, after `astro build`:
// - dist/cv/gabriel-de-tassigny-cv-{en,fr}.pdf from /cv/ and /fr/cv/
// - dist/og.png (link preview image) from /og/
import { chromium } from '@playwright/test';
import { join } from 'node:path';
import { serveDist } from './serve-dist.mjs';

const port = 4399;
const base = `http://localhost:${port}`;
const dist = join(process.cwd(), 'dist');

const server = await serveDist(port);
const browser = await chromium.launch();

try {
	const page = await browser.newPage();

	for (const [path, locale] of [
		['/cv/', 'en'],
		['/fr/cv/', 'fr'],
	]) {
		await page.goto(base + path, { waitUntil: 'networkidle' });
		await page.evaluate(() => document.fonts.ready);
		const file = join(dist, 'cv', `gabriel-de-tassigny-cv-${locale}.pdf`);
		await page.pdf({ path: file, format: 'A4', printBackground: true, preferCSSPageSize: true });
		console.log(`Rendered ${file}`);
	}

	await page.setViewportSize({ width: 1200, height: 630 });
	await page.goto(`${base}/og/`, { waitUntil: 'networkidle' });
	await page.evaluate(() => document.fonts.ready);
	await page.screenshot({ path: join(dist, 'og.png') });
	console.log('Rendered dist/og.png');
} finally {
	await browser.close();
	server.close();
}
