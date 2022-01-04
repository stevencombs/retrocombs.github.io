---
layout: post
title: 'MEGA65 core and SD card testing live stream'
date: 2022-01-03
author: 'Steven B. Combs, Ph.D.'
email: 'retrocombs@icloud.com'
comments: yes
permalink: mega65-core-testing-livestream
category: mega65
---

This page is the companion blog post to the live stream conducted on 2022-01-02. During that live stream, I install the latest .COR file on the MEGA65, look at the new and much speedier core (`.COR`) flasher, install the latest SD card files, download the latest .ROM, and review several sections of the onboarding SD card that will ship with the MEGA65.

> **MEMBERSHIP:** I now offer retroCombs memberships from $1 (PET level membership) to $20 (MEGA65 level membership) that include levels in between for all budgets (VIC-20, C64, Plus/4, and C128). If you'd like to support my content and get access to my Discord server along with other cool freebies, check out each level at <https://www.buymeacoffee.com/retroCombs>.

Before you read the rest of this post, look at my companion video below.

----

## Companion YouTube Video

Title: _The latest MEGA65 updates and a speedier .COR flasher!‌_

<div style="position:relative;padding-top:56.25%;"><p><iframe src="https://www.youtube.com/embed/G3sOKQOOiiA" frameborder="0" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true" style="position:absolute;top:0;left:0;width:100%;height:100%;"></iframe></p></div>

## Video Errata

None as of 2022-01-03.

## Links Mentioned in this Episode

Below are the links I mention in this blog post and companion video. All Amazon links are affiliate links. I’d like to thank everyone for your support of the blog and the YouTube channel by starting your purchases here!

1. [All my MEGA65 Content](https://www.stevencombs.com/mega65)
2. [Patch the Original Commodore 65 ROM for the MEGA65, Xemu, Dev Kit, or Nexys4](https://www.stevencombs.com/patch-c65-rom)
3. [Install a MEGA65 Bitstream on Nexys A7 FPGA: the Livestream](https://www.stevencombs.com/mega65-nexys4-livestream)
4. [Run a MEGA65 on your Mac using Xemu](https://www.stevencombs.com/xemu-on-mac)
5. [MEGA65 Book](https://files.mega65.org?id=d668168c-1fef-4560-a530-77e9e237536d)
5. [Hyperkin Ranger Controller](https://amzn.to/3orPuEv)
6. [Hyperkin Trooper Controller](https://amzn.to/3l1CHXj)
7. [MEGA65 File Host](https://files.mega65.org)
8. [MEGA65 Discord](http://www.mega65.org/chat)
9. [Buy Me A Coffee Membership](https://www.buymeacoffee.com/retroCombs)

## Additional Thoughts

1. This live stream was a blast. Admittedly, I wasn't feeling it at the beginning of the session. I had a hard time wrapping myself around how I was going to work my way through these tests and maintain good interactivity with the audience while capturing notes. It was a matter of focus that I wasn't up for on this day which leads to…
2. I was happy when two developers (Deft and Oliver) joined and were active in the live stream chat. It gave me the opportunity to focus on the live stream, the YoloBox Pro, and the MEGA65 while they answered questions from both me and other viewers.
3. As I stated, you should rush now to download you own copy of the [MEGA65 book](https://files.mega65.org?id=d668168c-1fef-4560-a530-77e9e237536d). It's a great resource that I will continue to dig into for more great MEGA65 tips and tricks.
3. The core flasher update we experienced was amazing. Flashing the core went from a ten to fifteen minute process to ninety seconds! I'll soon document the process to use the new core flasher and plan to share it in a follow up video or blog post.
4. As we discovered, using BASIC on the MEGA65 is a better experience than it was on any previous Commodore 8 bit computer, including the [Plus/4](https://www.stevencombs.com/plus4) and the [C128](https://www.stevencombs.com/c128-1) that included enhanced BASIC tools, because of advanced editing tools such as:

    - `LIST P` - pause a list of BASIC commands after each complete page and then top space to see scroll to the next page
    - `DIR W` - list disk contents in columns to fill screen
    - `F8` or `CTRL` + `B`- Scrolls a long BASIC program listing up
    - `F9` or `CTRL` + `V` - Scrolls along BASIC program listing down
    - `F7` - moves forward a word
    - `F6` - moves backwards a word
    - `/` - follow with "PROGRAM NAME" to load program from disk (physical or virtual) and as a plus, if you use this command in directory listing, you no longer need to remove the trailing characters after the "PROGRAM NAME".

5. In this video, I shared how to change back from Commodore 64 mode to MEGA65 mode using `SYS 58552`
6. I showed the games section of the onboarding SD card in a previous live stream; however, I would like to dive into GEOS and then try to use the Pi1541 that I teased at the beginning of the live stream but ran out of time.
6. A huge thank you to Producer, [C128 level member](https://www.stevencombs.com/supporters), Mislav for his generous Super Chat during the live stream!

## Join the Fun

Don't miss the retro-computing fun. <font color="red">SUBSCRIBE</font> to my [YouTube channel](https://www.youtube.com/stevencombs) and check out [my other posts](https://www.stevencombs.com).

Help make this content better! Leave your comments, corrections, additions, and thoughts in the comments below. You can email me at [retrocombs@icloud.com](mailto:retrocombs@icloud.com). Thanks for reading and if you are inclined, please let others know about the blog using the hashtag #retroCombs.

🕹️ retroCombs, OUT!
