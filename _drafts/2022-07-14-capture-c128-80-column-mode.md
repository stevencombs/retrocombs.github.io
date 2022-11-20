---
layout: post
title: 'Capturing Commodore 128 80 Column Mode'
date: 2022-07-14
author: 'Steven B. Combs, Ph.D.'
email: 'retrocombs@icloud.com'
comments: yes
permalink: permalink
category: c128
---

A box arrived on my doorstep and that means a new Commodore related livestream! In a [Chuck Hutchins, Jr.](https://twitter.com/hutchca?s=21&t=spGoWLQ34fc_VXmiFFjx0A) video, [HDMI for the Commodore PET](https://youtu.be/lfhs8HLsFAg), Chuck shared the how he used the [texElec](https://texelec.com/) [RGB2HDMI](https://texelec.com/product/rgbtohdmi-ttl/) to add HDMI out on his original Commodore 2001 Series PET.

I was fascinated with the operation of this device and asked Chuck on Twitter if it worked with the Commodore 128. He tweeted an affirmative with an image. I was intrigued, went to the site to make a purchase but found they were out of stock. Rats. A couple of weeks later, Chuck pinged me to let me know [a version know as RGBtoHDMI](https://retrohackshack.com/product/rgbtohdmi/) was in stock at [Retro Hack Shack](https://retrohackshack.com). I raced to the site place the order and about 10 days later, the box landed on my doorstep. Unlike the texElec version, I will source my own Raspberry Pi Zero.

In this livestream and companion blog post, I setup the RGBtoHDMI on my Commodore 128 to capture and share the C128's 80-column mode. A mode this is all too often overlooked.

----

**Table of Contents**



----

## Support the Blog and Channel

Check out the [supporters page](/supporters) to learn about my amazing supporters and how you can join our community.


## Companion YouTube Video

Title: _Title_

<div style="position:relative;padding-top:56.25%;"><p><iframe src="link" frameborder="0" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true" style="position:absolute;top:0;left:0;width:100%;height:100%;"></iframe></p></div>

## Video Errata

None as of 2022-07-14.

## Links Mentioned in this Episode

Below are the links I mention in this blog post and companion video. All Amazon links are affiliate links. I’d like to thank everyone for your support of the blog and the YouTube channel when you start your purchases here!

1. [texElect RGB2HDMI](https://texelec.com/product/rgbtohdmi-ttl/)
2. [Raspberry Pi Zero](https://amzn.to/3z8M5ja)

## About the RGB2HDMI

What is the RGBtoHDMI device? Here's a blurb from [the device wiki](https://github.com/hoglet67/RGBtoHDMI/wiki):

> The RGBtoHDMI interface converts the "digital" RGB video signal from vintage computers like the BBC Micro or PC MDA/CGA/EGA to HDMI or DVI compatible with most modern TVs/Monitors. The interface comprises a Raspberry Pi Zero and a specially designed Hat containing a small CPLD. Custom firmware on the Raspberry Pi, in conjunction with the CPLD, is able to correctly sample each of the supported video modes to give a pixel-perfect rendition.

The [device support list](https://github.com/hoglet67/RGBtoHDMI/wiki/Supported-Computers) is LONG but for this video and blog post, I'll focus its use with [my Commodore 128](/c128-1). Before we can use the device, we work ahead. Unlike the texElec version which comes complete with Raspberry Pi Zero, 9-pin video out, and a custom board, the Retro Hack Shack version is a Raspberry Pi Zero hat.

## Create Connector

Below is the pinout for a Commodore 128 80 column connector.

| 12 Bit Extender 16 way IDC | RGBtoHDMI 12 way IDC | 9 way D-Type | Notes |
| --- | --- | --- | --- |
| Pin 1 green0 |  |  |  |
| Pin 2 red0 |  |  |  |
| Pin 3 blue0 |  |  |  |
| Pin 4 green1 |  |  |  |
| Pin 5 red1 | Pin 1 red1 |  |  |
| Pin 6 blue1 | Pin 2 blue 1 |  |  |
| Pin 7 GND | Pin 3 GND | Pin 1 |  |
| Pin 8 green2 | Pin 4 green2 | Pin 6 | Intensity in CGA / MDA |
| Pin 9 red2 | Pin 5 red2 | Pin 2 |  |
| Pin 10 blue2 | Pin 6 blue2 | Pin 7 |  |
| Pin 11 RED3 | Pin 7 RED3 | Pin 3 |  |
| Pin 12 HSYNC | Pin 8 HSYNC | Pin 8 |  |
| Pin 13 GREEN3 | Pin 9 GREEN3 | Pin 4 | Video in MDA |
| Pin 14 VSYNC | Pin 10 VSYNC | Pin 9 |  |
| Pin 15 BLUE3 | Pin 11 BLUE3 | Pin 5 |  |
| Pin 16 +5V | Pin 12 +5V | N/C |  |

## Join the Fun

Don't miss the retro-computing fun. <font color="red">SUBSCRIBE</font> to my [YouTube channel](https://www.youtube.com/stevencombs) and check out [my other posts]().

Help make this content better! Leave your comments, corrections, additions, and thoughts in the comments below. You can email me at [retrocombs@icloud.com](mailto:retrocombs@icloud.com). Thanks for reading and if you are inclined, please let others know about the blog using the hashtag #retroCombs.

🕹️ retroCombs, OUT!
