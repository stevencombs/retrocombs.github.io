---
layout: pages
title: Google
---

<img class="category" src="http://www.stevencombs.com/images/design/google.svg" />

I write often about [Apple](apple.html) products; however, I am also a fan of Google products and services. Along with my iOS and OS X devices, I also own a Chromebook and Nexus 6. Chrome is my primary browser on all devices. I'm a Google Fi customer and can't even remember a day when I didn't use Google Drive or Google Inbox to access my important files and email. I guess you can call me an Apple-Google fanboy.

#Chrome
Below are posts that share my experience with Chrome OS and/or the Chrome browser.
<img nopin="nopin" style="float: right; width: 40px;" src="/images/design/chrome.svg" />
<ul id="blog-posts" class="posts">
{% for post in site.categories.chrome %}
    <li><span>{{ post.date | date_to_string }} &raquo;</span><a href="{{ post.url }}">{{ post.title }}</a></li>
{% endfor %}
</ul>

#Android
My experiences with Google Fi and Android are in the posts listed below.

<ul id="blog-posts" class="posts">
{% for post in site.categories.android %}
    <li><span>{{ post.date | date_to_string }} &raquo;</span><a href="{{ post.url }}">{{ post.title }}</a></li>
{% endfor %}
</ul>
