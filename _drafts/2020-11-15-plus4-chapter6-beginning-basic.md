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
| `[R/S]` | Run/Stop      | `F8` | Help        |
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
10 R=10*2 : N=R-5
20 ? "R IS";R;"AND N IS";N
30 ? "BUT R TIMES 2 IS";R*2
40 ? "AND N MINUS 2 IS";N-2
```
**💾 On Disk:** `06 R&N`

Normally, each `PRINT` statement will automatically move the cursor to the next line. The `;` will overide and print the next line next to the previous line as shown in the example below:

```basic
200 ? "THESE TWO SENTENCE PARTS WILL BE ";
210 ? "PRINTED ONE AFTER THE OTHER."
```
**💾 On Disk:** `06 SAME LINE`

### Input Statements

The next examples demonstrate how to collect user and user defined program data. The first example requests user input and then reprints that input as part of an output, or `PRINT`, statement.

```basic
10 PRINT "WHAT IS YOUR NAME";
20 INPUT A$
30 PRINT "I AM PLEASED TO MEET YOU";A$;"."
40 INPUT "HOW OLD ARE YOU";AG
50 PRINT AG;" IS A BIT OLDER THAN I AM."
```
**💾 On Disk:** `06 YOUR NAME`

> REMEMBER: Use the `RUN` command to execute the program.

You may wonder why there isn't a `?` at the end of line 10. The `INPUT` command automatically adds this symbol at the end of each `INPUT` statement.

Line 40 includes a variable after the line to collect the numeric data whereas lines 10 and line 20 seperated this collection. You can combine lines 10 and 20 as follows: `10 INPUT "WHAT IS YOUR NAME?";A$`

The `GETKEY` input statement only accepts a single key press and requires a string variable such as `A$`. The command does not require `⏎`. Below is an example:

```basic
1000 ? "PLEASE CHOOSE A,B,C,D,E, OR F."
1010 GETKEY A$
1020 ? A$
```
**💾 On Disk:** `06 A THRU F`

> **NOTE:** This code does not include error capture. You can type in any letter and have the result printed. More on this later.

The final INPUT statement(s) is `READ`/`DATA`. The `READ` statement is similar to the INPUT command; however, a program receives information from Plus/4 code rather than a user. Information is stored in Plus/4 code using `DATA` statements. Below is an example the reads the names of the [Marx Brothers](https://en.wikipedia.org/wiki/Marx_Brothers):

```basic
10 READ A$, B$, C$, D$, E$
20 ? A$ : ? B$ : ? C$: ? D$ : ? E$
30 DATA GROUCHO, HARPO, CHICO, ZEPPO, GUMMO
```
**💾 On Disk:** `06 MARX BROTHERS`

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

We know how to execute a line of code, one after another, but we can also jump around within code lines using control statements. Using loops, we run code over and over until we hit the [R/S] key or we specify, in the code for a group of code lines, to stop after a specific number of times.

In previous chapters, I would demonstrate a program that continually displays a line of text until the [R/S] key is hit. Remember that code? Here is is again:

```basic
10 ? "RETROCOMBS ";
20 GOTO 10
```

This type of program is know as an infinite loop because it "loops definitely" until you tap the [R/S] key.

The `GOTO` control statement was introduce as early as Chapter 1. It is one of the first basic program commands most learn when they create their first "Hello World!" program as shown in the code above.

There is another way to create an infinite loop and that is with a `DO`/`LOOP` statement. This method of creating an infinite loop, that you can break out of within the program, is more elegant than our use of the `GOTO` command as shown in the example below:

```basic
10 DO
20 ? "GOING UP ";
30 LOOP
```
**💾 On Disk:** `06 GOING UP`

The statements betweeen the `DO` and `LOOP` continue to execute withou the need to reference a specific line number. Let's rewrite my retroCombs screen fill program using a `DO`/`LOOP` statement:

```basic
10 DO : ? "RETROCOMBS";
30 LOOP
```

> **TIP:** As a reminder, use the `:` character to place more than one program statement in a single line of code. This will reduce memory usage and in some cases, make your code more legible.

We use `FOR`/`NEXT` statements to create finite loops; or loops that repeat a certain number of times. A variable in a `FOR`/`NEXT` loop counts the number of loops. Below is an example:

```basic
10 ? "COUNTUP..."
20 FOR J= 1 TO 10
30 ? "WE HAVE";J
40 NEXT J
50 ? "WE COUNTED UP TO";J
```
**💾 On Disk:** `06 COUNT UP`

The program above "steps" through the loop in increments of one; however, you can modify the `STEP` value. To increment by a value of 5, the `FOR` line would like like the one shown below:

```basic
20 FOR J= 10 TO 30 STEP 5
```

If we `PRINT` J, the results would be the following:

`10, 15, 20, 25, 30`

A negative STEP value will allow the counter to count backward. To increment by a value of -5, the `FOR` line would like like the one shown below:

```basic
20 FOR J= 30 TO 10 STEP -5
```

If we `PRINT` J, the results would be the following:

`30, 25, 20, 15, 10`

Using the negative step value, we can program a NASA rocket program countdown timer as shown below.

```basic
10 ? "COUNTDOWN..."
20 FOR J= 10 TO 1 STEP -1
30 ? "WE ARE AT";J
35 FOR T= 1 TO 500 : NEXT T
40 NEXT J
50 ? "WE HAVE LIFT-OFF!"
```
**💾 On Disk:** `06 LIFT OFF`

> **NOTE:** I modified the countdown program in the user's manual. The program presented does not countdown with correct timing. My modification, line 35, adds another `FOR`/`NEXT` loop to pause the program for about a second between each `PRINT` statement. This provides a more accurate (and fun) NASA countdown! It also demonstrates how you can sneak in code lines to add features.

> **TIP:** Use the `RENUMBER` command (`RENUMBER,,10`) if that single out of balance 35 line number doesn't work for you and you like the lines numbered from 10 to 70 in increments of 10 as shown below:

```basic
10 ? "COUNTDOWN..."
20 FOR J= 10 TO 1 STEP -1
30 ? "WE ARE AT";J
40 FOR T= 1 TO 500 : NEXT T
50 NEXT J
60 ? "WE HAVE LIFT-OFF!"
```

## Conditional or Decisions Making Statements

Up to the point, our Plus/4 has served as a calculator; albeit a pretty smart one; however, it's time for the Plus/4 to grow up and make its own decisions using conditional, or decision making, statements such as `IF`/`THEN`. In other words, `IF` this happens, `THEN` do this.

We often use `IF`/`THEN` statements to act on user keyboard, or joystick, input as shown in the example below. This program asks the user to enter the tenth letter of the alphabet using the keyboard, evaluates whether the user's input is correct, and then chides or rewards the user. If the user is wrong, the program will continue until the user enters the correct answer (which is `J`, by the way.)

> **NOTE:** The program in the book was a disaster. It appears as if there were two program smashed into a single listing. I've cleaned up the program so it makes sense.

```basic
10 input "what's the 10th letter of the alphabet?";a$
20 if a$="j" then ? "correct!" : goto 50
30 input "answer is incorrect. try again? (y or n)";x$
40 if x$="y" then 10 : else 60
50 ? "you answered correctly, so why continue?" : end
60 ? "i stumped you, huh?"
```
**💾 On Disk:** `06 10TH LETTER`

In my corrected example, I also include a very imporant adjunct to the `IF`/`THEN` statement; `ELSE`. For instance, `IF` a variable, `B`, is greater than (`>`) `5` then `GOTO` line `10`. `ELSE` (meaning if it isn't) `END` the program. The basic code for this statement is:

`10 IF A>5 THEN 10 : ELSE END`

Note that the THEN statement does not need to include the `GOTO` statement; nor does the `ELSE` statement. These combinations are used frequently in BASIC that the intrepreter was designed to figure it out. This also saves memory.

## Subroutines

Create a subroutine to execute the same code over and over in a larger program. Subroutines allow your program to "jump", or `GOSUB`, to that code and then `RETURN` to the original code, where the `GOSUB` ocurred, once the subroutine is complete. This may sound the like GOTO command; however, with GOTO, you have to know specifically which line number to return. The `GOSUB`/`RETURN` combination does this heavy lifting for you and will reduce errors if you renumber lines of code.

The code below prompts the user for a number between 1 and 10. If the number entered is within that range, the program will prompt for the same range again. If the number is not within that range (`N<1` or `N>10`), the GOSUB statement will send the code execution to line 100 that prints a statement saying the number is out of range and give it another shot. When two numbers within range are entered, the program will add their values and `END` the program.

```basic
10 T=0 : FOR J=1TO2
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

> **NOTE:** The user's manuals original code required the user to type in 99 numbers! We have far too many important things to learn about our Commodore Plus/4 than how to type in 99 unique numbers between 1 and 10.

## REM Statements

Use the `REM` statement to add comments to your code. These can be their own unique lines or added at the end of lines. REM statements are often used to show credit or to describe a line's operation. Below are a few examples:

```basic
10 REM TITLE: REM STATEMENTS
20 REM CODER: RETROCOMBS
30 E=R/T*9 : REM THIS FIGURES OUT A PITCHER'S ERA
40 INPUT A,B : REM A IS HEIGHT AND B IS WEIGHT
```

`REM` statements help code readability, portability, and transferability; however, `REM` statements take memory from running code, so use them sparingly in long programs that are pushing memory limits. After all, we only have 60671 bytes free on our Commodore Plus/4!

## Final Thoughts

As the user's manual states in the summary, this is not an exhaustive study of BASIC nor a complete tutorial. We only covered a fraction of the commands available. Read the BASIC 3.5 Encyclopedia beginning on page 102 to begin your real journey. BASIC is a capable, and fun language, that can bring you hours of fun and even solve a few problems.

In the next chapter, we will use the basic commands we have already learned, combine with them with unique Commodore Plus/4 graphics commands to create some pretty pictures on our screen. These are commands that were not available on the base Commodore VIC-20 or C64. You won't want to miss that fun, so make sure you <font color="red">SUBSCRIBE</font> to my [YouTube channel](https://www.youtube.com/stevencombs).

## Join the Fun

Help make this series better! Post feedback, questions, and ideas. Let me know if you are following along. Let's make this a community project. For now, Leave your comments and thoughts below or in the comments [under the YouTube video](https://youtu.be/B9_hKwjlqAA).

Thanks for watching and if you are so inclined, please let other Commodore fans know about the series by sharing these videos using #retroCombs.

🕹️ retroCombs OUT!
