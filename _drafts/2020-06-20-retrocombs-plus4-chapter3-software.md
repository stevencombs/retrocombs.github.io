---
layout: post
title: 'retroCombs: Commodore Plus/4 - Chapter 3, Using Software'
date: '2020-06-20'
author: 'Steven B. Combs, Ph.D.'
permalink: plus4-4
email: 'steven.combs@gmail.com'
comments: 'yes'
category: retro
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

In this Commodore Plus/4 retroCombs episode, I cover chapter 3 in the user's manual entitled, _Using Software_.

## Series Information

This episode is part of a series. You can read the entire series and view additional resources at:

<https://www.stevencombs.com/plus4>

## User's Manual

As part of my Commodore Plus/4 YouTube series, I work through each chapter of the Plus/4 manual. I've taken the time to scan each chapter so you can read and follow along. Use the link below for this episode's chapter:

[Chapter 3 - Using Software](https://www.stevencombs.com/plus4/users-manual/p4um-chapter-3.pdf)

1. [Front Matter](/plus4/users-manual/p4um-title-introduction.pdf)
2. [Chapter 1 - Unpacking and Setting Up](/plus4/users-manual/p4um-chapter-1.pdf)
3. [Chapter 2 - Using the Keyboard and the Screen](https://www.stevencombs.com/plus4/users-manual/p4um-chapter-2.pdf)

## YouTube Video: _retroCombs: Commodore Plus/4, Chapter 3, Using Software_

In the video below, I work through Chapter 3 of the user's manual and instead of using old school devices like a datasette and disk drive, I use a new Pi1541.

<div style="position:relative;padding-top:56.25%;"><p><iframe src="https://www.youtube.com/embed/O2Mqi2iFFQI" frameborder="0" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true" style="position:absolute;top:0;left:0;width:100%;height:100%;"></iframe></p></div>

## Links Mentioned in this Episode:

Below are the links mentioned in the video.

1. [PiDRIVE ZERO Raspberry Pi HAT pi1541 1581 Commodore 64 128 Vic-20 Emulator OLED](https://commodore4ever.net/collections/drives/products/pidrive-zero-raspberry-pi-hat-1541-1581-commodore-64-128-vic-20-emulator-oled-pi1541)
2. [Pi1541 Setup](/pi1541-1)
3. [Create a Blank .d64 disk image](pi1541-2)
3. [Tapuino Project](/tapuino-1)

## Key to Keys

Because the Commodore Plus/4 keyboard is so different from modern keyboards, I had to devise and modernize key nomenclature to identify keystroke combinations as shown in the table below:
hat
Key  | Description   | Key  | Description
:----|:--------------|:-----|:-----------
`⇪`  | Caps Lock     | `F1` | Function 1
`C=` | Commodore     | `F2` | Function 2
`⌃`  | Control       | `F3` | Function 3
`⎋`  | Escape        | `F4` | Function 4
`⌂`  | Home          | `F5` | Function 5
`⌫`  | Insert/Delete | `F6` | Function 6
`⏎`  | Return        | `F7` | Function 7
`RS` | Run/Stop      | `F8` | Help
`⇧`  | Shift         |      |

## Previous Episode Errata

Watcher, ????, shared why I was having issues with characters and cursor movements in the previous video. It is something he called, ???. I looked ahead and we will actually learn about this in the next chapter!

User ???? Also provided some amazing feedback. Highly recommend you view his channel.

THANKS TO EVERYONE FOR ALL THE FEEDBACK!!! Makes this project even more fun and I'm learning and relearning so much.

## Introduction

1. "The family of software available...is growing quickly?"
2. Plus/4 can use cartridge, cassette tape, or diskette. Use the cassette or diskette to create and store your own programs.

## Built-In Software

Includes four built-in software packages (more in future episodes). Simply press the F1 key ([see last episode](/plus4-3)).

## Cartridges

Includes a variety of personal, education, business and games software. The only cartridge I have is this diagnostic cart from [TFW8B.com](https://www.thefuturewas8bit.com/diag-264.html). Let's try it:

    * Turn off Plus/4
    * Insert cartridge (label facing up)
    * Turn on Plus/4

## Cassettes

([Commodore 1531](https://www.c64-wiki.com/wiki/Commodore_1531)) and "These tapes are similar to music cassettes." While other computers could use a cassette player, the Commodore uses their own "datasette." Use the datasette to create and store your own programs. We will use Tapuino (adding that modern spin to our retro-computing experience). Let's use the Tapuino to load and save programs.

    Load a program on cassette:

    * Insert a cassette into datasette
    * Rewind tape to beginning (or FFW or RW to a time code)
    * Type `LOAD` (or use the shortcut: `L` then `⇧ + o`) and press `⏎`. The computer will display:

        `PRESS PLAY ON TAPE`

    * Press the play button on the datasette and the screen will go blank followed by the following:

        `FOUND "program name`

    * Press `C=` to load the program or else wait 10 seconds for the program to be loaded automatically.
    * When the program is loaded, `READY` will appear. type `RUN` to run the program. If the program is a basic program, you can use the `LIST` command to view and modify.

    Save a program on cassette:

    * Insert a cassette into datasette
    * Rewind tape to beginning (or FFW or RW to a time code)
    * Type `SAVE "program name` (alpha-numeric up to 16 characters and you can get creative with upper-lower case modes) and press `⏎`. The computer will display:

        `PRESS RECORD AND PLAY ON TAPE`

    * The screen will blank and when the program is saved, will display `READY`.

    > For both the `LOAD` and `SAVE` command, you press `RS` to stop the process. For `SAVE`, press `RS` first then press stop on the datasette.

## Diskette

([Commodore 1551](https://www.c64-wiki.com/wiki/Commodore_1551) that was parallel rather than serial like the 1541/81. Format was not backward compatible - Uses a 5¼ inch diskette 💾 to load and save programs. Let's give it a try:

    ### Load a program on diskette:**

    * Insert a diskette into disk drive and close the protective door.
    * Type `DLOAD "PRGRAM NAME` or `F2` followed by the program name and press `⏎`.

    > I believe the DSAVE, DLOAD, and DIRECTORY commands were added with the Commodore 128. The old muscle memory remembers, `LOAD "FILENAME",8,1`

    * The screen will display the following:

        ```
        SEARCHING FOR PROGRAM NAME

        LOADING

        READY

        █
        ```

    * When the program is loaded, `READY` will appear. type `RUN` to run the program. If the program is a basic program, you can use the `LIST` command to view and modify.

    ### Headering a diskette:**

    * In modern parlance, _Format_. Prepare a diskette to store data.
    * Format for `HEADER` command:

    `HEADER` "disk name", `U`device`#`,`I`.d.`#`,`D`rive`#`

        * _Disk Name_ - Name of the entire disk up to 16 characters
        * _Device #_ - Specifies the diskette drive (usually 8)
        * _I.D. #_ - A user assigned I.D. number that should be unique for each disk
        * _Drive #_ - Used for dual drive models where D0 should be used for single drive models

    Example: `HEADER "LETTERS",U8,I07,D0`

    More information on the `HEADER` command is on page 101 (The Plus/4 Encyclopedia)

    ### Save a programs on diskette:**

    * Insert a diskette into the disk drive
    * Type `DSAVE "program name` (same name constraints as tape) and press `⏎`. The computer will display:

        `???`

    * The screen will blank and when the program is saved, will display `READY`.

  ## The DIRECTORY command

    * Insert a diskette into the disk drive
    * Type `DIRECTORY` and press `⏎`. The Plus/4 will display:

        `???`

    * Type `DIRECTORY "MY*"`. The Plus/4 will display all files that start with `MY`.

## Random Thoughts

In preparation for this episode, I had to assemble the Pi1541. That in itself was [a post](https://www.stevencombs.com/pi1541-1) and [a video](https://youtu.be/iiuS-cI2c6s).

I also delayed this video to create a Tapuino (an Arduino based modern Datasette clone). You can [view that process here](/tapuino-1).

Both of these modern auxilary storage device replacements allowed me to create this video since both of the Plus/4 specific devices are very difficult to find.

## Modern additions to Chapter 3

NOTE: Stephen White
You can also use VICE to create D81 images. With Pi1541 there are some other ways to create blank disk images. Without any images mounted you can do one of the following;- Press ALT-N on the Pi's keyboard to create a new D64 image (it will use the AutobaseName config option for naming). You can also do it in COMMODORE DOS from the READY prompt;- OPEN 1,8,15,”N0:FILENAME.D64,01”:CLOSE 15 In BASIC 7: HEADER “FILENAME.D64”, XYZ, U8 Where XYZ is a 3-char disk ID

## Join the Fun

Help make this series better! Post feedback, questions, and ideas. Let me know if you are following along. Let's make this a community project. For now, Leave your comments and thoughts below or in the comments [under the YouTube video](link).

🕹️ retroCombs OUT!
