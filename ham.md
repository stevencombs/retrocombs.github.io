---
layout: pages
title: Amateur Radio (Ham)
---

<img class="category" src="http://www.stevencombs.com/images/design/ham.svg" />

This is the future section for my amateur radio posts.

<ul id="blog-posts" class="posts">
{% for post in site.categories.ham %}
    <li><span>{{ post.date | date_to_string }} &raquo;</span><a href="{{ post.url }}">{{ post.title }}</a></li>
{% endfor %}
</ul>
