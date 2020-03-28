---
layout: post
title: 'HOWTO: Change the Terminal font size on Raspberry Pi'
author: 'Steven B. Combs, Ph.D.'
email: 'steven.combs@gmail.com'
date: 'May 18, 2016'
comments: 'yes'
categories:
  - raspberrypi
tags:
  - howto
  - raspberrypi
  - terminal
  - font
  - raspian
---

If you connect a Raspberry Pi to an HDMI monitor, you may find the terminal font size to be a bit small; especially if the monitor sits a foot or more away. This post demonstrates how to choose a different font size.

# Steps

* Boot the Raspberry Pi to the terminal (or console)

> If your Raspberry Pi boots to the desktop environment, exit the GUI to see the command prompt. You can use the `sudo raspi-config` utility to modify the boot options for the Raspberry Pi if you always want to boot to the command prompt.

* Type `sudo dpkg-reconfigure console-setup` at the prompt
* If prompted, type the Raspberry Pi password - the *Package configuration* application will appear as shown in the image below

> ![Package Configuration - Configuring console-setup](http://www.stevencombs.com/images/posts/terminal-font-size-1.png)

*  If not the default, select the `UTF-8` option and hit ↩ - the screen below will display

> ![Package Configuration - Configuring console-setup](http://www.stevencombs.com/images/posts/terminal-font-size-2.png)

* If not the default, select the `Guess optimal character set` option and hit ↩ - the screen below will display

> ![Package Configuration - Configuring console-setup](http://www.stevencombs.com/images/posts/terminal-font-size-3.png)

* If not the default, select the `Let the system select a suitable font` option and hit ↩ - the screen below will display

> ![Package Configuration - Configuring console-setup](http://www.stevencombs.com/images/posts/terminal-font-size-4.png)

* Select the size font you prefer and hit ↩ - the red highlighted font (16x32) shown in the image above is my preference
* Finally, reboot the Raspberry Pi using the `sudo reboot` command

When the Raspberry Pi reboots, it will now use the selected font to display the console and command prompt. In my case, I have a monitor about four feet from my desk. The font size I use allows me to enter commands from my wireless [Logitech K400 Plus](http://www.amazon.com/gp/product/B014EUQOGK/ref=as_li_ss_tl?ie=UTF8&camp=1789&creative=390957&creativeASIN=B014EUQOGK&linkCode=as2&tag=stevenccom-20) comfortably.
