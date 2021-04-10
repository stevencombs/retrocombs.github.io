---
layout: post
title: 'Transfer BASIC programs in print to physical Commodore computers'
date: '2021-04-09'
author: 'Steven B. Combs, Ph.D.'
email: 'steven.combs@gmail.com'
comments: 'yes'
permalink: 'print-to-commodore'
category: retro
tags:
  - basic
  - commodore
  - print
  - type-in
---

While spending time in the MEGA65 Discord group, I found a link to *Weihnachten auf dem Commodore (WADC)*, or [Christmas on the Commodore](https://www.c64-wiki.de/wiki/Weihnachten_auf_dem_Commodore). There have been editions printed since 2018 and I ordered all three available editions. Inside are pages filled with type in BASIC programs for all manner of Commodore 8-bit computers. Below is an excerpt form the [C64 Wiki page](https://www.c64-wiki.de/wiki/Weihnachten_auf_dem_Commodore) about these annual publications.

> The idea behind the creation of the booklet is based on the fact that for some users of the C64 there is a certain connection with Christmas, as many originally got it for Christmas at that time or the Christmas season symbolizes a contemplative, quiet time in that you can take out your home computer to do the typing of BASIC programs like in the old days…Although the listings are intended for the C64, the magazine is not limited to this computer. Listings for other Commodore home computers such as the C128 or Plus / 4 can be found in it. To enable the most error-free typing possible, the booklet contains the checksum tool F64Summer , which was developed by Zirias in the course of the first edition.

In my prime, back in the 1980s, I would have poured through these magazines and typed in every program in hopes that they would run and provide minutes of amusement. I'd then save them to a cassette tape. It was many years, and a Commodore 128, later before I could afford a disk drive. Back in the day, I had free time to do this; however, times they do a change. While I will type in one or two of the programs in these magazines, I don't have time to type them all.

What's a Commodore retro-computing fan to do? Use what he learned while producing the [Commodore Plus/4 User's Manual series](/plus4) and share how to convert these BASIC programs from print to physical Commodore computers.

## YouTube Video: _Transfer BASIC programs in print to physical Commodore computers_

Before you read my process below, look at the FAST LOAD video below that shows my technique.

<div style="position:relative;padding-top:56.25%;"><p><iframe src="link" frameborder="0" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true" style="position:absolute;top:0;left:0;width:100%;height:100%;"></iframe></p></div>

## Video Errata

None as of 2021-04-09.

## Links Mentioned in this Episode:

Below are the links I mention in the video. All Amazon links are affiliate links. Thanks for supporting the blog and the YouTube channel!

1. [Commodore Plus/4 User's Manual Series](/plus4)
2. [magazines](link)
3. [Adobe Scan App](https://acrobat.adobe.com/us/en/mobile/scanner-app.html) \| For Android and iOS
4. [Atom](https://www.atom.io) \| For Mac, Linux, and Windows
5. [VICE](https://vice-emu.sourceforge.io/)
6. [Pi1541 project](https://www.stevencombs.com/pi1541-1)

## Conversion Time

Don't misunderstand, there's a lot of educational opportunity to be had from typing in Commodore programs. You learn BASIC command syntax, keyboard layout, program structure, and an entire realm of programming concepts when you take the time to enter each line. But, man! It can eat at your free time, even with the thoughtful bookmark and space ruler that each issue of WADC includes.

![Image of Magazine and Bookmark](/images/posts/weihnachten-ruler.jpg)

And in the case of the Checksum program (a program designed to verify you've typed each line correctly), there's little value since the program is a series of pokes to create a machine language program. Normal humans can't process these programs.

### Scan Page(s)

The first step of the process is to use a tool that includes optical character recognition (OCR) to scan the BASIC program. Here are my steps below:

1. Open the Adobe Scan app on a mobile device.
2. Locate the program to scan. 
3. Use the app and take a picture of the entire page of code. If the code spans multiple pages, add a page to the current scan instead of starting a new scan. This will reduce several steps later. If the program includes a checksum number, like the Wiehnachten, do not include those numbers in the scan. Those are valuable when you type in the code, but will cause more edits with this process.
4. After scanning is complete, Adobe Scan will provide options to crop the image and make other minor adjustments.
5. After making adjustments, save the images as a PDF and Adobe Scan will begin the OCR process.

You now have a PDF with the entire BASIC program.

### Edit in Text Editor

Our next step is to transfer the contents of the OCR file to a text editor in these easy steps:

1. 

Check for any text irregularities from the Adobe OCR conversion. There will be a few.

See my video for a find and replace scenario that quickly cleaned up the OCR scan.

Change to lower-case

### Copy and Paste

Copy and paste into VICE emulator

Run the program, note any line errors, and make corrections.

Save to .d81 image (not .d64 and discuss why)

### Execute program on physical hardware

Transfer .d81 image to SD card for use in pi1541.

## Final Thoughts

There's my process. Readers and viewers may have other methods and tips for this task. If so, please drop a comment below or [under the YouTube video](link).

## Join the Fun

Don't miss the fun, <font color="red">SUBSCRIBE</font> to my [YouTube channel](https://www.youtube.com/stevencombs).

Help make this content better! Leave your comments and thoughts below or in the comments [under the YouTube video](link).

Thanks for reading and watching and if you are so inclined, please let others know about the blog using the hashtag #retroCombs.

🕹️ retroCombs, OUT!
