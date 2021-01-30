---
layout: post
title: 'retroCombs: Plus/4 User’s Manual Chapter 7 - Using Graphics and Color'
date: '2021-01-30'
author: 'Steven B. Combs, Ph.D.'
permalink: plus4-8
email: 'steven.combs@gmail.com'
comments: 'yes'
category: retro
tags:
  - commodore
  - retro
  - plus4
  - vic20
  - c64
  - keyboard
  - keys
  - graphics
  - color
  - characters
  - petscii
---

In this Commodore Plus/4 retroCombs episode and companion blog post, I cover Chapter 7, *Using Graphics and Color*, of the Commodore Plus/4 user's manual. In this chapter, XXX

<!-- TOC -->

- [Series Information](#series-information)
- [Companion Disk Image (In Progress)](#companion-disk-image-in-progress)
- [User's Manual](#users-manual)
- [YouTube Video: _retroCombs: Commodore Plus/4, Chapter 7 - Using Graphics and Color_](#youtube-video-_retrocombs-commodore-plus4-chapter-7---using-graphics-and-color_)
- [Video Errata](#video-errata)
- [Links Mentioned in this Episode:](#links-mentioned-in-this-episode)
- [Key to Keys](#key-to-keys)
- [Introduction](#introduction)
- [Graphics Characters](#graphics-characters)
- [Character Animation](#character-animation)
  - [PULSE BALL PROGRAM](#pulse-ball-program)
  - [JUMPING JACKS PROGRAM](#jumping-jacks-program)
  - [INCH WORM PROGRAM](#inch-worm-program)
  - [MOVING A BALL](#moving-a-ball)
- [Controlling Colors](#controlling-colors)
  - [PLUS/4 COLORS](#plus4-colors)
- [High Resolution Graphics](#high-resolution-graphics)
- [Points, Lines, and Labels](#points-lines-and-labels)
- [Squares, Circles, Polygons, and Painting](#squares-circles-polygons-and-painting)
- [Multi-Color Graphics](#multi-color-graphics)
- [Final Thoughts](#final-thoughts)
- [Join the Fun](#join-the-fun)

<!-- /TOC -->

## Series Information

This episode is a small part of my larger Commodore Plus/4 series. You can read the entire series and view additional resources at:

<https://www.stevencombs.com/plus4>

## Companion Disk Image (In Progress)

As I progress through the user's manual, I enter and execute sample programs. The link below is to a `.d81` image that contains every program from each episode. **Like the series, the image is not complete.**

[retroCombs User's Manual Disk Image](/plus4/plus4-users-manual.d81) - **UPDATED AS OF:** 2020-11-24

I use the following file name convention to make it easy to locate specific programs:

<img src="/images/design/floppy-disk-small.png" align="right">Sample Program Name: `02 RCOMBS SCROLL.PRG`

* `02` - The chapter number
* `RCOMBS SCROLL` - my self assigned name for the BASIC program which will be immediately identifiable if you follow along.

## User's Manual

As part of my Commodore Plus/4 YouTube series, I work through each chapter of the Plus/4 manual. I've taken the time to scan each chapter so you can read and follow along. Use the link below to view chapter 6:

[Chapter 7 - Using Graphics and Color](https://www.stevencombs.com/plus4/users-manual/p4um-chapter-7.pdf)

Below are the links for previous chapters covered:

1. [Front Matter](/plus4/users-manual/p4um-title-introduction.pdf)
2. [Chapter 1 - Unpacking and Setting Up](/plus4/users-manual/p4um-chapter-1.pdf)
3. [Chapter 2 - Using the Keyboard and the Screen](https://www.stevencombs.com/plus4/users-manual/p4um-chapter-2.pdf)
4. [Chapter 3 - Using Software](https://www.stevencombs.com/plus4/users-manual/p4um-chapter-3.pdf)
5. [Chapter 4 - Getting Started](https://www.stevencombs.com/plus4/users-manual/p4um-chapter-4.pdf)
6. [Chapter 5 - Numbers and Calculations](https://www.stevencombs.com/plus4/users-manual/p4um-chapter-5.pdf)
7. [Chapter 6 - Beginning BASIC Programming](https://www.stevencombs.com/plus4/users-manual/p4um-chapter-6.pdf)

## YouTube Video: _retroCombs: Commodore Plus/4, Chapter 7 - Using Graphics and Color_

In the video below, I work through Chapter 6 of the user's manual.

<div style="position:relative;padding-top:56.25%;"><p><iframe src="https://www.youtube.com/embed/NtSp4xOcz-M" frameborder="0" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true" style="position:absolute;top:0;left:0;width:100%;height:100%;"></iframe></p></div>

## Video Errata

None as of 2020-11-25.

## Links Mentioned in this Episode:

Below are the links I mention in the video. All Amazon links are affiliate links. Thanks for supporting the blog and the YouTube channel!

1. [Commodore Plus/4 User's Manual Series](https://www.stevencombs.com/plus4)
2. [Pi1541 Assembly and First Use](https://www.stevencombs.com/pi1541-1)
3. [MEGA 65 Project](https://mega65.org/)
4. [MEGA 65 Dev Kit](https://shop.trenz-electronic.de/en/Products/MEGA65/)

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

## Introduction

1. Thank you to all my viewers and the feedback.
2. .d81 disk image is available [here](https://www.stevencombs.com/plus4#companion-disk-image).
4. Don't forget to [subscribe to the channel](https://www.youtube.com/stevencombs)!
5. Hope you've been keeping up with my retro-computing content like my latest project, the [Combian pi/400](https://www.stevencombs.com/combianpi400-1). I love this [Combian 64](https://cmaiolino.wordpress.com/) and [Raspberry Pi 400](https://amzn.to/3iV8Ay9) mash-up. Other than my [MEGA 65 Dev Kit](https://www.stevencombs.com/mega65-1), It's my new favorite modern emulation system. I plan to do more with it in the near future.

## Graphics Characters

1. You will notice on the Plus/4 keyboard that not only does the keyboard allow for lower and upper case characters, but there's a whole host of graphic characters available on each letter key, `@`, `-`, and `*`.
2. In upper-case mode, press and hold the `⇧` (right character) or `C=` (left character) key, followed by one of the keys listed above to place graphics characters on the screen. The characters are know as PETSCII (similar to ASCII on later computers) and each one can be displayed using the `PRINT CHR$()` command if you know the right address.

    > **PETSCII** (PET Standard Code of Information Interchange), known as CBM ASCII, is the character set used in Commodore Business Machines (CBM)'s 8-bit home computers, starting with the PET from 1977 and including the C16, C64, C116, C128[1], CBM-II, Plus/4, and VIC-20. - [Wikipedia](https://en.wikipedia.org/wiki/PETSCII).

2. The character set expands when both shifted and unshifted modes are used. You can view a chart with PETSCII codes at [https://sta.c64.org/cbm64pet.html](https://sta.c64.org/cbm64pet.html).
3. The majority of PETSCII codes have been absorbed into ASCII; however, they can be difficult to find on modern keyboards. This makes a Commodore 8-bit computer much more adept at creating BASIC programs with animated characters.
3. I wrote a BASIC program that will display PETSCII characters on the screen. `DLOAD` or type the program and then `RUN` the program. The screen will clear and the PETSCII characters will fill the top of the screen. and then tap the `⇧` + `C=` keys to cycle between upper and lower-case modes as shown in the images below the code. Right-side graphics characters are available in both upper and lower-case modes. Left-side characters include lines and angles used to draw tables and charts.

    ```basic
    5 SCNCLR
    10 FOR T =33 TO 127 : PRINT CHR$(T); : NEXT T
    20 FOR T = 160 TO 255: PRINT CHR$(T); : NEXT T
    ```
    **💾 On Disk:** `07 PETSCII`

    ![Shifted](/plus4/images/petscii-shifted-lower-case.png)
    ![Un-shifted](/plus4/images/petscii-unshifted-upper-case.png)

4. Use combinations of the PETSCII characters to create lines, shapes, environments, characters, and even animations as we will cover next.

    > When you "draw" images on the screen using PETSCII, holding down the `⇧` or `⇧-Lock` while drawing and then following each line with `⏎` will not yield a syntax error. This is a great tip for prototyping.

## Character Animation

1. You can use BASIC and PETSCII to create both images and animations. The three programs below create animations like traditional animation cels one-by-one using the `PRINT` command.

    > Since modern computers and blog systems don't support all Commodore control characters, some code examples in this chapter are screenshots from the Plus/4 VICE emulator.

### PULSE BALL PROGRAM
Need a visual for an alarm, this program will perfectly and you can modify the speed of the pulse by changing the value of `L`.

```basic
10 ? "⌂●"
20 FOR L = 1 TO 100 " : REM CHANGE VALUE TO MODIFY SPEED
30 NEXT L
40 ? "⌂○"
50 FOR L = 1 TO 100 : REM SHOULD = L IN LINE 20
60 NEXT L
70 GOTO 10
```
**💾 On Disk:** `07 PULSE BALL`

### JUMPING JACKS PROGRAM
It's exercise time. This program will help you get your daily number of jumping jacks logged and you can make them as fast as you want!

```
5 SCNCLR
10 ? "⌂╲○╱"
20 ? " ▒ "
30 ? "╱ ╲
40 FOR L = 1 TO 100 : NEXT L
50 ? "⌂ ○ "
60 ? "▔▒▔"
70 ? " ││"
80 FOR L = 1 TO 100 : NEXT L
90 GOTO 10
```
**💾 On Disk:** `07 JUMPING JACK`

### INCH WORM PROGRAM
The two examples above place animations on the screen that stay in the same location. In this program, our worm will inch its way along the top two lines of the screen and then stop.

```
5 FOR A= 0 TO 30 : REM CHANGE A BUT NOT > 34
10 SCNCLR
20 PRINT TAB(A)"╭╮╭╮"
30 PRINT TAB(A)"╯╰╯╰"
40 FOR L= 1 TO 100 : NEXT L
50 SCNCLR
60 PRINT TAB(A)"╮╭╮╭"
70 PRINT TAB(A)"╰╯╰╯"
80 FOR L= 1 TO 100 : NEXT L
90 NEXT A
```
**💾 On Disk:** `07 INCH WORM`

### MOVING A BALL
We can make a simple animation by drawing an object, then erasing it, and then redrawing in the next adjacent space as shown in the code below. BASIC will draw a `●`, then move back one space. The next line will overwrite the previous `●` with a `␣` and then draw another `●` to the right of the previous. It's a simple animation that moves the ball from the top-left of the screen, line-by-line, until it reaches the bottom lower-right. Can you predict what happens next?

```
10 SCNCLR
20 ? " ●←";
30 FOR L = 1 TO 50 : NEXT L
40 GOTO 20
```
**💾 On Disk:** `07 MOVE ●`

## Controlling Colors

In our previous examples, all the characters have been black. We touched on changing colors back in Chapter 4. In this section we will spend more time learning how to modify not only individual character colors, but screen and border colors. Give is try with the examples below:

`COLOR 4,3` | This will change the border color to red, kinda. `4` is the item with the color change, in this case the border, and `3` is the color.

`COLOR 0,7` | This will change the background color to blue. `0` specifies a border color change with `7` once again representing the color.

`COLOR 4,3,0` | There is a third color value. The third value represents luminance. Use this to modify those "kinda" red and blue colors. When you use this color command, the border is "really" red now.

The table below displays all `COLOR` command variables:

| Area            | Color           | Lum         |
|:----------------|:----------------|:------------|
| 0 Background    | 1 Black         | 0 Darkest   |
| 1 Character     | 2 White         | 1           |
| 2 Multi-color 1 | 3 Red           | 2           |
| 3 Multi-color 2 | 5 Purple        | 3           |
| 4 Border        | 6 Green         | 4           |
|                 | 7 Blue          | 5           |
|                 | 8 Yellow        | 6           |
|                 | 9 Orange        | 7 Brightest |
|                 | 10 Brown        |             |
|                 | 11 Yellow Green |             |
|                 | 12 Pink         |             |
|                 | 13 Blue Green   |             |
|                 | 14 Light Blue   |             |
|                 | 15 Dark Blue    |             |
|                 | 16 Light Green  |             |

> Multi-color modes will be discussed in the high resolution graphics section.

### PLUS/4 COLORS
The program below will display all Commodore Plus/4 colors as shown in the image below:

![Plus/4 Color Palette](/plus4/images/plus4-colors.png)

```
5 SCNCLR
10 COLOR 0,7,7
20 FOR M = 0 TO 7
30 FOR N = 1 TO 2
40 FOR L = 1 TO 15 : REM CHANGE FROM 16 IN MANUAL
50 ? "[RVS ON]"; REM ⌃ + 9 FOR [RVS ON]
60 READ A
70 COLOR 1, A, M
80 ? "  ";
90 NEXT L
100 ?
110 RESTORE : REM MOVES DATA POINTER BACK TO START OF DATA LIST
120 NEXT N, M
130 COLOR 1, 2, 4
200 DATA 7, 14, 4, 13, 6, 16, 11, 8, 10, 9, 3, 12, 5, 15, 2, 1
```
**💾 On Disk:** `07 COLOR PALETTE`

## High Resolution Graphics



## Points, Lines, and Labels



## Squares, Circles, Polygons, and Painting



## Multi-Color Graphics



## Final Thoughts

This chapter was a blast; although it did take a long time to prepare this post and the video as I learned and relearned Commodore BASIC concepts.

In the next chapter, we will use the Plus/4 to play sounds and music. Add these concepts to this chapter and we are on our way to creating games and audio/visual demos.

You won't want to miss that fun.  Make sure you <font color="red">SUBSCRIBE</font> to my [YouTube channel](https://www.youtube.com/stevencombs).

## Join the Fun

Help make this series better! Post feedback, questions, and ideas. Let me know if you are following along. Let's make this a community project. For now, Leave your comments and thoughts below or in the comments [under the YouTube video](link).

Thanks for watching and if you are inclined, please let other Commodore fans know about the series, my blog, and the YouTube channel, by sharing these videos using #retroCombs.

🕹️ retroCombs OUT!
