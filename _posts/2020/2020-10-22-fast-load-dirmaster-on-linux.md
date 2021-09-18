---
layout: post
title: 'retroCombs: FAST LOAD - Install DirMaster on Linux'
date: '2020-10-22'
author: 'Steven B. Combs, Ph.D.'
email: 'steven.combs@gmail.com'
permalink: 'dirmaster-1'
comments: 'yes'
category: commodore
tags:
  - commodore
  - floppy disk
  - 1541
  - retro-computing
  - disk drive
  - plus4/4
  - c16
  - c116
  - c64
  - vic-20
  - windows
  - wine
---

There are many modern retro-computing applications available that `run` (see what I did there?) on modern computers to support our hobby. Longtime retroCombs [readers](https://www.stevencombs.com/retro) and [watcher](https://www.youtube.com/stevencombs)know I like to take a modern spin on retro-computing and integrate new technology and apps with the old.

If you are a Commodore computer fan, one piece of software I recommend is _DirMaster_. _DirMaster_ lets you view, create, and edit Commodore disk images (.d64, .d81, etc.) on a Windows PC.

I'm not going to cover the capabilities of _DirMaster_, but I will demonstrate how Linux users can install this software using the Wine windows compatibility layer; because that's the only way I would ever allow windows applications in my home or office!

> NOTE: Interested a _DirMaster_ tutorial? Leave a comment below this post or on the [YouTube video channel](https://youtu.be/fA9RpEtS2f0). While on the YouTube page, remember to hit **<font color="black">LIKE</font>** and **<font color="red">SUBSCRIBE</font>**!

My instructions are for Arch based distributions (Manjaro for me) but the basics work for any Linux distro where _Wine_ is available, including Macs running 10.14 or earlier (Wine does not work with 10.15 at the time of this writing). I present this process in two ways; a YouTube retroCombs Fast Load video and in the companion blog post below. First the video:

## YouTube Video: _retroCombs: FAST LOAD - Install DirMaster on Linux_

In the video below, demonstrate how to install the DirMaster Windows application on Manjaro Linux:

<div style="position:relative;padding-top:56.25%;"><p><iframe src="https://www.youtube.com/embed/fA9RpEtS2f0" frameborder="0" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true" style="position:absolute;top:0;left:0;width:100%;height:100%;"></iframe></p></div>

Now that you've seen the video, if you want to try this yourself, step-by-step, read the companion blog instructions below.

## Install _Wine_

The first step is to install the Wine software. "**W**ine **i**s **N**ot an **E**mulator" (_Wine_) is a windows compatibility layer that runs in Linux. Most modern and sophisticated applications/games have trouble running in _Wine_, however, DirMaster is not one of those complicated applications and is easy to install and runs perfectly under _Wine_.

1. Load Terminal.
2. Update the system:

    `sudo pacman -Syu` and enter your admin password at the prompt.

3. Install the latest version of _Wine_ and helpful extra packages:

    `sudo pacman -S wine wine-mono wine_gecko playonlinux`

    Choose option `1` if the message below appears:

    ```bash
    resolving dependencies...
    :: There are 2 providers available for netcat:
    :: Repository extra
       1) gnu-netcat
    :: Repository community
       2) openbsd-netcat

    Enter a number (default=1): 1
    ```

    Choose option `y` when the message below appears:

    ```bash
    :: Proceed with installation? [Y/n]
    ```

_Wine_ is installed. See how easy that was?

## Download _DirMaster_

Before the _Wine_ install, download the _DirMaster_ Windows Installer file.

1. Visit the site below:

    <https://style64.org/dirmaster>

2. Download the latest "zipped" version of *DirMaster* which was v3.1.5 at the time of this blog post.
3. Extract the file using your preferred method.

## Install _DirMaster_ in _Wine_

1. Launch the *PlayOnLinux* application.
2. Choose the `Install` option in the toolbar and the *PlayOnLinux install menu* dialog will appear. With this dialog, you can search for Windows applications to install; however, *DirMaster* is not one of them. This is why we downloaded the file previously.
3. Click the `Install a non-listed program` option in the lower left-hand corner. The *PlayOnLinux Wizard* dialog box appears. Scary text appears. Ignore it all.
4. Click the `Next` button. The *Manual Installation* dialog will appears.
5. Click the `Next` button. Another *PlayOnLinux Wizard* dialog box will appear.
6. Select the `Install a program in a new virtual drive` option.
7. Click the `Next` button. A dialog box appears asking for the name of the virtual drive.
8. Type `Commodore` in the text edit box. This can be anything, but _Commodore_ just feels right.

    > **TIP:** You can use this virtual drive to install other reto-related Windows applications.

9. Click the `Next` button. A dialog box appears asking for additional options. We don't need any of them.
10. Click the `Next` button. A dialog box appears asking for either a 32 or 64 bit Windows installation.
11. Select the `64 bits windows installation` option.
12. Click the `Next` button. Wine will configure the virtual drive. This can take some time so be patient. Once complete, a *Select the install file to run* dialog box will appear.
13. Click the `Browse` button.
14. Navigate to the folder that contains the `DirMasterSetup.exe` file.
15. Select the `DirMasterSetup.exe` file.
16. Click the `Open` button. A verification dialog box appears.
17. Click the `Next` button.
18. The _Wine_ *Select Destination Location* dialog box appears. Keep the default.
19. Click the `Next` button. The *Select Start Menu Folder* dialog box will appear. Keep the default.
20. Click the `Next` button. The *Additional Shortcuts* dialog box appears.
21. Select both the `Create a desktop shortcut` and the `Install Windows Explorer Preview` options.
22. Click the `Next` button. The *Ready to Install* dialog box will appear. Keep the default.

    > Did I mention all these dialog boxes and next buttons are why I left Windows behind years ago? I'm having some serious blue screen of death flashbacks!

23. Click the `Install` button. _DirMaster_ will install.
24. Deselect the `Launch DirMaster` checkbox.
25. Select the `Finish` button.

## Create a Shortcut

The application is installed, but it is a pain to load *PlayOnLinux* each time we want to run *DirMaster*. Let's create a desktop shortcut to make it behave more like a native Linux application.

1. If it is not open, launch the *PlayOnLinux* application to see the window below:

    ![Installed PlayOnLinux Programs Listing](/images/posts/wine/playonlinux-dirmaster-listing.png)

2. Click `DirMaster` in the installed programs window to reveal additional options for the installed _DirMaster_ application as shown in the window below:

    ![DirMaster in Programs Listing](/images/posts/wine/dirmaster-options.png)

4. Click the `Create a shortcut` option in the lower-left hand corner to display a confirmation window that a _DirMaster_ application shortcut has been placed on the desktop and in the user's home Desktop folder as shown in the image below:

    ![Desktop Shortcut](/images/posts/wine/dirmaster-desktop.png)

5. Click `Next` to close the confirmation dialog box. Depending on your Linux windows manager, you may also find a bright shiny new icon in your application launcher.

    > **HINT:** With the desktop launcher, you are only a right-click and properties dialog box away from all the info you need to add this item to your application menu if it was not done automatically.

## Launch _DirMaster_

With _DirMaster_ installed in a virtual drive and a shortcut on your desktop, launching the application couldn't be any easier.

1. Double click the _DirMaster_ icon on the desktop to launch the application as shown in the image below:

    ![DirMaster Application Window](/images/posts/wine/dirmaster-application.png)

2. Create or open a disk image to get started as shown in the image below:

    ![DirMaster with Loaded Disk Image](/images/posts/wine/dirmaster-application-image-loaded.png)

> **TIP:** If you'd like a disk image to play with, download my [Plus/4 Users Manual disk image](https://www.stevencombs.com/plus4). It's about half way down the page. Look for the retroCombs floppy disk.

## What's next?

Using _DirMaster_ is not difficult; however, it does take time to learn all things you can do to manage your Commodore disk images. [Style64's](https://style64.org) provides [official _DirMaster_ documentation](https://style64.org/dirmaster/documentation/). This a great place to start. If there's interest, you can let me know by dropping comments below. If enough of you ask, there may be a DirMaster retroCombs FAST LOAD or two in our future.
