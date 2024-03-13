---
layout: pages
title: Commodore Business Machines (CBM)
permalink: commodore
---

<img class="category" src="/images/design/commodore.svg" width="20%" />

The Commodore VIC 20 was my first computer. I've always had a special place in my heart for this machine and upgraded across the Commodore line as the 80s and 90s progressed. Commodore computers are popular in the 21st century thanks to the retro computing community and this page collects my Commodore computer related posts.

## Commodore Accessories

<ul id="blog-posts" class="posts">
{% for post in site.categories.commodore %}
    <li><span>{{ post.date | date_to_string }} &raquo; </span><a href="{{ post.url }}">{{ post.title }}</a></li>
{% endfor %}
</ul>
## Commodore PET

<ul id="blog-posts" class="posts">
{% for post in site.categories.pet %}
    <li><span>{{ post.date | date_to_string }} &raquo; </span><a href="{{ post.url }}">{{ post.title }}</a></li>
{% endfor %}
</ul>

## Commodore VIC-20

<ul id="blog-posts" class="posts">
{% for post in site.categories.vic20 %}
    <li><span>{{ post.date | date_to_string }} &raquo; </span><a href="{{ post.url }}">{{ post.title }}</a></li>
{% endfor %}
</ul>

## Commodore 64

<ul id="blog-posts" class="posts">
{% for post in site.categories.c64 %}
    <li><span>{{ post.date | date_to_string }} &raquo; </span><a href="{{ post.url }}">{{ post.title }}</a></li>
{% endfor %}
</ul>
## Commodore Plus/4

<ul id="blog-posts" class="posts">
{% for post in site.categories.plus4 %}
    <li><span>{{ post.date | date_to_string }} &raquo; </span><a href="{{ post.url }}">{{ post.title }}</a></li>
{% endfor %}
</ul>

## Commodore 128

<ul id="blog-posts" class="posts">
{% for post in site.categories.c128 %}
    <li><span>{{ post.date | date_to_string }} &raquo; </span><a href="{{ post.url }}">{{ post.title }}</a></li>
{% endfor %}
</ul>
