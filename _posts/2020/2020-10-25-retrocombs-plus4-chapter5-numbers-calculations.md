---
layout: post
title: 'retroCombs: Plus/4 User’s Manual Chapter 5 - Numbers and Calculations'
date: '2020-10-25'
author: 'Steven B. Combs, Ph.D.'
permalink: plus4-6
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

## User's Manual

As part of my Commodore Plus/4 YouTube series, I work through each chapter of the Plus/4 manual. I've taken the time to scan each chapter so you can read and follow along. Use the link below to view chapter 3:

[Chapter 4 - Getting Started](https://www.stevencombs.com/plus4/users-manual/p4um-chapter-4.pdf)

Below are the links for previous chapters covered:

1. [Front Matter](/plus4/users-manual/p4um-title-introduction.pdf)
2. [Chapter 1 - Unpacking and Setting Up](/plus4/users-manual/p4um-chapter-1.pdf)
3. [Chapter 2 - Using the Keyboard and the Screen](https://www.stevencombs.com/plus4/users-manual/p4um-chapter-2.pdf)
4. [Chapter 3 - Using Software](https://www.stevencombs.com/plus4/users-manual/p4um-chapter-3.pdf)
5. [Chapter 4 - Getting Started](https://www.stevencombs.com/plus4/users-manual/p4um-chapter-4	.pdf)

## YouTube Video: _retroCombs: Commodore Plus/4, Chapter 5 - Numbers and Calculations_

In the video below, I work through Chapter 5 of the user's manual.

<div style="position:relative;padding-top:56.25%;"><p><iframe src="https://www.youtube.com/embed/deYdjWEKT6g" frameborder="0" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true" style="position:absolute;top:0;left:0;width:100%;height:100%;"></iframe></p></div>

## Links Mentioned in this Episode:

Below are the links I mention in the video.

1. [Commodore Plus/4 User's Manual Series](https://www.stevencombs.com/plus4)
2. [TEDuino - A TED Series inspired Datasette powered by Tapuino](/teduino-1)
3. [The Tapuino Project](/tapuino-1)

## Key to Keys

Because the Commodore Plus/4 keyboard is so different from modern keyboards, I devised a modern key nomenclature to identify keystroke combinations as shown in the table below:

| Key  | Description   | Key  | Description |
|:---- |:------------- |:---- |:----------- |
| `⇪`  | Caps Lock     | `F1` | Function 1  |
| `C=` | Commodore     | `F2` | Function 2  |
| `⌃`  | Control       | `F3` | Function 3  |
| `⎋`  | Escape        | `F4` | Function 4  |
| `⌂`  | Home          | `F5` | Function 5  |
| `⌫`  | Insert Delete | `F6` | Function 6  |
| `⏎`  | Return        | `F7` | Function 7  |
| `RS` | Run/Stop      | `F8` | Help        |
| `⇧`  | Shift         | `␣`  | Space       |

## Episode Errata

No feedback from previous episode. I must have gotten most things correct!

## Introduction

1. Thanks to all my viewers for the feedback.
2. .d81 disk image is now available [here](link).
3. Proud of the companion website for this episode. Check it out!
4. Don't forget to [subscribe to the channel](https://www.youtube.com/stevencombs)!

I'm going to feel a bit like a math teacher in this episode! But an easy one. No homework.

## Numbers and Basic Operations

1. We'll talk about mathematical operators, but relational operators should appear when get deeper into programming. Operators are shown in the image below:

    ![Basic Mathematical and Relational Operators](/plus4/images/operators-slide.png)


## Fractions and Decimals

1. Fractions are not native to the Commodore Basic 3.5. A fraction such as 1/2 is converted to decimal form (.5). The Plus/4 will never display a result in fraction format.
2. Pi, or `π`, is a key on the Plus/4 keyboard (which is unique since most keyboards today don't have this key). Press it to represent the value of π in a calculation.

## Scientific Notation

1. Numbers larger than nine digits are represented using scientific notation. Here are some examples:

    ```
    20 = 2E+1
    10500 = 1.05E+5
    .0666 = 6.66E-2
    ```

## Performing Calculations

1. We can use a `PRINT` command in a BASIC program to perform calculations as shown in the example below:

    ```basic
    10 PRINT 1+2,2-1
    20 PRINT 2*2,4/2
    ```

2. You can print both a calculation, the result of a calculation, or the calculation and the result in a line of BASIC code as shown below:

    ```basic
    10 PRINT "2001/2010"
    20 PRINT 2*3
    30 PRINT "2*3+1=";2*3+1
    ```

## Immediate (Direct) Mode

1. Immediate mode allows us to use the Plus/4 like a calculator without creating a BASIC program and using the `RUN` command. Enter the calculation on a new line preceded by the `PRINT` command or the `?` character. Below are a few examples:

    > **TIP:** ? = PRINT in Commodore BASIC)

    ```
    PRINT 3-6 ⏎
    -3
    ? 24/(6+2) ⏎
     3
    ```

2. Let's combine what we've learned to use immediate mode to display a calculation and a result. Type the line below on an empty line:

    ```basic
    ? "2 TO THE 3RD POWER EQUALS";2↑3 ⏎
    ```

## Order of Calculation

1. Commodore Basic 3.5 uses the mathematical concept of [order of operations](order of operations). In the example below, 50/5 is performed first with 200 added after the result:

    ```basic
    ? 200+50/5
    ```

2. Below is a short summary of precedence of operators:

    * **FIRST:** Negative numbers identified
    * **SECOND:** Solve exponents
    * **THIRD:** Solve multiplication and division
    * **FOURTH:** Solve addition and subtraction

3. To modify the precedence of operators, surround the values between `(` and `)` as shown in the example below. The operation `A/3` will complete, followed by `12 +` the value of `A/3`, and then that result multiplied by 36.

    ```basic
    ? 36*(12+(A/3))
    ```

## Using Variables

1. Variable are an important concept to both algebra and programming.
2. A variable is a placeholder for a value.
3. There are three types of variables in Commodore BASIC as shown in the table below:

TYPE           | SYMBOL | DESCRIPTION                     | EXAMPLES  | SAMPLE VALUES
:--------------|:-------|:--------------------------------|:----------|:-------------------------
Floating Point | n/a    | Real (Decimal) or Whole Numbers | X, AB, T4 | 23.5, 12, 1.3E+2
Integer        | %      | Whole Numbers                   | X%, AI%   | 15, 102, 3
Text String    | $      | Letters, Numbers, Characters    | X$, MS$   | "TOTAL:" , "DAY 1", "CBM"

## Mid Video Retro Break

Be sure to **LIKE** each video and **SUBSCRIBE** to the [channel](https://www.youtube.com/stevencombs)! The community is slowly growing.

## Numeric Functions

1. Commodore BASIC 3.5 includes numeric functions such as the trigonometric SIN function. A listing can be found on page 151 along with all other Commodore BASIC commands.
2. A function uses the format: `FUNCTION(X)` where function equals a specific function (such as SIN) and the `X` between the `(` and `)` is a specific value the function will act upon.
3. Below is a sample program that uses the `SQR(X)` function, or Square Root of a number to print the square root of 1, 2, 3, 4, and 5:

    ```basic
    10 FOR X=1TO5
    20 ?"THE SQUARE ROOT OF";X;"IS";SQR(X)
    30 NEXT X
    ```

## Random Numbers and Other Functions

1. Random numbers are important for simulation and game software.
2. Commodore Basic includes a `RND(X)` function to produce random numbers within a range of values.
3. Below is a sample program that will print five random values.

    ```basic
    10 FOR X=1TO5 : ? RAND(X): NEXT X
    ```

    > **TIP:** The line of code above could have been three different lines; however, we use a `:` to place three lines of code on a single line. This can reduce memory usage for longer programs.

4. The program above creates five unique random numbers, but what if we want random numbers between 1 and 5? We will need to use the `INT(X)` function as well as setting a range (5) and lower limit (+1) as shown in the program below:

    ```basic
    10 FOR X=1TO5
    20 ? INT(5*RND(1))+1 : REM 5 IS THE RANGE & +1 IS THE     LOWER LIMIT
    30 NEXT X
    ```

5. It is also possible to create your own unique function to use throughout a program. If the function is used regularly in a program, this can save memory and speed of operation. Below is an example of a program below that will alternate a line of text on the screen various colors:

    ```basic
    10 DEF FNR(X)=INT(X*RND(1))+1
    20 DO
    30 COLOR 1,FNR(16),5 : REM PICK A COLOR FROM 1 TO 16
    40 ? "THE SEARCH GOES ON..."
    50 LOOP
    ```

    > HINT: The DO/LOOP commands create an infinite loop. Press `RS` to stop the program.

## Final Thoughts

This chapter provides very cursory basics of number and calculations. I recommend you check out more functions on page 151 in the user's manual. Of particular interest is that most of these same things can be done using the Python interpreter on a modern computer. On that note, the concepts used here will help anyone just learning to program.

## Join the Fun

Help make this series better! Post feedback, questions, and ideas. Let me know if you are following along. Let's make this a community project. For now, Leave your comments and thoughts below or in the comments [under the YouTube video](https://youtu.be/B9_hKwjlqAA).

Thanks for watching and if you are so inclined, please let other Commodore fans know about the series by sharing these videos using #retroCombs.

🕹️ retroCombs OUT!
