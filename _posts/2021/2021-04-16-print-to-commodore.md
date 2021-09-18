---
layout: post
title: 'Transfer BASIC Programs in Print to Physical Commodore Computers'
date: '2021-04-16'
author: 'Steven B. Combs, Ph.D.'
email: 'steven.combs@gmail.com'
comments: 'yes'
permalink: 'print-to-commodore'
category: commodore
tags:
  - basic
  - commodore
  - print
  - type-in
  - scanning
  - ocr
---

While spending time in the MEGA65 Discord group, I found a link to *Weihnachten auf dem Commodore (WADC)*, or [Christmas on the Commodore](https://www.c64-wiki.de/wiki/Weihnachten_auf_dem_Commodore). There have been editions printed since 2018 and I ordered all three available editions. Inside pages are filled with type in BASIC programs for all manner of Commodore 8-bit computers. Below is an excerpt form the [C64 Wiki page](https://www.c64-wiki.de/wiki/Weihnachten_auf_dem_Commodore) about these annual publications.

> The idea behind the creation of the booklet is based on the fact that for some users of the C64 there is a certain connection with Christmas, as many originally got it for Christmas at that time or the Christmas season symbolizes a contemplative, quiet time in that you can take out your home computer to do the typing of BASIC programs like in the old days…Although the listings are intended for the C64, the magazine is not limited to this computer. Listings for other Commodore home computers such as the C128 or Plus/4 can be found in it. To enable the most error-free typing possible, the booklet contains the checksum tool F64Summer, which was developed by Zirias in the course of the first edition.

![Weihnachten auf dem Commodore](https://www.stevencombs.com/images/posts/weihnachten-pages.jpg)

You can order your copies of all three volumes [here](https://xmas.drwuro.com/order). For 3.00 EUR (or ≈ $3.50 USD) per issue, purchase all three. Shipping to the United States is 3.60 EUR and if you order all three, no additional shipping is applied. It's a steal. You do need to be aware that the magazines come in the German language. There is not an English version; however, for someone who had four years of German I in high school, I am able to decipher much of it and in those cases where I can't figure it out, I turn to Google Translate. It's a wonderfully technological world we live in.

In my prime, back in the 1980s, I would have poured through these magazines and typed in every program and then watch them run in all their 8-bit glory. I'd save them to a cassette tape. It was many years, and a Commodore 128, later before I could afford a disk drive. Back in the day, I had free time to do this; however, times they do a change. While I will type in one or two of the programs in these magazines, I don't have time to type them all.

What's a Commodore retro-computing fan to do? Use what he learned while producing the [Commodore Plus/4 User's Manual series](/plus4) and share how to convert these BASIC programs from print to physical Commodore computers.

<!-- TOC -->

- [YouTube Video: _Transfer BASIC programs in print to a Commodore computer_](#youtube-video-_transfer-basic-programs-in-print-to-physical-commodore-computers_)
- [Video Errata](#video-errata)
- [Links Mentioned in this Episode:](#links-mentioned-in-this-episode)
- [Conversion Time](#conversion-time)
  - [Scan Page(s)](#scan-pages)
  - [Edit in a Text Editor](#edit-in-a-text-editor)
  - [Copy and Paste](#copy-and-paste)
  - [Transfer and Execute the program on physical hardware](#transfer-and-execute-the-program-on-physical-hardware)
    - [Commodore Hardware and Pi1541](#commodore-hardware-and-pi1541)
    - [THEC64/VIC20](#thec64vic20)
- [Final Thoughts](#final-thoughts)
- [Join the Fun](#join-the-fun)

<!-- /TOC -->

## YouTube Video: _Transfer BASIC programs in print to physical Commodore computers_

Before you read my process below, look at the FAST LOAD video below that shows my technique.

<div style="position:relative;padding-top:56.25%;"><p><iframe src="https://www.youtube.com/embed/nyg4Yh_QFuA" frameborder="0" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true" style="position:absolute;top:0;left:0;width:100%;height:100%;"></iframe></p></div>

## Video Errata

[2021-04-16] In the first section of my typing example, my original video had the Commodore screen superimposed in the upper-right hand corner; however, that screen capture became corrupt; leaving a huge gap in my video composition. It was disappointing; however, I decided to not recreate this portion of the video because this project had already been in the hopper for a week.

## Links Mentioned in this Episode:

Below are the links I mention in the video. All Amazon links are affiliate links. Thanks for supporting the blog and the YouTube channel!

1. [Commodore Plus/4 User's Manual Series](/plus4)
2. [Weihnachten auf dem Commodore](https://xmas.drwuro.com/order)
3. [Adobe Scan App](https://acrobat.adobe.com/us/en/mobile/scanner-app.html) \| For Android and iOS
4. [iaWriter](https://ia.net/writer) \| For Mac, iOS, and Android
4. [Atom](https://www.atom.io) \| For Mac, Linux, and Windows
5. [VICE](https://vice-emu.sourceforge.io/) \| For Mac, Linux, and Windows
6. [Pi1541 Zero Project](https://www.stevencombs.com/pi1541-1)
7. [THEVIC20](https://amzn.to/2Q58kCz)
8. [THEC64](https://amzn.to/32dQGiL)
9. [microSD cards](https://amzn.to/3aeuedx)
10. [IEC cable](https://amzn.to/3uSkPAs)

## Conversion Time

Don't misunderstand, there's educational opportunity to be had from typing in Commodore BASIC programs. You learn command syntax, keyboard layout, program structure, and an entire realm of programming concepts when you take the time to enter each line. But, man! It can eat at your free time, even with the thoughtful bookmark and space ruler that each issue of WADC includes.

![Image of Magazine and Bookmark](https://www.stevencombs.com/images/posts/weihnachten-ruler.jpg)

And in the case of the *Checksum* program (a program designed to verify you've typed each line correctly), there's little value since the program is a series of pokes to create a machine language program. Normal humans can't process these programs.

### Scan Page(s)

The first step of the process is to use a tool that includes optical character recognition (OCR) to scan the BASIC program. My preference is the free [Adobe Scan](https://acrobat.adobe.com/us/en/mobile/scanner-app.html) for my Pixel 4XL. There are other mobile device scan apps, paid and free, that do the same thing. I prefer an app over a dedicated scanner. My workflow is faster. Here are my steps below:

1. Open the Adobe Scan app on a mobile device.
2. Locate the printed program to scan. In our case, in a WADC issue.
3. Use the app to take a picture of the entire page of code. If the code spans multiple pages, add a page to the current scan instead of starting a new scan. This will reduce several steps later. If the printed program includes a checksum number, like WADC programs, do not include those numbers in the scan. Those are valuable when you type in the code, but will cause more edits with this process.
4. After scanning is complete, Adobe Scan will provide options to crop the image and make other minor adjustments. This is a good time to crop out an extraneous characters that are not a part of the BASIC program.
5. After making adjustments, save the pictures as a PDF. Adobe Scan will immediately OCR the images.
6. Adobe Scan will save the PDF to its own library; however, use the share feature of your phone to send it to your desktop computer. There are many ways to accomplish this and I share the file to a folder on my Pixel phone's Google Drive that syncs with my Mac. By the time I share and place the phone on my desk, the file is available on my Mac.

You now have a PDF with the entire BASIC program on your desktop or laptop.

### Edit in a Text Editor

Our next step is to transfer the contents of the OCR file to a text editor in these easy steps:

1. Open the PDF file. I use a Mac and open it using the Preview application.
2. Highlight and copy the entire text contents of the PDF file.
3. Open a text editor of your choosing (more below).
4. Paste the contents of your clipboard into a new text document.
5. Save the file with an appropriate name as a `.txt` file.
6. Review the text file program any errors from the Adobe OCR conversion. There will be a few. If you've not watched my video, I share a couple of quick clean up tips.
7. If you scanned a printed program and it is all capitalized, use your text editor to change it all to lower-case. If you copy an all-caps program into VICE, the characters will be converted to non-functional code uppercase PETSCII characters.
8. If your text editor doesn't autosave, get a new one, or make sure and save your file often.

> **Text Editors:** In my video, I use [iaWriter](https://ia.net/writer). It's not meant for coding, but for writing; however, it has all the tools I need to get this job done. For more sophisticated text editing including [regex](https://en.wikipedia.org/wiki/Regular_expression), advanced fine and replace, multiple cursors, syntax highlighting, and packages, I use [Atom](https://atom.io/). There's a learning curve, but it is worth the time. Atom is the tool I use to manage my blog on GitHub pages. It is a free application for Mac, Linux, and Windows. Other great options include [Sublime Text](https://www.sublimetext.com/) and [Visual Studio Code](https://code.visualstudio.com/). Alternatively, every computer OS includes a rudimentary text editor that you can use for this conversion.

Once you've made edits and have a good copy of the the printed program, you are ready to move it over to the VICE emulator.

### Copy and Paste

We will use [The Versatile Commodore Emulator (VICE)](https://vice-emu.sourceforge.io/) to load, edit, and execute the code. The application creates `.d81` disk images that we will use to transfer programs from VICE to a physical computer. Follow these steps:

1. Open VICE on your Mac, Linux, or Windows computer. A prompt will appear with a selection of computers to emulate. Select the correct emulator for the program you scanned.
2. Copy the entire program from the text editor.
3. In VICE, choose *Edit* \| *Paste*.
4. Type `run` and cross your fingers. If the program works, continue to step 6.
5. If the program has errors, you can make the changes in VICE or you can return to the text editor. If you make changes in the text editor, use the `new` command in vice to clear memory and paste in the new code. Repeat this step until the program executes properly.
6. Save the `.txt` file in the text editor. Having this backup will come in handy and these files are super small.
7. If you have a disk image mounted to VICE, save the file to the disk image and  skip to step 10.
8. VICE can create disk images. Choose the *File* \| *Create and attach an empty disk image…* option. The *Create and attach a new disk image* dialog box will appear as shown below:

    ![Create a Disk Image](https://www.stevencombs.com/images/posts/vice-create-disk-image.png)

9. Use the dialog box to create a `.d81` file as shown in sample above.

With a working program saved to a Commodore disk image, you are ready to transfer the program to your physical computer.

### Transfer and Execute the program on physical hardware

The imagee transfer process depends on the device you choose to mount your disk image. I won't share each in detail but here's a quick summary for transfer using a [Pi1541](https://www.stevencombs.com/pi1541-1) on original Commodore hardware and using a THEC64/VIC20.

#### Commodore Hardware and Pi1541

1. Copy the `.d81` disk image to a properly formatted microSD card on a Mac, Linux, or Windows computer. Consider creating a folder on the microSD to make file management easier on the Pi1541.
2. Eject the microSD card.
3. Insert the microSD card into the Pi1541.
4. Connect the Pi1541 to a Commodore computer using [an IEC cable](https://amzn.to/3uSkPAs).
5. Connect the Pi1541 to power using a micro USB cable and a proper USB power supply.
6. Turn on the Commodore computer. The Pi1541 will boot up.
7. Use the Pi1541 buttons to navigate to the disk image and select.
8. Use the `load"name",8,1` or `dload"name"` (depending on the version of Commodore BASIC) command load the file.
9. Use the `run` command to execute the program.

You can now load and save programs to disk images on the Pi1541.

> **TIP:** As highlighted in the video, I made a mistake and didn't use the proper syntax when writing over a file in Commodore 64 mode. To overwrite an existing file on the disk image use this syntax: `save "@0:name",8`

#### THEC64/VIC20

1. Copy the `.d81` disk image to a properly formatted USB drive on a Mac, Linux, or Windows computer.
2. Eject the USB drive.
3. Plug the USB drive into a USB port on THEC64.
4. Turn on the THEC64.
5. Press the lower-right red button on the joystick. The menu below will appear:

    ![THEC64 screen menu](https://www.stevencombs.com/images/posts/thevic20/bottom-menu.jpg)

6. Use the joystick to highlight *Media access* and press the fire button. The Media Access page appear as shown below:

    ![Media Access Page](https://www.stevencombs.com/images/posts/thevic20/media-access.jpg)

6. Use the joystick to locate the disk image file. Press the fire button to attach the disk image. The image name will appear in the **Disk Drive** option at the bottom of the page.
7. Press the lower-right red button on the joystick to return the Commodore computer screen. The image is now available.
7. Use the `load"name",8` command load the file.
8. Use the `run` command to execute the program.

You can now load and save programs to disk images on the USB drive.

## Final Thoughts

1. I'm aware that this is one way to perform this task; however, these steps have worked for me and because I've done this many times, I can scan a program and convert it in short-order.
2. While this process may not seem to save time initially, as you get more familiar with the tools, you can fly through pages of code.
3. This technique, and the Adobe Scan software, can be used for all forms of scans where you need an OCR conversion to grab the text.
4. Be sure to see what else the Adobe Scan software can do for you. I'm amazed that this app is free given Adobe's penchant for subscription fees.
5. Don't want to use Adobe products? There are other open source, free, and paid options out there. Even Google Keep will grab text from an image. Free OCR services are more available now than ever before.
6. *Weihnachten auf dem Commodore (WADC)* is so much fun. Seriously, spend the money and grab all volumes now before they run out. Not only am I having a blast with the type-in programs, I'm also brushing up on my German at the same time. I'll be typing/scanning many of the other programs and saving them to my .d81 disk image. I'm in no rush and have three volumes.

## Join the Fun

Don't miss the fun, <font color="red">SUBSCRIBE</font> to my [YouTube channel](https://www.youtube.com/stevencombs).

Help make this content better! Leave your comments and thoughts below or in the comments [under the YouTube video](https://youtu.be/nyg4Yh_QFuA).

Thanks for reading and watching and if you are so inclined, please let others know about the blog on all your favorite social media platforms using the hashtag #retroCombs.

🕹️ retroCombs, OUT!
