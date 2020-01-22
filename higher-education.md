---
layout: pages
title: Higher Education
permalink: /higher-education
---

<img class="category" src="http://www.stevencombs.com/images/design/higher-education.svg" />

The career that finances my hobbies is that of a higher education administrator for a community college in Indiana. I occasionally share experiences or thoughts about my career in higher education whether it be academics, logistics or administration.

Below are my higher education related posts:

<ul id="blog-posts" class="posts">
{% for post in site.categories.higher-education %}
    <li><span>{{ post.date | date_to_string }} &raquo;</span><a href="{{ post.url }}">{{ post.title }}</a></li>
{% endfor %}
</ul>
