# detassigny.net

My portfolio: experience, projects, open source work and freelance services, in English and French. Built with [Astro](https://astro.build) as a static site. Every push to `main` builds and tests the site, then deploys it with rsync to the web server. It also rebuilds every Monday to refresh data from GitHub, wordpress.org and the blog.

The blog is a separate site: [blog.detassigny.net](https://blog.detassigny.net) ([source](https://github.com/gabriel-detassigny/personal-blog)).

## Local development

Requires Node 24 (see `.nvmrc`).

```sh
nvm use
npm install
npx playwright install chromium   # used to render the CV PDFs and for the tests
npm run dev                        # http://localhost:4321
```

| Command                            | What it does                                                                                        |
| ---------------------------------- | --------------------------------------------------------------------------------------------------- |
| `npm run dev`                      | Dev server with hot reload                                                                          |
| `npm run build`                    | Builds `dist/`, then renders the CV PDFs and `og.png` from the built pages                          |
| `npm run check`                    | Type-checks Astro and TypeScript files                                                              |
| `npm run lint` / `npm run format`  | Checks / fixes formatting with Prettier                                                             |
| `npm test`                         | Unit tests (Vitest)                                                                                 |
| `npm run test:e2e`                 | Playwright tests against `dist/`: smoke tests and axe accessibility checks, desktop and mobile      |
| `scripts/check-redirects.sh [url]` | After a deploy: checks old blog URLs redirect to blog.detassigny.net, and the main pages answer 200 |

## Editing content

Text that appears in both languages has an `en` and an `fr` version side by side.

| What                                                | Where                                                                                 |
| --------------------------------------------------- | ------------------------------------------------------------------------------------- |
| Jobs                                                | `src/content/experience.yml`                                                          |
| Education                                           | `src/content/education.yml`                                                           |
| Projects and case studies                           | `src/content/projects/{en,fr}/<slug>.md`. Each one gets a page at `/projects/<slug>/` |
| Open source contributions                           | `src/content/contributions.yml`                                                       |
| Freelance services                                  | `src/content/services.yml`                                                            |
| Name, email, profile links, skills, freelance badge | `src/data/profile.ts`                                                                 |
| Interface text                                      | `src/i18n/ui.ts`                                                                      |

Schemas are in `src/content.config.ts`, so a typo in a field name fails the build.

The CV PDFs (`/cv/gabriel-de-tassigny-cv-{en,fr}.pdf`) are generated from the same content through the `/cv/` and `/fr/cv/` pages, so they never go out of date.

### Remote data

These are fetched at build time:

- GitHub stars, from `src/lib/github.ts`
- wordpress.org plugins, from `src/lib/wporg.ts`. Install counts are hidden below `MIN_INSTALLS_TO_SHOW`.
- Recent blog posts, from `src/lib/blog.ts`. Only posts from the last 12 months are shown, 5 at most.

Each successful fetch updates `data-cache/*.json`. If a fetch fails, the build uses that file instead, so commit it when it changes. Set `PORTFOLIO_OFFLINE=1` to build without network access.

## Deployment

`.github/workflows/deploy.yml` uses the same secrets as the blog: `SSH_HOST`, `SSH_USER`, `SSH_PRIVATE_KEY`, `SSH_KNOWN_HOSTS` and `DEPLOY_PATH`. If any of them is missing, the deploy step is skipped.

On the OVH hosting, the site is deployed to `~/portfolio`. detassigny.net is the hosting's primary domain, and OVH doesn't allow changing its root folder, which is `~/personal-blog`. So `~/personal-blog` is a symlink to `portfolio`, and the blog itself is deployed to `~/blog`. Never point a deploy at `~/personal-blog`: rsync would follow the symlink and `--delete` would replace the portfolio.

`deploy/.htaccess` is copied into the site. It:

- forces HTTPS and removes `www`
- sets security and caching headers
- serves `404.html`
- redirects the blog's old URLs on detassigny.net to blog.detassigny.net in a single hop. When moving or renaming a post that existed before the blog moved, add it there and to `scripts/check-redirects.sh`.

## License

Code: [MIT](LICENSE). The written content (texts, CV) is © Gabriel de Tassigny.
