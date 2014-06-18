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

This page contains an index of every post on this site. It can be a bit unweildly to search through this list and I recommend that you use this page to simply review the most recent blog posts or browse and look for interesting titles. In the future I hope to integrate a search feature (still learning about my Jekyll site).

<a title="RSS feed" id="rss" href="/atom.xml" target="blank"><i class="fa fa-rss-square"></i></a> Click the RSS logo on the left to subscribe to Everything! If you need a specific category of blog post, use the [home page](/index), click the category and then look for the RSS logo (coming soon).

<ul id="blog-posts" class="posts">
	{% for post in site.posts %}
      <li><span>{{ post.date | date_to_string }} &raquo;</span><a href="{{ post.url }}">{{ post.title }}</a></li>
    {% endfor %}
</ul>
