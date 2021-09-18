---
layout: post
title: 'HOWTO: Install the Arduino IDE on Ubuntu Mate'
author: 'Steven B. Combs, Ph.D.'
email: 'steven.combs@gmail.com'
date: 2019-12-31
category: arduino
comments: 'yes'
permalink: arduino-ide-ubuntu
tags:
  - howto
  - arduino
  - arduino-ide
  - ubuntu
  - linux
---

It is possible to install the Arduino IDE from the default Ubuntu repositories using `sudo apt install arduino`; however, what you will install is a woefully "out-of-date" version. Let's install the most "up-to-date" software so we can take advantage of the latest tools and Arduino boards available.

I will document the process using Ubuntu Mate version 19.10; however, this should work on most versions of Ubuntu (no promises though). Let's get started.

> **BLOGGER'S NOTE:** This is the last post of 2019! I can't believe 2020 has arrived. I wrote this post to help me prepare to teach my Spring 2020 TECH 120 course for Purdue Polytechnic Columbus; which for the first time, will include a section on physical computing. We are going to use [ELEGOO Mega 2560 project kits](https://amzn.to/2SHAbrn).

## Install Ubuntu make
_Ubuntu Make_, or `umake` is a command line tool designed to "enable quick and easy setup of common needs for developers on Ubuntu." It is available as a [Snap package](https://snapcraft.io/ubuntu-make) or via the default Ubuntu 19.10 repositories. I will use the repository version and follow the directions on the [Ubuntu Make GitHub page](https://github.com/ubuntu/ubuntu-make).

First, fire up the _Terminal_ application and use the commands below:

```
sudo apt-get update
sudo apt-get install ubuntu-make
```
> **NOTE:** The `sudo` command will require you to enter your Ubuntu user password.

## Install the Arduino IDE

The next step is to use _Ubuntu Make_, or the `umake` command, to install the _Arduino IDE_ with the command below:

```
umake ide arduino
```

_Ubuntu Make_ installs the application in the default directory shown below:

`~/.local/share/umake/ide/arduino`

You do have the option to change this location before installing but I do not recommend.

## Provide dialout access

Let's grant Ubuntu access to the USB ports that will be assigned to the Arduino hardware. This is as simple as the command below:

```
sudo usermod -a -G dialout $USER
```

Logout of Ubuntu and then log back in. There's no need to restart but if you have issues, you may want to give the computer a restart.

## Run the Arduino IDE

To test your install, you will use another Terminal command:

```
./.local/share/umake/ide/arduino/arduino
```

> NOTE: You can add this command to your Ubuntu menu but that's for another post or a simple Google search.

## Configure the Arduino hardware

Plug in the Arduino using the USB cable provided with the device. Select the board type using the following _Arduino IDE_ menu option:

_Tools_ / _Board:_

Select the type of Arduino board connected. There are many, so be careful when making your selection (see image below).

![Selecting the Arduino Board](/images/posts/2019-12-31-arduino-selection.png)

The last hardware configuration step is to select the port connected to the Arduino. Use the _Arduino IDE_ menu:

_Tools_ / _Port:_

This is were every machine differs but you should see something similar to the following:

_dev/tty/ACM0_

If you have a long list, you can find the correct port with these steps:

1. Diconnect the Arduino hardware from the computer
2. Open up the _Tools_ / _Port:_ menu
3. Make a note of the listed ports
4. Close the menu
5. Plug in the Arduino hardware
6. Open the _Tools_ / _Port:_ menu
7. Note which new port has been added to the list
8. Select the new port

You are now ready to program and upload said program to your Arduino.

## Updates
Updating the _Arduino IDE_ is a manual process. When you discover that an update is available, by reviewing the [Arduino software page](https://www.arduino.cc/en/main/software), simply rerun this command:

`umake ide arduino`

_Ubuntu Make_ will announce that a previous version is installed and ask to delete it. Answer `Y` and hit the Return key (⏎) to proceed with the upgrade. You will not need to repeat to the `dialout` command above.

> **NOTE:** If you are a developer, you may want to look at the Ubuntu Make command `umake --list`. This will list other IDEs, software, and development environments you can install.

## Conclusion

That's all it takes to install the _Arduino IDE_ on your Ubuntu Mate distribution, run the software, configure the connected Arduino hardware, and keep the software up to date. I hope this blog post saves others some time. It took an hour or so of trial and error for me to find a method that I preferred. If you have questions or find an error, please drop a comment below. Happy programming!
