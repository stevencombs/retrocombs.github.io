---
layout: post
title: 'Commodore Plus/4 User’s Manual Chapter 8 - Making Sound and Music on the Plus/4'
date: '2021-05-14'
author: 'Steven B. Combs, Ph.D.'
email: 'steven.combs@gmail.com'
comments: yes
permalink: plus4-9
category: plus4
tags:
  - commodore
  - basic
  - sound
  - music
  - effects
---

This last chapter in the user's manual takes us on a musical and noise infused journey through Commodore Basic and the Plus/4 `SOUND` and `VOL` commands. The Plus/4 was not capable of the amazing sounds that come from it's older brother and sister, the Commodore 64 or the 128. Heck, it wasn't even as capable as the earlier VIC-20; however, with a little effort and creativity, you can put the two channels to use in business applications; the primary market for the Commodore TED series.

> **MEMBERSHIP:** I now offer retroCombs memberships from $1 (PET level membership) to $20 (MEGA65 level membership) that include levels in between for all budgets (VIC-20, C64, Plus/4, and C128). If you'd like to support my content and get access to my Discord server along with other cool freebies, check out each level at <https://www.buymeacoffee.com/retroCombs>.

Despite these limits, you can still have some fun as it appropriately demonstrated in the last BASIC program in the chapter. Beware! The original printed manual had many errors. I correct these; however, imagine the frustration of a user in the 1980s trying to debug these programs.

**Table of Contents**

- [Series Information](#series-information)
- [Companion Disk Image](#companion-disk-image)
- [User's Manual](#users-manual)
- [YouTube Video: _‌Commodore Plus/4 User's Manual \| Chapter 8 - Making Sound and Music \| Beeps, boops and bops!_](#youtube-video-_‌commodore-plus4-users-manual--chapter-8---making-sound-and-music--beeps-boops-and-bops_)
- [Video Errata](#video-errata)
- [Links Mentioned in this Episode:](#links-mentioned-in-this-episode)
- [Key to Keys](#key-to-keys)
- [Video Introduction](#video-introduction)
- [Introduction](#introduction)
    - [Make Tone Program](#make-tone-program)
- [The Volume Command](#the-volume-command)
- [The Sound Command](#the-sound-command)
    - [Musical Range Program](#musical-range-program)
- [A Musical Sound Effect](#a-musical-sound-effect)
    - [Sound Effect Program](#sound-effect-program)
- [Creating a Noise Sound Effect](#creating-a-noise-sound-effect)
    - [Windstorm Program](#windstorm-program)
- [Making Some Music](#making-some-music)
    - [Piano Program](#piano-program)
    - [Row Boat Program](#row-boat-program)
    - [Bar Scales Program](#bar-scales-program)
- [The Great Plus/4 Music Machine](#the-great-plus4-music-machine)
    - [Music Machine Program](#music-machine-program)
- [Final Thoughts](#final-thoughts)
- [Join the Fun](#join-the-fun)

## Series Information

This episode is a small part of my larger Commodore Plus/4 series. You can read the entire series and view additional resources at:

<https://www.stevencombs.com/plus4>

## Companion Disk Image

As I progress through the user's manual, I enter and execute sample programs. The link below is to a `.D81` image that contains every program from each episode. **Like the series, the image is not complete.**

[retroCombs User's Manual Disk Image](/plus4/plus4-users-manual.d81)

I use the following file name convention to make it easy to locate specific programs:

<img src="https://www.stevencombs.com/images/design/floppy-disk-small.png" align="right">Sample Program Name: `02 RCOMBS SCROLL.PRG`

* `02` - The chapter number
* `RCOMBS SCROLL` - my self assigned name for the BASIC program which will be immediately identifiable if you follow along.

## User's Manual

As part of my Commodore Plus/4 YouTube series, I work through each chapter of the Plus/4 manual. I've taken the time to scan each chapter so you can read and follow along. Use the link below to view chapter 8:

[Chapter 8 - Making Sound and Music on the Plus/4](https://www.stevencombs.com/plus4/users-manual/p4um-chapter-8.pdf)

Below are the links for previous chapters covered:

1. [Front Matter](/plus4/users-manual/p4um-title-introduction.pdf)
2. [Chapter 1 - Unpacking and Setting Up](/plus4/users-manual/p4um-chapter-1.pdf)
3. [Chapter 2 - Using the Keyboard and the Screen](https://www.stevencombs.com/plus4/users-manual/p4um-chapter-2.pdf)
4. [Chapter 3 - Using Software](https://www.stevencombs.com/plus4/users-manual/p4um-chapter-3.pdf)
5. [Chapter 4 - Getting Started](https://www.stevencombs.com/plus4/users-manual/p4um-chapter-4.pdf)
6. [Chapter 5 - Numbers and Calculations](https://www.stevencombs.com/plus4/users-manual/p4um-chapter-5.pdf)
7. [Chapter 6 - Beginning BASIC Programming](https://www.stevencombs.com/plus4/users-manual/p4um-chapter-6.pdf)
8. [Chapter 7 - Using Graphics and Color](https://www.stevencombs.com/plus4/users-manual/p4um-chapter-7.pdf)

## YouTube Video: _‌Commodore Plus/4 User's Manual \| Chapter 8 - Making Sound and Music \| Beeps, boops and bops!_

In the video below, I work through Chapter 8 of the Plus/4 user's manual and explore the `VOL` and `SOUND` BASIC 3.5 commands.

<div style="position:relative;padding-top:56.25%;"><p><iframe src="https://www.youtube.com/embed/GBJ2EVsqrLU" frameborder="0" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true" style="position:absolute;top:0;left:0;width:100%;height:100%;"></iframe></p></div>

## Video Errata

None as of 2021-05-14.

## Links Mentioned in this Episode:

Below are the links I mention in the video. All Amazon links are affiliate links. Thanks for supporting the blog and the YouTube channel!

1. [Chapter 7 - Using Graphics and Color](https://www.stevencombs.com/plus4-8)

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

![Commodore TED Series](https://www.stevencombs.com/plus4/images/ted-models.png)

We've seen the five video modes the TED supports in Chapter 7. Let's see what sound and music we can create using the built-in tone generator. This generator contains two channels; one square wave and a second channel capable of either a square wave or white noise.

The TED is not as capable as the SID found in the Commodore CBM-II, C64, MAX, or C128. The TED was designed for business applications and the sound capabilities of the chip were downgraded from the SID to better match these applications. Remember, the Plus/4 (and TED series) was originally designed for productivity users, not for gaming.

### Make Tone Program

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

When you `RUN` the program, a `?`, or input, prompt will appear. Type a number from 0 to 1023 and press `↩` to hear a short tone. Modifications in tone are hard to distinguish between steps of 50.

The program above uses the only two BASIC commands necessary to produce sounds, music, or tones. Those commands are `VOL` and `SOUND`. To create a sound in immediate mode (without programming line numbers) try these two lines:

```realbasic
VOL 8
SOUND 1,266,60
```

We will break these commands down in the next two sections; however, modify the first variable in the `SOUND` command from `1` to `2`. Notice a difference? You shouldn't. The `2` changes to the second sound channel which has duplicate capabilities to channel `1` unless you change the first variable to `3`. This does not turn on a third channel, but activates the white-noise feature of the second channel. This example gives us a look at how we can use the TED to generate not only business tones, but sound and music for games. Sadly, for the TED series, even the older Commodore VIC-20 had better sound capabilities with three channels and a white-noise generator.

Let's trudge on and learn how to generate interesting tones on the Plus/4 using these two BASIC commands combined with everything we've learned from the previous chapters.

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

	3. *duration* - a number between 0 and 65535. Each number represents a sixtieth of a second. A values of 60 will produce a tone for one-second. A value of 65535 will produce a tone for ≈ 1092 second, or ≈ 18 minutes and 20 seconds!

### Musical Range Program

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

### Sound Effect Program

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

### Windstorm Program

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

Make music is as simple as programming your own piano on the Commodore Plus/4 as shown in the program below:

### Piano Program

```realbasic
5 SCNCLR
10 FOR X = 1 TO 8 : READ N(X) : NEXT X
20 VOL 7
30 DO
40 GET A$ : IF A$ = "" THEN 40
50 A = ASC(A$) : IF A < 49 OR A > 56 THEN 90
60 N = A - 48
70 SOUND 1,N(N),5
80 COLOR 0,N,3 : COLOR 4,N,7
90 LOOP UNTIL A = 32
100 VOL 0: COLOR 4,12,7 : COLOR 0,2,7
110 DATA 169,262,345,383,453,516,571,596
```
**💾 On Disk:** `08 PIANO`

To use the your new 8-bit piano, hit keys 1 → 8. Press the space bar to exit the program. This simple piano is limited in musical range; however, with the information provided in the previous sections, can you figure out how to enhance this piano program? Notice the fun use of color to modify the screen as you type in your song.

> **NOTE:** This was another program in the manual that had errors. The largest error was the omission of the `IF` statement in the second command in line `50`. I added a line that lets the program exit gracefully. Without the modification to line `100` the program can exit (pressing the space bar) and leave the screen unreadable. In addition to this change, I added a coordinating border color change to line 80.

The user's manual provides the notes for the song, *Twinkle, Twinkle, Little Star* as shown below:

```
1  1  5  5  6  6  5
4  4  3  3  2  2  1
5  5  4  4  3  3  2
5  5  4  4  3  3  2
1  1  5  5  6  6  5
4  4  3  3  2  2  1
```

### Row Boat Program

In the example above, you play the music. In the program below, the Commodore Plus/4 will be the star of the show.

```realbasic
10 VOL 8
20 DO
30 READ X,Y
40 SOUND 1,X,Y
45 FOR D = 1 TO 550 : NEXT
50 LOOP UNTIL X = 0
60 END
100 DATA 169,45,169,45,169,30
110 DATA 262,15,345,45,345,30
120 DATA 262,15,345,30,383,15
130 DATA 453,60,596,45,453,45
140 DATA 345,45,169,45,453,30
150 DATA 383,15,345,30,262,15
200 DATA 169,45,0,0
```
**💾 On Disk:** `08 ROW BOAT`

> *NOTE:* Surprise! Another program that wasn't correct. This one had an incorrect final note in line 200.

Notice as the music plays that there's a pause that makes the whole tune awkward. Can you modify the program to sound more natural?

### Bar Scales Program

A final example in this section plays a range of musical notes. Try the program below:

```realbasic
10 VOL 8
20 DO
30 D = INT(RND(0)*5)+2 : REM DURATION
40 S = INT(RND(0)*300)+700 : REM START
50 R = INT(RND(0)*(1020-S)) : REM RANGE
60 P = INT(RND(0)*30)+5 : REM STEP
70 T = SGN(RND(1)-.5) : IF T = 0 THEN 70
80 FOR Z = S TO S+T*R STEP P*T
90 SOUND 1,Z,D
100 Y = (Z AND 15)+1:FOR X = 1 TO D
110 PRINT CHR$(18); : COLOR 1,Y : ?" "
120 NEXT X,Z
130 LOOP
```
**💾 On Disk:** `08 BAR SCALES`

> **NOTE:** Yep, another error. QC on this chapter was horrible! Line 70 incorrectly added an extra parenthesis. The original line 70 read `T = SGN(RND)(1)-.5)`. Ouch!

As the program runs, a series of random notes are played along with a random color on the left-hand side of the display. Review the program. You now have the programming skills to make this sample program more colorful and musical.

> **TIP:** When you exit this program, who knows what color your text will be? Use `COLOR 1,1` for readable text.

## The Great Plus/4 Music Machine

The last BASIC program in Chapter 8, the last full chapter, of the Commodore User's guide is the most ambitious and combines many of the concepts found in this and preceding chapters. Let's begin typing:

### Music Machine Program

```realbasic
5 GOSUB 1000
6 FOR X = 1 TO 9: READ N(X): NEXT X
8 CHAR 1,8,1, "*THE GREAT MUSIC MACHINE*"
10 VOL 8
20 DO
30 GETA$ :IF A$="" THEN 30
35 A = ASC(A$) : IF (A < 49 ) OR (A > 57) THEN 50
36 N = A - 48 : REM CONVERT ASCII TO ACTUAL NUMBER
40 SOUND 1,N(N),4
45 GSHAPE N$,150,8*(6+(9-N)),4
46 FOR Z = 1 TO 50 : NEXT Z
47 GSHAPE N$,150,8*(6+(9-N)),4
50 LOOP UNTIL A = 32
55 VOL 0: GRAPHIC 0: SCNCLR
60 END
100 DATA 345,383,453,516,571,596,643,685,704
1000 GRAPHIC 1,1
1010 FOR Y = 60 TO 124 STEP 16
1020 DRAW 1,100,Y TO 200,Y
1030 NEXT Y
1040 A$ = "FEDCBAGFE"
1050 FOR X = 1 TO 9 : C = 13
1060 IF INT(X/2) = X/2 THEN C = 14
1070 CHAR 1,C,X+6,MID$(A$,X,1),0
1075 CHAR 1,C+10,X+6,RIGHT$(STR$(10-X),1)
1080 NEXT X
1090 FOR X = 1 TO 8 : FOR Y = 11 TO 16 : DRAW1,X,Y : NEXT Y,X
1100 Y = 1 : X = 8: DRAW 1,8,16 TO X,Y
1110 SSHAPE N$,1,1,8,16
1120 GSHAPE N$,1,1,4
1130 RETURN
```
**💾 On Disk:** `08 MUSIC MACHINE`

Line `35` in the manual was a disaster! Check out the original line from the manual:

`35 A ASC(A$): A < OR A> 57 THEN 50`

And below is my corrected line:

`35 A = ASC(A$) : IF (A < 49 ) OR (A > 57) THEN 50`

The original line excluded the `49` value and necessary parenthesis. You may be asking yourself, at least I did, what are those values; `49` and `57`? It took me a minute; however, the next line told the story:

`36 N = A - 48`

If you subtract `48` from `57`, it leaves `9`. `9` is one of the highest key to press on the keyboard. `57` is the PETSCII (and ASCII) code for the number `9`. Makes sense, right?!? No, it does not. Let's continue. The lowest number key you can press is `1` which has the PETSCII value of, yep, `49`. Every other keypress is ignored except a PETSCII value of `32` which is the spacebar. It was line `50` and the PETSCII value of 32 that provided me with the clue to correct line `35`:

`50 LOOP UNTIL A = 32`

This was one of the few PETSCII codes I remember from the 1980s.

This is the last program for Chapter 8. But there's much more in the user's manual. Stay tuned and make sure you subscribe to the channel to see what else I have in store.

## Final Thoughts

1. That concludes all eight chapters in the Commodore Plus/4 User's Manual; however, there's a whole lot more in the last half of the manual entitled, the *Plus/4 Encyclopedia*. Never fear, I plan to cover the best parts of that portion of the manual. There's good content in the back half of the manual.
2. This chapter was fun to prepare and record. I'd played with the Commodore BASIC `SOUND` command on the Commodore 128; however, most of my experience creating sounds in BASIC was on the Commodore VIC-20 using `POKE` commands. Commodore BASIC 3.5 is easier!
3. I should give final thoughts on the user's manual; however, we are half way through the first book and I'll reserve judgement until we work through the encyclopedia pages.

## Join the Fun

Don't miss the fun, <font color="red">SUBSCRIBE</font> to my [YouTube channel](https://www.youtube.com/stevencombs).

Help make this content better! Leave your comments and thoughts below or in the comments [under the YouTube video](https://youtu.be/GBJ2EVsqrLU).

Thanks for reading and watching and if you are inclined, please let others know about the blog using the hashtag #retroCombs on your favorite social media platform.

🕹️ retroCombs, OUT!
