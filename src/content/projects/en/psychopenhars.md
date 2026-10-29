---
title: psychopenhars.com migration
kind: Client work
summary: Moved a WordPress 5.8 site built with a page builder to WordPress 7.1 and a block theme, with no broken links.
repo: gabriel-detassigny/psychopenhars
url: https://psychopenhars.com
tags: [WordPress, Block theme, WP-CLI, Apache, Bash]
order: 5
featured: true
---

## The situation

A small practice's website ran on WordPress 5.8 with the ColibriWP page builder. It was years out of date and its URLs all contained `/index.php/`. The shared hosting had no `mysqldump` and possibly no rsync.

## The approach

- **A new theme:** a Twenty Twenty-Five child theme with self-hosted fonts, and the pages rebuilt as block markup kept in the repository.
- **Clean permalinks:** Apache rules send every legacy `/index.php/...` URL to its new address in a single 301, and a script checks each old URL.
- **Rehearsed migration:** one script backs up the site, updates core, installs the theme, applies the content and permalinks, and writes the `.htaccess`. It ran first on a local copy of the real production backup.
- **Safe rollback:** database dumps go through `wp eval-file`, which works without the usual MySQL tools, and the rollback steps are documented.

## Result

The site runs on current WordPress with a maintainable theme, and existing links and search ranking carried over.
