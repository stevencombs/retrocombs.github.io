---
layout: pages
title: Evernote
---

<img
src="http://www.stevencombs.com/images/design/evernote.svg"
style="
  float: left;
  width: 100px;
  margin-right: 10px;
  margin-left: -10px;
  margin-top: -25px;
  margin-bottom: 10px;
  "
/>

It’s true. I am a huge fan of [Evernote](https://www.evernote.com/referral/Registration.action?uid=33239&sig=4da3897d067e65f5e7cc3c59c00fddb7). This page contains links (or will in the future) to all my Evernote related blog posts.

<ul id="blog-posts" class="posts">
{% for post in site.categories.evernote %}
    <li><span>{{ post.date | date_to_string }} &raquo;</span><a href="{{ post.url }}">{{ post.title }}</a></li>
{% endfor %}
</ul>
