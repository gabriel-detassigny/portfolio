---
title: BBC Good Food headless platform
kind: Headless WordPress
summary: Co-led the backend of a headless architecture for Immediate Media's WordPress multisite, launched first on BBC Good Food and its 50 million monthly users.
url: https://www.bbcgoodfood.com
tags: [API Platform, MongoDB, WordPress multisite, Artillery, Blackfire]
order: 1
featured: true
---

## The situation

Immediate Media had recently acquired BBC Good Food, a site with about 50 million unique users a month, and was moving it to a headless architecture. The site ran on Immediate Media's WordPress multisite, which served about 100 million users a month across all its sites. The new architecture had to work for those other sites too, not only for the first one, and the stakeholder deadlines were tight.

I co-led the backend engineering of the new architecture.

## The approach

- **Contracts first:** we defined the API contracts with the frontend team, who render the site from the services' data.
- **Three REST services**, built with API Platform (Symfony), PHP 7.4 and MongoDB:
  - the **Content API**, for posts such as recipes;
  - the **Settings API**, for site-specific settings;
  - the **Saved Recipes API**, for users' saved recipes.
- **WordPress pushes changes:** when a post is published, edited or deleted, WordPress sends the change to the services automatically.
- **Performance at that traffic:** the services were load-tested with [Artillery](https://www.artillery.io/) and profiled with Blackfire.

## Result

BBC Good Food launched on the new architecture, and it gave the other sites on the multisite a path to follow.
