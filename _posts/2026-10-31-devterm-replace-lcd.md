---
layout: post
title: 'How to Replace the Clockwork DevTerm LCD Panel (and My Ribbon Cable Hack)'
date: '2026-10-31'
author: 'Steven B. Combs, Ph.D.'
email: 'retrocombs@icloud.com'
permalink: devterm-replace-lcd
comments: yes
categories: [handhelds]
tags:
  - clockworkpi
  - devterm
  - a06
  - lcd
  - repair
  - trs80
  - model100
  - virtualt
  - howto
  - video
image:
  path: /images/posts/2026-10-31-devterm-replace-lcd.jpg
  width: 1280
  height: 720
  alt: 'Clockwork DevTerm A06 opened up with the replacement LCD panel next to it'
kind: how-to
---

The backlight on my Clockwork DevTerm A06 stopped working because the LCD panel's ribbon cable was split. I got it working again with a hack: I scraped the cable down to bare metal and soldered a jumper across the break. You've seen that hacked screen in every DevTerm video I've made so far, and I don't think you could tell. Then the Clockwork Pi team sent me a replacement panel for free, which was very generous to my small channel. Thank you, Clockwork Pi!

This post is the text companion to my video, a 27-minute edit of a much longer livestream. It walks through the teardown, the panel swap, a quick tour of the modules inside, reassembly, and a look at VirtualT, the TRS-80 Model 100 emulator. Let's dig in!

![Clockwork DevTerm A06 opened up with the replacement LCD panel next to it](/images/posts/2026-10-31-devterm-replace-lcd.jpg)

## TABLE OF CONTENTS {#table-of-contents}

- [TABLE OF CONTENTS](#table-of-contents)
- [LINKS](#links)
- [SUPPORT THE BLOG AND CHANNEL](#support-the-blog-and-channel)
- [COMPANION YOUTUBE VIDEO](#companion-youtube-video)
- [BEFORE YOU START](#before-you-start)
- [TEARDOWN](#teardown)
- [MY BROKEN LCD HACK](#my-lcd-hack)
- [INSTALL THE NEW LCD PANEL](#install-the-new-panel)
- [A QUICK TOUR OF THE MODULES](#tour-of-the-modules)
- [TEST BEFORE YOU CLOSE IT UP](#test)
- [REASSEMBLY](#reassembly)
- [THE TRS-80 MODEL 100 CONNECTION](#model-100)
- [VIRTUALT ON THE DEVTERM](#virtualt)
- [WHAT'S NEXT](#whats-next)
- [CONCLUSION](#conclusion)

---

## LINKS {#links}

- 🖥️ Clockwork DevTerm: <https://www.clockworkpi.com/devterm>
- 📺 My Clockwork DevTerm TRS-80 Model 100 cyberdeck video: <https://youtu.be/I7StErCRl1Q>
- 🔴 The full livestream: [Replace the Clockwork Pi DevTerm's LCD Panel | Checkout the Insides](https://www.youtube.com/watch?v=sfWs4i2oS2k)

## SUPPORT THE BLOG AND CHANNEL {#support-the-blog-and-channel}

Check out the [supporters page](/supporters) to learn about my supporters and how you can join our community. If this post saved you some time, you can also [leave a tip](https://paypal.me/stevencombs).

## COMPANION YOUTUBE VIDEO {#companion-youtube-video}

Title: _How to Replace the Clockwork Pi DevTerm LCD Panel_

{% include youtube.html id="hEy1ue18MFY" title="How to Replace the Clockwork Pi DevTerm LCD Panel" upload_date="2022-05-22" duration="PT26M54S" cta="false" %}

{% include member-cta.html channel="retrocombs" %}

## BEFORE YOU START {#before-you-start}

The DevTerm manual has a page on mounting the screen, and it's a simple process. Almost everything is snap fit or connected with pogo pins, so you don't need a screwdriver. A fingernail works for the ribbon cable latch.

Take care with the new panel. After some reading online, I learned that a few other folks have had problems with their LCD screens, and the panel's ribbon cable is fragile. Leave the protective film on the screen until you're done. Set the DevTerm on something soft, like the manual, so grit doesn't scratch the screen when you flip it over.

## TEARDOWN {#teardown}

1. **Remove the knobs.** The two wheels on the left and right don't do anything except hold everything together. Turn each one about 90 degrees and pull it off.
2. **Remove the top case.** Lift it off. It snaps on, and it's harder to get off than you'd think.
3. **Remove the port covers.** The sliders on each side cover the ports. Pull them out before you lose them.
4. **Remove the power button.** It's the cutest little start button you've ever seen. Set it aside.
5. **Lift the assembly out of the bottom case.** Everything lifts right out.
6. **Remove the keyboard.** It seats on pogo pins, so there's no cable. It just pops out.
7. **Flip it over and remove the battery module.** It connects with pogo pins too.
8. **Disconnect the LCD ribbon cable.** Open the latch with a fingernail and lift the cable out. It takes some tucking to get it back in later, so go slowly.
9. **Flip it back and lift out the old panel.** Be very careful not to break the holders.

## MY BROKEN LCD HACK {#my-lcd-hack}

My old screen was working. If you held a flashlight right up to it, you could see the text and follow the mouse around. Only the backlight was dead.

To fix it, I took the panel down to its bare components. Under the frame is a plastic diffuser, with the LEDs along the edge glowing through it to light the screen. The ribbon cable that powers the backlight had a split. I scraped off enough of the cable's coating to reach the metal and soldered a small jumper across the break. I'd never tried to repair a ribbon cable before. I had to leave one piece out to make everything fit with the wire in place, but it worked, and the screen was bright. Jamie from Jamie's Hack Shack called it a nice hack in the chat, so thank you, my good hacky friend.

## INSTALL THE NEW LCD PANEL {#install-the-new-panel}

1. Line up the panel's connector with the slot and set the panel in. The little frame is flimsy and wants to pop up, so hold it down.
2. Flip the assembly over and seat the ribbon cable, then close the latch.
3. Put the battery module back on. Its little jumpers hold the battery in and also act as spacers for the bottom case.

## A QUICK TOUR OF THE MODULES {#tour-of-the-modules}

While it's open, here's what's inside:

- **Thermal printer:** The cartridge holds the paper. Pull off the cover, connect it, and you have a thermal printer. The OS comes with the printer driver installed. I'm still figuring out the best ways to use it.
- **External accessory board:** This board is designed to be swapped for other boards that other folks design. Mine provides a couple of USB ports, the printer connection, a camera connector (I think a Raspberry Pi camera will work), and a cooling fan.
- **Core module:** My A06 core is a Rockchip system on a chip. It plugs in like a DIMM: slide it in, push it down, and it clicks into place.

## TEST BEFORE YOU CLOSE IT UP {#test}

With the battery module in, you can power it on outside the case with the power switch next to the SD card. Don't panic during the first few seconds; it takes a while for the screen to come up. The power light came on, and then the screen. It's alive!

The keyboard was still off, and I needed the trackball to shut down properly. I'd never tried seating the keyboard with the DevTerm running, but it worked. Then I peeled off the protective film. That's the satisfying moment when it's real.

While you're in there, here's a look at the ports: micro USB, USB, USB-C, micro HDMI, and a headphone jack. The Wi-Fi and Bluetooth antenna sits inside too. The trackball press is a mouse click, and there are left, middle, and right buttons below it, plus cursor keys and game buttons.

## REASSEMBLY {#reassembly}

1. Drop the assembly back into the bottom case and push it down so it seats.
2. Slide the port covers back in. Each one is labeled with its ports and which side it goes on (R for right).
3. Drop in the power button.
4. Put on the top case. This is the hardest part of the job. Hook it at the front, then push it down the whole way, or it won't seal. Check the seal all the way around before you go on. Don't be afraid of it; it's structurally sound.
5. Turn the knobs back on.

Thanks to Mislav for the Super Chat during the stream!

## THE TRS-80 MODEL 100 CONNECTION {#model-100}

The DevTerm's design is very similar to the Tandy TRS-80 Model 100, and I have one here to compare. The screen's aspect ratio is very close, and the DevTerm takes its design cues from it.

The Model 100 was really a one-purpose device: word processing. Maybe two if you were a journalist, because you could use an acoustic coupler to plug it into a phone and send your article back to be printed. A modern computer like the DevTerm can do all that and much more with Wi-Fi.

## VIRTUALT ON THE DEVTERM {#virtualt}

Somebody has brought the Model 100 to the DevTerm as an emulator called VirtualT. I loaded it from the terminal, and the interface is just like having a Model 100: the cursor keys work, BASIC runs at about full speed, and the text editor works too.

I typed a short program on the DevTerm's tiny 65 percent keyboard:

```basic
10 PRINT "RETROCOMBS  ";
20 GOTO 10
```

A few tips from my session:

- **CTRL+C** breaks a running program.
- **F2** is Load, and I believe **F8** takes you back to the menu.
- There's no full-screen option. F11 works for other apps, but VirtualT stays at its size. I plan to ask whether that can change.

The DevTerm's screen is 1,280 x 480, so I understand people love it for PICO-8: one half of the screen for the program and the other for resources. I haven't bought PICO-8 yet.

## WHAT'S NEXT {#whats-next}

The 65 percent keyboard is definitely usable, and there are enough USB ports to add an external keyboard and mouse. With micro HDMI, you can plug it into a full-size monitor at your desk and then take it on the go. It also charges its batteries while it runs on USB-C.

The DevTerm runs a version of Ubuntu, and there's a MEGA65 emulator available as a Debian package. If I can get it running, maybe with the game controls, this could be a take-and-go MEGA65. I'm also going to check out VICE and EmulationStation. If I can get HDMI capture working, we may play some retro games on it during a livestream.

## CONCLUSION {#conclusion}

A split ribbon cable, a soldered jumper, and finally a new panel, and the DevTerm looks like new. It's going to start traveling with me wherever I go.

Would you watch a livestream of retro games on the DevTerm? Let me know in the comments below. If this post helped, [leave a tip](https://paypal.me/stevencombs).

That's it for me, folks. 🕹️ retroCombs, OUT!
