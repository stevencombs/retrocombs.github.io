---
layout: post
title: 'An Update: The Submarine Tracking System conversion to BASIC 65'
date: 2022-03-28
author: 'Steven B. Combs, Ph.D.'
email: 'retrocombs@icloud.com'
comments: yes
permalink: basic65-sub-track-update
categories:
  - mega65
  - c128
tags:
  - commodore 128
  - mega65
  - BASIC
  - programming
---

In my blog post, [Converting a Commodore 128 Submarine Tracking System BASIC Program to the MEGA65](/sub-track-sys), I show what the title suggests, converting a Commodore 128 BASIC V7 program, the *Submarine Tracking System*, found on page 116 of the C128 Programmer's Reference Guide to MEGA65 BASIC which began it's life on the unreleased Commodore 65 with BASIC 10. This blog post and companion video is a follow-up to that project. I have a bunch of information to share. Let's get to it.

----

**Table of Contents**

<!-- TOC -->

- [Support the Blog and Channel](#support-the-blog-and-channel)
- [Companion YouTube Video](#companion-youtube-video)
- [Video Errata](#video-errata)
- [Links Mentioned in this Episode](#links-mentioned-in-this-episode)
- [C128 Submarine Tracking System BASIC Program](#c128-submarine-tracking-system-basic-program)
- [BASIC 65 (not Version 10)](#basic-65-not-version-10)
- [Changes to BASIC Program](#changes-to-basic-program)
  - [TIP: `LIST` Command](#tip-list-command)
  - [`BOX` command](#box-command)
  - [`SPEED` command](#speed-command)
  - [`SLEEP` command](#sleep-command)
  - [`CIRCLE command](#circle-command)
  - ['LINE' Command](#line-command)
- [Final Conversion](#final-conversion)
- [What's Next?](#whats-next)
- [Join the Fun](#join-the-fun)

<!-- /TOC -->

----

## Support the Blog and Channel

You can now support me via [my Buy Me A Coffee page](https://www.buymeacoffee.com/retroCombs/) with a onetime activity or become a full member via my fun Commodore inspired membership levels. When you support the channel, you get additional content and fun extras. Check out [the membership levels](https://www.buymeacoffee.com/retroCombs) to learn more.

Thank you to these members for supporting me at [the C128 level](https://www.buymeacoffee.com/retroCombs/membership); making them retroCombs producers:

- [Mislav Krleža](https://twitter.com/KrlezaMislav)
- [Jamie's Hack Shack](https://www.youtube.com/channel/UC-otrG2r_FluXkR8lUYWdPg)
- Boba Fett
- The Lovely Accountant

## Companion YouTube Video

Title: ‌Updating the Submarine Tracking System BASIC 65 Program for the MEGA65 💾

In the video below, I provide an update to my C128 to MEGA65 Submarine Tracking System BASIC program.

<div style="position:relative;padding-top:56.25%;"><p><iframe src="https://www.youtube.com/embed/tOlfdtFYDBM" frameborder="0" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true" style="position:absolute;top:0;left:0;width:100%;height:100%;"></iframe></p></div>

## Video Errata

[UPDATE 2022-04-02] Added information about the `DOT` command in the ['LINE' Command](#line-command) section.

## Links Mentioned in this Episode

Below are the links I mention in this blog post and companion video. All Amazon links are affiliate links. I’d like to thank everyone for your support of the blog and the YouTube channel by starting your purchases here!

1. [Converting a Commodore 128 Submarine Tracking System BASIC Program to the MEGA65](/sub-track-sys)
2. [MEGA65 Computer](https://www.mega65.org)
3. [MEGA65 Discord](https://discord.gg/5DNvESf)
3. [Hyperkin Ranger Controller](https://amzn.to/3orPuEv)
2. [Hyperkin Trooper Controller](https://amzn.to/3l1CHXj)

## C128 Submarine Tracking System BASIC Program

As a reminder, below is the original BASIC V7 C128 *Submarine Tracking System* from the [C128 Programmer's Reference Manual](/images/c128/c128-programmers-reference-guide.pdf).

```realbasic
10 REM SUBMARINE TRACKING SYSTEM (C128)
20 COLOR 0,1:COLOR 4,1:COLOR 1,2:GRAPHIC 1,1
30 BOX 1,0,0,319,199
40 CHAR 1,7,24,"SUBMARINE TRACKING SYSTEM"
50 COLOR 1,3
60 XR=0:YR=0
70 DO
80 CIRCLE 1,160,100,XR,YR,0,360,0,2
90 XR=XR+10:YR=YR+10
100 LOOP UNTIL XR=90
110 DO
120 XR=0:YR=0
130 DO
140 CIRCLE 0,160,100,XR,YR,0,360,0,2
150 COLOR 1,2
160 DRAW 1,160,100+XR:DRAW 0,160,100+XR
170 COLOR 1,3
180 SOUND 1,16000,15
190 CIRCLE 1,160,100,XR,YR,0,360,0,2
200 XR=XR+10:YR=YR+10
210 LOOP UNTIL XR=90
220 LOOP
```
**💾 Download:** [`C128 SUB TRACK`](/images/c128/c-128-sub-track-sys.txt)

Below is the output:

<div class="video-container">
  <video width=500px id="video-bg" autoplay muted loop>
  <source src="/images/c128/c128-sub-track-sys.mp4" type="video/mp4">
  </video>
</div>

My original BASIC 65 version had personal preferences because there were features that weren't yet baked into the MEGA65. Now that we have all the tools to create a one-to-one conversion, I remove my customizations and my goal is a direct translation.

## BASIC 65 (not Version 10)

I learn something each time I visit the [MEGA65 Discord](https://discord.gg/5DNvESf). Much of what I share in this post was a contribution from that community. I've mentioned in the past how great each of them are and as you will learn while reading this blog post or watching the video, none of what follows would have happened without them.

The first change to note is that we do not refer BASIC on the MEGA65 as BASIC 10. [Per Bit Shifter](https://discord.com/channels/719326990221574164/805252939593416705/952606791588528208):

> We decided to name the BASIC for the MEGA65, BASIC 65. Though BASIC-10 was the base, we did so many changes, that we thought, it would be better to name it different. I estimate ca. 30 new commands, many bug fixes and ca. 40% changed/optimised  code. E.g. fast variables, 32bit hex-constants, byte variables and arrays, binary read/write and much more.

All those times I said *BASIC 10* in my last blog post and video; pretend I said, *BASIC 65*. I'll do my best not to refer to BASIC on the MEGA65 as V10.

## Changes to BASIC Program

In the previous version of my BASIC 65 conversion, I could not make the program operate like the C128 version. I made concessions. I'll keep one of those, for clarity, but thanks to the developers, we can now create a duplicate *Submarine Tracking System* on the MEGA65. Drawing the border is the first change.

### TIP: `LIST` Command

Before I dig into the changes made to the BASIC program to match the original C128 Submarine Tracking Program, here's a tip. If you want to view the contents of a .PRG file on a 1581 disk or disk image, use the `LIST` command, followed by the name of the file. This will list the program's file contents but not disturb the current program in memory. Use `SPEED 1` to slow the listing or RUN/STOP to stop the listing. I use the `LIST` command for two primary functions:

1. Review image listing to determine if I'm loading the correct program.
2. List a program and then grab lines out of the program to append to my current program.

It is a great time saver!

### `BOX` command

In my BASIC 65 version of the *Submarine Tracking System*, I create a border using the `LINE` command instead of the `BOX` command from the C128 version. I did this because I could not get the text to overwrite the box line when drawn on top. There was [an undocumented feature](https://discord.com/channels/719326990221574164/805252939593416705/952592491390050455) of the `BOX` command on the MEGA65. Per developer Bit Shifter:

> Ctrl-B is not underlined, but "blank". `CHAR` has its own control codes, which correspond only partially with the text mode control chars. But it seems that I forgot to add this code to the table in the manual (see picture). I'll update the manual next week, when I'm back from my vacation.

Below is that line of code:

`40 CHAR 7,192,1,1,2,"{uloff} SUBMARINE TRACKING SYSTEM",$29000`

`{uloff}` = CTRL + B

In this new version, I draw the border like the C128 version for consistency instead of middle aligned, as shown in the previous video. The `{uloff}` removes the border beneath the text. SWEET!

### `SPEED` command

I add a single `SPEED` command. The MEGA65 cannot duplicate the C128's ≈2 MHz speed. The MEGA65 provides three options: 1 MHz, 3.5 MHz, and 40.5 MHz. I choose the default 1 Mhz and found this a close match. Any faster and you cannot see the submarine blip as I share later.

### `SLEEP` command

In my previous BASIC 65 version, I used the `SLEEP` command several times to slow things down; however, now that I can create an almost exact duplicate, I no longer need those entries. Memory freed!

### `CIRCLE command

None of what I share up to this point required any new changes to the `MEGA65.ROM` file; however, in order for the MEGA65 to draw circles like the C128, point-to-point at the North position (270°) clockwise, the developers had to make changes, and it was Bit Shifter to the rescue. Que the superhero music!

If you review my previous attempt at the conversion, you see that the MEGA65 created circles by drawing four quadrants at the same time. While it was a cool radar-type of effect, it was dissimilar from the way other Commodore computers draw circles and made an exact conversions impossible unless I plotted each point on the circle; a lengthy and cycle sucking process.

The new `CIRCLE` command allows me to recreate the C128 version but came with a development journey. Bit Shifter created a version that drew a circle end-to-end but it started at 0° instead of 270°. With an earlier version of the `MEGA65.ROM`, I could use the arc feature of the `CIRCLE` command to draw two arcs (270° to 0° and 0° to 270°) to create an end-to-end circle starting at 270°. The circles appeared to be drawn in the same fashion as the C128, but it took two circles command.

I resigned myself to the fact that I was going to have a single difference between my version and the C128 version and while I could live with this, Bit Shifter noted my consternation, or was tired of hearing from me about this in the Discord channel, in the ability of the MEGA65 to make an exact duplicate of the C128 version. He got to work and created a new `CIRCLE` command variable that he now calls, [the Combs Flag](https://discord.com/channels/719326990221574164/795760112425369610/952526613860450415)! And the term might catch up on with [Maurice](https://discord.com/channels/719326990221574164/731186768170450955/957004171855413318) saying the name is "fantastic" and [Lydon](https://discord.com/channels/719326990221574164/731186768170450955/957004281859424316) suggesting the flag name be listed that way in the user's manual. I'm down with that and learning that my name might live in MEGA65 history put a huge smile on my face.

> **NOTE:** While not required for my project, Bit Shifter threw in a bright and shiny new `ELLIPSE` command. Read the `CIRCLE` and `EllIPSE` [parameters from Bit Shifter](https://discord.com/channels/719326990221574164/795760112425369610/952526613860450415).

Let's compare code and see how to use the *Combs Flag*. Line 80, in the Submarine Tracking System program, is the first to use the `CIRCLE` command. Below is the C128 version:

`80 CIRCLE 1,160,100,XR,YR,0,360,0,2`

Next is the shiny new BASIC 65 version complete with the *Combs Flag*, or `4` at the end of the line:

`80 CIRCLE 160,95,XR,4`

Even with the "Combs Flag", the BASIC 65 version is shorter and easier to use than the C128 version.

### 'LINE' Command

To draw the submarine blip, the C128 uses the `DRAW` command in line `160`. I have replaced `DRAW` with the BASIC 65 `LINE` command. If you specify a single start coordinate and omit an end coordinate, you get a single point (pixel); like the `DRAW` command. Converting line `160` now produces the same haphazard blip found in the C128 version that sometimes you see and sometimes you don't. I prefer the larger blip and added time to view the blip, but to keep as consistent as possible with the C128 version, "it is what it is!"

[UPDATE: 2022-04-02] The MEGA65 includes the `DOT` command. This command has three flags, x coordinate, y coordinate, and an optional color. Below is a BASIC program that places a single red dot on a black background at coordinates 50, 50:

```
10 SCREEN 320,200,4
20 DOT 50,50,2
30 GETKEY A$
40 SCREEN CLOSE
```

## Final Conversion

With all changes implemented, below is the new MEGA65 BASIC version.

```realbasic
10 REM SUBMARINE TRACKING SYSTEM
20 SPEED 1 : PEN 0 : GRAPHIC CLR : SCREEN 320,200,4
30 BOX 0,0,319,199
40 CHAR 7,192,1,1,2,"{uloff}SUBMARINE TRACKING SYSTEM",$29000
50 PEN 2
60 XR=10
70 DO
80 CIRCLE 160,95,XR
90 XR=XR+10
100 LOOP UNTIL XR=90
110 DO
120 XR=10
130 DO
140 PEN 0 : CIRCLE 160,95,XR
150 PEN 1
160 LINE 160,95+XR : PEN 0 : LINE 160,95+XR
170 PEN 2
180 SOUND 1,16000,15
190 PEN 2 : CIRCLE 160,95,XR
200 XR=XR+10
210 LOOP UNTIL XR = 90
220 LOOP
```

That's a close conversion and one I am happy with. I couldn't have done it without the responsiveness of Bit Shifter. As I've said, the MEGA65 community is fabulous and they listen to their users. I can't wait to see what else is in store for us with the release of the MEGA65.

## What's Next?

As I mentioned in the last video, there are additions I recommend, but at the time of this writing, I want to explore a single one; using a sprite to animate the blip. When I do, I will share with you. It will be a fun exercise to explore sprite creation and use in BASIC 65 and to use the *Combs Flag* again!

## Join the Fun

Don't miss the retro-computing fun. <font color="red">SUBSCRIBE</font> to my [YouTube channel](https://www.youtube.com/stevencombs) and check out [my other posts]().

Help make this content better! Leave your comments, corrections, additions, and thoughts in the comments below. You can email me at [retrocombs@icloud.com](mailto:retrocombs@icloud.com). Thanks for reading and if you are inclined, please let others know about the blog using the hashtag #retroCombs.

🕹️ retroCombs, OUT!
