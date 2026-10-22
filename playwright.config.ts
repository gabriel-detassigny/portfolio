import { defineConfig, devices } from '@playwright/test';

// Runs against the built site: `npm run build` first.
export default defineConfig({
	testDir: 'tests/e2e',
	forbidOnly: !!process.env.CI,
	reporter: process.env.CI ? 'github' : 'list',
	use: { baseURL: 'http://localhost:4321' },
	projects: [
		{ name: 'desktop', use: { ...devices['Desktop Chrome'] } },
		{ name: 'mobile', use: { ...devices['Pixel 7'] } },
	],
	webServer: {
		command: 'node scripts/serve-dist.mjs',
		url: 'http://localhost:4321',
		reuseExistingServer: !process.env.CI,
	},
});
