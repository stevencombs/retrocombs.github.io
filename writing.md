---
layout: pages
title: Writing
permalink: /writing
---

<img class="category" src="http://www.stevencombs.com/images/design/writing.svg" width="20%" />

I've been a writer most of my adult life. In the mid and late 1990s, my focus was on  non-fiction. During the 90s, I used the ubiquitous Microsoft Word and Aldus Pagemaker for my writing. Now, I use Ulysses (for macOS and iOS) and Markdown (not software, but a markup language for quick and distraction free writing) for large writing projects.

You can see a list of books I've authored on my Amazon Author's page at:

<http://www.amazon.com/author/stevencombs>

As I work with new writing tools, and as I begin my foray into fiction, this page will consolidate posts related to my experiences.

## Writing related posts

<ul id="blog-posts" class="posts">
{% for post in site.categories.writing %}
    <li><span>{{ post.date | date_to_string }} &raquo;</span><a href="{{ post.url }}">{{ post.title }}</a></li>
{% endfor %}
</ul>

## A note to literary agents
If you are a literary agent looking for a motivated, experienced writer with an intriguing genre story, why not get in touch with me now and learn more? You can send inquires to:

<steven.combs@gmail.com>
