---
layout: pages
title: THEC64 and Retro Games Ltd Hub
description: "THEC64, THEC64 Mini, THEVIC20 and THEA500 Mini from Retro Games Ltd: tips, Carousel and Classic Mode, firmware updates, and the full lineup on retroCombs."
permalink: /thec64
ads: light
wide: true
---

<img class="category" src="/images/design/commodore.svg" width="20%" />

{% comment %} Copy: Editor edits applied (Wave 2). {% endcomment %}
Everything I've written about the Retro Games Ltd machines: THEC64, THEC64 Mini, THEVIC20 and THEA500 Mini. Start with the tips and the Carousel guide, update your firmware, then see the whole lineup.

{% include hub-posts.html slugs=site.data.hubs.thec64.start %}
{% assign rg_start = hub_posts %}
{% include hub-posts.html slugs=site.data.hubs.thec64.firmware %}
{% assign rg_fw = hub_posts %}
{% include hub-posts.html slugs=site.data.hubs.thec64.lineup %}
{% assign rg_line = hub_posts %}

## Start Here

{% include post-cards.html items=rg_start %}

## Firmware Updates

{% include post-cards.html items=rg_fw %}

## The Lineup: Reviews and Unboxings

{% include post-cards.html items=rg_line %}

More Commodore posts are on the [Commodore page](/commodore).
