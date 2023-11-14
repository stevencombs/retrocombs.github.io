---
layout: post
title: 'Use the Retrohax.net mouSTer on the MEGA65'
date: '2021-03-20'
author: 'Steven B. Combs, Ph.D.'
permalink: 'mouster'
email: 'retrocombs@icloud.com'
comments: 'yes'
category: mega65
tags:
  - mega65
  - mouster
  - mouse
---

In this FAST LOAD, I try to get the new mouSTer from Retrohax.net working with my MEGA65 Developer Kit. Watch the video below and then come back to this blog post to see if I was successful. Spoiler alert; at first the device did not work; however, I get this wonderful USB HID to DB9 connection device working, and it's not as hard as I imagined.

> **MEMBERSHIP:** I now offer retroCombs memberships from $1 (PET level membership) to $20 (MEGA65 level membership) that include levels in between for all budgets (VIC-20, C64, Plus/4, and C128). If you'd like to support my content and get access to my Discord server along with other cool freebies, check out each level at <https://www.buymeacoffee.com/retroCombs>.

## YouTube Video: _FAST LOAD: Use the Retrohax.net mouSTer on the MEGA65_

In the video below, I connect a mouSTer to a MEGA65 and see if it works.

<div style="position:relative;padding-top:56.25%;"><p><iframe src="https://www.youtube.com/embed/OdPSfqBS5S8" frameborder="0" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true" style="position:absolute;top:0;left:0;width:100%;height:100%;"></iframe></p></div>

## Video Markers

I embed the video markers below in the video so you can jump around to specific content. Of course, I hope you watch the entire video!

* [00:00] MEGA65 Update
* [00:05] CR 1220 Battery
* [00:12] Disk Drive Mounting Spacers
* [00:23] No 1351
* [00:33] What about a USB Mouse?
* [00:59] FAST LOAD
* [01:06] RetroHax.net
* [01:15] Package Contents
* [01:25] mouSTer overview
* [01:37] plug in the mouSTer
* [01:48] MEGA65 Starter Guide
* [01:55] Connect and out of box test
* [02:52] Upgrade mouSTer firmware
* [03:50] New firmware test
* [04:29] Yaped32 mouse test (C65 mode)
* [04:48] Art Studio 1351 Version (C64 mode)
* [05:03] MHz modes in C64 mode
* [05:36] GEOS 65 demonstration
* [06:08] Conclusion

## Video Errata (as of 2021-03-20)

None as of 2021-03-20

## Links Mentioned in this Episode:

Below are the links to the entire Retro Games Commodore series. All Amazon links are affiliate links (#ad). Thanks for supporting the blog and the YouTube channel!

1. [MEGA65](https://mega65.org/)
1. [Retrohax.net](https://www.retrohax.net)
2. [mouSTer](https://retrohax.net/shop/amiga/mouster/)
3. [mouSTer Firmware](http://jil.guru/mouSTer/)
4. [MEGA65 Build](/mega65-1)
5. [Victsing USB/BT Mouse Review and Video](/victsing-wireless-mouse)
6. [Victsing at Amazon](https://amzn.to/3mDnPNt)

## Final Thoughts

Below are additional mouSTer thoughts and information I did not include or elaborate on in the video.

1. Unfortunately, as of 2021-03-20, the mouSTer is out of stock. They were limited when I snagged one; however, I hoped they would be back in stock by the time I shared my video. Keep checking. I'm sure they'll return.
2. The mouSTer is encased in what appears to be a silicone sleeve. I like it; however, if you want to print your own case, check out [The mouSTer project – another UPDATE - retrohax.net](https://retrohax.net/the-mouster-project-another-update/). On this page are links to a case you can print. It looks bulky to me; however, it does give me an idea for my own case. Hmm...
3. I originally conceived this video as a longer demonstration of the MEGA65. I decided against this longer video in lieu of a FAST LOAD. I have some other content to create for the MEGA65, so stay tuned.
4. The VictSing mouse I use in the video is my daily driver on my new M1 Mac mini. It's a great mouse, at a great cost ([around $35](https://amzn.to/3vJWmyd)). What I love about it is that not only does it include additional buttons, it can be used in either Bluetooth or USB dongle mode - very versatile!
5. I did not take any time to discuss the options available in the `.ini` file that the mouSTer creates on the USB drive. I include the file contents at the bottom of this post. The comment statements serve as a manual for the device. That's pretty slick when you think about it. When you upgrade the firmware, you get the updated instruction manual!

That's all for now but I do often add thoughts later. If I do, they will be date stamped.

## Join the Fun

You won't want to miss that fun, so make sure you <font color="red">SUBSCRIBE</font> to my [YouTube channel](https://www.youtube.com/stevencombs).

Help make this content better! Leave your comments and thoughts below or in the comments [under the YouTube video](https://youtu.be/OdPSfqBS5S8F).

Thanks for reading and watching and if you are so inclined, please let others know about the blog using the hashtag #retroCombs.

🕹️ retroCombs, OUT!

***
## Bonus MOUSTER.INI contents (Firmware v3.11.1962)

Below is the `.ini` included with the firmware. I provide so those without a mouSTer can review the contents prior to purchase, or while waiting. It might help readers make a purchase decision. I also plan to use this page instead of constantly looking for my USB drive.

```bash
; mouSTer - universal USB HID class device to db9 adapter.
; Firmware version: 3.11.1962
;
;
;                                           _/_/_/  _/_/_/_/_/
;    _/_/_/  _/_/      _/_/    _/    _/  _/            _/      _/_/    _/  _/_/
;   _/    _/    _/  _/    _/  _/    _/    _/_/        _/    _/_/_/_/  _/_/
;  _/    _/    _/  _/    _/  _/    _/        _/      _/    _/        _/
; _/    _/    _/    _/_/      _/_/_/  _/_/_/        _/      _/_/_/  _/
;
;
; ###############################################################################
; #                                                                             #
; # Features:                                                                   #
; # Emulates Atari, Amiga and Commodore 1351 mouse.                             #
; # Can handle up to 16 buttons that can be translated to any action*           #
; # Can handle up to 6 axes, that can be translated to any action*              #
; #                                                                             #
; # More to come...                                                             #
; #         *any action - means any joystick direction or fire/mouse button     #
; #                                                                             #
; ###############################################################################
;
; ###############################################################################
; # User Manual                                                                 #
; ###############################################################################
;
; ###############################-Blink-Codes-###################################
;
; mouSTer is communicating with you using MORSE CODE or simply blinking the LED.
; List of possible messages:
;
; Very fast blinking: Bootloader is Active and is waiting for USB drive with new firmware.
; If USB drive is not detected within 2s, main program will be launched.
;
; Normal blinking: mouSTer is ready, and is awaiting USB HID device (mouse, game pad etc).
;
; HeartBeat: 2 fast blinks and long pause. mouSTer is alive and operational.
;
; SOS: <... --- ...> Critical problem has occurred. Not possible to recover from this state. Please cycle power.
;
; E: <.> An error has occurred. Remove USB device | Check INI file syntax.
;
; R: <.-.> Operation successfully finished. Remove the USB device.
;
; ##############################-Using-an-USB-Drive-##############################
;
; When USB drive is inserted, mouSTer is looking for a 'mouSTer' folder.
; If the folder does not exists, it will be created and opened.
; Then mouSTer is looking for configuration file: 'mouSTer.ini'
; If exists, configuration will be read and parsed then written to memory.
; If no ini file is present, mouSTer is looking for new firmware file: 'mouSTer.fw'.
; If firmware file is present mouSTer will activate the bootloader, and install new firmware.
; In case if no ini nor firmware present - mouSTer will write (this) ini file
; with manual and current firmware version on the top - into 'mouSTer.ini' file.
;
; mouSTer is case insensitive.
;
; mouSTer config   file: '/mouSTer/mouSTer.ini'
; mouSTer firmware file: '/mouSTer/mouSTer.fw'
;
; most up to date information and the latest firmware is always available at: http://Jil.guru/mouSTer
;
; ##################################-Configuration-###############################
;

[mouster]
; general settings.
;
; mode=
; Operating mode, what device mouSTer will emulate.
; default: auto
; Possible values:
; [00|auto|] - mouSTer will self determine what device to emulate.
; [01|mouse|mice] - lock to mouse mode only
; [02|gpad|gamepad] - lock to gamepad mode only
; [255|reset_to_default|jmp_$e477] - Load default values for mouSTer configuration and end processing ini file.
mode=mouse

;
; afRate=
; Auto Fire Rate. Can be used with ANY defined button.
; Define time between consecutive 'auto' presses in 10's of miliseconds.
; fx: afrate=15 => button will be auto pressed every 150ms ca 6 times per second.
; to activate Auto Fire function on button, prepend its definition with * (asterisk)
; when function is defined twice, as a normal and as an autofire, and both are activated, the autofire will take the priority.
; default: 15
; Possible values:
; [0-250] - numeric value * 10
afRate=15

;
; heartBeat=
; Define the heartbeat LED behavior.
; default: heartbeat
; Possible values:
; [00|off|false] - Heartbeat is turned OFF
; [01|on|true] - Heartbeat is turned constant ON
; [02|heartbeat|normal] - Heartbeat is normal, 2 short pulses and long pause.
heartBeat=02

;
; potPullUp=
; Defines if pull-up resistors on POT lines should be active. In some rare cases setting this to OFF may fix compatibility issues with POT lines.
; default: on
; Possible values:
; [00|false|off] - direction states will be validated
; [01|true|on] - direction states will not be validated
potPullUp=01

[mouse]
; mouse emulation settings.
;
; type=
; Mouse type to emulate.
; default: atari
; Possible values:
; [00|atari|ata] - mouSTer will emulate atari mouse.
; [01|amiga|ami] - mouSTer will emulate amiga mouse.
; [02|c1351|c64] - mouSTer will emulate commodore C1351 mouse. Requires mode=mouse !! will not work in auto. Require real SID.
; [03|LAME8|A8] - Special mode dedicated to A8 - #### Function not implemented yet #####
type=02

;
; microstep=
; In another words, DPI divider. Allow you to slow down your mouse to adapt speed to capabilities of old devices.
; Define how many real mouse steps should be translated to one virtual step
; Because division by 0 causes critical error, setting it to 0 causes critical error. Try if you don't believe me.

; default: 10
; Possible values:
; [0-250] - numeric value
microstep=10

;
; mbutton=
; Mapping physical mouse buttons for digital (atari or amiga) mouse emulation mode.
; default: mbutton01->lb, mbutton02->rb, mbutton03->mb, other->none.
; Possible values:
; [00|none|off] - button is ignored
; [01|lb|left] - left button/fire
; [02|rb|right] - right button/paddle A
; [03|mb|middle] - middle button/paddle B
; * Can be defined as an Auto Fire button by prepending * to definition .e.g mbutton01=*01
mbutton01=01
mbutton02=02
mbutton03=03
mbutton04=*01
mbutton05=*02
mbutton06=*03
mbutton07=00
mbutton08=00
mbutton09=00
mbutton10=00
mbutton11=00
mbutton12=00
mbutton13=00
mbutton14=00
mbutton15=00
mbutton16=00

;
; cbutton=
; Mapping physical mouse buttons for c1351 mouse emulation mode.
; This mode require a REAL SID. Will not work with e.g. SwinSID.
; default: cbutton01->fire, cbutton02->up, other->none.
; Possible values:
; [00|none|off] - button is ignored
; [01|fire|trigger] - joystick fire
; [02|north|up] - Joystick up/north
; [03|east|right] - joystick right/east
; [04|south|down] - joystick down/south
; [05|west|left] - joystick left/west
; * Can be defined as an Auto Fire button by prepending * to definition .e.g cbutton01=*01
cbutton01=01
cbutton02=02
cbutton03=00
cbutton04=*01
cbutton05=*02
cbutton06=00
cbutton07=00
cbutton08=00
cbutton09=00
cbutton10=00
cbutton11=00
cbutton12=00
cbutton13=00
cbutton14=00
cbutton15=00
cbutton16=00


[gamepad]
; gamepad emulation settings.
;
; gbutton=
; Mapping physical gamepad buttons for joystick emulation mode.
; GamePad always has a HAT SWITCH that is always mapped to directions.
; default: gbutton01-04 are mapped to fire, other->none
; Possible values:
; [00|none|off] - button is ignored
; [01|fire|lb] - joystick fire/trigger, mouse left button
; [02|pa|rb] - paddle A, mouse right button
; [03|pb|mb] - paddle B, mouse middle button
; [04|n|u] - Joystick up/north
; [05|ne|ur] - Joystick up-right/north-east
; [06|e|u] - joystick right/east
; [07|se|dr] - joystick down/south
; [08|s|d] - joystick down/south
; [09|sw|dl] - joystick down/south
; [10|w|l] - joystick left/west
; [11|nw|ul] - joystick up-left/north-west
; * Can be defined as an Auto Fire button by prepending * to definition .e.g gbutton01=*01
gbutton01=01
gbutton02=01
gbutton03=*01
gbutton04=*01
gbutton05=00
gbutton06=00
gbutton07=00
gbutton08=00
gbutton09=00
gbutton10=00
gbutton11=00
gbutton12=00
gbutton13=00
gbutton14=00
gbutton15=00
gbutton16=00

;
; axis=
; ##### Function partially implemented - only default settings are available and working. Tested only with PS4 controller #####
; Mapping physical gamepad axes for joystick emulation mode.
; in this mode, axis can be also mapped to PADLE to become true analog axis.
; axes mapped to one direction are triggered  at ca. 75% deflection
; axes mapped to double direction are triggered at ca. <25 and >75 deflection
; default: axis01->ew, axis02->ns, others->none
; Possible values:
; [00|none|off] - axis is ignored
; [01|n|u] - axis is one direction north/up axis
; [02|s|d] - Axis is one direction south/down axis
; [03|ns|ud] - axis is true north-south/up-down/Y axis. Default for Y axis
; [04|e|r] - axis is one direction east/right axis
; [05|w|l] - axis is one direction west/left axis
; [06|ew|lr] - axis id true east-west/left-right/X axis. Default for X axis
; [07|lb|fire] - axis is one direction fire button
; [08|rb|pad] - axis is one direction button mapped to paddle A
; [09|mb|pbd] - axis is one direction button mapped to paddle B
axis01=06
axis02=03
axis03=00
axis04=00
axis05=00
axis06=00

;
; validate=
; Validate if pressed direction button are giving valid joystick direction
; valid states are: n, ne, e, se, s, sw, w, nw or neutral
; invalid states are fx: ns, ew, new ,nesw etc.. When invalid state is detected, the neutral state is applied
; buttons nor paddle never are validated
; default: false
; Possible values:
; [00|false|off] - direction states will be validated
; [01|true|on] - direction states will not be validated
validate=00
```
