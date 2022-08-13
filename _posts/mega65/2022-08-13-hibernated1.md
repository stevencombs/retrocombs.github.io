---
layout: post
title: 'Hibernated 1: The Director’s Cut for MEGA65'
date: 2022-08-13
author: 'Steven B. Combs, Ph.D.'
email: 'retrocombs@icloud.com'
comments: yes
permalink: hibernated1
category: mega65
---

During a 2022-08-07 live stream, I opened the first boxed software released for the MEGA65, PolyPlay's [Hibernated 1 - Director's Cut](https://www.polyplay.xyz/Hibernated-1-Directors-Cut-MEGA65_1) by Stefan Vogt. To see what's included in the box, watch the companion video below. After the livestream, it became apparent I should create a companion blog post that provides additional background. You will understand the rationale for my decision as you read.

![Box](https://www.polyplay.xyz/media/image/product/1668/lg/hibernated-1-directors-cut-mega65.jpg)

----

## Table of Contents

- [Table of Contents](#table-of-contents)
- [Support the Blog and Channel](#support-the-blog-and-channel)
- [Companion YouTube Video](#companion-youtube-video)
- [Video Errata](#video-errata)
- [Links Mentioned in this Video](#links-mentioned-in-this-video)
- [Introduction to Text Adventures](#introduction-to-text-adventures)
- [Introduction to Hibernated 1: The Director's Cut](#introduction-to-hibernated-1-the-directors-cut)
- [Start the Game](#start-the-game)
- [Gameplay](#gameplay)
  - [Shortcuts](#shortcuts)
  - [Customize the Screen](#customize-the-screen)
- [Interacting with the Developers](#interacting-with-the-developers)
- [More Game Play to Come](#more-game-play-to-come)
- [Join the Fun](#join-the-fun)

----

## Support the Blog and Channel

Check out the [supporters page](https://www.stevencombs.com/supporters) to learn about my amazing supporters and how you can join our community.

## Companion YouTube Video

Title: _Unbox and Play Hibernated 1 (Director's Cut) for MEGA65_

<div style="position:relative;padding-top:56.25%;"><p><iframe src="https://www.youtube.com/embed/LO8_Bxz8Fvs" frameborder="0" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true" style="position:absolute;top:0;left:0;width:100%;height:100%;"></iframe></p></div>

## Video Errata

None as of 2022-08-13.

## Links Mentioned in this Video

Below are the links I mention in this blog post and companion video. All Amazon links are affiliate links. I’d like to thank everyone for your support of the blog and the YouTube channel when you start your purchases here!

1. [Hibernated 1 - Director's Cut Boxed](https://www.polyplay.xyz/Hibernated-1-Directors-Cut-MEGA65_1)
2. [Hibernated 1 (Director's Cut) by Stefan Vogt Download](https://8bitgames.itch.io/hibernated1)

## Introduction to Text Adventures

Retro-computing fans know how to play a text adventure. Text adventure titles were popular back in the days of 8-bit computing. The 1977 [Infocom](https://en.wikipedia.org/wiki/Infocom) text adventure [Zork](https://en.wikipedia.org/wiki/Zork), inspired by [Colossal Cave Adventure](https://en.wikipedia.org/wiki/Colossal_Cave_Adventure), put text adventures on the map, inspired two sequels, and created a market for other publishers to get in the game (pun intended).

![Zork Box](https://upload.wikimedia.org/wikipedia/en/a/ac/Zork_I_box_art.jpg)

Text adventures are games of the mind and the worlds develop as you read the text presented on the screen. To play, you read about specific locations and objects. You move through the world and interact with objects, not with a joystick, but using keyboard commands. To move, use the command `go south`. Commands like `use key` or `open door` allow you to interact with the game objects. The `inventory` command display the items held. The more commands you learn, the more fun you have. Discovery is half of the fun—that is, understanding what commands and sequences the text adventure interpreter can parse.

## Introduction to Hibernated 1: The Director's Cut

Hibernated1 is a modern text adventure for retro systems from developer Stefan Vogt. Here's how he [describes the game](https://8bitgames.itch.io/hibernated1):

> Have you ever dreamed about a journey far beyond the known regions of the universe? Close to Alpha Centauri, Olivia Lund is on the trail of one of mankind's greatest secrets and a thousand-year-old mystery. After nearly 20 years in hyper-sleep, she wakes up alone on her stranded ship, the Polaris-7. The artificial intelligence Io seems to be her only remaining friend now.

![Hibernated MEGA 65 Start Screen](https://img.itch.zone/aW1nLzYwMTY3MTIucG5n/315x250%23c/0ArqUH.png)

> Hibernated 1 - This Place is Death (Director's Cut) is an Infocom style interactive fiction game. It's a complete rewrite of the classic, award-winning Hibernated game using Infocom's Z-machine standard, with tons of additional narrative content and riddles. If Infocom had been asked to recreate the classic Hibernated, the Director's Cut would have been the outcome.

I was not familiar with Hibernated 1. Released in 2018, Hibernated 1 is a sci fi story complete with space travel, hyper-sleep, AI, and aliens. This pushes my favorite buttons; retro-computing, text adventures, typing commands, and sci fi.

I may not have been familiar with Hibernated 1, but I played text adventures in the 1980s and loved every journey. And as someone who loves to draw, I created maps on grid paper of the adventures to document the areas and speed up navigation. I'm not sure the number of hours I spent playing these games, but can tell you, I had great late night adventures! 

When the Hibernated 1 box arrived, I couldn't wait to dive into the world and I knew I would share my first experience with the game during a livestream.

## Start the Game

After I unboxed the game, I started my adventure and the community in chat wanted to assist! Below are the steps to start the game:

1. Mount the .d81 disk image from the SD card using the Freezer or insert the floppy into the MEGA65.
2. If you use the floppy, type the `MOUNT` command to attach the floppy to drive 8, unless you have the floppy set as your default media in the MEGA65 configuration.
3. To start Hibernated 1, type `BOOT`. A graphic intro screen will load. 
4. Hit `⏎` or `␣`, watch the loader do its work, and then begin your adventure. 

The graphic screen intro is new to the director's edition and takes full advantage of the MEGA65's advanced graphics capabilities. It’s a nice touch and I look forward to future text adventures for the MEGA65 that include in-game images or even a full-fledge [SCUMM](https://en.wikipedia.org/wiki/SCUMM)-based point and click adventure game. It's more work to make these conversions, but the result would be fabulous!

## Gameplay

If you've played text adventures, you'll know what to do as soon as the game loads; however, Hibernated 1 has differences I cover below and these differences are part of the [Z-Machine interpreter](https://en.wikipedia.org/wiki/Z-machine), the same interpreter used for Zork. Z, Zork, get it?

> **NOTE:** The Z-Machine interpreter is like the Doom engine. There's a version for almost every device with a screen!

Instead of `north`, `south`, `east`, and `west`, the game instructions explain that these are not useful in space. Instead, use the nautical directions `port`, `starboard`, `fore`, and `aft`.

> **TIP:** the commands `north`, `south`, `east`, and `west` work as do their shortcuts `n`, `s`, `e`, and `w`.

These nautical commands make exploration more immersive, fun, and space-like. It's a nice touch but may confuse old text adventurers. Especially those without nautical experience. Ahoy, mate!

### Shortcuts

During my journey into the world of Hibernated 1, I discovered many command shortcuts and the ability to combine commands. Below are the shortcuts I've found:

- `p` = `port`
- `s` = not `starboard` but `south`
- `a` = `aft`
- `f` = `fore`
- `i` = `inventory`
- `l` = `look`
- `q` = `quit`
- `x` = `examine`

To combine commands, use the `,` character. For instance, to move starboard twice enter, `starboard,starboard` or to move starboard and then examine a suit, `s,x suit`

If you have other shortcuts or tips, please type them in the comments below and I'll update this post and provide proper attribution.

### Customize the Screen

Bitshifter, who helped convert the Z-Machine engine to the MEGA65, saw my livestream and sent me an email:

> Do you know that you can use the keys F1, F3, F5 and F7 for customizing the color scheme? When you leave the game with the "q" (quit) command, your color scheme will be saved in the CONFIG file and reloaded automatically when you run it next time.

The function keys below control the colors. Pressing each key cycles through the colors.

- F1 (Text)
- F3 (Top Bar)
- F5 (Border)
- F7 (Background)

When you have the preferred colors, use the in-game `save` command. As it saves the game progress, it will write the color values to the `CONFIG.SEQ` file. The next time you load the game, the software will restore the colors. To return to the default colors, delete the `CONFIG.SEQ` from the disk or disk image.

## Interacting with the Developers

Stefan Vogt and Bitshifter put this package together. Stefan created the original story and gameplay, while Bitshifter put together the MEGA65 Z-Machine interpreter and loader. During my adventures, I ran into two issues.

Use of the `save` and `restore` functions were the first issue. These commands would cause the MEGA65 to hang. I emailed Stefan, and to my surprise he copied Bitshifter, a MEGA65 developer who I had interacted with many times in the MEGA65 Discord. Less than 24 hours later, Bitshifter identified the error, and issued a fix. He substituted a `JSR` machine code instruction to a `JMP` in the interpreter.

The next day I found another error. Using the `restore` command with a file name not found on the disk caused the software to crash and display a garbled screen of characters. I sent the error to Bitshifter and he issued another fix. Stefan then updated the disk image download. If you have the boxed software and want to update your floppy disk, I share this process in the livestream.

We squashed out two bugs in less than 24 hours! That's almost unheard of with modern software companies. When was the last time you reported a bug that was corrected in under 24 hours? Bravo, Stefan and Bitshifter!

## More Game Play to Come

Members of my community have asked if I will fire up another livestream and play more Hibernated 1. I'm considering it. I had a blast playing a text adventure 30+ years later. Including the folks in chat during the livestream made it more fun. I won't finish the game during a livestream. That will take away the surprise for others and could harm sales of the game. But I am eager to once again enter the world of Hibernated 1 and look forward to the sequel coming later in 2022.

There's more boxed software on the way. I reached out to PolyPlay and asked about the next MEGA65 title, [Showdown - Collector's Edition - MEGA65](https://www.polyplay.xyz/Showdown-Collectors-Edition-MEGA65_1). Available for pre-order, PolyPlay said they would ship me a copy. When it arrives, I'll unbox it and play during a livestream. Make sure you subscribe to my [YouTube channel](https://www.youtube.com/stevencombs) and hit that alert button to receive the notification!

## Join the Fun

Don't miss the retro-computing fun. <font color="red">SUBSCRIBE</font> to my [YouTube channel](https://www.youtube.com/stevencombs) and check out [my other posts](https://www.stevencombs.com).

Help make this content better! Leave your comments, corrections, additions, and thoughts in the comments below. You can email me at [retrocombs@icloud.com](mailto:retrocombs@icloud.com). Thanks for reading and if you are inclined, please let others know about the blog using the hashtag #retroCombs.

🕹️ retroCombs, OUT!