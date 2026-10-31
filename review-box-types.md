---
layout: page
title: Review box types
permalink: /review-box-types
description: Component preview of the retroCombs review box types.
sitemap: false
search: false
ads: false
robots: noindex, nofollow
---

Preview of `_includes/review-box.html`. Each box is stamped EXAMPLE. The live posts use the same copy without that stamp. REWIND is the default when `type` is omitted.

## REWIND

{% include review-box.html
   example="true"
   score="4"
   price="$20"
   where="(as of Oct 2026)"
   summary="Example of the default REWIND box. The score strip, ladder and channel badge are unchanged."
   channel="retrocombs" %}

## FIRST LOOK

{% include review-box.html
   type="first-look"
   example="true"
   price="$350 retail, $100 off direct from Lenovo"
   where="(as of Feb 2020)"
   summary="After three months of hunting for an Android tablet to replace my iPad, I open the box. Not a premium unboxing, but it's adequate, with a few surprises."
   full_review="/lenovo-yoga-tab-review"
   channel="tech" %}

## BENCH

{% include review-box.html
   type="bench"
   example="true"
   difficulty="Easy"
   time="An afternoon"
   cost="$20"
   status="Working"
   summary="Example only. Difficulty, time, cost and status each hide when that field is left off."
   parts="Example parts line."
   channel="tech" %}

{% include review-box.html
   type="bench"
   example="true"
   cost="$260 total: $100 + $85 + $20 + $55 (Dec 2022)"
   status="Working"
   summary="Four upgrades turn my PET from a show piece into a computer I use: SD card loading, 32 KB RAM and ROM 4, joysticks, sound and Wi-Fi. They all work together."
   parts="Parts are linked in the post (TFW8B, BIT ZEAL)"
   channel="retrocombs" %}

## COMPARED

{% include review-box.html
   type="compared"
   example="true"
   price="Writing Kit $4.99"
   where="(as of Jan 2013)"
   summary="I tried seven Markdown editors on my iPad. Writing Kit is the clear winner, well worth $4.99, and an indispensable tool. Textastic came very close."
   pick1_name="Writing Kit"
   pick1_badge="MY PICK"
   pick1_text="The clear winner. I wrote about 80% of this post in it. Well worth $4.99."
   pick2_name="Textastic"
   pick2_role="runner-up"
   pick2_text="Very close: a useful keyboard and the best navigation wheel on iOS."
   channel="tech" %}

{% include review-box.html
   type="compared"
   example="true"
   summary="I tried Boxee, XBMC and Plex on my Mac mini media center. Plex wins: it streams to my iPad, Kindle Fire and Roku, and its add-ons actually work."
   pick1_name="Plex"
   pick1_badge="MY PICK"
   pick1_text="Streams to my iPad, Kindle Fire and Roku, and its add-ons actually work."
   pick2_name="XBMC"
   pick2_text="Gorgeous and tweakable, but cumbersome, and it lacks features I want."
   pick3_name="Boxee"
   pick3_text="Buggy, hung my Mac mini, and dropping desktop support after 1.5."
   channel="tech" %}

## TAKE

{% include review-box.html
   type="take"
   example="true"
   chip="RECOMMENDED"
   price="Free (open source)"
   summary="If you code, write in Markdown, or just like monospaced fonts, you'll enjoy this open source font from Adobe. My one wish is italics."
   channel="tech" %}

{% include review-box.html
   type="take"
   example="true"
   summary="The geekiest gadget I've ever owned. Ten tips for new owners: a calculator, Terminal practice, the fish shell, a new home screen and more. Not a full review."
   channel="tech" %}
