---
layout: pages
title: Art
---

<img class="category" src="http://www.stevencombs.com/images/design/art.svg" />

I've been a doodler all my life. I can remember several times in school and church being scolded for doodling and not paying attention. Today I still find myself doodling during meetings and I often find myself sketching images to represent the ideas presented during meetings or presentations. In mid-2014, I discovered a whole movement around something I had been doing for a couple of years; the creation of *sketchnotes*. Those who practice the “art” share their sketchnotes with the world to encourage others. I’ve decided to do the same on this page.

Another enjoyment of mine is to create in the wonderful [Paper by FiftyThree](https://www.fiftythree.com/paper) iOS app with the equally wonderful [Pencil by FiftyThree](http://www.amazon.com/gp/product/B00JP12300/ref=as_li_tl?ie=UTF8&camp=1789&creative=390957&creativeASIN=B00JP12300&linkCode=as2&tag=bricinmypockb-20&linkId=DHKTVRXUYJNKKOTX) bluetooth stylus. With these two tools, I can experiment with pencil, pen, water color, etc on my iPad air without the need to drag out the physical art tools. I am by no means an artist; however, I do enjoy giving it my best shot.

Below is a list of my posts that share my creations as well as reviews of the tools I use to create them. While the art and sketches may not be appreciated, there may be nuggets of information about processes and tools that others will find useful.

## My Art
<ul id="blog-posts" class="posts">
{% for post in site.categories.art %}
    <li><span>{{ post.date | date_to_string }} &raquo;</span><a href="{{ post.url }}">{{ post.title }}</a></li>
{% endfor %}
</ul>
