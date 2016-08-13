---
layout: post
title: 'Setup C.H.I.P. as a GPIO Linux terminal platform'
date: 'August 8, 2016'
comments: 'yes'
categories:
  - category
---

The [C.H.I.P.][1] packs a lot of computing power into a small board that also include Bluetooth and Wi-Fi. It's the prefect combination of small size and performance to power a tracked robotic platform. 

I've built a tracked robotic platform that was to use an Arduino; however the Arduino is just a bit too and and does not include Bluetooth and Wi-Fi. Believe it or not, I can also purchase the C.H.I.P. for less than the cost of the Arduino which does not include Bluetooth and Wi-Fi.

My hope is that the C.H.I.P. will serve masterfully as the brain behind my tracked robotic platform and provide expandability that an Arduino cannot. The challenge will be to replicate the [Arduino motor sheild][2] and interface with the [range detector][3] I currently use.

Before I add the C.H.I.P. to my tracked robotic platform, I will configure the C.H.I.P. as follows:

* Install a non GUI operating system
* Place the C.H.I.P. on my network
* Set the locale and timezone
* Install Git
* Install the Python language
* Install the C.H.I.P. Python GPIO library
* Test the platform by controling an LED with Python
* Connect to the C.H.I.P. via SFTP
* Use the Mac application [ForkLift][4] to connect to the C.H.I.P.
* Modify Python code on Mac

Once these tasks are complete, I can then use the C.H.I.P. as the brains of the tracked robotic platform.

![Tracked Vehicle Platform][image-1]

## Install OS and place the C.H.I.P. on local network

See my directions here to [flash the C.H.I.P.]()(http://www.stevencombs.com/chip/2016/08/07/mac-to-chip-serial-connection.html)

## Setup Locales on a Linux Terminal server:

Set the locale of the chip to ensure keyboard commands are correct and you have access to U.S. keyboard characters.

`sudo apt-get update && sudo apt-get install locales && sudo dpkg-reconfigure locales && sudo locale-gen`

## Set Time Zone

Set the time zone to ensure the onboard clock is always accurate.

`sudo dpkg-reconfigure tzdata`

## Install GIT

`sudo apt install git`

## Install the C.H.I.P. Python GPIO Library
Python on the C.H.I.P. now needs a library it can use to address the GPIO pins. We will use the library found on GitHub at:

\<https://github.com/xtacocorex/CHIP\_IO\>

Use the following commands to install the Python library:

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
\`
You now only need to import the library and set the pins as  into a Python program to be able to use the GPIO pins:

```python
`import CHIP_IO.GPIO as GPIO
```
\`
Similar to using the GPIOs on a Raspberry Pi, you must also tell Python which pins are inputs and which pins are outputs as shown in the examples below:

\`\`\`
\`
## Connect an LED to the C.H.I.P.
For this example, we are going to use the GPIO pin labeled CSID0. See image below and connect an LED (long to GPIO and short to GND)

![][image-2]

## Turn on LED using Python

```
`import CHIP_IO.GPIO as GPIO
GPIO.setup("CSID0", GPIO.OUT)
GPIO.output("CSID0", GPIO.HIGH)
```
`
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
[2]:	http://amzn.to/2bd7rBX
[3]:	http://amzn.to/2aJTgTH
[4]:	!mas


[image-1]:	http://www.stevencombs.com/images/posts/chip/tracked-robotic-platform.jpg
[image-2]:	http://www.stevencombs.com/images/posts/chip/chip-led.jpg