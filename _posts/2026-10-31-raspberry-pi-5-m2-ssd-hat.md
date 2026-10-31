---
layout: post
title: 'Raspberry Pi 5 and an M.2 SSD Hat: From the Box to Booting From an SSD'
date: '2026-10-31'
author: 'Steven B. Combs, Ph.D.'
email: 'retrocombs@icloud.com'
permalink: raspberry-pi-5-m2-ssd-hat
comments: yes
categories: [raspberrypi]
tags:
  - raspberrypi
  - raspberrypi5
  - waveshare
  - m2
  - nvme
  - ssd
  - raspberry-pi-imager
  - raspberry-pi-connect
  - howto
  - video
image:
  path: /images/posts/2026-10-31-raspberry-pi-5-m2-ssd-hat.jpg
  width: 1280
  height: 720
  alt: 'Raspberry Pi 5 with the active cooler and a Waveshare M.2 SSD hat installed'
kind: how-to
---

I have a Pi problem, and I mean that in a good way. I have Raspberry Pis all over the house, from an original Raspberry Pi 1 I found in a box to the Pi 4 that runs my Stream Deck companion server. What I didn't have was a Pi 5 that booted from an SSD. So I opened a brand-new Raspberry Pi 5, added the active cooler and a Waveshare M.2 hat with a small NVMe drive, and got it booting without an SD card.

This took two livestreams and more than four hours, troubleshooting included. The video cuts all that down to about 18 minutes of setup. This post is the text companion to that video. It lists the parts, walks through the steps in order, and points out the spots that tripped me up. Let's dig in!

![Raspberry Pi 5 with the active cooler and a Waveshare M.2 SSD hat installed](/images/posts/2026-10-31-raspberry-pi-5-m2-ssd-hat.jpg)

## TABLE OF CONTENTS {#table-of-contents}

- [TABLE OF CONTENTS](#table-of-contents)
- [LINKS](#links)
- [SUPPORT THE BLOG AND CHANNEL](#support-the-blog-and-channel)
- [COMPANION YOUTUBE VIDEO](#companion-youtube-video)
- [VIDEO ERRATA](#video-errata)
- [WHAT YOU NEED](#what-you-need)
- [STEP 1: PREPARE THE SD CARD WITH RASPBERRY PI IMAGER](#prepare-the-sd-card)
- [STEP 2: UNBOX THE PI 5](#unbox-the-pi-5)
- [STEP 3: INSTALL THE ACTIVE COOLER](#install-the-active-cooler)
- [STEP 4: MOUNT THE M.2 HAT](#mount-the-hat)
- [STEP 5: FIRST BOOT FROM THE SD CARD](#first-boot)
- [STEP 6: UPDATE THE OS AND BOOTLOADER](#update)
- [STEP 7: INSTALL THE SSD](#install-the-ssd)
- [STEP 8: WRITE THE OS TO THE SSD](#write-the-os-to-the-ssd)
- [STEP 9: BOOT FROM THE SSD](#boot-from-the-ssd)
- [CONCLUSION](#conclusion)

---

## LINKS {#links}

- 🥧 Raspberry Pi 5 8GB: <https://amzn.to/3VAq22x>
- 🧠 microSD Cards: <https://amzn.to/3IYL3Kn>
- 🍓 Pi-Apps (I still need to install it on this Pi): <https://pi-apps.io/>
- 📺 Livestream replay (the troubleshooting I cut from this video): <https://youtube.com/live/PvC35qfxzHg>

*Disclosure Statement: When you click on links to various merchants on this site and make a purchase, this can result in this site earning a commission. Affiliate programs and affiliations include, but are not limited to Amazon and the eBay Partner Network.*

## SUPPORT THE BLOG AND CHANNEL {#support-the-blog-and-channel}

Check out the [supporters page](/supporters) to learn about my supporters and how you can join our community. If this post saved you some time, you can also [leave a tip](https://paypal.me/stevencombs).

## COMPANION YOUTUBE VIDEO {#companion-youtube-video}

Title: _🥧️ Raspberry Pi 5 with M.2 SSD HAT: Unboxing to First Boot ⏩️_

{% include youtube.html id="jPnDnVzdJXY" title="🥧️ Raspberry Pi 5 with M.2 SSD HAT: Unboxing to First Boot ⏩️" upload_date="2024-07-30" duration="PT18M47S" cta="false" %}

{% include member-cta.html channel="retrocombs" %}

## VIDEO ERRATA {#video-errata}

- **Livestream links:** The video description lists "Livestream 1" and "Livestream 2," but both links point to the same replay. The link above is that replay.
- **Host name:** On camera, I say the host name a few different ways. Pick one name, use it every time, and write it down.

## WHAT YOU NEED {#what-you-need}

- Raspberry Pi 5
- Raspberry Pi 5 Active Cooler. You really need it for the Pi 5.
- Official 27W Raspberry Pi USB-C power supply
- Waveshare PCIe to M.2 hat. I picked it over the official hat because it was about $3 cheaper.
- An M.2 NVMe SSD. The Waveshare hat supports 2230 (22 x 30 mm) and 2242 (22 x 42 mm) drives. I used a 2230 Kioxia drive, a Toshiba OEM brand that was relatively inexpensive.
- A microSD card for the first boot. I used a 32GB SanDisk.
- A keyboard, mouse, and micro HDMI display connection
- A Mac or PC with Raspberry Pi Imager

## STEP 1: PREPARE THE SD CARD WITH RASPBERRY PI IMAGER {#prepare-the-sd-card}

A lot of folks use Etcher, but Raspberry Pi Imager does a few things that make setup much easier. I used version 1.8.5 on my Mac.

1. Choose your device: **Raspberry Pi 5**.
2. Choose the OS: **Raspberry Pi OS (64-bit)**, the stock version.
3. Choose your storage. Be careful to select the right card!
4. Click **Next**, then **Edit Settings**.
5. Set a host name you'll remember, and write it down, because you will forget it. With a host name set, you can reach the Pi as *hostname*.local on your network.
6. Enter your username and password, wireless LAN, and locale settings. All of it gets written to the card, so the Pi joins your home network the first time it boots.
7. On the **Services** tab, enable SSH. I turned off telemetry.
8. Save, apply the customization settings, and write the card.

Once the Pi is online, I also plan to give it a reserved DHCP address on my TP-Link mesh router so it always has the same IP address. With a host name, you don't really need one.

There's also something new for the Pi 5: Raspberry Pi Connect. It's a free service from the Raspberry Pi folks. Create an account, install the Connect software on your Pi 5, and you can reach that Pi from anywhere in the world. It's changing how I think I'll use this Pi.

## STEP 2: UNBOX THE PI 5 {#unbox-the-pi-5}

In the box, you get the Pi 5, a small card about temperature, and the safety and user guide. Here's what I noticed on the board:

- The PCIe connector, which the hat uses
- USB 3.0 and USB 2.0 ports
- Ethernet (I believe it's still gigabit)
- A microSD slot
- Micro HDMI out. The analog audio jack is gone, so sound goes out over HDMI.
- USB-C for power

## STEP 3: INSTALL THE ACTIVE COOLER {#install-the-active-cooler}

The fan header is the little white connector to the right of the 40-pin header. It has a cap on it. Pull the cap off and put it in the box.

The cooler uses thermal pads, not paste. Peel the backing, line it up (the notch tells you which way it goes), and push the pins into the holes. It's a heat sink and a fan in one.

The fan cable was too tricky to plug in with the cooler in place, so I popped the cooler back off, removed one standoff, plugged in the cable, and put everything back. Thanks to the folks at Linkmicro for the microscope they sent to the channel. I'm not sure I ever would have gotten that cable in without it.

## STEP 4: MOUNT THE M.2 HAT {#mount-the-hat}

With the standoffs and the active cooler in place, the hat goes on top and screws down. It's a slick little system. Don't connect the PCIe ribbon cable yet. I wanted to boot once without it to make sure everything worked.

## STEP 5: FIRST BOOT FROM THE SD CARD {#first-boot}

I plugged in my 8BitDo keyboard, which has a switch to go from Bluetooth to 2.4G so I can share it between my Mac and the Pi, plus a cheap mouse, the SD card, the display, and power.

The fan spun up, the first boot took a little time to set itself up, and the Pi connected to my Wi-Fi on its own thanks to the Imager settings. Chromium felt much quicker than on my Pi 4. One gotcha: my keyboard layout was set to Great Britain, so the @ symbol wasn't where I expected. I fixed that in the localization settings.

## STEP 6: UPDATE THE OS AND BOOTLOADER {#update}

You need the latest OS and firmware for the M.2 hat to work.

1. Click the updates icon and install the available updates.
2. Open **Raspberry Pi Configuration**. I enabled Raspberry Pi Connect, confirmed SSH was enabled, and set my locale, time zone, and keyboard layout.
3. In the terminal, confirm you're up to date.
4. Run `sudo raspi-config`, go to **Advanced Options** > **Bootloader Version**, and choose **Latest**. When it asks, reset the bootloader to the default configuration.
5. Do a **shutdown**, not a reboot, so you can install the SSD.

I looked at the boot order setting too, but I didn't change it for this build. The Pi booted from the SSD once the SD card was out.

## STEP 7: INSTALL THE SSD {#install-the-ssd}

Unplug everything first. The 2230 drive slides into the M.2 slot, and a screw from the bottom of the hat holds it down.

The ribbon cable is the part to take slowly. The instructions say to make sure both triangles are on the same side when you connect the cable. My cable didn't have a triangle, only a dot. So I matched the picture of the assembled board instead: the side marked "40 mm" on the cable lined up with the "40 mm" mark on the hat. Lock down both connectors.

## STEP 8: WRITE THE OS TO THE SSD {#write-the-os-to-the-ssd}

Power up from the SD card again. This time, run Raspberry Pi Imager on the Pi itself (**Accessories** > **Imager**):

1. Choose **Raspberry Pi 5** and the OS.
2. Choose the SSD as your storage.
3. Edit the settings the same way you did in Step 1: host name, username and password, Wi-Fi, locale, SSH with password authentication, and telemetry off.
4. Write the drive. Imager downloads the OS and writes it straight to the SSD, so it doesn't take long.

## STEP 9: BOOT FROM THE SSD {#boot-from-the-ssd}

Shut down, remove the SD card, and power up. The fan spun, the light flashed, and the desktop came up. I knew it was the SSD because there was no SD card in the slot. The first boot seemed slower than from an SD card, probably because it was expanding the file system. My mouse worked, and all my settings were there, connected to my wireless network.

From box to boot, the Pi 5 now runs from an SSD. Next on my list: putting Pi-Apps back on.

## CONCLUSION {#conclusion}

Cooler, hat, drive, ribbon cable, and a bootloader update. Once you know the order, it's not hard. It just took me two livestreams to figure out the order. A big thank you to Martin and to new member Davey, who were in the chat for the finale.

Are you booting your Pi 5 from an SSD yet? Which drive and hat did you use? Let me know in the comments below. If this post helped, [leave a tip](https://paypal.me/stevencombs).

That's it for me, folks. 🕹️ retroCombs, OUT!
