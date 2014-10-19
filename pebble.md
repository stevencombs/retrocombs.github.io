---
layout: pages
title: Pebble
---

<img class="category" src="http://www.stevencombs.com/images/design/pebble.svg" />

I'm currently a fan of the [Pebble Watch](http://www.getpebble.com). I won't go into the specifics on this page, you can [check out my review](http://www.stevencombs.com/pebble/2014/10/19/my-first-month-with-pebble-watch.html), but suffice it to say, I like the the features and convenience the Pebble provides and look forward to future hardware, firmware and app updates. This page collects my Pebble posts and projects.

## Pebble Watch
<ul id="blog-posts" class="posts">
{% for post in site.categories.pebble %}
    <li><span>{{ post.date | date_to_string }} &raquo;</span><a href="{{ post.url }}">{{ post.title }}</a></li>
{% endfor %}
</ul>
