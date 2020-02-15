---
layout: pages
title: Embedded Systems and Physical Computing
permalink: /embedded
---

<img class="category" src="http://www.stevencombs.com/images/design/embedded.svg" width="20%" />

I am not sure when the physical computing bug hit me. I think it was sometime in 2007 while I taught a course on C programming. I enjoy any chance I have to tinker with my three of favorite boards: the [Arduino](http://www.arduino.cc/), [C.H.I.P.](http://www.getchip.com) and [Raspberry Pi](http://www.raspberrypi.org/).

You may be looking for my [dedicated Raspberry Pi presentation page](http://www.stevencombs.com/raspberrypi.html).

Below are my embedded systems posts:

## Arduino
<ul id="blog-posts" class="posts">
{% for post in site.categories.arduino %}
    <li><span>{{ post.date | date_to_string }} &raquo;</span><a href="{{ post.url }}">{{ post.title }}</a></li>
{% endfor %}
</ul>

## C.H.I.P. and Pocket C.H.I.P.
<ul id="blog-posts" class="posts">
{% for post in site.categories.chip %}
    <li><span>{{ post.date | date_to_string }} &raquo;</span><a href="{{ post.url }}">{{ post.title }}</a></li>
{% endfor %}
</ul>

## Raspberry Pi
<ul id="blog-posts" class="posts">
{% for post in site.categories.raspberrypi %}
    <li><span>{{ post.date | date_to_string }} &raquo;</span><a href="{{ post.url }}">{{ post.title }}</a></li>
{% endfor %}
</ul>

## Electronics

<ul id="blog-posts" class="posts">
{% for post in site.categories.electronics %}
    <li><span>{{ post.date | date_to_string }} &raquo;</span><a href="{{ post.url }}">{{ post.title }}</a></li>
{% endfor %}
</ul>
