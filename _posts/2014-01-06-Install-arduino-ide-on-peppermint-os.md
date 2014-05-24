---
layout: post
title: Install the Arduino IDE on Peppermint OS 4
date: 2014-01-06 05:00:06
comments: true
categories: linux arduino
---

<img src="http://2.bp.blogspot.com/-JWkcedZQv6k/Uss6UrZB9oI/AAAAAAABOg8/qhcYMT0zEXA/s1600/Loki+Blogs.jpg" align="right" width="200" />Two things happened during the holiday break. Loki and I reacquired our fascination with the [Arduino][2] and I also upgraded the operating system on my old Acer Aspire One from Chrome OS to [Peppermint OS 4][3]. In an [earlier post][4], I shared how to install the Arduino software on a netbook with Ubuntu Netbook remix 9.04. I thought these earlier instructions would assist me with an install on Peppermint OS 4. That was not the case. Not even the first step was correct.

This post will provide an update to that original post. Users of other Linux distributions should also find these instructions valuable and if you are using a Debian variant, they should work perfectly. After you hit the link below, you will find instructions for installing and using the Arduino software on Peppermint OS 4.

The Arduino Integrated Development Environment (IDE) requires Java. Peppermint OS 4 does not include Java as part of the default installation. Rather than using the official Oracle Java install, many Linux users recommend using the icedtea-plugin due to ease of install and regularity of updates. I will use this variation of Java.

* Open a Terminal window and enter the following: `sudo apt-get install icedtea-plugin` ↩

* Enter your root password and enter.

* Press `Y` to confirm the installation. The install can take some time depending on your Internet connectivity as well as the speed of your computer. That's it. Java should now be available on your computer.

* Verify the install at:

After you load the page in the default Peppermint OS 4 Chromimum browser, allow the Java plugin access to the page. You should then see a verification as shown in the image below.

<img src="http://3.bp.blogspot.com/-Cg55TDef-EA/Uss0X-_j9iI/AAAAAAABOf4/prFIjccMHPk/s1600/Java+Verification.png" width="640" />

Now that we have the Java dependency complete, let's install the Arduino IDE. This is VERY easy if you have ever installed software on a Linux box.

* Using the same Terminal window you used above, enter the following: `sudo apt-get install arduino` ↩

* Enter your root password at the prompt and hit enter.

* Press `Y` to accept the package installs. The install can take some time depending on your Internet connectivity as well as the speed of your computer.

* Once complete, you will find the Arduino software icon in the Electronics&nbsp;Program Menu.

Let's try it out our new Arduino IDE install.

* Click the Arduino item in the Electronics menu. The Arduino IDE will not load the first time and the prompt below will appear.

![][6]

* Click the Add button to add your account to the "dialout" group. This security step is required and gives your account rights to utilize the serial connections to upload code to an Arduino. Side note, this is another reason I love both Linux and Mac – additional security.

* The Peppermint OS will request authentication to add your account to the group. Enter your password and click Authenticate as shown in the image below.

![][7]

* Although not prompted to complete this step, reboot. If you don't do this and try and upload code, you may find yourself very frustrated.

* After a reboot, connect your Arduino to your Peppermint OS 4 enabled computer. My setup is shown in the image below.

<img src="http://2.bp.blogspot.com/--gKVRu6X22s/Uss1auky3QI/AAAAAAABOgc/YOlkVzdaEVg/s1600/My+Setup.jpg" width="640" />

* Select the Arduino item in the Electronics menu to load the Arduino IDE.

* Select the Arduino model from the _Tools_ / _Board_ / _Select Model Type_ menu.

* Select the device connection from the _Tools_ / _Serial Port_ / _/dev/???_ menu. Substitute _???_ with whatever serial port is displayed.

NOTE: The latest version of the Arduino IDE for Linux automatically configures the correct port once it finds an attached device.

* Load the sample LED sketch from the _File_ / _Examples_ / _01.Basics_ / _Blink_ menu. An LED blinking program will load.

* Click the Upload button as shown in the image below.

<img src="http://3.bp.blogspot.com/-1FWWUJpA4Hw/Uss2MJwyIWI/AAAAAAABOgs/DQEwylyxnYs/s1600/Compile+and+Upload.png" width="640" />

The Arduino IDE will compile the program (check for errors and convert to machine code) and then upload the code to the Arduino. Once upload is complete, the Arduino will blink the on-board LED every second.

Success! The Arduino IDE is installed and configured properly. Now get out there and create some cool new thing. If compelled, share your creation in the comments below.

That's all there is to it. Linux use and acceptability has come a long way in the past few years and given the ease of this process, I can highly recommend a Linux box (or an old Acer Aspire netbook) as an Arduino development tool.

[2]: http://www.amazon.com/s/?_encoding=UTF8&amp;camp=1789&amp;creative=390957&amp;field-keywords=arduino&amp;linkCode=ur2&amp;sprefix=Arduino%2Caps%2C236&amp;tag=docstechnotes-20&amp;url=search-alias%3Delectronics
[3]: http://peppermintos.com/
[4]: http://www.docstechnotes.com/2009/07/install-arduino-on-ubuntu-netbook-remix.html
[6]: http://1.bp.blogspot.com/-3E9xwqUMbKc/Uss1DrNCbJI/AAAAAAABOgM/-g4fXHU5t8o/s1600/Permission+Checker.png
[7]: http://3.bp.blogspot.com/-iUODxxNkoxE/Uss1P2LlydI/AAAAAAABOgU/RAJd9mk8870/s1600/Authentication+Required.png
