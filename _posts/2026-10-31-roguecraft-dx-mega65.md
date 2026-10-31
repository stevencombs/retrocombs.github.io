---
layout: post
title: 'Roguecraft DX on the MEGA65: From 2.7KB to 240 Colors'
date: '2026-10-31'
author: 'Steven B. Combs, Ph.D.'
email: 'retrocombs@icloud.com'
permalink: roguecraft-dx-mega65
comments: yes
categories: [mega65]
tags:
  - mega65
  - roguecraft-dx
  - thalamus
  - badger-punch
  - retrocogs
  - roguelike
  - xemu
  - c64
  - commodore
  - review
  - video
image:
  path: /images/posts/2026-10-31-roguecraft-dx-mega65.jpg
  width: 1280
  height: 720
  alt: 'Roguecraft DX running on the MEGA65 in 240 colors'
kind: review
---

A pitch-black dungeon, 15 levels of eldritch horror, one life, and a chicken that pecks like a demon. Roguecraft DX came out in February 2026, and I think it's the MEGA65's first true commercial killer game. If you thought 8-bit peaked in the 1980s, wait until you see 240 colors on screen at once in the Dungeons of Mordecoom.

Thanks to Thalamus and RetroCogs for bringing this game to my attention and sending me a review copy. If a boxed version ever shows up, I'll open it during a livestream.

This post is the text companion to my video. It covers the game's lineage, how it plays, why the MEGA65 and the Commodore 64 Ultimate aren't competing, how to play it today in the XEMU emulator, how to load it on real hardware, and my verdict. Let's dig in!

![Roguecraft DX running on the MEGA65 in 240 colors](/images/posts/2026-10-31-roguecraft-dx-mega65.jpg)

## TABLE OF CONTENTS {#table-of-contents}

- [TABLE OF CONTENTS](#table-of-contents)
- [LINKS](#links)
- [SUPPORT THE BLOG AND CHANNEL](#support-the-blog-and-channel)
- [COMPANION YOUTUBE VIDEO](#companion-youtube-video)
- [VIDEO ERRATA](#video-errata)
- [FROM 2.7KB TO 240 COLORS](#lineage)
- [HOW IT PLAYS](#how-it-plays)
- [THREE HEROES, THREE DIFFICULTIES](#heroes)
- [START WITH ROGUE4K AND ROGUE64](#primer)
- [MEGA65 VS. C64 ULTIMATE](#mega65-vs-c64-ultimate)
- [PLAY IT TODAY IN XEMU](#xemu)
- [LOAD IT ON A REAL MEGA65](#real-hardware)
- [THE AUDIO, TLA APPROVED](#audio)
- [MY VERDICT](#verdict)
- [CONCLUSION](#conclusion)

---

## LINKS {#links}

**Video Mention Links**

- 💾 Roguecraft DX for the MEGA65 (itch.io): <https://thalamusdigital.itch.io/roguecraft-dx-mega>
- 🖥️ XEMU emulator: <https://github.lgb.hu/xemu/>
- 📂 MEGA65 ROM patch (Filehost): <https://files.mega65.org>
- 📺 My MEGA65 playlist: <https://www.youtube.com/playlist?list=PLRVBh2hjFTomsrJnQdqFmoZUdT6qHocpo>

**MEGA65 Accessories**

- 💾 Floppy Disks: <https://amzn.to/3DrEOj1>
- 👚 Sew Ready Covers (tell Maggie retroCombs sent you!): <https://ebay.us/EFNZGp>
- 🕹️ Hyperkin Trooper Controller: <https://amzn.to/3l1CHXj>
- 🕹️ Atari CX40+ Joystick: <https://amzn.to/479CFmD>
- 🛜 Ethernet Network Cable: <https://amzn.to/4cEJyyB>
- 🧠 microSD Cards: <https://amzn.to/3IYL3Kn>
- 🚠 HDMI Cables: <https://amzn.to/4c2vhM9>
- 🔊 3.5mm Shielded Cables: <https://amzn.to/3VBsBPL>
- 🔈 Edifier Speakers (BIG upgrade and I LOVE these things): <https://amzn.to/3vymO2G>
- 🐁 Tank Mouse: <https://tank-mouse.com/>
- 🐁 retroHax mouSter: <https://retrohax.net/shop/modulesandparts/mouster/>
- 🐁 The Mouse (USB Tank Mouse clone): <https://amzn.to/4ah85sa>

*Disclosure Statement: When you click on links to various merchants on this site and make a purchase, this can result in this site earning a commission. Affiliate programs and affiliations include, but are not limited to Amazon and the eBay Partner Network.*

## SUPPORT THE BLOG AND CHANNEL {#support-the-blog-and-channel}

Check out the [supporters page](/supporters) to learn about my supporters and how you can join our community. If this post saved you some time, you can also [leave a tip](https://paypal.me/stevencombs).

## COMPANION YOUTUBE VIDEO {#companion-youtube-video}

Title: _🐉️ From 4KB to 240 Colors: The Evolution of Roguecraft DX on the MEGA65_

{% include youtube.html id="IhNteMTglD8" title="From 4KB to 240 Colors: The Evolution of Roguecraft DX on the MEGA65" upload_date="2026-02-08" duration="PT8M47S" cta="false" %}

{% include member-cta.html channel="retrocombs" %}

## VIDEO ERRATA {#video-errata}

- **"I'm RetroCogs" (~0:58):** I'm retroCombs. RetroCogs did the MEGA65 port. Too many cogs and combs in one sentence.
- **Joystick or mouse? (~3:45):** Early in the video, I say you move with the cursor keys or a joystick in port 2. Later, I say "mouse or the cursor keys." I meant joystick.
- **4KB or 2.7KB?** The title says 4KB, which is the "4K" in Rogue4K. The game itself fits in about 2.7 kilobytes.

## FROM 2.7KB TO 240 COLORS {#lineage}

Roguecraft has an interesting lineage:

1. **Rogue4K (2021):** Badger Punch Games entered it in the C64 Cassette 50 charity competition. It's a procedural roguelike squeezed into about 2.7 kilobytes, with PETSCII graphics, and it introduced our hero, who wanders the earth looking for gold and fame.
2. **Rogue64:** the Commodore 64 version.
3. **Roguecraft:** the Amiga version. It won the Retro World Award at the 2025 Debug Indie Game Awards.
4. **Roguecraft DX:** the expanded edition, now on the MEGA65, ported by RetroCogs for Thalamus Digital. It's a big leap: 240 colors on screen at once, sharper resolution, smoother animations, and five extra levels that start in a new wilderness area.

## HOW IT PLAYS {#how-it-plays}

Roguecraft DX is an award-winning, turn-based roguelike. You have to survive 15 procedurally generated levels in the Dungeons of Mordecoom. The gameplay is intuitive, but it can be punishing:

- Move with the cursor keys or a joystick in port 2. I found the cursor keys easier.
- Attack a monster by moving into its space.
- Manage a limited inventory of randomized potions.
- Find the trapdoor keys to go deeper into the dungeon.

I had never played a roguelike before, and this one was a blast to learn.

## THREE HEROES, THREE DIFFICULTIES {#heroes}

The three hero modes are the game's difficulty settings:

- **Warrior (easy):** high health and a heavy hitter, with no real special abilities.
- **Rogue (medium):** a teleportation skill that sets up a backstab buff for extra damage.
- **Wizard (hard):** a fragile spellcaster with low health who relies on ranged magic missiles to pick off enemies from a distance.

## START WITH ROGUE4K AND ROGUE64 {#primer}

Playing that 2.7KB Rogue4K on the Commodore 64 was a great introduction to Roguecraft DX, and it's a little easier. Then step up to Rogue64, where you start to see the beginnings of Roguecraft DX. It's a great game in its own right. Then come back to Roguecraft DX on the MEGA65 and see what's possible when you throw serious 8-bit hardware at a game.

## MEGA65 VS. C64 ULTIMATE {#mega65-vs-c64-ultimate}

Many of you are deep in Commodore 64 Ultimate excitement this year, and it's getting all the attention. The C64 Ultimate is great for pure nostalgia. It's fast and loaded with extras, but on that machine, the series tops out at Rogue64.

The MEGA65 is the "what if Commodore never stopped" machine: 40 times the speed of a C64, 8 megabytes of HyperRAM, and VIC-IV graphics with a 256-color mode. The C64 Ultimate is your machine for 1980s nostalgia. The MEGA65 is your machine for the 1990s that could have been. You'll want both.

## PLAY IT TODAY IN XEMU {#xemu}

No MEGA65 yet? You can play Roguecraft DX today in [XEMU](https://github.lgb.hu/xemu/), available for Mac, Linux, and Windows.

1. Find the original ROM file, **910828.bin**. A web search will help.
2. Patch it into the MEGA65 ROM with the ROM diff tool from [files.mega65.org](https://files.mega65.org).
3. Load the patched ROM in XEMU.
4. Buy and download Roguecraft DX from [thalamusdigital.itch.io](https://thalamusdigital.itch.io/roguecraft-dx-mega), and attach its .D81 disk image in XEMU.
5. Type the command you'll remember from the old days, then run it:

```
LOAD "*",8,1
RUN
```

Boom, you're exploring Mordecoom.

## LOAD IT ON A REAL MEGA65 {#real-hardware}

1. Hold the **RESTORE** key for a couple of seconds to open the Freezer.
2. Mount the Roguecraft DX .D81 file.
3. Return to BASIC 65.
4. Use a wedge command to load the game. Thanks to the MEGA65's fast loading, it loads almost instantly.

## THE AUDIO, TLA APPROVED {#audio}

The audio is where the polish really shows. New music builds a chilling mood as you go deeper, paired with dual-SID music and sound effects. While I was testing the game in emulation from my lounge chair, The Lovely Accountant (TLA) looked over and said, "That game sounds fun." When a non-gamer notices the sound from across the room, you know the developers spent time on it.

## MY VERDICT {#verdict}

**9 out of 10 clucks.** Roguecraft DX is the MEGA65's current crown jewel. It has an addictive roguelike loop, funny touches like those demon chickens, great music and sound, and visual effects that stretch 8-bit limits. It's the killer app we've been waiting for on the MEGA65, and I can't wait to spend more time with it.

Try all three versions: Rogue4K, Rogue64, and Roguecraft DX. The MEGA65 is the only machine where you can play all three. I think this game will inspire more great games and apps for the MEGA65.

## CONCLUSION {#conclusion}

Roguecraft DX started as a 2.7KB charity competition entry and grew into a 240-color showcase of what the MEGA65 can do. Play it in XEMU today, and if it hooks you like it hooked me, it might be time to get a MEGA65. For more, check out my [MEGA65 playlist](https://www.youtube.com/playlist?list=PLRVBh2hjFTomsrJnQdqFmoZUdT6qHocpo).

Which hero are you playing: Warrior, Rogue, or Wizard? And how deep have you made it into Mordecoom? Let me know in the comments below. If this post helped, [leave a tip](https://paypal.me/stevencombs).

That's it for me, folks. 🕹️ retroCombs, OUT!
