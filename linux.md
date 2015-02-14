---
layout: pages
title: Linux
---

<img class="category" src="http://www.stevencombs.com/images/design/linux.svg" />

While I'm a huge [Apple fan](/apple.html), I also believe Linux to be a viable alternative for both new and old computers. As you will find below, I tend to try multiple distributions (versions) of Linux and have yet to settle on a single one. That’s part of the fun.

Below are posts that share my tips or experiences with several flavors of Linux on several devices.

<ul id="blog-posts" class="posts">
{% for post in site.categories.linux %}
    <li><span>{{ post.date | date_to_string }} &raquo;</span><a href="{{ post.url }}">{{ post.title }}</a></li>
{% endfor %}
</ul>
