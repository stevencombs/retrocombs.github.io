---
layout: post
title: '10 things to know about your new Pocket C.H.I.P.'
date: 'June 28, 2016'
comments: 'yes'
categories:
  - chip
---
  
I've had some fun playing with the Pocket C.H.I.P. over the past week and while I do plan to write a full review, for now, I have ten things to share that might be of interest to new users of the geekiest gadget I have ever owned.

![Pocket C.H.I.P.][image-1]

**New updates and additions on:** August 13, 2016

## Number 1: A browser is built in
The Pocket C.H.I.P. has a built in browser called `surf`. 

**Try this:** in the *Terminal* type: 

`surf google.com` 

The Google search page will load. You will most likely have to scroll up/down and left/right to see the page. This is a very rudimentary browser with no user interface save for the scroll bars. In a pinch though, it is very useful. To exit the browser, use the ctrl + 'q' keyboard combination.

## Number 2: Use a Terminal browser
Download a *Terminal* text-based browser to provide quick access to information (sans graphics). A couple of my favorites include `w3m`, `lynx` and `elinks`. 

**Try this:** Install `elinks` using the following *Terminal* commands:

\`\`\`
sudo apt-get update
sudo apt-get install elinks\`
\`\`\`

When the installation is complete **try this:** 

`elinks stevencombs.com`

The *Terminal* will display this site in all its text-based glory. Use the tab and arrow keys to navigate.

## Number 3: Help is available
There is an excellent online bulletin board system (BBS) full of users and Next Computing staff to provide assistance and support. It is located at [https://bbs.nextthing.co/][1]. The community is quick to answer questions. Be sure to search the BBS before you post a question. You will most likely find an answer immediately. Before heading to the BBS though, review the documentation at: 

[http://docs.getchip.com/pocketchip.html][2]

> The BBS community has been instrumental into the quality and accuracy of this post. Be sure to see the bonus "things to know" at the bottom of this post. Many "things to know" were provided by this group and I update this post frequently based on their suggestions. You may want to return in a day or two to see what I add.

## Number 4: Use the app switcher
Do not hit the home button to get back to other apps or the *Terminal*. The included task switcher will cycle through running applications. Use the following keyboard combination to switch applications:

`ctrl` + `tab`

## Number 5: It's a really tiny screen
Not all software will display properly on the small LCD screen and you may not be able to access all UI elements. There is no pinch and zoom currently and this is likely not an option. One option would be to have a utility that will scale the screen in some way so as to access all controls. Keeping my fingers crossed that some enterprising developer will find a way to take care of this.

<iframe src="//rcm-na.amazon-adsystem.com/e/cm?o=1&p=48&l=ur1&category=wireless&banner=05Z80C1436ZHNQNKJBR2&f=ifr&linkID=958652a295dabbce9a8c29181477ed8a&t=stevenccom-20&tracking_id=stevenccom-20" width="728" height="90" scrolling="no" border="0" marginwidth="0" style="border:none;" frameborder="0"></iframe>

## Number 6: Calibrate the touch screen
If your resistive touch screen (not capacitance like screens found on tablets and phones) is giving you fits, you can calibrate it using these instructions: 

[http://www.chip-community.org/index.php/Troubleshooting#Calibrating\_Touchscreen\_on\_PocketChip][3]

## Number 7: Play retro style games and learn to program
Pico 8 is a fabulous app that not only let's you play retro style games, but also learn/teach basic programming skills using the Lua programming language. Check out these excellent resources to get started: 

[https://github.com/felipebueno/awesome-PICO-8][4]

## Number 8: Use Pocket C.H.I.P. as a calculator
Use the included Python programming language as a built in calculator. 

**Try This:** in the *Terminal* type: 

`python` 

The python prompt will appear. Type:

`2+2` followed by the return (↩) key

Python will display the sum. To exit the Python interpreter, type:

`ctrl` + `d`

or

`ctrl` + `q` to exit the *Terminal* back to the home screen. {Thanks to Adam Higerd for the details and correction!}

Check out the resource below for additional calculator functions: 

[https://docs.python.org/3/tutorial/introduction.html][5]

For a more traditional calculator, **try this:**

In the *Terminal* type:

`xcalc`

Your Pocket C.H.I.P. is now an old school basic functions calculator as shown in the image below. This application makes great use of the Pocket C.H.I.P.'s touch screen. Thanks to [midheaventech][6].

![xCalc on Pocket C.H.I.P.][image-2]

## Number 9: Use a full-size keyboard
The [Logitech K400 keyboard][7] is an awesome external keyboard not only for a Raspberry Pi, but also the Pocket C.H.I.P. Plug the dongle into the USB port to make Pico 8 programming easier with the tiny little screen.

## Number 10: Control the Pocket C.H.I.P. from a computer
Don't purchase an external keyboard. Control your Pocket C.H.I.P. using your computer keyboard and trackpad/mouse. Follow my [Raspberry Pi `x11vnc` instructions][8]. They work just as well on the C.H.I.P.

![Controlling the Pocket C.H.I.P. via x11vnc][image-3]

## Bonus: Learn Linux Terminal commands (Added: August 21, 2016)
You will want to learn how to use terminal commands. One of the best features of the PocketC.H.I.P. is the ability to carry a full fledge Linux Terminal in your pocket. For students in computer science or information security courses, this can be a huge advantage to learning. 

Below are my two favorite resources to learn Linux Terminal commands:

* [The Linux Command Line: A Complete Introduction][9], 1st Edition by William E. Shotts Jr.

I've been pouring through this book for days. I can easily throw the book and my PocketC.H.I.P. in my bag. When I have some free time, I take both out to learn more about Terminal commands. It's a very geeky combination. To this day, I cannot believe I didn't know about the simple `cal` command. As an educator, I also plan to recommend this package to students.

* [Learning the Shell][10] on the [linuxcommand.org][11] site

This is a free resource. The site loads quickly and you can browse the site on your PocketC.H.I.P.

## Bonus: Star Wars
Watch the original Star Wars story unfold on your Pocket C.H.I.P. **Try this:** in the Terminal type: `sudo apt-get update`, followed by `sudo apt-get install telnet` followed by `telnet towel.blinkenlights.nl`. Use ctrl + 'j' to close the telnet session and ctrl + 'l' to clear the *Terminal*.

![Star Wars on the C.H.I.P.][image-4]

## Bonus: Replace the bash shell with my favorite: `fish and C.H.I.P.` (Added: August 13, 2016):
The PocketC.H.I.P. includes the standard `bash` shell; however, you can replace this with another shell called `fish` for more features. Below is an image of the changes available with this new shell environment.

![][image-5]

Intrigued? Visit my [fish on C.H.I.P.s blog post][12] to learn more.

## Bonus tips from the Pocket C.H.I.P. community

### WARNING TIPS
Thanks to [senkun][13] for these tips.

> Don't peel off the plastic film off the super clicky buttons. The film holds the buttons in place.

and

> When charging, be careful when plugging and unplugging the micro USB plug. On some units the connector on the CHIP isn't soldered properly and may just get ripped off.

I felt it important to add these two warnings so new owners have a good first experience and realize that these devices can be a bit fragile if not handled correctly. 

When my Pocket C.H.I.P. first arrived, I too wondered if I should peel off the keyboard plastic covering, but quickly decided against. New owners might consider doing this and this would not be good!

### Customize the home screen (Updated: August 13, 2016): (marshmallow from the BBS)
The PocketC.H.I.P. includes a home screen; however, you can replace it with an outstanding, and in continual development, replacement called *Pocket Home*. It's an easy install and the home screen replacement provides some great features such as adding and deleting items and changing the background color or image.

Learn more on the [Next Thing Co. BBS post from *marshmallow*][14]

### Add a speaker: (bmjohnsn from the BBS)
It would appear at first blush that the Pocket C.H.I.P. requires headphones for sound; however, with [this clever little soldering hack][15], you can add a small 3 watt amp and speaker (or two for stereo) to the inside of the Pocket C.H.I.P. case. This is another hack and it requires some soldering skill; however, it is way cool and a project on my list of things to do (or possibly a variation).

### Emulate games: (bmjohnsn from the BBS)
bmjohnsn recommends this Nintendo-centric retro gaming link:

\<https://bbs.nextthing.co/t/mednafen-emulator-configuration-gbc-gba-snes-nes/5027\>

However, I'm more of an 80s gaming retro fan and am anxiously awaiting [VICE][16] support for Commodore computing. How awesome would that be?

**UPDATE:** [The Rift Conspiracy][17] provides [instructions to download and configure the VICE emulator][18] for the Pocket C.H.I.P. I've installed (see image below), but have not tried any games or applications yet. I hope to do so soon.

![VICE on Pocket C.H.I.P.][image-6]

### Install Doom and a launch Icon to the home screen:
The official Next Thing Co. blog now provides instruction to install Doom and include a launch icon to the home screen. It's a bit of a hack, but does show active development and is a fun way to learn more about your little hand held Linux box.

[Install Doom & give it an icon on the home screen][19]

## Did I miss anything?
Have something else I should add to the list that other Pocket C.H.I.P. owners should know? Drop in the comments below. I would love to read your suggestions.

[1]:	https://bbs.nextthing.co/
[2]:	http://docs.getchip.com/pocketchip.html
[3]:	http://www.chip-community.org/index.php/Troubleshooting#Calibrating_Touchscreen_on_PocketChip
[4]:	https://github.com/felipebueno/awesome-PICO-8
[5]:	https://docs.python.org/3/tutorial/introduction.html
[6]:	https://bbs.nextthing.co/t/10-things-the-new-pocket-c-h-i-p-owner-should-know/5724/12?u=stevencombs
[7]:	http://amzn.to/29loNc3
[8]:	http://www.stevencombs.com/raspberrypi/2016/03/24/mirror-raspi-monitor-on-mac.html
[9]:	http://amzn.to/2bvjFa0
[10]:	http://linuxcommand.org/learning_the_shell.php
[11]:	http://www.linuxcommand.org
[12]:	http://www.stevencombs.com/chip/2016/08/13/fish-and-chips.html
[13]:	https://bbs.nextthing.co/t/10-things-the-new-pocket-c-h-i-p-owner-should-know/5724/19?u=stevencombs
[14]:	https://bbs.nextthing.co/t/new-pocket-home-marshmallow-edition/6579
[15]:	https://bbs.nextthing.co/t/add-a-speaker-to-pocketc-h-i-p-in-less-than-20-minutes/4511
[16]:	http://vice-emu.sourceforge.net/
[17]:	http://www.rift.dk/
[18]:	http://www.rift.dk/blog/run-vice-on-your-pocketchip
[19]:	http://blog.nextthing.co/customize-the-hell-out-of-your-pocketc-h-i-p-install-doom-give-it-an-icon-on-the-home-screen/

[image-1]:	http://www.stevencombs.com/images/posts/chip/pocket_chip.jpg
[image-2]:	http://www.stevencombs.com/images/posts/chip/xCalc.png
[image-3]:	https://lh3.googleusercontent.com/mLeA1bFTLZkzlWfV-QaG3OB5-438GbNNd2GiNcYbj6DvGYhMATZbbUvL0A2jCKR5_Ab02fagGrgeRPh2naC2qPx-y9WSEo2q3G-iJd5_by_TZDs7NmLTvX6iqqorpxT1PLXh0tGk1ITUNRvPLGCiR0Bull1EL14Mfq3P-w0hBf4wRsU2ANgOK9kkeex11xm1dwSsNAInMZFSckKgZ2Bmyhf-f-v_z6CNzqRo5NiqWs57FGPQRHNeMdPCsbBWlfhG6p7tB0pu-1R-G2cbsvJEMwY2E39CipwHp5_q9xtODNm1GxxRDSoAzr3pauRTRoQ-VT7IkJIpfkGTMil8nyOR2y16GpfVIsDIP3apTQYR-FHxXaTLaYJYjtLQaXh4KxrObBvT46J0y3mKghW8L12mn8iidv1R5vNwDbwUOGog7k_dDuwbr90-JHu3b9HkT8YenAp2yZv_efN0D4Nh6vuuMMdEI5dij7MxndbkuTIrBDzv6W4TndySD5zOVxvFmX10uFW5V-D4TsG8YvCiUhYdGbFdgJ8xzmRDl84HpAT-pQhJcavPwp5VsX2cvfXVw0-q8hdMqLQEOJB3uOJf5U_dGfsNUUeutR-f=w960-h680-no
[image-4]:	https://lh3.googleusercontent.com/cFUGmmQh0EzBBCwFvnsbrvE22fWpOfyMehtge99keeoKHBLP0PmV-X0DHPhiAm8E718KGb2Z4asueGfxzRWYvroox1xig1cJe5Wozb3JkiESyg5j5jAenuP0ViCgvt97X2kXUs75UXuqk0wX3RrprDdnIfLlqIjCy-eov_WHbLTm4F-z0qH4mPrD8EY9ZaMpQifP0MdZzx5ulPb4ihQ9yt1q32oIimhdzEPog-v_CVizlZycYhBp05IpWzyZrcoM4-EPIcV3qaAHnLDt_wxnde_pNuxG5857fm761Ldkp7mpy1lnySJh0QcoZWkuklYuQLbGz5K2OI1_qFGNoMoSetDUMWEuGGh4ymPiVh7ZRVCruJfFHL8jUvGAHOVck9NSQpReGybTfLSSi3P4EicbQowmGEQcZPgMREUnfRpNihysiP03CCq6i64MrKRlqBjhDW2h_nxPO0s_OTVEhuNW0EZbFckxsnzG0ny34M5KXr8wBQemmXqViDwjUZuaIzdt9wXvL0TqOv39g8xAkGIM1rEa5lWugm9jHZcBsHRyQtc9wmyLpsV048WPYqmmsEhNRu-fOhUeJBCoqEeEmXGatY1qJyAaJyaV=w960-h545-no
[image-5]:	http://www.stevencombs.com/images/posts/chip/fish-on-pocketchip.png "fish and chips"
[image-6]:	http://www.stevencombs.com/images/posts/chip/vice-on-pchip.png "VICE on Pocket C.H.I.P."