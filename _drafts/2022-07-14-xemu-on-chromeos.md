---
layout: post
title: 'Run a MEGA65 on your Chromebook using Xemu'
date: 2022-07-14
author: 'Steven B. Combs, Ph.D.'
email: 'retrocombs@icloud.com'
comments: yes
permalink: xemu-on-chromeos
category: mega65
---

In the post [Run a MEGA65 on your Mac using Xemu](https://www.stevencombs.com/xemu-on-mac), I showed how to install the XEMU emulator for the MEGA65, xmega65, on a Mac. It's time to stretch my operating systems legs and install it on another popular system. No, I'm not installing on Windows or Linux but on an operating system that may surprise many; ChromeOS!

![XEMU on ChromeOS](https://media.discordapp.net/attachments/781481205639020554/996588525778649168/XEMU_on_ChromeOS.png?width=1755&height=1170)

The process to install Xemu on ChromeOS is, unsurprisingly, similar to the Linux version since we'll use a Linux container on ChromeOS. But don't let that scare you. This feature is now out of beta and it has never been easier to install Linux apps on your Chromebook, if it is an Intel based ChromeOS device. <font color="red">Xemu is not an option, at this time, on ARM based systems.</font> I use a [Google Pixelbook](https://amzn.to/3aASgmE) and [Google Pixel Slate](https://amzn.to/3o6S8hL) to demonstrate the installation process but any Chromebook or Chromebox with an Intel processor should work.

----

**Table of Contents**

- [Support the Blog and Channel](#support-the-blog-and-channel)
- [Companion YouTube Video](#companion-youtube-video)
- [Video Errata](#video-errata)
- [Links Mentioned in this Episode](#links-mentioned-in-this-episode)
- [Create a Linux Container](#create-a-linux-container)
- [Share a Folder(s)](#share-a-folders)
- [Download and Install Xemu](#download-and-install-xemu)
- [Start, Configure, and Install a ROM](#start-configure-and-install-a-rom)
- [ChromeOS Specific Configurations](#chromeos-specific-configurations)
- [Using xmega65](#using-xmega65)
- [Configure the Keyboard](#configure-the-keyboard)
- [Join the Fun](#join-the-fun)

----

## Support the Blog and Channel

Check out the [supporters page](https://www.stevencombs.com/supporters) to learn about my amazing supporters and how you can join our community.

## Companion YouTube Video

Title: _Title_

<div style="position:relative;padding-top:56.25%;"><p><iframe src="link" frameborder="0" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true" style="position:absolute;top:0;left:0;width:100%;height:100%;"></iframe></p></div>

## Video Errata

None as of 2022-07-14.

## Links Mentioned in this Episode

Below are the links I mention in this blog post and companion video. All Amazon links are affiliate links. I’d like to thank everyone for your support of the blog and the YouTube channel when you start your purchases here!

1. [Google Pixelbook](https://amzn.to/3aASgmE)
2. [Google Pixel Slate](https://amzn.to/3o6S8hL)
3. [Xemu page](https://github.lgb.hu/xemu/)

## Create a Linux Container

Create a Linux container to install Linux apps on ChromeOS. The default ChromeOS container is a Debian distribution and since the Xemu package for Linux is based on Ubuntu, and Ubuntu is based on Debian, this allows Xemu to run well on ChromeOS. Below are the steps to setup a Linux container on ChromeOS.

1. 

## Share a Folder(s)

This next step makes everything easier. By default, the Linux container does not have access to file and folder on ChromeOS but you can turn on sharing with a few clicks. The steps below show how to share the Downloads folder.

1. 

## Download and Install Xemu

With a Linux container created and a folder shared, it is time to install Xemu using the steps below:

1. Visit the [Xemu page](https://github.lgb.hu/xemu/). On this blueish page, you will find two headings; *Stable ("master" branch) releases* and *The 'future next stable' still unstable ("next" branch) builds*.
2. Scroll down to the *The 'future next stable' still unstable ("next" branch) builds* header.
3. Click the *‌Ubuntu Linux 20.04 64-bit DEB package* option to download the `xemu_current_amd64.deb` file.
4. Open the the Downloads folder using the file browser and locate the `.deb` file.
5. Double-click the `.deb` file. The dialog box shown below will appear.



With Xemu installation complete, we can now run it for the first time; however, don't get excited yet!

## Start, Configure, and Install a ROM

After the install process is complete, a several new entries are found in the Launcher. Double-click the xmega65 option. The other options are other Commodore emulators. One interesting option is the Commodore LCD computer that was never released, but I digress.

The first time xmega65 starts, you have to make several configuration options. This process is the same as the Mac version. [Refer to that section](https://www.stevencombs.com/xemu-on-mac#configure-xmega65) in the Mac post.

## ChromeOS Specific Configurations

We setup a shared folder early in this process to move files between ChromeOS and the Linux container; however, there's another step that will make the emulator experience better; changing the UI resolution using the steps below.

1. 

## Using xmega65

I won't go into all the features of the emulator; however, below are a few things to get you started.

1. 

## Configure the Keyboard

Modify the `keyboard.cfg` file.

## Join the Fun

Don't miss the retro-computing fun. <font color="red">SUBSCRIBE</font> to my [YouTube channel](https://www.youtube.com/stevencombs) and check out [my other posts](https://www.stevencombs.com).

Help make this content better! Leave your comments, corrections, additions, and thoughts in the comments below. You can email me at [retrocombs@icloud.com](mailto:retrocombs@icloud.com). Thanks for reading and if you are inclined, please let others know about the blog using the hashtag #retroCombs.

🕹️ retroCombs, OUT!
