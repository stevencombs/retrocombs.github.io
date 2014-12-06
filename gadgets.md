---
layout: pages
title: Gadgets
---

<img class="category" src="http://www.stevencombs.com/images/design/chrome.svg" />

I'm a gadget junky. I have many around the house and often like to share my new acquisitions with friends and family. This page will contain my gadget rumination and suggestions. You might even read about a cool tip, trick or deal.

<ul id="blog-posts" class="posts">
{% for post in site.categories.gadgets %}
    <li><span>{{ post.date | date_to_string }} &raquo;</span><a href="{{ post.url }}">{{ post.title }}</a></li>
{% endfor %}
</ul>
