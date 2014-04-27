---
layout: page
title: The GitHub home of Steven B. Combs, Ph.D.
tagline:
---
{% include JB/setup %}

My text will go here. Everything below the line is from the base install
   
## Blog Posts

<ul class="posts">
  {% for post in site.posts %}
    <li><span>{{ post.date | date_to_string }}</span> &raquo; <a href="{{ BASE_PATH }}{{ post.url }}">{{ post.title }}</a></li>
  {% endfor %}
</ul>


