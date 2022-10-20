---
layout: pages
title: Art and Supplies
permalink: 'art'
---

<img class="category" src="/images/design/art.svg" width="20%" />

I've been a doodler all my life. I can remember several times in school and church being scolded for doodling and not paying attention. Today I still find myself doodling and I often sketch images to represent meeting and presentation ideas and topics. In mid-2014, I discovered a whole movement around something I had been doing for a couple of years; the creation of *sketchnotes*. Those who practice the “art” share their sketchnotes with the world to encourage others. I’ve decided to do the same on this page.

Below are posts that share my creations as well as reviews of the tools I use to create them.

## Art and tools related posts
<ul id="blog-posts" class="posts">
{% for post in site.categories.art %}
    <li><span>{{ post.date | date_to_string }} &raquo; </span><a href="{{ post.url }}">{{ post.title }}</a></li>
{% endfor %}
</ul>
