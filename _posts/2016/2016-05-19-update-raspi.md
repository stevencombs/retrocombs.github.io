---
layout: post
title: 'HOWTO: Update your Raspberry Pi OS and software'
date: 'May 25, 2016'
comments: 'yes'
categories:
  - raspberrypi
tags:
  - howto
  - raspberrypi
  - terminal
  - raspian
  - firmware
  - update
  - software
---

The Raspberry Pi's operating system (OS) is a modified version of the open source (free) [Debian Linux](https://en.wikipedia.org/wiki/Debian) distribution. Debian includes a package (software) manager know as the advanced packaging tool. This tool is used to update the [Raspberry Pi's](http://amzn.to/1RrDln4) OS and software. While using the command line to update software might seem daunting, the process couldn't be easier once you know and understand how the package manager works. This post will give you those skills.

> To apply updates, the Raspberry Pi must have the Raspian OS installed and an Internet connection.

I'll begin with the commands and recommend a timeframe to apply updates. After a quick review of the commands, I offer more detail about the function of each command.

# Bottom Line Up Front
Let's dive right into the commands we use to keep our Raspberry Pi up to date and how often to use these commands. The update frequency is a matter of preference; however, I recommend the following.

## Weekly
Check for Raspian OS and software updates with the following commands:

```
sudo apt-get update
sudo apt-get dist-upgrade
```

## Monthly
Check for firmware updates, Raspian UI modifications and clean your installation with the following commands:

```
sudo rpi-update
sudo apt-get install raspberrypi-ui-mods
sudo apt-get clean
```

> There are graphical user interface (GUI) tools available that assist with updates; however, using _Terminal_ commands provides a deeper understanding of how these GUI tools work and provides an introduction to the use of console commands to manage the Raspberry Pi.

Let's discuss each command and learn how to update the firmware.

# Update Raspberry Pi firmware
The Raspberry Pi firmware allows the hardware to communicate with the software. On a full size PC, the firmware normally resides on an integrated circuit on the motherboard. On the Raspberry Pi, the firmware resides on an area (partition) of the SD card. This configuration allows firmware updates to be simple and reduces hardware costs.

At the terminal prompt, type the following command to update the Raspberry Pi firmware:

    `sudo rpi-update'

The latest version of the Raspberry Pi firmware will download and update the Raspberry Pi OS [kernel](https://en.wikipedia.org/wiki/Kernel_(operating_system)) as shown in the image below.

> ![rpi-update](/images/posts/rpi-update.png)

To use the new firmware, a reboot is required:

    `sudo reboot`

See the official [`rpi-update` page](https://github.com/Hexxeh/rpi-update) for more information about firmware updates.

> Do not use this command if you have made modifications to your kernel to support additional hardware, such as the GPIO connected [PiTFT display from Adafruit](http://amzn.to/1saZQZ1) as shown in the image below. Doing so will most likely require a kernel rebuild. If you didn't understand that statement, you probably don't need to heed this warning.

> ![PiTFT](https://lh3.googleusercontent.com/hZAf4I4jIU1iWOUg8eiaHGBj5QpxOmYlHum2XqujfULmUEAY4fWUFOE_-B5EQ7wHsbwBVUo2eBVrknmOcGhm1dRL6VkEbvTAtDKCuZVF0gxBQMGq36g-RbmjxYH8OZXwJnhoS2v1rPz3EeBKbE_MTuDq_uYhunNFX0j36wZ3zgm2-zf-3IFCIMsw7JMvmd4rBk4jEVr7l45v6Ex65l3bKJVAL8rWCNJ5jMcB4Aw4r78OMrqaHsIdv5_qPc4URmVxfNu-88nyu-G9zBFQs_wr3fvF_shNR66EQbDHktrtCdhKa_JpiqAxtviy15ld9o0j_4ynNVZvX9e3Qkkgv-zZqTHWJdH-zWKpwdjFJUsdSLG1XMVuCbbx2nCi_iK5r4nQbErn_AdzmcUFlEPkb9oTvzJV0VhtBjrhyI1OWQdGK_JTd48ZjurL_vjF4aXNEZxh1vq7dTCl6TlN7BjdwnohIT_vRPAzFth-OHFQ6iiI9diHN8w_iJO1wlaPnBnTShh8M7xBYGfyI5oYFo4ePUxCkKVhvBl27ryBSmHj5ZLk-yaHb4ExK1I8hNOgccf4uFqzSMm4MzVsKF_Rkw5tkObotyxNwnDyJN1e=w2116-h1586-no)

# Raspian OS and software update
After a firmware update, update the Raspian OS and software using the commands below:

    `sudo apt-get update`

The `apt` update option connects the Raspberry Pi to the online software repository database and compares available software to installed software. From this comparison, `apt` develops a list of packages that need an update. It may take up to a minute or two for the update to finish.

After the repository updates, the Raspberry Pi can now determine what Raspian OS and software updates are available. Updates often contain security enhancements and software feature additions. It is always good practice to use this command before you use upgrade commands.

To identify and apply the updates, use the command below:

`sudo apt-get dist-upgrade`

The Raspberry Pi will display a list of the updates.

If you only want to update software and not the Raspian OS, you can use the commands below:

```
sudo apt-get update
sudo apt-get upgrade
```

I recommend using the `dist-upgrade` option. To me, it just makes sense to update both the OS and all software on the Raspberry Pi.

# Raspian user interface update
Occasionally, the Raspian OS receives user interface updates that are not included in the base updates. Check for and install these updates using the commands below:

```
sudo apt-get update
sudo apt-get install raspberrypi-ui-mods
```

# Clean up
After upgrades, it's good practice to execute the `apt clean` option. This will recover additional space on the SD card. During the installation process, `apt` downloads .deb files. These are installation files that are no longer needed once the application is installed. Removing them will free space on your SD card. This is especially valuable if you use a 4Gb SD card.

Use the command below to clean the Raspberry Pi SD card:

    `sudo apt-get clean`

# Summary
Regular Raspberry Pi updates will ensure the Pi has the latest security improvements, application and OS features. The task is simple once you understand and use the commands on a regular basis.
