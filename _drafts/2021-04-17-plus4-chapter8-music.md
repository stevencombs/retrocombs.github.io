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

The TED is not as capable as the SID found in the Commodore CBM-II, C64, MAX, or C128. The TED was designed for business applications and the sound capabilities of the chip were downgraded from the SID to better match these applications. Remember, the Plus/4 (and TED series) was originally designed for productivity users, not the gamer.

While limited, compared to the SID, the TED includes a tone generator with two audio channels that creates music and sound. Combined the tone generator can produce either two tones or one tone plus white-noise. Let's dig in and see we tones and tunes we can produce.

```realbasic
10 VOL 8
20 DO
30 INPUT X
35 IF X > 1023 OR X < 0 THEN ? "0 TO 1023, PLEASE" : GOTO 30
40 SOUND 1,X,10
50 LOOP UNTIL X = 0
```
**💾 On Disk:** `08 MAKE TONE`

When you `run` the program, a `?`, or input, prompt will appear. Type a number from 0 to 1023 and press `↩` to hear a short tone. Modifications in tone are hard to distinguish between steps of 50.

The program above uses the only two BASIC commands necessary to produce sounds, music, or tones. Those commands are `VOL` and `SOUND`. To create a sound in immediate mode (without programming line numbers) try these two lines:

```realbasic
VOL 8
SOUND 1,266,60
```

We will break these commands down in the next two sections; however, modify the first variable in the `SOUND` command from `1` to `2`. Notice a difference? You shouldn't. The `2` changes to the second sound channel which has duplicate capabilities to channel `1` unless you change the first variable to `3`. This does not turn on a third channel, but activates the white-noise feature of the second channel. This example gives us a look at how we can use the TED to generate not only business tones, but sound and music for games. Sadly, for the TED series, even the older Commodore VIC-20 had better sound capabilities with three channels and a white-noise generator.

Lets trudge on and learn how to generate interesting tones on the Plus/4 using these two BASIC commands combined with everything we've learned from the previous chapters.

## The Volume Command

The `VOL` command is self-explanatory. The `VOL` command accepts values from 0 (off) to 8 (loudest).

Try the previous immediate mode commands again but change the volume as shown in the example below:

```realbasic
VOL 3
SOUND 1,266,60
```

`VOL` is useful; however, the `SOUND` command is the star of the show.

## The Sound Command

Before we use the `SOUND` command, below is the syntax:

`SOUND` *voice*, *note*, *duration*

As you can see, there are three required options for the `SOUND` command:

1. *voice* - a number between 1 and 3 which represents the channel. Channels 1 and 2 produce the same output whereas channel 3 activates channel 2's white-noise generator when the note values are between 600 and 940. Numbers outside that range produce interesting sound effects.
2. *note* - a number between 0 and 1023. A lower number produces a lower frequency and a higher number creates a higher frequency. There are four [octaves](https://en.wikipedia.org/wiki/Octave) of notes available. The image below displays shows a single scale of notes. Section 11 of the Plus/4 Encyclopedia (found in the back of the User's Manual) includes a complete chart of notes.

    ![Musical Notes Quick Reference](https://raw.githubusercontent.com/stevencombs/stevencombs.github.io/master/plus4/images/music-notes.png)

	3. *duration* - a number between 0 and 65535. Each number represents a sixtieth of a second. A values of 60 will produce a tone for one second. A value of 65535 will produce a tone for ≈ 1092 second, or ≈ 18 minutes and 20 seconds!

Now for an example:

```realbasic
10 VOL 7
20 X = 0
30 DO
40 SOUND 1,X,5
50 X = X + 5
60 LOOP UNTIL X = 1020
70 VOL 0
80 END
```
**💾 On Disk:** `08 MUSICAL RANGE`

The BASIC program uses the `LOOP` command to cycle through a series of notes from 0 to 1020. It may not be musical, but it does show the output range of the TED chip.

For fun, change the last value in line 40 from `5` to `1`. This will speed up the range for a fun arcade sound effect. You can visualize a space ship taking off.

## A Musical Sound Effect

Need the sound of a laser shooting marauding invaders from the sky? Type in this short program.

```realbasic
10 VOL 8
20 FOR S = 1000 TO 700 STEP -25
30 SOUND 1,S,1
40 NEXT S
```
**💾 On Disk:** `08 SOUND EFFECT`

This program uses a loop with a negative step values to go from high to low values. Play around with the values in line `20` and the duration value in line `30` for additional sound effect fun.

## Creating a Noise Sound Effect

In the previous example a sound effect was created using musical tones. As mentioned, the TED's channel 3 provides white-noise and sound effects. Try the program below to generate a background sound effect.

```realbasic
10 VOL 2
20 R = INT(RND(0)*10)+1
30 FOR X = 1 TO R
40 SOUND 3,600+30*X,10
50 NEXT X
60 FOR X = R TO 1 STEP- 1
70 SOUND 3,600+30*X,10
80 NEXT X
90 T = INT(RND(0)*100)+30
100 SOUND 3,600,T
110 GOTO 20
```
**💾 On Disk:** `08 WINDSTORM`

When you type `RUN` you hear the pleasant sound of a windstorm. You can use this program to help you fall asleep in a noisy hotel room (if you want to carry your large Commodore Plus/4 setup to a hotel room) or use it as the basis for the next great 8-bit Plus/4 game.

The Plus/4 manual states that creating a sound effect like this one can be "extremely challenging" but goes on to say that experimentation is the key. Try experimenting with the three lines below:

1. `40` - Uses the white-noise and effects channel 3 to produce sounds based on random values from line `30`. 
2. `60` - Selects a random note/frequency that either increases or decreases based on the random value assigned by line 20 between 1 and 10.
3. `90` - Modifies the random delay to give the sound a natural cadence of chaos.

You can't break any thing. Have a blast trying values; however, remember your limitations. `VOL` is between 0 and 8 and the second value for `SOUND` is between 0 and 1023. If experiments create values outside these ranges, you will receive a `!ILLEGAL QUANTITY ERROR`.

> **MORE FUN:** Let the Plus/4 create a random song by changing the channel in lines `40`, `70`, and `100` to `2`.

Now determine how to combine the music with the windstorm to play concurrently. **HINT:** `1`, not `2`.

## Making Some Music



## The Great Plus/4 Music Machine



## Final Thoughts

1. That concludes all eight chapters in the Commodore Plus/4 User's Manual; however, there's a whole lot more in the last half of the manual entitled, the *Plus/4 Encyclopedia*. Never fear, I plan to cover the best parts of that portion of the manual. There's good content in the back half of the manual.

## Join the Fun

Don't miss the fun, <font color="red">SUBSCRIBE</font> to my [YouTube channel](https://www.youtube.com/stevencombs).

Help make this content better! Leave your comments and thoughts below or in the comments [under the YouTube video](link).

Thanks for reading and watching and if you are inclined, please let others know about the blog using the hashtag #retroCombs on your favorite social media platform.

🕹️ retroCombs, OUT!
