---
layout: post
title: 'HOWTO: Connect Chromecast to hotel (captive portal) Wi-Fi'
date: '2015-11-29'
author: 'Steven B. Combs, Ph.D.'
email: 'retrocombs@icloud.com'
comments: 'yes'
categories:
  - gadgets
---

The Chromecast, while a great device, has one huge flaw. Unlike the [Amazon Fire TV (or Stick)][amazon], it does not have a way to authenticate into a hotel that has a captive portal web page. This is an omission I would like to see Google include. Without a remote, this could be difficult to include. No worries though. There is a way to use your Chromecast in **some** hotels and this post will show you how to do so using your Mac.

> **NOTE:** This process will work for Linux users. Windows users with [Cygwin][cygwin] can likely follow along. I have not verified. This post is dated and while it works with older Chromecast devices, it may not work with a newer Google TV with Chromecast. I have a whole new process I use in 2022. I should post it!

# Determine your Mac's MAC address
The first step is to determine the MAC address of your Mac. A MAC address is a unique device ID assigned to all network devices. Hotel captive portal Wi-Fi systems use this address to identify which devices connect and what rights they have on the network. Here's how to display the MAC address of your Mac's Wi-Fi adapter.

* Load the *Terminal* app on your Mac
* Type the *Terminal* command below:

`ifconfig`

You will see text as shown below (I've replaced my Mac's MAC address with `?` characters for security reasons):

    gif0: flags=8010<POINTOPOINT,MULTICAST> mtu 1280
    stf0: flags=0<> mtu 1280
    en0:
    flags=8863<UP,BROADCAST,SMART,RUNNING,SIMPLEX,MULTICAST>  mtu 1500
    ether ??:??:??:??:??:??
    inet6 fe??::a???:??ff:feae:???e%en0 prefixlen 64 scopeid 0x4
    inet 172.17.26.43 netmask 0xfffffc00 broadcast 172.17.27.255
    nd6 options=1<PERFORMNUD>
    media: autoselect
    status: active

* Look for the `ether` line and note the 12 character address – include the `:` characters

That is the MAC address for your Mac. We will use this a bit later.

# Display Chromecast MAC address
Next we need the MAC address for the Chromecast.

* Plug in the Chromecast to the hotel television and connect it to a power source
* Open the Chromecast app on your mobile device
* Progress through the Chromecast setup as far as you can go (knowing you will not successfully connect)
* Note the MAC address that appears on the final screen of the setup process

Another option is to squint real hard and look for the MAC address on the back of the Chromecast. It is REALLY tiny. The process above will ensure you jot down a correct address.

* Unplug the Chromecast from the power source

**TIP:** Keep the MAC addresses somewhere safe and handy for later use so you do not have to repeat these steps. I keep mine in Evernote.

#Spoof MAC address
This part is a bit tricky. We will now temporarily modify your Mac's MAC address to the MAC address of the Chromecast and then log into the captive portal hotel Wi-Fi. Don't worry, a reboot will always return the Mac to its original MAC address and I will share how to return it back to its original MAC address using a single terminal command.

* Turn the Mac's Wi-Fi off
* Load the *Terminal* app again
* In the *Terminal* type (or you can copy and paste from this post):

`sudo ifconfig en0 ether ??:??:??:??:??:??`

Substitute `??:??:??:??:??:??` with the MAC address of the Chromecast.

* Turn Wi-Fi on
* Reconnect to hotel Wi-Fi network – the Mac will now connect to the network with the Chromecast MAC address
* Proceed through the hotel login page
* Verify Internet connectivity by visiting any web site
* Turn off Mac Wi-Fi

The MAC address is now registered on the hotel Wi-Fi. Depending on the hotel and system, this MAC address will have access to the network anywhere from one to twenty-four hours (probably the latter). The downside to this process is that you will have to repeat it whenever the MAC address lease expires on the hotel network.

# Restore Mac's MAC address
You now need to restore your Mac to its original MAC address. You can simply reboot your Mac or you can use the terminal command process shown below:

* In *Terminal* type:

`sudo ifconfig en0 ether ??:??:??:??:??:??]`

Substitute `??:??:??:??:??:??` with the Mac's original MAC address.

* Turn your Mac's Wi-Fi on
* Reconnect to the network

You will probably not need to authenticate through the portal page again, but no guarantee you won't.

# Back to the Chromecast
It's now to time to reconnect the Chromecast and give it a shot.

* Plug the Chromecast into the television
* Using the Chromecast application on the mobile device, complete the setup process and connect to the hotel's in-house Wi-Fi

The Chromecast should automatically connect to the hotel Wi-Fi network without need to authenticate.

# Start casting
* Use a compatible device that is on the same hotel Wi-Fi network and try to cast video or audio to the Chromecast

I believe the process above is accurate. Give it a shot and let me know. Please remember, this may not work on all hotel Wi-Fi networks. I've found it works in many independent hotels and within Marriott properties. I cannot verify for other hotel chains. If it works or does not work for you, please leave a comment below and include the hotel chain so we all benefit.