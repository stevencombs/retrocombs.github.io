---
layout: post
title: 'fish and C.H.I.P.s'
date: 'August 13, 2016'
comments: 'yes'
categories:
  - chip
---

The PocketC.H.I.P. keyboard, while great in a pinch, can be a bit of bear when trying to enter long commands. C.H.I.P. comes with `bash` as the default shell (as do most Debian Linux distributions). However, we are not confined to this shell. You can install others and the one I find particularly suited to the PocketC.H.I.P. is a bash shell called [fish][1]. That's right, **`fish` and C.H.I.P.s**! What could be more tasty?

## Why fish?
Below are the reasons I find `fish` the perfect match for the PocketC.H.I.P.; or any C.H.I.P. for that matter:

* provides features that will streamline keystrokes
* uses ⇥ (tab) to complete long commands while the `fish` shell autosuggests commands
* remembers all your previous commands without a ↑ keystroke (see below)

> ![fish on chip][image-1]

* brings back the `*` wildcard to `ls` and `cat` commands
* includes syntax highlights (red text indicates an invalid command, blue text indicates valid commands and underlined strings are valid paths)
* includes loops and functions
* provides robust startup scripting in an easy to manage file (`~/.config/fish/config.fish`)

There is much more to explore and users who's Linux-foo is stronger than mine will appreciate the additional features. Browse the [fish tutorial page][2] to learn more.

## Install fish
Installation of `fish` begins with a quick series of `apt` commands as shown below:

```
sudo apt update
sudo apt upgrade
sudo apt install fish
```

The `fish` shell is now installed.

## Use `fish` for the first time
To use the `fish` shell, fire up the *Terminal*. At the command prompt type:

`fish`

The terminal will respond with the following prompt:

```
Welcome to fish, the friendly interactive shell
Type help for instructions on how to use fish
chip@pocketchip ~> 
```

You can now use `fish` to issue *Terminal* commands. Give is a shot and type the `ls` command. As shown in the image below and on your own PocketC.H.I.P., you list is now color coded and syntax highlighting is in effect. 

Now try the `sudo` command. You will notice that `fish` will autosuggest the remainder of the string. If you find the string what you need, hit the ⇥ (tab) key and it will complete the string. A thumb saver if you are using the PocketC.H.I.P. keyboard.

## Make `fish` the default bash shell
If after using `fish` you find you would like to make it the default *Terminal* shell, you can use the following command:

```
chsh -s `which fish`
```

Reboot your PocketC.H.I.P. and launch the *Terminal*. You will see the `Welcome to fish` prompt appear as shown in the image below.

![fish on chip][image-2]

This indicates that `fish` is now the default terminal shell.

## Yummy `fish` and C.H.I.P.s



[1]:	https://fishshell.com/
[2]:	https://fishshell.com/docs/current/tutorial.html

[image-1]:	http://www.stevencombs.com/images/posts/chip/fish-on-pocketchip.png
[image-2]:	http://www.stevencombs.com/images/posts/chip/fish-default-chip.png