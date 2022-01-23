---
layout: post
title: 'UPGRADE: Raspberry Pi 2 case and heatsink'
author: Steven B. Combs, Ph.D.
email: 'retrocombs@icloud.com'
date: 2015-04-05 17:51
category: raspberrypi
comments: yes
---

Recently a group from our community made a trip to several Makerspaces in the Louisville area including: [MakerMobile](http://www.velocityindiana.org/makermobile/), [Lvl1](http://www.lvl1.org/) and [FirstBuild](https://firstbuild.com/). During our visit to FirstBuild, I  learned that they sold Arduino and Raspberry Pi development boards to visiting Makers, as well as many other supplies. On a whim, I asked our tour guide if they had the Raspberry Pi 2 Model B (Raspi 2) in stock. She wasn't sure at the time; however, at the conclusion of our tour I was thrilled when she handed me a brand new, in box, Raspi 2. I expected a bit of markup; however, she gladly said, "$35 please." Given the scarcity and online price markups, I was surprised to take one home that day at the retail cost.

![](https://lh4.googleusercontent.com/b8oUz0k4BsLpUUbmTjiWGG7-XbC2T6tNc_UePZQOalgK=w1221-h560-no)

That evening, I made a visit to Amazon to locate a case. Unlike my original Raspberry Pi, I will not use this Raspi 2 for physical computing development, but rather as a  [headless](http://www.stevencombs.com/raspberrypi/apple/linux/2013/04/27/create-ssh-connection-from-your-mac-to.html) networked Linux box. The Raspi 2's additional CPU speed combined with the additional memory should make the Raspi 2 a nice addition to our home network for server and Python related experiments. I will connect to the Raspi 2 using either SSH or VNC via an iPad, Chromebook or Mac.

My requirements for a case are:

* Build quality
* Port access, especially GPIO and microSD connectors
* Transparent design to view activity LEDs
* Access to inside components
* Moderate cost

After much review, I decided on the [C4Labs' Zebra Case - Raspberry Pi B+ and 2B (Black Ice)](http://www.amazon.com/gp/product/B00M6G9YBM/ref=as_li_tl?ie=UTF8&camp=1789&creative=390957&creativeASIN=B00M6G9YBM&linkCode=as2&tag=stevenccom-20&linkId=P3YYB4U73JEPQ2I6). At a cost of $15, the case is in my price range and met all my requirements. Amazon reviews are extremely high at 4.7 stars. Sold!

During a review of my shopping cart, I noticed an impulse buy option for the [Addicore Raspberry Pi B and B+ Heatsink Set](http://www.amazon.com/gp/product/B00HPQGTI4/ref=as_li_tl?ie=UTF8&camp=1789&creative=390957&creativeASIN=B00HPQGTI4&linkCode=as2&tag=stevenccom-20&linkId=YKT5J5FSVV4VK5QJ). Since I will enclose the Raspi 2 in a case and will overclock (using `raspi-config` at the terminal), I thought it prudent to add this $5 option.

When the parts arrived, I made the decision to take time and snap images of the case and the heatsink during the install process. Those images are in the gallery below and I have included some additional thoughts at the bottom of each image. To sum up though, I am very pleased with the case. It was easy, and quite fun, to assemble. My Raspi 2 is completely protected and I have no fear that it will receive damage through normal usage. So far, I've run the Raspi 2 overclocked without issue. I believe my $20 purchase was well worth the protection my Raspi 2 now enjoys and I would highly recommend to others.

# Gallery
<style>.embed-container { position: relative; padding-bottom: 56.25%; padding-top: 30px; height: 0; overflow: hidden; max-width: 640px; height: auto; } .embed-container iframe, .embed-container object, .embed-container embed { position: absolute; top: 0; left: 0; width: 100%; height: 100%; }</style><div class='embed-container'><iframe src='https://www.flickr.com/photos/bimp/sets/72157651712026196/player/' frameborder='0' allowfullscreen webkitallowfullscreen mozallowfullscreen oallowfullscreen msallowfullscreen></iframe></div>
