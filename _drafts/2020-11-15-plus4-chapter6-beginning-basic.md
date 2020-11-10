---
layout: post
title: 'retroCombs: Plus/4 User’s Manual Chapter 6 - Beginning BASIC Programming'
date: '2020-11-15'
author: 'Steven B. Combs, Ph.D.'
permalink: plus4-7
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
  - calculations
  - numbers
  - basic
---

In this Commodore Plus/4 retroCombs episode, I cover chapter 5 of the Commodore Plus/4 user's manual. In this chapter, _Number and Calculation_, I learn how to use the Plus/4 as a calculator in immediate mode, create a function, and learn more about working with numbers in Commodore BASIC 3.5. I even combine some things we learned in previous chapters to amp up our programs. It is a packed chapter and even though I'm no math teacher; I hope I do the concepts justice. This is one chapter where I find the User's Manual a bit lacking but adequate.

## Series Information

This episode is a small part of my larger Commodore Plus/4 series. You can read the entire series and view additional resources at:

<https://www.stevencombs.com/plus4>

## Companion Disk Image (In Progress)

As I progress through the user's manual, I enter and execute sample programs. The link below is to a `.d81` image that contains every program from each episode. **Like the series, the image is not complete.**

[retroCombs User's Manual Disk Image](/plus4/plus4-users-manual.d81) - **UPDATED AS OF:** 2020-11-01

I use the following file name convention to make it easy to locate specific programs:

<img src="/images/design/floppy-disk-small.png" align="right">Sample Program Name: `02 RCOMBS SCROLL.PRG`

* `02` - The chapter number
* `RCOMBS SCROLL` - my self assigned name for the BASIC program which will be immediately identifiable if you follow along.

## User's Manual

As part of my Commodore Plus/4 YouTube series, I work through each chapter of the Plus/4 manual. I've taken the time to scan each chapter so you can read and follow along. Use the link below to view chapter 3:

[Chapter 4 - Getting Started](https://www.stevencombs.com/plus4/users-manual/p4um-chapter-4.pdf)

Below are the links for previous chapters covered:

1. [Front Matter](/plus4/users-manual/p4um-title-introduction.pdf)
2. [Chapter 1 - Unpacking and Setting Up](/plus4/users-manual/p4um-chapter-1.pdf)
3. [Chapter 2 - Using the Keyboard and the Screen](https://www.stevencombs.com/plus4/users-manual/p4um-chapter-2.pdf)
4. [Chapter 3 - Using Software](https://www.stevencombs.com/plus4/users-manual/p4um-chapter-3.pdf)
5. [Chapter 4 - Getting Started](https://www.stevencombs.com/plus4/users-manual/p4um-chapter-4.pdf)
6. [Chapter 5 - Numbers and Calculations](https://www.stevencombs.com/plus4/users-manual/p4um-chapter-5.pdf)

## YouTube Video: _retroCombs: Commodore Plus/4, Chapter 6 - Beginning BASIC Programming_

In the video below, I work through Chapter 5 of the user's manual.

<div style="position:relative;padding-top:56.25%;"><p><iframe src="link" frameborder="0" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true" style="position:absolute;top:0;left:0;width:100%;height:100%;"></iframe></p></div>

## Video Errata

None as of 2020-11-15.

## Links Mentioned in this Episode:

Below are the links I mention in the video.

1. [Commodore Plus/4 User's Manual Series](https://www.stevencombs.com/plus4)
2. [TEDuino - A TED Series inspired Datasette powered by Tapuino](/teduino-1)

## Key to Keys

Because the Commodore Plus/4 keyboard is so different from modern keyboards, I devised a modern key nomenclature to identify keystroke combinations as shown in the table below:

| Key    | Description   | Key  | Description |
|:-------|:--------------|:-----|:------------|
| `⇪`    | Caps Lock     | `F1` | Function 1  |
| `[C=]` | Commodore     | `F2` | Function 2  |
| `⌃`    | Control       | `F3` | Function 3  |
| `⎋`    | Escape        | `F4` | Function 4  |
| `⌂`    | Clear/Home    | `F5` | Function 5  |
| `⌫`    | Insert Delete | `F6` | Function 6  |
| `⏎`    | Return        | `F7` | Function 7  |
| `[RS]` | Run/Stop      | `F8` | Help        |
| `⇧`    | Shift         | `␣`  | Space       |
| `↑`    | Cursor Up     | `↓`  | Cursor Down |
| `→`    | Cursor Right  | `←`  | Cursor Left |

## Introduction

1. Thanks to all my viewers for the feedback.
2. .d81 disk image is now available [here](https://www.stevencombs.com/plus4#companion-disk-image).
4. Don't forget to [subscribe to the channel](https://www.youtube.com/stevencombs)!

Finally! An introduction to BASIC programming even though we have been programming in basic since almost day 1!

## Programming Modes

The two programming modes are DIRECT (IMMEDIATE) and INDIRECT (PROGRAM).

1. DIRECT mode executes statements immediately, as we saw in Chapter 6.
2. INDIRECT mode organizes and `RUN`s a series of BASIC program statements in the order of their numbered list.

### DIRECT (IMMEDIATE) Mode

Type syntax correct commands on an empty line followed the `⏎`. Examples of DIRECT mode commands include:

```basic
LIST
SAVE
LOAD
VERIFY
RUN
? 2+2
```

### INDIRECT (PROGRAM) Mode

Use this mode to create BASIC programs. Preface each program statement with a line number, followed by a command or more seperated by a `:`, and then stored in memory by hitting the `⏎`. Execute a program with the `RUN` command.

> **TIP:** Typically, BASIC lines begin with 10 and then work their way up in increments of 10. That is, the next line would be `20`. This allows the programmer to easily interest additional code between lines `10` and `20`.

> **BONUS:** Commodore BASIC 3.5 includes the `RENUMBER` command. Syntax is `RENUMBER`[_new starting line_ #[,_increment_[,_old starting line #_]]]. An example; `RENUMBER 20,20,1` renumbers program line 1 to 20 with each subsequent line numbered increments of 20.

## Input/Output Statements

Input/Output (I/O) statements allow programmers to communicate with an individual running a program or other devices connected to the Plus/4 such as a Datasette, Disk Drive, or Printer. We've used the most common I/O command, `PRINT` (or `?`) in previous chapters to display text on the screen.

### Output Statements

Let's take a look at some output statement examples. Two output statement examples are below that answer the questions, "does my checking account have money?" and "can I have a purple lizard in my control room?"

```basic
100 ? "YOU ARE BROKE!"
150 ? "YOU CAN'T BRING YOUR FRIEND INTO THE CONTROL ROOM!"
```

We already covered numbers and calculations with the PRINT command in Chapter 5; however, here are a few more examples:

```basic
100 ? 58*15,23,45+1000-45*(4-3)
```

This BASIC program will print:

`870       23        1000`

```basic
0R=10* 2: N= R-5
20 ? "R IS";R;"AND N IS";N
30 ? "BUT R TIMES 2 IS";R*2
40 ? "AND N MINUS 2 IS";N-2
```

Normally, each `PRINT` statement will automatically move the cursor to the next line. The `;` will overide and print the next line next to the previous line as shown in the example below:

```basic
200 PRINT"THESE TWO SENTENCE PARTS WILL BE";
210 PRINT "PRINTED ON THE SAME LINE"
```

### Input Statements

The next examples demonstrate how to collect user and user defined program data. The first example requests user input and then reprints that input as part of an output, or `PRINT`, statement.

```basic
10 PRINT "WHAT IS YOUR NAME";
20 INPUT A$
30 PRINT "I AM PLEASED TO MEET YOU";A$;"."
40 INPUT "HOW OLD ARE YOU";AG
50 PRINT AG;" IS A BIT OLDER THAN I AM."
```

> REMEMBER: Use the `RUN` command to execute the program.

You may wonder why there isn't a `?` at the end of line 10. The `INPUT` command automatically adds this symbol at the end of each `INPUT` statement.

Line 40 includes a variable after the line to collect the numeric data whereas lines 10 and line 20 seperated this collection. You can combine lines 10 and 20 as follows: `10 INPUT "WHAT IS YOUR NAME?";A$`

The `GETKEY` input statement only accepts a single key press and requires a string variable such as `A$`. The command does not require `⏎`. Below is an example:

```basic
1000 ? "PLEASE CHOOSE A,B,C,D,E, OR F."
1010 GETKEY A$
1020 ? A$
```

The final INPUT statement(s) is `READ`/`DATA`. The `READ` statement is similar to the INPUT command; however, a program receives information from Plus/4 code rather than a user. Information is stored in Plus/4 code using `DATA` statements. Below is an example the reads the names of the [Marx Brothers](https://en.wikipedia.org/wiki/Marx_Brothers):

```basic
10 READ A$, B$, C$, D$, E$
20 ? A$ : ? B$ : ? C$: ? D$ : ? E$
30 DATA GROUCHO, HARPO, CHICO, ZEPPO, GUMMO
```

> **TIP:** This example has the READ command collect charachter data using string variables `X$`. If you want to collect numeric data, use a numeric data variable such as `X`.

The output for this code is:

```
GROUCHO
HARPO
CHICO
ZEPPO
GUMMO
```

Is there any better example of the use of the `READ` and `DATA` commands?

> **NOTE:** The number of `READ` variables must equal the number `DATA` variables or an `?OUT OF DATA ERROR IN XX` error will occur.


## Control Statements and Loops

We know how to execute a line of code, one after another, but we can also jump around within code lines using control statements. Using loops, we run code over and over until we hit the RUN/STOP key or we specify, in the code for a group of code lines, to stop after a specific number of times.

In previous chapters, I would demonstrate a program that continually displays a line of text until the RUN/STOP key is hit. Remember that code? Here is is again:

```basic
10 ? "RETROCOMBS ";
20 GOTO 10
```

We've been using the `GOTO` control statement since Chapter 1! It is one of the first basic program commands anyone learns as they create their own first "Hello World!" program.



## Conditional or Decisions Making Statements



```basic
10 INPUT "WHAT'S THE TENTH LETTER OF THE ALPHABET";A$
20 IF A$="J" THEN PRINT "RIGHT" : GOTO 100
30 INPUT "IS THIS AN A";X$
40 IF X$="YES" "LOOP" THEN 60
50 ? "WRONG, TRY AGAN" : GOTO 30
60 ? "TYPE A B"
70 GETKEY A$ : IF A$= "B" THEN ? "RIGHT"
100 ? "THAT'S ENOUGH OF THIS, ANYWAY"
```

## Subroutines



```basic
5 T=0 : FOR J=1TO99
10 ? "GIVE ME A NUMBER FROM 1 TO 10
20 INPUT N
30 IF N<1 THEN GOSUB 100 : GOTO 20
40 IF N>10 THEN GosUB 100 : GOTO 20
50 T=T+N
60 NEXT J
70 ? "THE TOTAL IS";T
80 END
100 ? "THAT NUMBER IS OUT OF RANGE"
105 ? "PLEASE TYPE A NUMBER BETWEEN 1 AND 10"
110 RETURN
```

## REM Statements

```basic
1560 E=R/T*9 : REM THIS FIGURES OUT A PITCHER'S ERA
100 INPUT A,B : REM A IS HEIGHT IN INCHES AND B IS WEIGHT
```

## Final Thoughts

This chapter provides the cursory basics of number and calculations. I recommend you check out more functions on page 151 in the user's manual. Of particular interest is that most of the examples I provide can be accomplished using the [Python](https://www.python.org/) interpreter on a modern computer. On that note, the concepts used here will help anyone who wants to learn program BASICs (pun intended).

## Join the Fun

Help make this series better! Post feedback, questions, and ideas. Let me know if you are following along. Let's make this a community project. For now, Leave your comments and thoughts below or in the comments [under the YouTube video](https://youtu.be/B9_hKwjlqAA).

Thanks for watching and if you are so inclined, please let other Commodore fans know about the series by sharing these videos using #retroCombs.

🕹️ retroCombs OUT!
