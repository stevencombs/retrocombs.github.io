---
layout: pages
title: Code
---

<img class="category" src="http://www.stevencombs.com/images/design/code.svg" />

I dabble in code. I am in no way an expert and users of any code related project I share should do so at their own risk. My projects are sure not to be bug tested or optimized in any way. Did I mention I dabble in code?!? You have been warned.

Below are my code related project attempts. I also maintain a [GIST repository](https://gist.github.com/stevencombs/) of code snippets from various projects on [GitHub](https://github.com/stevencombs/).

## Alfred Workflows
<ul id="blog-posts" class="posts">
{% for post in site.categories.alfred %}
    <li><span>{{ post.date | date_to_string }} &raquo;</span><a href="{{ post.url }}">{{ post.title }}</a></li>
{% endfor %}
</ul>

## Web
<ul id="blog-posts" class="posts">
{% for post in site.categories.web %}
    <li><span>{{ post.date | date_to_string }} &raquo;</span><a href="{{ post.url }}">{{ post.title }}</a></li>
{% endfor %}
</ul>

## Ruby
<ul id="blog-posts" class="posts">
{% for post in site.categories.ruby %}
    <li><span>{{ post.date | date_to_string }} &raquo;</span><a href="{{ post.url }}">{{ post.title }}</a></li>
{% endfor %}
</ul>

## Python
<ul id="blog-posts" class="posts">
{% for post in site.categories.python %}
    <li><span>{{ post.date | date_to_string }} &raquo;</span><a href="{{ post.url }}">{{ post.title }}</a></li>
{% endfor %}
</ul>
