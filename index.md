---
layout: page
---
{% include JB/setup %}

###Combsing through the minutia…

<p class="posts">
  {% for post in site.posts %}
    {{ post.date | date_to_string }} &raquo; <a href="{{ BASE_PATH }}{{ post.url }}">{{ post.title }}</a>
  {% endfor %}
</p>