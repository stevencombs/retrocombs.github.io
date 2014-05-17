---
layout: page
---
{% include JB/setup %}

###Combsing through the minutia…

<p class="posts">
  {% for post in site.posts %}
    <p><b>{{ post.date | date_to_string }} </b> &raquo; <a href="{{ BASE_PATH }}{{ post.url }}">{{ post.title }}</a></p>
  {% endfor %}
</p>