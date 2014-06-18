---
layout: pages
title: Code
---

<img
src="http://www.stevencombs.com/images/design/code.svg"
style="
  float: left;
  width: 100px;
  margin-left: -7px;
  margin-top: -3px;
  "
/>

I dabble in code related projects. I am in no way an expert.

## Alfred Workflows
<ul id="blog-posts" class="posts">
{% for post in site.categories.alfred %}
    <li><span>{{ post.date | date_to_string }} &raquo;</span><a href="{{ post.url }}">{{ post.title }}</a></li>
{% endfor %}
</ul>

## Web
<ul id="blog-posts" class="posts">
{% for post in site.categories.web %}
    <li><span>{{ post.date | date_to_string }} &raquo;</span><a href="{{ post.url }}">{{ post.title }}</a></li>
{% endfor %}
</ul>

## Ruby
<ul id="blog-posts" class="posts">
{% for post in site.categories.ruby %}
    <li><span>{{ post.date | date_to_string }} &raquo;</span><a href="{{ post.url }}">{{ post.title }}</a></li>
{% endfor %}
</ul>

## Python
<ul id="blog-posts" class="posts">
{% for post in site.categories.python %}
    <li><span>{{ post.date | date_to_string }} &raquo;</span><a href="{{ post.url }}">{{ post.title }}</a></li>
{% endfor %}
</ul>
