---
layout: post
title: Turn your RaspberryPi into a development platform with Coder
date: 2013-09-15 19:19:19
comments: true
category: raspberrypi
---

My weekend project was to install [Coder](1) on a RaspberryPi. Coder is a Google hosted project that is a:

> …free, open source project that turns a Raspberry Pi into a simple platform that educators and parents can use to teach the basics of building for the web. New coders can craft small projects in HTML, CSS, and Javascript, right from the web browser.

![](2)

In this post, you will learn a bit more about my experience with this new development platform for the RaspberryPi, learn how to `ssh` into the distribution, and also view a couple of images from the install. Before I prattle on about with my thoughts, check out the video below. It will provide a good sense Coder and its functions.

<iframe width="640" height="360" src="//www.youtube.com/embed/wH24YwdayFg" frameborder="0" allowfullscreen></iframe>

The developer claims that you can setup Coder on a RaspberryPi in less than 10 minutes. These minutes do not account for the time needed to burn the OS image to an SD card. Coder made this process simple though by providing a Mac installer in the download package. No need to use my [popular, but lengthy, Terminal instructions](3). Took about 7 minutes for my iMac to transfer the OS to the SD card.

After the SD card preparation, it took me less than 5 minutes to:

* install the SD card into the RaspberryPi
* connect my Mac to the ad-hoc RaspberryPi network
* configure the RaspberryPi Wi-Fi to connect my home network
* reboot the RaspberryPi
* reconnect my Mac to my home network
* access the RaspberryPi on my Mac using the `http://coder.local` url in the Chrome for Mac browser or for iOS (shown in the image below).

![](4)

* view sample projects
* review the sparse Settings
Coder provides the detailed install process on their web page. Below is a capture of the Wi-Fi process I used.

![](5)

I posted several screen captures taken during the install process on Google+. I have embedded that post below.
A nice feature I found, after a quick cursory exploration of the sample code, was the ability to export projects so they can be hosted on other platforms. Files are collected and placed in a .zip file for download to your Mac or PC. This feature makes the Coder/RaspberryPi configuration a very robust, basic and secure web development tool.

Coder really is slick and I am very surprised how quickly I was able to setup this educational web development resource. I still have several questions I need to research (or if you know the answer, drop them in the comments below):

### Can I ssh into the server?

Update: It appears ssh is active and you can connect using the following:

`ssh pi@local.coder`
_password:_ use the Coder setup password

### Is apt-get or yum supported to update the OS when updates are available?

Coder uses the regular Debian distribution so `apt-get` is available and ready to use.

### Can I install additional software on the server and make the RaspberryPi multifunctional (this of course requires the answer to the first question to be “yes”)?

YES!

### Is there the ability to activate PHP, Ruby, Python and other web development languages (they may already be in there)?

YES!

### Can I make this instance of Coder accessible outside of my home network?

Have not tested.

### Can the server host my projects without revealing code?

Have not tested.

Coder development is still very early. The version I installed was v0.4. Clearly there is more work and more features to be added; however, even in this infant state, Coder is a very capable tool to provide children, adults and coders alike with a very competent educational tool or web testbed. Update: I'm actually using this as my primary development distribution. I regularly update the OS and install additional developmental tools. I recently installed Ruby to give me an additional programming environment.

Time to get back to my [Codecademy](6) lessons! Now that I have a robust platform from which to try out my new found HTML/CSS/Javascript skills, I'm ready to try out some experimental projects.

[1]: http://goo.gl/coder
[2]: http://www.stevencombs.com/images/posts/2013-09-15-coder-welcome-video.png
[3]: http://www.stevencombs.com/apple/2009/05/28/create-bootable-usb-drive-osx.html
[4]: http://www.stevencombs.com/images/posts/2013-09-15-coder.png
[5]: http://www.stevencombs.com/images/posts/2013-09-15-coder-wifi install.png
[6]: http://www.codecademy.com/doccombs
