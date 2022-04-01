---
layout: post
title: 'Mastering the MEGA65 Keyboard'
date: 2022-03-31
author: 'Steven B. Combs, Ph.D.'
email: 'retrocombs@icloud.com'
comments: yes
permalink: mega65-keyboard
category: mega65
---

I love a good keyboard shortcut. I consider myself a connoisseur of keyboard shortcuts on my Mac. One of the features of the MEGA65 is the keyboard; both the  hardware and the functionality the keystrokes provide to operate the MEGA65. In this blog post and companion video, I cover the keyboard layout, functions, and shortcuts you need to master the MEGA65 keyboard. Time to learn how to be a keyboard NINJA on the MEGA65.

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

None as of 2022-03-31.

## Links Mentioned in this Episode

Below are the links I mention in this blog post and companion video. All Amazon links are affiliate links. I’d like to thank everyone for your support of the blog and the YouTube channel by starting your purchases here!

1. [Item](link)

## `TURBO` and `INFO` Commands

Before we master the keyboard, here's a tip. There are two commands users will find interesting.

`INFO` | This command presents the following results:

```
INFO:         DATA BYTES  USED /  FREE
--------------------------------------
ROM-V   920333   PROGRAM:    0 / 55037
SPEED   80 MHZ   SCALARS:    8 /  1464
BANK4 --------   STRINGS:    0 / 54980
BANK5 --------   ARRAYS :    0 / 54980
```

`TURBO` | And we thought 40 MHz was fast. Now you can use the `TURBO` command to bump up the MEGA65 from 40 to 80 MHz! See this thread on [Discord](https://discord.com/channels/719326990221574164/945249748489740298/959210564909948959) and happy belated April Fool’s Day.

## Keyboard Layout

The layout of the key on the MEGA65 keyboard is true to the layout found on the proposed Commodore 65 and therefore is a natural evolution of the keyboards around on the PET, VIC-20, C64, Plus/4, and C128. It includes popular keys in familiar locations found on these previous computers along with additional keys that functionality to both the MEGA65 hardware and software. Below is an image of the keyboard layout.

![MEGA65 Keyboard Layout](link)

The first thing you will notice, if you are new to Commodore computers, is the location for many common keys (",',@,(,),etc.) are not the same as a modern Mac or PC keyboard and these changes will throw off your muscle memory. But don't despair, your fingers will get use to the arrangement and after a while, even swapping back and forth isn't confusing. Your brain will adjust. The alpha-numeric keys are in the standard QWERTY layout; however, there keys you won't find on a modern keyboard.

## Command Keys

There are many command keys you must master to operate your MEGA65. Many of these will be familiar to modern users. Others will be new. Users with Commodore computer experience will feel right at home and enjoy the new keys and features the MEGA65 brings to the reto-computing experience. We will start with the most basic of command keys, RETURN.

### Return

In the words of Jim Butterfiled from his Commodore 64 user’s video, the RETURN tells the computer to do this thing. That can mean many things on the MEGA65 such as:

1. Save a BASIC program line into the MEGA65’s memory.
2. Activate an immiedate mode command.
3. Display errors for incorrect syntax.
4. Input program data.
5. Accept default data at the request of a program.
5. Produce a carriage return in a text editor.

Software developers can program this key for uses beyond the list above.

### Shift

There are two SHIFT keys, on the left and one on the right. These keystrokes are called *Shifted Codes* and while similar to their modern counterparts, they have MEGA65 specific functions.

Holding the SHIFT key and tapping a key with two front graphics will produce the right graphic. When the MEGA65 is in lowercase mode, holding SHIFT and an alpha character displays the upper case version. Holding SHIFT and a numeric/symbol key will produce the alternate character displayed on the key.

Holding SHIFT with a function key will activate the second fuction found on the key. As an example, to use F2, hold SHIFT + F1.

### SHIFT LOCK

The MEGA65 includes a SHIFT LOCK key that includes an LED and a detent switch. Press SHIFT LOCK when it is necessary to type many keys using SHIFT. While active, you no longer have to press the SHIFT key to activate shifted characters. This includes graphic characters.

### CAPS LOCK

This key is similar to the SHIFT LOCK but does not includea an LED and works with alpha keys to produce capital letters.

CAPS LOCK on the MEGA65 has a super power. Press and hold the CAPS LOCK to force the processor to run at 40.5 MHz. This is handy when you need to speed up the operation of a BASIC program temporarily or speed load a program from a disk image.

### MEGA

The MEGA key is a modifier key. These keystrokes are called *MEGA Codes*. Holding the MEGA key and tapping a key with two front graphics or a single graphic symbol will produce the left graphic or single symbol.

Holding the MEGA key and tapping a number switches the color to the second color range listed on the key.

Holding the MEGA key and tapping TAB activates the Matric Mode Debugger.

Holding the MEGA key while turning on or resetting the MEGA65 will boot to Commodore 64 mode.

### Alt

The ALT key is a modifier key that software develpers use to add functionality to their software. 

Press and hold ALT while booting the MEGA65 to enter the *MEGA65 Configuration Utility* as shown in the image below:

![MEGA65 Configuration Utility](https://www.stevencombs.com/images/mega65/config-screen-input.jpg)

This key is not available in Commodore 64 mode.  

### RUN/STOP

Tap the RUN/STOP key to exit the excution of a BASIC program. This key rarely works with assembly language code and this key can be disabled by software.

SHIFT + RUN/STOP will load the first program found on a floppy disk or attached disk image.

Press and hold RUN/STOP while resetting the MEGA65 will enter the *Machine Code Monitor*. <Does this work with power switch?>

### RESTORE

You can press and hold RUN/STOP (listed previously) and then tap RESTORE to restore the computer to a “clean state” without clearing the contents of memory. Programs can disable this feature and it rarely works with assembly language programs.

RESTORE is used regulary to access the Freezer. Press and hold RESTORE button for about a second and release when the screen border flickers. The Freezer will display as shown in the image below.

![The Freezer](https://www.stevencombs.com/images/mega65/freezer-menu.jpg)

### Cursor Keys



### Arrow Keys



### INS/DEL



### CLR/Home



### NO SCROLL

When you `LIST` a program, press NO SCROLL, to pause the listing. Press NO SCROLL again to resume the listing.

## Function/Help (F15/16) Keys

| Key | Function |
|:--|:--|
| F1 | |
| F2 | |
| F3 | |
| F4 | |
| F5 | |
| F6 | |
| F7 | |
| F8 | |
| F9 | |
| F10 | |
| F11 | |
| F12 | |
| F13 | |
| F14 | |
| HELP/F15 | |
| HELP/F16 | |

### CTRL

These keystrokes are called *Control Codes*.

| CTRL | Function |
|:--|:--|
| A | |

## ESC Codes

Tap ESC and then tap the character. Do not hold down ESC. These keystrokes are called *Escape Sequences*.

| ESC | Function |
|:--|:--|
| **@** | Erase to end of screen |
| **A** | Auto insert |
| **B** | Set bottom-right screen margin |
| **C** | Cancel auto insert |
| **D** | Delete line |
| **E** | Select non-flashing cursor |
| **F** | Flashing cursor |
| **G** | Enable bell |
| **H** | Disable bell |
| **I** | Insert line |
| **J** | Move to start of line |
| **K** | Move to end of line |
| **L** | Enable scrolling |
| **M** | Disable scrolling |
| **N** | Normal (un-reversed) screen |
| **O** | Cancel insert, quote, rvs, ul & flash modes |
| **P** | Erase to beginning of line |
| **Q** | Erase to end of line |
| **R** | Reverse screen |
| **S** | Set bold attribute |
| **T** | Set top-left screen margin |
| **U** | Unset bold attribute |
| **V** | Scroll up |
| **W** | Scroll down |
| **X** | Switch between 40/80 display modes |
| **Y** | Set default tab stops |
| **Z** | Clear all tab stops |
| **\[** | Set monochrome display (disable attributes) |
| **\\** | Cancel insert, quote, rvs, ul & flash modes |
| **\]** | Set color display (enable attributes) |
| **^** | Save current cursor position |
| **_** | Restore saved cursor position |


## Join the Fun

Don't miss the retro-computing fun. <font color="red">SUBSCRIBE</font> to my [YouTube channel](https://www.youtube.com/stevencombs) and check out [my other posts](https://www.stevencombs.com).

Help make this content better! Leave your comments, corrections, additions, and thoughts in the comments below. You can email me at [retrocombs@icloud.com](mailto:retrocombs@icloud.com). Thanks for reading and if you are inclined, please let others know about the blog using the hashtag #retroCombs.

🕹️ retroCombs, OUT!
