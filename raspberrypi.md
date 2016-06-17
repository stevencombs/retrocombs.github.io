---
layout: pages
title: Raspberry Pi Presentation
---

<img class="category" src="http://www.stevencombs.com/images/design/embedded.svg" />
On June 17th, I was the guest speaker for our local Chamber of Commerce TANK Talk. I was asked to give a presentation about the Raspberry Pi and its use in physical computing, making and education. I decided to expand the presentation to include other physical computing devices such as the Arduino and a Kickstarter project. This page collects my online presentation as well as additional notes, images and links. It will also become a clearing house for additional information I will include in future Raspberry Pi presentations.

## Presentation

<iframe src="https://docs.google.com/presentation/d/10fMnVYXXvyr7c9OVoYEU8KGW-8GPnJ0iVIjMvlUsTvI/embed?start=false&amp;loop=true&amp;delayms=3000" frameborder="0" width="640" height="389" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true">
</iframe>

## Links

Coming Soon

## My Raspberry Pi blog posts (list updates automatically)
<ul id="blog-posts" class="posts">
{% for post in site.categories.raspberrypi %}
    <li><span>{{ post.date | date_to_string }} &raquo;</span><a href="{{ post.url }}">{{ post.title }}</a></li>
{% endfor %}
</ul>

![Getting ready for the presentation](https://scontent.ford1-1.fna.fbcdn.net/t31.0-8/13482925_10154251193643839_5171870026505777217_o.jpg)

## Feedback

Have a questions or want to send feedback? You can [send me email](mailto:steven.combs@gmail.com).
