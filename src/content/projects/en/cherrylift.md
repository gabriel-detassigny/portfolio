---
title: Cherrylift
kind: WordPress plugin
summary: Pushes selected content between WordPress sites, such as staging to production, and remaps every database ID on the way.
repo: gabriel-detassigny/cherrylift
url: https://wordpress.org/plugins/cherrylift/
tags: [PHP, WordPress, React, WP-CLI, Playwright]
order: 3
featured: true
---

## The problem

Teams often prepare content on a staging site and then need it in production. Copying the database overwrites whatever the live site created since the last sync: orders, accounts, form entries, comments. Copying content by hand is slow and error-prone.

Table-level tools don't solve it either. A post's featured image, parent page, terms and the image IDs inside its blocks all point to auto-increment IDs that differ from one site to the next.

## The approach

Cherrylift exports only the entities you pick, plus everything they depend on, into a versioned manifest packaged as a zip.

- **Dependency resolution:** parent posts, terms and their ancestors, featured images, media and synced patterns used inside content are bundled automatically.
- **Stable identity:** every entity gets a UUID, so a later import updates the same item instead of creating a duplicate.
- **ID remapping:** post parents, thumbnails, term parents, block attributes (`id`, `ids`, `mediaId`), `wp-image-N` classes and `[gallery]` shortcodes are rewritten to the target site's IDs.
- **Dry run first:** the import screen shows what will be created, updated or skipped before anything is written.
- **Safe by default:** uploaded packages are checked for size, paths, file types and checksums, and per-item WordPress permissions still apply.

## Engineering

The plugin is tested with PHPUnit (unit and integration suites), PHPStan and PHPCS, plus Playwright end-to-end tests that run a real export and import between two sites. GitHub Actions run every check on each push and publish releases to wordpress.org.
