---
layout: pages
title: Commodore Business Machines (CBM)
seo_title: "Commodore Posts and User Guides"
description: "Commodore posts from retroCombs, grouped by accessories, PET, VIC-20, Commodore 64, Plus/4, and Commodore 128. The VIC-20 was Steven’s first computer."
permalink: commodore
ads: light
wide: true
---

<img class="category" src="/images/design/commodore.svg" width="20%" />

The Commodore VIC 20 was my first computer. I've always had a special place in my heart for this machine and upgraded across the Commodore line as the 80s and 90s progressed. Commodore computers are popular in the 21st century thanks to the retro computing community and this page collects my Commodore computer related posts.

## Commodore Accessories

{% include post-cards.html items=site.categories.commodore %}
## Commodore PET

{% include post-cards.html items=site.categories.pet %}

## Commodore VIC-20

{% include post-cards.html items=site.categories.vic20 %}

## Commodore 64

{% include post-cards.html items=site.categories.c64 %}
{% comment %} DRAFT heading and line, needs Editor review (Wave 2). {% endcomment %}
## Modern Commodore 64-Style Gear

New hardware built to look and feel like the Commodore 64.

{% assign c64_style = site.posts | where: "url", "/8bitdo-retro-mechanical-keyboard-c64" %}
{% assign c64_numpad = site.posts | where: "url", "/8bitdo-retro-mechanical-numpad-c64" %}
{% assign c64_style = c64_style | concat: c64_numpad %}
{% include post-cards.html items=c64_style %}

## Commodore Plus/4

{% include post-cards.html items=site.categories.plus4 %}

## Commodore 128

{% include post-cards.html items=site.categories.c128 %}
