---
layout: pages
title: Presentations
permalink: presentations
---

<img class="category" src="/images/design/presentations.svg" width="20%" />

I've given numerous presentations over the years. Unfortunately they have not all been captured. About two years ago, I made the decision to put materials for any presentation I create online. This creates an archive my presentation material and makes it easier to share this material with my audience after the face-to-face presentation.

Below are materials from recent presentations with more sure to come:

<ul id="blog-posts" class="posts">
{% for post in site.categories.presentations %}
    <li><span>{{ post.date | date_to_string }} &raquo; </span><a href="{{ post.url }}">{{ post.title }}</a></li>
{% endfor %}
</ul>
