---
layout: post
title: 'retroCombs: Create a blank .c64 disk image for the Pi1541 or SD2IEC'
date: '2020-06-25'
author: 'Steven B. Combs, Ph.D.'
permalink: pi1541-2
email: 'steven.combs@gmail.com'
comments: 'yes'
category: retro
tags:
  - commodore
  - retro
  - plus4
  - raspberrypi
  - raspberrypizero
  - 1541
  - software
  - diskdrive
  - sd
  - pi1451
  - sd2iec
---

In my last post and video, I shared my experience with the assembly and first use of Pi1541. Not familar with the device? Take look here for more information. It's turned out to be a great device; if you have a bunch of disk images laying around your computer. As I began to prepare for my next using the Commodore Plus/4 episode, it became evident that I needed a blank disk image so I could save and load my own program files. I wasn't sure you could do this with the Pi1541 by itself, so I began to look for hints online. In this post and the accompanying video, I share that process as well as some other tips.

> **NOTE:** While this process focuses on the creation of a .d64 diskette image for the Pi1541, it turns out that this same process works for SD2IEC devices.

## YouTube Video: _Create a blank .c64 disk image for the Pi1541 or SD2IEC_

In the video below, I share the content found in the blog post below.

<div style="position:relative;padding-top:56.25%;"><p><iframe src="https://www.youtube.com/embed/iiuS-cI2c6s" frameborder="0" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true" style="position:absolute;top:0;left:0;width:100%;height:100%;"></iframe></p></div>

## Links Mentioned in this Episode:

Below are the links mentioned in the video:

1. [PiDRIVE ZERO Raspberry Pi HAT pi1541 1581 Commodore 64, 128, and Vic-20 Emulator with OLED display](https://commodore4ever.net/collections/drives/products/pidrive-zero-raspberry-pi-hat-1541-1581-commodore-64-128-vic-20-emulator-oled-pi1541)
2. [Commodore4Ever](https://www.commodore4ever.net)
3. [Pi1541 Project](https://cbm-pi1541.firebaseapp.com/)
4. [Raspberry PI Zero](https://amzn.to/2V2Je6U)
5. [Serial Cables](https://www.ebay.com/itm/Serial-Cable-for-Commodore-64-C64-Disk-Drive-or-printer-1541-1571-3-ft-DIN-6-PIN/372816665018?ssPageName=STRK%3AMEBIDX%3AIT&_trksid=p2060353.m2749.l2649)
6. [microSD Card](https://amzn.to/2YjmZvp)
7. [microUSB Cable](https://amzn.to/37LGSym)
8. [SD2IEC](https://www.ebay.com/sch/i.html?_from=R40&_trksid=p2380057.m570.l1313.TR3.TRC1.A0.H0.Xsd2iec.TRS0&_nkw=sd2iec&_sacat=0)

## Creating a blank .c64 disk image

The process for creating a blank image utilizes the [VICE (Versatile Commodore Emulator)](https://vice-emu.sourceforge.io/) emulator software. Installation of VICE varies by computer; however, I will run through the installation on a Linux distribution (Elementary OS). Check out the [VICE download page](https://vice-emu.sourceforge.io/index.html#download) for the many other versions available.

### Install VICE

For Linux users, the most recent version of VICE should be ready to install from your distribution's repositories. On my Elementary OS install (based on Ubuntu), it's as simple as:

1. Launch the _Terminal_.
2. Type `sudo apt update` and wait for the respository lists to update.
3. Type `sudo apt install vice` and a terminal message similar to the one below will appear:

    ```bash
    Reading package lists... Done
    Building dependency tree
    Reading state information... Done
    The following additional packages will be installed:
    libgtkglext1 libpangox-1.0-0
    The following NEW packages will be installed:
    libgtkglext1 libpangox-1.0-0 vice
    0 upgraded, 3 newly installed, 0 to remove and 0 not upgraded.
    Need to get 5,257 kB of archives.
    After this operation, 34.0 MB of additional disk space will be used.
    Do you want to continue? [Y/n]
    ```

4. Type `y` at the prompt and VICE will install.

For the Linux version, VICE will install several launchers for VICE as shown in the image below:

![Various VICE Launchers](/pi1541/images/vice-versions.png)

While we can use this software to create our own .d64 diskette image, the software is also a whole lot of fun for on the go retro-computing on other devices; but that's for another post, let's not get distracted and get back to the task at hand.

### Create the diskette image

Now that VICE is installed, we can create our diskette image using the following steps:

1. Start the _VICE (C46)_ emulator on your computer. A screen similar to the one below will appear:

    ![VICE 64 Screen](/pi1541/images/vice64.png)

2. From the VICE menu, select _File_ / _Create and attach an empty disk image_ / _Device #8_. The following dialog box (or something very similar), will appear:

    ![VICE Create Disk Image Dialog Box](/pi1541/images/create-image-dialog.png)

3. Naviage a location where you can easily find the .d64 file after you create it. I like to use the _Downloads_ folder.
3. In the name text edit area, type the name of the file you want to create. Keep it all lower case and no spaces.
4. You can select which device to automatically connect in the lower-left of the dialog box; however, that has nothing to do with the create of the image. It simply connects the new image to that device number for VICE. Just leave the default `#8`.
5. In the _Name_ text edit box, type a name for the image in all lower case and no more than 16 characters. This text will display when you list the contents of the directory on your Pi1541, SD2IEC, or within VICE.

> NOTE: I have you type in everything with lower case characters because they will be converted to upper-case when using on a Commodore computer. You can use other symbols, but I recommend you take a look online at what symbols are allowed.

6. The formatting _ID:_ text edit box is purely cosmetic and like _Name_ can be any two alpha-numeric characters you want. You can add characters or simply leave this box blank.
7. Using the _Type_ dropdown menu, select the `d64` option (it should be the default).
8. Select the _Save_ button to create the diskette image. VICE will also attach this new diskette image to the current VICE instance. If you remember your diskette commands (such as `LOAD "$",8` and then 'LIST'), you can play around with the image on your computer before we transfer it to the Pi1541.

Remove your SD card an insert into your SD2IEC device.

Select any of the newly created blank disks and use them like a regular blank disk.

### Transfer the disk image

Now that the diskette image is created, let's move it to the Pi1541.

1. Place the Pi1541 SD card into the computer.
2. Open a the file manager of choice.
3. Browse to the _1541_ directory on the SD card.
4. Copy the newly created .d64 from the computer to the _1541_ directory as shown in the image below:

    ![transfer .d64 image to sd card](/pi1541/images/transfer-c64-sdcard.png)
Insert your SD card into a PC.

5. Once the images is transfered (it will take less than a second), eject the SD card.

### Use the disk image

With the image transfered, we can now give it a try.

1. Insert the SD card into the Pi1541 (or SD2IEC device).
2. Connect the Pi1541 to the computer using a serial cable.
3. Connect the power to the Pi1541 using a microUSB cable.
4. Turn on the Commodore computer (in my case, a Plus/4).
5. Use the buttons on the Pi1541 to navigate to the .d64 image created.
6. On the Commodore computer list a directory with either the `LOAD "&",8` or `DIRECTORY` commands (depending on the Commodore computer you are using with the first option usable by all).

You should see a directory of listing of the new .d64 image and can now use it just like a 1541 disk drive and that includes the slow speed when loading larger programs!

## Final Thoughts

You could also find a copy of a blank .d64 file online, download it and then place on the SD card, but where's the fun, and learning, in that? Besides, now that you have the secret sauce, you can easily add a header to the image and create other types of diskette/tape images. It's the same process with different options. Go ahead and explore them all!

## Join the Fun

Help make this series better! Post feedback, questions, and ideas. Let me know if you are following along. Let's make this a community project. For now, Leave your comments and thoughts below or in the comments [under the YouTube video](https://youtu.be/iiuS-cI2c6s).

🕹️ retroCombs OUT!
