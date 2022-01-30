---
layout: post
title: 'Commodore Plus/4 User’s Manual - Plus/4 Encyclopedia'
date: '2022-01-28'
author: 'Steven B. Combs, Ph.D.'
email: 'retrocombs@icloud.com'
comments: yes
permalink: plus4-encylopedia
category: plus4
tags:
  - commodore
  - basic
  - assembler
---

With the last regular Commodore Plus/4 User's Guide chapters complete, we now focus on the last half of the manual. You read that correctly. Chapters 1 through 8 take the first 100 pages, and the Plus/4 Encyclopedia occupies another 183 pages of the user's manual.

> **MEMBERSHIP:** I now offer retroCombs memberships from $1 (PET level membership) to $20 (MEGA65 level membership) that include levels in between for all budgets (VIC-20, C64, Plus/4, and C128). If you'd like to support my content and get access to my Discord server along with other cool freebies, check out each level at <https://www.buymeacoffee.com/retroCombs>.

Before the blog post, I must add a HUGE thanks to [Robin](https://twitter.com/8BitShowAndTell) over at [8-Bit Show and Tell](https://www.youtube.com/8BitShowAndTell). He was extremely gracious to collaborate with me. He's a rock star in the retro computing YouTube community and for someone like him to share screen time with me reinforces what a great guy he is. If you are coming over from his channel. WELCOME! I know my content won't live up to Robin's but I hope you will introduce yourself on the YouTube channel or in the comments below and let me know if you find something you like.

**Table of Contents**

----

<!-- TOC -->

- [Series Information](#series-information)
- [Companion Disk Image](#companion-disk-image)
- [User's Manual](#users-manual)
- [Companion Video:](#companion-video)
- [Video Errata](#video-errata)
- [Key to Keys](#key-to-keys)
- [Introduction](#introduction)
- [Encyclopedia Introduction](#encyclopedia-introduction)
- [Section 1: BASIC 3.5 Encyclopedia](#section-1-basic-35-encyclopedia)
  - [COMMAND AND STATEMENT FORMAT](#command-and-statement-format)
  - [BASIC COMMANDS AND STATEMENTS](#basic-commands-and-statements)
  - [MORE ON GRAPHICS STATEMENTS](#more-on-graphics-statements)
  - [FUNCTIONS](#functions)
  - [VARIABLES & OPERATORS](#variables--operators)
  - [BASIC OPERATORS](#basic-operators)
- [Section 2: BASIC 3.5 Abbreviations](#section-2-basic-35-abbreviations)
- [Section 3: Conversion Programs](#section-3-conversion-programs)
- [Section 4: Error Messages](#section-4-error-messages)
- [Section 5: TEDMON Commands](#section-5-tedmon-commands)
- [Section 6: Screen Display Codes](#section-6-screen-display-codes)
- [Section 7: ASCII and CHR$ Codes](#section-7-ascii-and-chr-codes)
- [Section 8: Screen and Color Memory Maps](#section-8-screen-and-color-memory-maps)
- [Section 9: Plus/4 Memory Register Map](#section-9-plus4-memory-register-map)
- [Section 10: Deriving Mathematical Functions](#section-10-deriving-mathematical-functions)
- [Section 11: Musical Note Table](#section-11-musical-note-table)
- [Section 12: Programs to Try](#section-12-programs-to-try)
  - [Line Draw](#line-draw)
  - [Wolf Whistle](#wolf-whistle)
  - [Computer Maniac](#computer-maniac)
  - [Telephone](#telephone)
  - [Busy Signal](#busy-signal)
  - [Bubbles](#bubbles)
  - [Zap Beam](#zap-beam)
  - [Music Lines](#music-lines)
- [Section 13: RS-232 Interface](#section-13-rs-232-interface)
- [Section 14: Books for Commodore Products](#section-14-books-for-commodore-products)
  - [Commodore Books](#commodore-books)
  - [BASIC Programming](#basic-programming)
  - [Machine Language Programming](#machine-language-programming)
- [Final Thoughts](#final-thoughts)
- [Join the Fun](#join-the-fun)

<!-- /TOC -->

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

[Plus/4 Encylopedia](https://www.manualslib.com/manual/1030491/Commodore-Plus-4.html?page=122#manual)

For previous chapters, view the [Commodore Plus/4 Resource Page](https://www.stevencombs.com/plus4)

## Companion Video:

Video Title: _‌Commodore Plus/4 User's Manual \| The Encyclopedia_

In the video below, I share highlights of the Plus/4 Encyclopedia.

<div style="position:relative;padding-top:56.25%;"><p><iframe src="https://www.youtube.com/embed/zWa1s4q4I0s" frameborder="0" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true" style="position:absolute;top:0;left:0;width:100%;height:100%;"></iframe></p></div>

## Video Errata

[2022-01-29] In the error message section, I discuss the variables `DS` and `DS$`. While not explicitly stated in the manual, DS stands for disk status.

[2022-01-30] LGB Gábor Lénárt shares in [the video](https://youtu.be/zWa1s4q4I0s) comments useful information regarding Commodore BASIC abbreviations. Check out his comment below:

> BASIC abbreviations have no rules at least not in a way which many expects :). They are originally not even a designed/intended feature, it's just exploiting a quirk how the tokenizer work and actually was realized later (even by the authors of the ROM!) that they can be used and can be useful. In fact you can use any abbreviation which makes sense and means what you want (the problem when similar names have similar first characters). For example DI+shiftR can be written as DIR+shitE, etc etc.  It cannot be D+shiftI, but only because 'DIM' would match before DIRECTORY :) You can try, if you're not sure about an abbreviation, like writing a tiny BASIC program: 10 DI+shiftM then list it, so you can see what it will mean. This is also a problem, since these abbreviations are not consistent through different Commodore BASICs, as new keywords would match you don't expect from older BASICs. Like P+shiftO means POKE on C64 (V2 basic but also in V3.5) but it's POT on C128 (V7 BASIC), just because the tokenizer found match first with that. Surely you can try to use then PO+shiftK.

## Key to Keys

Because the Commodore Plus/4 keyboard is so different from modern keyboards, I devised a modern key nomenclature to identify keystroke combinations, as shown in the table below:

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
3. A .d81 disk image is available [here](https://www.stevencombs.com/plus4#companion-disk-image).

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
- **`D0`**: a sample argument, or parameter, preceded by a `,` and bookmarked by `[]` which shows an option argument
- **`U8`**: an additional optional argument preceded by a `,`

Additional command conventions include:

- **|**: select from the list of limited arguments
- `…`: use of multiple arguments
- `()`: the argument must include the parenthesis

Additional important conventions:

- **VARIABLE**: Data values that can change in code or via user input, such as `X`, `A$`, or `T%`
- **EXPRESSION**: Valid combinations of mathematical functions or values to create a new value, such as `A+B+2` or `.5*(X+3)`

Understanding these conventions provides clear insight to each command found in the next section.

### BASIC COMMANDS AND STATEMENTS

Throughout this series, I show many of the commands listed in this section; however, below are commands in the sections *BASIC Commands* and *BASIC Statements* that I did not cover:

`AUTO [#]`: Toggles automatic line numbering. Using a numeric argument, such as `AUTO 10`, will number each line of code in increments of 10. This works while typing code. It does not renumber existing lines of code.

`DIRECTORY "RC\*"`: Lists all files in a directory that begins with RC. Alternatively, `DIRECTORY "RC?.PRG"` includes the `?` wildcard that will list for files such as RC1.PRJ, RC2.PRJ, etc.

`SCRATCH` `"`*program_name*`"`: Deletes a file from a directory.

`MONITOR:` Enters the Plus/4's built-in machine-language monitor. To exit the monitor, type `X`. The TEDMON has its own section later in the Encyclopedia.

`TRAP 50`: Intercepts an error condition and jumps to line 50. Used with TRON (begin trap mode) and TROFF (turn off trap mode). An example best shows the use of these commands.

> **NOTE:** Not Disney's TRON or his quirky brother, TROFF!

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

We can use relative coordinates with other commands, as shown below:

`DRAW 1,+10,-20 TO 100,100`: Draws a line 10 pixels right and 20 pixels below the current PC to an absolute point at 100,100.

Distance and angles are possible, as shown below:

`LOCATE 50;45`: Move the PC 50 pixels at an angle of 45°. This is helpful in creating complex geometry.

An example best shows the use of these commands.

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

> **NOTE:** Use functions with the `PRINT` command.

`DEC("FFFF")`: Returns the decimal value of a hexadecimal string. Here, the value is `65535`.

`INSTR("RETROCOMBS","OCO")`: Returns the position in the first string of the text in the second sting. Here, the value is `5`.

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

1. **Numeric**: *Floating point* variables are decimal values. When values are larger than nine digits, scientific notation is used. For example, the number 1234567801 will display as 1.23456789E+10.
2. **Integers**: Whole number from -32767 to +32768. The lack of decimals allows integer variable to take less memory.
3. **Strings**: Any character value. We've used these earlier examples such as, `"retroCombs"`.

The computer holds values within variables. Variable types describe the type of variable as shown below:

1. **Numeric Variables** - `A`, `A5`, `BZ`
2. **Integer Variables** - `A%`, `A5%`, `BZ%`
3. **String Variables** - `A$`, `A5$`, `BZ$`

Commodore BASIC uses seven reserved variables, or variable that you cannot create, but can use, in BASIC programming. They include: `DS`, `DS$`, `ER`, `EL`, `ST`, `TI`, and `TI$`. Remember, there are commands you cannot use as variables either, including: `TO` and `IF`.

Of these, `TI` and `TI$` are of interest. You can use these variables to read and set the internal clock that is reset each time the Plus/4 is powered on or reset.

The `? TI` command will print a value that is based on the time, every 1/60th of a second.

Use `TI$="120000` to set the 24 hour internal clock and `? TI$` to view the current value. The first two number are the time, the next two numbers the minutes, and the final two the seconds.

### BASIC OPERATORS

I extensively covered basic operators in [Chapter 5](https://www.stevencombs.com/plus4-6). This section serves as a quick reference; however, there is value in a brief discussion of three logical operators: `AND`, `OR`, & `NOT`. These are used to join multiple formulas in `IF`…`THEN` statements or with arithmetic operations where they are evaluated last (after +, -, *, and /).

`AND`: Requires both this or that. Example: `IF A=B AND C=D THEN 100`

`OR`: Allows either this or that. Example: `IF A=B OR C=D THEN 100`

`NOT`: Allows not this. Example: `IF NOT A=B THEN 100` and below is a programming example:

```realbasic
10 A = 0
20 B = 1
30 IF NOT A = B THEN 50
40 PRINT "A IS EQUAL TO B" : END
50 PRINT "A IS NOT EQUAL TO B"
```
**💾 On Disk:** `EN NOT`

Change the variables in lines 10 and 20 to the same number and `RUN` the program again.

Below are two more examples:

`PRINT 5 OR 7` returns `7`

`PRINT 123 AND 15` returns `11`

If, like me, you find yourself asking, HUH?!?. The solution is in a conversion from decimal to binary for each value, execute the operation on each digit, and then convert back to decimal as shown below:

```
PRINT 5 OR 7
101 = 5
111 = 7
–––
111 = 7

PRINT 15 AND 123
0001111 =  15
1111011 = 123
–––––––
0001011 = 11
```

## Section 2: BASIC 3.5 Abbreviations

Abbreviations shorten the time and keystrokes necessary to enter BASIC programs. The general convention is:

1. Commands with two characters have no shortcuts. Example: `DO`
2. Commands with four characters or less are a combination of the first letter followed by shift and the second character. Example: `D_` for `DRAW`
2. Commands with five or more characters are the first two letter followed by a shift and the third character. Example: `DI_` for `DIRECTORY`

Commands such as `DLOAD` (`D└`) and `DSAVE` (`D♥`) do not follow these rules. If the rule doesn't work, try the rule prior or consult the table on pages 151→153.

## Section 3: Conversion Programs

This section includes hints to convert "standard" BASIC (other than Commodore) to Commodore BASIC version 3.5. These tips are useful if you come from another platform's BASIC; however, I'm not going to cover each section since Commodore BASIC is all I've ever know; however, there is a final section that in of interest; *Reprogramming Function Keys*.

Use the code below to reprogram the Plus/4 function keys:

`FOR I = 1 TO 8 : KEY I, CHR$(I + 132) : NEXT`

Function keys 1 through 8 now return non-printing characters 133 through 140 (see CHR$ codes on page 176) making their action compatible with the Commodore 64.

## Section 4: Error Messages

Along the BASIC programming journey, there are always mistakes, and the Commodore Plus/4 tries to assist by presenting error messages that are sometimes helpful or bewildering. This section can help clarify those bewildering messages. Review this section if you are unsure what an error message is trying to convey.

There is an interesting function available that could be a lot of fun in BASIC if you want to prank someone or create a hacking game:

`PRINT ERR$(#)`

Substitute # for one of the error numbers in column one and the Plus/4 will print that error. For example, `PRINT ERR$(26)` prints `CAN'T CONTINUE'.

If you need help with a disk operating system (DOS) error message, they listed those on page 159→163 and contain their own reserved variables `DS` and `DS$`. Unlike `ERR$`, these two variables cannot be assigned, but you can use them to display the current status.

## Section 5: TEDMON Commands

As a fun name amalgam of the TED chip and an assembly language monitor, they built TEDMON into the Plus/4 and includes an assembler and disassembler.

Machine language can create complete programs or as adjunct code to speed up BASIC code. I am not versed in Commodore computer machine code, or any machine code, but I know someone who is!

I reached out to Robin, over at [8-Bit Show and Tell](https://www.youtube.com/c/8BitShowAndTell) and asked him if he had time to put together a video on the use of the TEDMON. He graciously said, "yes". Not familiar with 8-Bit Show and Tell? You must live under a YouTube retro-computing rock.

I once called Robin my 8-Bit guru. I've learned more about retro-computers, primarily Commodore, watching Robin, than any other channel. His videos share interesting information, tips, tricks, and programming strategies. Get your degree in 8-bit computing by watching Robin's channel and get started by watching his TEDMON video below:

<div style="position:relative;padding-top:56.25%;"><p><iframe src="https://www.youtube.com/embed/7mtpxmQbs9E" frameborder="0" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true" style="position:absolute;top:0;left:0;width:100%;height:100%;"></iframe></p></div>

If you want to get started in TEDMON, type `MONITOR`. The Plus/4 will immediately enter TEDMON. At first, the screen is intimidating, but even if you don't program in assembly code, there are fun things you can do that I'll share in [Section 9: Plus/4 Memory Register Map](#section-9-plus4-memory-register-map). When finished, type `X` to return to the BASIC prompt.

## Section 6: Screen Display Codes

The section highlights the Plus/4's built-in character set, PETSCII. Additionally, an included table lists the value to POKE to screen memory (3072 to 4095). For example:

`POKE 3072,1` displays an `A` in the upper-left corner of the screen. To display the same character one space to the right type `POKE 3073,1`. To display the same character at the beginning of the next line type `POKE 3112,1`. Adding 128 to the last value displays the reverse of the character. To print lower case characters, use `PRINT CHR$(14)` prior to the POKE command and `PRINT CHR$(142)` to return to upper case.

The program below prints all the characters:

```realbasic
10 SCNCLR
20 PRINT CHR$(142) : REM SET UPPER CASE
30 FOR CH = 1 TO 127+128 : REM +128 FOR REVERSE CHARS
40 POKE 3071+CH,CH : REM LOCATION AND CHARACTER
50 NEXT CH
60 PRINT:PRINT:PRINT:PRINT : REM MOVE CURSOR DOWN
```
**💾 On Disk:** `EN UPPERCASE`

Change line 20 to 14 to display the lower case character set. You cannot display both at the same time.

> **REMEMBER:** `⇧` + `C=` keys toggles between upper and lower case mode.

Use the PEEK command to view characters in positions. For example, run the program above and then type:

`PRINT PEEK(3072)`

`1` will display, showing `A` is in the first character position at the upper-left corner of the screen.

## Section 7: ASCII and CHR$ Codes

This section has similarities to the previous section but provides a way to print characters using the `CHR$(X)` function, which we used in the previous section. The ASC("X") function can print the value for the character.

`ASC("X")` can assist to evaluate user input as part of a `GET` command while `CHR$(X)` can be used by program to "press" specific keys, change colors, flash, switch cases, etc. For example, the line below will turn on flash mode:

`PRINT CHR$(130);"RETROCOMBS"` prints a flashing `RETROCOMBS`

The next line will display the CHR$(X) code for the `#`  character.

`PRINT ASC("#")` prints `35`

At the bottom of the table is a list of additional numbers that are duplicate characters at higher memory locations.

## Section 8: Screen and Color Memory Maps

In section six, we learned how to place characters at specific locations on the screen. The image on page 177 is a map of those locations.

We can use the second map to give each character at each location a color, as shown in the example below:

`POKE 2048,2 : POKE 3072,1` will print <font color="red">`A`</font> in the upper-left corner of the screen.

To flash the <font color="red">`A`</font>, add 128 to the color as shown below:

`POKE 2048,130 : POKE 3072,1`

Finally, you can change the "luminance" of the color by multiplying the luminance value by 16 and adding it back to the luminance value as shown below to change `A` from red to pink:

`poke 2048,2+(6*16) : poke 3072,1`

You can replicate these functions with the `PRINT` command; however, using this technique has the advantage of being able to create the program below:

```realbasic
10 SCNCLR
20 PRINT CHR$(142)
30 COL = 0
40 LUM = 0
50 FOR CHR = 1 TO 255
60 POKE 3071+CHR,CHR
70 POKE 2047+CHR,COL+(LUM*16)
80 COL = COL + 1
90 LUM = LUM + 1
100 IF COL > 16 THEN COL = 0
110 IF LUM > 7 THEN LUM = 0
120 NEXT CHR
130 PRINT:PRINT:PRINT:PRINT:PRINT:PRINT
```
**💾 On Disk:** `EN CHAR RAINBOW`

This program prints all 255 uppercase characters at varying luminance values on the screen.

## Section 9: Plus/4 Memory Register Map

Using the memory register map with the TEDMON is a great way to take a peek inside the contents of your Commodore Plus/4. First enter TEDMON by type "MONITOR". `M` will list the first 12 lines. Pressing `M` again will display the next 12 lines; however, using the memory register map, we can jump to specific areas of Commodore Plus/4 memory by adding the hexadecimal address found in the map (minus the `$` symbol).

`M 80C8`: Displays the beginning of Commodore BASIC 3.5.

`M 818E`: Displays BASIC commands.

`M 846E`: Displays DOS error messages

To convert the machine code to assembly at a specific location, use the Disassemble `D` command and the memory address as shown:

`D 818E`: Disassembles the first 12 lines of BASIC. Type `D` by itself to disassemble the next 12 lines.

`M 1008`: Beginning of user BASIC program. Give it a try. Type in a few lines of BASIC code, activate the TEDMON, and "memory display", `M` address `1008`.

## Section 10: Deriving Mathematical Functions

This section explains how to create trigonometry and other mathematical functions when those functions are not available in BASIC. An example is the use of the `COS` function to create a secant function, as shown below:

`SEC(X)=1/COS(X)`

[UPDATE 2022-01-30] in the video, I have an incorrect line of BASIC code to define a function. The code should be:

`10 def fn sec(x)=1/cos(x)`

Thanks to [Corey Minter](https://www.youtube.com/channel/UCuBoBVHYG1F5d2kuQTWsNdw) for the correction!

Once coded in BASIC, you can use these new functions. I discuss functions in [Chapter 5](https://www.stevencombs.com/plus4-6).

## Section 11: Musical Note Table

I covered sound extensively in [Chapter 8](https://www.stevencombs.com/plus4-9) and the table in this section provides a quick reference to sound register value and that values frequency (NTSC). For example:

`VOL 4: SOUND 1,7,30` Plays an A note, on channel 1, at 50% volume, at a frequency of 110 Hz, for half a second. Substitute `7` with `515` to move up the scale on octave.

## Section 12: Programs to Try

This section includes eight additional Commodore Plus/4 programs to try. They are simple demonstrations of the Plus/4's sound and graphics capabilities.

### Line Draw

```realbasic
5 GRAPHIC 3,1 : GRAPHIC 0,1
10 INPUT "SHOULD I CLEAN UP MY MESS";A$
20 INPUT "SHOULD I ROTATE";B$
30 INPUT "SHOULD I VARY MOTION";C$
40 INPUT "SHOULD I PICK THE START";D$
50 IF A$ = "Y" THEN DIM A(3,200)
60 DEF FNA(X) = INT(RND(1)*X)
70 IF D$ = "Y" THEN X1 = FNA(80)+80 : X2=FNA(80)+80 : Y1=FNA(100)+100
75 IF D$ = "Y" THEN Y2 = FNA(100)+100
80 IF D$<>"Y" THEN X1 = 80 : X2=80 : Y1=100 : Y2=100
90 GRAPHIC 3 : FOR L = 1 TO 3 : COLOR L,FNA(15)+2,FNA(8) : NEXT
100 IF C1 < 1 THEN COLOR FNA(3)+1,FNA(15)+2,FNA(8) : C1 = FNA(40)+20
110 IF C2 <> 0 THEN 140 : ELSE XA = FNA(11)-5 : XB=FNA(11)-5 : YA=FNA(13)-6
115 YB = FNA(13)-6
120 IF C$ = "Y" THEN C2 = FNA(10)+5
130 IF B$ = "Y" THEN XB = -XA : YB = -YA
140 IF C3 < 1 THEN C = FNA(3)+1 : C3 = FNA(10)
145 IF A$ = "Y" THEN DRAW 0,A(0,P),A(1,P),A(2,P),A(3,P)
150 X1 = X1 + XA : X2 = X2 + XB : Y1 = Y1 + YA : Y2 = Y2 + YB
160 IF X1 < 0 OR X1 > 159 THEN XA = -XA : X1 = X1 + XA
170 IF X2 < 0 OR X2 > 159 THEN XB = -XB : X2 = X2 + XB
180 IF Y1 < 0 OR Y1 > 199 THEN YA = -YA : Y1 = Y1 + YA
190 IF Y2 < 0 OR Y2 > 159 THEN YB = -YB : Y2 = Y2 + YB
200 DRAW C, X1, Y1 TO X2, Y2
210 IF A$ = "Y" THEN A(0,P) = X1 : A(1,P)=Y1 : A(2,P)=X2 : A(3,P)=Y2: P = P + 1
215 IF A$ = "Y" THEN IF P > 200 THEN P = 0
220 C1 = C1 - 1 : C2 = C2 - 1 : C3 = C3 - 1 : GOTO 100
```
**💾 On Disk:** `EN LINE DRAW`

### Wolf Whistle

```realbasic
10 VOL 7
20 FOR L = 400 TO 800 STEP 20
30 SOUND 1,L,3 : NEXT
40 FOR L = 300 TO 600 STEP 40
50 SOUND 1,L,3 : NEXT
60 FOR L = 600 TO 300 STEP -40
70 SOUND 1,L,3 : NEXT
```
**💾 On Disk:** `EN WOLF WHISTLE`

### Computer Maniac

```realbasic
10 VOL 7
20 FOR L = 1 TO 100
30 SOUND 1,INT(RND(0)*500)+400,4
40 NEXT
```
**💾 On Disk:** `EN COMP MANIAC`

### Telephone

```realbasic
10 VOL 7
20 FOR L = 1 TO 5
30 FOR M = 1 TO 60
40 SOUND 1,466,1
50 SOUND 1,1020,1
60 NEXT
70 FOR Z = 1 TO 2000 : NEXT
80 NEXT
```
**💾 On Disk:** `EN TELEPHONE`

### Busy Signal

```realbasic
10 VOL 7
20 FOR L = 1 TO 15
30 SOUND 1,466,20
50 SOUND 1,1020,15
60 NEXT
```
**💾 On Disk:** `EN BUSY SIGNAL`

### Bubbles

```realbasic
10 VOL 7
20 GRAPHIC 1,1
30 FOR M = 1 TO 50
40 GOSUB 80
50 SOUND 1,900-R*20,(YR/2)+50
60 CIRCLE 1,X,Y,R,YR
70 NEXT : GRAPHICS : END
80 X = INT(RND(0)*280)+20
90 Y = INT(RND(0)*160)+20
100 R = INT(RND(0)*40)+5
110 YR=R/1.3
120 RETURN
```
**💾 On Disk:** `EN BUBBLES`

### Zap Beam

```realbasic
10 VOL 7
20 FOR M = 1 TO 20
30 FOR L = 900 TO 850 STEP -10
40 SOUND 1,L,1
50 NEXT
60 FOR L = 850 TO 900 STEP 10
70 SOUND 1,L,1
80 NEXT
90 NEXT
```
**💾 On Disk:** `EN ZAP BEAM`

### Music Lines

```realbasic
10 VOL 7
15 X1 = 0 : Y1 = 0
20 GRAPHIC 1,1
30 GET A$ : IF A$ = " " THEN GRAPHIC 0 : END
40 GOSUB 80
45 FOR L = 1 TO D STEP 2
50 SOUND 1,X*3,5
55 SOUND 2,Y*3,5
60 DRAW 1,X,Y
65 X = X + 2 * DX : Y = Y + 2 * DY
70 NEXT : GOTO 30
80 X = X1 : X1 = INT(RND(0)*280)+20
90 Y = Y1 : Y1 = INT(RND(0)*160)+20
100 A = X1 - X : B = Y1 - Y : D = SQR(A*A+B*B)
110 DX = A/D : DY = B/D
120 RETURN
```
**💾 On Disk:** `EN MUSIC LINES`

## Section 13: RS-232 Interface

The RS-232 is used to communicate with devices, such as printers and modems. Software that uses these devices will include BASIC or assembly code to transfer data between the Plus/4 and the device; however, this section includes detailed information to use BASIC programming to access the RS-232 port. For more information on how to use a Commodore Plus/4 with a modern Wi-Fi modern, read my [Connect a Commodore Plus/4 to a BBS using a Wi-Fi modem](https://www.stevencombs.com/plus4-bbs) blog post.

```realbasic
100 OPEN 5,2,2,CHR$(22)+CHR$(5)
110 DIM F% (255), T%(255)
120 FOR J = 32 TO 64 : T%(J) = J : NEXT
130 T%(13) = 13 : T%(20) = 8: RV =18 : CT = 0
220 FOR J = 65 TO 90 : K = J + 32 : T%(J) = K : NEXT
230 FOR J = 91 TO 95 : T%(J) = J : NEXT
240 FOR J = 193 TO 218 : K = J - 128 : T%(J) = K : NEXT
250 T%(146) = 16: T%(133) = 16
260 FOR J = 0 TO 255
270 K = T%(J)
280 IF K <> 0 THEN F%(K) = J : F%(K+128) = J
290 NEXT
300 PRINT " "CHR$(147)
310 GET#5,A$
320 IF A$ = "" THEN 360
330 PRINT " "CHR$(157);CHR$(F$(ASC(A$)));
340 IF F%(ASC(A$))=34 THEN PRINT CHR$(27)"O";
350 GOTO 30
360 PRINT CHR$(RV)" "CHR$(157);CHR$(146); : GET A$
370 IF A$ <> "" THEN PRINT#4,CHR$(T%(ASC(A$)));
380 CT = CT + 1
390 IF CT = 8 THEN CT=0 : RV = 164 - RV
410 GOTO 310
```
**💾 On Disk:** `EN OPEN RS-232`

## Section 14: Books for Commodore Products

Several books are listed, but few of them are Commodore Plus/4 specific. Some are available online with a Google search either as a PDF or in print:


### Commodore Books

- [VIC20 Programmer's Reference Guide](https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&ved=2ahUKEwjn4oqE18b1AhWKjIkEHTGbAZIQFnoECAwQAQ&url=http%3A%2F%2Fcini.classiccmp.org%2Fpdf%2FCommodore%2FVIC-20%2520Programmer%27s%2520Reference%2520Guide.pdf&usg=AOvVaw1bZ-zRo355wjtbpsV0HopT)
- [Commodore 64 Programmer's Reference Guide](http://www.classiccmp.org/cini/pdf/Commodore/C64%20Programmer's%20Reference%20Guide.pdf)
- [Commodore Plus/4 Programmer's Reference Guide](https://archive.org/details/Programmers_Reference_Guide_for_the_Commodore_Plus_4_1986_Scott_Foresman_Co)
- [VIC 20 Revealed, Hamshire](https://archive.org/details/VIC_Revealed)
- [VIC Games, Hamshire](https://datassette.nyc3.cdn.digitaloceanspaces.com/livros/vic_games.pdf)
- [VIC Graphics, Hamshire](https://archive.org/details/VIC_Graphics)
- [Stimulating Simulations for the VIC, C.W. Engle](https://www.abebooks.com/9780810451735/Stimulating-Simulations-VIC-Engel-0810451735/plp)
- [Introduction to BASIC, Part 1 and 2, Andrew Colin](https://amzn.to/33IooRF)
- [Commodore Software Encyclopedia, Third Edition](https://amzn.to/3GT5cPj)

### BASIC Programming

- [Armchair BASIC: An Absolute Beginner's Guide to Programming in BASIC, Fox & Fox](https://amzn.to/3rGA5QX)
- BASIC Handbook, Second Edition, Lien
- Basic Commodore 64 BASIC, Coan
- [Elementary BASIC, Ledgard & Singer](https://amzn.to/3rK9EJU)
- [How to Build a Program, Emmerichs](https://amzn.to/3Iy0RSn)
- [Instant Freeze-Dried Computer Programming in BASIC, Brown](https://amzn.to/3tRVs4w)
- [My Computer Likes Me When I Speak in BASIC, Albrecht](https://archive.org/details/My_Computer_Likes_Me_When_I_Speak_in_BASIC_Albrecht/page/n3/mode/2up)
- [Nailing Jelly to a Tree, Willis and Danley](https://amzn.to/3IzvGWR)
- [The Programmer's Book of Rules, Ledin & Ledin](https://amzn.to/33X2ytp)
- [Technical BASIC, Kassab](https://amzn.to/3rG1IJQ)

### Machine Language Programming

- [Machine Language for Beginners, Mansfield](https://www.atariarchives.org/mlb/)
- [Programming the 6502, Zaks](https://archive.org/details/Programming_the_6502_OCR)
- [6502 Assembly Language Programming, Leventhal](https://archive.org/details/6502-assembly-language-programming/page/n257/mode/2up)
- [6502 Micro Chart, Micro Logic Corp](https://www.apple.asimov.net/documentation/programming/6502assembly/Micro%20Logic%206502%20Quick%20Reference%20Card.pdf)
- [6502 Software Design, Scanlon](https://amzn.to/3nLTJtl)
- [The 6502 Software Gourmet Guide and Cookbook, Findlay](http://retro.hansotten.nl/uploads/books/Scelbi%206502%20Software%20Cookbook.pdf)

## Final Thoughts

1. The Encyclopedia is an excellent compliment to the rest of the user's manual.
2. That concludes my Commodore Plus/4 User's Manual series.
3. Should I cover the Plus/4 applications? Sound off in the comments below.
4. I will continue to explore the Commodore Plus/4. Be on the lookout for more content about this fascinating and misunderstood Commodore computer.

## Join the Fun

Don't miss the fun, <font color="red">SUBSCRIBE</font> to my [YouTube channel](https://www.youtube.com/stevencombs).

Help make this content better! Leave your comments and thoughts below or in the comments [under the YouTube video](https://youtu.be/GBJ2EVsqrLU).

Thanks for reading and watching and if you are inclined, please let others know about the blog using the hashtag #retroCombs on your favorite social media platform.

🕹️ retroCombs, OUT!

<!-- 

👍 Please take the time to like, subscribe, and support the channel using the links ↑. Find something useful that provided information or saved you time? Send a {❤THANKS}! You can now become a member, or support me, at ☕ BMAC (https://www.buymeacoffee.com/retroCombs).

Finally! The last part of my Commodore Plus/4 User's Guide series. In this episode, the Encyclopedia and Robin, from 8-Bit Show and Tell makes a cameo to help me out with the TEDMON.

📝Companion blog post with more information and all the links you need at: 
https://www.stevencombs.com/plus4-encylopedia

Find me online at:

📝 Blog: https://www.stevencombs.com/
🐦 Twitter: https://www.twitter.com/stevencombs
📹 YouTube: https://www.youtube.com/stevencombs
📘 Facebook: https://fb.com/retrocombsfb

Producers:
- Mislav Krleža
- Jamie's Hack Shack

Sign up for a C128 (Producer) or MEGA65 (Executive Producer) membership to have your name listed in future videos.

Time Codes:

00:00 Commodore Plus/4 Setup
00:23 Introduction
01:40 Video Bumper
01:50 Loading my Disk Image on the Pi1541
02:17 Support the Channel
03:00 Section 1: BASIC Commands Encyclopedia
05:06 AUTO  (Automatic Line Numbering)
05:55 DIRECTORY Wildcards
07:16 MONITOR (Assembly Language)
08:06 TRAP (TRON, TROFF)
10:00 Pixel Cursor (PC)
12:59 Commodore Abbreviations
15:15 Conversion Programs
17:01 Error Messages
18:52 TEDMON Commands
21:54 Screen Display Codes
27:02 ASCII and CHR$ Codes
30:36 Screen and Color Maps
35:42 Plus/4 Memory Register Map
38:36 Deriving Mathematical Functions
39:55 Musical Note Table
42:08 Programs to Try
42:35 Line Draw
43:06 Wolf Whistle
43:12 Telephone
43:17 Computer Maniac
43:51 Busy Signal
44:01 Bubbles
44:27 Music Lines
44:59 RS-232 Interface
46:51 Books for Commodore Products
47:36 Conclusion
48:59 Buy Me A Coffee
49:26 Watch More retroCombs

-->