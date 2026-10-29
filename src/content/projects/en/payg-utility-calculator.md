---
title: PAYG utility calculator
kind: Symfony CLI
summary: A command-line tool that predicts when pay-as-you-go gas or electricity credit will run out.
repo: gabriel-detassigny/payg-utility-calculator
tags: [PHP, Symfony Console, Doctrine, SQLite]
order: 6
featured: true
---

My gas was on a prepayment meter, and the meter was outside the apartment. I kept wondering how much credit was left without going out to check.

This tool records the few meter readings and top-ups I do take, and predicts when the credit will run out from the usage between them.

It's built with Symfony Console, and stores data in SQLite through Doctrine.
