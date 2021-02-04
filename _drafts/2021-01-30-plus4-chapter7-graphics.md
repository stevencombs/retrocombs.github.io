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

You will notice on the Plus/4 keyboard that not only does the keyboard allow for lower and upper case characters, but there's a whole host of graphic characters available on each letter key, `@`, `-`, and `*`.

In upper-case mode, press and hold the `⇧` (right character) or `C=` (left character) key, followed by one of the keys listed above to place graphics characters on the screen. The characters are know as PETSCII (similar to ASCII on later computers) and each one can be displayed using the `PRINT CHR$()` command if you know the right address.

**PETSCII** (PET Standard Code of Information Interchange), known as CBM ASCII, is the character set used in Commodore Business Machines (CBM)'s 8-bit home computers, starting with the PET from 1977 and including the C16, C64, C116, C128[1], CBM-II, Plus/4, and VIC-20. - [Wikipedia](https://en.wikipedia.org/wiki/PETSCII).

The character set expands when both shifted and unshifted modes are used. You can view a chart with PETSCII codes at [https://sta.c64.org/cbm64pet.html](https://sta.c64.org/cbm64pet.html).

The majority of PETSCII codes have been absorbed into ASCII; however, they can be difficult to find on modern keyboards. This makes a Commodore 8-bit computer much more adept at creating BASIC programs with animated characters.

I wrote a BASIC program that will display PETSCII characters on the screen. `DLOAD` or type the program and then `RUN` the program. The screen will clear and the PETSCII characters will fill the top of the screen. and then tap the `⇧` + `C=` keys to cycle between upper and lower-case modes as shown in the images below the code. Right-side graphics characters are available in both upper and lower-case modes. Left-side characters include lines and angles used to draw tables and charts.

```basic
5 SCNCLR
10 FOR T =33 TO 127 : PRINT CHR$(T); : NEXT T
20 FOR T = 160 TO 255: PRINT CHR$(T); : NEXT T
```
**💾 On Disk:** `07 PETSCII`

![Shifted](/plus4/images/petscii-shifted-lower-case.png)
![Un-shifted](/plus4/images/petscii-unshifted-upper-case.png)

Use combinations of the PETSCII characters to create lines, shapes, environments, characters, and even animations as we will cover next.

> **NOTE:** When you "draw" images on the screen using PETSCII, holding down the `⇧` or `⇧-Lock` while drawing and then following each line with `⏎` will not yield a syntax error. This is a great tip for prototyping screen designs.

## Character Animation

You can use BASIC and PETSCII to create both images and animations. The three programs below create animations like traditional animation cels one-by-one using the `PRINT` command.

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
20 ? TAB(A)"╭╮╭╮"
30 ? TAB(A)"╯╰╯╰"
40 FOR L = 1 TO 100 : NEXT L
50 SCNCLR
60 ? TAB(A)"╮╭╮╭"
70 ? TAB(A)"╰╯╰╯"
80 FOR L = 1 TO 100 : NEXT L
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

> **NOTE:** Multi-color modes will be discussed in the [Multi-Color Graphics](#multi-color-graphics) section.

### PLUS/4 COLORS
The program below will display all Commodore Plus/4 colors as shown in the image below:

![Plus/4 Color Palette](/plus4/images/plus4-colors.png)

```
5 SCNCLR
10 COLOR 0, 7, 7
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

The Plus/4 screen contains 25 rows of 40 characters each for a total of 1000 character positions (25 x 40 = 100). Each character is described by a grid of 8 x 8 pixels, or 64 pixels. Therefore, the full-screen resolution of a Plus/4 screen is 320, 200 and 64,000 pixels. So far, we've controlled each 8 x 8 grid only. In this section we will break that grid into the large screen and control all pixels individual to access "high resolutions graphics mode."

While you may be thinking "cool, now I can a single color for each pixel", here's the caveat. The Plus/4 will only all you to access two colors in each 8 x 8 character. Remember the multi-color option in the `COLOR` command? You can use this to activate high resolution graphics mode to provide four colors per character; however, this comes at the expense of screen resolution. More information in [Multi-Color Graphics](#multi-color-graphics) section.

### GRAPHICS

This BASIC program will create a series of intersecting lines using the `GRAPHIC` and `DRAW` commands to activate the high resolution areas of the screen as shown in the image below:

![Graphics](/plus4/images/graphics.png)

```
10 COLOR 0, 1
20 GRAPHIC 1, 1
30 FOR L = 2 TO 16
40 COLOR 1, L, 2
50 DRAW 1, 0, L * 12 TO 318, L * 12
60 DRAW 1, L * 18, 0 TO L * 18, 199
70 NEXT L
80 FOR L = 1 TO 5000 : NEXT
90 COLOR 1, 2, 3
100 GRAPHIC 0
```
**💾 On Disk:** `07 GRAPHICS`

Notice that the color of lines change as they intersect other lines due to the fact that each character can only contain two colors and the black background takes one of those colors.

If you want to experiment with graphic commands in immediate mode, type `GRAPHIC 2, 1` followed by `⏎`. The screen will go blank and the `READY.` prompt will appear at the fourth line from the bottom of the screen as shown in the image below.

![Graphic Mode](/plus4/images/graphic-mode.png)

In this mode, you have the bottom five lines for commands and the top of the screen for high-res display. `GRAPHIC 1, 1` will put the entire screen in high-res mode; however, you will type blindly.

You can switch between modes using `GRAPHIC 0` (text) and `GRAPHIC 2` (high-res). Switching does not remove what was on the previous screen unless you include `,1` at the end of the command. Below is a table that lists the various `GRAPHIC` command options:

| Effect               | Clear         |
|:---------------------|:--------------|
| 0 Text               | 0 Don't Clear |
| 1 High-res           | 1 Clear       |
| 2 High-res + text    |               |
| 3 Multi-color        |               |
| 4 Multi-color + text |               |

> **TIP:** The `SCNCLR` command will clear the high-res mode.

## Points, Lines, and Labels

Now the fun begins. Let's use BASIC commands to draw shapes in high-res mode. Type `GRAPHIC2,1:DRAW1,0,0` and hit `⏎`. Look very closely at the top left corner of the screen. You just drew your first pixel (dot) on the Plus/4. Every line begins at the beginning.

Let's try another one. Type `DRAW1,1,1 TO 100,100` and hit `⏎`. A line is drawn that connects to our dot (at coordinates X=0 and Y=0) beginning at X=1 and Y=1 to the end of the line at X=100 and Y=100. In theory (math that is) this should be a 45° line; however, because of the 8x8 character matrix, it's distorted.

> **REMEMBER** Unlike an axis in algebra or geometry, coordinates 0,0 is the upper left-hand corner, not the lower-left hand corner and positive values down and to the right.

Want to draw a line that continues from the previous? No need to remember or type the ending coordinates. Type `DRAW 1 to 150,50` and hit `⏎`. A new line, using absolute coordinates, will be drawn headed toward the upper right-hand corner as shown in the image below:

![Continue the previous line](/plus4/images/continue-line.png)

Want to fill in the triangle? Type `DRAW 1 TO 0,0` and hit `⏎`. We will learn how we can fill in that area in the [Squares, Circles, Polygons, and Painting](#squares-circles-polygons-and-painting) section below.pa

Let's break down the `DRAW` command syntax:

`DRAW` *color*, *column*, *row* `TO` *column*, *row*

Omitted everything from `TO` on , will draw a single dot.

There are two options for *color*. `0` equals the background color. `1` equals the forground color established using the last know value or by the COLOR command.

Time for a longer example.

### SINE CURVE

Let's use our new found graphics commands, combined with some math (or maths for my European visitors), to create a high-res representation of the sine function; the [sine curve (or wave)](https://en.wikipedia.org/wiki/Sine_wave) as shown in the image below:

![Graphics](/plus4/images/sine-wave.png)

```
10 color 0, 1
20 color 1, 2
30 graphic 1, 1
40 locate 0,100
50 for x = 1 to 319
60 y = int(100+99*sin(x/20))
70 draw 1 to x, y
80 next x
90 for l = 1 to 5000 : REM PAUSES SCREEN
100 next l
110 graphic 0
```
**💾 On Disk:** `07 SINE WAVE`

> **NOTE:** This is the first indication of how slow 8-bit computers were when running BASIC programs. Modern computers will spit out the results of programs like this one almost immediately after hitting the `⏎` key.

Without clearing the screen and immediately after running the program, replace line 70 by typing:

```basic
70 DRAW 1, X, Y
RUN
```

The program will create the curve using points instead of lines as shown below:

![Graphics](/plus4/images/sine-wave-points.png)

I like this version better, so keep the program in memory before continuing to the next section.

## The CHAR Command

A graph alone can speak volumes; however some graphs require characters to the full story or to orient users. Luckily, the Plus/4 allows us to overlay characters on top of our graphs.

### CHARACTERS ON GRAPH

Using the program from the previous section, add the following lines to add characters to our graph:

```basic
81 char 1, 0, 0, "graph of" : char 1, 0, 1, "formula"
82 char 1, 0, 2, "y=sin(x)"
83 draw 1, 0, 100 to 319, 100, 189, 0 to 189, 199
84 char 1, 0, 12, "x-axis" : char 1, 22, 0, "y"
85 char 1, 22, 2, "a" : char 1, 22 , 3, "x"
86 char 1, 22, 4, "t" : char 1, 22, 5, "s"
```

The result is a graphic with character labels as shown in the image below:

![Graphics](/plus4/images/sine-wave-labels.png)

## Squares, Circles, Polygons, and Painting



## Multi-Color Graphics



## Final Thoughts

This chapter was a blast; although it did take a long time to prepare this post and the video as I learned and relearned Commodore BASIC concepts.

In the next chapter, we will use the Plus/4 to play sounds and music. Add these concepts to this chapter and we are on our way to creating games and audio/visual demos.

You won't want to miss that fun.  Make sure you <font color="red">SUBSCRIBE</font> to my [YouTube channel](https://www.youtube.com/stevencombs).

## Join the Fun

Help make this series better! Post feedback, questions, and ideas. Let me know if you are following along. Let's make this a community project. For now, Leave your comments and thoughts below or in the comments [under the YouTube video](link).

Thanks for watching and if you are inclined, please let other Commodore fans know about the series, my blog, and the YouTube channel, by sharing these videos using #retroCombs.

🕹️ retroCombs, OUT!
