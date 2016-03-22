---
layout: post
title: 'Control the "REAL" display on a Raspberry Pi'
date: 2016-03-21T00:00:00.000Z
categories:
  - raspberrypi
---

There are several tutorials available online that show you how to setup a VNC connection with a Raspberry Pi; however, most of them use *TightVNC*. This is fine if you want to control your Raspberry Pi remotely and do not have a monitor connected to the Pi. In my case, I wanted to connect the Pi to a monitor and then control the screen from my Mac across the room.

To the best of my knowledge, [TightVNC](!g) will not allow this. It only allows a connection to a virtual screen. The result is that you see a desktop on the remote computer, but when you move the mouse, you are not controlling the desktop displayed on the Pi. This solution will let you control the "REAL" screen connected the Pi using a different VNC server, *x11vnc*. It took me several attempts and several sessions in the MAN pages to figure out how to do this. 

**NOTE:** These instructions assume you have a Raspberry Pi with the Raspian operating system and an Internet connection and you know the IP address of the Pi. Below are the steps I use.

# Install x11vnc
The first step is to install the [x11vnc](!g) server softare on the [Raspberry Pi](!a). We will use *Terminal* commands to do this. You can use the Terminal on the Pi or you can to this remotely on a Mac using [SSH](!g).

It is always good practice to first update the Raspian repositories:

`sudo apt-get update`

The next step is to install *x11vnc*.

`sudo apt-get install x11vnc`

Raspbian will display the following:

```
Reading package lists... Done
Building dependency tree
Reading state information... Done
The following extra packages will be installed:
  libvncclient0 libvncserver0 tcl tcl8.6 tk tk8.6 x11vnc-data
Suggested packages:
  tcl-tclreadline
The following NEW packages will be installed:
  libvncclient0 libvncserver0 tcl tcl8.6 tk tk8.6 x11vnc x11vnc-data
0 upgraded, 8 newly installed, 0 to remove and 1 not upgraded.
Need to get 1,621 kB of archives.
After this operation, 3,403 kB of additional disk space will be used.
Do you want to continue? [Y/n]
```

Select `Y` and follow with the ↩ key.

With *x11vnc* installed, we now need to create a password we will use when we connect to the Pi.

# Set Password
Use the command below to set the password.

`x11vnc -storepasswd`

The following prompts will display:

```
Enter VNC password:
Verify password:
Write password to /home/pi/.vnc/passwd?  [y]/n y
Password written to: /home/pi/.vnc/passwd
```

Type a password and verify at the second prompt. This password does not have to be lengthy. I like to use a six digit pin. Select `y` to write the password to the Pi so you will not have to repeat this step in the future.

# Start Server
Use the command below to start the x11vnc server on the Pi.

```
x11vnc -forever -bg -usepw -httpdir /usr/share/vnc-java/ -httpport 5901 -display :0
```

That's a pretty long command so I recommend you copy and paste. In a nutshell, the command runs x11vnc in the background using the password we specified earlier and then sets the display to port 5900. Later I will show you how to have the Pi autostart this command.

# Connect to Server
Let's use the built in Mac VNC viewer, Screen Sharing, to make the connection to the Raspberry Pi.

From the *Finder* menu, select *Go | Connect to Server…* or use the `⌘` + `k` keyboard combination.

Enter `vnc://XXX.XXX.XXX.XXX` into the Server Address text area, as shown in the image below, where `XXX.XXX.XXX.XXX` is the IP address of the Pi.

![Connect to Server dialog box](http://www.stevencombs.com/images/posts/2016-03-23-connect-to-server-dialog-box.png)

> TROUBLESHOOTING TIP: If you cannot connect, ensure *System Preferences | Sharing | Screen Sharing |* is off, or not selected.

# Smooth out the connection

`x11vnc -display :0 -ncache 10 -ncache_cr'

# Autostart x11vnc on Raspberry Pi boot

[comment] <> (My password 554455)
[comment] <> (Chicken of the VNC)
[comment] <> (Reference: http://www.olij.co.uk/whitenoise/set-up-vnc-with-a-ubuntu-server-and-mac-client-simple-ssh-tunnel/)
