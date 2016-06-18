---
layout: pages
title: Raspberry Pi Presentation
comments: yes
---

<img class="category" src="http://www.stevencombs.com/images/design/embedded.svg" />
On June 17th, I was the guest speaker for our local [Columbus area Chamber of Commerce TANK Talk](https://www.facebook.com/events/1271805972849192/). I was asked to give a presentation about the Raspberry Pi and its use in physical computing, making and education. I decided to expand the presentation to include other physical computing devices such as the Arduino and a Kickstarter project. This page collects my online presentation as well as additional notes, images and links. It will also become a clearing house for additional information I will include in future Raspberry Pi presentations.

## Presentation

<iframe src="https://docs.google.com/presentation/d/10fMnVYXXvyr7c9OVoYEU8KGW-8GPnJ0iVIjMvlUsTvI/embed?start=false&amp;loop=true&amp;delayms=3000" frameborder="0" width="640" height="389" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true">
</iframe>

## Links
Below are links referenced during my presentation or links that supplement questions and/or discussions.

### Introductory Information
* [View presentation slides full screen](https://docs.google.com/presentation/d/10fMnVYXXvyr7c9OVoYEU8KGW-8GPnJ0iVIjMvlUsTvI/edit?usp=sharing) - slides above are a bit small and this link will take you to a full screen version.
* [Physical computing Wikipedia entry](https://en.wikipedia.org/wiki/Physical_computing) - learn more about physical computing.

### Raspberry Pi
* [Download Raspbian operating system (advanced) or Noobs (beginner)](https://www.raspberrypi.org/downloads/) - Download the operating system (OS) that powers the hardware. Instructions included; however, for beginners, I recommend the Noobs download. Simply download, copy to an SD card, put the SD card in the Raspberry Pi and plug in the power.
* [Purchase Kano kit for kids](http://amzn.to/1TDB78B) - Excellent kit, including curriculum, to introduce children to the Raspberry Pi. All you need is a monitor.
* [Purchase CanaKit for teens or adults](http://amzn.to/1rKmhV6) - This kit is a bit more advanced and includes components to connect to the GPIO. A great starter kit.
* [Purchase CanaKit barebones kit](http://amzn.to/1SDKgik) - perfect if you just want tinker and have an extra keyboard and monitor/TV laying around.

### Programming
* [Learn more about Scratch](https://scratch.mit.edu/) - Learn about scratch and even try it out on your own computer or in your browser.
* [Learn basic coding skills interactively](http://www.code.org) - Learn how to code with these simple and fun tutorials. Will take you from beginning to advanced concepts.

### Arduino
* [Purchase an inexpensive physical computing device, the Arduino](http://amzn.to/269vWTI) - At $10 (cable included!), you can't go wrong.
* [Program the Arduino using Codebender](https://codebender.cc/home) - You will need to use the [Chrome browser](https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=0ahUKEwiJh_uk97HNAhUYV1IKHbrLB2AQ0EMIJA&url=https%3A%2F%2Fwww.google.com%2Fchrome%2Fbrowser%2F&usg=AFQjCNG19iEVK3TZqhAHQwzOx8ulYv7V8g&sig2=kEIz916WjSGpoOSkZnZV7g&bvm=bv.124817099,d.aXo), but this is by far the easiest interactive development environment (IDE) to use and my go to IDE for Arduino programming.
* [My Codebender page](https://codebender.cc/user/stevencombs) - My Codebender projects and samples. Updated regularly as projects appear on my workbench.

### Get Inspired
* [Raspberry Pi Foundation](https://www.raspberrypi.org/) - Home of all things Raspberry Pi.
* [Subscribe or download FREE issues of MagPi magazine](https://www.raspberrypi.org/magpi/) - Excellent paper and PDF magazine that inspires and keeps you up to date on the latest Raspberry Pi news.
* [Learn with adafruit](https://learn.adafruit.com/) - adafruit is also an excellent supplier of physical computing devices, tools, resources and equipment.

### One more thing...
* [C.H.I.P.](https://www.getchip.com/) - View this page to learn why I am excited about this new $8 Kickstarter physical computing platform. When the C.H.I.P. arrives, additional information will appear on my [embedded systems page](http://www.stevencombs.com/embedded.html).
* [Pocket C.H.I.P.](https://www.getchip.com/pages/pocketchip) - Place the C.H.I.P. into a handheld keyboard/LCD screen combinations and you have the perfect on the go physical computing or gaming development platform (see video below).

<iframe width="649" height="389" src="https://www.youtube.com/embed/W3qkdB5bzLY" frameborder="0" allowfullscreen></iframe>

## My Raspberry Pi blog posts (list updates automatically)
<ul id="blog-posts" class="posts">
{% for post in site.categories.raspberrypi %}
    <li><span>{{ post.date | date_to_string }} &raquo;</span><a href="{{ post.url }}">{{ post.title }}</a></li>
{% endfor %}
</ul>

## Images
Below is a teaser image used to promote the presentation.

![Getting ready for the presentation](https://scontent.ford1-1.fna.fbcdn.net/t31.0-8/13482925_10154251193643839_5171870026505777217_o.jpg)

Discussing the 8-bit days of computing during the presentation

![Discussing the 8-bit days of computing during the presentation](https://scontent.ford1-1.fna.fbcdn.net/v/t1.0-9/13434725_1033657290004039_7940487692931619442_n.jpg?oh=86a9c0760405a435ada7c54c7fe739d7&oe=57D45ACB)

## Feedback

Have a questions or want to send feedback? You can [send me email](mailto:steven.combs@gmail.com) or use the comments section below.
