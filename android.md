---
layout: pages
title: Android
permalink: android
---

<img class="category" src="/images/design/android.svg" width="20%" />

I was an iOS user for years, but have since moved over to Android as my primary mobile operating system. I even had my own podcast about these devices called the Pixel Power Podcast. You can see the podcast archvie [here](https://www.pixelpowerpodcast.com). 

There are times when a blog post about Android is necessary. This page collects those posts.

<ul id="blog-posts" class="posts">
{% for post in site.categories.android %}
    <li><span>{{ post.date | date_to_string }} &raquo; </span><a href="{{ post.url }}">{{ post.title }}</a></li>
{% endfor %}
</ul>
