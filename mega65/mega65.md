---
layout: pages
title: 'MEGA65 Resource Page (v.5)'
permalink: 'mega65'
category: retro
comments: false
tags:
  - commodore
  - mega65

---

Followers know I own one of 100 MEGA65 DevKits (#261) to closely follow and enjoy the development of the MEGA65. That ownership allows me to experience, once again, my love of Commodore computers and the joy of BASIC and 8-bit computers. Was it a pricey purchase? For Sure. Was it worth it? Every penny and then some!

<div class="video-container">
  <video width=500px id="video-bg" autoplay muted loop>
  <source src="https://mega65.org/assets/video/m65back.mp4" type="video/mp4">
  </video>
</div>

<sup>Animation Courtesy [MEGA65](https://mega65.org)</sup>

I use my DevKit not in the true developer sense, but rather to help spread the word of why every Commodore retro-computing fan needs to start saving their pennies and of course selfishly, to have a great time learning about this computer that "could have been." Want information on the MEGA65? Check out [the official page](https://www.mega65.org).

I've created [much content](https://www.stevencombs.com/mega65) about the MEGA65. This page collects all my MEGA65 content onto a single quick reference page and will become the starting point for "all my things MEGA65." Bookmark/Favorite the page now. Go ahead. I'll wait. Done? Great, let's continue on to the content.

## Links to Posts

Below is a link to each blog post in the series. Most blog posts contain a companion YouTube video and links that support the post content.

<ul id="blog-posts" class="posts">
{% for post in site.categories.mega65 %}
    <li><span>{{ post.date | date_to_string }} &raquo; </span><a href="{{ post.url }}">{{ post.title }}</a></li><div> {{ post.excerpt }} </div>
{% endfor %}
</ul>

## My Favorite MEGA65 Links

* [MEGA65 Homepage](https://www.mega65.org) - Learn all about the MEGA65 and what makes this retro recreation so special for Commodore computer fans.
* [MEGA65 YouTube Channel](https://www.youtube.com/channel/UCEz3CQ343r4ssvIdmhDauMQ) - The latest update videos and development streams from the MEGA65 team. MUST WATCH!
* [MEGA65 filehost](https://files.mega65.org/) - Growing collection of titles and utilities for the MEGA65.
* [Xemu](https://github.lgb.hu/xemu/) - Use this emulator on your Mac, Linux, or Windows PC to run a virtual MEGA65 environment.
* [MEGA65 GitHub](https://github.com/MEGA65) - All the official repositories for the MEGA65 project. User highlights include the user's guide, tools, and Xemu (see above).
* [MEGA65 Discord channel](https://discord.gg/8zVbk2hK) - Home to quite possibly the friendliest community of developers. Think 8-bit BBS level support without the communication lag.
* More to come...

Recommend a link. Send your link via email to [retrocombs@icloud.com](mailto:retrocombs@icloud.com).

## Key to Keys

Because the MEGA65 keyboard is so different from modern keyboards, I use the modified "key to keys" nomenclature I developed for my [Commodore Plus/4 series](https://www.stevencombs.com/plus4). Keystroke combinations found in blog posts are shown in the table below:

| Key     | Description   | Key  | Description |
|:--------|:--------------|:-----|:------------|
| `⇪`     | Caps Lock     | `F1` | Function 1  |
| `[C=]`  | Commodore     | `F2` | Function 2  |
| `⌃`     | Control       | `F3` | Function 3  |
| `⎋`     | Escape        | `F4` | Function 4  |
| `⌂`     | Clear/Home    | `F5` | Function 5  |
| `⌫`     | Insert Delete | `F6` | Function 6  |
| `⏎`     | Return        | `F7` | Function 7  |
| `[R/S]` | Run/Stop      | `F8` | Help        |
| `⇧`     | Shift         | `␣`  | Space       |
| `↑`     | Cursor Up     | `↓`  | Cursor Down |
| `→`     | Cursor Right  | `←`  | Cursor Left |
