---
layout: post
title: 'Setup C.H.I.P. as a Python GPIO development platform'
date: 'August 14, 2016'
comments: 'yes'
categories:
  - category
---

The [C.H.I.P.][1] packs a lot of computing power into a small board that also include Bluetooth and Wi-Fi. It's the prefect combination of small size and performance to power your projects.

I've built a tracked robotic platform that was to use an Arduino; however the Arduino is just a bit too large and and does not include Bluetooth and Wi-Fi. Believe it or not, I can also purchase the C.H.I.P. for less than the cost of the Arduino which does not include Bluetooth and Wi-Fi.

My hope is that the C.H.I.P. will serve masterfully as the brain behind my tracked robotic platform and provide expandability that an Arduino cannot. Before I add the C.H.I.P. to my tracked robotic platform, I need to first determine how to configure the C.H.I.P. so I can install a complete Python development GPIO environment. To test the environment, I will start small and develop a few Python programs to to turn an LED, connected to GPIO pins, on and off.

Below are the steps to configure the C.H.I.P. as a Python GPIO development environment. After this listing, I will present each step in detail so you can follow along and experiment yourself.

# Steps
* Flash the C.H.I.P. without a GUI
* Place the C.H.I.P. on my network
* Set the locale
* Set the timezone
* Install Git
* Install the Python language
* Install the C.H.I.P. Python GPIO library
* Turn an LED on using Python
* Turn an LED off using Python
* Connect to the C.H.I.P. via SFTP

Once these tasks are complete, I can begin to consider how to use the C.H.I.P. as my tracked robotic brains.

![Tracked Vehicle Platform][image-1]

## Flash the C.H.I.P. without a GUI and place it on the network
For this C.H.I.P. exercise, I will not need a graphical user interface. Use my [flash the C.H.I.P.]() directions to flash the C.H.I.P. with the *Headless* image.

After you flash the C.H.I.P., continue my instructions on the same post to place the C.H.I.P. on your network. 

> **Alternatively:** use the serial connection instructions (also found on that page) without the need to connect the C.H.I.P. to your network. The choice is yours!

## Set the locale
Set the locale of the chip to ensure keyboard commands are correct and you have access to U.S. or other country keyboard characters.

`sudo apt-get update && sudo apt-get install locales && sudo dpkg-reconfigure locales && sudo locale-gen`

## Set timezone
If your C.H.I.P. has an Internet connection, set the time zone to ensure the onboard clock is accurate. This will be important if you use the onboard clock for any Python programs that require time based decisions or feedback.

`sudo dpkg-reconfigure tzdata`

## Install GIT
Git is required to install the Python GPIO library and as you spend time developing your programs, you will want a way to back up and version your programs.
 
`sudo apt install git`

## Install the C.H.I.P. Python GPIO Library
Python on the C.H.I.P. now needs a library it can use to address the GPIO pins. We will use the library and installation commands  found on GitHub at:

[https://github.com/xtacocorex/CHIP\_IO][3]

Use the following commands to install the Python library:

> **Optional:** Before you begin the lengthy commands below, I recommend you replace the default `bash` shell with the `fish` shell. You can find more information on my [fish and C.H.I.P.s][4] post.

```bash
`sudo apt update
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

To use the library and activate the pins in a Python program, use the code below:

```python
import CHIP_IO.GPIO as GPIO
```

Similar to GPIO use on a Raspberry Pi, Python must know which pins are inputs and which are outputs. We will do that at the top of a Python program after we connect an LED to the C.H.I.P.

## Connect an LED to the C.H.I.P.
For this example, connect the LED to the GPIO pin labeled CSID0. See image below and connect an LED with the long wire (positive) to GPIO-CSID0 and the short wire (negative) to GND.

![][image-2]

## Turn on LED using Python
Now the fun begins. We get to create our first Python program on the C.H.I.P. 

Make an SSH or Serial connection to the C.H.I.P.

Type the following:

`nano led-csid0-on.py` - the *nano* editor will load a blank page.

Enter the code below into the *nano* editor. I have included comments. You can exclude those if you like.

```
`import CHIP_IO.GPIO as GPIO     #import the GPIO library
GPIO.setup("CSID0", GPIO.OUT)   #set CSID0 as an output
GPIO.output("CSID0", GPIO.HIGH) #set CSID0 (LED) to HIGH (On)
```
`
To save the code to the C.H.I.P. type: `control` + `x` 

![][image-3]

Use the command below to turn on the LED:
`sudo python led-csid0-on.py`

## Turn off LED using Python

```
`import CHIP_IO.GPIO as GPIO
GPIO.setup("CSID0", GPIO.OUT)
GPIO.output("CSID0", GPIO.LOW)
```
`
Use the command below to turn off the LED:
`sudo python led-csid0-off.py`

## The ForkLift option for Mac

SFTP in to the C.H.I.P. 

Now you can use any programming tool on the Mac you prefer

[1]:	http://www.getchip.com
[3]:	https://github.com/xtacocorex/CHIP_IO
[4]:	http://www.stevencombs.com/chip/2016/08/13/fish-and-chips.html

[image-1]:	http://www.stevencombs.com/images/posts/chip/tracked-robotic-platform.jpg
[image-2]:	http://www.stevencombs.com/images/posts/chip/chip-led.jpg
[image-3]:	http://www.stevencombs.com/images/posts/chip/nano-python-save.png