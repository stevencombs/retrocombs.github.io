---
layout: post
title: 'Install the MEGA≡65 Emulator on the Clockwork uConsole'
date: 2023-10-14
author: 'Steven B. Combs, Ph.D.'
email: 'retrocombs@icloud.com'
comments: yes
permalink: mega65-uconsole
category: mega65
---

In this post and companion video, I share how to install the XEMU MEGA≡65 emulator, xmega65, on the Clockwork uConsole to create an amazing on-the-go handheld MEGA≡65. We can use this hardware and emulator until the release of the official MEGA≡65 handheld, the MEGAphone.

After playing with my handheld MEGA≡65 for awhile, I'm under the opinion that the MEGA≡65 developers should add the uConsole to their list of supported hardware, create a bare metal version of the XEMU emulator, and call it day. This will get a handheld MEGA≡65 in the hands of more fans immediately!

You can follow every step in the process using the uConsole keyboard; however, I prefer to create an SSH connection to the uConsole and use iTerm on Mac OS to connect and administer the uConsole remotely. I should also mention that these steps work with any Raspberry Pi 3 or greater.

----

 Table of Contents

- [Support the Blog and Channel](#support-the-blog-and-channel)
- [Companion YouTube Video](#companion-youtube-video)
- [Video Errata](#video-errata)
- [Links](#links)
- [uConsole Preparation](#uconsole-preparation)
- [Download XEMU Emulator](#download-xemu-emulator)
- [Build XEMU on the uConsole](#build-xemu-on-the-uconsole)
- [Run the MEGA≡65 emulator](#run-the-mega65-emulator)
- [Install the MEGA≡65 ROM](#install-the-mega65-rom)
- [Download my Script](#download-my-script)
- [Join the Fun](#join-the-fun)

----

## Support the Blog and Channel

Check out the [supporters page](/supporters) to learn about my amazing supporters and how you can join our community.

## Companion YouTube Video

Title: _Create an Amazing Handheld MEGA65 with the Clockwork uConsole and XEMU_

<div style="position:relative;padding-top:56.25%;"><p><iframe src="[link](https://www.youtube.com/embed/Bm4YtKuqk9g?si=VJKbl_U25BfOeJkA)" frameborder="0" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true" style="position:absolute;top:0;left:0;width:100%;height:100%;"></iframe></p></div>

## Video Errata

None as of 2023-10-14.

## Links

**Disclosure Statement:** When you click on links to various merchants on this site and make a purchase, this can result in this site earning a commission. Affiliate programs and affiliations may include, but are not limited to Amazon and the eBay Partner Network.

1. [MEGA≡65 Files Host](https://files.mega65.org)
2. [Clockwork uConsole](https://www.clockworkpi.com/uconsole)
3. [Patch the Original Commodore 65 ROM for the MEGA65, Xemu, Dev Kit, or Nexys4](https://retrocombs.com/patch-c65-rom)
4. [10 Reasons The Clockwork uConsole CM4 Might Be My Favorite Cyberdeck! - YouTube](https://www.youtube.com/watch?v=pNG8KqZs_Fg)

## uConsole Preparation
Before you install the emulator, you must have first completed these general steps:

1. Assemble the uConsole.
2. Insert the included Raspbian OS SD card.
3. Boot the uConsole.
4. Use `sudo apt update && sudo apt upgrade` to update Raspian OS.

## Download XEMU Emulator
The next step is to download the emulator:

1. Visit the [Xemu Download Page](https://github.lgb.hu/xemu/). While first instinct is to download the - Ubuntu Linux DEB package, this will unfortunately not work. We have some work to do.
2. Click the *Visit Project* button in the upper-right corner or visit the [Xemu Project Page](https://github.com/lgblgblgb/xemu) directly.
3. Scroll down to [### [Install software for compilation](https://github.com/lgblgblgb/xemu#install-software-for-compilation)](https://github.com/lgblgblgb/xemu#install-software-for-compilation). We will use these instructions to compile a version of xmega65, the MEGA≡65 emulator, for Raspbian OS. This download also includes other Commodore emulators you can play with later.
4. Raspbian needs software to build the emulator. Use the command `sudo apt install git build-essential libsdl2-dev libgtk-3-dev libreadline-dev` to upgrade and install required tools. You can also copy and past this code.
5. Make sure you are in your home directory with the command `cd ~`.
6. Copy the GitHub repository to your home location with the command `git clone https://github.com/lgblgblgb/xemu.git`.

## Build XEMU on the uConsole
We cannot use a *.deb* package and must compile the emulator software directly on the uConsole using the steps below:

1. Use the command `ls` and you will see a new folder with the name *xemu*.
2. Enter the directory using the command, `cd xemu`.
3. Build the software using the command `make`. This process will take several minutes. The process relies on the Raspbian Pi CM4's speed. You may see some errors; however, ignore those. This will build all the emulators. If you only want to build the MEGA≡65 emulator, use these commands instead:

   ```
   cd targets
   ls -l
   cd mega65
   make
   cd ../..
   ```

## Run the MEGA≡65 emulator
It's now time to start the emulator.

> **NOTE:** If connected to the uConsole via SSH, disconnect and move back to the uConsole.

1. The emulators are in the directory *build/bin*. Use the command `build/bin/xmega65.native` to load the xmega65 emulator.
2. Follow the prompts to configure the emulator. Don't worry about the errors. These are normal. Select _Yes_ for every option.

After you've moved through a bunch of dialog boxes, you will finally be at the "Your emulated MEGA65 seems to work screen." with an animated background.

## Install the MEGA≡65 ROM
Use the instructions below to install the MEGA≡65 ROM into the emulator.

> **NOTE:** I'm an owner of a Dev Kit and a MEGA≡65 and have legal access to the ROM. You don't have to purchase a MEGA≡65 to get the ROM. You can purchase the C64Forever package, which includes an original Commodore 65 ROM, and then use tools found on the MEGA≡65 FileHost to patch that ROM to the latest version. You can [find instructions here](https://retrocombs.com/patch-c65-rom).

1. Download the [latest stable ROM](https://files.mega65.org?id=54e69439-f25e-4124-8c78-22ea7ddc0f1c) using the uConsole.
2. Start the MEGA≡65 emulator.
3. Right-click in the Emulator window and select *Disks*/*SD card*/*Update files on SD image*. A file selector dialog box will appear.
4. Select the ROM file downloaded earlier. A confirmation dialog box will appear.
5. clock the *OK* button to restart the emulator with the new ROM.

Use the emulator with your favorite *.d81* disk images or develop your own programs in BASIC 65.

## Download my Script

In the video, I mention a script and resources I've created to add a XEMU xmega65 emulator item to the Raspbian OS menu. You can find more information using the link below:

[Raspbian XEMU MEGA≡65 Menu Item Script](https://www.buymeacoffee.com/retrocombs/e/171496)

## Join the Fun

Would you like to see more of the MEGA≡65 emulator running on the uConsole? Post a comment below.

Don't miss the retro-computing fun. <font color="red">SUBSCRIBE</font> to my [YouTube channel](https://www.youtube.com/stevencombs) and check out [my other MEGA≡65 posts](https://www.retrocombs.com/mega65).

Help make this content better! Leave your comments, corrections, additions, and thoughts in the comments below. You can email me at [retrocombs@icloud.com](mailto:retrocombs@icloud.com). Thanks for reading and if so inclined, please let others know about the blog using the hashtag #retroCombs.

🕹️ retroCombs, OUT!