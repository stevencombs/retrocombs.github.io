---
layout: pages
title: Higher Education
---

The career that finances my hobbies is that of a higher education administrator for a community college. I occassionally share experiences or thoughts about my career.

<ul id="blog-posts" class="posts">
{% for post in site.categories.higher-education %}
    <li><span>{{ post.date | date_to_string }} &raquo;</span><a href="{{ post.url }}">{{ post.title }}</a></li>
{% endfor %}
</ul>