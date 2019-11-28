---
layout: pages
title: Productivity
---

<img class="category" src="http://www.stevencombs.com/images/design/evernote.svg" />

In the past, I was a power user of Evernote. I've since moved on to other tools to organize my life; however, this page remains for those looking for past tips and tricks. One tip not included below; If you use Evernote, be sure to put EVERYTHING in the application. This is the way you maximize it's built-in tools. Now, on to my archived list of tips.

<ul id="blog-posts" class="posts">
{% for post in site.categories.evernote %}
    <li><span>{{ post.date | date_to_string }} &raquo;</span><a href="{{ post.url }}">{{ post.title }}</a></li>
{% endfor %}
</ul>
