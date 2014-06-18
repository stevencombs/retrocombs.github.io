---
layout: pages
title: Apple
---

<img
src="http://www.stevencombs.com/images/design/apple.svg"
style="
  float: left;
  width: 100px;
  margin-left: -7px;
  margin-top: -3px;
  "
/>

I'm an unabashed Apple fan. Anyone who knows me personally or professionally understands this. This page contains a collection of posts that I often create to assist my friends and family who are Mac users. Will you find a similar Windows page on this site, not way! What about Linux? <a href="linux.html">You betcha!</a>

<a title="RSS feed" id="rss" href="/atom.xml" target="blank"><i class="fa fa-rss-square"></i></a>Subscribe to my Apple posts using the link on the left.

<ul id="blog-posts" class="posts">
{% for post in site.categories.apple %}
    <li><span>{{ post.date | date_to_string }} &raquo;</span><a href="{{ post.url }}">{{ post.title }}</a></li>
{% endfor %}
</ul>
