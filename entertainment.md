---
layout: pages
title: Entertainment
---

<img class="category" src="http://www.stevencombs.com/images/design/entertainment.svg" />

Life isn’t all work and hobbies. Occasionally I like to simply kick back and enjoy a book, movie or televisions show. On occasion I write or reminisce about  these entertainment options. I tend to gravitate toward science fiction, but also enjoy classics as well.

Below are my posts about books, movies and television.

<ul id="blog-posts" class="posts">
{% for post in site.categories.entertainment %}
    <li><span>{{ post.date | date_to_string }} &raquo;</span><a href="{{ post.url }}">{{ post.title }}</a></li>
{% endfor %}
</ul>
