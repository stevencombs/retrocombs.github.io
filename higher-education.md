---
layout: pages
title: Higher Education
---

<img
src="http://www.stevencombs.com/images/design/higher-education.svg"
style="
  float: left;
  width: 100px;
  margin-left: -7px;
  margin-top: -3px;
  "
/>

The career that finances my hobbies is that of a higher education administrator for a community college. I occassionally share experiences or thoughts about my career.

<ul id="blog-posts" class="posts">
{% for post in site.categories.higher-education %}
    <li><span>{{ post.date | date_to_string }} &raquo;</span><a href="{{ post.url }}">{{ post.title }}</a></li>
{% endfor %}
</ul>
