---
title: Eutopia restaurant theme
kind: Client work
summary: A custom WordPress theme with block editor support for the Eutopia restaurant's website.
repo: gabriel-detassigny/eutopia-theme
url: https://www.eutopia-restaurant.fr
tags: [PHP, WordPress, theme.json, Sass, wp-env]
order: 2
featured: true
---

## The brief

A restaurant needed a website its owners could update themselves, with a design that matched their brand rather than a generic template.

## What I built

A classic PHP WordPress theme with full block editor support:

- Design tokens and global styles defined in `theme.json`, with Sass for the rest.
- Theme features split into small PHP components (scripts, styles, images, SVG icons, menus, block patterns, allowed blocks) wired together in `functions.php`.
- Block patterns so the owners can build pages from pre-designed sections.
- A custom 404 page that the owners can pick and edit from the admin.

## Engineering

Assets are built with `@wordpress/scripts`, with hot reload in development. The project is linted (PHPCS, PHPStan, ESLint, Stylelint, `theme.json` validation) and tested with PHPUnit in a `wp-env` environment, both locally through Git hooks and in GitHub Actions.
