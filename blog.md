---
layout: pages
title: Blog Posts
permalink: /blog
---

<img class="category" src="http://www.stevencombs.com/images/design/blog.svg" />

This page contains a list every post on this site. It can be a bit unweildly to search through this list and I recommend that you use this page to simply review the most recent blog posts or browse and look for interesting titles. If you use a Mac, consider typing ⌘ + `F` to bring up the *Find* dialog box and search for a specific word or title.

<a title="RSS feed" id="rss" href="/atom.xml" target="blank"><i class="fa fa-rss-square"></i></a> Click the RSS logo on the left to subscribe using your favorite RSS reader. Don’t have one? Let me [suggest one](https://itunes.apple.com/us/app/reeder-2/id880001334?mt=12&uo=4&at=10I9LR&ct=iTunes).

<ul id="blog-posts" class="posts">
	{% for post in site.posts %}
      <li><span>{{ post.date | date_to_string }} &raquo;</span><a href="{{ post.url }}">{{ post.title }}</a></li>
    {% endfor %}
</ul>
