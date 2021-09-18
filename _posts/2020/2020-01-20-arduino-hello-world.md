---
layout: post
title: 'BUILD & CODE: Arduino Hello World! (build-code-operate)'
date: 2020-01-20
author: 'Steven B. Combs, Ph.D.'
email: 'steven.combs@gmail.com'
comments: 'yes'
category: arduino
permalink: arduino-hello-world
tags:
  - buildandcode
  - arduino
  - ide
  - programming
  - electronics
  - physicalcomputing
  - led
  - elegoo
  - tutorial
---

A project that brand-new Arduino users often complete is to connect an LED to the board and create a program to turn on the LED. This is the Arduino's equivilent of the programmer's ["Hello World!"](https://en.wikipedia.org/wiki/%22Hello,_World!%22_program)" I wanted the first student project, for a [course I am teaching](https://bit.ly/sbc-design-thinking), to be similar but with a "logic programming" spin that intergrates more hardware and programming fundamentals.

I developed a simple project and one that has been replicated many times; however, this post and associated video will explain each step along the way to allows students to accelerate their understanding of physical computing.

This post includes the components, files, images, video, resources, and steps necessary to recreate the project.

## Objective

Using an [Elegoo branded Arduino MEGA 2560 (MEGA) (#ad)](https://amzn.to/362vn2V) and various electronic components, create a hardware and software solution that will turn on an LED when a momentary button is pressed and then turn off the LED when the button is pressed again (see video below).

![Animated GIF of objective](/images/posts/2020-01-20-adruino-switch-led/led-switch-demo.gif)

## Video

Below is a step-by-step video I produced for this project.

> **CORRECTION:** In the video I state that the `int` command is initialize. It is not. This command initializes an integer variable.

<div style="position:relative;padding-top:56.25%;">
  <p><iframe src="https://www.youtube.com/embed/FcK--sJlcJI" frameborder="0" allowfullscreen
    style="position:absolute;top:0;left:0;width:100%;height:100%;"></iframe></p>
</div>

## Bill of Materials (BOM)

All equipment for this project, with Amazon links (#ad), is listed below:

1 - [Elegoo MEGA 2560](https://amzn.to/362vn2V): The MEGA is overkill but is the device I recommend for students. The additional digital I/O ports provide the option to create more complex projects.

1 - [USB Cable](https://amzn.to/2uX7xst): Use to upload code from the Arduino IDE and to provide power to the MEGA.

1 - [Arduino IDE](https://www.arduino.cc/en/main/software): Use the link to the left and follow the instructions to download and install the IDE on your computer.

> **NOTE:** If you use Ubuntu or Ubuntu Mate might I recommend [my install instructions](https://www.stevencombs.com/arduino/2019/12/31/install-arduino-ubuntu.html).

1 - [Elegoo Breadboard](https://amzn.to/377CB7e): Use the breadboard to prototype the project.

1 - [Momentary push-button switch](https://amzn.to/2uZLGkd): This tiny push-button switch makes a click when pressed and is perfect for the breadboard. The MEGA has a push-button switch. It serves as a device reset.
https://www.youtube.com/embed/FcK--sJlcJI
1 - [Diffused White LED](https://amzn.to/3amlfFv): A standard white LED with a  frost cover to diffuse the light.

1 - [1K Ω (ohm) resistor](https://amzn.to/2u8s8Ke): Connect this resistor between the power source and the LED. This resistor is larger than necessary but will ensure we protect our LED when we apply power. The color code for a 1K Ω resistor is Brown, Black, Red, and Gold.
https://www.youtube.com/embed/FcK--sJlcJI
> **NOTE:** The red band is often hard to discern, especially if your resistor is blue. If you are unsure, use a Volt/Ohm meter to verify the value. Set the meter to 2k and connect the black lead to the COM port on the meter and the red lead to ΩV port.

5 - [Male to male breadboard jumper wires](https://amzn.to/2ufQf9z): Prototyping on the breadboard a snap with these wires!

1 - [Small 5" needle nose pliers](https://amzn.to/2G003Hy) (optional): Use to insert resistor legs into the breadboard. More tips in the video.

1 - [Volt/Ohm multimeter (optional)](https://amzn.to/2ufV9mZ): Optional but you should own one!

> **NOTE:** If you don't want to source the electronic parts individually, purchase the [$59 Elegoo MEGA 2560 Most Complete Starter Kit](https://amzn.to/2Rqsio6). It contains everything you need for this exercise and much, much, more! It's a great value and is often on sale. You can even [view a video I produced](https://youtu.be/jY8Jj0Rim70) that shows and explains the contents of this kit.

![Supplies for this project](/images/posts/2020-01-20-adruino-switch-led/project-supplies.jpg)

## Circuit

Below is a Fritzing image that serves as instructions for project assembly. Watch the video if you don't understand a step or two in the process.

![Project components](/images/posts/2020-01-20-adruino-switch-led/mega-switched-led-components.svg)

[Download Fritzing file](/images/posts/2020-01-20-adruino-switch-led/mega-toggle-led.fzz).

## Programming

Once the components are placed and wired, code the project in the [Arduino IDE](https://www.arduino.cc/en/main/software). Below is the code for this project. Do not copy and paste. Type the code and include your own comments (`//`) to explain each line. These comments will remind you later what each line accomplishes.

<script src="https://gist.github.com/stevencombs/b988f757c5ffd8cc99d3177b56b62118.js"></script>

[Download the code](/images/posts/2020-01-20-adruino-switch-led/mega-toggled-led.ino).

[View code as GIST that includes comprehensive comments](https://gist.github.com/stevencombs/b988f757c5ffd8cc99d3177b56b62118).

## Upload to Mega

Uploading the code is easy; if the Arduino IDE is installed and setup properly.

1. Select _Tools_ / _Board_ from the Arduino IDE.
2. Select the _Arduino/Geninuino MEGA or MEGA 2560_ from the Arduino boards available.
3. Select the serial port used to connect the Arduino to the computer. This will vary based on computer and operating system.
4. Select the upload button in the Arduino IDE toolbar menu.

If the program contains no errors, the IDE will compile the code and send it to the MEGA.

## Operation

Press the button to verify the LED turns on. Press the button again to verify the LED turns off. If you do not see the desired results, verify the code, make necessary changes, and upload the program again. Troubleshooting is a part of the learning process.

## Summing Up

Hopefully this project was a great way to learn more about the MEGA, the Elegoo kit components, and the Arduino IDE. I would love to read your comments. If you have any, drop them in the comments section below.

## References

Below are the references for this project:

1. [Arduino button tutorial](https://www.arduino.cc/en/tutorial/button)
2. [LED resistor calculator](https://www.digikey.com/en/resources/conversion-calculators/conversion-calculator-led-series-resistor?_ga=2.47531951.968511582.1579365631-286915608.1579365631&_gac=1.181821269.1579365633.Cj0KCQiA9orxBRD0ARIsAK9JDxTauk9R4xTKrslBCN1JgI0T9SqCEZ2rH3MH9jL-MBPtQopC1jNAoK4aAiXiEALw_wcB)
3. [Resistor color code calculator](https://www.digikey.com/en/resources/conversion-calculators/conversion-calculator-resistor-color-code-4-band)
