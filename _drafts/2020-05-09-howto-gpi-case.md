---
layout: post
title: 'HOWTO: Install Super Retroboy on the Retroflag GPi Case'
date: '2020-05-11'
author: 'Steven B. Combs, Ph.D.'
email: 'steven.combs@gmail.com'
comments: 'yes'
category: retro
tags:
  - gameboy
  - retro
  - gaming
  - commodore
  - emulation
  - games
  - atari
  - zxspectrum
  - retroflag
  - gpicase
---

This blog post is a companion page to two YouTube Videos and provides all the links and additional information to facilitate an install of the [Super RetroPie](https://mega.nz/folder/Ai5inYJa#mR2BXoPX9jnVCn42jqRjIQ) emulation image on a microSD card that will power a [RetroFlag GPi Case](https://amzn.to/2WAKn5q) for on the go retro gaming.

My goal for this project is to focus on retro-gaming. And when I say retro-gaming, I'm talking about 8-bit gaming prior to Ninetendo's rise in popularity. I want to emulate classic systems such as:

* Commodore VIC-20
* Commodore 64
* Atari 2600
* Atari 5200
* Atari 7800
* Atari 400
* Atari 800
* ZX Spectrum

A few of these systems are not include with Super RetroPie, so there will be some tweaking after the initial installation. I'll share these tweaks in this blog post, but this _BONUS CONTENT_ is not included in either video.

Below is a table of contents so you can link directly to various areas of this blog post:
<!-- TOC -->

- [Equipment](#equipment)
- [YouTube Video: _WORKBENCH LIVE: Retroflag GPi Case with Super RetroPie emulation software_](#youtube-video-_workbench-live-retroflag-gpi-case-with-super-retropie-emulation-software_)
- [YouTube Video: _HOWTO: Install Super Retroboy on Retroflag GPi Case_](#youtube-video-_howto-install-super-retroboy-on-retroflag-gpi-case_)
- [Install Balena Etcher](#install-balena-etcher)
- [Download Super RetroPie](#download-super-retropie)
- [Transfer Image to microSD](#transfer-image-to-microsd)
- [Transfer Wi-Fi Settings to Boot Partition](#transfer-wi-fi-settings-to-boot-partition)
- [Tranfer ROMs to microSD Card](#tranfer-roms-to-microsd-card)
- [Insert microSD into Case and Boot](#insert-microsd-into-case-and-boot)
- [Connect via SSH](#connect-via-ssh)
- [Expand the microSD file system](#expand-the-microsd-file-system)
- [Install the Vice Commodore Emulator](#install-the-vice-commodore-emulator)

<!-- /TOC -->

## Equipment

Below is a list of the items you will need to get started:

[RetroFlag GPi Case](https://amzn.to/2WAKn5q)
[Raspberry Pi Zero W](https://amzn.to/2Wy181a)
[32Gb MicroSD Card](https://amzn.to/3dqdVJQ)
[Super RetroPie Image](https://mega.nz/folder/Ai5inYJa#mR2BXoPX9jnVCn42jqRjIQ)
[Belana Etcher](https://www.etcher.io)

## YouTube Video: _WORKBENCH LIVE: Retroflag GPi Case with Super RetroPie emulation software_

The first video below is the extended WORKBENCH LIVE video. In this video, I used YouTube Live to stream my entire afternoon working this project. This is unedited and includes additional information not found in my edited video below. It also includes some streaming hiccups that occurred along with way. If you have some time to kill or just need some geeky background noise, this is the video for you.

<div style="position:relative;padding-top:56.25%;"><p><iframe src="https://www.youtube.com/embed/22ZDrUBGBnQ" frameborder="0" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;"></iframe></p></div>

## YouTube Video: _HOWTO: Install Super Retroboy on Retroflag GPi Case_

The second video takes that two hour live behemouth and shrinks it down to a much more managable thirty minute chunk. If you just want the nuts and bolts and a video to follow along, this one's for you.

<div style="position:relative;padding-top:56.25%;"><p><iframe src="https://www.youtube.com/embed/7LkGX_IpcSk" frameborder="0" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;"></iframe></p></div>

## Install Balena Etcher

## Download Super RetroPie

There are many pre-built images for the GPi Case, a Google search will overwhelm you, and many of them include game ROMs. I choose to use an image that does not include ROMs so I can focus my project on a handheld system for specific 8-bit computer and game consoles. No Gameboy, NES, or Sega games here. Just good ole Commodore, Atari, and Sinclair games.

This image uses Emulation Station and is a variation of the RetroPie images but with tweaks specifically for the GPi Case and the Raspberry Pi Zero (with slower processor and only 256Mb of RAM). This image also includes all the scripts mentioned in the instructions that come with the GPi Case.

Be sure to visit the [Super RetroPie - Facebook](https://www.facebook.com/groups/SuperRetroPie) to learn more about this image, ask questions, and see how others have used the image.

To download the image, follow the steps below:

1. Click this link, [Super RetroPie Image](https://mega.nz/folder/Ai5inYJa#mR2BXoPX9jnVCn42jqRjIQ), to visit the MEGA site.
2. Download the image file and any other files you might want.
3. If you use a Raspberry Pi Zero W (that includes Wi-Fi) also download the `wpa-suppliant.conf` file.
4. Make sure you can easily locate these files. You will need them for the next section.

Now that you have the files, let's prepare a microSD card for the GPi Case.


## Transfer Image to microSD

When burning images to SD cards or USB drives, I always use [Etcher](https://www.etcher.io). The software is available for all platforms and make the process easy. Let's get started:

1. Download and install Etcher for your computer.
2. Load Etcher.
2. Locate and drag the Super RetroPie `.img` file to the _Select Image_ button (you can also use the file selector if you lick on this button).
3. Click the _Select Target_ button to choose a the microSD (be careful!)
4. Click the _Flash!_ button and wait for the image to flash to the microSD. Etcher will also verify the image to ensure the integrity of the image on the microSD.

## Transfer Wi-Fi Settings to Boot Partition

Load the `wpa_supplicant.conf` file into a text editor (or use the text below to start your own)

```bash
country=US
ctrl_interface=DIR=/var/run/wpa_supplicant GROUP=netdev
update_config=1

# RETROPIE CONFIG START
network={
    ssid="YourSSID"
    psk="YourPassWord"
}
# RETROPIE CONFIG END
```

Copy the file to the root partition of the microSD drive.

Eject the microSD card from the computer.

## Tranfer ROMs to microSD Card

While you have the microSD card connected to your computer, you can speed up the transfer of ROM files by copying them over via the USB connection. I'll show you how to transfer them via Wi-Fi afterward but this is bar far the most efficient way if you have mega, or even giga, bytes of ROMs. ROMs must go into specific folders. Below is the list of the required folder name expected by Emulation Station:

c64 - Commodore 64

## Assemble the GPi Case

I cover the assembly of the case extensively in both videos; however, a few notes and observations are below:

1. The small brass square with the embossed Raspberry Pi logo is in fact a heat sink. Place it on the CPU of the Raspberry Pi Zero W to help dissapate heat.
2. Keep watch on your power cable. It's not a standard micro USB port. Might I recommend you throw this cable in the included case.
3. Speaking of micro USB ports, If you remove the battery compartment, there's access to another micro USB port.
4. As I note in the video, after my own mistake, be sure not to remove the microSD tab cover while you assemble the cartrige holder.

## Insert microSD into Case and Boot

1. Open the microSD tab cover on the cartridge case.
2. Insert the microSD with the pins facing toward the back of the unit.
3. Repalce the tab cover.
4. Slide the cartridge unit into the GPi Case body.

    ![Inserting Case into the GPi Case](link)

5. Plug in the power cord (recommended) or place 3 AA batteries in the battery compartment and replace the cover.
6. Slide the power switch on the top of the case all the way to right and the power light will come on.
7. Wait for the device to boot up.

    ![GPi Case on boot up](link)

## Connect via SSH

SSH is active by default, but Wi-Fi is not.

Turn on Wi-Fi in the Emulation Station settings. The `wpa_supplicant.conf` file you copied to the microSD card, if created properly, will automatically use those credential to connect the GPi Case to your home network.

Be sure to turn off Wi-Fi when not needed as I found leaving it on significantly decreases battery life.

## Expand the microSD file system

While we are connected to the GPi Case via SSH, expand the microSD card available space to the entire 16Gb. When the image installs on the microSD card, it only allocates the space taken by the image.

1. Type `sudo raspi-config` in the SSH window.

When the image installs on the microSD card, it only allocates the space taken by the image. Using the `raspi-config` file

## Install the Vice Commodore Emulator

This one is a bit tricky if you've never used a Raspberry Pi or Linux before.
