---
layout: post
title: 'Use a USB Camera with an ATEM Mini Extreme ISO (or any ATEM mini)'
date: 2022-08-20
author: 'Steven B. Combs, Ph.D.'
email: 'retrocombs@icloud.com'
comments: yes
permalink: tao-1tiny
category: gadgets
---

During the COVID pandemic of 2020, I began earnestly creating video for my [YouTube channel](https://www.youtube.com/stevencombs). Along the way, I accumulated an insane number of USB webcams. Everything from cheap $25 fixed focus cameras to a brilliant $130 [Logitech Brio](https://amzn.to/3dLvfP1). 

While building my YouTube channel, I made the move from capturing video using OBS Studio on my Mac to a dedicated audio/visual/streaming platform, the [ATEM Mini](https://amzn.to/3QzB7JA) followed by the [ATEM Mini Extreme Iso](https://amzn.to/3dJ3OVU). The ATEM Mini line, unlike my [YoloBox Pro](https://amzn.to/3dDife1), does not support USB cameras.

To connect cameras to the ATEM Mini, you must have an HDMI out. This can be either HDMI, micro HDMI, or mini HDMI, as long as you have an adapter. But this does limit you to pricey cameras like my [Sony ZV1](https://amzn.to/3PE1VXG) and other popular streaming cameras like the [Lumix G7](https://amzn.to/3Ay2Jcy). If you want multiple cameras in your studio, like I do, that's a pricey proposition and I'm not going to imply that the solution I will share is better than either option; however, it might be perfect for you if you have a high quality webcam.

In this blog post and companion video, I'm going to introduce you to a product that can help you connect webcams to the ATEM mini, the $170 [RGBLink TAO 1tiny on Amazon](https://amzn.to/3wibNji). Let's dig in and see how it works.

----

## Table of Contents



----

## Support the Blog and Channel

Check out the [supporters page](https://www.stevencombs.com/supporters) to learn about my amazing supporters and how you can join our community.

## Companion YouTube Video

Title: _Title_

<div style="position:relative;padding-top:56.25%;"><p><iframe src="link" frameborder="0" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true" style="position:absolute;top:0;left:0;width:100%;height:100%;"></iframe></p></div>

## Video Errata

None as of 2022-08-20.

## Links Mentioned in this Episode

Below are the links I mention in this blog post and companion video. All Amazon links are affiliate links. I’d like to thank everyone for your support of the blog and the YouTube channel when you start your purchases here!

1. [RGBLink TAO 1tiny on Amazon](https://amzn.to/3wibNji)
2. [TAO 1tiny Webpage](https://www.rgblink.com/productsinfo.aspx?id=227)
3. [ATEM Mini Extreme Iso](https://amzn.to/3dJ3OVU)
4. [ATEM Mini](https://amzn.to/3QzB7JA)
5. [Sony ZV1](https://amzn.to/3PE1VXG)
6. [Lumix G7](https://amzn.to/3Ay2Jcy)
7. 

## Unboxing

The 1tiny ships in a small basic box. Nothing fancy. Insider we find:

1. The 1tiny UVC to HDMI convertor
2. An instruction manual
3. A USB-C to USB-C cable
4. A USB-A to USB-C adapter

The 1tiny does not include a power brick. The 1tiny includes the following ports:

1. USB-C Power
2. USB 2.0 Connector (Firmware and Webcam)
3. USB 3.0 Connector (Webcam)
4. HDMI Out

With the 1tiny out of the box, let's get it connected.

## Connecting to the ATEM Mini (all models)

Connect to the ATEM Mini is a breeze.
1. Connect an HDMI cable from the 1tiny to an HDMI-In on the ATEM Mini.
2. Select the correct input source on the ATEM Mini.
3. Plug the webcam into either the USB-A port or the USB-C data port. If using USB-C don't confuse it with the USB-C port that provides power. Double-check the top labels on the 1tiny.
4. Plug the included USB-C cable into the USB-C power on the 1tiny and then plug the other end into a power source. This is where the USB-A to C adapter might come in handy.

## Testing Webcam Compatibility

Once I made the connections and applied power, the first thing I noticed was the sound. The 1tiny has an internal fan and you can hear it! When you install this in your studio, be sure to keep it away from your microphone. I don't suspect with a good microphone that your audience will hear it, but I was surprised that this tiny device needed a fan.

I was eager to test compatibility with webcams. Does this 1tiny work with all the webcams I own? I'd read online that there were issues and I had a good selection of webcams that includes from what I consider lowest to highest quality:

1. [UNZANO HD650](https://ebay.us/xs2Iuk)
2. [UNZANO HD600 with Lights](https://amzn.to/3Clt4M9)
3. [Looca 4K](https://amzn.to/3pzp1Eu) 
4. [Logitech C920](https://amzn.to/3pzIQLW)
5. [Logitech Brio](https://amzn.to/3dLvfP1)

In the video, I try each one out and provide a tag at the bottom of the page to indicate which one is displayed. It's important to note that the 1tiny does NOT support the microphones on the webcams.

## Upgrading the Firmware

Out of the box, my 1tiny was a few firmware version behind. Luckily, TAO makes it easy to find the firmware and upgrade. Here are the steps I used based on the instructions:

1. Visit the [TAO 1tiny](https://www.rgblink.com/productsinfo.aspx?id=227) web page.
2. Scroll down to the *Details* area and click the *Downloads* header.
3. Scroll down to the bottom of the page to the *XPOSE & Firmware* area.
4. Click the word Firmware and the file will download to your computer.
5. Locate the download and decompress it. A folder with a name similar to `TAO 1tiny_Firmware_V1.21.5.30_EN_20220715` appear.
6. Click inside the folder to find two PDF files and another folder called `Upgrade File`. Double-click the folder.
7. Inside the folder is a file with a name similar to `tiny4kfirmware-v1.21.5.30-release-rgblink.img`. Copy that folder to a FAT formatted USB drive. The instructions recommend there not be any other files on the USB drive. I concur with them.
8. Unplug the USB-C power cable on the 1tiny but leave HDMI and the webcam plugged in.
9. Plug the USB drive into the 1tiny.
10. Plug the USB-C power back into the 1tiny. The device will boot and soon two successive screens will appear indicating the upgrade status.
11. Once complete, the 1tiny will reboot and display the old and new firmware upgrade versions. That's a great feature. I wish more devices did this to indicate the upgrade path.
12. The webcam attached will appear on the ATEM Mini.

The whole process takes about 5 minutes and was smooth for me.

## Testing the Upgrade

The upgrade states that it mutes the fan noise more. As you can see in the video, I noticed a slight difference. It was not as impactful as I hoped.

I was curious if after the upgrade all the cameras and it did. I had not issue with any camera after the upgrade.

## 

## Join the Fun

Don't miss the retro-computing fun. <font color="red">SUBSCRIBE</font> to my [YouTube channel](https://www.youtube.com/stevencombs) and check out [my other posts](https://www.stevencombs.com).

Help make this content better! Leave your comments, corrections, additions, and thoughts in the comments below. You can email me at [retrocombs@icloud.com](mailto:retrocombs@icloud.com). Thanks for reading and if you are inclined, please let others know about the blog using the hashtag #retroCombs.

🕹️ retroCombs, OUT!