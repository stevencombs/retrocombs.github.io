---
layout: post
title: 'Commodore Plus/4 User’s Manual - Plus/4 Encyclopedia'
date: '2022-01-07'
author: 'Steven B. Combs, Ph.D.'
email: 'steven.combs@gmail.com'
comments: yes
permalink: plus4-10
category: plus4
tags:
  - commodore
  - basic
  - assembler
---

With the last chapter complete, we now spend our time in the last half of the manual. You read that correctly, Chapters 1 through 8 take the first 100 pages, and the Plus/4 Encyclopedia occupies another 183 pages of the user's manual.

> **MEMBERSHIP:** I now offer retroCombs memberships from $1 (PET level membership) to $20 (MEGA65 level membership) that include levels in between for all budgets (VIC-20, C64, Plus/4, and C128). If you'd like to support my content and get access to my Discord server along with other cool freebies, check out each level at <https://www.buymeacoffee.com/retroCombs>.

----
<TOC>
----

## Series Information

This blog post and companion video is part of my larger Commodore Plus/4 series. You can read the entire series and view additional resources at:

<https://www.stevencombs.com/plus4>

## Companion Disk Image

As I progress through the user's manual, I enter and execute sample programs. The link below is to a `.D81` image that contains every program from each episode.

[retroCombs User's Manual Disk Image](/plus4/plus4-users-manual.d81)

I use the following file name convention to make it easy to locate specific programs:

<img src="https://www.stevencombs.com/images/design/floppy-disk-small.png" align="right">Sample Program Name: `02 RCOMBS SCROLL.PRG`

* `02` - The chapter number
* `RCOMBS SCROLL` - my self assigned name for the BASIC program which will be immediately identifiable if you follow along.

## User's Manual

As part of my Commodore Plus/4 YouTube series, I work through each chapter of the Plus/4 manual. I've taken the time to scan each chapter. Use the link below to view the Encyclopedia:

[Plus/4 Encylopedia](https://www.stevencombs.com/plus4/users-manual/p4um-encyclopedia.pdf)

For previous chapters, view the [Commodore Plus/4 Resource Page](https://www.stevencombs.com/plus4) 

## Companion Video: 

Video Title: _‌Commodore Plus/4 User's Manual \| Chapter 8 - Making Sound and Music \| Beeps, boops and bops!_

In the video below, I share highlights of the Plus/4 Encyclopedia.

<div style="position:relative;padding-top:56.25%;"><p><iframe src="link" frameborder="0" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true" style="position:absolute;top:0;left:0;width:100%;height:100%;"></iframe></p></div>

## Video Errata

None as of 2022-01-07.

## Links Mentioned:

Below are the links I mention in the video. All Amazon links are affiliate links. Thanks for supporting the blog and the YouTube channel!

1. 

## Key to Keys

Because the Commodore Plus/4 keyboard is so different from modern keyboards, I devised a modern key nomenclature to identify keystroke combinations as shown in the table below:

| Key     | Description   | Key  | Description |  
| :------ | :------------ | :--- | :---------- |  
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

1. Channel memberships are now available! Check out [my Buy Me A Coffee page](https://www.buymeacoffee.com/retroCombs) and support the channel if you found value in the Plus/4 series.
2. Don't forget to [subscribe to the channel](https://www.youtube.com/stevencombs)!
3. .d81 disk image is available [here](https://www.stevencombs.com/plus4#companion-disk-image).

## Encyclopedia Introduction

The first half of the Commodore Plus/4 User's Manual contains chapters one through eight. The Encyclopedia occupies the last half. Both halves are 100 pages. In this blog post and companion video, I will not cover the Encyclopedia in its entirety but will share highlights from each of the 14 sections. Afterward, I encourage you to explore each section.

The Encyclopedia includes a mix of beginner and advanced topics. The most useful section for the beginner, and the longest section in the user's manual, is *Section 1: BASIC 3.5 Encyclopedia*. If you are new to Commodore BASIC or want to understand the upgraded commands that come with BASIC 3.5, review this section.

*Section 12: Programs to Try* includes BASIC code that explores concepts found in past chapters. I include them all on the [retroCombs User's Manual Disk Image](/plus4/plus4-users-manual.d81).

## Section 1: BASIC 3.5 Encyclopedia

The BASIC 3.5 Encyclopedia is 51 pages long and provides an alphabetical listing of all BASIC commands. Throughout this series, I covered a majority of the commands and BASIC concepts; however, I will highlight those not covered or that deserve additional detail.

> **NOTE:** This section recommends the [Programmer's Reference Guide for the Commodore Plus 4 (1986)(Scott Foresman & Co)](https://archive.org/details/Programmers_Reference_Guide_for_the_Commodore_Plus_4_1986_Scott_Foresman_Co). Luckily, the Internet Archive has a copy to read online or download.

### COMMAND AND STATEMENT FORMAT

Below is a sample command to describe a sample of the conventions the encyclopedia uses.

Example Command: **`DLOAD`**"*program name*",[**`D`**rive**`#`**],[**`U`**nit**`#`**]

Breaking the command down:

- **`DLOAD`**: command and includes an option for a program name, in italics, bookmarked by required `""`
- **`D0`**: a sample argument, or parameter, preceded by a `,` and bookmarked by `[]` which indicates an option argument
- **`U8`**: an additional optional argument preceded by a `,`

Additional command conventions include:

- **|**: select from the list of limited arguments
- `…`: argument can be used more than once
- `()`: the argument must include the parenthesis

Additional important conventions:

- **VARIABLE**: Data values that can change in code or via user input, such as `X`, `A$`, or `T%`
- **EXPRESSION**: Valid combinations of mathematical functions or values to create a new value, such as `A+B+2` or `.5*(X+3)` 

Understanding these conventions provides clear insight to each command found in the next section.

### BASIC COMMANDS AND STATEMENTS

Throughout this series, I demonstrate many of the commands listed in this section; however, below are a commands in both section BASIC Commands and BASIC Statements not covered:

`AUTO [#]`: Toggles automatic line numbering. Using a numeric argument, such as `AUTO 10`, will number each line of code in increments of 10. This works while typing code. It does not renumber existing lines of code.

`DIRECTORY "RC\*"`: Lists all files in a directory that begins with RC. Alternatively, `DIRECTORY "RC?.PRG"` includes the `?` wildcard that will list for files such as RC1.PRJ, RC2.PRJ, etc.

`SCRATCH` `"`*program_name*`"`: Deletes a file from a directory.

`MONITOR:` Enters the Plus/4's built-in machine-language monitor. To exit the monitor back to BASIC, type `X`. The TEDMON has its own section later in the Encyclopedia.

`TRAP 50`: Intercepts an error condition and jumps to line 50. Used in conjunction with TRON, begin trace mode, and TROFF, turn off trace mode. An example best demonstrates the use of these commands.

```realbasic
10 TRON
20 TRAP 50
30 PRINT "RETROCOMBS"
40 GOTO 20
50 PRINT "ERROR:";ERR$(ER);"IN LINE";ER
```
**💾 On Disk:** `EN TRAP`

> **HINT:** Try adding a syntax error to line 30 and run the program again. You will receive a different error message.

<!-- Pull .d81 disk off pi1541 and replace the one on the web page. IT IS INCORRECT! -->

### MORE ON GRAPHICS STATEMENTS

Like a cursor in text mode that provides a current location, a pixel cursor (PC) identifies the position where a "next" pixel will be drawn; however, there is no visual indication. You can relocate the relative PC location using the command below:

`LOCATE +10,-20`: Move the current PC right 10 pixels and up 20 pixels.

Relative coordinates can be used with other commands as shown below:

`DRAW 1,+10,-20 TO 100,100`: Draws a line 10 pixels right and 20 pixels below the current PC to an absolute point at 100,100.

Distance and angles are possible as shown below:

`LOCATE 50;45`: Move the PC 50 pixels at an angle of 45°. This is helpful to create complex geometry.

An example best demonstrates the use of these commands.

```realbasic
10 COLOR 0,1
20 COLOR 1,2
30 GRAPHIC 2,1
40 LOCATE 120,100
50 DRAW 1,+0,+0 TO 50;45 TO 50;135 TO 12
0,100
60 CIRCLE 1,+0,+0,10
```
**💾 On Disk:** `EN LOCATE`

The advantage to this technique is the ability to move the entire shape by modifying a single line, `40`. Try it.

### FUNCTIONS

The encyclopedia uses three function classifications: numeric, string, and other. I covered many of these in the earlier chapters and will not cover them all here; however, there are a few that are of interest and helpful.

> **NOTE:** Functions are used in conjunction with variables or `PRINT` commands.

`DEC("FFFF")`: Returns the decimal value of a hexadecimal string. In this case, the value is `65535`.

`INSTR("RETROCOMBS","OCO")`: Returns the position in the first string of the text in the second sting. In this case, the value is `5`.

`JOY(N)`: Returns the position of either joystick 1 or 2 where `N` is the joystick number. Below is a sample program and additional information.

```realbasic
10 ? JOY(1);
20 GOTO 10
```
**💾 On Disk:** `EN JOYSTICK TEST`

**Values Table**

0 = Neutral \| 1 = North \| 2 = Northeast

3 = East \| 4 = Southeast \| 5 = South

6 = Southwest \| 7 = West \| 8 = Northwest

128 = Button Press \| 128+ = Button Press + Direction (e.g. 129 = Button Press and North)

`RDOT(N)`: Returns information about the pixel cursor (PC) where N is 0 for x position, 1 for y position, and 2 for color source.

`LEN("RETROCOMBS"): Returns the length of the character string. In this case, the value is 10.

`FRE(X)`: Returns the bytes of free memory available. `X` is a placeholder.

Functions are essential to programming as are variable and operators.

### VARIABLES & OPERATORS

Commodore BASIC uses three types of variables found in other operating systems:

1. **Numeric**: These *floating point* variables can be any supported decimal value. When values are larger than nine digits, scientific notation is used. For example, the number 1234567801 is displayed as 1.23456789E+10.
2. **Integers**: Any whole number from -32767 to +32768. The lack of decimals allow integer variable to take less memory.
3. **Strings**: Any character values. We've used these earlier examples such as, `"retroCombs"`.

The values are held within variables. Variable types describe the type of variable as shown below:

1. **Numeric Variables** - `A`, `A5`, `BZ`
2. **Integer Variables** - `A%`, `A5%`, `BZ%`
3. **String Variables** - `A$`, `A5$`, `BZ$`

Commodore BASIC uses seven reserved variables, or variable that you cannot create, but can use, in BASIC programming.

<START HERE>

### BASIC OPERATORS



## Section 2: BASIC 3.5 Abbreviations



## Section 3: Conversion Programs



## Section 4: Error Messages



## Section 5: Tedmon Commands



## Section 6: Screen Display Codes



## Section 7: ASCII and CHR$ Codes



## Section 8: Screen and Color Memory Maps



## Section 9: Plus/4 Memory Register Map



## Section 10: Deriving Mathematical Functions



## Section 11: Musical Note Table



## Section 12: Programs to Try

```realbasic
10
```
**💾 On Disk:** `08 MAKE TONE`

## Section 13: RS-232 Interface

> See [Connect a Commodore Plus/4 to a BBS using a Wi-Fi modem](https://www.stevencombs.com/plus4-bbs)

## Section 14: Books for Commodore Products

Several books are listed but what surprises me is that none of them are Commodore Plus/4 specific.

Here are links to other books that I recommend.

1. [Programmer's Reference Guide for the Commodore Plus 4 (1986)(Scott Foresman & Co)](https://archive.org/details/Programmers_Reference_Guide_for_the_Commodore_Plus_4_1986_Scott_Foresman_Co)

## Final Thoughts

1. The Encyclopedia…
2. That concludes my Commodore Plus/4 User's Manual series.

## Join the Fun

Don't miss the fun, <font color="red">SUBSCRIBE</font> to my [YouTube channel](https://www.youtube.com/stevencombs).

Help make this content better! Leave your comments and thoughts below or in the comments [under the YouTube video](https://youtu.be/GBJ2EVsqrLU).

Thanks for reading and watching and if you are inclined, please let others know about the blog using the hashtag #retroCombs on your favorite social media platform.

🕹️ retroCombs, OUT!
