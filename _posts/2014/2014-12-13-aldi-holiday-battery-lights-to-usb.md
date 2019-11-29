---
layout: post
title: ALDI Holiday battery lights to USB
author: Steven B. Combs, Ph.D.
email: steven.combs@gmail.com
date: 2014-12-13 21:00
category: electronics
comments: yes
---

Nikki purchased a set of ALDI holiday lights for me a couple of weeks ago. I believe they were around $8.00. They run on two AA batteries (3v) and can switch between off, constantly on, or blinking. Although the batteries have yet to die, my goal was to provide power via a USB port (5v) on my Macs or [Chromebook](http://www.stevencombs.com/chrome.html). You've probably seen USB light sets for sale at Target and Walgreens and they usually cost around $15 to $20. The beauty of these USB powered lights is that they turn on when the computer is on and off when you power down or the computer goes to sleep.

I started with one of seven old Apple 30 pin dock connector cables (who needs that many 30 pin dock connector cables!?!). I cut off the 30 pin connector and stripped the wires. Luckily, the wires were color coded. I cut off all but the red for positive (pin 1) and black for negative (pin 4) connections. A volt/ohm meter verified my connections and power signal. You can find more information about the USB connector [here](http://pinouts.ru/Slots/usb_pinout.shtml)

I opened the battery compartment, removed the batteries and soldered the positive (red) and negative (black) wires to the battery connectors. Next I routed the cable back through the switch opening. Surprisingly, there was plenty of room. Finally, I put the battery compartment cover back on and flipped the switch. All the lights fired up and there was no smoke. Success! I believe the whole process took me all of about 15 minutes and that includes heating up the soldering iron.

{**UPDATE:** I burned out the LEDs. I made a boneheaded error and didn’t convert the 5v to 3v as I thought the number of LEDs could handle it. They couldn’t and the string started going out, one light at a time. Be sure to solder in a 150 ohm resistor between your positive source. This will convert the voltage roughly to 3v and should save your LEDs.}

Below is a video of the results.

<iframe src="//player.vimeo.com/video/114452584" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

This was a VERY simple hack that anyone with basic soldering skills can complete. Now I can enjoy the lights of Christmas while chugging away on my Mac.