---
layout: post
title: 'HOWTO: Level a Creality Ender 3 Surface Bed and Print a Commodore VIC-20 Key Plunger'
date: '2020-05-02'
author: 'Steven B. Combs, Ph.D.'
email: 'steven.combs@gmail.com'
comments: 'yes'
category: 3dprinting
tags:
  - 3dprinting
  - creality
  - ender3
  - build
  - surface
  - commdore
  - vic20
  - keyboard
  - plunger
  - stl
  - cura
---

Since I finally have my process working consistently, it is time to share how I level the bed on my [Creality Ender-3](https://amzn.to/3d6WHB2) 3D printer with [Creality Upgraded 3D Printer Platform Heated Bed Build Surface Glass Plate][https://amzn.to/31gy9R4] upgrade. If you a curious about the glass build surface upgrade, check out [this blog post](https://www.stevencombs.com/3dprinting/2019/06/08/creality-ender3-build-surface-upgrade.html).

This post shares both a YouTube video that demonstrates my process and written instructions. To test out the bed leveling, I print a keyboard plunger for a Commodore VIC-20. The printed plunger will replace a broken one. Check out the video to see if I was successful (or see the image below for the spoiler):

![Commodore VIC-20 key plunger printed](/images/posts/2020-05-02-keycap-old-new copy.jpg)

> **NOTE:** This post is part of a [series on 3D Printers](https://www.stevencombs.com/3dprinting). More posts to come.

## YouTube Video: _HOWTO: Level a Creality Ender 3 Surface Bed and Print a Commodore VIC-20 Key Plunger_

<div style="position:relative;padding-top:56.25%;">
  <p><iframe src="https://www.youtube.com/embed/i_-T8uYWwBs" frameborder="0" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;"></iframe></p>
</div>

## The Problem

Once I level the bed, I am going to test the surface by printing a key plunger for a [Commodore VIC-20 computer](https://www.stevencombs.com/commodore/2017/07/26/commodore-v20-ebay-purchase.html). If you don't know what this is, it really doesn't matter with regard to leveling the print surface. If you do know what this is, greetings from a fellow retro-computing enthusiast.

This is a perfect part to test the leveling on the Ender 3 because it is small and only connects to the print surface at two points (disregard my four point comments in the video) and those two points are small areas. If the bed isn't level and the heat set just properly, the print will fail miserably, and usually dramatically, with a mess of PLA.

You can [grab the VIC-20 key plunger STL file](https://www.thingiverse.com/thing:2677332) on Thingiverse. Thanks to Manuel Straub,
[mannesahne](https://www.thingiverse.com/mannesahne/about), for creating this part.

## Level the Creality Ender 3 Print Bed

Here are the steps I use to level the bed on my Creality Ender 3. This is a mashup of several techniques I found online in my attempt to make the process quick and easy.

1. Use the [putty knife](https://amzn.to/2YtEF7R) that comes with the Creality Ender 3 to lightly remove any left over PLA from previous prints. This process works for the [Creality Upgraded 3D Printer Platform Heated Bed Build Surface Glass Plate][https://amzn.to/31gy9R4] but I cannot recommend it for other surfaces.
2. Clean the glass bed with [Pre-Moistened Lens Cleaning Wipes](https://amzn.to/3aY5pAa). I prefer Zeiss or Welby brands.
3. Turn on the 3D printer power.
4. Move the print head to the X,Y, and Z home position. In my video, I use Octoprint to move the surface. You can use the default controls on the Ender 3.
5. Raise the print head up 10 cm along the Z axis.
6. Move the print head to X:70 and Y:70.
7. Place a piece of paper under the print head.
8. Move the print head to the Z home position.
9. While holding the paper in a single hand, try and push and pull the paper between the print head and the bed.
10. **If you can easily move the paper**, rotate the spring wheel under the bed clockwise slowly, while moving the piece of paper back and forth, until the piece of paper stops moving.
11. **If you can't easily move the paper**, rotate the spring wheel under the bed counter-clockwise until you can easily move the paper back and forth. Repeat step 10.
12. Repeat steps 7-11 at the following positions: (X:70,Y:170), (X:170,Y:170), (X:170,Y:70).
13. Test X:70,Y:70 one more time.
14. Move to X:120,Y:120 (or roughly the center) and test the final location.

If you find at step 13 you are out of level again, run through the steps all over. Over time, the bed springs (on the 3D printer, not the bed you sleep in) will settle and you will not have to level the bed as frequently. You are now ready to print. That's all there is to it.

I hope this post is helpful to Creality Ender 3 users new and old. It's a great printer and with some additional parts, finesse, and understanding, you can print some wonderfully useful items. Time for me to go. I have a Commodore VIC-20 keyboard to fix!

Drop a comment and let me know if this post was helpful or if you have further questions.
