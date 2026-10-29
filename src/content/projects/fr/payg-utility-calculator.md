---
title: Calculateur de compteur prépayé
kind: CLI Symfony
summary: Un outil en ligne de commande qui prédit quand le crédit d'un compteur de gaz ou d'électricité prépayé sera épuisé.
repo: gabriel-detassigny/payg-utility-calculator
tags: [PHP, Symfony Console, Doctrine, SQLite]
order: 6
featured: true
---

Mon gaz fonctionnait avec un compteur prépayé, situé à l'extérieur de mon appartement. Je me demandais souvent combien de crédit il restait, sans avoir envie de sortir vérifier.

Cet outil enregistre les quelques relevés et rechargements que je fais, et prédit la date d'épuisement du crédit à partir de la consommation entre eux.

Il est construit avec Symfony Console et stocke ses données dans SQLite via Doctrine.
