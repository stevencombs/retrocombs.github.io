---
layout: pages
title: Chrome
---

<img class="category" src="http://www.stevencombs.com/images/design/chrome.svg" />

I've mentioned that I use both Apple and Linux operating systems. Recently I added another variant of Linux, Chrome OS, to my collection of computers. More specifically, I am now the proud owner of an [Acer Chromebook C720](http://www.amazon.com/gp/product/B00FNPD1VW/ref=as_li_ss_tl?ie=UTF8&camp=1789&creative=390957&creativeASIN=B00FNPD1VW&linkCode=as2&tag=bricinmypockb-20) that I purchased during the Black Friday sales of 2014. There's a lot to like about this little laptop as well as Chrome OS.

The posts below document my experiences with my Chromebook and provide some tips and tricks for others. More specifically, those Mac users who are considering a Chromebook as a supplement to their own workflows.

<ul id="blog-posts" class="posts">
{% for post in site.categories.chrome %}
    <li><span>{{ post.date | date_to_string }} &raquo;</span><a href="{{ post.url }}">{{ post.title }}</a></li>
{% endfor %}
</ul>
