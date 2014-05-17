---
layout: page
---
{% include JB/setup %}

###Combsing through the minutia…

  {% for post in site.posts %}
    <span>{{ post.date | date_to_string }}</span> &raquo; <a href="{{ BASE_PATH }}{{ post.url }}">{{ post.title }}</a>
  {% endfor %}