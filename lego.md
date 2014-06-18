---
layout: pages
title: LEGO MOCs
---

<img
src="http://www.stevencombs.com/images/design/lego.svg"
style="
  float: left;
  width: 100px;
  margin-left: -7px;
  margin-top: -3px;
  "
/>

I'm a self professed [AFOL](http://en.wikipedia.org/wiki/AFOL). Below are my MOCs and reviews of building brick related products. If you understand those last two sentences, welcome! You are in the right spot. If not, take a look and find out why LEGO is not just for children any more.

Be sure to check out my [Rotating LEGO iPhone Dock](get-the-dock.html) as featured on [Make:](http://makezine.com/2009/09/14/lego-rotating-dock-for-iphoneipod-t/), [Engadget](http://www.engadget.com/2009/09/15/battle-of-the-homebrew-lego-iphone-docks/), [Hackaday](http://hackaday.com/2009/09/09/rotating-iphone-dock-from-legos/), [DVICE](http://www.dvice.com/archives/2009/09/rotating-lego-i.php) and [Gizmodo](http://gizmodo.com/5358067/diy-swivelling-lego-iphone-dock-fulfills-our-weekend-lego-quota).

<ul id="blog-posts" class="posts">
{% for post in site.categories.lego %}
    <li><span>{{ post.date | date_to_string }} &raquo;</span><a href="{{ post.url }}">{{ post.title }}</a></li>
{% endfor %}
</ul>
