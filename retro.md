---
layout: pages
title: Retro Computing and Gaming
permalink: /retro
---

<img class="category" src="http://www.stevencombs.com/images/design/retro.svg" width="20%" />

My very first computer was a Commodore VIC 20. I've always had a special place in my heart for this machine and upgraded across the Commodore line as the 80s and 90s progressed. My very first video gaming device was a clone of the famous Pong game; however, my real love of video gaming didn't occur for another year with the release of the Atari 2600.

Below are my experiences, posts, tips, tricks, and modern projects involving retro computing and gaming:

<ul id="blog-posts" class="posts">
{% for post in site.categories.retro %}
    <li><span>{{ post.date | date_to_string }} &raquo; </span><a href="{{ post.url }}">{{ post.title }}</a></li>
{% endfor %}
</ul>
