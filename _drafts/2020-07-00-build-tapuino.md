---
layout: post
title: 'retroCombs: The Tapuino Project - Build a Commodore Datasette Clone with an Arduino Nano'
date: '2020-07-11'
author: 'Steven B. Combs, Ph.D.'
email: 'steven.combs@gmail.com'
permalink: `tapuino-1`
comments: 'yes'
category: retro
tags:
  - commodore
  - datasette
  - cassette
  - retro-computing
  - arduino
---

As part of my [Commodore Plus/4 series](https://www.stevencombs.com/plus4), chapter three of the user's manual includes a sections on using a Commodore Datasette and a 1541 Diskettte Drive. In a previous post, I created the [modern replacement for the disk drive](https://www.stevencombs.com/pi1541), now it's time to create a cassette desk replacement called, the Tapuino! "What's a Tapuino," you ask? It's a cool modern replacement for the [Commodore Datasette](https://en.wikipedia.org/wiki/Commodore_Datasette) made from an Arduino, in this case the [inexpensive nano version](https://amzn.to/2ZLXbaL) along with some easy to source additional electronic components. You can learn all about the Tapuino on the [Sweetlilmre's 1337 beef: Building the Tapuino R2](http://sweetlilmre.blogspot.com/2015/03/building-tapuino-r2.html?m=1) blog post.

This original blog post was written in 2015 and some things have changed since then. My post and companion video will include updates to build materials, layout, imagery, parts sourcing, and processes. Let's get this project started by listing all the materials necessary.

## Bill of Materials

The list below includes everything you need and the most inexpensive way I've found to source the items on Amazon. The problem is that you simply can't purchase some items as a single unit and will end up with extras. Not a problem for someone like me who has several projects on the bench at a time, but if you want the cheapest way to a Tapuino, I recommend you purchase a kit or completed unit from a vendor. Here's my list:

* 1 - [Arduino Nano V3](https://amzn.to/3dZyA7s)
* 1 - [16x2 LCD Display with I2C backpack](https://amzn.to/2NTOEwV)
* 1 - [SD Card module with built-in level conversion](https://amzn.to/2Daak5S)
* 1 - [Breadboard](https://amzn.to/2ZIsVh8): For prototyping
* 1 - [Prototype PCB Solderable Breadboard](https://amzn.to/3eYXCFd): For
* Header Pins
* 1 - [430 Ohm resistor](https://amzn.to/2DadoPr)
* 4 - [4x Momentary Switches with Color Caps](https://amzn.to/2BGfKVE)
* 1 - [4N25 Opto-coupler](https://amzn.to/2VLd7IW)
* 1 Spool - [Solid core breadboard wire](https://amzn.to/3iqLTBr): Multicolor will assist in wire tracking
* 1 Spool - [Soldering Iron](https://amzn.to/2YYFHJd)
* 1 - [6 Pin DIP](https://amzn.to/31JkhkV)
* 2 - [15 Rail Female Headers](https://amzn.to/3izfbhk)

Makers or electronic hobbyist probably have many of these items (I did!) and only need to purchase one or two of the items above. I did splurge for this project with the purchase of the mutli-color momentary switches and the all-in-one LCD display with I2C backpack (I had them as separate items). I did not have a 4N25 octocoupler or a "solderable" breadboard. 

## Tools

1. [Wire Stripper](https://amzn.to/31MNOds)
2. [Soldering Iron/Station](https://amzn.to/2ZEpuYy)
3. [Rosen Core Solder wire](https://amzn.to/3f4FQAg)

## Prototype Time

The first step in my process was to use a regular breadboard to build the Tapuino based on Sweetlilmre's original Fritzing file, as shown below:

![Tapuino Fritzing Layout](http://2.bp.blogspot.com/-h7CGISvaymA/VQc9a61cijI/AAAAAAAAKpo/_zOHc1vSwYY/s1600/tapuino_bb-r2.png)

Afterward, I played around with the layout to streamline, and or, update part locations. Very little changed from the original because it was already efficient; however, I was able to locate updated Fritzing parts. A Fritzing image of my layout is below as well as a download link for the original .fzz file.

![My Fritzing Image](link)

[Download my Fritzing File](https://www.stevencombs.com/tapuino/images/???.fzz)

## Next Up

One of the reason's I choose to use a solderable breadboard was to provide a permenant platform for the electronic so I could design a 3D printed case. I've already started thinking about this and have some rough designs. More on that in a future post and video.

## References

Huge thanks to Sweetlilmre for the original instructions. This would not have been possible with our their good original work. I hope I have added something to the build!

* [1337 beef: Building the Tapuino R2](http://sweetlilmre.blogspot.com/2015/03/building-tapuino-r2.html?m=1)
* [GITHUB: sweetlilmre/tapuino: tapuino](https://github.com/sweetlilmre/tapuino)
<!--stackedit_data:
eyJoaXN0b3J5IjpbMTAzODQwNTI0NiwxMDM4NDA1MjQ2LDYzMz
Q2NjUwNiwxMjYzODgxMTMzLC0xOTA2MTQ5MjgyXX0=
-->