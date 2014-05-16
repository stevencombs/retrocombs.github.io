---
layout: page
title: Steven B. Combs, Ph.D.
tagline: Combsing through the minutia
---
{% include JB/setup %}


{% for post in site.posts %}    
    <h3><a href="{{ post.url }}">{{ post.title }}</a></h3>
    <p><small><strong>{{ post.date | date: "%B %e, %Y" }}</strong> . {{ post.category }} . <a href="http://stevencombs.github.com{{ post.url }}"></a></small></p>            
{% endfor %}

---

# <ul class="posts">
#  {% for post in site.posts %}
#    <li><span>{{ post.date | date_to_string }}</span> &raquo; <a href="{{ BASE_PATH }}{{ post.url }}">{{ post.title }}</a></li>
#  {% endfor %}
# </ul>