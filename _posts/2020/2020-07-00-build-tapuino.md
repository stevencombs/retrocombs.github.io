---
layout: post
title: 'retroCombs: The Tapuino Project - Build an Arduino powered Commodore Datasette clone for the Commodore Plus/4'
date: '2020-07-19'
author: 'Steven B. Combs, Ph.D.'
email: 'steven.combs@gmail.com'
permalink: tapuino-1
comments: 'yes'
category: commodore
tags:
  - commodore
  - datasette
  - cassette
  - retro-computing
  - arduino
  - plus4/4
  - c16
  - ted
  - tap
---

As part of my [Commodore Plus/4 series](https://www.stevencombs.com/plus4), chapter three of the users manualincludes a section on using a Commodore Datasette and a 1541 Diskette Drive. In a previous post, I assemaeme replacement for the disk drive](https://www.stevencombs.com/pi1541) now its time to nt called, the Tapuino.

Wt’'s a Tapuino, you ask? Its acool Arduino-based replacement for the [Commodore Datasette](https://en.wikipedia.org/wiki/Commodore_Datasette). For this project I use an Arduino, in this case the [inexpensive Arduino Nano version](https://amzn.to/2ZLXbaL), along with some easy to source electronic components. You can learn all abot the Tapuino on the [Sweetlilmres 1337 beef: Building the Tapuino R2](http://sweetlilmre.blogspot.com/2015/03/building-tapuino-r2.html?m=1) blog post.

>  While this post focuses on the Tapuino for a Commodore Plus/4, this build will also work with a C16 or other  series Commodore computer](https://www.c64-wiki.com/wiki/Commodore-264_series). If you want to se the Tapuino with a VIC-20, C64, or C128, you only need to  a aette rplace the 7 pin DIN connector with this [C2N Power Adapter](http://store.go4retro.com/c2n-power/) that will also allow you to tap power from those computers for other projects.

Sweetlilmres (s that pronounced, Sweet Lil Marie?) original blog post was written in 2015 and things have changed. His build uses [veroboard](https://amzn.to/3998Fta) to assemble and connect the Tapuino components. I i use a breadboard will movemy will use a breadboard. Later, I i use a breadboard.  will move my working Tapuino project to a "solderable" breadboard and create a custom 3D printed case. I’'m looking forward to that project!

This post and the companion video includes updates to build materials, layout, imagery, parts sourcing, and processes. Before you read this blog post, watch the video below. It shares my build process and first use of the Tapuino. Hopefully you will have a little fun along the way.

## YouTube Video: _retroCombs: The Tapuino Project - Build an Arduino powered datasette clone for the Commodore Plus/4_

In the video below, I breadboard and operate a Tapuino connected to a Commodore Plus/4:

<div style="position:relative;padding-top:56.25%;"><p><iframe src="https://www.youtube.com/embed/1Dqbg1-s0m4link" frameborder="0" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true" style="position:absolute;top:0;left:0;width:100%;height:100%;"></iframe></p></div>

Lets tart  project with a list of materials.

## Bill of Materials

The list below includes everything you need and the most inexpensiveconvenient way Ive found to source theS he problem is that you simply cant purchase some items as a single unit. Not a problem for someone like me who has several projects on the bench at a time, but if you want the cheapest way to a Tapuino, purchase a kit or a [completed unit](https://www.ebay.com/sch/i.html?_from=R40&_trksid=m570.l1313&_nkw=tapuino&_sacat=0).

Below is my list of materials:

* 1 - [Arduino Nano V3](https://amzn.to/2ZcGZjL) - This is the second nano I use in the video and not the first!
* 1 - [16x2 LCD Display with I2C backpack](https://amzn.to/2NTOEwV) - The Tapuino can use other displays, but these are the most cost effective
* 1 - [SD Card module with built-in level conversion](https://amzn.to/2Daak5S) - Different than the unit Sweetlilmre specifies, but it works perfectly
* 1 - [Breadboard](https://amzn.to/2ZIsVh8) - Yes, this should work, unlike the one I had troubles with in the video
* 1 - [430 Ohm resistor](https://amzn.to/2DadoPr) - Seriously, if you want to try this project and don't have this resistor, for the cost of a SASE, I'll send you one
* 1 - [Breadboard](https://amzn.to/2ZIsVh8) - One that works
* 1 - [430 Ohm resistor](https://amzn.to/2DadoPr) - I have a bunch of these now.
* 4 - [Momentary Switches with Color Caps](https://amzn.to/2BGfKVE) - I didn't use the color caps in this video, but may on my custom case.
* 1 - [4n25 Optocoupler](https://amzn.to/2VLd7IW) - Same a resistor notes
* 1 - [Spool of solid core breadboard wire](https://amzn.to/3iqLTBr): Multicolor will assist in wire tracking
* 1 - [Spool of solder](https://amzn.to/3f4FQAg) - Just in case you are low.
* 1 - [7 Pin DIN plug connector - Plan accordingly if you e in the United States.S. because these take awhile to get across the pond

Makers or electronic hobbyist probably have many of these items (I did!) and only need to purchase  few. I did splurge for this project with the purchase of the multi-color momentary switches and the all-in-one LCD display with I2C backpack (I had them as separate items). I did not have a 4n25 optocoupler.

## Tools

 [Wire Stripper](https://www.harborfreight.com/electrical/electrician-s-tools/wire-strippers-crimpers/heavy-duty-self-adjusting-wire-stripper-36810.html) - I really do think this isEpuYy) - This is an inexpensive station that I recommend the best $10 I've spent for my electronic projects.
2. [Solder/Station](https://amzn.to/2ZEpuYy) - This is an inexpensive station that I recommend.
4. [Rosen Core Solder wire](https://amzn.to/3f4FQAg) - In case you are running low.

## Fritzing Time

The first step in my process was to use a regular breadboard to build the Tapuino sng Sweetlilmre's original Fritzing file below:

![Tapuino Fritzing Layout](http://2.bp.blogspot.com/-h7CGISvaymA/VQc9a61cijI/AAAAAAAAKpo/_zOHc1vSwYY/s1600/tapuino_bb-r2.png)

Afterward, I played around with the layout to streamline, and or, update part locations. Very little changed from the original because it was already efficient; however, I was able to locate updated Fritzing parts and took a different approach to labeling the cable connection. A Fritzing image of my layout is below as well as a download link for the original .fzz file.

![My Fritzing Layout](https://www.stevencombs.com/tapuino/images/tapuino_bb.png)

[Download my Fritzing File](/tapuino/images/tapuino.fzz)

## dn h oI demonstrate how to build the Tapuino in the video; however, below are additional thoughts and tips:

1.  While Fritzing allows me to document my build, the other advantage is that  laying out the Tapuino in Fritzing, I become more familiar with the build and how the components operate. This came in handy when troubleshooting (and there was a lot) really helped when it came to troubleshooting.
2.  Id not used an 4n25 optocoupler; or opto-isolator (which is why it took me a few times to say it correctly in the video). Its aice. Sweetlilmres site doesnt explain what it does, so I did a bit of research. Wikipedia says an optocoupler:

    > is an [electronic component](https://en.wikipedia.org) that transfers electrical [signals](https://en.wikipedia.org) between two isolated circuits by using light. Opto-isolators prevent [high voltages](https://en.wikipedia.org) from affecting the system receiving the signal. Heres [the data sheet](http://www.farnell.com/datasheets/1930778.pdf) if youd like to learn more.

3.
*   [Build your own 1530 to C16,C116,Plus/4 adapter and make an C64 SD2IEC work on your 264 computer – awsm](http://blog.awsm.de/build-your-own-1530-to-c16c116plus-4-adapter-and-make-an-c64-sd2iec-work-on-your-264-computer/)

## Next Up

One of the reason’'s I choose to use a solderable breadboard was to provide a permanent platform for the electronic so I could design a 3D printed case. I’'ve already started thinking about this and have some rough designs. More on that in a future post and video. For now, leave you comments and questions below or in the comments under the YouTube video. I’'ll do my best to answer them.h
<!--stackedit_data:
eyJoaXN0b3J5IjpbNzA5Mjg2ODA3LDIwOTMyNDQ0MF19
-->
