---
layout: pages
title: Chrome OS
---

<img class="category" src="http://www.stevencombs.com/images/design/chromeos.svg" />

Chrome OS devices are quickly becoming my favorite. I even have my own podcast about these devices called the Pixel Power Podcast. You can learn about this podcast [here](https://www.pixelpowerpodcast.com). There are times when a blog post about Chrome OS is necessary. This page collects those posts.

<ul id="blog-posts" class="posts">
{% for post in site.categories.chromeos %}
    <li><span>{{ post.date | date_to_string }} &raquo;</span><a href="{{ post.url }}">{{ post.title }}</a></li>
{% endfor %}
</ul>