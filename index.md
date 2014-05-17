---
layout: page
---
{% include JB/setup %}

###Combsing through the minutia…

  {% for post in site.posts %}
    <span class="posts">{{ post.date | date_to_string }} &raquo; <a href="{{ BASE_PATH }}{{ post.url }}">{{ post.title }}</a></span>
  {% endfor %}