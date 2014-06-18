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
  margin-left: -7px;
  margin-top: -3px;
  margin-bottom: 10px;
  "
/>

It’s true. I am a huge fan of [Evernote](https://www.evernote.com/referral/Registration.action?uid=33239&sig=4da3897d067e65f5e7cc3c59c00fddb7). I use it for everything. If you are on this page looking for the single most important tip, that’s it. Put EVERYTHING in Evernote. Until you observe this single strategy, you will not yield the full power of Evernote. If you are looking for more tips and tricks, this page contains links (or will in the future) to all my Evernote related blog posts.

<ul id="blog-posts" class="posts">
{% for post in site.categories.evernote %}
    <li><span>{{ post.date | date_to_string }} &raquo;</span><a href="{{ post.url }}">{{ post.title }}</a></li>
{% endfor %}
</ul>
