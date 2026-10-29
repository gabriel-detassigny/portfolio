---
title: Plateforme headless de BBC Good Food
kind: WordPress headless
summary: Co-pilotage du backend d'une architecture headless pour le WordPress multisite d'Immediate Media, lancée d'abord sur BBC Good Food et ses 50 millions d'utilisateurs mensuels.
url: https://www.bbcgoodfood.com
tags: [API Platform, MongoDB, WordPress multisite, Artillery, Blackfire]
order: 1
featured: true
---

## La situation

Immediate Media venait de racheter BBC Good Food, un site d'environ 50 millions de visiteurs uniques par mois, et le passait sur une architecture headless. Le site tournait sur le WordPress multisite d'Immediate Media, qui servait environ 100 millions d'utilisateurs par mois sur l'ensemble de ses sites. La nouvelle architecture devait donc servir aussi à ces autres sites, pas seulement au premier, et les délais fixés par les parties prenantes étaient serrés.

J'ai co-piloté l'ingénierie backend de cette nouvelle architecture.

## L'approche

- **Les contrats d'abord :** nous avons défini les contrats d'API avec l'équipe frontend, qui affiche le site à partir des données des services.
- **Trois services REST**, construits avec API Platform (Symfony), PHP 7.4 et MongoDB :
  - la **Content API**, pour les contenus comme les recettes ;
  - la **Settings API**, pour les réglages propres à chaque site ;
  - la **Saved Recipes API**, pour les recettes enregistrées par les utilisateurs.
- **WordPress pousse les changements :** à chaque publication, modification ou suppression d'un contenu, WordPress envoie automatiquement le changement aux services.
- **Des performances à la hauteur du trafic :** tests de charge avec [Artillery](https://www.artillery.io/) et profilage avec Blackfire.

## Résultat

BBC Good Food a été lancé sur la nouvelle architecture, qui a ouvert la voie aux autres sites du multisite.
