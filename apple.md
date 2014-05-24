---
layout: pages
title: Apple
---

I'm an unabashed Apple fan. Anyone who knows me either presonally or professionally understands this. This page contains a collection of posts that I often create to assist my friends and family.

<ul id="blog-posts" class="posts">
{% for post in site.categories.apple %}
    <li><span>{{ post.date | date_to_string }} &raquo;</span><a href="{{ post.url }}">{{ post.title }}</a></li>
{% endfor %}
</ul>