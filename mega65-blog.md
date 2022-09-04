---
layout: pages
title: 'My MEGA65 Blog Posts'
permalink: /mega65-blog
---

Use the links below to read my MEGA65 blog posts. Want more content, check out my [MEGA65 Resource Page](/mega65.md)

<ul id="blog-posts" class="posts">
{% for post in site.categories.mega65 %}
    <li><span>{{ post.date | date_to_string }} &raquo; </span><a href="{{ post.url }}">{{ post.title }}</a></li><div> {{ post.excerpt }} </div>
{% endfor %}
</ul>

