---
layout: post
title: 'Part 2 (#6 → 10): Ten cool things you will be able to do with the MEGA65 Computer'
date: '2021-05-20'
author: 'Steven B. Combs, Ph.D.'
email: 'steven.combs@gmail.com'
comments: 'yes'``
permalink: 'mega65-4'
category: 'retro'
tags:
  - commodore
  - retrocomputing
  - mega65
  - top10
---

Commodore computing fans will soon have a new device to add to their collection of retro-computers, the MEGA65. In this blog post and companion video, I take a look at what makes the MEGA65 special and then share items six through ten of the ten cool things you will be able to do with the MEGA65 that you can't do with any other Commodore-inspired recreations such as The C64.

<!-- TOC -->
- [YouTube Video: _‌Ten cool things you will be able to do with the MEGA65 Computer_](#youtube-video-_‌ten-cool-things-you-will-be-able-to-do-with-the-mega65-computer_)
- [Video Errata](#video-errata)
- [Links Mentioned in this Episode:](#links-mentioned-in-this-episode)
- [Ten Things](#ten-things)
  - [1. Use an enhanced Commodore-layout keyboard](#1-use-an-enhanced-commodore-layout-keyboard)
  - [2. Play C65 games that "could have been" - even rival Amiga](#2-play-c65-games-that-could-have-been---even-rival-amiga)
  - [3. Use C64 Cartridges (Are C65 carts on their way?)](#3-use-c64-cartridges-are-c65-carts-on-their-way)
  - [4. Learn to program (BASIC 10 and Eleven)](#4-learn-to-program-basic-10-and-eleven)
  - [5. Run a C65 specific version of GEOS](#5-run-a-c65-specific-version-of-geos)
  - [6. Use a wired/wireless USB mouse](#6-use-a-wiredwireless-usb-mouse)
  - [7. Use retro joysticks](#7-use-retro-joysticks)
  - [8. Load software from multiple storage devices (SD, IEC, internal Floppy Disk)](#8-load-software-from-multiple-storage-devices-sd-iec-internal-floppy-disk)
  - [9. Manage the MEGA65 using a modern PC](#9-manage-the-mega65-using-a-modern-pc)
  - [10. Install additional cores](#10-install-additional-cores)
  - [Bonus: Connect to a BBS and the Internet via Ethernet](#bonus-connect-to-a-bbs-and-the-internet-via-ethernet)
- [Final Thoughts](#final-thoughts)
- [Join the Fun](#join-the-fun)

<!-- /TOC -->

## YouTube Video: _‌Ten cool things you will be able to do with the MEGA65 Computer_

In the video below, I share items six through ten of the ten cool things that will excite Commodore retro-computing fans about the release of the MEGA65.

<div style="position:relative;padding-top:56.25%;"><p><iframe src="link" frameborder="0" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true" style="position:absolute;top:0;left:0;width:100%;height:100%;"></iframe></p></div>

## Video Errata

None as of 2021-06-19.

## Links Mentioned in this Episode:

Below are the links I mention in the video. All Amazon links are affiliate links. Thanks for supporting the blog and the YouTube channel!

1. [MEGA65](https://mega65.org/)
2. [The C64 maxi](https://amzn.to/35o84CF)
3. [The C64 mini](https://amzn.to/35kudC5)
4. [The VIC20](https://retrogames.biz/thevic20)
5. [Pi 1541](https://www.stevencombs.com/pi1541)
6. [IEC Cable](https://amzn.to/3vl2N9I)
7. [Competition Pro Joystick](https://retromash.com/galleries/competition-pro/)
8. [Hyperkin DB0 Joystick](https://amzn.to/35iMfom)
9. [Hyperkin DB9 Paddle Controller](https://amzn.to/2RT6Uw4)

## Introduction

…

<!-- Well, that didn't take long. I've had several comments that my game captures are the wrong video format. I recorded in NTSC and all games should have been set for PAL. I'll make a correction in part 2. The developers let me know that all games are designed for PAL mode. -->


### 6. Run a C65 specific version of GEOS

If you have a working mouse and a Commodore computer, you must use GEOS.

falk — 2021-06-08 at 6:35 PM
MEGA has the right to distribute GEOS with the MEGA65 machine, especially all parts available on CBM files, TopDesk 1.x officially is open-sourced by permission of the original owner GEOS-USER-CLUB Germany. Kernal is based on the reverse engineered source available <https://github.com/mist64>, CONFIGURE is based on reverse engineering project here:

<https://mumu21.se/>

All other Apps/Tools/Binaries are bundled without source for the MEGA65 release, but the stuff builds and start without it.
Still a pile of work to do, but getting there :slight_smile:


### 7. Play Amiga MOD files

@M3wP's Manche mod-player being able to play Amiga MOD music on a MEGA65 is a cool highlight worth promoting

### 8. Load software from multiple storage devices (SD, IEC, internal Floppy Disk)

And, yes. You can order 3 1/2 inch floppy disks in both DS/DD and DS/HD. Which do you need? ...

> gardners — Today at 7:38 PM
> @retroCombs writing to real disks doesn't yet work.
> I'm actively working on this at the moment.
> <https://c65gs.blogspot.com/2021/06/working-on-floppy-writing.html>
> Working on floppy writing
> Tonight I am trying to make some progress again on writing to floppies in the MEGA65.  Reading has been more or less working for a long time...

> Hopefully it won't be too far off now. This is the penalty (and bonus) of doing everything ourselves from the ground up, including the floppy controller. Because of this we can even read or write Amiga and other funny disks later, and also support HD disks quite easily.

### 9. Manage the MEGA65 using a modern PC

M65 Connect is available for Mac, Linux, and Windows with feature parity. M65 Connect provides tool to connect directly to the FPGA board to access the SD card, …

### 10. Install additional cores

The MEGA65 is built on top of a ????? [FPGA](https://en.wikipedia.org/wiki/Field-programmable_gate_array). The beauty of an FPGA is ability to configure the circuitry to act like other digital devices, such as our favorite retro-computers. While the MEGA65's primary design is to be a modern remake of the in development Commodore 65, it includes enough space, or slots, where you can install other "cores" to configure the FPGA to act at other devices. Current cores include the Gameboy and ZX Spectrum; however, we can look forward to Atari, Amiga, and other retro-computing cores for the MEGA65.

Some readers are probably say, "but retroCombs, I can do this on a Mister!" Yes, for me the real issue behind all of these cores on various devices is the keyboard. I'm probably never going to use the ZX Spectum core on my MEGA. Why? Great question! It's the keyboard, retro-computing enthusiast friend of mine. When you add a ZX Spectrum core to the MEGA65, you have to determine the keyboard mapping. This is why I backed the ZX Spectrum Next 2. I want an original hardware experience that includes an accurate keyboard.

I might throw and Amiga core on the MEGA65 when it's available, along with other Commodore cores; however, the Gameboy and ZX Spectrum cores don't appeal to me on this machine. There are far too many obtainable recreations that provide an original experience.

### Bonus 2: Make a phone call

## Final Thoughts

1.

## Join the Fun

Don't miss the fun, <font color="red">SUBSCRIBE</font> to my [YouTube channel](https://www.youtube.com/stevencombs).

Help make this content better! Leave your comments and thoughts below or in the comments [under the YouTube video](link).

Thanks for reading and watching and if you are so inclined, please let others know about the blog using the hashtag #retroCombs.

🕹️ retroCombs, OUT!


<!--

1. Use an enhanced Commodore-layout keyboard
2. Play C65 games that "could have been" - even rival Amiga
3. Use C64 Cartridges (Are C65 carts on their way?)
4. Learn to program (BASIC 10 and Eleven)
5. Run a C65 specific version of GEOS
6. Use a wired/wireless USB mouse
7. Use retro joysticks
8. Load software from multiple storage devices (SD, IEC, internal Floppy Disk)
9. Manage the MEGA65 using a modern PC
10. Install additional cores

  Bonus: Connect to a BBS and the Internet via Ethernet

-->
