---
layout: post
title: 'Run a MEGA65 on your Chromebook using Xemu'
date: 2022-08-01
author: 'Steven B. Combs, Ph.D.'
email: 'retrocombs@icloud.com'
comments: yes
permalink: mega65-on-chromeos
tags:
  - commodore
  - chrome os
  - linux
categories: 
  - mega65
  - chromeos
  - linux
---

In the post [Run a MEGA65 on your Mac using Xemu](https://www.stevencombs.com/xemu-on-mac), I show how to install the XEMU emulator for the MEGA65, _xmega65_, on a Mac. It's time to stretch my operating system’s legs and install it on another popular system. No, I'm not installing on Windows but on an operating system that may surprise many; ChromeOS!

![XEMU on ChromeOS](https://media.discordapp.net/attachments/781481205639020554/996588525778649168/XEMU_on_ChromeOS.png?width=1755&height=1170)

The process to install Xemu on ChromeOS is, unsurprisingly, similar to the Linux version since I'll use a Linux container on ChromeOS. But don't let that scare you. The Linux container feature is now out of beta and it has never been easier to install Linux apps on your Chromebook. Xemu is ready to download as an easy to install `.deb` file for Intel-based ChromeOS devices. If you have an ARM-based ChromeOS device, I have you covered. It is a more involved process, but if you follow my steps closely, you will have the MEGA65 emulator up and running in no time. Let's get started!

----

## Table of Contents

- [Table of Contents](#table-of-contents)
- [Support the Blog and Channel](#support-the-blog-and-channel)
- [Companion YouTube Video](#companion-youtube-video)
- [Video Errata](#video-errata)
- [Links Mentioned in this Episode](#links-mentioned-in-this-episode)
- [Identify ChomeOS Device Processor](#identify-chomeos-device-processor)
- [Create a Linux Container](#create-a-linux-container)
- [Share the Downloads Folder with Linux Container](#share-the-downloads-folder-with-linux-container)
- [Install Xemu on ChromeOS Intel](#install-xemu-on-chromeos-intel)
  - [Download and Install Xemu on Chrome OS Intel](#download-and-install-xemu-on-chrome-os-intel)
  - [Start xmega65 on ChromeOS Intel](#start-xmega65-on-chromeos-intel)
- [Install Xemu on ChromeOS ARM](#install-xemu-on-chromeos-arm)
  - [Build and Install an XEMU `.deb` File for Chrome OS ARM](#build-and-install-an-xemu-deb-file-for-chrome-os-arm)
  - [Build the xmega65 Emulator Only for ChromeOS ARM](#build-the-xmega65-emulator-only-for-chromeos-arm)
    - [Start xmega65 on ChromeOS ARM](#start-xmega65-on-chromeos-arm)
    - [Create a Launcher Entry](#create-a-launcher-entry)
- [Download the MEGA65 ROM](#download-the-mega65-rom)
- [Update Files on SD card Image](#update-files-on-sd-card-image)
- [Using xmega65](#using-xmega65)
- [Limitations](#limitations)
- [What's Next?](#whats-next)
- [Join the Fun](#join-the-fun)

----

## Support the Blog and Channel

Check out the [supporters page](https://www.stevencombs.com/supporters) to learn about my amazing supporters and how you can join our community.

## Companion YouTube Video

Title: _Run a MEGA65 on your Chromebook in a Linux Container_

<div style="position:relative;padding-top:56.25%;"><p><iframe src="https://www.youtube.com/embed/z65O6bxIkaY" frameborder="0" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true" style="position:absolute;top:0;left:0;width:100%;height:100%;"></iframe></p></div>

## Video Errata

2022-08-02:

- New recommendation from Gurcé in the [Start xmega65 on ChromeOS ARM](#start-xmega65-on-chromeos-arm) section.
- Developer Deft let me know that the C65 ROMs are available in the FREE version of Cloanto's C64 Forever package!

## Links Mentioned in this Episode

Below are the links I mention in this blog post and companion video. All Amazon links are affiliate links. I’d like to thank everyone for your support of the blog and the YouTube channel when you start your purchases here!

- [Lenovo Duet 5 - ARM](https://amzn.to/3vz3Yp9)
- [Google Pixelbook - Intel](https://amzn.to/3aASgmE)
- [Google Pixel Slate - ARM](https://amzn.to/3o6S8hL)
- [Xemu page](https://github.lgb.hu/xemu/)
- [MEGA65 FilesHost](https://files.mega65.org)
- [Patch the Original Commodore 65 ROM for the MEGA65, Xemu, Dev Kit, or Nexys4](https://www.stevencombs.com/mega65/2021-12-17-patch-c65-rom.md)
- [TheC64 Joystick](https://amzn.to/3d0UITW)
- [Hyperkin Tropper II Joystick](https://amzn.to/3zqN90p)

## Identify ChomeOS Device Processor

If you are not sure if you have an Intel or ARM processor in your Chromebook, download [Cog - System Info Viewer](https://chrome.google.com/webstore/detail/cog-system-info-viewer/difcjdggkffcfgcfconafogflmmaadco) from the ChromeOS app store. Run to view the specifications of your device. Look under the second option, _Platform_ to identify the processor.

## Create a Linux Container

The process to create a Linux Container is the same for both Intel and ARM based ChromeOS devices and is necessary to install Linux apps on ChromeOS. The default ChromeOS container is a [Debian distribution](https://www.debian.org/) and since the Xemu package for Linux is based on Ubuntu, and Ubuntu is based on Debian, this allows Xemu to run on ChromeOS. Below are the steps to set up a Linux container on ChromeOS.

1. Use the _Launcher_ and open the _Settings_ app.

2. Use the settings search and type `Linux`. The _Turn on_ option will appear.

3. Select the _Turn On_ option.

4. Select _Enable Linux_. ChromeOS will create a Linux container and download the required files to install a Debian distribution.

5. Open the _Launcher_.

6. Select the newly created Linux Group.

7. Select the new _Terminal_ entry. A terminal window will load. We will use this window several times to install the MEGA65 emulator.

The Linux container includes other options; however, they are beyond this post and we don't need to change the default.

## Share the Downloads Folder with Linux Container

By default and for security, ChromeOS folders, including the _Downloads_ folder, are not available to the Linux containers. You must share them. This is an easy process.

1. Open the ChromeOS _Files_ application.

2. Right-click on the _Download_ folders in the left-hand quick access area and a menu will appear.

3. Select the _Share with Linux_ option.

The Linux container can now access the contents of Downloads folder, but not in an easy to find location. We'll locate the directory when we load the ROM file.

## Install Xemu on ChromeOS Intel

With a Linux container created and a folder shared on ChromeOS Intel, Xemu installation is a breeze when you use a `.deb` installation file.

### Download and Install Xemu on Chrome OS Intel

To install Xemu, use the steps below:

1. Visit the [Xemu page](https://github.lgb.hu/xemu/). On the page, you will find two headings; _Stable ("master" branch) releases_ and _The 'future next stable' still unstable ("next" branch) builds._

2. Scroll down to the header _The 'future next stable' still unstable ("next" branch) builds_.

3. Click the _Ubuntu Linux 20.04 64-bit DEB package_ option to download the `xemu_current_amd64.deb` file.

4. Open the _Downloads_ folder using the ChromeOS File application and locate the `.deb` file.

5. Double-click the `.deb` file. A dialog box will prompt to install the application.

6. Click the _INSTALL_ button.

With Xemu installed, we can now run it for the first time; however, don't get excited yet! We have some work ahead.

### Start xmega65 on ChromeOS Intel

Xemu installs several new entries in the Launcher. Other options include additional Commodore emulators. One interesting emulator is the Commodore LCD computer that was never released.

Double-click the _xmega65_ option. The application will start. The application window is tiny. Resize the window until it suits you. Prompts will ask you to make several decisions. I show these in the companion video but always use the default options _OK_ and _YES_ the first time you open the emulator.

We are now ready to install a ROM. Skip down to the [Download the MEGA65 ROM](#download-the-mega65-rom) section.

## Install Xemu on ChromeOS ARM

There are two options to install Xemu on ChromeOS devices that use an ARM processor. We can build a machine specific `.deb` file and install as shown previously or we can build just the _xmega65_ emulator. The last option also requires us to tweak our system and create our own _Launcher_ option. 

Both solutions have their pluses and minuses. You will need to decide which is best for you. Personally, I only build the xmega65 emulator and create my own *Launcher* option.

Before we install using either option, we must first install required dependencies:

1. Using the Launcher, load the _Terminal_ application.

2. Follow the series of _Terminal_ commands below.

> __NOTE:__ Xemu includes several emulators; however, this process will only compile the MEGA65 emulator _xmega65_.

```
sudo apt update
sudo apt install git build-essential libsdl2-dev libgtk-3-dev libreadline-dev nano
```

Next, clone the Xemu GitHub repository using the commands below:

```
cd ~
git clone https://github.com/lgblgblgb/xemu.git
```

We will use these dependencies and the repository for both ChromeOS ARM options. Let's start by building our own custom `.deb` install file.

### Build and Install an XEMU `.deb` File for Chrome OS ARM

Use the _Terminal_ commands below to create a `.deb` file:

```
cd ~/xemu
make deb
```

The process will take time, but in the end you will have a `.deb` in the ~/build/bin directory. Move the file to the home directory using the command below:

`mv xemu_20220613133247_arm64.deb ~`

Note the name of your file may be different with the date string based on the version of the Xemu repository.

The installation file is now accessible using the ChromeOS _Files_ application. Install it using the steps below:

1. Open the _Files_ application.

2. Choose Linux Files from the left-hand bookmarks. The installation file will appear. 

3. Right-click on the file.

4. Choose the _Install with Linux Option.

5. Click the _Install_ button. The file will install all Xemu emulators and place icons in the ChromeOS _Launcher_.

6. Select _xmega65_ from the _Launcher_ to load the MEGA65 emulator.

You are now ready to install a ROM. Skip down to the [Download the MEGA65 ROM](#download-the-mega65-rom) section.

### Build the xmega65 Emulator Only for ChromeOS ARM

If you want the xmega65 emulator, and not all Xemu emulators, use the _Terminal_ commands below:

```
cd ~
make targets/mega65
```

The _xmega65_ is compiled and ready to run on the ARM ChromeOS device.

> **NOTE:** You can make a `.deb` from this directory. Use the command `make targets/mega65 deb`.

#### Start xmega65 on ChromeOS ARM

In the _Terminal_ use the command below to start xmega65:

`./xemu/build/bin/xmega65.native`

The emulator will start. If the window is too small, resize it. Prompts will ask you to make several decisions. I show these in the companion video but always use the default options _OK_ and _YES_ the first time you open the emulator. 

Close the emulator. We make things easier for future launching and create a _Launcher_ item.

#### Create a Launcher Entry

To launch xmega65 from anywhere within the _Terminal_, move the `xmega65.native` file to the _bin_ folder using the command below:

`sudo mv ~/xemu/build/bin/xmega65.native /bin/xmega65`

<hr></hr>

Developer and retroCombs supporter, Gurcé, made an excellent recommendation on my Discord Channel:

> I had a thought for an alternate approach that might be worth sharing: `sudo mv ~/xemu/build/bin/xmega65.native /bin/xmega65`
>
> As an alternative to this approach, you can try use a symbolic link  (ln -s from to) instead: `sudo ln -s /home/stevencombs/xemu/build/bin/xmega65.native /bin/xmega65`
>
> This has the advantage that if you ever want to grab the latest version of xemu from github, you'll just need to do: `git pull` and then a `make -C targets/mega65`
>
> (no need to do an extra mv step, as the symbolic link still points to your latest built binary)
>

<hr></hr>


You can now launch the emulator anywhere within the _Terminal_ using the simple command, `xmega65`.

Running _xmega65_ from the _Terminal_ may not be everyone's cup of tea. Installation on an Intel device using a `.deb` file automatically creates a _Launcher_ entry. On ARM systems, this is not the case (for now). We can create a _Launcher_ entry using the steps below:

1. Enter the command `mkdir ~/.local/share/applications` to create a folder to contain a Linux `.desktop` file.

2. Enter the command `nano ~/.local/share/applications/xmega65.desktop`. The nano text editor will load.

3. Enter the following into the editor window:

    ```
    [Desktop Entry]
    Name=xmega65
    Exec=xmega65
    Terminal=false
    Type=Application
    ```

4. Tap CTRL + X to exit and save the file. A new _xemga65_ _Launcher_ entry will appear in the Linux group.

5. Click it to load _xmega65_.

With the MEGA65 emulator installed and a _Launcher_ entry created, it is time to install a ROM and start using the MEGA65 emulator.

## Download the MEGA65 ROM

With _xmega65_ installed on both Intel and ARM processor ChromeOS devices, I can now merge the instructions.

Don't let the glowing and text-filled _xmega65_ screen scare you. We don't need to do anything other than install a ROM file from the [MEGA65 FilesHost](https://files.mega65.org). 

I've covered this in other posts and videos, but there is a closed ROM and an open ROM. The closed ROM is for those who own a MEGA65 Dev Kit or MEGA65. I'll show that one in my example since I own both. If you don't own either, you can legally download an original C65 ROM from the free version of the [C64Forever Cloanto](https://www.c64forever.com/) package. You can then patch it using the tools on the FileHost. I document this process in my [Patch the Original Commodore 65 ROM for the MEGA65, Xemu, Dev Kit, or Nexys4](https://www.stevencombs.com/patch-c65-rom) post and video.

If you have access, you can [download the closed ROM here](https://files.mega65.org?id=54e69439-f25e-4124-8c78-22ea7ddc0f1c). On ChromeOS, the file will download directly to your _Downloads_ folder.

## Update Files on SD card Image

To load the ROM, follow the steps below:

1. Right-click anywhere in the _xmega65_ application. A menu, like the one shown below from the Mac version, will appear:

    ![xmega65 menu](https://www.stevencombs.com/images/mega65/xemu-menus.png)

2. Select _Disks_ \| _SD-card_ \| _Update files on SD Image_. A warning dialog will ask, "Use the previously installed ROM?"

3. Select the _No_ option. A file selection dialog box will appear.

4. Select the ROM file downloaded previously and click _OK_. A dialog box will appear to verify an update to the contents of the SD card image.

5. Click the _OK_ button. The emulator will reset with the new ROM.

When the MEGA65 team releases new ROMs, use this same technique to update the emulator.

## Using xmega65

I won't go into all the features of the emulator; however, below are a three things to get you started.

1. Type `INFO` at the prompt.

2. Try your own _hello world_ program using the code below:

    ```
    10 PRINT "HELLO WORLD ";
    20 GOTO 10
    ```
 
3. Download my [MEGA65 Colors BASIC Demo .D81 image file](https://files.mega65.org?id=1813f548-7280-4b73-9112-abc24b90892b) from the FileHost to the _Downloads_ folder. Mount the image using the _xmega65_ menu. List the contents using the `DIR` command and then use the `/` followed by ⏎ to run the program on the disk. No need to clean up the listing after the `/` character. The MEGA65 ROM takes care of that for you.

<!-- RECORD NUMBER 3 ↑ -->

Want more? Time to begin your MEGA65 journey and you can start with my [MEGA65 resource page](https://www.stevencombs.com/mega65).

## Limitations

Since the developer does not support Xemu on ChromeOS, you need to know about these limitations:

1. ~~I've not yet been able to get sound to work reliably. All settings in the emulator for sound are on and correct. A cursory online search leads me to believe this is not unique to XEMU.~~ As of 2022-08-03, sound works. I cannot seem to duplicate my earlier issue with sounds.

2. In the Mac version of XEMU, I can drag and drop `.d81` or `.prg` files from the Finder to XEMU to load them. This is not working from the ChromeOS files app to the XEMU running in the Linux container. This is not surprising. I suspect that if I load a file manager in the Linux container, this will work. If someone gives this a try, or if I do, I'll update this blog post.

3. With other XEMU or Commodore emulator installs, I can plug in a THEC64 Joystick and everything works. Not with Chrome OS on Linux. The container does not recognize the USB device as an option I can allow access. It recognizes the SD card reader built into the USB hub, but not the controller plugged into the hub. I checked to see if TheC64 Joystick was working on the Chromebook with [browser based Gamepad Tester](https://apps.nektro.net/gamepad) and everything checked out. I'll continue to research this one further.

4. If you are new to Commodore computer emulators, you may notice that several keys don't match their position on the ChromeOS keyboard and there are keyboard combinations that are unavailable. _Xmega65_ uses a positional keyboard configuration based on an extended PC keyboard layout. Unless you have an extended ChromeOS keyboard, you will find you can't enter certain symbols. Xemu can overcome this limitation by modifying a `keyboard.cfg` file. I'll continue to work on this file to create something that makes using the ChromeOS keyboard functional and enjoyable. If anyone else wants to get ahead of me on this project, let me know.

I'll continue to research all these important quirks to make using the Xemu emulator, _xmega65, on Chrome OS easier, more productive, and fun. Make sure you [follow the blog](https://www.stevencombs.com) and and [subscribe to the channel](https://www.youtube.com/stevencombs).

## What's Next?

Chromebook devices are more popular than ever and now you can wow your friends and family by running the MEGA65 emulator, a modern retro computer recreation, on the device you use every day. Along this journey, you learned much more about using Linux containers to expand the capabilities of your ChromeOS device.

Earlier, I list three ways you can get started with the emulator; however, below are two additional recommendations from my blog and channel:

1. [Converting a Commodore 128 Submarine Tracking System BASIC Program to the MEGA65](https://www.stevencombs.com/sub-track-sys)

2. [Master the MEGA65 Keyboard](https://www.stevencombs.com/master-mega65-keyboard)

## Join the Fun

Don't miss the retro-computing fun. <font color="red">SUBSCRIBE</font> to my [YouTube channel](https://www.youtube.com/stevencombs) and check out [my other posts](https://www.stevencombs.com).

Help make this content better! Leave your comments, corrections, additions, and thoughts in the comments below. You can email me at [retrocombs@icloud.com](mailto:retrocombs@icloud.com). Thanks for reading and if you are inclined, please let others know about the blog using the hashtag #retroCombs.

🕹️ retroCombs, OUT!
