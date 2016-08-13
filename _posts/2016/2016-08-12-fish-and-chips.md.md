---
layout: post
title: 'fish and C.H.I.P.s'
date: 'August 13, 2016'
comments: 'yes'
categories:
  - chip
---

The PocketC.H.I.P. keyboard, while great in a pinch, can be a bit of bear when trying to perform tasks that require a large number of keystrokes. The default shell for the OS installed is bash. Because the C.H.I.P. is Linux based, you can install other shells and the one I find particularly suited to the PocketC.H.I.P. is a bash shell called [fish][1].

## Why fish?

Below is my quick list as to why you want to install fish on the PocketC.H.I.P. or any C.H.I.P. for that matter:

* provides features that will streamline keystrokes on a PocketC.H.I.P. keyboard
* remembers all your previous commands without an ↑ keystroke (see below)

> ![fish on chip][image-1]

* brings back the `*` wildcard
* 

Learn more by browsing the [fish tutorial page][2].

## Install fish

Installation of fish begins with a quick series of `apt` commands as shown below:

```
sudo apt update
sudo apt upgrade
sudo apt install fish
```

The fish shell is now installed.

## Use fish for the first time

To use the fish shell, Fire up the *Terminal*. At the command prompt type:

`fish`

The terminal will respond with the following prompt:

```
Welcome to fish, the friendly interactive shell
Type help for instructions on how to use fish
chip@pocketchip ~> 
```

You can now use fish to issue Terminal commands.

## Make *fish* the default bash shell

If after using fish for awhile you would like to make it the default Terminal shell, you can use the following command:

```
chsh -s `which fish`
```

Reboot your PocketC.H.I.P. and launch the Terminal. You will see the `Welcome to fish` prompt appear as shown in the image below.

![fish on chip][image-2]

This indicates that fish is now the default terminal shell.

## Getting started with *fish*


[1]:	https://fishshell.com/
[2]:	https://fishshell.com/docs/current/tutorial.html

[image-1]:	http://www.stevencombs.com/images/posts/chip/fish-on-pocketchip.png
[image-2]:	http://www.stevencombs.com/images/posts/chip/fish-default-chip.png