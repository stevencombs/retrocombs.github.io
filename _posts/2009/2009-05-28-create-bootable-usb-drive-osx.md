---
layout: post
title: 'HOWTO: Create bootable USB drive on Mac OS X'
date: 2009-05-28 01:01:01
author: 'Steven B. Combs, Ph.D.'
email: 'steven.combs@gmail.com'
comments: true
category: apple
---

I frequently experiment with live images of other OSs and install them on my [Acer Aspire One netbook](http://www.amazon.com/gp/redirect.html?ie=UTF8&amp;location=http%3A%2F%2Fwww.amazon.com%2Fs%3Fie%3DUTF8%26x%3D0%26ref%255F%3Dnb%255Fss%255Fgw%255F0%255F5%26y%3D0%26field-keywords%3Dacer%2520aspire%2520one%26url%3Dsearch-alias%253Daps%26sprefix%3DAcer%2520&amp;tag=stevenccom-20&amp;linkCode=ur2&amp;camp=1789&amp;creative=390957) (I've since settled on PepperMintOS). Instead of burning CD images, I have found that bootable USB drives are faster and more reliable. I also have a problem keeping up with my external USB CD drive. The images I use most frequently come in either .raw or .img formats.

For these formats, here's how I create a bootable USB drive using OS X and a couple of terminal commands.

**WARNING!** Performing these steps will completely erase the contents of your USB drive.

**REMEMBER:** You need a USB drive large enough to hold the image contents.

Let's get started.

# Download an image to your Desktop

* Locate a disk image.

If you're experimenting, Google these distros: Moblin, Fedora 10, Ubuntu, CentOS, and Mandriva. Remember, you are looking for live bootable images usually in the .img format.

# Partition the USB drive

__NOTE:__ Not all USB drives are created equally. Some will function as bootable drives and some will not. You may have to experiment with different brands before you find one that works. My inexpesnive and trusty [SanDisk Cruzer 8Gb USB Drive](http://www.amazon.com/gp/product/B007JR532C/ref=as_li_tl?ie=UTF8&camp=1789&creative=390957&creativeASIN=B007JR532C&linkCode=as2&tag=stevenccom-20&linkId=G5YHW6IYGG4VIUHT) works almost everytime, but I make no guarantees for your application.

* Fire up the _Disk Utility_ application.
* Select the options in order and as shown in the image below (click for larger view).

![](http://farm4.static.flickr.com/3563/3559673545_af90d2255c.jpg)

* Click the Apply button (READ WARNING AGAIN!!!) - the disk will be partitioned as free space and with no file format.

# Determine the USB drive device name

* Insert the USB drive into one of the USB slots.
* Fire up the _Terminal_ (I prefer the free [iTerm](http://iterm.sourceforge.net/)).
* In _Terminal_ type: `diskutil list`
* A list of all devices will be displayed as shown in the image below.
* Locate the USB drive inserted and jot this info to paper or brain - in this example, highlighted below, the USB drive inserted is _/dev/disk2 _and was identified by the USB drive name.

![](http://farm4.static.flickr.com/3365/3560244296_87b657e343.jpg)

# Unmount the USB drive

* In the _Terminal_, type: `sudo umount /dev/disk2`
* Enter the system password and press ↩.
* DO NOT PHYSICALLY REMOVE THE DRIVE!

# Burn the image to the USB drive

* In the _Terminal_, type `dd` and use the following format:

    `sudo dd if=location/name.img of=/dev/disk2`

In this example the command was formatted as follows:

`sudo dd if=/Users/stevencombs/Desktop/karmic-netbook-remix-i386.img of=/dev/disk2`

# Raw Support

In the example above an _.img_ image was used. If your image is in the _.raw_ format, use the following format for the dd command:In the example above an _.img_ image was used. If your image is in the _.raw_ format, use the following format for the dd command:

`sudo dd if=location/name.raw of=/dev/rdisk2 bs=1m`

* OS X will begin burning the image to the USB drive (as indicated by the flashing USB drive light) and this operation can take several minutes depending on the _.img_ size and the write speed of the USB drive.
* Once complete, the light will stop flashing the the terminal prompt will reappear.
* Remove the USB drive.

The USB drive is now ready to boot that laptop or desktop using the USB boot option. This same process can be used for most linux distributions. What I have not determined is how to easily do this with an _.iso_ file on a Mac. So if you have a tip for me regarding this process, drop me a comment and add to these notes.
