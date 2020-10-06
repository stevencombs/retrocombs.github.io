---
layout: post
title: 'retroCombs: The Tapuino Project - Build an Arduino powered Commodore Datasette clone for the Commodore Plus/4'
date: '2020-07-19'
author: 'Steven B. Combs, Ph.D.'
email: 'steven.combs@gmail.com'
permalink: 'tapuino-1'
comments: 'yes'
category: retro
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

As part of my [Commodore Plus/4 series](https://www.stevencombs.com/plus4), chapter three of the user’s manual includes a section on using a Commodore Datasette and a 1541 Diskette Drive. In a previous post, I assembled the [modern replacement for the disk drive](https://www.stevencombs.com/pi1541); now it’s time to build a Datasette replacement called, the Tapuino.

“What’s a Tapuino,” you ask? It’s a cool Arduino-based replacement for the [Commodore Datasette](https://en.wikipedia.org/wiki/Commodore_Datasette). For this project I use an Arduino, in this case the [inexpensive Arduino Nano version](https://amzn.to/2ZLXbaL), along with some easy to source electronic components. You can learn all about the Tapuino on the [Sweetlilmre’s 1337 beef: Building the Tapuino R2](http://sweetlilmre.blogspot.com/2015/03/building-tapuino-r2.html?m=1) blog post.

> > While this post focuses on the Tapuino for a Commodore Plus/4, this build will also work with a C16 or other [264 series Commodore computer](https://www.c64-wiki.com/wiki/Commodore-264_series). If you want to use the Tapuino with a VIC-20, C64, or C128, you only need to replace the 7 pin DIN connector with this [C2N Power Adapter](http://store.go4retro.com/c2n-power/) that will also allow you to tap power from those computers for other projects.

Sweetlilmre’s (is that pronounced, “Sweet Lil Marie?”) original blog post was written in 2015 and things have changed. His build uses [veroboard](https://amzn.to/3998Fta) to assemble and connect the Tapuino components. I will use a breadboard. Later, I will move my working Tapuino project to a "solderable" breadboard and create a custom 3D printed case. I’m looking forward to that project!

This post and the companion video includes updates to build materials, layout, imagery, parts sourcing, and processes. Before you read this blog post, watch the video below. It shares my build process and first use of the Tapuino. Hopefully you will have a little fun along the way.

## YouTube Video: _retroCombs: The Tapuino Project - Build an Arduino powered datasette clone for the Commodore Plus/4_

In the video below, I breadboard and operate a Tapuino connected to a Commodore Plus/4:

<div style="position:relative;padding-top:56.25%;"><p><iframe src="https://www.youtube.com/embed/1Dqbg1-s0m4link" frameborder="0" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true" style="position:absolute;top:0;left:0;width:100%;height:100%;"></iframe></p></div>

Let’s start the project with a list of materials.

## Bill of Materials

The list below includes everything you need and the most inexpensive or convenient way I’ve found to source them. The problem is that you simply can’t purchase some items as a single unit. Not a problem for someone like me who has several projects on the bench at a time, but if you want the cheapest way to a Tapuino, I recommend you purchase a kit or a [completed unit](https://www.ebay.com/sch/i.html?_from=R40&_trksid=m570.l1313&_nkw=tapuino&_sacat=0).

Below is my list of materials:

* 1 - [Arduino Nano V3](https://amzn.to/2ZcGZjL) - This is the second nano I use in the video and not the first!
* 1 - [16x2 LCD Display with I2C backpack](https://amzn.to/2NTOEwV) - The Tapuino can use other displays, but these are the most cost effective.
* 1 - [SD Card module with built-in level conversion](https://amzn.to/2Daak5S) - Different than the unit Sweetlilmre specifies, but it works perfectly.
* 1 - [Breadboard](https://amzn.to/2ZIsVh8) - Yes, this should work, unlike the one I had troubles with in the video.
* 1 - [430 Ohm resistor](https://amzn.to/2DadoPr) - Seriously, if you want to try this project and don't have this resistor, for the cost of a SASE, I'll send you one.
* 1 - [Breadboard](https://amzn.to/2ZIsVh8) - One that works
* 1 - [430 Ohm resistor](https://amzn.to/2DadoPr) - I have a bunch of these now.
* 4 - [Momentary Switches with Color Caps](https://amzn.to/2BGfKVE) - I didn't use the color caps in this video, but may on my custom case.
* 1 - [4n25 Optocoupler](https://amzn.to/2VLd7IW) - Same a resistor notes.
* 1 - [Spool of solid core breadboard wire](https://amzn.to/3iqLTBr): Multicolor will assist in wire tracking.
* 1 - [Spool of solder](https://amzn.to/3f4FQAg) - Just in case you are low.
* 1 - [7 Pin DIN plug connector](https://www.thefuturewas8bit.com/7-pin-mini-din.html) - Plan accordingly if you live in the United States because these take awhile to get across the pond.

Makers or electronic hobbyist probably have many of these items (I did!) and only need to purchase a few. I did splurge for this project with the purchase of the multi-color momentary switches and the all-in-one LCD display with I2C backpack (I had them as separate items). I did not have a 4n25 optocoupler.

## Tools

1. [Wire Stripper](https://www.harborfreight.com/electrical/electrician-s-tools/wire-strippers-crimpers/heavy-duty-self-adjusting-wire-stripper-36810.html) - I really do think this is the best $10 I've spent for my electronic projects.
2. [Soldering Iron/Station](https://amzn.to/2ZEpuYy) - This is an inexpensive station that I recommend.
4. [Rosen Core Solder wire](https://amzn.to/3f4FQAg) - In case you are running low.

## Fritzing Time

The first step in my process was to use a regular breadboard to build the Tapuino using Sweetlilmre's original Fritzing file below:

![Tapuino Fritzing Layout](http://2.bp.blogspot.com/-h7CGISvaymA/VQc9a61cijI/AAAAAAAAKpo/_zOHc1vSwYY/s1600/tapuino_bb-r2.png)

Afterward, I played around with the layout to streamline, and or, update part locations. Very little changed from the original because it was already efficient; however, I was able to locate updated Fritzing parts and took a different approach to labeling the cable connection. A Fritzing image of my layout is below as well as a download link for the original .fzz file.

![My Fritzing Layout](https://www.stevencombs.com/tapuino/images/tapuino_bb.png)

[Download my Fritzing File](/tapuino/images/tapuino.fzz)

## Building the Tapuino

I demonstrate how to build the Tapuino in the video; however, below are additional thoughts and tips:

1.  While Fritzing allows me to document my build, the other advantage is that by laying out the Tapuino in Fritzing, I become more familiar with the build and how the components operate. This came in handy when troubleshooting (and there was a lot) really helped when it came to troubleshooting.
2.  I’d not used an 4n25 optocoupler; or opto-isolator (which is why it took me a few times to say it correctly in the video). It’s an interesting device. Sweetlilmre’s site doesn’t explain what it does, so I did a bit of research. Wikipedia says an optocoupler:

    > is an [electronic component](https://en.wikipedia.org/wiki/Electronic_component) that transfers electrical [signals](https://en.wikipedia.org/wiki/Signal) between two isolated circuits by using light. Opto-isolators prevent [high voltages](https://en.wikipedia.org/wiki/High_voltage) from affecting the system receiving the signal.” Here’s [the data sheet](http://www.farnell.com/datasheets/1930778.pdf) if you’d like to learn more.

3.  Add the components to the breadboard first and then cut your wires. I use a pair of wire-strippers from Harbor Freight. For $10, I think these are well worth the cost and possibly, the best purchase I’ve made in long time!
4.  Speaking of breadboards, I’m still not sure why the original Arduino or the header pins kept popping out. It’s very odd. It’s as if the connectors are smaller than the connectors on my other breadboards. It must be a manufacturing error, but I’m not giving up on the board since resistors and other components fit.
5.  You can install the software on the Arduino before connecting it to the breadboard. It will make things easier and also ensure you don’t accidentally destroy the Arduino. What’s that you ask? How does that happen…
6.  My Fritzing image has a warning and I’m serious; **DO NOT** connect the Arduino to USB power while connected to the Plus/4. You will throw 10v across the circuit and will smoke the Arduino. How do I know this? Because I have a burned up Arduino in the trash can. This warning was on Sweetlilmre’s post, but somehow I missed it. When I was troubleshooting cable issues (see _Building the Cable_ below), I thought I could keep the Arduino plugged in to power to keep the LCD screen turned on. Oh, it turned on! For about a second and then smoke began to rise from the Arduino. I immediately turned off the Plus/4 and luckily the only component harmed was the Arduino. I purchased them in threes, so I grabbed another, reloaded the software, and I was quickly back where I left off.
7.  I recently purchased a proper-type [variable temperature soldering iron](https://amzn.to/30sau0i) for $35 along with a [series of tips](https://amzn.to/3jeua0t). I’m surprised at how much better my soldering is with this unit instead of those cheap single temperature plug-in units. I would not have been able to solder those tiny CAT5 wires to the connectors on the 7 pin DIN. If you don’t have a good iron, get one.
8.  The pinout on the [SD Card module with built-in level conversion](https://amzn.to/2Daak5S) I purchased was different than the one used by Sweetlilmre. The connectors were also named differently; however, it was an easy conversion and this is one change I got correct on the first attempt!

That concludes my additional Tapuino build tips and thoughts. I’ll add others as I think of them or use the Tapuino. Additions will be date-stamped. Leave comments below if you think I should include other comments or have questions.

### Building the Cable

While I could include these in comments in the section above, this inclusion was substantial enough to warrant its own section. First, a shout-out to <AWSM.de> for providing this wonderful tape connector conversion reference image:

![AWSM's C64 to TED Tape Connector Chart](http://blog.awsm.de/wp-content/uploads/2019/02/tumblr_inline_ntn27qHbjr1rr6hqh_540.jpg)

I originally tried to use a diagram from another site and after a first attempt, I wired the cable incorrectly. Everything was mirrored. I discovered the error when I noticed that the Tapuino powered on, but the display was blank. When I placed a volt/ohm meter on the breadboard’s positive and ground rails, I discovered the Commodore Plus/4 was sending -5v to the Tapuino. Aha!

I fixed the polarity by swapping the wires on the rails. The Tapuino display was correct but the unit still wasn’t working properly. It would recognize the Tapuino was trying to send or save a Plus/4 program, but it would never release the Plus/4. That lead me to believe that there were other incorrect connections.

After a few checks against the image above, I found all the pins, minus the sense pin, were mirrored. The good news, I didn’t have desolder the connector or the wires on the header pins. I slipped the pins out of the header holes and reordered them. “Presto-changeo!”

![Rewiring the Tapuino connector without re-soldering](https://www.stevencombs.com/tapuino/images/rewire-connector.jpg)

## Preparing and Uploading Software

This is another process that deserves its own section. Once the Tapuino is built, it’s a simple matter to download and install the software. I demonstrate each step in the accompanying video; however, below are additional thoughts and tips:

1.  Download the zip archive - you can download directly to a microSD if you want to save a step later; however, I always download to my computer first, make any changes, and then keep a local copy in case I run into problems.
2.  Extract the file - the archive includes several files. You need them all!
3.  Rename the extracted folder; _Tapuino_ - This is required or the `tapuino.ino` file won’t be able to find and upload the support files.
4.  Rename, or copy, the `config-user.h.example` configuration file to `config-user.h`.
5.  Modify the configuration file to match the hardware and language. Below is my file:

    ```
     //*****************************************/
     // User selectable configuration settings
     //
     /******************************************/

     /******************************************/
     // LCD Definitions
     /******************************************/

     // uncomment one of these sets for your specific LCD
     #define LCD_USE_1602_LCD_MODULE
     #define LCD_I2C_ADDR 0x27 // I2C address for the LCD
     // #define LCD_USE_SSD1306_OLED_MODULE
     // #define LCD_I2C_ADDR 0x3C // I2C address for the OLED
     // #define LCD_SSD1306_BIG_FONTS // define this for ... bigger fonts...

     // choose one of these depending on your display
     // #define LCD_SSD1306_128x64
     // #define LCD_SSD1306_128x32
     // #define LCD_USE_SSD131X_OLED_MODULE
     // #define LCD_I2C_ADDR 0x3C // I2C address for the OLED

     /********************************************/
     // Language Definitions
     /********************************************/
     // uncomment one of these for your language
     #define TAPUINO_LANGUAGE_EN
     // #define TAPUINO_LANGUAGE_IT
     // #define TAPUINO_LANGUAGE_TR
     // #define TAPUINO_LANGUAGE_ES
     // #define TAPUINO_LANGUAGE_DE

    ```

6.  Start the Arduino IDE - I use Linux but this process should be similar on other platforms.
7.  Navigate into the _tapuino_ folder and load the `tapuino.ino` file - the Arduino IDE will load all associated project files.
8.  In the _Tools_ menu, select Arduino Nano and the correct serial port - this is done in the _Board_ and _Ports_ menu items.

Once you’ve done all of that, it should be a simple matter of connecting the Arduino to your PC and clicking on the _Upload_ `(→)` button in the toolbar.

## Prepare the microSD Card

You will need the [smallest microSD card you can find](https://amzn.to/3fK9Mln). I only had a 32Gb card and this is overkill! If I could find a 1, 2, 4, or 8Gb that would be fine, but you can no longer purchase them in these capacities.

Format the card as FAT32. You can place directories on the microSD but keep them 16 characters or less. In my demonstration, I have a _games_ folder with three `.tap` files with long names. The Tapuino will scroll longer file and folder names.

**UPDATE 2020-07-22:** The animated .gif below is a short "copying .tap files to the microSD card" demonstration:

![Copying files to the microSD card](/tapuino/copy-tap-files-to-sdcard.gif)

When you save a file from a Commodore computer using the `SAVE` command, the Tapuino will create its own _recordings_ folder. As far as I know, there is no way to delete these files using a Commodore computer. You will need to remove the microSD and perform that function on a modern computer.

Looking for Plus/4 `.tap` files? I recommend you check out [Plus4world’s](http://www.plus4world.com/) tape index. I imagine any program released on cassette is archived but be careful, you have to select the right video version (PAL or NTSC). PAL specific programs will not work on an NTSC computer and vice-versa and that’s a real problem. If you own an NTSC Plus/4, like I do, you will find that you can’t enjoy the majority of Plus/4 games. Most titles were PAL only since the computer was more popular across the pond.

Once the microSD is prepared, ensure the Tapuino power is off and place the microSD into the card reader. You can now turn on the Plus/4 power. The Plus/4 will provide power to the Tapuino.

## Tapuino Menu Usage

The Tapuino includes four buttons used to navigate the Tapuino interface as shown in the table below:

| Button | Usage |
| --- | --- |
| 1 | Select |
| 2 | Abort/Back |
| 3 | Down |
| 4 | Up |

To display the contents of a directory, navigate to the directory name on the Tapuino display and push button 1 (Select). If you need to stop a program from saving or loading, push button 2 (Abort). The navigation is intuitive after a few uses.

On an early drawing of the custom case I am designing, I have these buttons labeled. I’m not sure this is necessary after a day or two of use, but it will be helpful for new users.

> **NOTE:** There is one menu item on the Tapuino you must select in order to use with a Plus/4 (or other 264 series Commodore). Select _Options_ / _Machine_ / _C16_. This configures the Tapuino to act as a 1531 Datasette. I do not understand what this option does to make the Tapuino operate differently. If anyone knows, please drop a comment below.

## Final Thoughts

I LOVE this project so much. It checks off all my favorite retro-computing topics; Commodore retro-computing (✓), physical computing (✓), and electronics kits (✓). Now that the Tapuino built and operational, it will also check off one last hobby; 3D modeling and printing. Stay tuned for that post and video.

I’m not sure how often I will use the Tapuino since the [Pi1541](https://www.stevencombs.com/pi1541) is faster, but if there is a random `.tap` file out there, at least I know I can load it. With the Tapuino, I can also return to my [Plus/4 User’s Manual series](https://www.stevencombs.com/plus4) since I can now cover chapter 3 which requires a cartridge, disk drive, and casette drive.

## References

Huge thanks to Sweetlilmre for the original instructions. This would not have been possible with our their amazing original work. I hope I have added something to the build instructions that makes this project even easier for someone else.

Here’s the list of references:

*   [1337 beef: Building the Tapuino R2](http://sweetlilmre.blogspot.com/2015/03/building-tapuino-r2.html?m=1)
*   [GITHUB: sweetlilmre/tapuino: tapuino](https://github.com/sweetlilmre/tapuino)
*   [Build your own 1530 to C16,C116,Plus/4 adapter and make an C64 SD2IEC work on your 264 computer – awsm](http://blog.awsm.de/build-your-own-1530-to-c16c116plus-4-adapter-and-make-an-c64-sd2iec-work-on-your-264-computer/)

## Next Up

One of the reason’s I choose to use a solderable breadboard was to provide a permanent platform for the electronic so I could design a 3D printed case. I’ve already started thinking about this and have some rough designs. More on that in a future post and video. For now, leave you comments and questions below or in the comments under the YouTube video. I’ll do my best to answer them.
