---
layout: post
title: 'Copy a MEGA65 .D81 disk image to a 3.5” floppy disk'
date: 2022-08-19
author: 'Steven B. Combs, Ph.D.'
email: 'retrocombs@icloud.com'
comments: yes
permalink: copy-mega65-disk-image-to-floppy
category: mega65
---

This short blog post is a supplement to a MEGA65 video I posted on 2022-08-19. The video shows how to update the Hibernated 1 The Director's Cut 3.5" Floppy upon release of a new version that enhances game play or fixes bugs. It's fine to load the .d81 disk image and play from the SD card on the MEGA65, but sometimes you need the floppy disk clicking to get that true retro computing experience on the MEGA65.

![Hibernated SD card and floppy](/images/mega65/sd-card-to-floppy.jpg)

While I spend more time in the video showing how to copy a MEGA65 disk image to the internal 3.5" floppy, this blog post will provide a short written description of the process for quick reference. Let's get started.

----

## Support the Blog and Channel

Check out the [supporters page](/supporters) to learn about my amazing supporters and how you can join our community.

## Companion YouTube Video

Title: _‌Managing MEGA65 Media \| Update 3.5" Floppy Files from a .D81_

<div style="position:relative;padding-top:56.25%;"><p><iframe src="https://www.youtube.com/embed/ATUwOYtJA2Q" frameborder="0" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true" style="position:absolute;top:0;left:0;width:100%;height:100%;"></iframe></p></div>

## Video Errata

None as of 2022-08-19.

## Links Mentioned in this Episode

Below are the links I mention in this blog post and companion video. All Amazon links are affiliate links. I’d like to thank everyone for your support of the blog and the YouTube channel when you start your purchases here!

- [Hibernated 1](https://8bitgames.itch.io/hibernated1)
- [Poly Play Boxed Set](https://www.polyplay.xyz/Hibernated-1-Directors-Cut-MEGA65_1)

## Steps to Copy an SD Card Disk Image to a 3.5" Floppy Disk

Below are the succinct steps:

1. Insert a 3.5" floppy disk into the MEGA65 floppy drive bay. The disk does not need to be formatted.
2. Use the `MOUNT` command to mount the 3.5" floppy disk to unit/drive 8 (the default)
2. Insert an SD Card into the MEGA65 that contains the disk image you want to copy to the 3.5" floppy disk.
2. Use the `DIR U12` command to list the contents of the SD Card on the MEGA65.
3. Use the `MOUNT <FILENAME>,U9` command to mount a disk image from the SD Card to unit/drive 9.
4. Use the `BACKUP U9 TO U8` command to copy the SD card disk image contents to the 3.5" floppy disk. This process will take a long time and there's no visual sign. Be patient.
5. Verify the contents on the 3.5” floppy disk using the `DIR` command.

You can now enjoy a more authentic experience by running software from a 3.5" floppy disk. This is one perk of MEGA65 ownership; the ability to choose between virtual and physical media. Expect the software to run slower from the floppy disk, but relish in the old school sounds!

## Join the Fun

Don't miss the retro-computing fun. <font color="red">SUBSCRIBE</font> to my [YouTube channel](https://www.youtube.com/stevencombs) and check out [my other posts]().

Help make this content better! Leave your comments, corrections, additions, and thoughts in the comments below. You can email me at [retrocombs@icloud.com](mailto:retrocombs@icloud.com). Thanks for reading and if you are inclined, please let others know about the blog using the hashtag #retroCombs.

🕹️ retroCombs, OUT!