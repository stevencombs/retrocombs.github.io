---
layout: post
title: BitTorrent Sync - sync without the costly cloud
author: Steven B. Combs, Ph.D.
email: steven.combs@gmail.com
date: 2014-11-01 18:41
category: apple
comments: yes
---

I’ve been searching for a way to easily sync files from one directory on my home media server to my iMac. I want this feature to keep a backup of my movies, music and photos on another computer and to have access to this data from multiple locations, including my mobile devices. Dropbox would be an obvious choice; however, for the amount of storage I need (about 200Gb), it is too costly. So I gave up on the idea for awhile and just hoped that I wouldn’t lose my photos, music and video files.

# Enter BitTorrent Sync
Recently while listening to an episode of the [Systematic podcast](!g), I heard [Brett Terpstra](!g) mention that he was trying out the beta version of [BitTorrent Sync](!g). He didn’t go into many details, but it was enough to pique my interest. I visited the site and without exhaustive research, began a download and install. It was a small download. I installed the software on both my [Mac mini Media Server](!sc) and my iMac. Both are on the same home network and I thought this would be a good first test.

Setup was done through the use of a dialog box as shown in the image below.

![BitTorrent Sync dialog box](http://www.stevencombs.com/images/posts/2014-11-02-bittorrent-sync/2014-11-02-bittorrent-sync.png)

Once you choose a directly to sync on a host device, you are then presented with another dialog box, shown below, that allows you to choose some options.

![BitTorrent Sync options dialog](http://www.stevencombs.com/images/posts/2014-11-02-bittorrent-sync/2014-11-02-bottorrent-sync-options.png)

# Legalize
Some of you reading this may wonder, “is this legal?“ You are thinking of the using BitTorrent to download illegal media files. While it is used for this, there are legal uses such as downloading Linux distributions. 

# How it works
The underlying technology that allows the sharing of data is now harnessed to create BitTorrent Sync for the user. Here’s what the [BitTorrent Sync site](http://www.bittorrent.com/sync) has to say about the technology.

> Sync uses advanced peer-to-peer technology to share files between devices. No cloud is required. This means there are no accounts, no file size limits, and transfer speeds are never throttled. You are free to share anything and everything you have.

If you want the technical details, I recommend you check out their [How it works](http://www.bittorrent.com/sync/how-it-works) page. It is pretty impressive. The part I like is that there is no account to create and no intermediary cloud that holds “YOUR” data. The sync only occurs between the devices you choose and with AES-128 encryption (to protect your data from prying eyes). Devices that share you local network will sync quicker than those outside your network.

# Tips to improve BitTorrent Sync usage

It really didn’t take long for me to figure out how to use BitTorrent Sync; however, I did learn a few things along the way that I thought I would share.
