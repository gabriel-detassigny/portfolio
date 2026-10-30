---
title: Migration multisite d'Are Media
kind: Product ownership
summary: Product owner pour 14 des 16 sites d'Are Media migrés d'Umbraco vers un seul WordPress multisite, avec 6,2 millions d'utilisateurs mensuels au total.
tags: [WordPress multisite, Product ownership, Core Web Vitals, Accessibilité, GPT-4]
order: 2
featured: true
---

## La situation

Are Media est l'un des plus grands groupes de presse d'Australie, avec des marques comme Better Homes & Gardens, Women's Weekly, Marie Claire et Elle. Ses sites étaient des installations Umbraco séparées : des développements spécifiques pour chaque marque, des fonctionnalités dupliquées, une dette technique croissante et un hébergement coûteux. Are Media a choisi XWP pour les regrouper sur un seul WordPress multisite, avec un design system commun.

Le programme a migré 16 sites. Après les deux premiers, j'ai été le product owner des 14 autres, avec une équipe de cinq développeurs, un chef de projet, un QA et un designer.

## L'approche

- **Un calendrier de lancements sur un an :** environ un site par mois. J'ai ordonné les lancements selon les fonctionnalités de chaque site, les priorités du client et la disponibilité de l'équipe, souvent avec plusieurs sites en cours en parallèle.
- **Des checklists à chaque bascule :** checklists pour les parties prenantes et pour le lancement, et validation des données migrées avant la mise en ligne de chaque site.
- **La qualité à chaque lancement :** accessibilité, et Core Web Vitals maintenus au vert.
- **Les retours des parties prenantes :** j'ai priorisé les retours du client dans le backlog et géré les attentes sur ce qui serait livré, et quand.
- **Des critiques structurées avec GPT-4 :** les critiques de restaurants de Gourmet Traveller étaient du texte libre, que les moteurs de recherche ne pouvaient pas lire comme des critiques. J'ai été le product owner de leur conversion en JSON-LD structuré avec l'API GPT-4, pour quelques centimes par critique. Les développeurs l'ont réalisée.

## L'échelle

Sur l'ensemble du programme :

- 6,2 millions d'utilisateurs actifs par mois
- 210 000 articles, 1,15 million d'images et 46 000 recettes migrés
- 78 mises en production sur 41 sprints

## Résultat

Les rédactions publient deux fois plus vite que sous Umbraco, grâce à une bibliothèque de modèles commune, et chaque marque bénéficie des fonctionnalités et des correctifs d'une seule plateforme.

XWP a présenté le projet au WordCamp Asia 2025 : [voir la conférence](https://www.youtube.com/watch?v=h0eXS5N6WGw) (en anglais).
