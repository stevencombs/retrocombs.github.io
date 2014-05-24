---
layout: pages
title: Entertainment
---

This page is a collection of posts about books, movies and television.

<ul id="blog-posts" class="posts">
{% for post in site.categories.entertainment %}
    <li><span>{{ post.date | date_to_string }} &raquo;</span><a href="{{ post.url }}">{{ post.title }}</a></li>
{% endfor %}
</ul>