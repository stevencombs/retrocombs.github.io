---
layout: pages
title: Amateur Radio (Ham)
permalink: ham
---

<img class="category" src="/images/design/ham.svg" width="20%" />

2015 became the year that I decided to work on one of my bucket list items – obtain my amateur radio license. My grandfather was an amateur radio operator and this has been somewhat of a fascination of mine for years. Once I learned that Morse code was no longer a requirement, I decided to take the plunge. I made this decision on my 50th birthday and I think I waited entirely too long!

I have not taken the Technician Class license exam yet, but will update this page once I have.

The posts below document my experience through the process as well as thoughts on the equipment I use and hopefully later, my experiences as an amateur radio operator.

<ul id="blog-posts" class="posts">
{% for post in site.categories.ham %}
    <li><span>{{ post.date | date_to_string }} &raquo; </span><a href="{{ post.url }}">{{ post.title }}</a></li>
{% endfor %}
</ul>
