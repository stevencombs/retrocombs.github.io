---
layout: pages
title: 3D Models
permalink: /models
---

<img class="category" src="/images/design/models.svg" width="20%" />

Back in the day as a young faculty member, I was a mechanical design and computer-aided design instructor. Along with my co-author, I wrote over 12 books and workbooks related to AutoCAD and 3D Studio. I've since become a [higher education administrator](/higher-education.html), but still dabble in modeling.

Below are models I have created and/or tips and tricks:

<ul id="blog-posts" class="posts">
{% for post in site.categories.models %}
    <li><span>{{ post.date | date_to_string }} &raquo; </span><a href="{{ post.url }}">{{ post.title }}</a></li>
{% endfor %}
</ul>
