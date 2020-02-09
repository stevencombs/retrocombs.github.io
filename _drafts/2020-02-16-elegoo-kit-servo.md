---
layout: post
title: 'VIDEO: Elegoo Arduino Starter Kit Servo Project'
author: 'Steven B. Combs, Ph.D.'
email: 'steven.combs@gmail.com'
date: '2020-02-16'
comments: 'yes'
category: arduino
tags:
  - arduino
  - elegoo
  - electronics
  - maker
  - video
---

Expanding on my previous unboxing and led and pushbutton Arduino projects, this post provides instructions to control a servo motor with an ELEGOO Mega Arduino board.




<p><iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/jY8Jj0Rim70" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

## Objective

Everything you need for this project, with Amazon links, is listed below:

1 - [Elegoo MEGA 2560](https://amzn.to/362vn2V): The MEGA is overkill but is the device I recommend for students. The additional digital I/O ports provide the option to create more complex projects.

1 - [USB Cable](https://amzn.to/2uX7xst): Use to upload code from the Arduino IDE and to provide power to the MEGA.

1 - [Arduino IDE](https://www.arduino.cc/en/main/software): Use the link to the left and follow the instructions to download and install the IDE on your computer.

1 - [Elegoo Breadboard](https://amzn.to/377CB7e): Use the breadboard to prototype the project.

1 - [1k Ω (ohm) resistor](https://amzn.to/2u8s8Ke): Connect this resistor between the power source and the LED. This resistor is larger than necessary but will ensure we protect our LED when we apply power. The color code for a 1K Ω resistor is Brown, Black, Red, and Gold.

5 - [Male to male breadboard jumper wires](https://amzn.to/2ufQf9z): Prototyping on the breadboard a snap with these wires!

1 - [Small 5" needle nose plyers](https://amzn.to/2G003Hy) (optional): Use to resistor legs. More tips in the video.

1 - [Volt/Ohm multimeter (optional)](https://amzn.to/2ufV9mZ): Optional but you should own one!

> **NOTE:** If you don't want to source the electronic parts individually, purchase the [$59 Elegoo MEGA 2560 Most Complete Starter Kit](https://amzn.to/2Rqsio6). It contains everything you need for this exercise and much, much, more! It's a great value and is often on sale. You can even [view a video I produced](https://youtu.be/jY8Jj0Rim70) that shows and explains the contents of this kit.

![Supplies for this project](/images/posts/2020-01-20-adruino-switch-led/project-supplies.jpg)








## Upload to Mega

Uploading the code is easy; if the Arduino IDE is installed and setup properly.

1. Select _Tools_ / _Board_ from the Arduino IDE.
2. Select the _Arduino/Geninuino MEGA or MEGA 2560_ from the Arduino boards available.
3. Select the serial port used to connect the Arduino to the computer. This will vary based on computer and operating system.
4. Select the upload button in the Arduino IDE toolbar menu (⮊).

If the program contains no errors, the IDE will compile the code and send it to the MEGA.
