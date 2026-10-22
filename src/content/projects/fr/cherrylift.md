---
title: Cherrylift
kind: Plugin WordPress
summary: Transfère des contenus choisis d'un site WordPress à un autre, par exemple de la préproduction vers la production, en réattribuant chaque ID de base de données.
repo: gabriel-detassigny/cherrylift
url: https://wordpress.org/plugins/cherrylift/
tags: [PHP, WordPress, React, WP-CLI, Playwright]
order: 1
featured: true
---

## Le problème

Les équipes préparent souvent leurs contenus sur un site de préproduction, puis doivent les envoyer en production. Copier la base de données écrase tout ce que le site en ligne a créé depuis la dernière synchronisation : commandes, comptes, formulaires, commentaires. Recréer les contenus à la main est long et source d'erreurs.

Les outils qui copient des tables entières ne règlent pas le problème. L'image mise en avant d'un article, sa page parente, ses termes et les images utilisées dans ses blocs pointent tous vers des ID auto-incrémentés qui diffèrent d'un site à l'autre.

## L'approche

Cherrylift exporte uniquement les entités choisies, ainsi que tout ce dont elles dépendent, dans un manifeste versionné livré sous forme de zip.

- **Résolution des dépendances :** pages parentes, termes et leurs ancêtres, images mises en avant, médias et compositions synchronisées utilisés dans le contenu sont ajoutés automatiquement.
- **Identité stable :** chaque entité reçoit un UUID, donc un import ultérieur met à jour le même élément au lieu de créer un doublon.
- **Réattribution des ID :** parents, miniatures, parents de termes, attributs de blocs (`id`, `ids`, `mediaId`), classes `wp-image-N` et shortcodes `[gallery]` sont réécrits avec les ID du site cible.
- **Simulation d'abord :** l'écran d'import montre ce qui sera créé, mis à jour ou ignoré avant toute écriture.
- **Sécurisé par défaut :** les paquets envoyés sont vérifiés (taille, chemins, types de fichiers, sommes de contrôle) et les permissions WordPress s'appliquent à chaque élément.

## Ingénierie

Le plugin est testé avec PHPUnit (tests unitaires et d'intégration), PHPStan et PHPCS, ainsi que des tests end-to-end Playwright qui exécutent un vrai export puis import entre deux sites. GitHub Actions lance toutes les vérifications à chaque push et publie les versions sur wordpress.org.
