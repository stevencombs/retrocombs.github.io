---
layout: pages
title: 'Retro Gaming Handheld Consoles'
permalink: 'handhelds'
category: retro
comments: false
tags:
  - games
  - handhelds
  - consoles
---

During Amazon Prime Day 2021, I took a journey down the retro-computing handheld console road and purchased four devices to whet my retro gaming whistle. This turned into an obsession and this page captures all my handheld gaming device posts.

<ul id="blog-posts" class="posts">
{% for post in site.categories.handhelds %}
    <li><span>{{ post.date | date_to_string }} &raquo; </span><a href="{{ post.url }}">{{ post.title }}</a></li>
{% endfor %}
</ul>
