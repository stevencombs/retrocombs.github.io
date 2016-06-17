---
layout: pages
title: Embedded Systems and Physical Computing
---

<img class="category" src="http://www.stevencombs.com/images/design/embedded.svg" />

I am not sure when the physical computing bug hit me. I think it was sometime in 2007 when I was teaching C programming. No matter when the date, I am still hooked and enjoy any chance I have to tinker with my two favorite boards: the [Arduino](http://www.arduino.cc/) and the [Raspberry Pi](http://www.raspberrypi.org/).

You may be looking for my [dedicated Raspberry Pi presentation page](http://www.stevencombs.com/raspberrypi.html).

Below are my embedded systems posts:

## Arduino Projects
<ul id="blog-posts" class="posts">
{% for post in site.categories.arduino %}
    <li><span>{{ post.date | date_to_string }} &raquo;</span><a href="{{ post.url }}">{{ post.title }}</a></li>
{% endfor %}
</ul>

## Raspberry Pi Projects
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
