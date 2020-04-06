---
layout: post
title: 'HOWTO & OPEN THE BOX: Convert a Wyze Cam Black into a webcam with Wyze's new firmware'
date: '2020-04-05'
author: 'Steven B. Combs, Ph.D.'
email: 'steven.combs@gmail.com'
comments: 'yes'
category: gadgets
tags:
  - howto
  - wyze
  - wyzecam
  - webcam
  - firmware
  - usb
  - camera
  - covid19
---

On March 31st, 2019 and during the height of COVID-19, the folks who make the popular [Wyze cam](https://amzn.to/2R2sgn6) released a firmware update that allows you to convert their popular security camera into a webcam. This is a nice philanthropic move by the company and while there are likely to be critics who believe this move is only to sell more cameras, I choose to believe that Wyze is doing this to fill a need during this crisis and honestly, $25 for a webcam that can also be used as a security camera is one heckuva deal! And who doesn't need a good deal right now?

In this post, I will demonstrate how flash a Wyze Cam Black into a "Wyze WebCam Black" with the new firmware and test out the quality of the image, microphone, and sound.

> **NOTE:** Once you flash Wyze Cam with the new firmware, you cannot connect the Wyze Cam to the app. Wyze also states that they don't plan to update the firmware in the future; however, you can flash the camera back to the stock firmware when you are done using the Wyze cam as a webcam. Lastly, they claim it has only been tested on Windows and Mac OS. I'll be testing it on Mac OS and Linux.

## Camera compatibility

This new firmware works with the following Wyze cam models:

1. [Wyze Cam v2](https://amzn.to/2XcL5Yy) - Readily available and I have several of these around our home.
2. Wyze Cam Black(Not currently available) - This is the model I use to demonstrate in the video below (along with an OPEN THE BOX!)
2. [Wyze Cam Pan](https://amzn.to/3dW0L8E) - I have two of these in the house and while you can use the firmware on these models, you will lose the pan and scan features. Probably not the best model to use for this project.

## Equipment

You will also need the following accessories:

1. [32Gb microSD card](https://amzn.to/340oU9q) - I'm not sure why this process requires a 32Gb microSD when the download is only 10Mb! My guess is you can use a smaller device but I'm going to use what they list.
2. [USB A to A cable](https://amzn.to/2Jtel5c) - I could not believe I did not have one of these cables in my stock pile of cables, so I did have to purchase this two pack.


## YouTube video

A YouTube video demonstrating/testing the firmware installation process and a Wyze Cam Black OPEN THE BOX segment is below:

<div style="position:relative;padding-top:56.25%;"><p><iframe src="https://www.youtube.com/embed/TOy8VQSQ_0Q" frameborder="0" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;"></iframe></p>
</div>

## Installation of the webcam firmware

If you don't want to watch the video, below are simplified steps to update the firmware (modified from [these Wyze instrucitons](https://support.wyzecam.com/hc/en-us/articles/360041605111-Webcam-Firmware-Instructions?goal=0_bb26009792-8defbf621a-46958059&mc_cid=8defbf621a&mc_eid=0e13bb0dcd)):

1. [Download the webcam firmware](https://wyze-firmware.s3-us-west-2.amazonaws.com/V2Webcam.zip).
2. Extract the .zip folder.
3. Copy the two files from the extracted folder on your computer to the root directory  of the microSD card.
2. Eject the microDS from the computer.
3. Insert the microSD care into the bottom of the Wyze Cam.
3. Press and hold the _Setup_ button while you plug the camera into a powered USB port with the USB A to A cable. You cannot use the micro USB cable that comes with the Wyze Cam.
4. Continue holding the _Setup_ button for 3-6 seconds until the LED turns a bright blue.
5. Wait 3 to 4 minutes (it took less than a minute for me) as the camera updates firmware and reboots. When complete, the status light will flash yellow and blue at the same time.

The camera's firmware has now been modified and the webcam is ready to use.

## Use Wyze Cam as a webcam

1. Use the USB A to A cable and connect the Wzye cam to a computer.
2. Test the webcam with your favorite computer camera or online meeting application.

And that's all there is to it. So how does it work? Let's break it down.

## Review of Wyze cam as a webcam

Below are my thoughts on the conversion and use of the new Wyze WebCam in bullet form. These same thoughts are demonstrated in the YouTube video.

* No issues with video after the firmware installation; it was simply plug-and-play
* The Wyze Cam has a large field-of-view and one much larger than normal webcams so it may seem odd at first as it captures more of the room that you might like
* Video image has subtle colors
* Video is not as sharp as say, a [Logitech C920](https://amzn.to/2x3IFAP), but it is 1080p and good enough especially when you consider this is a $25 webcam that is avialable now (unlike the Logitec)
* The Wyze Cam is designed to work in low light situations and that feature is replicated in webcam mode
* On both the Linux and Mac computers, the device was found on every application that uses a camera, even OBS Studio; which on Linux can be a bit finicky
* The Wyze WebCam micrphone is unusable and you will need a seperate microphone
* The speaker can be used, but expect enough lag between video and audio for it to be an annoyance
* I could not test on a Windows PC so if you have, please leave comments below

## Final thoughts

Wyze claims this firmware is the first and last version they will release. That's a shame. While the firmware activates video, it is still in need of much work for microphone and speaker functionality (at least on Linux and Mac computers). I would implore Wyze to continue to refine this firmware. A completely operational firmware will open up the market for Wyze Cams, but more importantly during these weird times, allow those who cannot purchase an inexpensive webcam to tap into your inventory of Wyze Cams so they can telecommute. The microphone must work for these webcams to be useful. If folks don't have a webcam, they likely don't have a secondary USB or internal microphone on their computer. Please Wyze, continue development. I'll be the first to raise my hand to help beta test. And we need to do this quickly.

What's been your experience with Wyze Cams? Do you have a spare lying around the house that you plan to convert to a Wyze WebCam? Drop me comments below or at the YouTube video page.
