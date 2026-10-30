---
title: Are Media multisite migration
kind: Product ownership
summary: Product owner for 14 of the 16 Are Media sites moved from Umbraco to one WordPress multisite, with 6.2 million monthly users in total.
tags: [WordPress multisite, Product ownership, Core Web Vitals, Accessibility, GPT-4]
order: 2
featured: true
---

## The situation

Are Media is one of Australia's largest publishing groups, with brands such as Better Homes & Gardens, Women's Weekly, Marie Claire and Elle. Its sites ran as separate Umbraco builds: custom development for each brand, features built several times over, growing technical debt and expensive hosting. Are Media chose XWP to move them to a single WordPress multisite with a shared design system.

The programme migrated 16 sites. After the first two, I was the product owner for the other 14, with a team of five developers, a project manager, a QA engineer and a designer.

## The approach

- **A year-long launch calendar:** about one site a month. I sequenced the launches by each site's features, the client's priorities and the team's availability, often with several sites in progress at once.
- **Checklists at every switch-over:** stakeholder and launch checklists, and a validation step for the migrated data before each site went live.
- **Quality at every launch:** accessibility, and Core Web Vitals kept in the green.
- **Stakeholder feedback:** I prioritized feedback from client stakeholders into the backlog and managed expectations about what would ship and when.
- **Structured reviews with GPT-4:** Gourmet Traveller's restaurant reviews were free text, so search engines couldn't read them as reviews. I was the product owner for converting them with the GPT-4 API into structured JSON-LD, for pennies per review. The developers built it.

## Scale

Across the whole programme:

- 6.2 million monthly active users
- 210,000 posts, 1.15 million images and 46,000 recipes migrated
- 78 production deployments over 41 sprints

## Result

Editors publish posts in half the time they took on Umbraco, using a shared library of templates, and every brand now gets features and fixes from one platform.

XWP presented the project at WordCamp Asia 2025: [watch the talk](https://www.youtube.com/watch?v=h0eXS5N6WGw).
