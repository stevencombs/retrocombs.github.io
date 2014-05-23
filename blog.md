---
layout: pages
title: Blog Posts
---

<a title="RSS feed" id="rss" href="/atom.xml" target="blank">
    <i class="fa fa-rss-square"></i>
  </a> Be sure to follow along and subscribe to the blog feed
  
<ul id="blog-posts" class="posts">
	{% for post in site.posts %}
      <li><span>{{ post.date | date_to_string }} &raquo;</span><a href="{{ post.url }}">{{ post.title }}</a></li>
    {% endfor %}
</ul>