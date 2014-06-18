---
layout: pages
title: Linux
---

<img
src="http://www.stevencombs.com/images/design/linux.svg"
style="
  float: left;
  width: 100px;
  margin-left: -7px;
  margin-top: -3px;
  "
/>

While I'm a huge [Apple fan](/apple.html), I also dabble quite a bit in Linux. This page collects posts that share my tips or experiences with several flavors of Linux on several devices.

<ul id="blog-posts" class="posts">
{% for post in site.categories.linux %}
    <li><span>{{ post.date | date_to_string }} &raquo;</span><a href="{{ post.url }}">{{ post.title }}</a></li>
{% endfor %}
</ul>
