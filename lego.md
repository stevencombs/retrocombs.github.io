---
layout: pages
title: LEGO MOCs
---

I'm a self professed AFOL. Below are my MOCs and reviews of bulding brick related products. If you understand those last two sentences, welcome!

Be sure to check out my [Rotating LEGO iPhone Dock](get-the-dock.html) instructions.

<ul id="blog-posts" class="posts">
{% for post in site.categories.lego %}
    <li><span>{{ post.date | date_to_string }} &raquo;</span><a href="{{ post.url }}">{{ post.title }}</a></li>
{% endfor %}
</ul>