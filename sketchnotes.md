---
layout: pages
title: Sketchnotes
---

<img class="category" src="http://www.stevencombs.com/images/design/sketchnotes.svg" />

I've been a doodler all my life. I can remember several times in school and church getting in trouble for doodling and not paying attention. Today I still find myself doodling during meetings and I often find myself sketching images to represent the ideas presented during meetings or presentations I attend. In mid-2014, I discovered a whole movement around something I had been doing for a couple of years; the creation of *sketchnotes*. Those who practice the "art" share them with the world to encourage others.

This page collects my past and future sketchnotes.

## My Sketchnotes
<ul id="blog-posts" class="posts">
{% for post in site.categories.sketchnotes %}
    <li><span>{{ post.date | date_to_string }} &raquo;</span><a href="{{ post.url }}">{{ post.title }}</a></li>
{% endfor %}
</ul>
