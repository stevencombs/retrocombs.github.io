---
layout: post
title: 'Commodore Plus/4 User’s Manual Chapter 8 - Making Sound and Music on the Plus/4'
date: '2021-04-17'
author: 'Steven B. Combs, Ph.D.'
email: 'steven.combs@gmail.com'
comments: 'yes'
permalink: 'plus4-9'
category: retro
tags:
  -
---

Introduction

Before you read the rest of this post, take a look at my companion video below.

## Series Information

This episode is a small part of my larger Commodore Plus/4 series. You can read the entire series and view additional resources at:

<https://www.stevencombs.com/plus4>

## Companion Disk Image

As I progress through the user's manual, I enter and execute sample programs. The link below is to a `.d81` image that contains every program from each episode. **Like the series, the image is not complete.**

[retroCombs User's Manual Disk Image](/plus4/plus4-users-manual.d81) - **UPDATED AS OF:** 2021-04-17

I use the following file name convention to make it easy to locate specific programs:

<img src="https://www.stevencombs.com/images/design/floppy-disk-small.png" align="right">Sample Program Name: `02 RCOMBS SCROLL.PRG`

* `02` - The chapter number
* `RCOMBS SCROLL` - my self assigned name for the BASIC program which will be immediately identifiable if you follow along.

## User's Manual

As part of my Commodore Plus/4 YouTube series, I work through each chapter of the Plus/4 manual. I've taken the time to scan each chapter so you can read and follow along. Use the link below to view chapter 8:

[Chapter 8 - Making Sound and Music on the Plus/4](https://www.stevencombs.com/plus4/users-manual/p4um-chapter-8.pdf)

Below are the links for previous chapters covered:

1. [Front Matter](/plus4/users-manual/p4um-title-introduction.pdf)
2. [Chapter 1 - Unpaplus4/images/screen-window.pngcking and Setting Up](/plus4/users-manual/p4um-chapter-1.pdf)
3. [Chapter 2 - Using the Keyboard and the Screen](https://www.stevencombs.com/plus4/users-manual/p4um-chapter-2.pdf)
4. [Chapter 3 - Using Software](https://www.stevencombs.com/plus4/users-manual/p4um-chapter-3.pdf)
5. [Chapter 4 - Getting Started](https://www.stevencombs.com/plus4/users-manual/p4um-chapter-4.pdf)
6. [Chapter 5 - Numbers and Calculations](https://www.stevencombs.com/plus4/users-manual/p4um-chapter-5.pdf)
7. [Chapter 6 - Beginning BASIC Programming](https://www.stevencombs.com/plus4/users-manual/p4um-chapter-6.pdf)
8. [Chapter 7 - Using Graphics and Color](https://www.stevencombs.com/plus4/users-manual/p4um-chapter-7.pdf)

## YouTube Video: _‌Commodore Plus/4 User's Manual | Chapter 8 - Making Sound and Music | Beeps, boops and bops!_

In the video below, I ...

<div style="position:relative;padding-top:56.25%;"><p><iframe src="link" frameborder="0" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true" style="position:absolute;top:0;left:0;width:100%;height:100%;"></iframe></p></div>

## Video Errata

None as of 2021-XX-XX.

## Links Mentioned in this Episode:

Below are the links I mention in the video. All Amazon links are affiliate links. Thanks for supporting the blog and the YouTube channel!

1. [Item](link)

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

## Video Introduction

1. Thank you to all my 1500+ subscribers viewers! Glad there are niche folks who like my content.
2. Don't forget to [subscribe to the channel](https://www.youtube.com/stevencombs)!
2. .d81 disk image is available [here](https://www.stevencombs.com/plus4#companion-disk-image).
5. A lot of good feedback on my last blog post/video; [Transfer BASIC Programs in Print to Physical Commodore Computers](https://www.stevencombs.com/print-to-commodore) where I share my technique to move printed programs from, say, users's manuals, to a physical Commodore computer or emulator.

## Introduction

The Commodore Plus/4 includes the (**T**ext **ED**itor)TED 7360 (which is how the C16, C116, Plus/4 and the unreleased V364 (with voice synthesizer) line of computer came to be known as the TED Series). The TED is an integrated MOS Technology chip that handled; video, sound; DRAM refresh, interval timers, and keyboard input handling.

> LEARN MORE: Check out the wonderful [Commodore Plus/4, 16, 264, 364 “TED” Series – The Beginning of the End – Commodore Computers: C64 VIC20 PET C128 Plus4 – 8 Bit PC's](https://www.commodore.ca/commodore-products/commodore-264-plus4-ted-series-the-beginning-of-the-end/) page.

![Commdore TED Series](https://www.stevencombs.com/plus4/images/ted-models.png)

We've seen the five video modes the TED supports in Chapter 7. Let's see what sounds and music can be created from the built-in tone generator that contains two channels; one square wave and a second capable of either a square wave or white noise.

The TED is not as capable as the SID found in the Commodore CBM-II, C64, MAX, or C128. The TED was designed for business applications and the sound capabilities of the chip were downgraded from the SID to better match these applications. Remember, the Plus/4 (and TED series) was originally designed for the productivity users, not the gamer.

The TED featured a simple tone generator that produced two channels of audio. The first channel produced a square wave, and the second could produce either a square wave or white noise. Between the two channels you could hear either two tones or one tone plus noise. This tone generator was designed for business applications, and did not provide the extensive sound features found in the SID chip.



## The Volume Command



## The Sound Command



## A Musical Sound Effect



## Creating a Noise Sound Effect



## Making Some Music



## The Great Plus/4 Music Machine



## Final Thoughts

1. That concludes all eight chapters in the Commodore Plus/4 User's Manual; however, there's a whole lot more in the last half of the manual entitled, the *Plus/4 Encyclopedia*. Never fear, I plan to cover the best parts of that portion of the manual. There's good content in the back half of the manual.

## Join the Fun

Don't miss the fun, <font color="red">SUBSCRIBE</font> to my [YouTube channel](https://www.youtube.com/stevencombs).

Help make this content better! Leave your comments and thoughts below or in the comments [under the YouTube video](link).

Thanks for reading and watching and if you are inclined, please let others know about the blog using the hashtag #retroCombs on your favorite social media platform.

🕹️ retroCombs, OUT!
