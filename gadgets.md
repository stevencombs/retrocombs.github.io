---
layout: pages
title: Gadgets
permalink: /gadgets
---

<img class="category" src="/images/design/gadgets.svg" width="20%" />

I'm a gadget junky. I have many around the house and often like to share posts about new acquisitions. This page will contain my gadget ruminations and suggestions. You might even learn a cool tip, trick or deal. If you are looking for a comprehensive list of electronic devices I use, [try this page](/gadgets/2015/09/15/the-devices-we-use.html).

<ul id="blog-posts" class="posts">
{% for post in site.categories.gadgets %}
    <li><span>{{ post.date | date_to_string }} &raquo; </span><a href="{{ post.url }}">{{ post.title }}</a></li>
{% endfor %}
</ul>
