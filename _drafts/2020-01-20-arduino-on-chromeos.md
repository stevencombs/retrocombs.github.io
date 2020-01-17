---
layout: post
title: 'Install Arduino IDE on Chrome OS'
date: 2020-01-15
author: 'Steven B. Combs, Ph.D.'
email: 'steven.combs@gmail.com'
comments: 'yes'
categories:
  - arduino
tags:
  - arduino
  - chromeos
  - ide
  - programming
  - electronics
  - physicalcomputing
  - pixelbook
  - pixelslate
---

In a follow up to a [previous post](https://www.stevencombs.com/arduino/2019/12/31/install-arduino-ubuntu.html), below are instructions for the install of the Arduino IDE on Chrome OS. First, a caveat... <something about USB...does it work now on Chrome OS 80?>

> **NOTE:** I used the Linux guide available at <https://www.arduino.cc/en/guide/linux> as a basis for these instructions.

> **NOTE:** This post assumes you have the Crostini VM enabled on your device. If not, visit *Settings* | *Enable Linux beta*.

## Download Chrome OS

1. Because the Chrome OS Constini virtual machine (VM) uses Debian, a Linux distribution, visit the Arduino download page at:

    <https://www.arduino.cc/en/Main/Software>

2. Scroll down the page and click the `**Linux** 64 bits` download link as shown below; unless your Chrome OS device uses an ARM processor and in that case choose the `**Linux** ARM 64 bits` download link.

    ![Linux download link](/images/posts/2020-01-18-arduino-ide-chrome-os/arduino-linux-download-link.png)

3. Download the file directly to the Linux folder as shown in the image below:

    ![Download to Linux folder](/images/posts/2020-01-18-arduino-ide-chrome-os/download-to-linux-folder.png)

## Extract the compressed file

The Arduino IDE comes inside a compressed .tar.xz file format. We will use the _Terminal_ to extract the file.

1. Activate the _Terminal_ from the _Launcher_
2. Because you placed the file in the Linux folder, the compressed file is in your accounts default directory. Verfiy with the `ls` command and you should see a file name similar to the following:

    `arduino-1.8.10-linux64.tar.xz`

3. By default, Debian does not provide the option you need to decompress a .tar.xz file. You can install the required package using the commands below:

    ```
    sudo apt update
    sudo apt install xz-utils
    ```

4. Extract the application files into the `/opt` folder. This is a good practice with Debian and will keep the home folder clean of excess files. Type the following in the terminal:

    `sudo tar -C /opt -xf arduino-1.8.10-linux64.tar.xz`

    > **TIP:** you do not need to type the entire name of the file in the command above. Type `arduino` followed by the tab key to autocomplete the filename.

## Install the Arduino IDE package

Inside the folder extracted is an install script. We will use the script to complete the installation.

1. Move into the new folder created with the following command:

    `cd /opt/arduino-1.8.10`

2. Install the Arduino IDE using the command below:

    `sudo ./install.sh`

3. The Terminal is going to throw a lot of scary messages at you, similiar to the following, but don't worry about them:

    ```Adding desktop shortcut, menu item and file associations for Arduino IDE...xdg-desktop-menu: No writable system menu directory found.

    xdg-desktop-menu: No writable system menu directory found.
    touch: cannot touch '/root/.local/share/applications/mimeapps.list': No such file or directory
    /usr/bin/xdg-mime: 803: /usr/bin/xdg-mime: cannot create /root/.local/share/applications/mimeapps.list.new: Directory nonexistent

    done!
    ```
## Install Desktop_Launcher_

This is where it gets strange. You will execute the install file one more time but without the `sudo`.

    `./install.sh`

More errors will appear but again, you can ignore them. When complete, a `Desktop` folder is created in your home directory (`cd ~`) with a `arduino-arduinoide.desktop` file inside. This `.desktop` file makes the Arduino IDE accessible via the _Launcher_. Below are the contents of the file:

```
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

Do nothing with the contents of the file but ensure it is not deleted. A review of the contents helps us learn more about how Linux applications are accessible via various desktop environments.

## Start the Arduino IDE

If all went as expected, activate the _Launcher_ to view a new icon titled `Arduino IDE` as shown in the image below.

![Arduino IDE icon in_Launcher_](/images/posts/2020-01-18-arduino-ide-chrome-os/arduino-ide-icon-launcher.png)lin

> **TIP:** Right-click on the Arduino Icon and select `Pin to Shelf` for quick access.

## Clean up your Linux home directory

Delete the original compressed file. This is as easy as selecting the file in the Chrome OS _Files_ app and clicking the delete icon in the upper-right hand corner. Make sure you do not delete the `Desktop` folder.
