---
layout: pages
title: Writing
---

<img class="category" src="http://www.stevencombs.com/images/design/place-holder.svg" />

I've been a writer most of my adult life (mainly non-fiction) and use various tools for this work. This page consolidates those posts.

## Writing related posts


<ul id="blog-posts" class="posts">
{% for post in site.categories.writing %}
    <li><span>{{ post.date | date_to_string }} &raquo;</span><a href="{{ post.url }}">{{ post.title }}</a></li>
{% endfor %}
</ul>

You can see a list of books I've authored on my Amazon Author's page at:

<http://www.amazon.com/author/stevencombs>