// Minimal static server for dist/, used by the asset renderer and the Playwright tests.
// It mimics the production Apache setup closely enough: directory index, 404.html fallback.
import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { extname, join, normalize } from 'node:path';

const root = join(process.cwd(), 'dist');
const types = {
	'.html': 'text/html; charset=utf-8',
	'.css': 'text/css',
	'.js': 'text/javascript',
	'.json': 'application/json',
	'.svg': 'image/svg+xml',
	'.png': 'image/png',
	'.pdf': 'application/pdf',
	'.xml': 'application/xml',
	'.woff2': 'font/woff2',
	'.woff': 'font/woff',
	'.txt': 'text/plain',
};

export function serveDist(port = 4321) {
	const server = createServer(async (request, response) => {
		const pathname = decodeURIComponent(new URL(request.url ?? '/', 'http://localhost').pathname);
		let file = join(root, normalize(pathname));
		try {
			if ((await stat(file)).isDirectory()) file = join(file, 'index.html');
			const body = await readFile(file);
			response.writeHead(200, { 'Content-Type': types[extname(file)] ?? 'application/octet-stream' });
			response.end(body);
		} catch {
			response.writeHead(404, { 'Content-Type': types['.html'] });
			response.end(await readFile(join(root, '404.html')).catch(() => 'Not found'));
		}
	});
	return new Promise((resolve) => server.listen(port, () => resolve(server)));
}

if (import.meta.url === `file://${process.argv[1]}`) {
	const port = Number(process.env.PORT ?? 4321);
	await serveDist(port);
	console.log(`Serving dist/ on http://localhost:${port}`);
}
