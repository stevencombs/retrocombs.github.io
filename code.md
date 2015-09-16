---
layout: pages
title: Code
---

<img class="category" src="http://www.stevencombs.com/images/design/code.svg" />

I dabble in code. I am in no way an expert and users of any code related project I share should do so at their own risk. My projects are sure not to be bug tested or optimized in any way. Did I mention I dabble in code?!? You have been warned.

Below are my code related project attempts. I also maintain a [GIST repository](https://gist.github.com/stevencombs/) of code snippets from various projects on [GitHub](https://github.com/stevencombs/).

## Hello World

I’m creating a [Hello World page](http://www.stevencombs.com/hello-world/) that demonstrates a single program in multiple languages. You may find this valuable if you are new to coding and have an interest in the different programming languages and structure.

*Please note that this page is under construction.*

## Alfred Workflows
Alfred workflows I have created or use on a regular basis are below.

<ul id="blog-posts" class="posts">
{% for post in site.categories.alfred %}
    <li><span>{{ post.date | date_to_string }} &raquo;</span><a href="{{ post.url }}">{{ post.title }}</a></li>
{% endfor %}
</ul>

## Web
Web development (Jekyll, Blogger, GitHub, etc.) related posts are below.

<ul id="blog-posts" class="posts">
{% for post in site.categories.web %}
    <li><span>{{ post.date | date_to_string }} &raquo;</span><a href="{{ post.url }}">{{ post.title }}</a></li>
{% endfor %}
</ul>

## Code
My programming experiences as well as the tools I use are in the posts below.

<ul id="blog-posts" class="posts">
{% for post in site.categories.code %}
    <li><span>{{ post.date | date_to_string }} &raquo;</span><a href="{{ post.url }}">{{ post.title }}</a></li>
{% endfor %}
</ul>
