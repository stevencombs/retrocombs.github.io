---
layout: post
title: "HOWTO: My Arduino Esplora came with the wrong joystick knob"
date: "2014-07-27"
author: 'Steven B. Combs, Ph.D.'
email: 'retrocombs@icloud.com'
category: arduino
comments: true
---

I recently purchased an [Arduino Esplora](http://www.amazon.com/gp/product/B00CMCM688/ref=as_li_ss_tl?ie=UTF8&camp=1789&creative=390957&creativeASIN=B00CMCM688&linkCode=as2&tag=stevenccom-20) from our local Radio Shack. I chose the Shack because I had a $10 coupon. So after my $10 off, I did pretty well on the purchase.  I opened the box and ran through the setup instructions found on the [Arduino Esplora page](http://arduino.cc/en/Main/ArduinoBoardEsplora). All went until I tried to attach the provided joystick knob to the joystick post. Seems I have a “round peg in a square hole” problem as shown in the images below taken by [Nick Gammon](http://forum.arduino.cc/index.php?action=profile;u=36095) from the [Arduino Esplora Forum](http://forum.arduino.cc/index.php?topic=144164.0).

![Round Page](http://www.stevencombs.com/images/posts/2014-07-27-RoundPeg.png)![Square Hole](http://www.stevencombs.com/images/posts/2014-07-27-SquareHole.png)

As Arduino Forum member [roundhouselabs](http://forum.arduino.cc/index.php?action=profile;u=68073) explained, there are two types of knob connections and the folks at Arduino made a mistake while packing some units. As an example of the two knob types, he shared the image below:

![Two knob types](https://lh4.googleusercontent.com/-gq4S5B0u8Ps/UQQ8dg8ZKgI/AAAAAAAAHIQ/cCsPAbdWYLo/s288/IMG_20130126_151311.jpg)

There is no way the Arduino Esplora joystick post will fit into the small rectangular hole on the knob I received. So what's a guy to do? Take it back to the Shack? Nope. Time to break out the power hand drill. I began using small bits to ream out the square until I had a small circle leading up to a 5/32” bit. That seemed to be the perfect size diameter and once I placed the knob on the post, it was worked well, expect for one small issue. I drilled the hole too deep.

I was unable to press the joystick down to activate the center button. So I grabbed some of the shavings and pushed them back in the hole with the drill bit. Finally, I heated the drill bit for a final tamping of the shavings and melted them. **Remedy this and place a marker on your drill bit at 1/8”**.

Not sure why my Arduino Esplora came with the incorrect knob, but it does seem to be a [common problem](http://forum.arduino.cc/index.php?topic=144164.0). Evidently the quality control folks at Arduino need to have a look at some of their boxes before shipping them. Anyway, it did provide me with a bit of hacking today and if you get down to it, isn't that whole point of the [Maker movement](http://en.wikipedia.org/wiki/Maker_culture)? That's it for now. Time for me to explore the capabilities of the Esplora.

![Arduino Esplora](http://farm9.staticflickr.com/8044/8134573901_63952a4f17.jpg)
