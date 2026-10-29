---
title: Thème du restaurant Eutopia
kind: Projet client
summary: Un thème WordPress sur mesure, compatible avec l'éditeur de blocs, pour le site du restaurant Eutopia.
repo: gabriel-detassigny/eutopia-theme
url: https://www.eutopia-restaurant.fr
tags: [PHP, WordPress, theme.json, Sass, wp-env]
order: 4
featured: true
---

## Le besoin

Un restaurant avait besoin d'un site que ses gérants pouvaient mettre à jour eux-mêmes, avec un design fidèle à leur image plutôt qu'un modèle générique.

## Ce que j'ai réalisé

Un thème WordPress classique en PHP, entièrement compatible avec l'éditeur de blocs :

- Les tokens de design et les styles globaux sont définis dans `theme.json`, le reste en Sass.
- Les fonctionnalités du thème sont découpées en petits composants PHP (scripts, styles, images, icônes SVG, menus, compositions de blocs, blocs autorisés) assemblés dans `functions.php`.
- Des compositions de blocs permettent aux gérants de créer des pages à partir de sections prêtes à l'emploi.
- Une page 404 personnalisée, choisie et modifiable depuis l'administration.

## Ingénierie

Les assets sont compilés avec `@wordpress/scripts`, avec rechargement à chaud en développement. Le projet est vérifié (PHPCS, PHPStan, ESLint, Stylelint, validation de `theme.json`) et testé avec PHPUnit dans un environnement `wp-env`, en local via des hooks Git et sur GitHub Actions.
