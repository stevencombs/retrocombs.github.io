---
layout: pages
title: Commodore Plus/4 Resource Page
permalink: plus4
category: retro
comments: false
tags:
  - commodore
  - plus4
  - retocomputing
  - manual
  - pi1541
  - programming
  - basic
  - tapuino
  - manual
---

This page is an ongoing resource for readers and watchers of my Commodore Plus/4 series. I encourage you to contribute to this project by commenting on [YouTube videos](https://www.youtube.com/stevencombs) or on individual [blog posts](https://www.stevencombs.com/retro).

![retroCombs Plus/4](/plus4/images/retrocombs-plus4.png)

***

**Page Contents**
<!-- TOC -->

- [Key to Keys](#key-to-keys)
- [Links to Posts](#links-to-posts)
- [Companion Disk Image](#companion-disk-image)
- [User's Manual](#users-manual)
- [Plus/4 Resources](#plus4-resources)

<!-- /TOC -->

***

## Key to Keys

Because the Commodore Plus/4 keyboard is so different from modern keyboards, I devised a modern key nomenclature to identify keystroke combinations as shown in the table below:

| Key     | Description   | Key  | Description |
|:--------|:--------------|:-----|:------------|
| `⇪`     | Caps Lock     | `F1` | Function 1  |
| `[C=]`  | Commodore     | `F2` | Function 2  |
| `⌃`     | Control       | `F3` | Function 3  |
| `⎋`     | Escape        | `F4` | Function 4  |
| `⌂`     | Clear/Home    | `F5` | Function 5  |
| `⌫`     | Insert Delete | `F6` | Function 6  |
| `⏎`     | Return        | `F7` | Function 7  |
| `[R/S]` | Run/Stop      | `F8` | Help        |
| `⇧`     | Shift         | `␣`  | Space       |
| `↑`     | Cursor Up     | `↓`  | Cursor Down |
| `→`     | Cursor Right  | `←`  | Cursor Left |

## Links to Posts

Below is a link to each blog post in the series. Each blog post contains the companion YouTube video and most include links to items or sites.

<ul id="blog-posts" class="posts">
{% for post in site.categories.plus4 %}
    <li><span>{{ post.date | date_to_string }} &raquo; </span><a href="{{ post.url }}">{{ post.title }}</a></li><div> {{ post.excerpt }} </div>
{% endfor %}
</ul>

## Companion Disk Image

As I progress through the user's manual, I enter and execute the sample programs. The link below is to a `.d81`.d64 image that below contains every program from each episode. **Currently, the image is not complete since we still have several chapters to go.**

[retroCombs User's Manual Disk Image](commodore-disk-images/plus4-users-manual.d81) - **UPDATED AS OF:** 2021-02-13

I use the following file name convention to make it easy to locate specific programs:

<img src="/images/design/floppy-disk-small.png" align="right">Sample Program Name: `02 RCOMBS SCROLLC1P2-5RETROCOMBS.PRG`

* `02C#` - where # is the chapter number
* `RCOMBS SCROLL` - my self assigned name for the BASIC program which will be immediately identifiable if you follow along.P#` - where # is the page number where the program is first referenced in the user's manual
* `NAME` - my self assigned name for the program

## User's Manual

In the Commodore Plus/4 YouTube series, I work through each chapter of the Plus/4 user's manual. I've scanned each chapter and provide those below. I will post new chapters with each new video.

1. [Front Matter](/plus4/users-manual/p4um-title-introduction.pdf)
2. [Chapter 1 - Unpacking and Setting Up](/plus4/users-manual/p4um-chapter-1.pdf)
3. [Chapter 2 - Using the Keyboard and the Screen](/plus4/users-manual/p4um-chapter-2.pdf)
4. [Chapter 3 - Using Software](/plus4/users-manual/p4um-chapter-3.pdf)
5. [Chapter 4 - Getting Started](/plus4/users-manual/p4um-chapter-4.pdf)
6. [Chapter 5 - Numbers and Calculations](/plus4/users-manual/p4um-chapter-5.pdf)
7. [Chapter 6 - Beginning BASIC Programming](/plus4/users-manual/p4um-chapter-6.pdf)
8. [Chapter 7 - Using Graphics and Color](/plus4/users-manual/p4um-chapter-7.pdf)
9. [Chapter 8 - Making Sound and Music on the Plus/4](/plus4/users-manual/p4um-chapter-8.pdf)

## Plus/4 Resources

Below are links I've found to be most beneficial as I work through this series:

1. ~~Commodore4Ever~~ - Sadly, the doors are closed on this business.
2. [The Future was 8-bit](https://www.thefuturewas8bit.com/) - Source for parts and used to provide resources for the Tapuino project. U.K. based so allow some time for delivery if in the U.S.
3. [RETRO Innovation](http://store.go4retro.com/) - Source for parts used for both the Tapuino and Pi1541 projects.
3. [Plus/4 World](http://www.plus4world.com/) - The most incredible source of Plus/4 information and software available. I don't know how the team does it, but if you have a Commodore C16, Plus/4, or 264, this is the site you must visit.

<!--
1. [Commodore Plus/4 User's Manual, Chapter 0 - Open the Box](/plus4-1)

    I share my first experience with a Commodore computer (it is not the Plus/4) and then open the box on my Commodore Plus/4 eBay purchase.

    * [Commodore Plus/4 Computer Wikipedia Entry](https://en.wikipedia.org/wiki/Commodore_Plus/4)
    * [Commodore Plus/4 Wiki](https://www.c64-wiki.com/wiki/Commodore_Plus/4)
    * [My blog](https://www.stevencombs.com/rss) (This site)
    * [My Twitter feed](https://www.twitter.com/stevencombs)
    * [My YouTube channel](https://www.youtube.com/stevencombs)

2. [Commodore Plus/4 User's Manual, Chapter 1 - Unpacking and Setting Up](/plus4-2)

    I open the Commodore Plus/4 manual for the first time and look at Chapter 1: Unpacking and Setting Up. Since the previous episode was an open the box, unpacking is already complete and this episode focuses on setting up the computer. Along the way I share a very cool tip.

    * [Kenable 5 Pin Male Din Plug to 4 x RCA Phono Male Plugs Audio Cable 2m (~6 feet)](https://amzn.to/3cvSq9t)
    * [Portable USB 2.0 AV/RCA Composite and S-Video Audio Video Capture Card Adapter VHS DVD](https://amzn.to/2Y0yKW3)
    * [PiDRIVE ZERO Raspberry Pi HAT pi1541 1581 Commodore 64 128 Vic-20 Emulator OLED](https://www.ebay.com/itm/PiDRIVE-ZERO-Raspberry-Pi-HAT-pi1541-1581-Commodore-64-128-Vic-20-Emulator-OLED/333491606262?ssPageName=STRK%3AMEBIDX%3AIT&_trksid=p2060353.m2749.l2649)
    * [RUN magazine](https://en.wikipedia.org/wiki/Run_(magazine))

3. [Commodore Plus/4 User's Manual, Chapter 2 - Using the Keyboard and the Screen](/plus4-3)

    I talk about the keyboard layout, using the keyboard, and then how keyboard combinations affect screen elements. This is really a "hands on" episode!

    * [PiDRIVE ZERO Raspberry Pi HAT pi1541 1581 Commodore 64 128 Vic-20 Emulator OLED](https://www.ebay.com/itm/PiDRIVE-ZERO-Raspberry-Pi-HAT-pi1541-1581-Commodore-64-128-Vic-20-Emulator-OLED/333491606262?ssPageName=STRK%3AMEBIDX%3AIT&_trksid=p2060353.m2749.l2649)
    * [uxcell 6 pin connectors 4 pack](https://amzn.to/3fe4huQ)

4. [Commodore Plus/4 User's Manual, Chapter 3 - Using Software](/plus4-4)

    I cover each auxiliary storage device in detail; however, I add a modern spin and instead of the original devices; I use a new [264 diagnostic cartridge](https://www.thefuturewas8bit.com/diag-264.html), a [Tapuino](https://www.stevencombs.com/tapuino-1), and a [Pi1541](https://www.stevencombs.com/pi1541-1).

    * [PiDRIVE ZERO Raspberry Pi HAT pi1541 1581 Commodore 64 128 Vic-20 Emulator OLED](https://commodore4ever.net/collections/drives/products/pidrive-zero-raspberry-pi-hat-1541-1581-commodore-64-128-vic-20-emulator-oled-pi1541)
    * [Pi1541 Setup](/pi1541-1)
    * [Create a Blank .d64 Disk Image](/pi1541-2)
    * [Tapuino Project](/tapuino-1)
    * [DIAG 264 Cartridge](https://www.thefuturewas8bit.com/diag-264.html)

5. [Commodore Plus/4 User's Manual, Chapter 4 - Getting Started](/plus4-5)

    It seems like we've been getting started over and over, but I guess now we really are since the manual told us so! In this chapter I look at keyboard colors, reverse printing, correcting mistakes, the screen, and even windows. Yes, that's right, I typed windows. See the blog post and video for more on that topic.

    * [Pi1541 Setup](/pi1541-1)
    * [Create a Blank .d64 Disk Image](/pi1541-2)
    * [Tapuino Project](/tapuino-1)
    * [Call out to Bil Herd for Information](https://twitter.com/StevenCombs/status/1299490942286811137?ref_src=twsrc%5Etfw)

6. [Commodore Plus/4 User's Manual, Chapter 5 - Numbers and Calculations](/plus4-6)

    In this chapter, _Number and Calculation_, I learn how to use the Plus/4 as a calculator in immediate mode, create a function, and learn more about working with numbers in Commodore BASIC 3.5. I even combine some things we learned in previous chapters to amp up our programs. It is a packed chapter and even though I'm no math teacher; I hope I do the concepts justice. This is one chapter where I find the User's Manual a bit lacking but adequate.

    * [Commodore Plus/4 User's Manual Series](https://www.stevencombs.com/plus4)
    * [TEDuino - A TED Series inspired Datasette powered by Tapuino](/teduino-1)
    * [The Tapuino Project](/tapuino-1)

7. [Commodore Plus/4 User's Manual, Chapter 6 - Beginning BASIC Programming](/plus4-7)

    In Chapter 6, _Beginning BASIC Programming_, of the Commodore Plus/4 user's manual, we begin where everyone should with their Commodore computer; learning the BASIC programming language. In previous chapters we have dabbled with BASIC; however, in this chapter, we dive in and learn the "basic" concepts you need to begin your BASIC programming journey.

    * [Commodore Plus/4 User's Manual Series](https://www.stevencombs.com/plus4)
    * [TEDuino - A TED Series inspired Datasette powered by Tapuino](/teduino-1)
    * [Pi1541 Assembly and First Use](https://www.stevencombs.com/pi1541-1)
    * [ Project](https://mega65.org/)
    * [ Dev Kit](https://shop.trenz-electronic.de/en/Products/MEGA65/)
    * [TheVIC20 - U.S. Listing](https://amzn.to/3l85VRh)
    * [THEVIC20 - U.K. Listing](https://amzn.to/3l7hZlB)

8. [Commodore Plus/4 User's Manual, Chapter 7 - Using Graphics and Color](/plus4-8)

    Our first significant foray into custom graphics, besides PETSCII, on the Plus/4 begins in this chapter; _Using Graphics and Color_. The Plus/4 and its sibling, the C16 did not include sprites or other custom chips to enhance graphics; however, it did include a custom BASIC commands not found on the VIC-20 or C64. The extra graphics commands and additional graphics modes make the Plus/4 whole lotta fun if you want to draw on your computer using a command language.

    * [Commodore Plus/4 User's Manual Series](https://www.stevencombs.com/plus4)

9. [Commodore Plus/4 User's Manual, Chapter 8 - Making Sound and Music on the Plus/4](/plus4-9)

    This last chapter in the user's manual takes us on a musical and noise infused journey through Commodore Basic and the Plus/4 `SOUND` and `VOL` commands. The Plus/4 was not capable of the amazing sounds that come from it's older brother and sister, the Commodore 64 or the 128. Heck, it wasn't even as capable as the earlier VIC-20; however, with a little effort and creativity, you can put the two channels to use in business applications; the primary market for the Commodore TED series.

    * [Pi1541 Setup](/pi1541-1)
    * [Create a Blank .d64 Disk Image](/pi1541-2)

-->
