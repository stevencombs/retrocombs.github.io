---
layout: post
title: 'fish and C.H.I.P.s'
date: 'August 13, 2016'
comments: 'yes'
categories:
  - chip
---

The PocketC.H.I.P. keyboard can be a bit of bear when trying to enter long commands in the *Terminal*. C.H.I.P. comes with `bash` as the default *Terminal* shell (as do most Debian Linux distributions). However, we are not confined to this shell. You can install others and the one I find particularly suited to the PocketC.H.I.P. is a shell called [fish][1]. That's right, **`fish` and C.H.I.P.s**! What could be more tasty? This combination will shorten lengthy commands and make that PocketC.H.I.P. keyboard more enjoyable to use.

## Why `fish`?
Below are the reasons I find `fish` the perfect match for the PocketC.H.I.P.; or any C.H.I.P. for that matter:

* uses ⇥ (tab) to complete long character strings while the `fish` shell autosuggests commands
* remembers all previous commands without a ↑ or ↓ keystroke (see below)

> ![fish on chip][image-1]

* includes the familiar `*` wildcard to `ls` and `cat` commands
* includes syntax highlights (red text indicates an invalid command, blue text indicates valid commands and underlined strings are valid paths)
* includes loops and functions
* provides robust startup scripting in an easy to manage file (`~/.config/fish/config.fish`)

There is much more to explore and users whose Linux-foo is stronger than mine will appreciate the additional features. Browse the [fish tutorial page][2] to learn more.

## Install `fish`
Installation of `fish` begins with a quick series of `apt` commands as shown below:

```
sudo apt update
sudo apt upgrade
sudo apt install fish
```

The `fish` shell is now ready to use.

## Go `fish`ing
To use the `fish` shell, fire up the *Terminal*. At the command prompt type:

`fish`

The terminal will respond with the following prompt:

```
Welcome to fish, the friendly interactive shell
Type help for instructions on how to use fish
chip@pocketchip ~> 
```

Use `fish` and issue *Terminal* commands. Give it a shot and type the `ls` command. As shown in the image below and on your own PocketC.H.I.P., the list is now color coded and syntax highlighting is in effect. The effect is really great on the PocketC.H.I.P. screen.

![fish on chip][image-2]

Try the `sudo` command next. The `fish` shell will "autosuggest" the remainder of the string. If the `fish` shell autocompletes the command you need, hit the ⇥ (tab) key and it will complete the string. A real thumb-saver on the PocketC.H.I.P. keyboard.

## Make `fish` the default shell
If you want to make `fish` the default *Terminal* shell, use the command below:

```
chsh -s `which fish`
```

You will receive a prompt to enter your password. Use the default `chip` password (unless of course you have changed it).

Reboot the PocketC.H.I.P. and launch the *Terminal*. You will see the `Welcome to fish` prompt appear as shown in the image below.

![fish on chip][image-3]

This indicates that `fish` is now the default terminal shell.

## Yummy `fish` and C.H.I.P.s
I've used the **`fish` and C.H.I.P.s** configuration for about a week and really like it. I've installed `fish` on both my regular C.H.I.P. and Mac with additional plans to add to a couple of Raspberry Pis. The features `fish` provides are great for all keyboards; however, if I had not been looking for a way to reduce typing on my PocketC.H.I.P., I would never have been exposed to this wonderful `bash` shell replacement. Chock up another good learning experience to the PocketC.H.I.P.

Anyone else using `fish`? Share your tips and tricks in the comments below so we can share ways to get the most out of this shell and our PocketC.H.I.P.s.

[1]:	https://fishshell.com/
[2]:	https://fishshell.com/docs/current/tutorial.html

[image-1]:	http://www.stevencombs.com/images/posts/chip/fish-on-pocketchip.png
[image-2]:	http://www.stevencombs.com/images/posts/chip/fish-syntax-highlighting.png
[image-3]:	http://www.stevencombs.com/images/posts/chip/fish-default-chip.png