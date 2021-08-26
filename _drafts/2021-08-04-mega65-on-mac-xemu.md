---
layout: post
title: 'Run a MEGA65 on your Mac using Xemu's xmega65'
date: '2021-08-04'
author: 'Steven B. Combs, Ph.D.'
permalink: xemu
email: 'steven.combs@gmail.com'
comments: 'yes'
category: retro
tags:
  - commodore
  - retro
  - mega65
  - emulator
---

As a MEGA65 DevKit owner, I've created [much content](https://www.stevencombs.com/mega65) to share what's coming when my favorite Commodore "what could have been" retro computer is released. I'm not going in depth about the MEGA65 in this post and companion video. Check out my [MEGA65 page](https://www.stevencombs.com/mega65) for that information. In this post, I will show you how to get started with the MEGA65, on your Apple Mac computer, while you wait for the hardware to arrive.

To do this, I share how to install the *Xemu* emulator, *xmega65*. What's *Xemu*? Let's go right to the source:

> [Xemu](https://github.com/lgblgblgb/xemu) (full name: X-Emulators) is a collection of emulators running on Linux/Unix/Windows/MacOS of various (mainly 8-bit) machines, including - but not limited to - the Commodore LCD, Commodore 65 and MEGA65. And yes, that's an "X" in the name, not "Z" :)

The MEGA65 part of that description is where our interest lies today. Let's set up a complete MEGA65 emulation environment on a Mac. I'll use a Mac mini (M1); however, I developed this process on my MacBook Pro (M1). Although the *Xemu* is native to Intel Macs, it does work on the new Apple M1 processor using Apple's Rosetta. I've yet to find any issues. **Side note:** These [new M1 Macs](https://amzn.to/3B8vzOh) are amazing! I recommend if you are looking for a new computer or own an older Mac. Affordable, powerful, and the perfect compliment to the MEGA65 as one of the few brands from the 1980s with us today.

> **NOTE:** I share the installation of Xemu on a Mac. I do not own a Windows computer and cannot help with that install process. If Linux users want these same instructions, drop be a comment below. I have a Manjaro Linux distribution installed and ready to go.

## Table of Contents

{{TOC}}

## YouTube Video: _retroCombs:  Starter Guide_

In the video below, I demonstrate how to install Xemu to emulate a MEGA65 on a Mac computer.

<div style="position:relative;padding-top:56.25%;"><p><iframe src="link" frameborder="0" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true" style="position:absolute;top:0;left:0;width:100%;height:100%;"></iframe></p></div>

## Video Errata

None as of 2021-08-22.

## Links Mentioned in this Episode:

Below are the links I mention in the video. All Amazon links are affiliate links. Thanks for supporting the blog and the YouTube channel!

1. [MEGA65](https://mega65.org/)
2. [Xemu](https://github.com/lgblgblgb/xemu)
2. [Dev Kit](https://shop.trenz-electronic.de/en/Products/MEGA65/)
3. [Mac mini (M1)](https://amzn.to/3sE2qHp)
4. [MacBook Pro (M1)](https://amzn.to/3go2jL8)
5. [Create a Commodore Disk Image](https://www.stevencombs.com/pi1541-2)

## Download and Install Xemu

Let's begin by downloading Xemu using the steps below:

1. Visit the [Xemu page](https://github.lgb.hu/xemu/). On this blueish page, you will find two headings; *The 'future next stable' still unstable ("next" branch) builds* and *MEGA65/VIC-IV emulation enhancements ("merger" branch) builds*.
2. Scroll down to the *MEGA65/VIC-IV emulation enhancements ("merger" branch) builds* header.
3. Click the *‌MacOS DMG file* option to download the `Xemu-Installer.dmg` file.

    > M1 Mac users will note that the Mac Xemu build, as of this writing, is for Intel processors; however, Rosetta on the M1 will run Xemu and likely run it faster!

4. Locate the download (likely in your *Downloads* folder).
5. Double-click the `Xemu-Installer.dmg` file to mount the disk image and display the *GNU GENERAL PUBLIC LICENSE* window.
6. Click the *Agree* button. The Mac will display the 'Xemu-Installer' window, as shown below:

    ![Xemu Installer Window](https://www.stevencombs.com/mega65/images/xemu-installer-window.png)  

7. Locate the `xmega65.app` file and drag it to the *Applications* folder.

    > **NOTE:** You can drag other Xemu emulators to the *Applications* folder, but I won't discuss how to configure and use them in this post.

8. Close the `Xemu-Install.dmg` disk image window and eject the disk image. Optionally, delete the file in the *Downloads* folder.

With Xemu installation complete, we can now run it for the first time; however, don't get excited yet!

## Start Xemu

Starting Xemu is as simple as:

1. Double click the `xmega65.app` in the *Applications* folder or optionally, use a launcher such as Alfred (my preferred) to start the application. A dialog box will appear to ask you if you are sure you want to open this app downloaded from the Internet.
2. Select the *Open* button and another dialog box will display stating:

    ``` Cannot open file requested by @nvram.bin: No such file or directory Tried as: /Users/<user_name>/Library/Application Support/xemu-lgb/mega65/nvram.bin. Cannot load NVRAM state. Maybe first run of Xemu? On next Xemu run, it should have been corrected though automatically! So no need to worry. ```

3. Click the *OK* button and another warning will display stating:

    ``` Cannot open SD-card image /Users/<user_name>/Library/Application Support/xemu-lgb/mega65/mega65.img, SD-card access won't work! ERROR: No such file or directory ```
    
4. Click the *OK* button and one more dialog box will display stating:

    ``` Default SDCARD image does not exist. Would you like me to create one for you? Note: it will be a 4Gbytes long file, since this is the minimal size for an SDHC card, what MEGA65 needs. Do not worry, it's a 'sparse' file on most modern OSes which does not takes as much disk space as its displayed size suggests. This is unavoidable to emulate something uses an SDHC-card. ```
    
5. Click the *Yes* button to create the SDCARD image and Xemu will display the following:

    ``` Your just created SD-card image file has been auto-fdisk/format'ed by Xemu. Great :). ```
    
6. Click the *OK* button and Xemu will display the following:

    ``` Cannot find Xemu's signature on the SD-card image. Please use UI menu: SD-card -> Update files ... UI can be accessed with right mouse click into the emulator window. ```
    
7. Click the *OK* button and the MEGA65 emulator will try and boot; however, the boot cycle will not complete because no `MEGA65.ROM` file is available.

We'll configure Xemu, now *xmega65*, to operate in the next section; however, congratulations! MEGA65 emulation is now running on your Mac.

## Configure *xmega65*

With *xmega65* running, let's configure the emulator with all the items we need to have an operational MEGA65 emulator running on our Mac. Read number 6 in the previous section and follow the steps below:

1. Right-click in the *xmega65* window and a menu will appear.
2. From the menu, use the mouse/trackpad to select *SD-card* \| *Update files on SD image*. The *select your ROM image file* window will appear; however, we've not downloaded a `.ROM` file yet. Let's do this next.

    > **NOTE:** There are two `.ROM` versions available for the MEGA65. The first is an official licensed `.ROM` that is available with a MEGA65 DevKit, or later a MEGA65, purchase. The second is an in development community open `.ROM`. I will demonstrate how to install the DevKit ROM; however, the process for the open ROM is the same. Visit [Open ROMs for MEGA65](https://files.mega65.org?id=8aec2fba-3b0a-4677-80ae-7a7f5f4f0cb8) page on the [MEGA65 Files Host](https://files.mega65.org/html/main.php) to download the open ROM if you don't have access to the a licensed ROM.

3. Close the *xmega65* app.
8. Start the *xmega65* application.
9. Right-click in the *xmega65* window and a menu will appear.
10. From the menu, use the mouse/trackpad to select *SD-card* \| *Update files on SD image*. The *select your ROM image file* window will appear.
11. Navigate to the the `MEGA65.ROM` file. The location does not matter because it will be copied to the *SD-card*.
12. Select the file and click *OK*. The prompt below will display:

    ``` System files on your SD-card image seems to be updated successfully. Next time you may need this function, you can use MEGA65.ROM which is a backup copy of your selected ROM. MEGA65 emulation is about to RESET now! ```
    
12. Click the *OK* button. You may receive the error below:

    ``` ROM version cannot be detected, and DMA revision auto-detection was requested. Defaulting to revision 1. Warning, this may cause incorrect behavior! ```
    
13. Click the *OK* button and *xmega65* will boot as shown in the image below:

    ![*xmega65* with MEGA65 licensed ROM](https://www.stevencombs.com/mega65/images/xemu-licensed-rom.png)

    > *NOTE:* If you use the Open ROM, the screen will look like the image below:

    ![Xemu with MEGA65 Open ROM](https://www.stevencombs.com/mega65/images/xemu-open-rom.png)
    
    Congratulations! You now have a complete working version of *xmega65* running the open MEGA `.ROM` file. You are ready to explore the wonders of the MEGA65 – if only you knew what to do next! Let's cover that in the next section.

## Access Configuration Files

You will want quick access to configuration files. I recommend you create a desktop (or other accessible location) symbolic link or alias to:

`~/Users/{user_name}/Library/Application Support/xemu-lgb/mega65`

In the folder are the following items:

```
├── CHARROM.ROM
├── MEGA65.ROM
├── 📁 default-files
├── keymap-default.cfg
├── mega65-template.cfg
├── mega65.img
├── nvram.bin
├── 📁 screenshots
└── uuid.bin
```

The two folders, `default-files` and `screenshots` are empty. When you take a screenshot in the application, it appears here; which is why I recommend a symbolic link for quick access.

The two `.cfg` files, `keymap-default.cfg` and `mega65-template.cfg` are user definable. I recommend no edits `mega65-template.cfg` until you have comfort with the settings and understand how a MEGA65 works.

On the other hand, I use a MacBook Pro and not all keys mapped to a 104 PC keyboard in the `keymap-default.cfg` file are available. I plan to create my own MacBook specific keycap. When I do, I'll share on this blog and include on GitHub. More on this later.

Below is the default `keyboard-default.cfg`:

```
# default settings for keyboard mapping
# copy this file to filename 'keymap.cfg' in the same directory, and customize (this file is OVERWRITTEN every time, you must copy and customize that one!)
# you can also use the -keymap option of the emulator to specify a keymap file to load (if the specific Xemu emulator supports, use -h to get help)
# Syntax is: EMU-KEY-NAME PC-KEY-NAME
# one assignment per line (EMU-KEY-NAME is always uppercase and one word, while PC-KEY-NAME is case/space/etc sensitive, must be put as is!)
# EMU-KEY-NAME ends in '*' means that it's a virtual key, it is emulated by emulating pressed shift key at the same time
# special line CLEARALLMAPPING can be put to clear all existing mappings, it make sense only as the first statement
# without CLEARALLMAPPING, only maps are modified which are part of the keymap config file, the rest is left at their default state
# PC-KEY-NAME Unknown means that the certain feature for the emulated keyboard is not mapped to a PC key
# EMU-KEY-NAME strings starting with XEMU- are special Xemu related 'hot keys'

# MEGA | MAC

DEL Backspace
RETURN Return
RIGHT Right
LEFT* Left
F7 F7
F8* F8
F1 F1
F2* F2
F3 F3
F4* F4
F5 F5
F6* F6
DOWN Down
UP* Up
3 3
W W
A A
4 4
Z Z
S S
E E
LSHIFT Left Shift
5 5
R R
D D
6 6
C C
F F
T T
X X
7 7
Y Y
G G
8 8
B B
H H
U U
V V
9 9
I I
J J
0 0
M M
K K
O O
N N
PLUS Insert
P P
L L
MINUS -
PERIOD .
COLON '
AT [
COMMA ,
POUND Delete
ASTERISK ]
SEMICOLON ;
CLR Home
RSHIFT Right Shift
EQUALS =
UARROW \
SLASH /
1 1
LARROW `
CTRL Left Ctrl
2 2
SPACE Space
COMMODORE Left Option
Q Q
RUNSTOP End
RESTORE PageDown
CAPSLOCK Unknown
NOSCROLL Unknown
TAB Tab
ALT Right Option
HELP PageUp
F9 Unknown
F11 Unknown
F13 Unknown
ESC Escape
XEMU-EXIT F9
XEMU-FULLSCREEN F11
XEMU-JOY-FIRE Keypad 5
XEMU-JOY-FIRE Keypad 0
XEMU-JOY-FIRE Right Ctrl
XEMU-JOY-UP Keypad 8
XEMU-JOY-DOWN Keypad 2
XEMU-JOY-LEFT Keypad 4
XEMU-JOY-RIGHT Keypad 6
```

## Usage

Once *xmega65* starts, you are ready to begin your journey into the world of the MEGA65. If you are familiar with 1980s 8-bit computers, and especially the Commodore varieties, you will feel at home with a simple program like the one below:

```
10 ? "RETROCOMBS ";
20 FOR X = 1 to 100 : NEXT
30 GOTO 10
```

Go ahead, give it try. I'll wait. Now that I have *xmega65* locked up in a continual self-promoting loop, you probably want to know where the `RUN/STOP` key is. That key didn't find its way into modern computers; however, if you look at that keyboard configuration file in the previous section, we find that the END is mapped to the `RUN/STOP` key. But wait! If you are on a MacBook, there's no `END` key either! Never fear. `FN` + `→` is the equivalent of the `END` key and therefore mapped to `RUN/STOP` on *xmega65*. 

Another Commodore key not available on the MacBook Pro is `HOME`. Similar to `END`; use `FN` + `‌←`.

These two keys are the most useful and confusing, unless you know the secret sauce. With those two keys, new and seasoned Commodore users can begin their journey into BASIC on the MEGA65 with *xmega65* on their Mac.

If you want a more familiar Commodore 8-bit experience, press `F1`  to switch between 40 and 80 column (default) mode. Remember on the Mac you need to hold down the `fn` key and then tap the corresponding top row key.

### *xmega65* Menus

On the Mac, *xmega65* does not place options in the Apple menu bar. Instead, you access menus with a right-click of a mouse or two-finger tap on a trackpad as shown in the image below:

![xmega65 menus](https://www.stevencombs.com/mega65/images/xemu-open-rom.png)

[MEGA65 Quick Start for Xemu](https://github.com/lgblgblgb/xemu/wiki/MEGA65-quickstart)

[General Usage Page](https://github.com/lgblgblgb/xemu/wiki/General-usage)

### Commodore 64 Mode

While MEGA65 mode may be what you see first, lurking in the code is a full function Commodore 64 emulator. Use the steps below to access C64 mode:

1. Type `GO64`. *xmega65* will display the prompt, `ARE YOU SURE?`
2. Type `Y` and hit ⏎. *xmega65* will enter C64 mode.

The C64 emulation for the MEGA65 and, subsequently, *xmega65* is not fully baked yet. This mode is good for BASIC; however, you will run into compatibility issues with games and software. This will get better with time.

### Function Keys

The *xmega65* function keys perform the functions shown in the table below:

| F-Key | Function                               |  
| :---- | :------------------------------------- |  
| `F1`  | Switch between 40/80 Column mode       |  
| `F2`  | N/A                                    |  
| `F3`  | List the `DIRECTORY` of disk           |  
| `F4`  | `DIR "*=PRJ"` lists .PRJ files on disk |  
| `F5`  | Move left one word                     |  
| `F6   | `KEY6`                                 |  
| `F7`  | Move right one word                    |  
| `F8`  | Enter the machine language `MONITOR`   |  
| `F9`  | Exits *xmega65*                        |  
| `F10` | Reset *xmega65*                        |  
| `F11` | Full-screen mode                       |  
| `F12` | N/A                                    |  

I use `F1` and `F3` the most. I find I like the original 40 character screen width and `F3` is in my muscle memory from my [Commodore Plus/4 series](https://www.stevencombs.com/plus4).

## Load Software

There are several ways you can load and run software. This section will cover the most common methods.

### Use the default `.d81` disk image

By default, a blank .d81 file is mounted to *xmega65*. You can mount others and we will do this later; however, let's play with the default.

1. Type `DIR` and `⏎`. The empty default directory will display and the disk image as the name "????".
2. Type `HEADER "RETROCOMBS",I65" and `⏎` to reformat the default image with the name `RETROCOMBS` or change this to what you would like the name to be. The screen will blank as it formats the virtual disk image. The screen returns when format is complete.
3. Type `DIR` and `⏎`. The directory will display the disk image with the new name. You can now use the `DSAVE` and `DLOAD` commands to store BASIC programs.

You may wonder where this `.d81` disk image is stored. This is helpful information if you decide to use this image for development and want to transfer the contents to the SD card of a physical MEGA65. You can mount another `.d81` for this same scenario and we will cover that next; however, identifying this `.d81` image location will help your understanding of how *xmega65* works.

Remember the symbolic link we created earlier? Double-click it and you will see the directory listing again. In that listing is a file with the name `mega65.img`. Because the Mac can mount `.img` files, double-click it. It will mount and locate the image  on the desktop. Double-click and you will see the files shown in the image below:

![Contents of `mega65.img`](https://www.stevencombs.com/mega65/images/mega65-disk-image.png)

The content of this disk image mirrors what you find on the SD card for a physical MEGA65. While this image is mounted, you can modify the contents. I do not recommend this until you know what you are doing. It is easier to manage `.d81` images external of the image file. Back to our question. Which `.d81` files is the default for *xmega65*?

In the image above, the default `.d81` file highlighted and named; `MEGA65.D81`. Were you expecting it to be named `RETROCOMBS`? Remember, the format name is used and store inside the emulated file. The Mac (or Linux/Windows) OS side is unique. Don't rename the OS side file name (`MEGA65.D81`) or *xmega65* will not find it. This is the required default name (and the same holds true on the physical MEGA65).

After you've explored, and not modified, the disk image; eject it from the Mac. Until you have more familiarity with this disk image, I recommend you forget all about it. Noodling around with it will corrupt your installation causing you to be MEGA65-less. And who wants that?

### Mount a `.d81` disk image

You can use other disk images and mounting them is easy. You can use the menus as shown in the image below, or you can drag-and-drop the image onto the *xmega65* window.

![Loading a disk image](https://www.stevencombs.com/mega65/images/xemu-mount-disk.png)

When you drag a disk image on the *xmega65* window, you will see the dialog box below. For a disk image, select the *MOUNT as D81* option.

![Disk image confirmation](https://www.stevencombs.com/mega65/images/xemu-mount-disk-imaga-confirmation.png)

After the selection is made, use the `DIR` command to view the contents of the image. If you want two disk images mounted in devices 8 and 9, use must use the menus to select both disk images using *Finder*.

> **NOTE:** Drag-and-drop function work both in MEGA65 and C64 modes. This is a feature of *xmega65* and not the emulated device ROMs.

### Drag and drop `.PRG` files

There are times when you locate a program file not on a disk image but in a `.PRJ` file. You do not need to [create a disk image](https://www.stevencombs.com/pi1541-2), move this file to the image, and then mount the image. Running a `.PRJ` file is as simple as drag-and-drop the file onto the *xmega65* window. The *xmega65* dialog box below will appear:

![Disk image confirmation](https://www.stevencombs.com/mega65/images/xemu-mount-disk-imaga-confirmation.png)

For a `.PRJ` file, select the *RUN/inject as PRJ* option. The program will load and run.

## Final Thoughts

This is a great way to take the MEGA65 environment with you on the road. The keyboard mapping confuses things; however, after time, the muscle memory kicks in. There's not an easy way to sync disk images and move them back and forth between *xmega65* and a MEGA65. I'm hopeful that once the Ethernet port on the MEGA65 see wide use, someone will develop a way to drop a disk image onto a cloud sync'd folder (such as Google Drive our Dropbox) for easy access.

Now that I know how to use **xmega65**, I have this nagging feeling in the back of my brain that I should try to install this on a Linux device or Raspberry Pi. Something similar to [my Combian pi/400](https://www.stevencombs.com/combianpi400-1) would be of interest as a portable device.

The emulator is a work in progress and while you can use either an official ROM or an Open ROM, the Open ROM needs much more work and the official ROM is not yet available unless you own a DevKit. Please don't ask me to share it. I like being a part of the [MEGA65 development community](https://discord.com/channels/719326990221574164/) and would hate to be thrown out!

## Join the Fun
You won't want to miss that fun, so make sure you <font color="red">SUBSCRIBE</font> to my [YouTube channel](https://www.youtube.com/stevencombs).

Help make this series better! Post feedback, questions, and ideas. Let's make this a community project. For now, Leave your comments and thoughts below or in the comments [under the YouTube video](link).

Thanks for watching and please let other Commodore fans know about my MEGA65 series of posts by sharing on social media using #retroCombs.

🕹️ retroCombs, OUT!