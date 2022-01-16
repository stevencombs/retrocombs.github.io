---
layout: post
title: 'Commodore Plus/4 User’s Manual, Chapter 3 - Using Software'
date: '2020-08-02'
author: 'Steven B. Combs, Ph.D.'
permalink: plus4-4
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
  - keyboard
  - keys
  - characters
  - software
  - diskdrive
  - datasette
  - cassette
---

In this Commodore Plus/4 retroCombs episode, I cover chapter 3 of the Commodore Plus/4 user's manual. This chapter is dedicated to _Using Software_ and there are several ways to load and save software using; cartridges, datasettes, and diskettes. In this post and the accompanying video, I cover each auxiliary storage device in detail; however, I add a modern spin and instead of the original devices; I use a new [264 diagnostic cartridge](https://www.thefuturewas8bit.com/diag-264.html), a [Tapuino](https://www.stevencombs.com/tapuino-1), and a [Pi1541](https://www.stevencombs.com/pi1541-1).

> **MEMBERSHIP:** I now offer retroCombs memberships from $1 (PET level membership) to $20 (MEGA65 level membership) that include levels in between for all budgets (VIC-20, C64, Plus/4, and C128). If you'd like to support my content and get access to my Discord server along with other cool freebies, check out each level at <https://www.buymeacoffee.com/retroCombs>.

<!-- TOC -->

**Table of Contents**

- [Series Information](#series-information)
- [Companion Disk Image (In Progress)](#companion-disk-image-in-progress)
- [User's Manual](#users-manual)
- [YouTube Video: _retroCombs: Commodore Plus/4 User's Manual, Chapter 3 - Using Software_](#youtube-video-_retrocombs-commodore-plus4-users-manual-chapter-3---using-software_)
- [Links Mentioned in this Episode:](#links-mentioned-in-this-episode)
- [Key to Keys](#key-to-keys)
- [Episode Errata](#episode-errata)
- [Introduction](#introduction)
- [Built-In Software](#built-in-software)
- [Cartridges](#cartridges)
- [Cassettes](#cassettes)
  - [Load a program on cassette (or Tapuino)](#load-a-program-on-cassette-or-tapuino)
  - [Save a program on cassette (or Tapuino)](#save-a-program-on-cassette-or-tapuino)
- [Diskette](#diskette)
  - [Load a program on diskette:](#load-a-program-on-diskette)
  - [Headering a diskette](#headering-a-diskette)
  - [Save a programs on diskette](#save-a-programs-on-diskette)
- [The DIRECTORY command](#the-directory-command)
- [BONUS: SCRATCH command](#bonus-scratch-command)
- [Modern additions to Chapter 3](#modern-additions-to-chapter-3)
- [Random Thoughts](#random-thoughts)
- [Join the Fun](#join-the-fun)

<!-- /TOC -->

## Series Information

This episode is a small part of my larger Commodore Plus/4 series. You can read the entire series and view additional resources at:

<https://www.stevencombs.com/plus4>

## Companion Disk Image

As I progress through the user's manual, I enter and execute sample programs. The link below is to a `.d81` image that contains every program from each episode. **Currently, the image is not complete since we still have several chapters to go.**

[retroCombs User's Manual Disk Image](/plus4/plus4-users-manual.d81) - **UPDATED AS OF:** 2020-11-01

I use the following file name convention to make it easy to locate specific programs:

<img src="/images/design/floppy-disk-small.png" align="right">Sample Program Name: `02 RCOMBS SCROLL.PRG`

* `02` - The chapter number
* `RCOMBS SCROLL` - my self assigned name for the BASIC program which will be immediately identifiable if you follow along.

## User's Manual

As part of my Commodore Plus/4 YouTube series, I work through each chapter of the Plus/4 manual. I've taken the time to scan each chapter so you can read and follow along. Use the link below to view chapter 3:

[Chapter 3 - Using Software](https://www.stevencombs.com/plus4/users-manual/p4um-chapter-3.pdf)

Below are the links for previous chapters covered:

1. [Front Matter](/plus4/users-manual/p4um-title-introduction.pdf)
2. [Chapter 1 - Unpacking and Setting Up](/plus4/users-manual/p4um-chapter-1.pdf)
3. [Chapter 2 - Using the Keyboard and the Screen](https://www.stevencombs.com/plus4/users-manual/p4um-chapter-2.pdf)

## YouTube Video: _retroCombs: Commodore Plus/4 User's Manual, Chapter 3 - Using Software_

In the video below, I work through Chapter 3 of the user's manual. I deviate slightly from the manual in topic presentation order to add clarity and I also add a bonus command. Along the way, I also share how to use a cartridge, the Tapuino, and the Pi1541

<div style="position:relative;padding-top:56.25%;"><p><iframe src="https://www.youtube.com/embed/B9_hKwjlqAA" frameborder="0" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true" style="position:absolute;top:0;left:0;width:100%;height:100%;"></iframe></p></div>

## Links Mentioned in this Episode:

Below are the links I mention in the video.

1. [PiDRIVE ZERO Raspberry Pi HAT pi1541 1581 Commodore 64 128 Vic-20 Emulator OLED](https://commodore4ever.net/collections/drives/products/pidrive-zero-raspberry-pi-hat-1541-1581-commodore-64-128-vic-20-emulator-oled-pi1541)
1. [Pi1541 Setup](/pi1541-1)
1. [Create a Blank .d64 disk image](/pi1541-2)
1. [Tapuino Project](/tapuino-1)
1. [DIAG 264 Cartridge](https://www.thefuturewas8bit.com/diag-264.html)

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

1. I mention how the screen blanks when loading programs from the Tapuino (or Datasette), but wondered how Icicle Works got around this limitation with a loading screen. Chuck Hutchins shared that, at least in the case of Icicle Works, the program loads in two parts. The screen blanks (because the C64 and the Plus/4 must blank the screen to access the I/O - a limitation of the custom video chips) while a fast loader is loaded into memory and then loads the main software in a second compressed audio source.
2. Chuck also shared that the Plus/4 I/O commands such as `DLOAD`, `SCRATCH`, and `HEADER` are also avaialble on PET Computers with Basic 4.0, the C128 (BASIC 7), and the C65 (BASIC 10).

## Introduction

1. "The family of software available...is growing quickly?" It did? It may have in Europe; however, the U.S. units couldn't use most of it since they were in PAL format.
2. Plus/4 can use cartridge, cassette tape, or diskette. Use the cassette or diskette to create and store your own programs.

## Built-In Software

The Plus/4 includes four built-in software packages that are covered in their own user's manual that's even thicker than computer's user manual. To load built-in software, press the `F1` key ([see last episode](/plus4-3)). To exit this software you have to reset or power on/off the Plus/4.

## Cartridges

Cartridges include a variety of personal, education, business and games software. The only cartridge I own is a diagnostic cart from [TFW8B.com](https://www.thefuturewas8bit.com/diag-264.html). Let's try it:

* Turn off Plus/4
* Insert cartridge (label facing up)
* Turn on Plus/4

## Cassettes

The [Commodore 1531](https://www.c64-wiki.com/wiki/Commodore_1531) and tapes are similar to music cassettes. While other computers could use a standard music playing cassette player, the Commodore uses its own "Datasette." Use the Datasette to `SAVE` and `LOAD` programs. I use a Tapuino instead of a Datasette. Let's use the Tapuino to load and save programs.

### Load a program on cassette (or Tapuino)

* Insert a cassette into Datasette (cue up a .tap file on the Tapuino using the LCD screen an momentary switches)
* Rewind tape to beginning or FFW or RW to a time code (no action required)
* Type `LOAD` (or use the shortcut: `L` then `⇧ + o`) and press `⏎`. The computer will display:

    `PRESS PLAY ON TAPE`

* Press the play button on the Datasette (or Tapuino) and the screen will will blank and then display:

    `FOUND "PROGRAM NAME"`

* Press `C=` to load the program or else wait 10 seconds for the program to be loaded automatically
* When the program is loaded, `READY` will appear
* Type `RUN` to run the program

If the program is a basic program, you can use the `LIST` command to view and modify the program contents.

### Save a program on cassette (or Tapuino)

* Insert a cassette into Datasette (Select the Save option on the Tapuino and choose manual or automatic naming of the .tap file)
* Rewind tape to beginning or FFW or RW to a time code (no action required)
* Type `SAVE "PROGRAM NAME"` (alpha-numeric up to 16 characters and you can get creative with upper-lower case modes) and press `⏎`. The computer will display:

    `PRESS RECORD AND PLAY ON TAPE`

* Press the Play button (Select Play on the Tapuino)
* The screen will blank and when the program is saved, will display `READY`

> For both the `LOAD` and `SAVE` command, press `RS` to stop the process. For `SAVE`, press `RS` first then press stop on the Datasette.

## Diskette

([Commodore 1551](https://www.c64-wiki.com/wiki/Commodore_1551) that was a parallel, rather than serial, device that was faster than the 1541. The default format was not backward compatible. It uses a 5¼ inch diskette 💾 to load and save programs. Let's give it a try:

### Load a program on diskette:

* Insert a diskette into disk drive and close the protective door (load a .d64 image on the Pi1541)
* Type `DLOAD "PROGRAM NAME"` or `F2` followed by the program name and press `⏎`.

> **NOTE:** I believe the DSAVE, DLOAD, and DIRECTORY commands were added with the Commodore 128. The old muscle memory remembers, `LOAD "FILENAME",8,1`

* The screen will display the following:

    ```
    SEARCHING FOR PROGRAM NAME

    LOADING

    READY

    █
    ```

* When the program is loaded, `READY` will appear.
* Type `RUN` to run the program.
* If the program is a BASIC program, use the `LIST` command to view and modify

### Headering a diskette

* In modern parlance; _format_ and prepares a diskette to store data
* Format for `HEADER` command:

    `HEADER` `"DISK NAME"`, `U`device`#`,`I`.d.`#`,`D`rive`#`

    * _Disk Name_ - Name of the entire disk up to 16 characters
    * _Device #_ - Specifies the diskette drive (usually 8)
    * _I.D.#_ - A user assigned I.D. number that should be unique for each disk
    * _Drive #_ - Used for dual drive models where D0 should be used for single drive models

    Example: `HEADER "LETTERS",U8,I07,D0`

More information on the `HEADER` command is on page 101 (The Plus/4 Encyclopedia)

### Save a programs on diskette

* Insert a diskette into the disk drive (load a .d64 image on the Pi1541)
* Type `DSAVE "PROGRAM NAME"` (same name constraints as cassette drive storage) and press `⏎`. The computer will display:

    `PRESS PLAY AND RECORD`

* The screen will blank and when the program is saved, the Plus/4 will display:

    `READY`

## The DIRECTORY command

* Insert a diskette into the disk drive
* Type `DIRECTORY` + `⏎`, or press `F3`, and the Plus/4 will display the contents of a diskette drive

> **TIP:** Type `DIRECTORY "MY*"`. The Plus/4 will display all files that start with `MY`.

## BONUS: SCRATCH command

The `SCRATCH` command deletes a program on the diskette.

* Type `SCRATCH` `"PROGRAM NAME"` + `⏎`
* The program will be permanently deleted from the diskette

## Modern additions to Chapter 3

In preparation for this episode, I had to assemble the Pi1541. That in itself was [a post](https://www.stevencombs.com/pi1541-1) and [a video](https://youtu.be/iiuS-cI2c6s).

I also delayed this video to create a Tapuino (an Arduino based modern Datasette clone). You can [view that process here](/tapuino-1).

Both of these modern auxiliary storage device replacements allowed me to create this video since both of the Plus/4 specific devices are very difficult to find.

## Random Thoughts

1. The video is longer than I had planned. I thought since chapter 3 was so short in the user's manual, the video would be short as well; however, I couldn't help but opine on each command. Some may say "ramble" but I found myself reminiscing about using these devices and commands…
2. …which leads me to how much I enjoyed putting this video together.
3. I remain impressed with the Plus/4. Sure, I understand that it is not as capable as C128 or C64; however, the updated basic sure does make this computer easier to use which in turn makes it so much fun.
4. The Pi1541 and the Tapuino are just "so cool." I mean, come on! Using a Raspberry Pi and an Arduino to emulate two retro storage devices continues to fascinate me and make this user's manual project even more geeky.
5. I'm looking forward to chapter 4. It's going to help me understand the character tomfoolery I ran into in chapter 2.
6. I decided, during a run after editing the video, that I'm going to create a disk image that will contain all the programs I create myself or type from the user's manual. This will require me to come up with a naming convention for each program file...hmmm...any ideas?

## Join the Fun

Help make this series better! Post feedback, questions, and ideas. Let me know if you are following along. Let's make this a community project. For now, Leave your comments and thoughts below or in the comments [under the YouTube video](https://youtu.be/B9_hKwjlqAA).

Thanks for watching and if you are so inclined, please let other Commodore fans know about the series by sharing these videos using #retroCombs.

🕹️ retroCombs, OUT!

<!--stackedit_data:
eyJoaXN0b3J5IjpbNTA0NzM1MDI2LDg1MDQ3OTk3MiwtMTQ3OD
c5OTQ5OCwxNDA5NDU4MzE1LDE5MjI2MzI2MzYsLTU5NTAwNzE1
NiwtMTIyODM1ODIxOSw1ODA2OTg0MzQsNTY4NDc1MTU4LC0xNj
UwMjA4NzU4LC0zNTI5MzM3MzYsLTE3NDI4MDc1NzEsMjEzOTQy
NDYyN119
-->
