import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/test';

const pages = ['/', '/fr/', '/projects/cherrylift/', '/fr/projects/psychopenhars/', '/404.html'];

for (const path of pages) {
	test(`${path} has no accessibility violations`, async ({ page }) => {
		await page.goto(path);
		const results = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21aa']).analyze();
		expect(results.violations).toEqual([]);
	});

	test(`${path} has no horizontal scroll`, async ({ page }) => {
		await page.goto(path);
		const overflows = await page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth);
		expect(overflows).toBe(false);
	});
}

test('dark mode passes accessibility checks too', async ({ page }) => {
	await page.emulateMedia({ colorScheme: 'dark' });
	await page.goto('/');
	const results = await new AxeBuilder({ page }).withTags(['wcag2aa']).analyze();
	expect(results.violations).toEqual([]);
});

test('home pages are translated and link to each other', async ({ page }) => {
	await page.goto('/');
	await expect(page.locator('html')).toHaveAttribute('lang', 'en');
	await expect(page.getByRole('heading', { level: 1 })).toHaveText('Gabriel de Tassigny');
	await page.getByRole('link', { name: 'Français' }).click();
	await expect(page).toHaveURL(/\/fr\/$/);
	await expect(page.locator('html')).toHaveAttribute('lang', 'fr');
	await expect(page.getByRole('heading', { name: 'Expérience', level: 2 })).toBeVisible();
});

test('the technology filter dims unrelated roles', async ({ page }) => {
	await page.goto('/');
	const commits = page.locator('.commit');
	await page.getByRole('button', { name: 'Java', exact: true }).click();
	await expect(page.getByRole('button', { name: 'Java', exact: true })).toHaveAttribute('aria-pressed', 'true');
	await expect(commits.filter({ hasText: 'Spring Boot' })).not.toHaveClass(/dim/);
	await expect(commits.filter({ hasText: 'XWP' })).toHaveClass(/dim/);
	await page.getByRole('button', { name: 'All' }).click();
	await expect(page.locator('.commit.dim')).toHaveCount(0);
});

test('the theme toggle switches and remembers dark mode', async ({ page }) => {
	await page.emulateMedia({ colorScheme: 'light' });
	await page.goto('/');
	await page.getByRole('button', { name: 'Toggle dark mode' }).click();
	await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark');
	await page.reload();
	await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark');
});

test('every project card leads to its case study', async ({ page }) => {
	await page.goto('/');
	const links = await page
		.locator('#projects h3 a')
		.evaluateAll((anchors) => anchors.map((a) => a.getAttribute('href')));
	expect(links.length).toBeGreaterThan(0);
	for (const href of links) {
		const response = await page.request.get(href!);
		expect(response.status(), href!).toBe(200);
	}
});

test('the CV PDFs and link preview image exist', async ({ request }) => {
	for (const path of ['/cv/gabriel-de-tassigny-cv-en.pdf', '/cv/gabriel-de-tassigny-cv-fr.pdf', '/og.png']) {
		const response = await request.get(path);
		expect(response.status(), path).toBe(200);
	}
});

test('the CV does not include private contact details', async ({ page }) => {
	for (const path of ['/cv/', '/fr/cv/']) {
		await page.goto(path);
		const text = await page.locator('body').innerText();
		expect(text).not.toMatch(/\+33|1991/);
	}
});
