---
layout: post
title: 'Commodore Plus/4 User’s Manual, Chapter 1 - Unpacking and Setting Up'
date: '2020-06-04'
author: 'Steven B. Combs, Ph.D.'
permalink: plus4-2
email: 'steven.combs@gmail.com'
comments: yes
category: plus4
tags:
  - commodore
  - retro
  - plus4
  - unboxing
  - vic20
  - video
  - machinelanguage
  - 1980s
---

In the next Commodore Plus/4 retroCombs episode, I open the Commodore Plus/4 manual for the first time to look at _Chapter 1: Unpacking and Setting Up_. Since [the previous episode](https://youtu.be/_faxuAlFHII) was an Open the Box, unpacking is already complete so this episode focuses on setting up the computer. Watch the video below and then come back to this post to read some additional thoughts, find links to everything mentioned, and learn a few more additional tips.

> **MEMBERSHIP:** I now offer retroCombs memberships from $1 (PET level membership) to $20 (MEGA65 level membership) that include levels in between for all budgets (VIC-20, C64, Plus/4, and C128). If you'd like to support my content and get access to my Discord server along with other cool freebies, check out each level at <https://www.buymeacoffee.com/retroCombs>.

**Table of Contents**
<!-- TOC -->

- [Series Information](#series-information)
- [Companion Disk Image (In Progress)](#companion-disk-image-in-progress)
- [User's Manual](#users-manual)
- [YouTube Video: _retroCombs: Commodore Plus/4 User's Manual, Chapter 1 - Unpacking and Setting Up_](#youtube-video-_retrocombs-commodore-plus4-users-manual-chapter-1---unpacking-and-setting-up_)
- [Links Mentioned in this Episode:](#links-mentioned-in-this-episode)
- [Key to Keys](#key-to-keys)
- [Episode Errata](#episode-errata)
- [Random Thoughts](#random-thoughts)
- [Join the Fun](#join-the-fun)

<!-- /TOC -->

## Series Information

This episode is part of a series. You can read the entire series and view additional resources at:

<https://www.stevencombs.com/plus4>

## Companion Disk Image

As I progress through the user's manual, I enter and execute sample programs. The link below is to a `.d81` image that contains every program from each episode. **Currently, the image is not complete since we still have several chapters to go.**

[retroCombs User's Manual Disk Image](/plus4/plus4-users-manual.d81) - **UPDATED AS OF:** 2020-11-01

I use the following file name convention to make it easy to locate specific programs:

<img src="/images/design/floppy-disk-small.png" align="right">Sample Program Name: `02 RCOMBS SCROLL.PRG`

* `02` - The chapter number
* `RCOMBS SCROLL` - my self assigned name for the BASIC program which will be immediately identifiable if you follow along.

## User's Manual

As part of my Commodore Plus/4 YouTube series, I work through each chapter of the Plus/4 manual. I've taken the time to scan each chapter so you can read and follow along. Use the link below for this episode's chapter:

[Chapter 1 - Unpacking and Setting Up](/plus4/users-manual/p4um-chapter-1.pdf)

## YouTube Video: _retroCombs: Commodore Plus/4 User's Manual, Chapter 1 - Unpacking and Setting Up_

In the video below, I connect the Commodore Plus/4, not to a television or monitor, but to a computer and OBS Studio and then walk through Chapter 1 of the user's manual. I also discuss how I will use the Plus/4 with modern components and systems; a maker and geeky approach to retro-computing.

<div style="position:relative;padding-top:56.25%;"><p><iframe src="https://www.youtube.com/embed/fstxGJwj7jg" frameborder="0" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true" style="position:absolute;top:0;left:0;width:100%;height:100%;"></iframe></p></div>

## Links Mentioned in this Episode:

Below are the links mentioned in the video.

1. [kenable 5 Pin Male Din Plug to 4 x RCA Phono Male Plugs Audio Cable 2m (~6 feet)](https://amzn.to/3cvSq9t)
2. [Portable USB 2.0 AV/RCA Composite and S-Video Audio Video Capture Card Adapter VHS DVD](https://amzn.to/2Y0yKW3)
3. [PiDRIVE ZERO Raspberry Pi HAT pi1541 1581 Commodore 64 128 Vic-20 Emulator OLED](https://www.ebay.com/itm/PiDRIVE-ZERO-Raspberry-Pi-HAT-pi1541-1581-Commodore-64-128-Vic-20-Emulator-OLED/333491606262?ssPageName=STRK%3AMEBIDX%3AIT&_trksid=p2060353.m2749.l2649)

## Key to Keys

Because the Commodore Plus/4 keyboard is so different from modern keyboards, I devised a modern key nomenclature to identify keystroke combinations as shown in the table below:

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

## Episode Errata

THANKS TO EVERYONE FOR THE FEEDBACK!!! It makes this project more fun and I'm (re)learning  much. I will add video corrections or additions below.

## Random Thoughts

You really can learn something when you read an instruction manual. I found that out while reading an out-of-place paragraph about the use of the _Reset_ button. When you hold the _RUN/STOP_ key and push the _Reset_ button (unique to the Plus/4), you enter the Machine Language Monitor (also unique to the Plus/4). The extra feature here is that doing so soft reboots the computer and keeps the current program in memory. Using the _Reset_ button by itself will completely reboot the computer. Keep this in mind if you run into an issue with a program and haven't saved it recently.

I was surprised how quickly my muscle memory returned when typing on the Plus/4 keyboard. The layout is so different from modern computers, I thought the "relearning" curve would take longer. I guess all those years typing lines and lines of code from [RUN magazine](https://en.wikipedia.org/wiki/Run_(magazine)) burned those keystrokes into my old brain. After the video, I took a peek at some programs from the user's manual. I couldn't help myself; I took some time to type a few of them into the Plus/4 and "runned" them. So much fun. Even in 2020, there's a satisfaction to typing a program, bug fixing, and then executing the code. I've programmed in Python and Ruby on modern PCs, and I just don't get that same feeling of satisfaction. Maybe it's nostalgia, but I want to believe there is just something special about these 8-Bit computers and the basic programming language.

I'm fond of the spiral-bound manual. I always wondered why every software manual wasn't bound this way and still prefer them to today's electronic manuals. I've read that the Plus/4 user's manual is not as comprehensive, of the same quality, or as fun, as the Commodore 64 manual. I really need to get a C64 manual to compare. I have a VIC-20 manual and there is a stark difference in print quality. I think I'll share that during the next video.

I mention in the video that I plan to look at modern components to replace items such as the display (we took care of that in this episode), tape drive, floppy drive, printer, and a modem. I believe I've sourced each alternative and one of them, the PiDrive Zero, is linked above. If you have ideas, please send them to me. I'm also accepting donations such as software, cartridges, original joysticks, etc. If you have spares, please contact me and we'll find a way to get them here.

## Join the Fun

Help make this series better! Post feedback, questions, and ideas. Let me know if you are following along. Let's make this a community project. For now, Leave your comments and thoughts below or in the comments [under the YouTube video](https://youtu.be/fstxGJwj7jg).

🕹️ retroCombs, OUT!
