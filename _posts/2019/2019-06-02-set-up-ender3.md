---
layout: post
title: Set up the Creality Ender-3 for first print
author: 'Steven B. Combs, Ph.D.'
email: steven.combs@gmail.com
date: 2019-06-02T00:00:00.000Z
category: 3dprinting
comments: 'yes'
---

In [my last post](https://www.stevencombs.com/3dprinting/2019/05/29/assemble-creality-ender3.html) I journaled my experience assembling my new [Creality Ender-3 3D printer](https://www.amazon.com/gp/product/B07H9T3H57/ref=as_li_ss_tl?ie=UTF8&psc=1&linkCode=sl1&tag=stevenccom-20&linkId=d9740afb59e8b51c16c9252eb48c07ba&language=en_US). As I mentioned in that post, I have never created a 3D print and have no idea what to do first. Luckily, a [video from 3D Printing Canada](https://youtu.be/N9aWBjbj3Ag) was just what the doctor ordered.

<iframe width="560" height="315" src="https://www.youtube.com/embed/N9aWBjbj3Ag" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="">
</iframe>

I'll follow along with that video and prepare my printer for its first 3D print. Like my previous post, this post will be in a journal format.

![First print animated .gif](/images/posts/2019-06-02-set-up-ender3/01ani.gif)

# 12:22 Aligning the base

There is a fair amount of wobble in my 3D printer. The steps to loosen the base brackets worked for me and I only had to loosen and tighten the left bracket.

# 12:41 Tighten the x-axis gantry idler

The video says I should not be able to rotate the idler by hand. I can, so I need to tighten it per the instructions. In my case, this means rotating the nut counter-clockwise. About a quarter turn and the roller is perfect. I can't move it with my fingers and the gantry moves up and down smoothly.

# 12:47 Level the build surface

This seems like a step I will need to do regularly so I need to pay attention to this one. I need a business card or a post-it note. Now where can I find one of those? Alright, have a post-in note and I need to feed a pet; be back in a bit.

Back to the video. Turn the printer on. Got it. Select _Prepare_ / _Auto home_ on the controller. Place the print head at one corner of the build surface on top of the bed level adjustment dial.

- Clockwise to move bed closer to print head
- Count-clockwise to move bed away from print head

I should be able to move paper under the print head but with some slight resistant. Okay, that seems right. Just a slight amount of drag as I pull and push paper between the print head and the build surface. Now I repeat for the remaining three adjustment dials.

![Leveling using paper](/images/posts/2019-06-02-set-up-ender3/01.jpg)

Next, I adjust the opposite corner. Since this was an out of the box leveling, it took some time to get it right and I had to repeat the process a couple of times. Still not sure its perfect, but I will get better over time.

# 13:02 Install PLA filament

The first step is to move the head high enough from the build surface so I can purge some of the filament:

Select _Prepare_ / _Move Axis_ / _Move Z_ / _40mm_ on the controller.

I'm going to use PLA filament, so I will preheat the bed and the nozzle for that material.

Select _Prepare_ / _Preheat PLA_ / _Preheat PLA_ on the controller.

The default temperature for Preheat PLA is 180° and the suggestion is to make it 200°. I'm going to change that setting and store 200° as the default setting.

Select _Control_ / _Temperature_ / _Nozzle:_ / _200°_ on the controller.

Select _Control_ / _Store settings_ / and wait for beep.

Now that the temperature is set to a new default, I'll wait for the temperature on the display to reach 200°.

![Print head at display at 200°](/images/posts/2019-06-02-set-up-ender3/02.jpg)

Time to load filament. I purchased a [MIKA3D three pack (black, white, and red)](https://amzn.to/2YZKwPs) from Amazon for around $30 when I used the online 5% off coupon. I'm going to start with red, because I want all my 3D printer upgrades (that I will print using the 3D printer) printed in red and give me a cool black and red theme.

{UPDATE: I changed my mind. I'm printing all upgrades in black to make them appear more like default accessories.}

![New red spool of material](/images/posts/2019-06-02-set-up-ender3/03.jpg)

Place the spool on the spool holder and be careful to not let the spool unwind on itself (which it almost did). Time to pull slightly enough filament off the roll so I can cut the end of the filament at a 45 degree angle. I get to use those nifty cutters supplied with 3D printer.

![Cutting the material](/images/posts/2019-06-02-set-up-ender3/04.jpg)

This next part appears a little tricky and the video is spouting out a bunch of terms like extruder lever, filament hole, extruder wheel, idler bearing, and PTFE tube! Problem is, the video doesn't show these items up close so I have no idea what the presenter is talking about. I'll give it a shot anyway. The premise seems to be; just push the filament through the tube until molten material comes out of the print head and on to the build surface.

![Feeding the material](/images/posts/2019-06-02-set-up-ender3/05.jpg)

What the devil? I can't get the filament into the filament hole. There seems to be blockage. Frustrated, I pulled out an Allen wrench with about the same diameter of the filament and I was able to push that all the way through. It must be that the filament's sharp point it snagging on a lip created by the connection of two parts.

Also of note, I need to barely push the extruder lever together. Too much and the filament will pushed out and away from the filament hole. Still struggling getting the filament through the hole. There must be some trick to this that I am missing.

Found [this Reddit](https://www.reddit.com/r/3Dprinting/comments/92qx9w/i_cant_get_the_filament_into_the_extruder_ender_3/) comment that helped. Thanks [mickeybob00](https://www.reddit.com/user/mickeybob00/)! Now I am able to push the filament through the tube and toward the print head, but alas, no material is coming through the print head! Oh, woe is me.

After a bit more pushing and fiddling with the filament, I finally have extruded filament! I just had to jiggle the feeder tube a bit at the print head, push the filament again into the tube and it started shooting out!

![Filament!](/images/posts/2019-06-02-set-up-ender3/06.jpg)

I removed the extruded material from the print head and the build surface. I think I'm ready for my first print!

# 13:20 First print

Didn't put the microSD card in the printer. Turing printer off, then on, and preheating the PLA again. Now I can try my first print.

{UPDATE: The 3D printer includes a refresh TF Card option. I could have used that instead of cycling the printer on and off.}

Per the video:

Select _Print from TF_ / _Test-dog.gcode_

Cool (reverse pun intended), the build surface heats up automatically based on the .gcode. Looks like 50°. Now the printer is homing automatically. And it's printing! This is a bit larger than I wanted. I may not complete the whole dog as it is burning through my red PLA. Everything seems to be working well though. Lunch time!

# 17:32 The print continues

Several house later and this dawg is still printing!

![Dog without head](/images/posts/2019-06-02-set-up-ender3/07.jpg)

In the meantime, I need to finish an Unbuntu install on an older i5 computer with 8Gb. I'll install 3D printing software [Cura](https://ultimaker.com/en/products/ultimaker-cura-software) and [FreeCAD](https://www.freecadweb.org/). I'll be using the appImage versions.

# 18:59 It's done!

5 hours and 41 minutes later (which the slicer predicted). Everything I read says to wait until the build surface and print cool completely before removing the print. I'm going to go out for a three mile run. Should be cooled down when I get back and cool off myself.

![Print complete on build surface](/images/posts/2019-06-02-set-up-ender3/08.jpg)

# 19:06 Changed my mind

Forgot that the build surface comes off the 3D printer. I removed the binder clips and build surface. I should be able to pop the print off by easily bending the build surface. Popped right off! No material left on the cover. Nice.

Only thing left do to is clean off the support material. I'm going to get another print started (a fan cover for the printer) and head out for a run before I do that though.

> **NOTE:** I changed the color of the filament. To do this, I had to turn the printer back on and heat the print head back to 200°. When I pushed the extruder lever and pulled the filament, it came right out. I then pushed enough black filament through to clean out the red.

# 20:03 Wife wants the dog

I showed the 3D print to Nikki and she wanted to help break off the support material and wants to put the dog on her desk. Love it! The dog is hers.

# Next day and summing up

The next day I've already found some issues. I was trying to print some upgrades and found that the base layer of my prints would not stick. I believe my build surface has already cupped in the middle. I cannot level the bed to get a good layer of filament down. While leveling is perfect underneath the spring levelers, when I move to the middle of the bed, there is too much room between the bed and the print nozzle.

After some research, this seems to be common. Especially if you bend the build surface to remove a print; which I have been doing. WARNING to new users, don't do that! The fix is to get a new build surface. I'm going to order a [Creality glass build surface](https://www.amazon.com/gp/product/B07DS2LZF1/ref=as_li_ss_tl?ie=UTF8&psc=1&linkCode=sl1&tag=stevenccom-20&linkId=9bf5df419865628287842890eb6dd9a3&language=en_US) to replace it. Glass will not warp and is recommended by many online. I'll let you know how it goes. Until it arrives, I have been able to print smaller objects. I modify the location of the model on the build surface, in Cura, to one of the quadrants of the build surface where there is less warpage. That works so far. I am printing a 3D printer upgrade part while I type.

I've learned a whole lot more about my printer since my previous post as well as what I should and shouldn't do in the future. The build surface issue would have happened eventually. It is just a shame that Crealty doesn't just include a glass build surface by default. The fact that I have to purchase another build surface adds an extra $20 to the total cost. Disapppointing. As long as that solution works, I feel I can still be happy with my purchase.

I hope this post helps other Crealty Ender-3 3D printer owners. Let me know in the comments below if I missed something or made an inaccurate statement.
