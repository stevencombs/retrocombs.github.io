---
layout: pages
title: Embedded Systems and Physical Computing
---

<img
src="http://www.stevencombs.com/images/design/embedded.svg"
style="
  float: left;
  width: 100px;
  margin-left: -7px;
  margin-top: -3px;
  "
/>

## Arduino Projects
<ul id="blog-posts" class="posts">
{% for post in site.categories.arduino %}
    <li><span>{{ post.date | date_to_string }} &raquo;</span><a href="{{ post.url }}">{{ post.title }}</a></li>
{% endfor %}
</ul>

## Raspberry Pi Projects
<ul id="blog-posts" class="posts">
{% for post in site.categories.raspberrypi %}
    <li><span>{{ post.date | date_to_string }} &raquo;</span><a href="{{ post.url }}">{{ post.title }}</a></li>
{% endfor %}
</ul>
