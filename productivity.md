---
layout: pages
title: Productivity
permalink: productivity
---

<img class="category" src="/images/design/productivity.svg" width="20%" />

In my heart, I believe everyone wants to be more productive and organized in their work and personal lives. I regularly research ways to personally become more productive. A huge inspiration for my desire to stay organized is [Getting Things Done, by David Allen](https://amzn.to/2OyOPyZ). If you've not read his book, [grab a copy now](https://amzn.to/2DperHV).

For the longest time, I used Evernote as primary tool to capture, collect, organize, and search for data. I've since moved on from Evernote, but several of those tips are also included for those who still use this tool.

Below are my posts that add to the discussion of productivity and organization.

<ul id="blog-posts" class="posts">
{% for post in site.categories.productivity %}
    <li><span>{{ post.date | date_to_string }} &raquo; </span><a href="{{ post.url }}">{{ post.title }}</a></li>
{% endfor %}
</ul>
