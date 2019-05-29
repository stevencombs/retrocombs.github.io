---
layout: pages
title: 3D Printing
---

<img class="category" src="/images/design/3dprinting.svg" />

In May of 2019, I purchased my first 3D printer, the [Creality Ender-3](https://amzn.to/2Wt0i7O). I've not owned nor operated a 3D printer in the past. I decided that learning how to use the printer would be as much fun as operating it. These posts will be an online resource that I can access for future reference and share with others.

The posts below share my experience assembling and using my 3D printer:

<ul id="blog-posts" class="posts">
{% for post in site.categories.3dprinting %}
    <li><span>{{ post.date | date_to_string }} &raquo;</span><a href="{{ post.url }}">{{ post.title }}</a></li>
{% endfor %}
</ul>
