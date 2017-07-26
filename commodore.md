---
layout: pages
title: Commodore Computers
---

<img class="category" src="http://www.stevencombs.com/images/design/commodore.svg" />

My very first computer was a Commodore VIC 20. I've always had a special place in my heart for this machine and upgraded across the Commodore line as the 80s and 90s progressed. 

Below are my experiences in the 8-bit and retro Commodore computer world both yesterday and today:

<ul id="blog-posts" class="posts">
{% for post in site.categories.commodore %}
    <li><span>{{ post.date | date_to_string }} &raquo;</span><a href="{{ post.url }}">{{ post.title }}</a></li>
{% endfor %}
</ul>
