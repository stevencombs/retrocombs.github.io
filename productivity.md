---
layout: pages
title: Productivity
---

<img class="category" src="http://www.stevencombs.com/images/design/productivity.svg" />

In my heart, I believe everyone wants to be more productive and organized in their work and personal lives. I regularly research ways to personally become more productive. A huge inspiration for my desire to stay organized is [Getting Things Done, by David Allen](https://amzn.to/2OyOPyZ). If you've not read his book, [grab a copy now](https://amzn.to/2DperHV).

Below are my posts that add to the discussion of productivity and organization.

<ul id="blog-posts" class="posts">
{% for post in site.categories.productivity %}
    <li><span>{{ post.date | date_to_string }} &raquo;</span><a href="{{ post.url }}">{{ post.title }}</a></li>
{% endfor %}
</ul>