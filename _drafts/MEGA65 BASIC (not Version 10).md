---
layout: post
title: 'An Update: BASIC 10 Submarine Tracking System to MEGA65 BASIC'
date: 2022-03-18
author: 'Steven B. Combs, Ph.D.'
email: 'retrocombs@icloud.com'
comments: yes
permalink: basic10-to-mega65-basic-update
categories: 
  - mega65
  - c128
tags:
  - commodore 128
  - mega65
  - BASIC
  - programming
---

In my blog post, [Converting a Commodore 128 Submarine Tracking System BASIC Program to the MEGA65](https://www.stevencombs.com/sub-track-sys), I show what the title suggests, converting a Commodore 128 BASIC V7 program, the Submarine Tracking System, found on page 116 of the C128 Programmer's Reference Guide to MEGA65 BASIC which began it's life on the unreleased Commodore 65 with BASIC 10. This blog post and companion video is a follow-up to that project. I have a bunch of information to share. Let's get to it.

----

**Table of Contents**



----

## Support the Blog and Channel

You can now support me via [my Buy Me A Coffee page](https://www.buymeacoffee.com/retroCombs/) with a one-time activity or become a full member via my fun Commodore inspired membership levels. When you support the channel, you get additional content and fun extras. Check out [the membership levels](https://www.buymeacoffee.com/retroCombs) to learn more.

Thank you to these members for supporting me at [the C128 level](https://www.buymeacoffee.com/retroCombs/membership); making them retroCombs producers:

- [Mislav Krleža](https://twitter.com/KrlezaMislav)
- [Jamie's Hack Shack](https://www.youtube.com/channel/UC-otrG2r_FluXkR8lUYWdPg)
- Boba Fett
- The Lovely Accountant

## Companion YouTube Video

Title: _Title_

In the video below, I ...

<div style="position:relative;padding-top:56.25%;"><p><iframe src="link" frameborder="0" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true" style="position:absolute;top:0;left:0;width:100%;height:100%;"></iframe></p></div>

## Video Errata

None as of 2022-03-18.

## Links Mentioned in this Episode

Below are the links I mention in this blog post and companion video. All Amazon links are affiliate links. I’d like to thank everyone for your support of the blog and the YouTube channel by starting your purchases here!

1. [Converting a Commodore 128 Submarine Tracking System BASIC Program to the MEGA65](https://www.stevencombs.com/sub-track-sys)
2. [MEGA65 Computer](https://www.mega65.org)
3. [Hyperkin Ranger Controller](https://amzn.to/3orPuEv)
2. [Hyperkin Trooper Controller](https://amzn.to/3l1CHXj)

## C128 Submarine Tracking System BASIC Program



## MEGA65 BASIC (not Version 10)

I learn something each time I visit the [MEGA65 Discord](https://discord.gg/5DNvESf). Much of what I share from her on out was due to help from that community. I've mentioned in the past how great each of them are and as you will learn while reading this blog post or watching the video, none of what follows would have happened without them.

The first change to note is that BASIC on the MEGA65 is not referred to as BASIC 10. [Per Bit Shifter](https://discord.com/channels/719326990221574164/805252939593416705/952606791588528208):

> We decided to name the BASIC for the MEGA65 BASIC 65. Though BASIC-10 was the base, we did so many changes, that we thought, it would be better to name it different. I estimate ca. 30 new commands, many bug fixes and ca. 40% changed/optimised  code. E.g. fast variables, 32bit hex-constants, byte variables and arrays, binary read/write and much more.

All those times I said *BASIC 10* in my last blog post and video; pretend I said, *MEGA65 BASIC*. I'll do my best not refer to BASIC on the MEGA65 as V10.

## Changes to BASIC Program

### Use the box command

In my version MEGA65 BASIC version of the Submarine Tracking System, I create the border using the `LINE` command. This is a change from the use of the `BOX` command from the C128 version.

### Changes to text background allows me to now



### Use the `SPEED` command



### Use the `SLEEP` command



## .ROM Enhancements

Bit Shifter
Version of .ROM
Circles are now created like the C128 version thanks to developer Bit Shifter
Must include start and end angles to mimic the C128 version.

## What's Next?

As I mentioned in the last video, there are additional I recommend, but at the time of this writing, I want to explore one, using a sprite to animate the blip. When I do, I will share with you. It will be a fun exercise to explore sprite creation and use in MEGA65 BASIC (see, I finally got it!).

## Join the Fun

Don't miss the retro-computing fun. <font color="red">SUBSCRIBE</font> to my [YouTube channel](https://www.youtube.com/stevencombs) and check out [my other posts](https://www.stevencombs.com).

Help make this content better! Leave your comments, corrections, additions, and thoughts in the comments below. You can email me at [retrocombs@icloud.com](mailto:retrocombs@icloud.com). Thanks for reading and if you are inclined, please let others know about the blog using the hashtag #retroCombs.

🕹️ retroCombs, OUT!
