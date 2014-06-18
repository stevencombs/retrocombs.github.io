---
layout: pages
title: Entertainment
---

<img
src="http://www.stevencombs.com/images/design/entertainment.svg"
style="
  float: left;
  width: 100px;
  margin-left: -7px;
  margin-top: -3px;
  "
/>

This collects my posts about books, movies and television.

<ul id="blog-posts" class="posts">
{% for post in site.categories.entertainment %}
    <li><span>{{ post.date | date_to_string }} &raquo;</span><a href="{{ post.url }}">{{ post.title }}</a></li>
{% endfor %}
</ul>
