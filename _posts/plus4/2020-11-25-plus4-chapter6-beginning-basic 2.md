---
layout: post
title: 'Commodore Plus/4 User’s Manual Chapter 6 - Beginning BASIC Programming'
date: '2020-11-25'
author: 'Steven B. Combs, Ph.D.'
permalink: plus4-7
email: 'retrocombs@icloud.com'
comments: yes
category: plus4
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

In this Commodore Plus/4 retroCombs episode and companion blog post, I cover Chapter 6, *Beginning BASIC Programming*, of the Commodore Plus/4 user's manual. In this chapter, we begin where everyone should with their Commodore computer; learning the BASIC programming language. In previous chapters we have dabbled with BASIC; however, in this chapter, we dive in and learn the "basic" concepts you need to begin your BASIC programming journey.

> **MEMBERSHIP:** I now offer retroCombs memberships from $1 (PET level membership) to $20 (MEGA65 level membership) that include levels in between for all budgets (VIC-20, C64, Plus/4, and C128). If you'd like to support my content and get access to my Discord server along with other cool freebies, check out each level at <https://www.buymeacoffee.com/retroCombs>.

**Table of Contents**

<!-- TOC -->

- [Series Information](#series-information)
- [Companion Disk Image](#companion-disk-image)
- [User's Manual](#users-manual)
- [YouTube Video: _retroCombs: Commodore Plus/4, Chapter 6 - Beginning BASIC Programming_](#youtube-video-_retrocombs-commodore-plus4-chapter-6---beginning-basic-programming_)
- [Video Errata](#video-errata)
- [Links Mentioned in this Episode:](#links-mentioned-in-this-episode)
- [Key to Keys](#key-to-keys)
- [Introduction](#introduction)
- [Programming Modes](#programming-modes)
  - [DIRECT (IMMEDIATE) Mode](#direct-immediate-mode)
  - [INDIRECT (PROGRAM) Mode](#indirect-program-mode)
- [Input/Output Statements](#inputoutput-statements)
  - [Output Statements](#output-statements)
  - [Input Statements](#input-statements)
- [Control Statements and Loops](#control-statements-and-loops)
- [Conditional or Decisions Making Statements](#conditional-or-decisions-making-statements)
- [Subroutines](#subroutines)
- [REM Statements](#rem-statements)
- [Final Thoughts](#final-thoughts)
- [Join the Fun](#join-the-fun)

<!-- /TOC -->


This is not an all-inclusive chapter and you will not become a master programmer after learning these concepts; however, you will have the knowledge you need to create simple programs. This is what made all Commodore computers special; the creation of your own programs. After you work through chapter 6, I recommend you review the Plus/4 Encyclopedia located on page 101 of the user's manual.

> **NOTE:** Right before posting this video, my YouTube channel reached 1000 (or 1K) subscribers! Thanks to everyone who follows along and please, let others know about the channel so I can continue to bring you more tech and retro-computing video and blog posts.

## Series Information

This episode is a small part of my larger Commodore Plus/4 series. You can read the entire series and view additional resources at:

<https://www.stevencombs.com/plus4>

## Companion Disk Image

As I progress through the user's manual, I enter and execute sample programs. The link below is to a `.d81` image that contains every program from each episode. **Like the series, the image is not complete.**

[retroCombs User's Manual Disk Image](commodore-disk-images/plus4-users-manual.d81) - **UPDATED AS OF:** 2020-11-24

I use the following file name convention to make it easy to locate specific programs:

<img src="/images/design/floppy-disk-small.png" align="right">Sample Program Name: `02 RCOMBS SCROLL.PRG`

* `02` - The chapter number
* `RCOMBS SCROLL` - my self assigned name for the BASIC program which will be immediately identifiable if you follow along.

## User's Manual

As part of my Commodore Plus/4 YouTube series, I work through each chapter of the Plus/4 manual. I've taken the time to scan each chapter so you can read and follow along. Use the link below to view chapter 6:

[Chapter 6 - Beginning BASIC Programming](https://www.stevencombs.com/plus4/users-manual/p4um-chapter-6.pdf)

Below are the links for previous chapters covered:

1. [Front Matter](/plus4/users-manual/p4um-title-introduction.pdf)
2. [Chapter 1 - Unpacking and Setting Up](/plus4/users-manual/p4um-chapter-1.pdf)
3. [Chapter 2 - Using the Keyboard and the Screen](https://www.stevencombs.com/plus4/users-manual/p4um-chapter-2.pdf)
4. [Chapter 3 - Using Software](https://www.stevencombs.com/plus4/users-manual/p4um-chapter-3.pdf)
5. [Chapter 4 - Getting Started](https://www.stevencombs.com/plus4/users-manual/p4um-chapter-4.pdf)
6. [Chapter 5 - Numbers and Calculations](https://www.stevencombs.com/plus4/users-manual/p4um-chapter-5.pdf)

## YouTube Video: _retroCombs: Commodore Plus/4, Chapter 6 - Beginning BASIC Programming_

In the video below, I work through Chapter 6 of the user's manual.

<div style="position:relative;padding-top:56.25%;"><p><iframe src="https://www.youtube.com/embed/NtSp4xOcz-M" frameborder="0" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true" style="position:absolute;top:0;left:0;width:100%;height:100%;"></iframe></p></div>

## Video Errata

None as of 2020-11-25.

## Links Mentioned in this Episode:

Below are the links I mention in the video. All Amazon links are affialiate links. Thanks for supporting the blog and the YouTube channel!

1. [Commodore Plus/4 User's Manual Series](https://www.stevencombs.com/plus4)
2. [TEDuino - A TED Series inspired Datasette powered by Tapuino](/teduino-1)
3. [Pi1541 Assembly and First Use](https://www.stevencombs.com/pi1541-1)
4. [ Project](https://mega65.org/)
4. [ Dev Kit](https://shop.trenz-electronic.de/en/Products/MEGA65/)
5. [TheVIC20 - U.S. Listing](https://amzn.to/3l85VRh)
6. [THEVIC20 - U.K. Listing](https://amzn.to/3l7hZlB)

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
| `[R/S]` | Run/Stop      | `F8` | Help        |
| `⇧`    | Shift         | `␣`  | Space       |
| `↑`    | Cursor Up     | `↓`  | Cursor Down |
| `→`    | Cursor Right  | `←`  | Cursor Left |

## Introduction

1. Thank you to all my viewers and especially for those who provide feedback.
2. .d81 disk image is now available [here](https://www.stevencombs.com/plus4#companion-disk-image).
4. Don't forget to [subscribe to the channel](https://www.youtube.com/stevencombs)!
5. I have some great content coming up for retro-computing fans.

Finally! An introduction to BASIC programming even though we have been programming in basic since almost day 1!

## Programming Modes

The two programming modes are DIRECT (IMMEDIATE) and INDIRECT (PROGRAM).

1. DIRECT mode executes statements immediately, as we saw in Chapter 5.
2. INDIRECT mode organizes and `RUN`s a series of BASIC program statements one-by-one based on their line numbers.

### DIRECT (IMMEDIATE) Mode

Type syntax correct commands on an empty line followed the `⏎`. Examples of DIRECT mode commands include:

```realbasic
LIST
DSAVE
DLOAD
VERIFY
RUN
? 2+2
```

### INDIRECT (PROGRAM) Mode

Use this mode to create BASIC programs. Preface each program statement with a line number, followed by a single command or multiple commands separated by a `:`. Store the program in memory by hitting the `⏎`. Execute a program with the `RUN` command.

> **TIP:** Typically, programmers number BASIC lines beginning with 10 and then work their way up in increments of 10. That is, the next line would be `20`. This allows the programmer to easily insert additional code between lines `10` and `20`.

> **BONUS:** Commodore BASIC 3.5 includes a `RENUMBER` command. The syntax is `RENUMBER`[_new starting line_ #[,_increment_[,_old starting line #_]]]. An example; `RENUMBER 20,20,1` renumbers program line 1 to 20 with each subsequent line numbered increments of 20.

## Input/Output Statements

Input/Output (I/O) statements allow programmers to communicate with an individual running a program or other devices connected to the Plus/4 such as a Datasette, joystick, disk drive, or printer. We've used a common I/O command, `PRINT` (or `?`) in previous chapters to display text on the screen.

### Output Statements

Let's take a look at some output statement examples. Two output statement examples are below that answer the questions, "Does my checking account have money?" and "Can I have a purple lizard in my control room?"

```realbasic
100 ? "YOU ARE BROKE!"
150 ? "YOU CAN'T BRING YOUR FRIEND INTO THE CONTROL ROOM!"
```

We already covered numbers and calculations with the `PRINT` command in Chapter 5; however, here are a few more examples:

```realbasic
100 ? 58*15,23,45+1000-45*(4-3)
```

This BASIC program will print:

`870       23        1000`

```realbasic
10 R=10*2 : N=R-5
20 ? "R IS";R;"AND N IS";N
30 ? "BUT R TIMES 2 IS";R*2
40 ? "AND N MINUS 2 IS";N-2
```
**💾 On Disk:** `06 R&N`

Normally, each `PRINT` statement will automatically move the cursor to the next line. The `;` will override and print the line next to the previous line as shown in the example below:

```realbasic
200 ? "THESE TWO SENTENCE PARTS WILL BE ";
210 ? "PRINTED ONE AFTER THE OTHER."
```
**💾 On Disk:** `06 SAME LINE`

### Input Statements

The next examples demonstrate how to collect user and user defined program data. The first example requests user input and then reprints that input as part of an output, or `PRINT`, statement.

```realbasic
10 ? "WHAT IS YOUR NAME";
20 INPUT A$
30 ? "I AM PLEASED TO MEET YOU";A$;"."
40 INPUT "HOW OLD ARE YOU";AG
50 ? AG;" IS A BIT OLDER THAN I AM."
```
**💾 On Disk:** `06 YOUR NAME`

> REMEMBER: Use the `RUN` command to execute the program.

You may wonder why there isn't a `?` at the end of line 10. The `INPUT` command automatically adds this symbol at the end of each `INPUT` statement.

Line 40 includes a variable after the line to collect the numeric data whereas lines 10 and line 20 separated these functions. You can combine lines 10 and 20 as follows: `10 INPUT "WHAT IS YOUR NAME?";A$`

The `GETKEY` input statement accepts a single key press and requires a string variable such as `A$`. The command does not require `⏎`. Below is an example:

```realbasic
1000 ? "PLEASE CHOOSE A,B,C,D,E, OR F."
1010 GETKEY A$
1020 ? A$
```
**💾 On Disk:** `06 A THRU F`

> **NOTE:** This code does not include *exception handling*. You can type in any letter and and the code will print an incorrect result. This is not the intent of the program. We will look at *exception handling* later.

The final INPUT statement(s) is `READ`/`DATA`. The `READ` statement is similar to the INPUT command; however, a program receives information from code rather than a user. Information is stored in code using `DATA` statements. Below is an example the reads the names of the [Marx Brothers](https://en.wikipedia.org/wiki/Marx_Brothers):

```realbasic
10 READ A$, B$, C$, D$, E$
20 ? A$ : ? B$ : ? C$: ? D$ : ? E$
30 DATA GROUCHO, HARPO, CHICO, ZEPPO, GUMMO
```
**💾 On Disk:** `06 MARX BROTHERS`

> **TIP:** This example has the READ command collect character data using string variables in the format `X$`. If you want to collect numeric data, use a numeric data variable such as `X`.

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

We can execute a line of code, one after another, but we can also jump around within code lines using control statements. Using loops, we run code over and over until we hit the [R/S] key or we specify, in the code for a group of code lines, to stop after a specific number of times.

In previous chapters, I would demonstrate a program that continually displays a line of text until the [R/S] key is hit. Remember that code? Here it is again:

```realbasic
10 ? "RETROCOMBS ";
20 GOTO 10
```

This type of program is know as an infinite loop because it "loops indefinitely" until you tap the [R/S] key.

The `GOTO` control statement was introduce as early as Chapter 1. It is one of the first basic program commands most learn when they create their first "Hello World!" program as shown in the code above.

There is another way to create an infinite loop and that is with a `DO`/`LOOP` statement. This method of creating an infinite loop, that you can break out of within the program, is more elegant than our use of the `GOTO` command as shown in the example below:

```realbasic
10 DO
20 ? "GOING UP ";
30 LOOP
```
**💾 On Disk:** `06 GOING UP`

The statements between the `DO` and `LOOP` continue to execute without the need to reference a specific line number. Let's rewrite my retroCombs screen fill program using a `DO`/`LOOP` statement:

```realbasic
10 DO : ? "RETROCOMBS";
30 LOOP
```

> **TIP:** As a reminder, use the `:` character to place more than one program statement in a single line of code. This will reduce memory usage and in some cases, make your code more legible.

We use `FOR`/`NEXT` statements to create finite loops; or loops that repeat a certain number of times. A variable in a `FOR`/`NEXT` loop counts the number of loops. Below is an example:

```realbasic
10 ? "COUNTUP..."
20 FOR J= 1 TO 10
30 ? "WE HAVE";J
40 NEXT J
50 ? "WE COUNTED UP TO";J
```
**💾 On Disk:** `06 COUNT UP`

The program above "steps" through the loop in increments of one; however, you can modify the `STEP` value. To increment by a value of 5, the `FOR` line would like the one shown below:

```realbasic
20 FOR J = 10 TO 30 STEP 5
```

If we `PRINT` J, the results would be the following:

`10, 15, 20, 25, 30`

A negative STEP value allows the counter to count backward. To increment by a value of -5, the `FOR` line will look like the one below:

```realbasic
20 FOR J = 30 TO 10 STEP -5
```

If we `PRINT` J, the results would be the following:

`30, 25, 20, 15, 10`

Using the negative step value, we can program a NASA rocket program countdown timer as shown below.

```realbasic
10 ? "COUNTDOWN..."
20 FOR J = 10 TO 1 STEP -1
30 ? "WE ARE AT";J
35 FOR T = 1 TO 500 : NEXT T
40 NEXT J
50 ? "WE HAVE LIFT-OFF!"
```
**💾 On Disk:** `06 LIFT OFF`

> **NOTE:** I modified the countdown program in the user's manual. The program presented did not countdown with correct timing. My modification, line 35, adds another `FOR`/`NEXT` loop to pause the program for about a second between each `PRINT` statement. This provides a more accurate (and fun) NASA countdown! It also demonstrates how you can sneak in code lines to add features.

> **TIP:** Use the `RENUMBER` command (`RENUMBER,,10`) if that single out of balance 35 line number doesn't work for you and you like the lines numbered from 10 to 70 in increments of 10 as shown below:

```realbasic
10 ? "COUNTDOWN..."
20 FOR J = 10 TO 1 STEP -1
30 ? "WE ARE AT";J
40 FOR T = 1 TO 500 : NEXT T
50 NEXT J
60 ? "WE HAVE LIFT-OFF!"
```

## Conditional or Decisions Making Statements

Up to this point, our Plus/4 has been a basic calculator; albeit a pretty smart one; however, it's time for the Plus/4 to grow up and make its own decisions using conditional, or decision making, statements such as `IF`/`THEN`. In other words, `IF` this happens, `THEN` do this.

We often use `IF`/`THEN` statements to act on user keyboard, or joystick, input as shown in the example below. This program asks the user to enter the tenth letter of the alphabet using the keyboard, evaluates whether the user's input is correct, and then chides or rewards the user. If the user is wrong, the program will continue until the user enters the correct answer (which is `J`, by the way.)

> **NOTE:** The program in the book was a disaster. It appears as if there were two program smashed into a single listing. I've cleaned up the program so it makes sense.

```realbasic
10 INPUT "WHAT'S THE 10TH LETTER OF THE ALPHABET?";A$
20 IF A$ = "J" THEN ? "CORRECT!" : GOTO 50
30 INPUT "ANSWER IS INCORRECT. TRY AGAIN? (Y OR N)";X$
40 IF X$ = "Y" THEN 10 : ELSE 60
50 ? "YOU ANSWERED CORRECTLY, SO WHY CONTINUE?" : END
60 ? "I STUMPED YOU, HUH?"
```
**💾 On Disk:** `06 10TH LETTER`

In my corrected example, I also include a very important adjunct to the `IF`/`THEN` statement; `ELSE`. For instance, `IF` a variable, `B`, is greater than (`>`) `5` then `GOTO` line `10`. `ELSE` (meaning if it isn't) `END` the program. The basic code for this statement is:

`10 IF A>5 THEN 10 : ELSE END`

Note that the THEN statement does not need to include the `GOTO` statement; nor does the `ELSE` statement. These combinations are used so frequently in BASIC, the interpreter was designed to understand this relationship. This understanding also saves memory.

## Subroutines

We create a subroutine to execute the same code over and over in a larger program. Subroutines allow your program to "jump", or `GOSUB`, to a code's location and then `RETURN` to the original code, where the `GOSUB` occurred, once the subroutine is complete. This may sound the like GOTO command; however, with GOTO, you have to know specifically which line number to return. The `GOSUB`/`RETURN` combination does the heavy lifting for you and will reduce errors if you renumber lines of code.

The code below prompts the user for a number between 1 and 10. If the number entered is within that range, the program will prompt for the same range again. If the number is not within that range (`N<1` or `N>10`), the GOSUB statement will send the code execution to line 100 that prints a statement saying the number is out of range and give it another shot. When two numbers within range are entered, the program will add their values and `END` the program.

```realbasic
10 T=0 : FOR J = 1 TO 2
20 ? "TYPE A NUMBER FROM 1 TO 10
30 INPUT N
40 IF N<1 THEN GOSUB 100 : GOTO 20
50 IF N>10 THEN GOSUB 100 : GOTO 20
60 T=T+N
70 NEXT J
80 ? "THE TOTAL IS";T
90 END
100 ? "THAT NUMBER IS OUT OF RANGE"
110 ? "PLEASE TYPE A NUMBER BETWEEN 1 AND 10"
120 RETURN
```
**💾 On Disk:** `06 ONE TO TEN`

> **NOTE:** Earlier, I mentioned the concept of *exception handling* Lines 40 and 50 includes this concept. The program will not stop functioning if the users inputs any number outside our specified range of 1 through 10.

> **NOTE:** The user's manual original code required the user to type in 99 numbers! We have far too many important things to learn about our Commodore Plus/4 than how to type in 99 unique numbers between 1 and 10.

## REM Statements

Use a `REM` statement to add comments to your code. These can be their own unique lines or added at the end of lines. `REM` statements are often used to show credit or describe a line's operation. Below are a few examples:

```realbasic
10 REM TITLE: REM STATEMENTS
20 REM CODER: RETROCOMBS
30 E=R/T*9 : REM THIS FIGURES OUT A PITCHER'S ERA
40 INPUT A,B : REM A IS HEIGHT AND B IS WEIGHT
```

`REM` statements help code readability, portability, and transferability; however, `REM` statements use memory, so use them sparingly in long programs that are pushing memory limits. After all, we only have 60671 bytes free on our Commodore Plus/4!

## Final Thoughts

As the user's manual states in the summary, this is not an exhaustive study of BASIC nor a complete tutorial. We only covered a fraction of the commands available. Read the BASIC 3.5 Encyclopedia beginning on page 101 to begin your real journey. BASIC is a capable, and fun language, that can bring you hours of fun and help you solve real world problems.

In the next chapter, we will use the basic commands we have already learned and combine with them with unique Commodore Plus/4 BASIC 3.5 graphics commands to create pretty pictures on our screen. These are commands that were not available on the base Commodore VIC-20 or C64. You won't want to miss that fun, so make sure you <font color="red">SUBSCRIBE</font> to my [YouTube channel](https://www.youtube.com/stevencombs).

## Join the Fun

Help make this series better! Post feedback, questions, and ideas. Let me know if you are following along. Let's make this a community project. For now, Leave your comments and thoughts below or in the comments [under the YouTube video](https://youtu.be/B9_hKwjlqAA).

Thanks for watching and if you are so inclined, please let other Commodore fans know about the series by sharing these videos using #retroCombs.

🕹️ retroCombs, OUT!
