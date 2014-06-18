---
layout: pages
title: Presentations
---

<img
src="http://www.stevencombs.com/images/design/presentations.svg"
style="
  float: left;
  width: 100px;
  margin-left: -7px;
  margin-top: -3px;
  "
/>

I've given numerous presentations over the years. Unfortunately they have not all been captured. This page presents materials from several recent presentations with more to come.

<ul id="blog-posts" class="posts">
{% for post in site.categories.presentations %}
    <li><span>{{ post.date | date_to_string }} &raquo;</span><a href="{{ post.url }}">{{ post.title }}</a></li>
{% endfor %}
</ul>
