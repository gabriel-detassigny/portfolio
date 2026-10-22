---
title: Migration de psychopenhars.com
kind: Projet client
summary: Migration d'un site WordPress 5.8 construit avec un page builder vers WordPress 7.1 et un thème de blocs, sans aucun lien cassé.
repo: gabriel-detassigny/psychopenhars
url: https://psychopenhars.com
tags: [WordPress, Thème de blocs, WP-CLI, Apache, Bash]
order: 3
featured: true
---

## La situation

Le site d'un cabinet tournait sous WordPress 5.8 avec le page builder ColibriWP. Il avait plusieurs années de retard et toutes ses URL contenaient `/index.php/`. L'hébergement mutualisé n'avait pas `mysqldump` et peut-être pas rsync.

## L'approche

- **Un nouveau thème :** un thème enfant de Twenty Twenty-Five avec des polices auto-hébergées, et des pages reconstruites en blocs, versionnées dans le dépôt.
- **Des permaliens propres :** des règles Apache redirigent chaque ancienne URL `/index.php/...` vers sa nouvelle adresse en une seule 301, et un script vérifie chaque ancienne URL.
- **Une migration répétée :** un script sauvegarde le site, met à jour WordPress, installe le thème, applique le contenu et les permaliens, puis écrit le `.htaccess`. Il a d'abord été exécuté sur une copie locale de la vraie sauvegarde de production.
- **Un retour arrière sûr :** les sauvegardes de la base passent par `wp eval-file`, qui fonctionne sans les outils MySQL habituels, et la procédure de restauration est documentée.

## Résultat

Le site tourne sur une version actuelle de WordPress avec un thème maintenable, et les liens existants comme le référencement ont été conservés.
