---
layout: post
title: 'Thomas Arc Reactor'
date: 2019-04-20 12:00:09
comments: 'yes'
categories:
  - arduino
---

In 2017 my son had surgery for his spine. It was pretty invasive, but at the end, he is standing taller and will be much more comfortable. As part of his rehab, he is required to wear a brace. We joked that with the brace on, he looked like Iron Man. That was all I had to hear. Time to build an Iron Man like Arc Reactor for his chest plate. 

My goal was a quick and inexpensive build. I had the materials I needed, but two I would have to purchase: an [Arduino Flora][1] and a [24 LED NeoPixel Ring][2]. A quick search on Amazon led me to both items. Total cost was $23.00 minus tax. Not bad! Below is my build list complete with links. I've included links to all supplies in case you want to follow along and are missing something.

# Build List

* [Adafruit Flora][3] - $13.00
* [24 LED NeoPixel Ring][4] - $10.00
* [Micro USB Cable][5] - $6.00-$10.00 (you should have one in your home)
* [Multicolor Electronic Alligator clips][6] - $8.00
* [22 Gage Wire][7] - $18.00
* [Soldering Iron and kit (w/Solder)][8] - 
* 3 inch peanuts can lid (you will have to search for this one)

# Install Arduino IDE on computer

For Mac (my use case scenario), download the software found in the link below:

[https://www.arduino.cc/en/Main/Software][9]

You must have version Arduino IDE version 1.6 or greater installed to load use the Adafruit Flora board. More on this below. At the time of this writing, you cannot use the [Arduino Web Editor][10] to program the Adafruit Flora.

# Configure third-party board

The Adafruit Flora is not an official Arduino board. You will need to add third-party support to the Arduino IDE. Luckily, Adafruit makes this very easy. Use the directions found in the link below:

[https://learn.adafruit.com/adafruit-arduino-ide-setup/arduino-1-dot-6-x-ide][11]

# Test Arduino IDE install, Flora board and on-board NeoPixel LED

The page below provides directions to load the NeoPixel libraries and code to test the on-board NeoPixel LED.

[https://learn.adafruit.com/getting-started-with-flora/blink-onboard-neopixel][12]

This will also allow us to test our IDE install as well as our Flora board. We will do this before we add our NeoPixel ring of lights as this will make troubleshooting much easier.

Connect the Flora to your computer using a micro-USB cable as shown in the image below.

{Insert Image}

In the Arduino IDE, also make sure you select the proper port using the Tools / Port: menu. For my system, the proper port was:

dev/TTYACM0 (Adafruit Flora)

# Wire the Arduino Flora and the NeoPixel with alligator clips

Be very careful going forward. You will now use the alligator clips to wire the Arduino Flora to the NeoPixel. We do this first to test our hardware and software. This is not difficult, but you should be very careful you don't put power leads where they don't belong. Below is the schematic for my wiring setup.

{Insert Fritzing Image}

# Use code to test the build

To make this an easy afternoon build with little to no code work, I decided to borrow code from the community. Specifically, I modified the following code:

[https://learn.adafruit.com/getting-started-with-flora/blink-onboard-neopixel#demo-code][13]

Designed to test the Flora's on-board NeoPixel. I found with just minimal modification, I would use the same code to power the NeoPixel ring. The colors cycle randomly and I think it works well as an arc reactor. The main modification I made was to have the NeoPixel on the Flora also cycle with the ring. My final code is below for you to copy and paste.

[1]:	http://amzn.to/2wEqWL7
[2]:	http://amzn.to/2wEPlk0
[3]:	http://amzn.to/2wEqWL7
[4]:	http://amzn.to/2wEPlk0
[5]:	http://amzn.to/2vtmdO4
[6]:	http://amzn.to/2vQ8SjX
[7]:	http://amzn.to/2fB2beY
[8]:	http://amzn.to/2fBGTOr
[9]:	https://www.arduino.cc/en/Main/Software
[10]:	https://create.arduino.cc/editor
[11]:	https://learn.adafruit.com/adafruit-arduino-ide-setup/arduino-1-dot-6-x-ide
[12]:	https://learn.adafruit.com/getting-started-with-flora/blink-onboard-neopixel
[13]:	https://learn.adafruit.com/getting-started-with-flora/blink-onboard-neopixel#demo-code
