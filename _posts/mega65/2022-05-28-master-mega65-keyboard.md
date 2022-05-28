---
layout: post
title: 'Master the MEGA65 Keyboard'
date: 2022-05-28
author: 'Steven B. Combs, Ph.D.'
email: 'retrocombs@icloud.com'
comments: yes
permalink: master-mega65-keyboard
category: mega65
---

I love a good keyboard shortcut and consider myself a Mac shortcut connoisseur. One of the fun features of the MEGA65 is the keyboard; both the hardware and the functionality. In this blog post and companion video, I cover the keyboard layout, functions, and shortcuts you need to master the MEGA65 keyboard. Time to learn how to be a keyboard NINJA on the MEGA65.

While you might think advanced keyboard combinations started with the MEGA65, many of them have their routes back to the original PET, refined as part of the [Plus/4](https://www.stevencombs.com/plus4) and [C128](https://www.stevencombs.com/c128-1), and optimized by the MEGA65 team. There's a fun keyboard history that I won't cover, that you should not ignore. I've used a Commodore keyboard since the early 1980s and it was fun to revisit those keystrokes with my MEGA65 DevKit.

----

**Table of Contents**

<!-- TOC -->

- [Support the Blog and Channel](#support-the-blog-and-channel)
  - [Executive Producers](#executive-producers)
  - [Producers](#producers)
- [Companion YouTube Video](#companion-youtube-video)
- [Video Errata](#video-errata)
- [Links Mentioned in this Episode](#links-mentioned-in-this-episode)
- [`INFO` Command](#info-command)
- [Keyboard Layout](#keyboard-layout)
- [Command Keys](#command-keys)
  - [Return](#return)
  - [Shift](#shift)
  - [SHIFT LOCK](#shift-lock)
  - [CAPS LOCK](#caps-lock)
  - [ALT](#alt)
  - [CTRL](#ctrl)
  - [About MEGA65 Colors](#about-mega65-colors)
  - [MEGA](#mega)
  - [Lowercase Mode Characters](#lowercase-mode-characters)
  - [RUN/STOP](#runstop)
  - [RESTORE](#restore)
  - [Cursor Keys](#cursor-keys)
  - [Arrow Keys](#arrow-keys)
  - [INST/DEL](#instdel)
  - [CLR/HOME](#clrhome)
  - [NO SCROLL](#no-scroll)
- [Function/HELP (F15/16) Keys](#functionhelp-f1516-keys)
- [ESC Codes](#esc-codes)
- [Booting Cores](#booting-cores)
- [Conclusion](#conclusion)
- [Join the Fun](#join-the-fun)

<!-- /TOC -->

----

## Support the Blog and Channel

You can now support me via [my Buy Me A Coffee page](https://www.buymeacoffee.com/retroCombs/) with a onetime activity or become a full member via my fun Commodore inspired membership levels. When you support the channel, you get additional content and fun extras. Check out [the membership levels](https://www.buymeacoffee.com/retroCombs) to learn more.

Thank you to these members for supporting me at [the C128 level](https://www.buymeacoffee.com/retroCombs/membership); making them retroCombs producers:

### Executive Producers
- Boba Fett
- [Mislav Krleža](https://twitter.com/KrlezaMislav)
- [mindrail](https://twitter.com/mindrail) <font color="blue">**!!NEW!!**</font>

### Producers
- [Jamie's Hack Shack](https://www.youtube.com/channel/UC-otrG2r_FluXkR8lUYWdPg)
- The Lovely Accountant

## Companion YouTube Video

Title: _Master the MEGA65 Keyboard \| MEGA-sized retroCombs Edition_

In the video below, I cover all aspects of the MEGA65 keyboard.

<div style="position:relative;padding-top:56.25%;"><p><iframe src="https://www.youtube.com/embed/Ylji1yc_VRQ" frameborder="0" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true" style="position:absolute;top:0;left:0;width:100%;height:100%;"></iframe></p></div>

## Video Errata

None as of 2022-05-28.

## Links Mentioned in this Episode

Below are the links I mention in this blog post and companion video. All Amazon links are affiliate links. I’d like to thank everyone for your support of the blog and the YouTube channel by starting your purchases here!

1. [MEGA65 Computer](https://www.mega65.org)
2. [MEGA65 Book](https://files.mega65.org?id=d668168c-1fef-4560-a530-77e9e237536d)

## `INFO` Command

Before we master the keyboard, here's a tip. There's a command users will find useful:

`INFO` | This command presents the following results:

```
INFO:         DATA BYTES  USED /  FREE
--------------------------------------
ROM-V   920333   PROGRAM:    0 / 55037
SPEED   40 MHZ   SCALARS:    8 /  1464
BANK4 --------   STRINGS:    0 / 54980
BANK5 --------   ARRAYS :    0 / 54980
```

This is handy when you need quick info on these settings.

## Keyboard Layout

The layout of the keys on the MEGA65 keyboard is true to the layout found on the proposed Commodore 65 and therefore is a natural evolution of the keyboards around on the PET, VIC-20, C64, Plus/4, and C128. It includes popular keys in familiar locations found on these previous computers along with additional keys that functionality to both the MEGA65 hardware and software. Below is an image of the keyboard layout.

![MEGA65 Keyboard Layout](link)

The first thing you will notice, if you are new to Commodore computers, is the location for many common keys such as `( ) " ' @ *` and others are not the same as a modern Mac or PC keyboards. These changes will throw off your muscle memory. But don't despair, your fingers will get use to the arrangement and after a while, even swapping back and forth isn't confusing. Your brain will adjust. If you were an original Commodore computer users, you'll be surprised how familiar and nostalgic the MEGA65 keyboard feels.

The alpha-numeric keys are in the standard QWERTY layout; however, there are keys you won't find on a modern keyboard.

## Command Keys

There are several command keys on the MEGA65. Many of these will be familiar and others are new (or old). Users with Commodore computer experience will feel right at home and enjoy the new keys and features the MEGA65 brings to the retro-computing experience. We will start with the most basic of command keys, RETURN.

### Return

In the words of Jim Butterfield from his [Commodore 64 Training Video](https://youtu.be/J9WnHuGjZ38?t=859), the RETURN tells the computer to "DO IT." That can mean many things on the MEGA65 such as:

1. Save a BASIC program line into memory.
2. Activate an immediate mode command.
3. Display incorrect syntax error messages.
4. Accept program data input.
5. Accept program default data.
5. Produce a carriage return.

Software developers can program this key for other uses.

### Shift

There are two SHIFT keys, one on the left and one on the right. These keystrokes are called *Shifted Codes* and, while similar to their modern counterparts, they have MEGA65 specific functions.

Holding the SHIFT key and tapping a key with two front graphics will produce the right graphic. When the MEGA65 is in lowercase mode, holding SHIFT and an alpha character displays the uppercase version. Holding SHIFT and a numeric/symbol key will produce the alternate character displayed on the key.

Holding SHIFT with a function key will activate the second function on the key. As an example, to use F2, hold SHIFT + F1.

### SHIFT LOCK

The MEGA65 includes a SHIFT LOCK key with an embedded LED and locking switch. Press SHIFT LOCK when it is necessary to type many uppercase characters. While active, you no longer have to press the SHIFT key to activate shifted characters. This includes graphic characters.

### CAPS LOCK

This key is like the SHIFT LOCK and works with alpha keys to produce capital letters.

CAPS LOCK on the MEGA65 has a superpower. Press and hold the CAPS LOCK to force the processor to run at 40 MHz. This is handy when you need to speed up the operation of a BASIC program temporarily or speed load a program from a disk image.

### ALT

The ALT key is a modifier key that software developers can use to add functionality to their software.

Press and hold ALT while booting the MEGA65 to enter the *MEGA65 Configuration Utility* as shown in the image below:

![MEGA65 Configuration Utility](https://www.stevencombs.com/images/mega65/utility-menu.jpg)

This key is not available in Commodore 64 mode.

### CTRL

The CTRL key is a modifier key. These keystrokes are called *Control Codes*. Holding the CTRL key and tapping a key in the table below will produce the result in the list:

| CTRL | Function |
|:--|:--|
| 1 | Color Black |
| 2 | Color White |
| 3 | Color Red |
| 4 | Color Cyan |
| 5 | Color Purple |
| 6 | Color Green |
| 7 | Color Blue |
| 8 | Color Yellow |
| A | Switches the VIC-IV to color range 16-31 |
| B | Underline mode - ESC + O to disable |
| D | Switches the VIC-IV to default color range 0-15 |
| E | Restores the cursor color to white |
| G | Ring the bell |
| I | Cursor right one tab stop  |
| J | Cursor to the next line or two with BASIC code line that is two lines |
| K | Locks upper/lower case modes |
| L | Enables upper/lower case modes |
| M | Same function as RETURN |
| N | Changes text case from uppercase to lowercase only - not a toggle |
| O | Flashing Mode - ESC + O to disable |
| P | Scroll BASIC code down one line |
| Q | Cursor to next line |
| S | No Scroll but does not resume scroll - any key to resume |
| T | Same function as INST/DEL |
| U | Move back one word |
| V | Scroll BASIC code up one line |
| W | Move forward one word |
| X | Sets or clears a tab |
| Z | Cursor left one tab stop |
| ] | Same function as → |
| [ | Same as ESC |
| * | Load the Matrix Mode Debugger |

### About MEGA65 Colors

While not related to becoming a keyboard ninja on the MEGA65, I'm going to take a quick sidebar and share the colors, and their index code, available on the MEGA65 in BASIC mode in the table below. The MEGA65 community named colors 16 through 31. I was happy they selected my choice for 31, Hot Tamales; one of my favorite candies.

| **INDEX** | **COLOR** |
|:--|:--|
| **0** | **Black** |
| 1 | White |
| 2 | Red |
| 3 | Cyan |
| 4 | Purple |
| 5 | Green |
| 6 | Blue |
| 7 | Yellow |
| 8 | Orange |
| 9 | Brown |
| 10 | Pink |
| 11 | Dark Gray |
| 12 | Medium Gray |
| 13 | Light Green |
| 14 | Light Blue |
| 15 | Light Gray |
| **16** | **Guru Meditation** |
| 17 | Rambutan |
| 18 | Carrot |
| 19 | Lemon Tart |
| 20 | Pandan |
| 21 | Seasick Green |
| 22 | Soylent Green |
| 23 | Slimer Green |
| 24 | The Other Cyan |
| 25 | Sea Sky |
| 26 | Smurf Blue |
| 27 | Screen of Death |
| 28 | Plum Sauce |
| 29 | Sour Grape |
| 30 | Bubblegum |
| 31 | Hot Tamales |

This was another the way the developers could engage the community and allow them to be a part of the development.

I've created a program to display all the colors on your MEGA65. The output of that program is below:

![MEGA65 Colors](https://www.stevencombs.com/images/mega65/mega65-colors.png)

If you'd like the program that includes a fun sound effect as the MEGA65 displays the colors, download the disk image below:

[Download the MEGA65 Colors BASIC program from the MEGA65 FileHost](https://files.mega65.org?id=1813f548-7280-4b73-9112-abc24b90892b).

**💾 On Disk:** `M65 COLORS`

Next we will use the MEGA key to access the several of the extended color keys.

### MEGA

If the MEGA key shape is familiar, see the image below and it will all make sense.

![Commodore to MEGA65 Logo](https://www.stevencombs.com/images/mega65/commodore-to-mega65-logo.png)

Now that we know where the symbol comes from, let's find out how to use it.

The MEGA key is a modifier key. These keystrokes are called *MEGA Codes*. Holding the MEGA key and tapping a key with two front graphics or a single graphic symbol will produce the left graphic or single symbol.

Holding SHIFT and tapping the MEGA key switches between lower and uppercase character modes.

Holding the MEGA key and tapping a number switches the color to the second color range listed on the key, as shown in the table below:

| **MEGA** | **FUNCTION** |
|:--|:--|
| 1 | Color Orange |
| 2 | Color Brown |
| 3 | Color Light Red |
| 4 | Color Dark Gray |
| 5 | Color Medium Gray |
| 6 | Color Light Green |
| 7 | Color Light Blue |
| 8 | Color Light Gray |

Holding the MEGA key and tapping the TAB key activates the Matrix Mode Debugger.

> **TIP:** While I don't cover the functions available in the Matrix Mode Debugger, one handy tip is that this is a quick way to know which core is in use.

Holding the MEGA key while turning on or resetting the MEGA65 will boot to Commodore 64 mode.

### Lowercase Mode Characters

If you look to the right of your key caps, there are keys…

<!-- FINISH THIS SECTION -->

### RUN/STOP

Tap the RUN/STOP key to exit a running BASIC program. This key rarely works with assembly language code and software can disable the key.

SHIFT + RUN/STOP will load the first program found on a floppy disk or attached disk image.

Press and hold RUN/STOP while resetting the MEGA65 will enter the *Machine Code Monitor*. 

### RESTORE

Press and hold RUN/STOP and then tap RESTORE to restore the computer to a “clean state” without clearing the contents of memory. Programs can disable this feature and it rarely works with assembly language programs.

I use RESTORE frequently to access the Freezer. Press and hold the RESTORE key for about a second and release when the screen border flickers. The Freezer will display as shown in the image below.

![The Freezer](https://www.stevencombs.com/images/mega65/freezer-menu.jpg)

### Cursor Keys

On the bottom right-hand side of the keyboard, unlike the Commodore VIC-20 and C64, but like the Plus/4 and C128, there are four cursor keys. The cursor keys move the cursor in the direction they point; either ↑, ↓, ←, or →.

If your muscle memory is stuck on a two cursor configuration, you can use SHIFT + ↓ to move the cursor up and SHIFT + → to move the cursor left. Holding down these keys (including the SHIFT combinations) will move the cursor until you stop pressing them.

### Arrow Keys

The MEGA65 keyboard includes two arrow keys; ↑ (next to RESTORE) and ← (next to 1. To distinguish them, I will use [↑] and [←].

Use [↑] to raise a number to a power. For instance, the immediate command: `PRINT 2[↑]3` will display the number `8`.

Use [←] as a shortcut to `SAVE` a program to a disk or disk image. Below is an example:

`[←] "SUB TRACK SYS` NOTE: A closing quotation is not a required.

Later I will show how to use these keys as part of *Escape Codes*.

### INST/DEL

Press INST/DEL to delete a character to the left of the cursor and move all remaining characters on the line to the left one position.

Press SHIFT + INST/DEL to move all characters to the right one position, leaving a blank space, as needed, or to insert another character.

Holding either key combination will continue to insert and delete until you stop pressing them.

### CLR/HOME

Press CLR/HOME to place the cursor at the top left-hand position on the MEGA65 screen.

Press SHIFT + CLR/HOME to clear the entire screen and place the cursor at the top left-hand position on the MEGA65 screen.

### NO SCROLL

When you `LIST` a program, press NO SCROLL to pause the listing. Press NO SCROLL again to resume the listing.

## Function/HELP (F15/16) Keys

Software developers can program function keys; however, many have native functions, as shown in the table below. Hold SHIFT and press a function key to activate the secondary, or even number, function key.

| **KEY** | **FUNCTION** |
|:--|:--|
| F1 | Toggle between 40 and 80 column mode. |
| F2 | No Function |
| F3 | List the Directory of a disk or disk image |
| F4 | List the .PRG files on a disk or disk image |
| F5 | Moves the cursor back one word |
| F6 | Displays `KEY6` on the screen |
| F7 | Moves the cursor forward one word. |
| F8 | Enters the machine language monitor. Press `X` to exit. |
| F9 | Scroll BASIC code down one line |
| F10 | Displays `KEY10` on the screen |
| F11 | Scroll BASIC code up one line |
| F12 | Displays `KEY12` on the screen |
| F13 | Delete character in front of cursor |
| F14 | Insert character in front of cursor |
| HELP/F15 | Enters `HELP` command that is not yet available |
| HELP/F16 | Enters `HELP` command that is not yet available |

## ESC Codes

Tap ESC and then tap the character. Do not hold down ESC. These keystrokes are called *Escape Sequences*.

| **ESC** | **FUNCTION** |
|:--|:--|
| @ | Erase to end of screen |
| 4 | Clears screen and switches to 40 column mode |
| 8 | Clears screen and switches to 80 column mode |
| A | Auto insert |
| B | Set bottom-right screen margin |
| C | Cancel auto insert |
| D | Delete line |
| E | Non-flashing cursor |
| F | Flashing cursor |
| G | Enable CTRL + G bell |
| H | Disable CTRL + G bell |
| I | Insert line |
| J | Move to start of line |
| K | Move to end of line |
| L | Enable scrolling |
| M | Disable scrolling and loops cursor to top of screen |
| O | Cancel insert, quote, rvs, ul & flash modes |
| P | Erase to beginning of line |
| Q | Erase to end of line |
| S | Switches the VIC-IV to color range 16-31 |
| T | Set top-left screen margin |
| U | Switches the VIC-IV to default color range 0-15 |
| V | Scroll up |
| W | Scroll down |
| X | Switch between 40/80 display modes |
| Y | Set default tab stops to every 8 characters |
| Z | Clear all tab stops |
| ‌[↑] | Save current cursor position |
| ‌[←] | Restore saved cursor position |

## Booting Cores

It's inconvenient to enter the core screen every time you want to load a different core and the MEGA65 developers understood this and created a keyboard combination to boot directly to the core slot of your choice.

1. Hold down NO SCROLL and the number key of the core slot to boot
2. Power on your MEGA65.

That is more convenient!

## Conclusion

## Join the Fun

Don't miss the retro-computing fun. <font color="red">SUBSCRIBE</font> to my [YouTube channel](https://www.youtube.com/stevencombs) and check out [my other posts](https://www.stevencombs.com).

Help make this content better! Leave your comments, corrections, additions, and thoughts in the comments below. You can email me at [retrocombs@icloud.com](mailto:retrocombs@icloud.com). Thanks for reading and if you are inclined, please let others know about the blog using the hashtag #retroCombs.

🕹️ retroCombs, OUT!
