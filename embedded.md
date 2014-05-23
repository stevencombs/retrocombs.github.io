---
layout: pages
title: Embedded Systems and Physical Computing
---

## Arduino Projects
None

## Raspberry Pi Projects
<ul id="blog-posts" class="posts">
{% for post in site.categories.raspberrypi %}
    <li><span>{{ post.date | date_to_string }} &raquo;</span><a href="{{ post.url }}">{{ post.title }}</a></li>
{% endfor %}
</ul>