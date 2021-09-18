---
layout: post
title: 'HOWTO: Install Arduino IDE on Chrome OS - now with device support!'
date: 2020-01-20
author: 'Steven B. Combs, Ph.D.'
email: 'steven.combs@gmail.com'
comments: 'yes'
category: arduino
permalink: arduino-on-chromeos
tags:
  - howto
  - arduino
  - linux
  - debian
  - vm
  - chromeos
  - ide
  - programming
  - electronics
  - physicalcomputing
  - pixelbook
  - pixelslate
---

After my [previous Arduino IDE post](https://www.stevencombs.com/arduino/2019/12/31/install-arduino-ubuntu.html), I wondered if I could now install the latest version of the Arduino IDE on Chrome OS using the Crostini Linux VM. In the past, you could use the `apt` package manager to install the Arduino IDE but the version was woefully outdated.

I was confident I could get the latest version of the IDE installed, but then pushed my challenge further to see if I could even connect the Chrome OS device to the Arduino and upload a program. In theory, this should be possible since the latest version of Chrome OS on the beta channel (version 80) provides the option to give the Linux VM access and permission to "non-supported" USB devices.

[![Pixel Power Podcast Banner](/images/common/ppp-banner.png)](https://www.pixelpowerpodcast.com)

I was dubious about hardware connectivity; however, with the IDE installed I could at least do some development on my [Pixel Slate](https://amzn.to/37eKmIG). Much to my surprise, and after much trial and error, I was able to install the Arduino IDE and upload code to an [Elegoo MEGA 2560](https://www.stevencombs.com/arduino/2020/01/11/elegoo-mega-starter-kit.html)! I was so excited, I just had to share my process.

> **NOTE 1:** This post was updated on 2020-05-16 with refinements and updates from my readers. Many thanks to those who are making this post even more valuable! Join us by leaving your comments below.

> **NOTE 2:** These steps were tested on both a Pixelbook and Pixel Slate using Chrome OS version 80 on the beta channel.

> **NOTE 3:** I used the Linux guide available at <https://www.arduino.cc/en/guide/linux> as a basis for these instructions.

> **NOTE 4:** This post assumes you have the Crostini VM enabled on your device. If not, visit *Settings* / *Enable Linux beta*.

Before I share the process, here's a video showing the Arduino IDE uploading code from my Pixel Slate to an Arduino Uno.

<div style="position:relative;padding-top:56.25%;">
  <p><iframe src="https://www.youtube.com/embed/hAuv_M3l_ag" frameborder="0" allowfullscreen
    style="position:absolute;top:0;left:0;width:100%;height:100%;"></iframe></p>
</div>

## Download Chrome OS

1. Chrome OS's Crostini virtual machine (VM) uses Debian (version 9 on Chrome OS v80 and now 10 on Chrome OS v82), a Linux distribution. Because of this, we can use the software found on the Arduino download page at:

    <https://www.arduino.cc/en/Main/Software>

2. Scroll down the page and click the _Linux 64 bits_ download link as shown below; unless your Chrome OS device uses an ARM processor and in that case choose the _Linux ARM 64 bits_ download link.

    ![Linux download link](/images/posts/2020-01-20-arduino-ide-chrome-os/arduino-linux-download-link.png)

3. Download the file directly to the Chrome OS Linux folder as shown in the image below:

    ![Download to Linux folder](/images/posts/2020-01-20-arduino-ide-chrome-os/download-to-linux-folder.png)

## Extract the compressed file

The Arduino IDE comes inside a compressed `.tar.xz` file format. Use the _Terminal_ to extract the file.

1. Activate the _Terminal_ from the _Launcher_
2. Because the file is in the Linux folder, the compressed file is in your Linux home directory. Verify with the `ls` command and you should see a file name similar to the following:

    `arduino-1.8.10-linux64.tar.xz`

3. By default, Debian does not provide the option you need to decompress a `.tar.xz` file. You can install the required package using the commands below:

    ```bash
    sudo apt update
    sudo apt install xz-utils
    ```

4. Extract the application files into the `/opt` folder. This is a good Debian practice and will keep the home folder clean of excess files. Type the following in the terminal:

    `sudo tar -C /opt -xf arduino-1.8.10-linux64.tar.xz`

    > **TIP:** you do not need to type the entire name of the file in the command above. Type `arduino` followed by the _tab_ key to autocomplete the filename.

## Install the Arduino IDE package

Inside the extracted folder is an install script. Use the script to complete the installation using the instructions below:

1. Move into the new folder created with the following command:

    `cd /opt/arduino-1.8.10`

2. Install the Arduino IDE using the command below:

    `sudo ./install.sh`

3. The _Terminal_ is going to throw a lot of scary messages at you, similar to the following, but don't worry about them:

    ```bash
    Adding desktop shortcut, menu item and file associations for Arduino IDE...xdg-desktop-menu: No writable system menu directory found.

    xdg-desktop-menu: No writable system menu directory found.
    touch: cannot touch '/root/.local/share/applications/mimeapps.list': No such file or directory
    /usr/bin/xdg-mime: 803: /usr/bin/xdg-mime: cannot create /root/.local/share/applications/mimeapps.list.new: Directory nonexistent

    done!
    ```

## Install Desktop Launcher

This is where it gets strange. You will execute the install file one more time but without `sudo`.

    `./install.sh`

More errors will appear but again, ignore them. When complete, a `Desktop` folder is created in your home directory (`cd ~`) with an `arduino-arduinoide.desktop` file inside. This `.desktop` file makes the Arduino IDE accessible via the _Launcher_. Below are the contents of the file:

```bash
[Desktop Entry]
Type=Application
Name=Arduino IDE
GenericName=Arduino IDE
Comment=Open-source electronics prototyping platform
Exec=/opt/arduino-1.8.10/arduino
Icon=arduino-arduinoide
Terminal=false
Categories=Development;IDE;Electronics;
MimeType=text/x-arduino;
Keywords=embedded electronics;electronics;avr;microcontroller;
StartupWMClass=processing-app-Base
```

Do nothing with the contents of the file but ensure it is not deleted. A review of the contents helps us learn more about how Linux applications are accessible by various desktop environments.

## Start the Arduino IDE

Activate the _Launcher_ to view the new icon named _Arduino IDE_ as shown in the image below.

![Arduino IDE icon in_Launcher_](/images/posts/2020-01-20-arduino-ide-chrome-os/arduino-ide-icon-launcher.png)lin

> **TIP:** Right-click on the Arduino icon and select _Pin to Shelf_ for quick access.

## Clean up your Linux home directory

Delete the original compressed file. This is as easy as selecting the file in the Chrome OS _Files_ app and clicking the delete icon in the upper-right hand corner. Make sure you do not delete the `Desktop` folder.

## Enable USB devices in the VM

USB device support is not activated by default. As mentioned, I assume you are on the Chrome OS beta channel with at least version 80 (see note below). We will enable a Chrome OS flag to give us access to unsupported USB devices in the VM:

1. In the _Chrome Address Bar_, type the following:

    `chrome://flags`

2. In the _Search Flags_ area, type the following:

    `Crostini USB`

3. Select the _Enabled_ option in the drop-down menu next to the _# Crostini Usb Allow Unsupported_ flag.
4. Reboot the Chrome OS device.

> As of Chrome OS v83, you no longer need to activate this flag.

## Connect the Arduino to the Chrome OS device

If you have a Pixelbook or Pixel Slate, you will need a USB-C (3.1) to USB-B (2.0 or 3.0) hub. There are many good options. [I recommend this one (#ad)](https://amzn.to/2R9RuR2). Plug the hub into the device and then plug the Arduino into the hub. The Arduino's power light will turn on.

If you have a Chrome OS device with an older USB 3.0 or USB 2.0, plug the Arduino to the port. The Arduino's power light will turn on.

So far so good!

> As noted by reader, [Nathan Morse](https://disqus.com/by/disqus_WcwrX4qGCo/), "Let the record show that you must connect the Arduino[-esque] device to the USB before trying to change the Linux USB setting in Chrome OS. Totally works, now! You are a hero, [@Steven Combs](https://disqus.com/by/stevencombsphd/)!" - Well thanks so much Nathan for the shout-out and the solution to a longstanding Arduino clone connection problem. This solutions is reported as working on Chrome OS v81.

## Give Linux access to the USB device

Chrome OS now has access to the Arduino but now we want to pass that permission to the Linux VM using the steps below:

1. Open the _Settings_ application.
2. Select _Linux(Beta_) / _USB Preferences_.
3. In the _USB Preferences_ flip the toggle to the right to allow the "USB device from Arduino (www.arduino.com)" USB device.

> **NOTE:** The page states that, "Linux won't remember a USB device after it's removed." And it won't! When you shutdown your Chrome OS device or disconnect the Arduino or the USB Hub, you will need to allow permissions when you reconnect. Luckily, Chrome OS will display the notification below to remind you when a device is connected:

> ![Connect USB device notification](/images/posts/2020-01-20-arduino-ide-chrome-os/reconnect-notification.png)

## Select the device in the Arduino IDE

Let's see if the Arduino IDE has access to the USB device using the following steps:

1. Open the _Arduino_ application.
2. Select the _Tools_ / _Board:_ menu item.You will see an image similar to the one shown below:

   ![Tools menu](/images/posts/2020-01-20-arduino-ide-chrome-os/arduino-connected.png)

3. The first step before uploading a program is to select the type of Arduino board. Make that selection in the _Board:_ menu.
4. Below the _Board:_ menu is the _Port:_ menu. If you followed all the steps above, you should see something similar to the one shown in the image and in the line below:

    `"/dev/ttyACM0 (Arduino/Genuino Uno)"`

5. Select the _Port:_ menu and you will see one available device.

Load or code a program, upload the program to the Arduino, and test!

## What this means

Google continues to refine Linux support on Chrome OS devices. Just months ago, it was not possible to install the Arduino IDE and use it to code and control an Arduino device. While this is still in beta and you have to activate a flag, it's just a matter of time before this functionality becomes baked into Chrome OS for the masses.

Installation of the Arduino IDE on a Chromebook is an educator's dream. If you are a high school teacher, you likely use a Chromebook as your "daily driver." In order to teach Arduino and physical computing concepts, you likely had to pull out a leftover Windows machine from the IT closet for demonstrations. You no longer need to do this! You can now use a Chromebook.

I am very excited about that capability this brings to my Pixelbook and Pixel Slate. As you can tell from the multiple exclamation marks in this post, I am very excited that I can use Chrome OS for one of my [favorite hobbies](https://www.stevencombs.com/embedded.html) and as [part of my job](https://sites.google.com/site/stevencombs/home/instruction/design-thinking-in-technology). I hope others find this post helpful. Happy programming!
