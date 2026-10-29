---
title: simple-blog
kind: Frameworkless PHP
summary: The blog engine that ran my blog for years, built from Composer packages without a framework.
repo: gabriel-detassigny/simple-blog
tags: [PHP, FastRoute, Twig, Doctrine, Phinx, PHPUnit]
order: 7
featured: true
---

I wrote simple-blog to show that a small application doesn't need a full framework. It wires together focused Composer packages (routing, templating, database migrations, a DI container), and is covered by unit tests with coverage reporting in CI.

It ran my blog until 2026, when I moved the blog to a static site generator. I wrote about the original approach in [Going Frameworkless](https://blog.detassigny.net/going-frameworkless/).
