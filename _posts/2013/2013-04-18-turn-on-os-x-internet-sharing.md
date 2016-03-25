---
layout: post
title: Turn on OS X Internet Sharing
date: '2013-04-18 10:19'
comments: 'yes'
categories:
  - apple
---

I often use the Internet sharing feature on a Mac to either create/extend a network from an Ethernet connection via Wi-Fi or, as has been the case lately, extend a Wi-Fi connection using an Ethernet connection to a non-Wi-Fi device that needs Internet/network access. I  use this setup regularly to connect a Raspberry Pi to my home network.

![][1]

Internet sharing doesn't work out of the box. You need to know the secret, and very simple, sauce. Given that I use this ubiquitous Mac feature regularly, a post was in order. Let's get started.

# Equipment Needed:
- Mac with Wi-Fi capabilities
- Internet connection
- Open Ethernet port (this also works with a USB Ethernet dongle)
- Standard Ethernet (RJ45) cable
- Network enabled device with a free Ethernet port (might I suggest a [Raspberry Pi][2]?)

# Step-by-step process:
- Ensure the Mac is currently connected to a network via Wi-Fi
- Connect an Ethernet cable to the Ethernet port on the back of Mac
- Connect the other end of the of the Ethernet cable to the other Ethernet device
- On the Mac, select _ / Preferences..._ from the Finder menu - the _System Preferences_ window will appear as shown in the image below

![][3]
- Select the _Sharing_ option as shown in the image above - the _Sharing_ preferences pane will display as shown in the image below

![][4]
- Use the _Share Your Connection from:_ pull-down menu on the right of this preference pane and select Wi-Fi
- Select _Ethernet_ from the _To the computers using:_ area
- Click the Internet Sharing checkbox to activate the settings - the selection area should be ghosted as shown in the image above

You should now have an Internet/network connection running through the Ethernet cable that provides connectivity to the device on the other end of the cable. The Mac will assign an IP address to the device. If you find you made a settings mistake, you will need to deselect the _Internet Sharing_ checkbox to regain access to the settings.

See, that was easy and as you probably noticed while following along, you can reverse the flow and create your own Wi-Fi network, without a router, by sharing the Ethernet connection. Let me know if you find this useful.

[1]: http://2.bp.blogspot.com/-O3qPf_BNyoY/UXBG4gVEGfI/AAAAAAABIXU/z2gq-Rbsd48/s1600/Ethernet.JPG
[2]: http://goo.gl/oyadc
[3]: http://3.bp.blogspot.com/-ubUTlaCNNeI/UXBG4gxWgjI/AAAAAAABIXg/ssPoaTgrvfQ/s1600/System_Preferences_Window.png
[4]: http://4.bp.blogspot.com/-EPI8v4IbxFk/UXBG4rbVBjI/AAAAAAABIXk/FJerLgyYM3s/s1600/Sharing+Window.png
