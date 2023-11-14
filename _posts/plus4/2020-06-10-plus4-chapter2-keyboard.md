---
layout: post
title: 'Commodore Plus/4 User’s Manual, Chapter 2 - Using the Keyboard and the Screen'
date: '2020-06-10'
author: 'Steven B. Combs, Ph.D.'
permalink: plus4-3
email: 'retrocombs@icloud.com'
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
  - 1980s
---

In this Commodore Plus/4 retroCombs episode, I cover chapter 2 in the user's manual entitled, _Using the Keyboard and the Screen_. This chapter is chock full of keyboard instructions to help the user move around the screen, change text highlighting, modify lines of code, and create special characters.

In this blog post and the companions video, I run through each concept and present ways to uses these features. I even discover some "weirdness" with Commodore Basic. It's a packed episode that may take a couple of viewings to get through, but be sure you watch the entire episode if you want to see all the tips and quirks discovered.

> **MEMBERSHIP:** I now offer retroCombs memberships from $1 (PET level membership) to $20 (MEGA65 level membership) that include levels in between for all budgets (VIC-20, C64, Plus/4, and C128). If you'd like to support my content and get access to my Discord server along with other cool freebies, check out each level at <https://www.buymeacoffee.com/retroCombs>.

**Table of Contents**

<!-- TOC -->

- [Series Information](#series-information)
- [Companion Disk Image (In Progress)](#companion-disk-image-in-progress)
- [User's Manual](#users-manual)
- [YouTube Video: _retroCombs: Commodore Plus/4 User's Manual, Chapter 2 - Using the Keyboard and the Screen_](#youtube-video-_retrocombs-commodore-plus4-users-manual-chapter-2---using-the-keyboard-and-the-screen_)
- [Links Mentioned in this Episode:](#links-mentioned-in-this-episode)
- [Key to Keys](#key-to-keys)
- [Episode Errata](#episode-errata)
- [Episode Contents](#episode-contents)
- [Random Thoughts](#random-thoughts)
- [Join the Fun](#join-the-fun)

<!-- /TOC -->

## Series Information

This episode is part of a series. You can read the entire series and view additional resources at:

</plus4>

## Companion Disk Image

As I progress through the user's manual, I enter and execute sample programs. The link below is to a `.d81` image that contains every program from each episode. **Currently, the image is not complete since we still have several chapters to go.**

[retroCombs User's Manual Disk Image](commodore-disk-images/plus4-users-manual.d81) - **UPDATED AS OF:** 2020-11-01

I use the following file name convention to make it easy to locate specific programs:

<img src="/images/design/floppy-disk-small.png" align="right">Sample Program Name: `02 RCOMBS SCROLL.PRG`

* `02` - The chapter number
* `RCOMBS SCROLL` - my self assigned name for the BASIC program which will be immediately identifiable if you follow along.

## User's Manual

As part of my Commodore Plus/4 YouTube series, I work through each chapter of the Plus/4 manual. I've taken the time to scan each chapter so you can read and follow along. Use the link below for this episode's chapter:

[Chapter 2 - Using the Keyboard and the Screen](/plus4/users-manual/p4um-chapter-2.pdf)

1. [Front Matter](/plus4/users-manual/p4um-title-introduction.pdf)
2. [Chapter 1 - Unpacking and Setting Up](/plus4/users-manual/p4um-chapter-1.pdf)

## YouTube Video: _retroCombs: Commodore Plus/4 User's Manual, Chapter 2 - Using the Keyboard and the Screen_

In the video below, I work through Chapter 2 of the user's manual. Along the way, I discover some keyboard tricks and discover some editing quirks.

<div style="position:relative;padding-top:56.25%;"><p><iframe src="https://www.youtube.com/embed/O2Mqi2iFFQI" frameborder="0" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true" style="position:absolute;top:0;left:0;width:100%;height:100%;"></iframe></p></div>

## Links Mentioned in this Episode:

Below are the links mentioned in the video.

1. [PiDRIVE ZERO Raspberry Pi HAT pi1541 1581 Commodore 64 128 Vic-20 Emulator OLED](https://www.ebay.com/itm/PiDRIVE-ZERO-Raspberry-Pi-HAT-pi1541-1581-Commodore-64-128-Vic-20-Emulator-OLED/333491606262?ssPageName=STRK%3AMEBIDX%3AIT&_trksid=p2060353.m2749.l2649)
2. [uxcell 6 pin connectors 4 pack (#ad)](https://amzn.to/3fe4huQ)

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

## Episode Contents

Because the Commodore Plus/4 keyboard is so different from modern keyboards, I devised a modern key nomenclature to identify keystroke combinations as shown in the table below:
In this episode I describe and demonstrate each of the items below:

1. Upper-case versus lower-case mode: Default is upper-case graphics mode. Switch between them with `⇧` + `C=`.

    > **WARNING:** Don't use the ⇧ key when typing basic programs.

2. Run Stop `RS`: Stops a running program. `⇧` + `RS` loads and runs the first program on a disk drive

    > **TIP:** If there is a program in memory, `⇧` + `RS` will also fail to load the first program on a disk drive, but will still execute the run command on the code in memory.

3. Cursor Keys: Covered in last episode, but Plus/4 includes all four keys!
4. Clear Home `⌂`: Home, clear, and clear window functions. Home moves the cursor to the top-left corner of the screen (home). `⇧` + `⌂` move to cursor to the home and clears the screen. 2 x `⌂` Clears the main and other windows (more on windowing in chapter 4).
5. Control `⌃`: Works with other keys that we will learn throughout this series. `⌃` + S will pausing printing (!) and listing of a program. Any key resumes the listing.
6. Commodore Key `C=`: Work with other keys. `C=` shift key for the left graphic characters on the keys, the bottom row of colors on the top number keys, and will slow down program scrolling.
7. Color Controls:

    * `⌃` + `9` = Reverse On
    * `⌃` + `0` = Reverse Off
    * `⌃` + `,` = Reverse On
    * `⌃` + `.` = Reverse Off

8. Escape Key `⎋`: Do not use like a shift (`⇧`) key. Tap `⎋` and then tap another key as shown below (I'm not covering them all but we will add in future chapters):

    * `⎋`, `A` = Auto Insert
    * `⎋`, `C` = Cancel Auto Insert
    * `⎋`, `D` = Delete Line
    * `⎋`, `I` = Insert Line
    * `⎋`, `J` = Move to Beginning of Line
    * `⎋`, `K` = Move to End of Line
    * `⎋`, `L` = Screen Scrolling On
    * `⎋`, `M` = Screen Scrolling Off
    * `⎋`, `O` = Cancel Insert, Quote (Chapter 4), Reverse, and Flash
    * `⎋`, `P` = Erase From Position to left
    * `⎋`, `Q` = Erase from Position to Right
    * `⎋`, `X` = Cancel an Escape functions

9. Special Keys: Per the manual, the keyboard contains special keys such as: `£`, `π`, `<`, `>`, `[`, `]`, `←`, and `↑`.
10. Function Keys: Type the `KEY` command to display the fuctions of the keys as shown below:

    ```
    KEY 1, "GRAPHIC" or built-in software
    KEY 2, "DLOAD"+ CHR$(34)
    KEY 3, "DIRECTORY"+ CHR$(13)
    KEY 4, "SCNCLR"+ CHR$(13)
    KEY 5, "DSAVE"+ CHR$(34)
    KEY 6, "RUN"+ CHR$(13)
    KEY 7, "LIST"+ CHR$(13)
    KEY 8, "HELP"+ CHR$(13)
    ```
    I demonstrate each function key.

    > **TIP:** CHR$(34) = `"` and CHR$(13) = `⏎`

    Function Keys `F4`, `F5`, `F6`, and `F7` require `⇧` and you can reprogram the keys as I demonstrate. A soft reset will retain the reprogramming and a hard reset will clear the reprogramming.

## Random Thoughts

I can't believe I learned so much about this computer just by reviewing the use of the keyboard. I was also surprised to find how unpolished Commodore Basic was in the Plus/4 I have on hand. As I demonstrate in the video, there are some odd things happening when I use reverse and flash characters in keystrokes.

I didn't share this issue in the video; however, when using reverse and flash characters in a line of code and then using the cursor keys to move left and right in those same lines of code, will display some odd reverse characters. I'm going to explore these more, but my guess is there's some Commodore fan who can help explain this. If so, please reach out to me or drop a comment below.

## Join the Fun

Help make this series better! Post feedback, questions, and ideas. Let me know if you are following along. Let's make this a community project. For now, Leave your comments and thoughts below or in the comments [under the YouTube video](https://youtu.be/O2Mqi2iFFQI).

🕹️ retroCombs, OUT!
