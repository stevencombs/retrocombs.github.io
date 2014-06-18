---
layout: pages
title: Blog Posts
---

<img
src="http://www.stevencombs.com/images/design/blog.svg"
style="
  float: left;
  width: 100px;
  margin-left: -7px;
  margin-top: -3px;
  "
/>

<a title="RSS feed" id="rss" href="/atom.xml" target="blank">
    <i class="fa fa-rss-square"></i>
  </a> Be sure to follow along. Subscribe to the blog feed. If you need a specific category of blog post, use the [home page](/index).

<ul id="blog-posts" class="posts">
	{% for post in site.posts %}
      <li><span>{{ post.date | date_to_string }} &raquo;</span><a href="{{ post.url }}">{{ post.title }}</a></li>
    {% endfor %}
</ul>
