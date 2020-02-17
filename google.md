---
layout: pages
title: Google
permalink: /google
---

<img class="category" src="http://www.stevencombs.com/images/design/google.svg" width="20%" />

I use Google services and apps daily. I even have my own podcast about these services called the Pixel Power Podcast. You can learn about this podcast [here](https://www.pixelpowerpodcast.com). There are times when a blog post about Google services and applications are necessary. This page collects those posts.

Below are Google product tips and tricks.

<ul id="blog-posts" class="posts">
{% for post in site.categories.google %}
    <li><span>{{ post.date | date_to_string }} &raquo; </span><a href="{{ post.url }}">{{ post.title }}</a></li>
{% endfor %}
</ul>
