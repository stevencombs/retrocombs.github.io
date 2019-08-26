---
layout: post
title: My OctoPi Setup
date: '2019-06-15'
author: 'Steven B. Combs, Ph.D.'
email: steven.combs@gmail.com
comments: 'yes'
categories:
  - 3dprinting
  - raspberrypi
---

Continuing the 3D printer saga, this post will share my setup of OctoPi, the Raspberry Pi server.

# Materials
1. Raspberry Pi 3
2. C4 Labs Raspberry Pi 3 Case
3. 8 Gb microSD card

![Insert Image of Materials][]

# Setting up OctoPi
I'll use a Raspberry Pi 3 Model B V1.2 I have sitting in a box that is normally used for experimenation purposes. Time to put it work on a regular basis.

## Install the OctoPi server on a microSD
1. Download OctoPi .zip file using this [link](https://octoprint.org/download/).
2. You do not need to extract the .zip if you follow my instructions.
3. Plug in a microSD to a PC (I'm using a computer with Ubuntu Mate).
3. Install [balenaEtcher](https://www.balena.io/etcher/).
4. Load Etcher.
5. Click on Select Image and select the OctoPi .zip file and Etcher will locate the .img file inside the compressed file.
6. Select a drive to transfer the .img file. If you have only a single external device, it should appear and if not, you will be given the option to select the external drive.
7. Click the Flash! button.
8. Enter your user password followed by the Enter key.
9. Watch the Flashing magic happen

## Configure the microSD
I'll follow the instructions found [here](https://octoprint.org/download/) to configure the OctoPi. First step is to configure the Wi-Fi so I can access the Raspberry Pi via SSH. I will do this on the microSD card while it is still connected to the computer.

1. Locate the `octopi-wpa-supplicant.txt` file on the `boot` (not the rootfs) partition of the microSD card.
2. Open the file using a text editor. I'll use Mate's built-in Pluma editor.
3. Look for the following text:

```
#network={
#  ssid="put SSID here"
#  psk="put password here"
#}
```

4. Replace the appropriate information.
5. Uncomment the line `#country=US # United States` by removing the `#`. If you are in another country, choose one of the other options.
5. Save the changes and close the text editor.
6. Eject the microSD card from the computer

## First boot and configuration
Now let's see if we can connect to the Raspberry Pi on our network.

1. Insert the microSD into the Raspberry Pi.
2. Power up the Raspberry Pi by plugging it into a power source.
3. The green light should flicker and eventually stop.
4. Back on the computer, fire up the _Terminal_ application.
5. In the Terminal type `ssh pi@octopi.local` and you will see the following warning:
```
The authenticity of host 'octopi.local (192.168.86.214)' can't be established.
ECDSA key fingerprint is SHA256:HkzND5CpZLrL+1KtRi/SK+vbVkxuI8i1Sy+J9acvYx4.
Are you sure you want to continue connecting (yes/no)?
```
6. Select the `yes` option.
7. Enter `raspberry` as the password.

If these steps work, we are now ready to access the server from my web browser.

## Access OctoPi from a web browser

1. Enter `http://octopi.local` in a web browser (I use Chrome).
2. It will take a minute for the server to respond the first time and the first page will be the Setup Wizard as shown below:



# Connecting OctoPi to the Ender-3
Connect the Raspberry Pi to the Ender-3 using a mini-USB cable.
