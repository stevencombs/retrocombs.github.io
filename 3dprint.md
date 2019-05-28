---
layout: pages
title: 3D Printing
---

<img class="category" src="http://www.stevencombs.com/images/design/3dprinting.svg" />

I just purchased my first 3D printer, the [Creality Ender-3](https://amzn.to/2Wt0i7O). More information and first post coming soon.

<ul id="blog-posts" class="posts">
{% for post in site.categories.3dprinting %}
    <li><span>{{ post.date | date_to_string }} &raquo;</span><a href="{{ post.url }}">{{ post.title }}</a></li>
{% endfor %}
</ul>
