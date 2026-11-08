---
layout: pages
title: 'MEGA65 User’s Guide Series'
permalink: mega65-users-guide
wide: true
---

{%- assign ug_banner = "/images/banners/retroCombs_topic-banner_mega65-users-guide_final_phone.png?v=" | append: site.github.build_revision | relative_url -%}
{%- assign ug_banner_2x = "/images/banners/retroCombs_topic-banner_mega65-users-guide_final_phone@2x.png?v=" | append: site.github.build_revision | relative_url -%}
<p class="ug-banner"><img src="{{ ug_banner }}" srcset="{{ ug_banner }} 1x, {{ ug_banner_2x }} 2x" alt="MEGA65 User's Guide" width="1200" height="250"></p>

![MEGA65 User's Guide Series](/images/mega65-ug/mega65-users-guide.jpg)

<div class="guide-actions">
<a class="btn primary" href="{{ site.data.guide.playlist }}">Watch the MEGA65 User's Guide playlist</a>
</div>

If you find this useful, the best help is a channel membership. A tip helps too. The [supporters page](/supporters) is where I say thanks.

{% include member-cta.html channel="retrocombs" lead=false %}

[Leave a tip](https://paypal.me/stevencombs)

## Chapters

{% include guide-list.html %}

## Appendices

{% include guide-list.html group="appendices" %}
