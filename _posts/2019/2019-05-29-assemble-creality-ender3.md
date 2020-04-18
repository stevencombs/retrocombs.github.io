---
layout: post
title: 'HOWTO: Assemble the Creality Ender-Pro 3D Printer'
author: 'Steven B. Combs, Ph.D.'
email: 'steven.combs@gmail.com'
date: 2019-05-29
category: 3dprinting
comments: 'yes'
tags:
  - howto
  - creality
  - ender3
  - 3dprinting
  - 3dprinter
  - setup
  - assembly
---

I purchased my first 3D Printer over the 2019 Memorial Day weekend. I've been researching 3D printers for over 18 months and found it difficult to choose a brand and model. I have been searching for a printer that meets specific criteria:

* Affordable (under $200)
* Popular printer with a large community of users
* Upgradeable (both hardware and software)
* Large-ish print bed (200mm or larger)
* Compatible with Octoprint
* Heated bed
* Easy to assemble
* Well reviewed
* And of course, produces good prints

> **NOTE:** This post is part of a [series on 3D Printers](https://www.stevencombs.com/3dprinting). More posts to come.

While browsing 3D printers at Amazon, I found the [Creality Ender-3 for $229 with a $40 coupon code](https://amzn.to/2Wt0i7O). It met my first criteria. This was not the Ender-3 Pro. However, that model was currently more than $200 and after reading comparisons of the two, there wasn't enough value in the Pro version to justify the extra cost. The Ender-3 also met all of my criteria. The remainder of this post will be my experience assembling the printer. It will be in journal format with times listed to give you an idea of how long each step took.

Let's get to it:

# Day 1: 11:10 - Draft the blog post
A blog post draft in [Sublime Text](https://www.sublimetext.com/) is ready (you are reading it). Time to break open the Creality box and see what's inside.

![Opening the box](/images/posts/2019-05-29-assemble-creality-ender3/01.jpg)

# 11:22
First item out of the box is poorly translated assembly instructions. Images are well done and I should be able to assemble using these instructions. If not, I'm sure there's a YouTube video that can help {Update: Didn't need to use any stinkin' video}. Each item has an associated number. I will use these numbers as a reference in this post.

![Instructions](/images/posts/2019-05-29-assemble-creality-ender3/02.jpg)

# 11:25
First thing I noticed, and a bit disappointing, is the Ender-3 does not include the magnetic build plate. It is removable, but is held down with the included binder clips. {Update: Online sources reveal not having the magnetic version found in the Pro pack may be a good thing. Seems heat transfer is an issue.}

![Image of build plate](/images/posts/2019-05-29-assemble-creality-ender3/03.jpg)

# 11:27
Not sure which items to pull out of the box first, so started with the printer control assembly.

![First package to remove](/images/posts/2019-05-29-assemble-creality-ender3/04.jpg)

There is protective covering on the LCD panel. I'll leave that on until the assembly is complete. All-in-all, the printer seems well packaged for shipping. I do not anticipate any shipping damage to the printer.

![Printer control assembly](/images/posts/2019-05-29-assemble-creality-ender3/05.jpg)

# 11:31
Now I'm really confused. Not sure what to take out of the box next so I am working my way around the small things first and in this order:

1. Control Display (as mentioned above) - Part 01
2. Support rails - Part 19
3. Base unit - Part 02 (Which is a bit confusing because there are a whole bunch of wires and the print head is connected to this base. Be VERY careful removing it from the box and make sure you don't tug on anything.)
4. Print head servo assembly - Part 06 (This thing is a beast! All metal assembly. So glad I chose this over the [Anet a8 Prusa i3](https://amzn.to/2HKzoQH).
5. Power supply - Part 03 (Another reason to choose the Ender-3 is the 24v power supply. Other under $200 models often include a 12v supply. 24v should ensure better heating with power to spare for mechanicals.) {Update: I've also learned that I may be able to power my OctoPi server to this power supply and reduce cabling.}

# 11:46
I removed the first layer of packaging to reveal another layer underneath. Items on the second layer include:

1. Power cord - Item 13
2. Spool holder - Item 11
3. Servo motor - Item 08
4. Putty knife - No item number for tools package or tools
5. Vertical screw - Item 16 (Nice touch to include in protective tube.)
6. Vertical rails - Items 15 and 16
7. Material Spool - Item 10
8. Z axis limit switch - Item 9 (Next items are included in the same bag.)
9. Roller assembly - Item 07
10. Spare print head and tubing materials
11. Small sample of PLA material (Not sure there's enough here to print anything. No worries though, I purchased [three spools of red, black and white PLA](https://amzn.to/2EPqks7) for $33 with a 5% off coupon.)
12. 8Gb MicroSD card with USB adapter (SDCARD includes several resources, users guides, video and sample STL files. First thing I did was back them up to a Google Drive folder. I'm glad I spent time reviewing the contents. There are several different assembly instruction PDFs as well as a video. Those will prove to be handy when I begin assembly.)
13. Roller guide - Item 04 (The next items are included in one last package of goodies.)
14. Snip (Sharp and will be handy during both assembly and when cleaning off support material from prints.)
15. Zip ties (Cable management.)
16. Tool to clean out print head (I think.)
17. M5T Nuts
18. Support end covers
19. Spool holder plastic nut
20. 5 Allen wrenches
21. Two open end wrenches
22. Small screwdriver
23. 3 M4x20 screws
24. 6 M4x16 screws with washers and nuts
25. 6 M5x45 screws with washers
26. 2 M4x14P screws with spanning nuts
27. 5 M5x8 screws
28. 2 m4x18P screws
29. M5x25 screws with lock washers
29. 1 tractor belt

![Items in box](/images/posts/2019-05-29-assemble-creality-ender3/06.jpg)

Whew! And that completes removal of all parts and cataloging. Time: 12:18. Lunch time!

# 15:32
Took some time to download software and firmware using my Chromebook while watching an old Kung Fu movie on my [Roku Ultra](https://amzn.to/2W4yFxS). Downloaded new firmware for the Ender-3 along with Linux (appImage) and Mac (.dmg) versions of Cura, the free 3D slicing software recommended by everyone online. I have no idea how to use any of this, but looking forward to trying it out.

While downloading files, I also received a box from Amazon. This includes items to create an [OctoPi](https://octoprint.org/download/) to connect to the Ender-3. More on that in a future post.

For these next steps, I have tied the narrative to the step number in the PDF file provided on the microSD card. This should help you follow along if you are trying to assemble this printer. That PDF file is also linked below:

[Creality Ender-3 Assembly Instructions](https://drive.google.com/file/d/1nLkTChG2zS2tO0WVDwsVHVgDhTJWrLlv/view?usp=sharing)

{Update: The day after, I found another PDF file that included English text next to each image! That would have been helpful.}

# 17:18 - (Step 1) Vertical Supports
Time to begin assembly. Glad I found those instructions on the included miroSD. The included tools are put to use immediately.

Right off the bat! I put the wrong vertical support on the wrong side. Didn't look to see that they were different. Will make note of this as I now remove said support and put it on the correct side! AND, I didn't even install the lock washers. It's going to be a long install.

I asked my Google Home Hub to play some calming music ([Cinemix on TuneIn](https://www.cinemix.us/)). That seems to be helping.

![Vertical beam assembly](/images/posts/2019-05-29-assemble-creality-ender3/07.jpg)

Vertical supports now installed correctly.

# 17:43 - (Step 2) Power supply and control panel
Another Allen wrench. I feel like I'm assembling what an IKEA version of a 3D Printer would be. And that's not necessarily a bad thing.

![Power supply and control panel](/images/posts/2019-05-29-assemble-creality-ender3/08.jpg)

Remember to switch from 230v to 115v on the power supply if you live in North America.

# 17:52 - (Step 3) Limit switch plate on vertical bar.
Limit switch is in a plastic bag inside another plastic bag. It is well protected. This is interesting. The screws and hammer nuts for the limit switch are on the limit switch. The only part packaged this way. {Update: There were others.}

![Vertical limit switch](/images/posts/2019-05-29-assemble-creality-ender3/09.jpg)

That was a bit tricky. I had to align the hammer nuts perfectly in the channel before tightening. Glad there was a stop on the limit switch holder to perfectly place it on the channel. {Update: The hammer nuts will seat themselves as you tighten. No need to worry with exact alignment. Just get them close.}

# 18:05 - (Step 4) Vertical servo and screw
This seems to be straight forward. I had to move the bed to tighten the screws. I dropped the vertical screw bar as shown in the instructions. It did not instruct me to tighten the bar. Hopefully that will come in a later step. Most likely some parts alignment that needs to occur first. I'm also keeping the protective sleeve on the screw bar to protect it. {Update: Good move on my part. I hit this vertical bar a couple of time. Probably wouldn't have hurt it, but who knows.}

# 18:16 - (Step 5) Horizontal servo chassis (w/limit switch)
This step is a bit scary. I'm not quite sure what I'm looking at but will give it a shot. That was a bit tricky due to a very tight space for the screws and the possibility that if not careful, I could damage the limit switch. Thanks to Creality for including holes in the roller plate so the Allen wrench could reach the screws.

![Horizontal assembly](/images/posts/2019-05-29-assemble-creality-ender3/10.jpg)

# 18:32 - (Step 6) Horizontal belt
The belt was easy to install but hangs loose making it difficult to work with on the next few steps.

# 18:35 - (Step 7) Printer head assembly
Oh boy, this looks complicated. Ugh, I have to try and get that print head on the rail with that umbilical cable out of the way. This is the trickiest step so far. It would have been helpful for the instructions to mention that you must install the print head before the tri-roller mount. Of course, it shows it that way, but I and I'm sure others may have assumed you could roll that on afterward - you cannot! Had to take the roller assembly off and put it back on.

![Print head assembly](/images/posts/2019-05-29-assemble-creality-ender3/11.jpg)

Connecting the belt to the print head on was also a bit tricky not knowing how it would be tightened later.

# 18:56 - (Step 8) Belt tensioner
Another part with screws and hammer nuts included. It's getting difficult to install the print rail due to the umbilical cord and confinement from the bar. It seems like I have it together properly though. Rail moves smoothly.

![Animation of print head rail](/images/posts/2019-05-29-assemble-creality-ender3/01.gif)

Phone call! Be back soon.

# 19:06 - (Step 9) Horizontal bar
Finally! I don't have to balance the horizontal print head bar anymore. Time to install it on the vertical supports.

Removed the vertical screw cover. Remember the screw on the connector at the bottom of the vertical bar? It didn't say to tighten it in this step either, I tightened it anyway. There were two screws the instructions say to "Don't tighten too tight." What they mean is leave them loose. If you tighten them at all, the vertical screw will not turn smoothly and the bar will not move up and down easily. Could strain your stepper motor if you make this mistake.

![Vertical screw, screws](/images/posts/2019-05-29-assemble-creality-ender3/12.jpg)

# 19:21 - (Step 10) Top horizontal bar support
As far as assembly goes, this was likely the easiest step so far. Okay, maybe Step 2 was easier. It was a tight, but necessary, fit to ensure everything was held together tightly. Hey! It's finally starting to look like a 3D printer.

![Vertical bar makes it look like a 3D printer](/images/posts/2019-05-29-assemble-creality-ender3/13.jpg)

# 19:30 - (Step 11) Material spool
That went smoothly. I just had to anticipate the best location for the spool so the material will feed smoothly into the feed mechanism. No direction given for that distance across the top support rail.

![Spool holder](/images/posts/2019-05-29-assemble-creality-ender3/14.jpg)

# 19:38 - (Step 12) - Electrical connectors
I'm getting close to the end now. Just have to take my time and ensure every electrical connector is where it belongs.

Oops. Just noticed I didn't put on the end caps from step 10. Doing that now.

Love, love, love the little yellow plastic identifiers on the cables. Not just electrical, but the feed tube as well. Feed tube installation is not well explained. Here are the steps I used:

* Take out one of the tube connectors from the bag (not stated in instructions)
* Connect and then place the blue spacer between gray connector holder as shown in the image below (The blue spacer tightens the connection. I would not have known this had I not watch some umpteen million videos on YouTube while waiting for this 3D printer to arrive.)
* Tighten the tube connector, lightly so as not to strip the threading, to the feed mechanism using the supplied open-end wrench

![Feed tube connector and assembly](/images/posts/2019-05-29-assemble-creality-ender3/15.jpg)

Looks like the last thing to do is connect the controller. Hmmm. It does not say to connect the power cord but I'm going for it. Before turning it on, I'm going to clean up my desk.

Just noticed as I was cleaning up that there are cable ties. I'm going to hold off on those for now. Want to see how it operations before I lock down cable routing. I also understand that there are some 3D prints available that help with cable management (another post).

I also placed the bed cover back on the heat bed using the provided binder clips; seems so low tech.

Current time 20:02. Not bad. That's a pretty quick build time even when you consider that I was capturing notes on my computer and images with my [Pixel 3](https://amzn.to/2KcPzrJ) during the process.

Okay, this is disturbing. I have a bag of M4x14P with M4T nuts. I've looked and I don't see them in the printed instructions included in the box or the PDF file. I also don't see any holes not filled. I'll assume they aren't needed and are used for optional parts. Lots of other spare screws and nuts, but they are all duplicates of other's used. I am not worried about those.

# 20:09 - Turning 3D printer on the for the first time
It's plugged in. Do I dare throw the switch? Here I go.

![Turning the device on for the first time](/images/posts/2019-05-29-assemble-creality-ender3/16.jpg)

Fans are on, smell of ozone, and controller display is bright. Success so far. Now to test the motors. I'll try the `Auto home` option.

![Controller display](/images/posts/2019-05-29-assemble-creality-ender3/17.jpg)

And it works! Assembly complete.

# What's next?
I have no idea. I've never 3D printed anything before and I know there is a learning curve. I'll soon find out how steep that curve is. While learning, I will continue to document the process and post here. As a matter of fact, my next post, [preparing the 3D printer to print](https://www.stevencombs.com/3dprinting/2019/06/02/set-up-ender3.html), is now live.

I hope you enjoyed this post on the assembly of my new Creality Ender-3. Leave a comment below if you have any tips for me.
