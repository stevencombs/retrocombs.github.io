---
layout: post
title: 'retroCombs: The CombPi/400 | Make a Raspberry Pi 400 the ultimate Commodore computer emulator'
date: '2020-12-28'
author: 'Steven B. Combs, Ph.D.'
permalink: raspi400-1
email: 'steven.combs@gmail.com'
comments: 'yes'
category: retro
tags:
  - commodore
  - retro
  - mega 65
  - manual
  - raspberry pi
  - vice
  - combian 64
---

There's been a lot of excitement around the Raspberry Pi 400...

* form factor
* return to 1980s computing exploration

As readers and viewers know, I've taken a look at several devices this past year that promise to bring back the early days of computing magic. When the Raspberry Pi 400 was released, my first thought was, "I wonder how it will work with [Combian 64](https://cmaiolino.wordpress.com/)?" In this post and companion video, we'll find out as I show you how to open the box and configure your Raspi 400 to become the ultimate VICE emulator, complete with hardware mods to create an even more realistic experience.

This companion blog post will roughly outline the steps needed to turn the Raspberry Pi 400 into a Commodore VICE emulator extraordinaire! Since I use a [Manjaro Linux](https://manjaro.org/), the step-by-step might not be helpful for Mac and Windows users; however, a broad outline of the process should suffice for most reasonably tech savvy readers.

Below, I include a table of contents so you can jump around to various sections. If there's something missing that you need to complete your own project, drop comments below this post or in the [YouTube video](link).

__Table of Contents__



## Watch the Video: _Can the Raspberry Pi 400 become the ultimate Commodore computer emulator?_

In the video below, I demonstrate the process to convert a Raspi 400 into a a full functioning Commodore Computer emulator.

<div style="position:relative;padding-top:56.25%;"><p><iframe src="link" frameborder="0" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true" style="position:absolute;top:0;left:0;width:100%;height:100%;"></iframe></p></div>

## Video Errata

None as of 2020-12-28.

## Links Mentioned in this Episode:

Below are the links I mention in the video. All Amazon links are affialiate links. Thanks for supporting the blog and the YouTube channel!

1. [Raspberry Pi 400](https://amzn.to/3aMwMR9)
2. [SanDisk Ultra for only $5](https://amzn.to/3aPFrTa)
3. [4Keyboard brand, Commodore 64 keyboard stickers](https://amzn.to/38KRcHN)

## Download Combian 64 V3.0

What is Combian 64? Here's how Carmelo, the developer, describes it:

> Combian 64 is Raspberry Pi distribution able to boot your preferite Commodore machine in just few seconds. It uses the brand new compiled version of Vice 3.4 to emulate all the Commodore Machines set. By default, Combian 64 boots the Commodore 64 emulator, but it’s not the only one included in the distro…"

While the default Commodore machine is the C64, VICE version 3.4 includes the following emulators:

-   `x64`, the fast C64 emulator
-   `x64sc`, the accurate C64 emulator
-   `x64dtv`, the C64DTV emulator
-   `x128`, the C128 emulator
-   `xvic`, the VIC-20 emulator
-   `xpet`, the PET emulator
-   `xplus4`, the PLUS/4 emulator
-   `xcbm2`, the CBM-II emulator (CRTC models)
-   `xcbm5x0`, the CBM-II emulator (VIC-II models)
-   `xscpu64`, the SCPU64 emulator

Within each of those emulators are even more settings and models of each machine including, displays, memory expansions, kernals, VICs, drives, etc. All the options can be overwhelming; however, these options lead to some pretty sophisticated configurations that were beyond the pocketbooks of most users in the 1980s. With VICE you have access on your personal computer (Mac, Linux, and Windows) to about any Commodore computer ever made. Since VICE is available on Linux, it's perfectly matched for the Raspberry Pi.
In order to download Combian V3.0, you need to support the project. Versions prior to 3.0 are free to download but won't work with the Raspberry Pi 400. No specific amount is required; however, I recommend you tip Carmelo at least $5 to $10 to keep the amazing project alive.

## Extract Combian 64

The Combian 64 image comes as a .7z archive (7-Zip). Depending on the OS you use, you may or may not need additional software to extract the archive. Check out the [7-Zip downloads page](https://www.7-zip.org/download.html) if you need software. Once you extract the image file, you are ready to install it on a [microSD card](https://amzn.to/37UjMXW)(#ad). Anything larger than an 8GBs will suffice; however, currently 16Gb is the most affordable and available like this [SanDisk Ultra for only $5](https://amzn.to/3aPFrTa)(#ad).

## Install Combian 64 on an SD Card

[Etcher](https://www.balena.io/etcher/) is the best way to create transfer any image to an SD card and it's available on platforms. Download and install the version you need and then follow the steps as shown in the image below to select the image, select the drive to transfer to the image to and then flash the drive:

![Select image, select drive, and flash](https://www.balena.io/static/steps-8006dca57323756b1b84fb9408742409.gif)

The hardest part is selecting proper drive.

## Upgrade Combian 64 on another Raspberry Pi

Now that you have an image, unfortunately, it does not include all the hardware support necessary for the Raspberry Pi 400 to operate. The good news is the image is all ready for a Raspberry Pi 4 so you will need to own one or have a friend who can let you borrow one. Honestly, if you don't have one, you should [go ahead and get one](https://amzn.to/2L2DLum). You are sure to use it for other projects. Grab a [$100 4GB model](https://amzn.to/3rBtGp1) if you have some light computing projects such as emulators and browsing; however, grab a [$120 8GB model](https://amzn.to/3rBtGp1) if you want to replace a computer in the home or set up a light PC for a child. These things are inexpensive and a great first computer. Now it's time to upgrade the Combian 64 distribution.

1. Setup the Raspberry Pi 4 with a [keyboard/mouse combination](https://amzn.to/2JqR8UR)
2. Connect an [HDMI monitor](https://amzn.to/3aS4g0y).
3. Plug in the prepared micro Combian 64 SDCard.
4. Plug in the Raspberry Pi 4 to the [USB-C power cable](https://amzn.to/3nXz6Zk).
5. Once the Raspberry Pi boots, load the terminal and type the following commands:

    `sudo apt update` | A password prompt will appear. It is `raspberry`
    `sudo apt dist-upgrade` | This will apply the updates and takes some time. Grab a coffee, or better yet, [buy me one too](https://www.buymeacoffee.com/retroCombs) so we can sip together!

6. With the update complete, use the Raspian OS menu and shutdown the Raspberry Pi.
7. Once the Raspberry Pi 4 lights shut off, unplug the Pi.
8. Remove the microSD card from the Raspberry Pi.

It's now time to grab the Raspberry Pi 400.

## Raspberry Pi 400 Open the Box

There are two boxes you can purchase that include a Raspberry Pi 400. The $100 complete starter kit or the $70 Raspberry Pi 400 only. I choose the later since I didn't need an SD card, mouse, manual, or cables. My video open the box is short and sweet (for once).

## Install the Combian 64 micro SD Card

Insert the Combian 64 microSD card into the Raspberry Pi 400.

## Plug in the Raspberry Pi 400

1. Connect the Raspberry Pi 400 to the [USB-C power cable](https://amzn.to/3nXz6Zk) but do not plug it into the wall yet.
2. Connect an [HDMI monitor](https://amzn.to/3aS4g0y).

That's it. We don't need a mouse since those "weren't really a think in the 1980s on Commodore computers."

## Startup our new Commodore computer

1. Plug in the the [USB-C power cable](https://amzn.to/3nXz6Zk) to the wall. Depending on the power supply, you may also have to flip a switch on the cable.
2. The Raspberry Pi will boot up with the Combian 64 distro and by default, into Commodore 64 mode. The first boot will take longer than subsequent boots.

## Configure Combian 64

Now that we have a working Combian 64 distribution working on the Raspberry Pi 400, it is time to make a few quick modifications.

1. Expand the filesystem
2. Turn on the flashing LED power drive access indicator
3. Enable SSH so we remotely connect and upload software

Access the VICE menu using the F8 key. Remember this key!

## Configure the keyboard

The keyboard configuration for the C64 mode works with a standard keyboard; however, PET, PLUS/4, and VIC-20 reverts back to original key locations. That's really what I want so the Raspberry Pi 400 feels more like an original Commodore computer. Let's reconfigure C64 keyboard back to the defaults.

Settings Management / Active Keymap / Symbolic to Positional

[complete the section]

## Keyboard Stickers

I've explained that I want to the keyboard to resemble the original keyboards; however, on the Raspberry Pi's modern keyboard, typing can be a bit frustrating as you try and remember which keys do what. That's where these [wonderful 4Keyboard brand, Commodore 64 keyboard stickers](https://amzn.to/38KRcHN) come into play. Available in white or black, the white is just what we need and will remind me which keys produce which [PETSCII](https://en.wikipedia.org/wiki/PETSCII#Commodore_64_control_characters) characters.

## Design, print and apply a logo and serial number plate for the Raspi 400

I've chosen to name this build the Combian Pi/400. I like the name since it combines the Combian distribution with the Raspberry Pi while at the same time, harkens back to my last name, Combs. The /400 aligns perfectly with my love the Commodore Plus/4. Once I had the project name, it was time to develop a design for a logo. I choose to keep something Commodore and retroCombs inspired and again, drew inspiration from the Plus/4.

I'm sure I'm unique in this regard; however, I do 90% of my design work in Google Slides for the [blog](https://www.stevencombs.com) and the [YouTube](https://www.youtube.com/stevencombs) channel. That will seem odd to many professional, and even amateur, graphic designers; however, I find Google Slides provides me with just the tools I need while at the same time providing me with free and anywhere access to my files and the tools to make modifications on any device. I do wish slides included features like layers, boolean, and custom fonts; however, I figured out how to work my way around these limitations.

Another feature of Slides is the ability to share and collaborate as is evidenced below where I share my original Slides so you can see my design and even copy the file to modify and use for your own project. All I ask is that you just link back to this post, or [the YouTube video](link), and provide attribution.

<iframe src="https://docs.google.com/presentation/d/e/2PACX-1vRReNWFehBnftz4xe7MNwEVEaLPZokjwogZaGt_HDt_FTZWheVQgVyrv14dMpA5XHIatx-QM7AZ6fWw/embed?start=false&loop=false&delayms=3000" frameborder="0" width="640" height="389" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>

With the design complete, it is time to apply the logos to the Raspberry Pi 400. I found [Aiva Printable Vinyl Sticker Paper for Laser Printer](https://amzn.to/3rK0r3B) and I was anxious to try these in our new [Brother HL-L8360CDW Color Laser printer](https://amzn.to/3pE06O3) (which are hard to find due to the pandemic).

## Configure joystick (from THEC64 mini)

Good news! Plug in a THEC64(VIC-20) USB joystick and it just works! No configuration necessary. You can [purchase these joysticks individually](https://amzn.to/2WZ797H) if you don't have a full system and at around $30, they make the perfect VICE joystick for an old school gaming experience.

## Game Demo

To demo the new Combian Pi/400, I choose to play the the homebrew shooter, [Valkyrie 3 - The Night Witch](https://csdb.dk/release/?id=163108). I turned on the disk drive access emulation sounds and the experience was awesome.

Final Thoughts:

1. 

## Join the Fun
You won't want to miss that fun, so make sure you <font color="red">SUBSCRIBE</font> to my [YouTube channel](https://www.youtube.com/stevencombs).

Help make this series better! Post feedback, questions, and ideas. Leave your comments and thoughts below or in the comments [under the YouTube video](link).

Thanks for watching and if you are so inclined, please let other Commodore fans know about the series by sharing these videos using #retroCombs.

🕹️ retroCombs OUT!
<!--stackedit_data:
eyJoaXN0b3J5IjpbLTIwODI3NDEwODcsLTI5MzYxNDY4NSwxOD
g4OTE2OTA3LC0xMDA1MDY1NjksLTc1MDExMTU0NSwxNzc5NDc0
NjcsLTE1MjMzOTg0NTUsMTcxMzgyNTYwNl19
-->