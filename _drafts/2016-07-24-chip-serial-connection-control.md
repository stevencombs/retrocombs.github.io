---
layout: post
title: 'Mac directions for USB OTG Serial Connection to C.H.I.P.'
date: 'July 24, 2016'
comments: 'yes'
categories:
  - chip
---

One the great feature of the new C.H.I.P. computer is the 4Gb onboard flash memory. Unlike a Raspberry Pi, the C.H.I.P. does not require a microSD card. You simply connect the C.H.I.P. to your computer and "flash" the C.H.I.P. operating system on the hardware. Once flashed, you don't even need a monitor or keyboard to begin using thanks to Next Thing Co's foresight to include a [USB On-The-Go (OTG) connection][1].

Using USB OTG, you connect the C.H.I.P. to your computer via a standard USB cable and then use an old school serial connection to issue commands to the C.H.I.P. If you are familiar with SSH, you will feel at home using USB OTG. Once you make the connection, you connect your C.H.I.P. to your home Wi-Fi by issuing a few commands (I'll cover those as well) and then you can SSH into the C.H.I.P. over Wi-Fi.

USB OTG on a Windows box using Putty is [documented online][2]; however, I've yet to find specific details on how to make this connection on a Mac. After several failed attempts on the Mac, I was able to finally make a USB OTG connection. This post describes my process.

# Flash the C.H.I.P.
Before a new C.H.I.P. will work out of the box with a USB OTG connection, you need to install the latest operating system (OS). Unless you have a special application, I recommend you always choose the latest version (as of this writing 4.4). You will use the Chrome browser and the C.H.I.P. Flasher application to do this. Let's get started:

* Load the [Chrome browser][3].
* Navigate to the C.H.I.P. Flasher page at: [http://flash.getchip.com/][4]. Chrome will prompt you to install the Flasher application. Click through to install.
* Once the Flasher is installed, the Flasher page will present several version of the C.H.I.P. OS to install as shown in the image below.  
	  
	![C.H.I.P. Flasher Page][image-1]

* Before you can flash the C.H.I.P., you must first place a jumper between the C.H.I.P. FEL and GRND pins as shown in the image below. **TIP:** If you don't have a jumper wire, you can use a paper clip or a pipe cleaner.  
	  
	![Place jumper on C.H.I.P. to flash][image-2]

* Use a microUSB cable and plug the micro connector into the C.H.I.P. and the standard USB connector into the Mac.
* Click on the image you wish to flash. The C.H.I.P. Flasher application will load and begin the flash process as shown in the image below.  
	  
	![Flashing the C.H.I.P.][image-3]  
	  
	It will take awhile, so kick back and relax as you contemplate the wonderful things are are going to do with your $9 computer.
* Once flashing is complete, click the EXIT FLASHER button and unplug the chip from the USB cable.  
	  
	![Flashing succesful][image-4]  

* Remove the jumper from pins REL and GND.
* Reconnect the C.H.I.P. to the Mac again without the jumper. The C.H.I.P. will begin the boot process.

You will note that we are going to connect to the C.H.I.P. without a monitor or keyboard attached. The use of a serial connection has been baked in by the developers and is a very cool way to connect your C.H.I.P. to your home Wi-Fi and begin using your C.H.I.P. immediately. Let's get to the fun stuff now.

# Determine USB identification

This is where it gets a bit tricky, so follow closely. Load the *Terminal* application on the Mac and issue the command below.

`ls /dev/tty*`

You are likely to see a long list of *tty* devices similar to the image below. 

![TTY Devices][image-5]

Most likely, the device you are looking for is not on the current page. Use the arrow keys and scroll up. You are looking for a device that has the following format:

`/dev/tty.usbmodemXXXX` where XXXX is a four digit number

Write down that four digit number, or better yet, write that entire line with the four digit numbers. In my case, I have the following serial device name:

`/dev/tty.usbmodem2623
`
# Connect using a Serial Terminal

The Mac has a serial connection command built-in called `screen` and we will use the `screen` command to make a serial connection to the C.H.I.P. so we can issue terminal commands on the C.H.I.P. without the necessity of having it attached to a network.

* Use the command below to establish a serial connection to the C.H.I.P. using the USB cable:  
	  
	`screen /dev/tty.usbmodem2623 115200`

> We add the 115200 (to represent 115,200bps) at the end of the command to establish the connection speed between the Mac and the C.H.I.P.

If the connection is successful, the C.H.I.P. will promote you for a username and password. The defaults are listed below:

username: `root`
password: `chip`

After the login process you should have the prompt shown in the image below:

![A successful serial connection][image-6]

With this serial connection, you can now issue any *Terminal* command you could during an SSH connection to the C.H.I.P. I obviously won’t go into a along discussion of the possibilities at this point; however, I do want to share two very useful things we can do with the C.H.I.P. and this serial connection:

1. Connect the C.H.I.P. to Wi-Fi 
2. Determine the C.H.I.P. IP address

Once you do these two things you can untether your C.H.I.P. from your Mac and make a connection via SSH to administer it remotely .

# Connect C.H.I.P. to Wi-Fi

To connect your C.H.I.P. to your Wi-Fi network, first see that your C.H.I.P. can find your network by scanning the Wi-Fi spectrum using the command below:

`nmcli device wifi list`

If you see the name of your Wi-Fi network (along with others depending on the proximity to your neighbors), you are ready to make a connection using the command below. Remember to make the substitutions and exclude the parenthesis.

`sudo nmcli device wifi connect '(your wifi network name/SSID)' password '(your wifi password)' ifname wlan0`

# Determine IP Address

`ip add show`
 

[1]:	https://en.wikipedia.org/wiki/USB_On-The-Go
[2]:	http://docs.getchip.com/chip.html#headless-chip
[3]:	https://www.google.com/chrome/browser/desktop/index.html
[4]:	http://flash.getchip.com/

[image-1]:	http://www.stevencombs.com/images/posts/chip/choose-version.png
[image-2]:	http://www.stevencombs.com/images/posts/chip/chip-jumper-pins.jpg
[image-3]:	http://www.stevencombs.com/images/posts/chip/flashing.png
[image-4]:	http://www.stevencombs.com/images/posts/chip/flashing-success.png
[image-5]:	http://www.stevencombs.com/images/posts/chip/tty-devices.png
[image-6]:	http://www.stevencombs.com/images/posts/chip/serial-connection.png