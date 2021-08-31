---
layout: post
title: "HOWTO & OPEN THE BOX: Convert a Wyze Cam Black into a webcam with Wyze's new firmware"
date: '2020-04-05'
author: 'Steven B. Combs, Ph.D.'
email: 'steven.combs@gmail.com'
comments: 'yes'
category: wyze
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

On March 31, 2019 and during the height of COVID-19, the folks who make the popular [Wyze cam (#ad)](https://amzn.to/2R2sgn6) released a firmware update that allows you to convert their popular security camera into a webcam. This is a nice philanthropic move by the company and while there are likely to be critics who believe this move is only to sell more cameras, I choose to believe that Wyze is doing this to fill a need during this crisis and honestly, $25 for a webcam that can also be used as a security camera is one heckuva deal! And who doesn't need a good deal right now?

> **2020-04-07 UPDATE:** Several asked me why I did not test the camera on Chrome OS since I host the [Pixel Power Podcast](https://www.pixelpowerpodcast.com). Great question. You will find that video linked in this post below the original if you are interested in the firmware performance on Chrome OS devices.

In this post, I will demonstrate how to flash a Wyze Cam Black into a "Wyze WebCam Black" with the new firmware and test out the quality of the image, microphone, and sound. Along the way, I also include an OPEN THE BOX segment with a brand new Wyze Cam Black. The black variant is the same as a Wyze Cam V2, only in black and available in limited numbers. If you want to view this segment only, [click here](https://youtu.be/TOy8VQSQ_0Q?t=292).

> **NOTE:** Once you flash Wyze Cam with the new firmware, you cannot connect the Wyze Cam to the app. Wyze also states that they don't plan to update the firmware in the future; however, you can flash the camera back to the stock firmware when you are done using the Wyze cam as a webcam. Lastly, they claim it has only been tested on Windows and Mac OS. I test it on Mac OS and Linux.

## Camera compatibility

This new firmware works with the following Wyze cam models (#ad):

1. [Wyze Cam v2](https://amzn.to/2XcL5Yy) - Readily available and I have several around our home.
2. Wyze Cam Black (Not currently available) - This is the model I use to demonstrate in the video because in black, the Wyze Cam just looks more like a webcam.
2. [Wyze Cam Pan](https://amzn.to/3dW0L8E) - I have two of these in the house and while you can use the firmware on these models, you will lose the pan and scan functionality.

## Equipment

You will need the following accessories (#ad):

1. [32Gb microSD card](https://amzn.to/340oU9q) - I'm not sure why Wyze stipulates a 32Gb microSD when the firmware download is only 10Mb! My guess is you can use a smaller device but I'm going to use what they recommend for this demonstration.
2. [USB A to USB A cable](https://amzn.to/2Jtel5c) - I could not believe I did not have one of these cables in my stock pile of cables! I had to purchase this two pack. Cue heavy *sigh*.

## YouTube Video

A YouTube video demonstrating/testing the firmware installation process that also includes a Wyze Cam Black OPEN THE BOX segment is below:

<div style="position:relative;padding-top:56.25%;"><p><iframe src="https://www.youtube.com/embed/TOy8VQSQ_0Q" frameborder="0" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;"></iframe></p>
</div>

**2020-04-07 UPDATE:** below is the video showing the performance of the camera with new firmware on Chrome OS:

<div style="position:relative;padding-top:56.25%;"><p><iframe src="https://www.youtube.com/embed/ft5GLFBIPNw" frameborder="0" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;"></iframe></p>
</div>

## Installation of the webcam firmware

If you don't want to watch the video, below are simplified steps to update the firmware (modified from [these Wyze instructions](https://support.wyzecam.com/hc/en-us/articles/360041605111-Webcam-Firmware-Instructions?goal=0_bb26009792-8defbf621a-46958059&mc_cid=8defbf621a&mc_eid=0e13bb0dcd)):

1. [Download the Wyze webcam firmware](https://wyze-firmware.s3-us-west-2.amazonaws.com/V2Webcam.zip).
2. Extract the .zip file.
3. Copy the **.bin** file inside the extracted folder on your computer to the root directory of the microSD card.

    **CORRECTION:** In the video, I also copy the instructions PDF file. That's not necessary.

4. Eject the microSD card from the computer.
5. Insert the microSD card into the bottom of the Wyze Cam.
6. Press and hold the _Setup_ button while you plug the camera into a powered USB port with the USB A to USB A cable.

    **NOTE:** You cannot use the USB cable that comes with the Wyze Cam.

7. Continue holding the _Setup_ button for 3-6 seconds until the LED turns a bright blue.
8. Wait 3 to 4 minutes (it took less than a minute for me) for the firmware update and camera to reboot. When complete, the status light will flash yellow and blue at the same time.

The camera's firmware is now replaced and your new Wyze WebCam is ready to use.

## Use Wyze Cam as a webcam

Using this Wyze WebCam is as simple as plug-and-play. Here are the steps:

1. Connect the USB A to USB A cable between the Wyze WebCam and computer.
2. Test the webcam function with your favorite computer camera or online meeting application.

That's all there is to it. So how does it work? Let's break it down.

## Review of Wyze cam as a webcam

Below are my thoughts, in bullet form, on the conversion and use of the new Wyze WebCam. I demonstrate the operation of the firmware in the YouTube video that accompanies this post and link to that section, when available, after each bullet.

* Installation was easier than expected ([Firmware Installation](https://youtu.be/TOy8VQSQ_0Q?t=49))
* No issues with video after the firmware installation; it was simply plug-and-play ([Plug-and-play](https://youtu.be/TOy8VQSQ_0Q?t=544)]
* The Wyze Cam has a large field-of-view and one much larger than a normal webcam so it may seem odd at first as it captures more of the room that you might like ([Video Demonstration](https://youtu.be/TOy8VQSQ_0Q?t=651))
* Video image has subtle colors with very little saturation
* Video is not as sharp as say, a [Logitech C920 (#ad)](https://amzn.to/2x3IFAP), but it is 1080p and good enough; especially when you consider this is a $25 webcam that is available now (unlike the Logitech)
* The Wyze Cam is designed to work in low light situations and that feature is replicated in webcam mode
* On both the Linux and Mac computers, the device was found on every application that uses a camera, even OBS Studio; which on Linux can be a bit finicky (I may even use this as a regular camera on my OBS Studio setup)
* The Wyze WebCam microphone is unusable and you will need a separate microphone ([Unusable Audio](https://youtu.be/TOy8VQSQ_0Q?t=687))
* The speaker can be used, but expect enough lag between video and audio for it to be an annoyance ([Speaker latency](https://youtu.be/TOy8VQSQ_0Q?t=780))
* I could not test on a Windows PC so if you have, please leave comments below
* **2020-04-07 UPDATE:** I did test the camera on Chrome OS and as [you can see](https://youtu.be/ft5GLFBIPNw), the results were the same as Mac and Linux

## Final thoughts

Wyze claims this firmware is the first and last version they will release; that's a shame. While the firmware activates video, it is still in need of much work for microphone and speaker functionality (at least on Linux and Mac computers). I IMPLORE Wyze TO CONTINUE TO REFINE THIS FIRMWARE!

A completely operational firmware will open up the market for Wyze Cams, but more importantly during these weird times, allow those who cannot purchase an inexpensive webcam to tap into your inventory of Wyze Cams so they can telecommute. The microphone must work for these webcams to be useful. If folks don't have a webcam, they likely don't have a secondary USB or internal microphone on their computer. Please Wyze, continue development. I'll be the first to raise my hand to help beta test and we need to do this sooner, rather than later.

What's been your experience with Wyze Cams? Do you have a spare lying around the house that you plan to convert to a Wyze WebCam? Drop me a comment below or at the [YouTube video page](https://www.youtube.com/watch?v=TOy8VQSQ_0Q). Happy webcaming and remember, "wash those hands!"
