---
layout: pages
title: 3D Models
---

<img
src="http://www.stevencombs.com/images/design/models.svg"
style="
  float: left;
  width: 100px;
  margin-left: -7px;
  margin-top: -3px;
  "
/>

Back in the day as a young faculty member, I was a mechanical design and computer-aided design instructor. Along with my co-author, I also wrote over 12 books related to AutoCAD and 3D Studio. I've since moved on given my administrative role in higher education, but still occassionally dabble in modeling.

<ul id="blog-posts" class="posts">
{% for post in site.categories.models %}
    <li><span>{{ post.date | date_to_string }} &raquo;</span><a href="{{ post.url }}">{{ post.title }}</a></li>
{% endfor %}
</ul>
