---
layout: pages
title: Apple
permalink: /apple
---

<img class="category" src="/images/design/apple.svg" width="20%" />

I'm an unabashed Mac fan. Anyone who knows me understands this and knows at any time I probably have a Mac on hand. Will you find a similar Windows page on this site? No way! What about Linux? <a href="linux.html">You betcha!</a>

Below are posts that I create to assist my friends and family who are Mac and/or iOS device users:

<ul id="blog-posts" class="posts">
{% for post in site.categories.apple %}
    <li><span>{{ post.date | date_to_string }} &raquo; </span><a href="{{ post.url }}">{{ post.title }}</a></li>
{% endfor %}
</ul>
