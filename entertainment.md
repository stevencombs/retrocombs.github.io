---
layout: pages
title: Entertainment
permalink: /entertainment
---

<img class="category" src="http://www.stevencombs.com/images/design/entertainment.svg" width="20%" />

Life isn't all work and hobbies. Occasionally I like to kick back and enjoy a book, movie, television show or reminisce about days gone by (usually the 1970s and 1980s). The posts below are about books, movies, television and classic toys from yesterday and today.

<ul id="blog-posts" class="posts">
{% for post in site.categories.entertainment %}
    <li><span>{{ post.date | date_to_string }} &raquo; </span><a href="{{ post.url }}">{{ post.title }}</a></li>
{% endfor %}
</ul>
