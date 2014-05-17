---
layout: page
---
{% include JB/setup %}

###Combsing through the minutia…

<p class="posts">
  {% for post in site.posts %}
    <em><p>{{ post.date | date_to_string }} &raquo; <a href="{{ BASE_PATH }}{{ post.url }}">{{ post.title }}</a></em>
    <p>{% if post.content contains '<!--more-->' %}{{ post.content | split:'<!--more-->' | first }}{% else %}{{ post.content }}{% endif %}</p>
    </p>
  {% endfor %}
</p>