---
layout: post
title: 'Creality Ender-3 build surface upgrade'
author: 'Steven B. Combs, Ph.D.'
email: 'steven.combs@gmail.com'
date: 2019-06-08
category: 3dprinting
comments: yes
---

I mentioned in my [last post][printer-setup] that my new Creality Ender-3 3D printer build surface is warped. I blame myself because when I removed fresh prints, I would often bend the build surface slightly to remove the new print. I learned quickly, DON'T DO THAT, STUPID! Because my build surface seems irreparably damaged, I ordered the replacement below for around $20.

[Creality Upgraded 3D Printer Platform Heated Bed Build Surface Glass Plate][build-surface]

This post shares my experience replacing the old build surface with the one above.

# Research
I reviewed several options to replace the warped build surface. The build surface originally included with the Ender-3 is made of plastic. 

![The original plastic bed][plastic-bed-flipped]

I still don't understand how the material warped in the middle (I guess the knowledge I gained in my college materials class in the 1980s left me years ago). The first three prints were perfect but the fourth would not stick to the build surface even after several attempts at leveling.

I know the problem is a warped build surface because there is cupping in the middle causing the center of the build surface to be further away from the extruder than the corners of the build surface above the adjustment springs. This is a problem because I cannot get the first layer of any print to stick. If I move my prints from the center of the build surface to one of the quadrants above the adjustment springs, I can coax a print but that won't work for larger prints and is just not optimal.

Online, almost everyone recommends a glass surface. Off I went researching glass build surfaces. Glass comes with some challenges. Many recommend to first coat the build surface with hair spray (something I haven't needed since the 1980s) or a glue stick (1970s) to make the first layer print. That doesn't seem like something I want to keep fooling with for each print and I can only imagine the clean up afterward. Another option is cover the build surface in painter's tape (we finally hit the 2010s!). Again, not optimal, but will keep that in mind.

What I thought would be the perfect solution is for a glass plate to have the texture of the original build surface (see image below); which worked well before the warp incident.

![The original plastic bed build surface][plastic-bed-surface]

After more research, I discovered that Creality produces what I was looking for in an item they call the [Creality Upgraded 3D Printer Platform Heated Bed Build Surface Glass Plate][build-surface]. That's a mouthful, but seemed to be what I was looking for; however, reviews are mixed. Some reviewers said this was the best build surface since sliced bed (although I wouldn't recommend sliced bread), others stated they had issues with longevity, while others didn't seem to know what they were doing in the first place. Overall, it was a four-star review. My minimum rating for a purchase. Add to cart, proceed to checkout, and ordered!

# Arrival
I used the Amazon postponed shipping feature and had the item delivered several days later since I was going to be out of town. It arrived in a nicely packaged box as shown below.

![Creality upgraded build surface shipping package][shipping-package]

I opened the box and the build surface was suitably protected for shipping as shown below.

![Packaged material][package-material]

I peeled the protective coating off of the glass plate and it felt heavy and substantial. The top of the plate included a surface texture designed to make the filament stick as shown below.

![Build surface texture][surface-texture]

The next step was to replace the old build surface.

I also just noticed something. My plate is not screened with the same logo found on the [Amazon page][amazon-link]. Wonder what, if anything, that means for quality.

# Installation
Installation should (and I just jinxed it) be super easy. Remove the binder clips. Remove the old build surface. Replace with new build surface. Replace binder clips.

Houston, we have a problem (See, told you I jinxed it)! The new glass plate is thicker than the original build surface and small binder clips no longer fit. Sure enough, I don't have any medium size binder clips laying around. Really, Creality? You couldn't include 15¢ clips with the $20 glass plate that probably cost $5 to produce?

Okay, I need to figure out how I can use this build surface. One of the great things about owning a 3D printer is that you can print what you don't have.

# Printing new clips

I found a [surface build clip][clip] on [Thingiverse][thingiverse] by [Jonesey44][jonesey] that is supposed to be designed for the glass build service I have. I loaded up the model in Cura and made three copies. When printed, I should have four working clips. I'm printing them now. It will take about 30 minutes at normal quality.

![Printing the four clips from Thingiverse][clips-prints]

You are probably asking how I am printing if I don't have clips for the new build surface. I'm using the original build surface using the tip above (printing on a corner).

Clips are done and now it is time to give them a try. They fit nicely.

![New printed clips on the glass build surface][clips-done]

I backed the levelers WAY down since the glass surface is much thicker than the original build surface. Next I homed the extruder. I had to be very careful to ensure the extruder had enough clearance on all corners of the build surface before I began leveling. I used the 3D printer controller knob and moved the extruder slowly to all four corners first and then returned to my original front-left corner to begin leveling. Leveling seems perfect and there doesn't appear to be any issue with the center of the plate. Looks like we might have a winner here.

With the bed level, I am ready to print on my new glass build surface.

> Note to self: I wonder how well these clips will hold up on the bed once heated. Will they lose their grip over time? The first time? I don't believe they will be a long term solution.
> 
> {UPDATE: Yep, they didn't work for more than one print. Heat was too much and they are now loose. Using a more heat resistant material than PLA may be an option. For now, I need to find medium binder clips.}

# First use
I decided to print a part I actually need for a retro computer project I'm working on; the restoration of a Commodore VIC-20. The keyboard has several broken keyboard plungers. I'll print a single one to test the bed and the plunger 3D file from Thingiverse. PLA and bed all warmed up. Here we go.

{UPDATE: the model needs work. Plunger falls out of the key. I'll likely end up modifying the model or creating my own. Slightly scaling the model in Cura a few percentage points might also be a solution.}

Oops. The extruder hit the front-right clip while homing and actually made a divot in the clip. Maybe I should just let it do that a few more times and it will carve out a nice channel.

The print began dead center on the build surface and everything on the base layer seems to be sticking on this rather small and complicated print. So far so good. I'll be back in 20 minutes.

# Remove the print
The print is complete and it looks great!

![The first print on the new build surface][print-complete]

The model adhered to the bed and as the bed is cooling, the material is releasing. As suspected, when it cooled to around 45°, the model simply popped off and it was even easier to remove than any model printed on the original bed.

# Short term review
Let's take a quick look at the pros and cons of this glass build surface from Creality.

## Pros
Here's what makes the glass build surface a must buy:

* inexpensive
* packed well
* looks good
* includes texture to help filament stick to build surface
* includes the Creality logo on the surface so it looks stock
* easy to install
* easy to level
* no apparent warping after a few prints
* VERY easy to remove print once surface cooled down to around 45°

## Cons
Below are items that might be a draw back for some, but in my case, not enough to not recommend (was that a double negative?):

* other's might think it is a bit pricey since you can get a piece of glass for about half the price; however, it won't be textured like this build surface
* original small binder clips don't work due to thickness of glass plate
* no alternative clips provided

For now, I would rate the [Creality Upgraded 3D Printer Platform Heated Bed Build Surface Glass Plate][build-surface] a winner.

# Long term review
I will post a long term review at a later date; probably in a couple of months or so. I'll be sure to add an item in Todoist to make sure I come back to this so you know if after several prints the build surface it performing as well as it did out-of-the-box.

# Summary
If you are still using the original Creality build surface and it is working, don't buy this upgrade. If you've been using the original build surface and it's hard to level, cupping in the middle, or the filament is not sticking, I highly recommend this upgraded glass build surface. Time will tell if I continue to recommend and I'm hoping I don't have to come back and modify this original and glowing review.

Do you own this build surface and have another or long-term experience? Drop me a comment below.


[amazon-link]: https://amzn.to/31gy9R4
[printer-setup]: https://www.stevencombs.com/3dprinting/2019/06/02/set-up-ender3.html
[clip]: https://www.thingiverse.com/thing:3045991
[thingiverse]: https://www.thingiverse.com
[jonesey]: https://www.thingiverse.com/Jonesey44


[plastic-bed-flipped]: /images/posts/2019-06-07-creality-ender3-build-surface-upgrade/01.jpg
[plastic-bed-surface]: /images/posts/2019-06-07-creality-ender3-build-surface-upgrade/02.jpg
[shipping-package]: /images/posts/2019-06-07-creality-ender3-build-surface-upgrade/03.jpg
[package-material]: /images/posts/2019-06-07-creality-ender3-build-surface-upgrade/04.jpg
[surface-texture]: /images/posts/2019-06-07-creality-ender3-build-surface-upgrade/05.jpg
[clips-print]: /images/posts/2019-06-07-creality-ender3-build-surface-upgrade/06.jpg
[clips-done]: /images/posts/2019-06-07-creality-ender3-build-surface-upgrade/07.jpg
[print-complete]: /images/posts/2019-06-07-creality-ender3-build-surface-upgrade/08.jpg