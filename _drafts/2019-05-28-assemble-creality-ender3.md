---
layout: post
title: 'Assembling the Creality Ender-Pro 3D Printer'
author: 'Steven B. Combs, Ph.D.'
email: 'steven.combs@gmail.com'
date: 2019-05-29
category: 3dprinting
comments: 'yes'
---

I purchased my first 3D Printer over the 2019 Memorial Day weekend. I've been researching 3D printers for over 18 months and found it difficult to choose a brand and model. I have been looking for printers that meet certain criteria:

* Affordable (under $200)
* Popular printer with a large community of users
* Upgradeable (both hardware and software)
* Large-ish print bed
* Compatible with Octoprint
* Heated bed
* Easy to assemble
* Well reviewed
* Produced moderately good prints

While browsing 3D printers at Amazon, I found the [Creality Ender-3 for $229 with a $40 coupon code](https://amzn.to/2Wt0i7O). It met my first criteria. This was not the Ender-3 Pro. However, that model was currently more than $200 and after a review of comparisons, there wasn't enough value in the Pro version to justify the extra cost. The Ender-3 also met everyone one of my other criteria based on online reviews. The remainder of this post will be my experience assembling the printer, all the way to first print. It will be in journal format with date and time. Let's get to it:

## Day 1: 11:10 - Draft the blog post
A blog post draft in SublimeText is ready (you are reading it). Time to break open the Creality box and see what's inside.

![Opening the box](!/images/posts/2019-05-29-assemble-creality-ender3/.jpg)

## 11:22
First item out of the box is the poorly translated assembly instructions. Images are well done and I should be able to assemble using these instructions. If not, I'm sure there's a YouTube video that can help. Each item has an associated number. I will use these numbers as a reference in this post.

< Image of instructions >

## 11:25
First thing I noticed, and a bit disappointing, is the Ender-3 does not include the magnetic build plate. It is removable, but is held down with the included binder clips. Online sources reveal not having the magnetic version found in the Pro pack may be a good thing. Seems heat transfer is an issue.

< Image of build plate >

## 11:27
Not sure which items to pull out of the box first, so started with the control display component. There is protective covering on the LCD panel. All-in-all, the printer seems well packaged for shipping. I do not anticipate any issues due to shipping.

< Image of build plate >

## 11:31
Now I'm really confused. Not sure what to take out of the box next so I am working my way around the small things first and in this order:

1. Control Display (as mentioned above) - Part 01
2. Support rails - Part 19
3. Base unit - Part 02 (Which is a bit confusing because there are a whole bunch of wires and the print head connected to this base. Be VERY careful removing it from the box and make sure you don't tug on anything.)
4. Print head servo assembly - Part 06 (This thing is a beast! All metal assembly. So glad I chose this over the Prusia i8 variants.)
5. Power supply - Part 03 (Another reason to choose the Ender-3 is the 24v power supply. Other under $200 models often include a 12v supply. 24v should ensure better heating with power to spare for mechanicals.)


## 11:46
Removed the first layer packaging to reveal another layers of items. Items on the second layer include:

1. Power cord - Item 13
2. Spool holder - Item 11
3. Servo motor - Item 08
4. Putty knife - No item number of part of the tools package included
5. Vertical screw - Item 16 (Nice touch to include in protective tube.)
6. Vertical rails - Items 15 and 16
7. Material Spool - Item 10
8. Z axis limit switch - Item 9 (next items are included in the same bag.)
9. Roller assembly - Item 07
10. Spare print head and tubing materials
11. Small sample of PLA material (not sure there's enough here to print anything. No worries though, I purchased [three spools of red, black and white PLA](https://amzn.to/2EPqks7) for $33 with a 5% off coupon.)
12. 8Gb MicroSD card with USB adapter (SDCARD includes many resources, users guides, video and sample STL files. First thing I did was copy them all to a Google Drive folder for a backup. I'm glad I spent time reviewing the contents. There are several different assembly instruction PDFs as well as a video. Those will prove to be handy when I begin assembly.)
13. Roller guide - Item 04 (the next items are included in one last package of goodies.)
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

Whew! And that completes removal of all parts and cataloging. Time: 12:18. Lunch time!

## 15:32
Took some time to download software and firmware using my Chromebook while watching some old movie on my Roku. Downloaded new firmware for the Ender-3 along with Linux (appImage) and Mac (.dmg) versions of Cura. I have no idea how to use any of this, but looking forward to trying it out.

While downloading, I also received a box from Amazon. This includes items to create an [OctoPi](https://octoprint.org/download/) to connect to the Ender-3. More on that in a future post.

For these next steps, I have tied the narrative to the step number in the PDF file provided on the microSD card in case someone wants to follow along as they assemble their printer. That PDF file is also linked to below:

[Creality Ender-3 Assembly Instructions](INSERTLINK)

## 17:18 - (Step 1) Vertical Supports
Time to begin assembly. Glad I found those instructions on the included miroSD. I get to use the included tools for this.

Right off the bat! I put the wrong vertical support on the wrong side. Didn't look to see that they were different. Will make note of this as I now remove said support and put it on the correct side! AND, I didn't even install the lock washer. It's going to be a long install.

Put on a little calming music. That seems to be helping.

< Insert image of vertical beam install >

Vertical supports now installed correctly.

## 17:43 - (Step 2) Power supply and control panel
Another Allen wrench. I feel like I'm assembling what an IKEA version of a 3D Printer would be. And that's not necessarily a bad thing.

< Insert image of power supply and control panel >

Believe I'll leave the protective covering on the LCD panel until this thing is assembled. Had to switch from 230v to 115v on the power supply.

## 17:52 - (Step 3) Limit switch plate on vertical bar.
Limit switch is in a plastic bag inside another plastic bag. Well protected. This is interesting. The screws and hammer nuts for the limit switch are on the limit switch. The only part packaged this way.

< Insert image of limit switch >

That was a bit tricky. Had to align the hammer nuts just right in the channel before tightening. Glad there was a stop on the limit switch holder to perfectly place it on the channel.

## 18:05 - (Step 4) Vertical servo and screw
Seems to be straight forward. I had to move the bed to tighten the screws. I dropped the vertical screw bar in as shown in the instructions. It did not instruct to tighten the bar. Hopefully that will come in a later step. Most likely some parts alignment that needs to occur first. I'm also keeping the protective sleeve on the screw bar to protect it.

## 18:16 - (Step 5) Horizontal servo chassis (w/limit switch)
This step is a bit scary. I'm not quite sure what I'm looking at but will give it a shot. That was a bit trick due to a very tight space for the screws and the possibility that if not careful, I could have ruined the limit switch. Thanks to Creality for including holes in the roller plate so the Allen wrench could reach the screws.

< Insert image of horizontal assembly with Allen wrench >

## 18:32 - (Step 6) Horizontal belt
Belt was easy but hanging loose.

## 18:35 - (Step 7) Printer head assembly
Oh boy, this looks complicated. Ugh, I have to try and get that print head on the rail with that umbilical cable in the way. This is the trickiest step so far. It would have been helpful for the instructions to mention that you must install the print head before the tri-roller mount. Of course, it shows it that way, but I and I'm sure others may have assumed you could roll that on afterward - you cannot! Had to take the roller assembly off and put it back on.

< Insert image of belt >

Putting that belt on was a bit tricky as well.

## 18:56 - (Step 8) Belt tensioner
Another part with screws and nuts included. It's getting difficult to install the print rail due to the umbilical cord and confinement of the bar. Seem like I have it together properly though. Rail moves smoothly.

< Insert animated GIF of rail>

Phone call! Be back soon.

## 19:06 - (Step 9) Horizontal bar
Finally! I don't have to balance the horizontal bar anymore. Time to install it on the vertical supports.

Removed the vertical screw cover. Remember the screw on the connector at the bottom of the vertical bar? It didn't say to tighten it in this step either, I tightened it anyway. There were two screws the instructions say to "Don't tighten too tight." What they mean is leave them loose. If you tighten them at all, the screw will not turn smoothly and the bar will not move up and down. Could strain your stepper motor if you make this mistake.

< Insert image of screws >

## 19:21 - (Step 10) Top horizontal bar support
As far as assembly goes, this was likely the easiest step so far. Okay, maybe Step 2 was easier. It was a tight, but necessary, fit to ensure everything was held together tightly. Hey! It's starting to look like a 3D printer finally.

< Insert image of top bar >

## 19:30 - (Step 11) Material spool
That went smoothly. The only hard was anticipating the best location for the spool so the material will feed smoothly into the feed mechanism.

< Insert image of spool >

## 19:38 - (Step 12) - Electrical connectors
Getting close to the end now. Just have to take my time and ensure every electrical connector snaps into place.

Oops. Just noticed I didn't put on the end caps from step 10. Doing that now.

Love, love, love the little plastic identifiers on the cables. Not just electrical, but the feed tube as well. That is not well explained. Take out one of the tube connectors from the bag (not stated in instructions). Connect and then place the blue spacer between gray connector holder as shown in the image below. The blue spacer tightens the connection. I would not have known this had I not watch some umpteen million videos on YouTube while waiting for this 3D printer to arrive. Don't forget to lightly tighten the tube connector using one of the supplied open-end wrenches.

< Insert image of tube connector >

Looks like the last thing is to connect the controller. Hmmm. It does not say to connect the power cord but I'm going for it. Before turning it on, I'm going to clean up my desk.

Just noticed as I was cleaning up that there are cable ties. I'm going to hold off on those for now. Want to see how it operations before I lock down cable routing. Also understand that there are some prints available that help with cable management (another post).

I also placed the bed cover back on the heat bed using the provided binder clips; seems so low tech.

Current time 20:02. Not bad.

Okay, this is disturbing. I have a bag of M4x14P with M4T nuts. I've looked and I don't see them in the printed instructions included in the box or the PDF file. I also don't see any holes not filled. I'll assume they aren't needed. Lots of other spare screws and nuts, but they are all duplicates of other's used. Not worried about those.

## 20:09 - Turning on the for the first time
It's plugged in. Do I dare throw the switch? Here I go.

< Insert image of switch and finger >

Fans are on, smell of ozone, and display it bright. Success so far. Now to test the motors. I'll try the `Auto home` option.

## What's next?
I have no idea. I've never printed anything before and I do know there is a learning curve. I'll be documenting that as well in future posts. Hope you enjoyed this post on the assembly of my new Creality Ender-3. Leave a comment below if you have any tips for me.

