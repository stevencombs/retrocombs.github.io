---
layout: pages
title: Embedded Systems and Physical Computing
---

## Arduino Projects
None

## Raspberry Pi Projects
{% for post in site.categories.raspberrypi %}
    <ul>
    <li>{{ post.title }}</li>
    </ul>
{% endfor %}