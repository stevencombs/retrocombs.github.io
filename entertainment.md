---
layout: pages
title: Entertainment
---

<img class="category" src="http://www.stevencombs.com/images/design/entertainment.svg" />

Life isn't all work and hobbies. Occasionally I like to kick back and enjoy a book, movie, television show or reminisce about days gone by. The posts below are about books, movies, television and classic toys.

<ul id="blog-posts" class="posts">
{% for post in site.categories.entertainment %}
    <li><span>{{ post.date | date_to_string }} &raquo;</span><a href="{{ post.url }}">{{ post.title }}</a></li>
{% endfor %}
</ul>
