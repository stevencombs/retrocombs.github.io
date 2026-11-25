---
layout: pages
title: THEC64 and Retro Games Ltd Hub
description: "THEC64, THEC64 Mini, THEVIC20 and THEA500 Mini from Retro Games Ltd: tips, Carousel and Classic Mode, firmware updates, and the full lineup on retroCombs."
permalink: /thec64
ads: light
wide: true
---

<img class="category" src="/images/design/commodore.svg" width="20%" />

{% comment %} DRAFT copy, needs Editor review (Wave 2). {% endcomment %}
Everything I've written about the Retro Games Ltd machines: THEC64, THEC64 Mini, THEVIC20 and THEA500 Mini. Start with the tips and the Carousel guide, update your firmware, then see the whole lineup.

{% assign rg_start = "" | split: "" %}
{% assign slugs1 = "ten-thec64-tips,thec64-mini-carousel-classic-mode" | split: "," %}
{% for s in slugs1 %}
  {% assign hit = site.posts | where_exp: "p", "p.path contains s" %}
  {% assign rg_start = rg_start | concat: hit %}
{% endfor %}
{% assign rg_fw = "" | split: "" %}
{% assign slugs2 = "upgrade-thevic20-1-6-1,thevic20-firmware-update,fast-load-thec64mini-firmware" | split: "," %}
{% for s in slugs2 %}
  {% assign hit = site.posts | where_exp: "p", "p.path contains s" %}
  {% assign rg_fw = rg_fw | concat: hit %}
{% endfor %}
{% assign rg_line = "" | split: "" %}
{% assign slugs3 = "retro-games-ltd-lineup-before-thea1200,unbox-thea500mini,thevic20-best-gift,thevic20-games" | split: "," %}
{% for s in slugs3 %}
  {% assign hit = site.posts | where_exp: "p", "p.path contains s" %}
  {% assign rg_line = rg_line | concat: hit %}
{% endfor %}

## Start Here

{% include post-cards.html items=rg_start %}

## Firmware Updates

{% include post-cards.html items=rg_fw %}

## The Lineup, Reviews and Unboxings

{% include post-cards.html items=rg_line %}

More Commodore posts are on the [Commodore page](/commodore).
