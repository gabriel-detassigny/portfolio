---
title: simple-blog
kind: PHP sans framework
summary: Le moteur de blog qui a fait tourner mon blog pendant des années, construit avec des packages Composer, sans framework.
repo: gabriel-detassigny/simple-blog
tags: [PHP, FastRoute, Twig, Doctrine, Phinx, PHPUnit]
order: 5
featured: true
---

J'ai écrit simple-blog pour montrer qu'une petite application n'a pas besoin d'un framework complet. Il assemble des packages Composer ciblés (routage, templates, migrations de base de données, conteneur d'injection de dépendances), avec des tests unitaires et un suivi de la couverture en CI.

Il a fait tourner mon blog jusqu'en 2026, quand je suis passé à un générateur de site statique. J'ai décrit l'approche d'origine dans [Going Frameworkless](https://blog.detassigny.net/going-frameworkless/) (en anglais).
