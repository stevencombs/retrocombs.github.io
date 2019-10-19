---
layout: post
title: 'Raspberry Pilus/4'
date: 'August 12, 2018'
comments: 'yes'
categories:
  - commodore
---

One day I'll write a post about my first experiences with Commodore computers. For now, I want to share my latest project; the conversion of a Commodore Plus/4 case and keyboard into what I am calling the Raspberry Pilus/4. This was not an overnight project and took some time to complete. The majority of the time was spent waiting for products to ship from Europe.

# Build List
1. [Commodore Plus/4 case with keyboard][1]
2. [TME DS1020-18RT1D - Connector: FFC (FPC); angled 90°; PIN:18][2]
3. [Individual Computers Keyrah V2][3]
4. [Raspberry Pi 4][4]
5. [Creatlity Ender-3 3D Printer][5]
6. [microSD Extender][]
7. [micro HDMI extender][]

# Software
1. [Sketchup on the Web][]
2. [Cura][]

I'm so excited to share this project and it is one that has been in the making for a couple of year now. Persistence was key to the completion of the this project.

# Secret Sauce - The Keyrah V2
While I appreciate Individual Computers’ production of the Keyrah V2, there are no detailed instructions for installation of the device into a Commodore Plus/4. While you can find projects that use the device inside other Commodore computers such as the C-64, VIC-20, and various AMIGA models, a little know addition to the Keyrah allows the use of the device inside a Plus/4 and a C-16. The instructions I provide will take some of the mystery out of this process.

## Preprare the Keyrah
The Keyrah works for many vintage commodore computers. There are many instructions and video available for Commodore C64 and Amiga computers online; however, while the Keyrah will support a commodore Plus/4 and C116, it is difficult to find instructions on how to interface with these computers.

For the Plus/4, the first thing you must do is cut off the provided C116/Plus4 connector attached to the board. Turns out that the C116/Plus4 uses a different keyboard connector than the one found on a C64. The Plus/4 uses a flat-ribbon cable.

Cutting through this fiberglass board is not an easy task. While I could have used a Dremel tool, I feared that would be too much cutting tool and I might harm the board.

Instead, I choose to cut the board with a large [Excto Knife](Amazon link here). It took some back and forth slicing, but I slowly scored the board so that I could break the piece off cleanly. The edges were a bit rough after I'd broken off the piece so I cleaned them up so I wouldn't get fiberglass splinters.

## Solder FFC (FPC) Connenctor to the keyrah
Once the provided C116/Plus4 connector is removed from the Keyrah, you can now solder an FFC/FPC connector. This was again a challenge, because there were no instructions provided...ANYWHERE! This post will take care of that.

I also soldered a [19 pin breakaway header](amazon link) on the other side of the expasion board so I can plug the whole thing together. Once again, I scored the header and then broke off the pins I needed.

Once I had the 19 pin I needed, I then removed the pin that would not be used (the second from the right) using a pair of needle nose plyers.

Now that I had the connectors ready, I tested the fit and then soldered both headers to the expansion board.

[Testing the Fit](Insert Image)



[1]: https://en.wikipedia.org/wiki/Commodore_Plus/4/
[2]: https://www.tme.eu/en/details/ds1020-18rt1d/connectors-ffc-fpc-254mm/connfly/
[3]: https://icomp.de/shop-icomp/en/shop/product/keyrah-v2.html
[4]:
[5]:
