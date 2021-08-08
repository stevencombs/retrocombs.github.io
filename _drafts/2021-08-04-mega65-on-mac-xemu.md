---
layout: post
title: 'Run a MEGA65 on your Mac using Xemu'
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

As a MEGA65 DevKit owner, I've created [much content](https://www.stevencombs.com/mega65) to share what's coming when my favorite Commodore "what could have been" retro computer is released. I'm not going to go into depth about the MEGA65. Check out my [MEGA65 page](https://www.stevencombs.com/mega65) for that information. In this post, I will show you how to get started with the MEGA65 while you wait and without the need for hardware such as the DevKit.

In this post, I share how to install Xemu on Mac OS X. What's Xemu? Let's go right to the source:

> [Xemu](https://github.com/lgblgblgb/xemu) (full name: X-Emulators) is a collection of emulators running on Linux/Unix/Windows/MacOS of various (mainly 8-bit) machines, including - but not limited to - the Commodore LCD, Commodore 65 and MEGA65. And yes, that's an "X" in the name, not "Z" :)

The MEGA65 part of that description is what we are interested in. Let's get started setting up a complete MEGA65 emulation environment on your Mac.

> **NOTE:** I share the installation of Xemu on a Mac. I do not own a Windows computer and cannot help with that install process. If Linux users want these same instructions, drop be a comment below. I have a Manjaro Linux distribution installed and ready to go.

## YouTube Video: _retroCombs:  Starter Guide_

In the video below, I demonstrate how to install Xemu on Mac OS X to emulate a MEGA65.

<div style="position:relative;padding-top:56.25%;"><p><iframe src="link" frameborder="0" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true" style="position:absolute;top:0;left:0;width:100%;height:100%;"></iframe></p></div>

## Video Errata

None as of 2021-08-04.

## Links Mentioned in this Episode:

Below are the links I mention in the video. All Amazon links are affiliate links. Thanks for supporting the blog and the YouTube channel!

1. [MEGA65](https://mega65.org/)
2. [Xemu](https://github.com/lgblgblgb/xemu)
2. [Dev Kit](https://shop.trenz-electronic.de/en/Products/MEGA65/)

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

We'll configure Xemu to operate in the next section; however, congratulations! MEGA65 emulation is now running on your Mac.

## Configure Xemu

With Xemu running, let's configure the emulator with all the items we need to have an operational MEGA65 emulator running on our Mac. Read number 6 in the previous section and follow the steps below:

1. Right-click in the Xemu window and a menu will appear.
2. From the menu, use the mouse/trackpad to select *SD-card* \| *Update files on SD image*. The *select your ROM image file* window will appear; however, we've not downloaded a `.ROM` file yet. Let's do this next.

    > **NOTE:** There are two `.ROM` versions available for the MEGA65. The first is an official licensed `.ROM` that is available with a MEGA65 DevKit, or later a MEGA65, purchase. The second is an in development community open `.ROM`. I will demonstrate how to install the DevKit ROM; however, the process for the open ROM is the same. Visit [Open ROMs for MEGA65](https://files.mega65.org?id=8aec2fba-3b0a-4677-80ae-7a7f5f4f0cb8) page on the [MEGA65 Files Host](https://files.mega65.org/html/main.php) to download the open ROM if you don't have access to the a licensed ROM.

3. Close the Xemu app.
8. Start the xmega65 application.
9. Right-click in the Xemu window and a menu will appear.
10. From the menu, use the mouse/trackpad to select *SD-card* \| *Update files on SD image*. The *select your ROM image file* window will appear.
11. Navigate to the the `MEGA65.ROM` file. The location does not matter because it will be copied to the *SD-card*.
12. Select the file and click *OK*. The prompt below will display:

    ``` System files on your SD-card image seems to be updated successfully. Next time you may need this function, you can use MEGA65.ROM which is a backup copy of your selected ROM. MEGA65 emulation is about to RESET now! ```
    
12. Click the *OK* button. You may receive the error below:

    ``` ROM version cannot be detected, and DMA revision auto-detection was requested. Defaulting to revision 1. Warning, this may cause incorrect behavior! ```
    
13. Click the *OK* button and Xemu will boot as shown in the image below:

    ![Xemu with MEGA65 licensed ROM](https://www.stevencombs.com/mega65/images/xemu-licensed-rom.png)

    > *NOTE:* If you use the Open ROM, the screen will look like the image below:

    ![Xemu with MEGA65 Open ROM](https://www.stevencombs.com/mega65/images/xemu-open-rom.png)
    
    Congratulations! You now have a complete working version of Xemu running the open MEGA `.ROM` file. You are ready to explore the wonders of the MEGA65 – if only you knew what to do next! Let's cover that in the next section.

## Usage

[General Usage Page](https://github.com/lgblgblgb/xemu/wiki/General-usage)

[MEGA65 Quick Start for Xemu](https://github.com/lgblgblgb/xemu/wiki/MEGA65-quickstart)

## Keyboard

The table below outlines the Xemu keyboard arrangement and features for the MEGA65.

### Function Keys

Use the function keys as shown in the table below:

| F-Key | Function |
|:--|:--|
| F1 | Switch between 40/80 Column mode |
| F2 | N/A |
| F3 | `DIRECTORY` |
| F4 | `DIR "*=PRJ"` |
| F5 | Move left one word |
| F6 | `KEY6` |
| F7 | Move right one word |
| F8 | `MONITOR` |
| F9 | Exit Xemu |
| F10 | Reset Xemu |
| F11 | Full-screen mode |
| F12 | N/A |

### Modify the `keyboard-default.cfg` file

Below is the default `keyboard-default.cfg` file found in the system folder:

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

## Join the Fun
You won't want to miss that fun, so make sure you <font color="red">SUBSCRIBE</font> to my [YouTube channel](https://www.youtube.com/stevencombs).

Help make this series better! Post feedback, questions, and ideas. Let's make this a community project. For now, Leave your comments and thoughts below or in the comments [under the YouTube video](link).

Thanks for watching and please let other Commodore fans know about my MEGA65 series of posts by sharing on social media using #retroCombs.

🕹️ retroCombs, OUT!