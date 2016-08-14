---
layout: post
title: 'Program C.H.I.P. with Python to control LED'
date: 'August 14, 2016'
comments: 'yes'
categories:
  - chip
---

The [C.H.I.P.][1] packs a lot of power into a tiny board that includes both Bluetooth and Wi-Fi. It's the perfect combination of small size and performance to power physical computing projects.

I recently built a tracked robotic platform, shown in the image below, for [a physical computing presentation][2]. My platform uses an Arduino; however the Arduino is too large, has limited capabilities, and does not include Bluetooth and Wi-Fi. The C.H.I.P. corrects these deficiencies and is half [the cost of the Arduino][3]. The C.H.I.P. seems perfect for this project.

![Tracked Vehicle Platform][image-1]

My goal for this post is to configure a C.H.I.P. so it can serve as the brain for my tracked robotic platform. I will install a complete [Python][4] GPIO development environment on the C.H.I.P. To test the environment, I will connect an LED to the GPIO pins and create two Python programs to turn an LED on and off.

# Table of Contents
<!-- TOC depthFrom:1 depthTo:6 withLinks:1 updateOnSave:1 orderedList:0 -->

- [Flash the C.H.I.P. without a GUI][5]
- [Connect C.H.I.P. to network][6]
- [Set the locale][7]
- [Set timezone][8]
- [Install Git][9]
- [Install Python][10]
- [Install the Python GPIO Library][11]
- [Connect LED to the C.H.I.P.][12]
- [Turn the LED on][13]
- [Turn the LED off][14]
- [Hello World][15]

<!-- /TOC -->

# Flash the C.H.I.P. without a GUI
A graphical user interface is not needed. My [flash the C.H.I.P.][16] post provides instructions to flash the C.H.I.P. Choose the latest (v4.4 as of this writing) *headless* image to flash.

# Connect C.H.I.P. to network
My [flash the C.H.I.P.][17] post demonstrates how to add the C.H.I.P. to a network so you can connect via SSH.

> **Alternatively:** Use a USB-OTG serial connection, instructions found in the [flash the C.H.I.P.][18] post, without the need to connect the C.H.I.P. to a network.

# Set the locale
Use the *Terminal* command below to set the locale of the chip to ensure keyboard commands are geographically correct:

`sudo apt-get update && sudo apt-get install locales && sudo dpkg-reconfigure locales && sudo locale-gen`

# Set timezone
Use the command below to set the time zone to ensure the onboard clock is accurate:

`sudo dpkg-reconfigure tzdata`

This is important if you use time-based Python event programming.

# Install Git
The Python GPIO library requires Git. Use the command below to install Git:

`sudo apt install git`

> Learn [what Git can do][19]. It is a valuable tool to use when programming.

# Install Python
Use the command below to install the Python programming language:

`sudo apt install python`

# Install the Python GPIO Library
Python on the C.H.I.P. requires a library to address and provide access to the GPIO pins. Use the library and instructions (also found below) from the GitHub site below:

[https://github.com/xtacocorex/CHIP\_IO][20]

> **Optional:** Before you begin the lengthy commands below, I recommend you replace the default `bash` shell with the `fish` shell. You can find more information on my [fish and C.H.I.P.s][21] post.

Use the commands below to install the Python library:

```bash
sudo apt update
sudo apt install git build-essential python-dev python-pip flex bison -y
git clone https://github.com/atenart/dtc
cd dtc
make
sudo make install PREFIX=/usr
cd ..
git clone git://github.com/xtacocorex/CHIP_IO.git
cd CHIP_IO
sudo python setup.py install
cd ..
sudo rm -rf CHIP_IO
```

To use the GPIO library and access the pins, include the Python `import` command below at the beginning of your program:

```python
import CHIP_IO.GPIO as GPIO
```

Similar to GPIO use on a Raspberry Pi, configure GPIO connections as inputs or outputs. This is done within the Python code. I will share the code after I attach an LED to the C.H.I.P.

# Connect LED to the C.H.I.P.
Connect the LED to GPIO pins labeled CSID0 and GND as shown in the image below. You will note that I have an inline 1K ohm resistor to protect the LED, GPIOs and C.H.I.P.

> **WARNING:** Please read this [warning from fordsfords][22] on the Next Thing Co. BBS. He correctly notes that originally I did not include an inline 1 to 10K resistor. The particular LED I use has a high internal resistance (to protect the GPIO from burn out) and is an LED I use for this type of experimentation frequently. While not required, I made an update to this post and the image to include an inline 1K ohm resistor as a safety buffer.

![][image-2]

Connect the LED long wire (anode - positive) to the resistor and then to GPIO pin CSID0.

Connect and the short wire (cathode - negative) to GPIO pin GND.

> If you don't have LEDs, I recommend this [batch from Amazon][23] or stop by your local Radio Shack.

# Turn the LED on
Now the fun begins. Create a Python program on the C.H.I.P. to the LED on.

Ensure there is still an SSH or Serial connection to the C.H.I.P.

Type the following:

`nano led-csid0-on.py`

The *nano* editor will load a blank page.

Enter the code below into the *nano* editor:

```
import CHIP_IO.GPIO as GPIO     #import the GPIO library
GPIO.setup("CSID0", GPIO.OUT)   #set CSID0 as an output
GPIO.output("CSID0", GPIO.HIGH) #set CSID0 (LED) HIGH (On)
```

I include comments (after the `#` character) that are not necessary.

To save the code on the C.H.I.P. and exit the nano editor, tap: `control` + `x`

The nano editor will prompt you to save the code as shown in the image below.

![][image-3]

Press `y` followed by ↩ to save the code and exit the editor. The Python code is now on the C.H.I.P. Time to give it try.

Use the command below to execute the Python program to turn the LED off:

`sudo python led-csid0-on.py`

If the `[sudo] password for chip:` prompt appears, enter the default: `chip`

If all goes well (and I didn't fat-finger any of the instructions) the LED will light up! If it didn't turn on, troubleshoot the following:

1. Is the LED connected properly?
2. Is the Python program correct?
3. Did you use the correct command to run the program?
4. Did you include `sudo` at the beginning of the command (this is required)?
5. Did you receive any errors after running the Python program assist with problem resolution?

Now we need to turn off the LED. Don’t unplug the LED or reboot the C.H.I.P. We will repeat the instructions in this step and create a Python program to the LED off.

# Turn the LED off
With the current SSH or serial connection, type the following:

`nano led-csid0-off.py`

The *nano* editor will load a blank page.

Enter the code below into the *nano* editor. Again, you can exclude comments.

```
import CHIP_IO.GPIO as GPIO      #import the GPIO library
GPIO.setup("CSID0", GPIO.OUT)    #set CSID0 as an output
GPIO.output("CSID0", GPIO.LOW)   #set CSID0 (LED) LOW (OFF)
```

To save the code to the C.H.I.P. type: `control` + `x`

The nano editor will prompt you to save the code. Press `y` followed by ↩ to save the code and exit the editor. The Python code is now on the C.H.I.P.

Let's see if we can turn the LED off. Use the command below to turn the LED off:

`sudo python led-csid0-off.py`

If the `[sudo] password for chip:` prompt appears (and it may not this time), enter the default: `chip`

The LED will turn off. It did turn off, right? If not, follow the troubleshooting steps in the [Turn the LED on][24] section above.

# Hello World
The Python code above is the physical computing equivalent to the popular "hello world" programs found in beginning programming classes and tutorials. The difference is that we use an LED connected to the C.H.I.P. as our output instead of words on the screen.

In other words, you now have the basics necessary to begin experiments with Python and the GPIO pins on the C.H.I.P. The physical computing world is now just an idea away. What will you create with your GPIO pins active? Drop a comment below and let me know.

[1]:	http://www.getchip.com
[2]:	http://www.stevencombs.com/raspberrypi.html
[3]:	http://amzn.to/2bfqY4g
[4]:	http://amzn.to/2aSrf9b
[5]:	#flash-the-chip-without-a-gui
[6]:	#connect-chip-to-network
[7]:	#set-the-locale
[8]:	#set-timezone
[9]:	#install-git
[10]:	#install-python
[11]:	#install-the-python-gpio-library
[12]:	#connect-led-to-the-chip
[13]:	#turn-the-led-on
[14]:	#turn-the-led-off
[15]:	#hello-world
[16]:	http://www.stevencombs.com/chip/2016/08/07/mac-to-chip-serial-connection.html
[17]:	http://www.stevencombs.com/chip/2016/08/07/mac-to-chip-serial-connection.html
[18]:	http://www.stevencombs.com/chip/2016/08/07/mac-to-chip-serial-connection.html
[19]:	https://try.github.io/levels/1/challenges/1
[20]:	https://github.com/xtacocorex/CHIP_IO
[21]:	http://www.stevencombs.com/chip/2016/08/13/fish-and-chips.html
[22]:	https://bbs.nextthing.co/t/hello-world-control-a-gpio-connected-led-using-python-on-the-c-h-i-p/8421/6?u=stevencombs
[23]:	http://amzn.to/2bq6e7w
[24]:	#turn-the-led-on

[image-1]:	http://www.stevencombs.com/images/posts/chip/tracked-robotic-platform.jpg
[image-2]:	http://www.stevencombs.com/images/posts/chip/chip-led.jpg
[image-3]:	http://www.stevencombs.com/images/posts/chip/nano-python-save.png