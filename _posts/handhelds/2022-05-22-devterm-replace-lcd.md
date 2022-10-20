---
layout: post
title: 'Replace the LCD Panel in a Clockwork Pi DevTerm A06'
date: 2022-05-22
author: 'Steven B. Combs, Ph.D.'
email: 'retrocombs@icloud.com'
comments: yes
permalink: devterm-replace-lcd
category: handhelds
---

In a previous Clockwork Pi DevTerm assembly video, I my LCD panel was broken and I had to hack the panel in order to get it working; however, Clockwork was quick to send out a replacement and during a 2022-05-01 livestream, I replaced my hacked up LCD screen with the new one.

The video below is a 27 minute edit of the longer one hour and thirteen minutes livestream.

[WATCH THE FULL LIVESTREAM!](https://www.buymeacoffee.com/retroCombs/e/72266)

![Clockwork Pi DevTerm](https://static.wixstatic.com/media/3833f7_78ede19cf07549989bd0b0835dd1b94d~mv2.png/v1/fill/w_1657,h_1000,al_c,enc_auto/DevTerm_fig01.png)
<center><font size=2>Image courtesy of Clockwork Pi, <https://www.clockworkpi.com></font></center>

A huge shout-out to [Clockwork](https://www.clockworkpi.com), and Alex, for the opportunity to experience the DevTerm. They sent their top-of-the-line DevTerm, the A06, to me at no cost. That's a $340 value and I am under no obligation to provide a positive review. My thoughts are my own. Thanks again, Clockwork, for supporting my [YouTube channel](https://www.youtube.com/stevencombs) and [blog]()!

## Support the Blog and Channel

You can now support me via [my Buy Me A Coffee page](https://www.buymeacoffee.com/retroCombs/) with a onetime activity or become a full member via my fun Commodore inspired membership levels. When you support the channel, you get additional content and fun extras. Check out [the membership levels](https://www.buymeacoffee.com/retroCombs) to learn more.

Thank you to these members for supporting me at [the C128 and MEGA65 level](https://www.buymeacoffee.com/retroCombs/membership); making them retroCombs (executive) producers:

Producers:
- [Jamie's Hack Shack](https://www.youtube.com/c/JamiesHackShack/)
- The Lovely Accountant

Executive Producers:
- Boba Fett
- Mislav Krleža
- mindrail


## Watch the Video

Title: _‌I unbox, assemble and demo the Clockwork Pi DevTerm A06. See how it went._

In this video, I replace the DevTerm LCD panel and demonstrate the VirtualT emulator.

<div style="position:relative;padding-top:56.25%;"><p><iframe src="https://www.youtube.com/embed/hEy1ue18MFY" frameborder="0" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true" style="position:absolute;top:0;left:0;width:100%;height:100%;"></iframe></p></div>

## Video Errata

None as of 2022-05-22.

## TRS-80 Model 100 Similarities and Emulator

After I install the replacement LCD panel, I compare the DevTerm to a TRS-80 Model 100. I don't show how to install the software (a later video), but I demonstrate the [VirtualT TRS-80 Model 100 emulator optimized for the DevTerm](https://forum.clockworkpi.com/t/virtualt-tandy-trs-80-model-100-emulator-for-devterm-a06-a04/8296).

![TRS-80 Model 100](https://upload.wikimedia.org/wikipedia/commons/e/e9/Radio_Shack_TRS-80_Model_100.jpg)
<center><font size=2> By NapoliRoma - Own work, Public Domain, <https://commons.wikimedia.org/w/index.php?curid=3378530> </font></center>

The emulator has a few quirks, but it's good! More on this emulator in the future.

## Links Mentioned in this Episode

Below are the links I mention in this blog post and companion video.

1. [ClockworkPi](https://www.clockworkpi.com)
2. [DevTerm A08](https://www.clockworkpi.com/devterm)
3. [Wikipedia TRS-80 Model 100 Entry](https://en.wikipedia.org/wiki/TRS-80_Model_100)
4. [VirtualT Emulator](https://forum.clockworkpi.com/t/virtualt-tandy-trs-80-model-100-emulator-for-devterm-a06-a04/8296)

## DevTerm Specifications

There are various models of the DevTerm. The model sent to me by Clockwork was the A06 that includes:

![DevTerm Iso shot](https://lh3.googleusercontent.com/4WnC4VIqa4xhLrJXaZ3KTvizC7MArtkkIEktINEUDdS6bBSiUKBlB1dqTG9DdHV5EZ_OpcE7aegxpUjBLP4=w782-h440-rw)

- ClockworkPi v3.14 mainboard
- A-06 Core module (ARM64-bit Dual-core Cortex-A72 + Quad-core Cortex-A53, Mali-T864, 4GB LPDDR4)
- Ext. module that includes additional ports
- 6.86-inch IPS screen module
- Clockwork 65% keyboard
- Battery module (batteries not included)
- Dual speakers
- 58mm 200dpi thermal printer component
- Shells and bracket system
- 32GB high-speed TF-card with clockworkOS

The A06 model includes plenty of ports:

- 3 USB B
- 1 USB C
- 1 Micro HDMI
- 1 3.5mm headphone
- 1 Micro SD Card
- 1 Thermal printer expansion port

It’s a fun and capable gadget if you can get past the 65% keyboard.

## Crushed Ribbon Cable

Below is an image of the crushed/split ribbon cable. I did not show this in the video.

![Tear in DevTerm display ribbon cable](https://lh3.googleusercontent.com/AdN1qmIfjxbEWwZMWtMMsS6Wta1l671g7PhmNlZJD05BWyJU21Y5JNj_nuNSbdPtEPG9IIP3CX7t_-ypLa0=w782-h440)

Thanks again to Clockwork for immediately shipping a replacement. While waiting, I grabbed my ohm meter, an X-Acto knife, wire, and soldering iron and got to work.

With the tip of the knife, I lightly scratched the plastic from the ribbon cable to expose the conductive material underneath. I used the ohmmeter to test across the ribbon cable to the connector on the LED driver board. Once I had enough of the ribbon cable exposed to make a consistent circuit, I soldered a small wire to the ribbon cable and then to the LED driver board. I connected it to the DevTerm, turned it on, and after about 10 seconds, the display LEDs turned on.

![Display panel LEDs working after my hack](https://lh3.googleusercontent.com/xmfbJDPRBKaoQgIUWmRkkk0W9yVWAGXLpJnQrr8sHqUst1o6ufv6_syA298p7hw8_0d80gyAeIQASb82xlQ=w782-h440-rw)

## More DevTerm Content?

As I mention during the video, I have even more content I want to produce for the DevTerm that includes:

- Install Xemu (the MEGA65 emulator)
- Install EmulationStation
- Further Model 100 Comparisons

What ideas do you have or what do you want to see? Drop a comment below and let me know.

## Join the Fun

Don't miss the retro-computing fun. <font color="red">SUBSCRIBE</font> to my [YouTube channel](https://www.youtube.com/stevencombs) and check out [my other posts]().

Help make this content better! Leave your comments, corrections, additions, and thoughts in the comments below. You can email me at [retrocombs@icloud.com](mailto:retrocombs@icloud.com). Thanks for reading and if you are inclined, please let others know about the blog using the hashtag #retroCombs.

🕹️ retroCombs, OUT!
