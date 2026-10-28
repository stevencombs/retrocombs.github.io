---
layout: pages
title: Blog Posts
permalink: blog
ads: false
---

<p class="explore-jump"><a href="{{ "/explore" | relative_url }}">Explore all posts</a></p>

<img class="category" src="/images/design/blog.svg" width="20%" />

This page lists every site post. It can be a bit unwieldy to search through this list and I recommend that you use this page to simply review the most recent blog posts or browse and look for interesting titles. If you use a Mac, consider typing ⌘ + `F` to bring up the *Find* dialog box and search for a specific word or title.

<a class="rss-link" title="RSS feed" id="rss" href="/feed.xml"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="28" height="28" aria-hidden="true" focusable="false"><rect width="24" height="24" fill="#FF9400"/><circle cx="6.5" cy="17.5" r="2.2" fill="#F5ECDD"/><path d="M4.5 11.2a8.3 8.3 0 0 1 8.3 8.3" fill="none" stroke="#F5ECDD" stroke-width="2.4" stroke-linecap="square"/><path d="M4.5 6.2a13.3 13.3 0 0 1 13.3 13.3" fill="none" stroke="#F5ECDD" stroke-width="2.4" stroke-linecap="square"/></svg><span class="sr-only">RSS feed</span></a> Click the RSS logo on the left to subscribe using your favorite RSS reader. Don’t have one? Let me [suggest one](https://itunes.apple.com/us/app/reeder-2/id880001334?mt=12&uo=4&at=10I9LR&ct=iTunes).

{% include post-cards.html items=site.posts page_size=24 %}
