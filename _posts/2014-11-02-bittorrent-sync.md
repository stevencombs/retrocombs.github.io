---
layout: post
title: BitTorrent Sync - sync without the costly cloud
author: Steven B. Combs, Ph.D.
email: steven.combs@gmail.com
date: 2014-11-02 18:10
category: apple
comments: yes
---

I’ve been searching for an easy way to sync large multiple files from one mac to another. I want this feature to keep a backup of my movies, music and photos on another computer and to have access to this data from multiple locations, including mobile devices. Dropbox would be an obvious choice; however, for the amount of storage I need (about 200Gb), it is too costly. So I gave up on the idea and just hoped that I wouldn’t lose my photos, music and video files in between USB drive syncs. Not the way I want to roll with my data.

# Enter BitTorrent Sync
Recently while listening to an episode of the [Systematic podcast][7232-001], I heard [Brett Terpstra][7232-002] mention that he was trying out the beta version of [BitTorrent Sync][7232-003]. He didn’t go into many details, but it was enough to pique my interest. 

I visited the site and without exhaustive research, began a download and install. It was a small download. I installed the software on both my [Mac mini Media Server][7232-004] and my iMac. Both are on the same home network and I thought this would be a good first test. Setup was done through the use of a dialog box as shown in the image below.

![BitTorrent Sync dialog box](http://www.stevencombs.com/images/posts/2014-11-02-bittorrent-sync/2014-11-02-bittorrent-sync.png)

Once you choose a directory to sync on a host device, the software presents another dialog box, shown below, that allows you to choose other options to create the synced connection between devices.

![BitTorrent Sync options dialog](http://www.stevencombs.com/images/posts/2014-11-02-bittorrent-sync/2014-11-02-bottorrent-sync-options.png)

The *Read Only* option will backup the data to another device. The *Read & Write* option will allow changes on either side of the sync to be made to all devices. The *Security* options provide ways to protect access to your data. Finally, as shown at the bottom of the dialog, you can choose ways to share a connection on another device.

You can send an email that contains a link to make the connection, copy the link directly, or create a QR Code that can be used by the [BitTorrent Sync][7232-005] iOS software to make the connection. Let me reiterate that at no time is your data stored in the cloud. The connection is peer-to-peer using these links.

# Legalize
Readers may wonder, “Is this legal?” You are confusing this software with the use of [BitTorrent][7232-006] to download illegal media files. While BitTorrent is used for this, there are legal uses such as downloading large Linux distributions, open source software or free music and movies. Don’t let the tarnished use of the BitTorrent technology stop you from giving BitTorrent Sync a try. They are two separate things that use similar technology. It is the user, not the technology that defines legal. Once again, this is legal! Don’t fret. Give this a try if you need to sync or share files.

# How it works
Now that you know it is legal to use the BitTorrent Sync software, let’s take a quick look at the underlying technology that allows the sharing of data between devices. Here’s what the [BitTorrent Sync site](http://www.bittorrent.com/sync) has to say about their technology.

> Sync uses advanced peer-to-peer technology to share files between devices. No cloud is required. This means there are no accounts, no file size limits, and transfer speeds are never throttled. You are free to share anything and everything you have.

If you want the technical details, I recommend you check out their [How it works](http://www.bittorrent.com/sync/how-it-works) page. It is pretty impressive and a good read. The part I like is that there is no account to create and no intermediary cloud that holds “YOUR” data. The sync only occurs between the devices you choose and with AES-128 encryption (to protect your data from prying eyes). Devices that share a local network will sync data quicker than those outside your network.

# Tips to improve BitTorrent Sync usage

It really didn’t take long for me to figure out how to use BitTorrent Sync; however, I did learn a few things along the way that I thought I would share.

* If you have devices are on the same network, I found that turning off the options, shown in the image below, speed up transfers significantly. I have no idea why.

![BitTorrent Sync lan options](http://www.stevencombs.com/images/posts/2014-11-02-bittorrent-sync/2014-11-02-bittorrent-sync-lan-preferences.png)

* If you have large data to transfer, I highly recommend you copy the files from one device to another using a USB drive first. I had 120Gb of movie files and BitTorrent sync listed a transfer time of 88 days. I’m sure it wouldn’t have taken that long; however, I decided to copy the files first and then make the connection. Once the sync connection was made, the two directories where instantaneously in sync and subsequent syncs where much faster.
* Make sure you choose the correct options at the beginning. There is no way that I have found where you can modify those after the connection is made.
* BitTorrent sync does include a type of versioning, that is, if you make a change to a directory that is not what you wanted, you can access original files through the archives that are created. Handy for the those “Uh-Oh“ moments.
* The more devices you have sharing data, the faster the data transfers.

# Final thoughts
I’m having a blast finding things to sync between two computers. There’s a piece of mind that comes from knowing your data is stored in two or more locations and that at no time is that data stuck in the cloud somewhere to be hacked. Might be good for those celebrities who insist on sharing intimate images; but I’m not judging! Even more amazing is that this software is free – not even advertiser supported.

My next steps are to create sync connections between a device not on my local network and to also give the [BitTorrent Sync][7232-005] iOS app a try. I also want to use this technology the next time I have files to share with family/friends/colleagues that may be either large or sensitive in nature. 

Even though the current version is in beta, it exceeds all my expectations and I highly recommend for everyone. It is simple to use and once set up, like the Ronco Cooker, “Set it and forget it!” Anyone else using BitTorrent Sync? Leave a comment and let me know. I am also interested in your use case scenarios.

[7232-001]: http://5by5.tv/systematic
[7232-002]: http://brettterpstra.com/
[7232-003]: http://www.bittorrent.com/sync/download
[7232-004]: http://www.stevencombs.com/apple/2012/03/13/we-have-mac-mini-media-center-mmmc.html
[7232-005]: https://itunes.apple.com/us/app/bittorrent-sync/id665156116?mt=8&uo=4&at=10l9vL
[7232-006]: http://www.bittorrent.com/