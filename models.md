---
layout: pages
title: 3D Models
---

<img class="category" src="http://www.stevencombs.com/images/design/models.svg" />

Back in the day as a young faculty member, I was a mechanical design and computer-aided design instructor. Along with my co-author, I wrote over 12 books and workbooks related to AutoCAD and 3D Studio. I've since moved on given my administrative role in higher education, but still occasionally dabble in modeling.

Below are models I have created and/or tips and tricks:

<ul id="blog-posts" class="posts">
{% for post in site.categories.models %}
    <li><span>{{ post.date | date_to_string }} &raquo;</span><a href="{{ post.url }}">{{ post.title }}</a></li>
{% endfor %}
</ul>
