---
layout: post
title: 'Clockwork Pi DevTerm A06: Unboxing, Assembly, and First Look at a TRS-80 Model 100 Inspired Cyberdeck'
date: '2026-10-31'
author: 'Steven B. Combs, Ph.D.'
email: 'retrocombs@icloud.com'
permalink: clockwork-devterm-a06-first-look
comments: yes
categories: [handhelds]
tags:
  - clockworkpi
  - devterm
  - a06
  - cyberdeck
  - thermal-printer
  - trs80
  - model100
  - linux
  - first-look
  - video
image:
  path: /images/posts/2026-10-31-clockwork-devterm-a06-first-look.jpg
  width: 1280
  height: 720
  alt: 'Clockwork Pi DevTerm A06 parts on their plastic sprues next to the assembled DevTerm'
kind: first-look
---

DHL dropped a little package at my door: a Clockwork Pi DevTerm A06. I've been a fan of handheld computers since the early days of the Apple Newton, Windows CE, and Palm. The DevTerm reaches back even further, to the TRS-80 Model 100.

Clockwork Pi provided this unit to the channel for free. Thank you! I'm under no obligation, they didn't ask me to say anything in particular, and these thoughts are my own.

This post is the text companion to my video. It covers the specs, what's in the box, how the model-kit assembly goes, the LCD problem I hit on first boot and how I hacked around it, and my first impressions. This is a first look, not a review. Let's dig in!

![Clockwork Pi DevTerm A06 parts on their plastic sprues next to the assembled DevTerm](/images/posts/2026-10-31-clockwork-devterm-a06-first-look.jpg)

## TABLE OF CONTENTS {#table-of-contents}

- [TABLE OF CONTENTS](#table-of-contents)
- [LINKS](#links)
- [SUPPORT THE BLOG AND CHANNEL](#support-the-blog-and-channel)
- [COMPANION YOUTUBE VIDEO](#companion-youtube-video)
- [VIDEO ERRATA](#video-errata)
- [WHAT IS THE DEVTERM?](#what-is-the-devterm)
- [DEVTERM A06 SPECIFICATIONS](#specifications)
- [THE PORTS](#the-ports)
- [WHAT'S IN THE BOX](#whats-in-the-box)
- [ASSEMBLY](#assembly)
- [ABOUT THE BATTERIES](#batteries)
- [THE KEYBOARD](#the-keyboard)
- [LOADING THE THERMAL PRINTER](#thermal-printer)
- [MY FIRST STARTUP AND THE LCD FIX](#lcd-fix)
- [QUICK DEMO: BROWSER AND PRINTER](#demo)
- [MY INITIAL THOUGHTS](#initial-thoughts)
- [CONCLUSION](#conclusion)

---

## LINKS {#links}

- 🖥️ Clockwork Pi DevTerm: <https://www.clockworkpi.com/devterm>
- 📺 My DevTerm LCD replacement video and post: [How to Replace the Clockwork DevTerm LCD Panel](/devterm-replace-lcd)

## SUPPORT THE BLOG AND CHANNEL {#support-the-blog-and-channel}

Check out the [supporters page](/supporters) to learn about my supporters and how you can join our community. If this post saved you some time, you can also [leave a tip](https://paypal.me/stevencombs).

## COMPANION YOUTUBE VIDEO {#companion-youtube-video}

Title: _Clockwork Pi DevTerm | TRS-80 Model 100 Inspired Cyberdeck!_

{% include youtube.html id="I7StErCRl1Q" title="Clockwork Pi DevTerm | TRS-80 Model 100 Inspired Cyberdeck!" upload_date="2022-05-06" duration="PT24M48S" cta="false" %}

{% include member-cta.html channel="retrocombs" %}

## VIDEO ERRATA {#video-errata}

- **SD card size:** In the specifications (~3:20), I say the kit includes a 32GB card. When I go through the second tray (~7:16), I call it a 16GB microSD card. Check the card in your own kit.
- **Screen size:** I read "6.86 inch" from the spec list (~2:55). Clockwork lists the screen as 6.8 inches.
- **"65 percent smaller":** The Clockwork 65 keyboard is a 65 percent layout. That's not the same as 65 percent smaller than a full-size keyboard.

## WHAT IS THE DEVTERM? {#what-is-the-devterm}

Clockwork Pi describes it this way: "DevTerm is a post-modern, digital minimalist lifestyle." It's A5 notebook size, with complete PC functions, a retro-futurism design, a 6.8-inch ultra-wide screen, a classic QWERTY keyboard, high-speed wireless, long battery life, and even a thermal printer. Clockwork calls it an "anywhere door" escape for distraction-free typing and deep thinking.

## DEVTERM A06 SPECIFICATIONS {#specifications}

There are several DevTerm models. Mine is the A06:

- ClockworkPi v3.14 mainboard
- A06 core module: ARM 64-bit dual-core Cortex-A72 plus quad-core Cortex-A53, Mali-T864 GPU, and 4GB of LPDDR4 RAM
- External module with additional ports
- 6.8-inch IPS screen module
- Clockwork 65 keyboard
- Battery module (batteries not included)
- Dual speakers
- 58mm, 200 DPI thermal printer
- Component shells and bracket system
- SD card with the Clockwork OS

## THE PORTS {#the-ports}

Working around the DevTerm, there is a USB port, USB-C, micro HDMI for video out, and a headphone jack. The front has the power button with a built-in LED and the SD card slot. The right side has two more USB ports. The expansion port on the back is used by the thermal printer.

## WHAT'S IN THE BOX {#whats-in-the-box}

My box looked like it had a rough trip, with bruised corners. The QR code on the front didn't take me to a website. When I shook it, it sounded like there was dirt inside. It turned out to be plastic bits from a crushed corner.

Inside, the parts look just like a model kit from a hobby store, complete with plastic runners, or sprues. There are two trays:

- **Tray one:** the battery cover, two port covers labeled with their ports, a cover for the printer slot, and a small bag of three machine screws. Don't lose those.
- **Tray two:** the IPS panel (mine had a dent), the rechargeable battery module, the expansion board (cooling fan, camera ribbon connector, printer ribbon connector, micro USB, and two USB ports), the display ribbon cable, the microSD card with the OS, the mainboard, the A06 core, a Wi-Fi and Bluetooth antenna, two small rectangular speakers, the thermal printer module, and the 65 keyboard.

## ASSEMBLY {#assembly}

Assembly is supposed to be as much fun as using the DevTerm, and it's all snap fit. I followed the black-and-white instructions closely. They're quite good.

1. **Mount the screen.** It clicks into its plastic holder. Make sure the connector is aligned correctly. I left the screen protector on until the end.
2. **Mount the mainboard.** Its connectors hold it in place, and the fit is solid.
3. **Connect the screen ribbon cable.** This one worried me. The cable is tiny and delicate, and the manual has a strong warning about it.
4. **Mount the core.** Like a memory module, slide it in at an angle and lower it until it clicks under the holders. You need a small Phillips screwdriver for this step. Take off the gold plastic screw receiver covers first.
5. **Install the antenna.** Click its connector onto the mainboard, remove the adhesive backing, and stick it to the side of the inner mounting plate.
6. **Mount the speakers.** Peel the adhesive and stick them into their carriers with the connectors facing outward.
7. **Mount the external module.** Slide it in at an angle and lower it, and make sure you install the connectors that hold it down, or it will flop up.
8. **Assemble the thermal printer.** Put the roller in, snap the assembly onto its holder, lower it onto the bottom tray, and connect its ribbon cable to the external module. Close that connector carefully. Then add the standoffs that support the upper case.
9. **Mount the battery module.** Drop it onto its four pins, and the pogo pins make the connection. No cables. Add four more standoffs.
10. **Mount the back shell.** Drop everything into it and add the connector panels and the transparent LED button.
11. **Mount the keyboard.** It uses pogo pins too. Drop it on top.
12. **Mount the front shell.** This was very tricky. Line it up on the clips at the front, push, and apply some pressure at the back. Make sure the seam is tight all the way around. It'll probably take you a few tries.
13. **Add the side wheels.** The whole thing is held together by those two little wheels. Genius.
14. **Mount the port cover** on the back. Snap it into place and fold it up until it clicks.
15. Drop in the batteries, put on the cover, and insert the microSD card.

## ABOUT THE BATTERIES {#batteries}

The DevTerm doesn't use AA or AAA batteries, and batteries aren't included. You need 18650 cells, which look like oversized AA batteries. They're rechargeable, and the DevTerm has the circuitry to recharge them. I bought a set of 18650 batteries with a universal smart charger.

## THE KEYBOARD {#the-keyboard}

Below the spacebar are three mouse buttons: left, center, and right. The trackball moves the cursor, and pressing it down is a left click. There's a game control pad with controller buttons, regular cursor keys, and function keys along the number row. Hold Fn and tap a number to get a function key.

## LOADING THE THERMAL PRINTER {#thermal-printer}

One thing I love about thermal printers: no ink. Drop the port cover you assembled earlier, take off the paper cover, and drop the roll right in. There's no bar to thread it on. The printer shows which side goes up, so the paper rolls outward. Pull a little out, clip the cover in, and you're ready to print.

## MY FIRST STARTUP AND THE LCD FIX {#lcd-fix}

The first time I hit the power button, I got nothing on the screen. The lights lit and the fans ran, but the screen stayed dark.

I went straight to the worst-case scenario. I broke it all down and reseated the ribbon cable several times, which didn't help. Then I held a flashlight right next to the panel and could see something on it. The panel was fine. The backlight LEDs weren't working.

I broke down the LCD unit completely and found that the ribbon cable from the LCD controller to the LEDs was cut. It looked like it got bent and split in manufacturing. I'm careful, and I don't think I broke it during assembly, but it's possible.

I emailed Alex at Clockwork with a picture of the split. He responded almost immediately and said a replacement was on its way, but it would be a while. In the meantime, the worst I could do was make the panel not work, and it already didn't work. So I tried to fix it:

1. I scraped the plastic coating off the ribbon cable with an X-Acto knife.
2. I used an ohmmeter across the controller board and the cable, removing more and more plastic until I had a circuit.
3. I soldered a small wire from the LED power to the LED controller board.

The wire was almost thicker than the whole assembly, so I had to leave one of the frames off. When I turned it on, the screen was dark for about 10 seconds, and then the backlight fired up. The DevTerm you see in the rest of the video is my fixed version. That says a lot about how hackable this device is. Big shout out to Clockwork for getting back to me so quickly. (I swapped in the new panel later. See [How to Replace the Clockwork DevTerm LCD Panel](/devterm-replace-lcd).)

## QUICK DEMO: BROWSER AND PRINTER {#demo}

On batteries, it boots through a little terminal action into a GUI that will look very familiar if you've used Ubuntu with Xfce. The cursor is tiny, and it takes several swipes of the trackball to cross the screen. You can change the setting to make it faster.

I opened Chromium, visited my website, and pressed F11 for full screen. Then I opened an image in a new tab and printed it. The DevTerm printer shows up right in the print dialog with a preview. You hear that familiar thermal printer sound, like a little dot matrix printer from the '80s. It's not fast, so give yourself plenty of time. Tear the paper off with the built-in bar. The print was about what you'd expect from a thermal printer, and I've had better prints. With some time, I'm sure I'll figure it out. I understand you can get thermal paper as sticker material too.

The DevTerm was fairly responsive, without much lag. The wide screen might seem constricting, but there are good reasons for it that we'll explore later.

## MY INITIAL THOUGHTS {#initial-thoughts}

Manufacturing errors happen, so I'm giving the LCD panel issue a wash. Beyond that, the DevTerm may be one of the coolest little devices you can get if you're into handheld terminals, and it's one you can actually get work done on.

Here's what's next:

- A deeper look at the OS. It's Ubuntu based, so anything Debian based should be fair game.
- A comparison with the TRS-80 Model 100.
- Setting it up as a retro gaming portable. It's designed for that.
- Some other unique experiments, some on livestreams and some in prepared videos.

The rumor is that people buy these and they end up sitting on a shelf. Mine won't.

## CONCLUSION {#conclusion}

A model kit you snap together, a thermal printer, a Model 100 look, and a backlight I had to hack back to life. It's been a fun start.

Do you have a Clockwork Pi DevTerm? How are you using it? I'd love your ideas, so let me know in the comments below. If this post helped, [leave a tip](https://paypal.me/stevencombs).

That's it for me, folks. 🕹️ retroCombs, OUT!
