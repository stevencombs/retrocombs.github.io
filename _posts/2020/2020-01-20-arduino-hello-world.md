---
layout: post
title: 'VIDEO: Arduino Hello World! (build-code-operate)'
date: 2020-01-20
author: 'Steven B. Combs, Ph.D.'
email: 'steven.combs@gmail.com'
comments: 'yes'
categories:
  - arduino
tags:
  - arduino
  - ide
  - programming
  - electronics
  - physicalcomputing
  - led
  - elegoo
---

A project that brand-new Arduino users often complete is to connect an LED to the board and create a program to turn on the LED. This is the Arduino's equivilent of the programmer's ["Hello World!"](https://en.wikipedia.org/wiki/%22Hello,_World!%22_program)" I wanted the first student project, for a [course I am teaching](https://bit.ly/sbc-design-thinking), to be similar but with a "logic programming" spin that intergrates more hardware and programming fundamentals.

I developed a simple project and one that has been replicated many times; however, this post and associated video will explain each step along the way to allows students to accelerate their understanding of physical computing.

This post includes the components, files, images, video, resources, and steps necessary to recreate the project.

## Objective

Using an Elegoo branded Arduino MEGA 2560 (MEGA) and associated electronic components, create a hardware and software solution that will turn on an LED when a momentary button is pressed and then turn off the LED when the button is pressed again (view or download video below).

<a href="/images/posts/2020-01-20-adruino-switch-led/VID_20200118_180203.mkv" title="Link Title"><img src="/images/posts/2020-01-20-adruino-switch-led/video-thumbnail.png" alt="Video Demonstration" target="new"/></a>

## Video

Below is the step-by-step video I produced for this project.

<p><iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/FcK--sJlcJI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>
<br>

## Supplies

Everything you need for this project, with Amazon links, are listed below:

1 - [Elegoo MEGA 2560](https://amzn.to/362vn2V): The MEGA is overkill for this project but is the device I recommend for students. The additional digital I/O ports provide the option to create more complex projects.
1 - [USB Cable](https://amzn.to/2uX7xst): Transfer code from the Arduino IDE to hardware and provides power to the MEGA.
1 - [Arduino IDE](https://www.arduino.cc/en/main/software): Use the link to the left and follow the instructions to download and install the IDE on your computer.

> **NOTE:** If you use Ubuntu or Ubuntu Mate might I recommend [my install instructions](https://www.stevencombs.com/arduino/2019/12/31/install-arduino-ubuntu.html).

1 - [Elegoo Breadboard](https://amzn.to/377CB7e): Breadboards are used to prototype circuits.
1 - [Momentary push-button switch](https://amzn.to/2uZLGkd): This tiny push-button switch has a tactile sound when pressed and is perfect for use with the breadboard. The MEGA has one on the board. It serves as a device reset.
1 - [Diffused White LED](https://amzn.to/3amlfFv): Standard white LED with a slight frost to diffuse the light.
1 - [1k Ω (ohm) resistor](https://amzn.to/2u8s8Ke): Connect this resistor between the power source and the LED. This resistor is larger than necessary but will ensure we protect our LED when we apply power. The color code for a 1K Ω resistor is Brown, Black, Red, and Gold.

> **NOTE:** Red is often hard to discern, especially if your resistor is blue. If you are unsure, use a Volt/Ohm meter to verify the value. Set the meter to 2k and connect the black lead to the COM port on the meter and the red lead to ΩV port.

5 - [Male to male breadboard jumper wires](https://amzn.to/2ufQf9z): Makes prototyping on the breadboard a snap!
1 - [Small 5" needle nose plyers](https://amzn.to/2G003Hy) (optional): Used to help make bends on component leads. More tips in the video.
1 - [Volt/Ohm multimeter (optional)](https://amzn.to/2ufV9mZ): Optional, but you should really own one!

> **NOTE:** Don't want to source the electronic parts individually? Get the [$60 Elegoo MEGA 2560 Most Complete Starter Kit](https://amzn.to/2Rqsio6). It contains everything you need for this exercise and much, much, more! It's a great value and is often on sale. You can even [view a video I created](https://youtu.be/jY8Jj0Rim70) that shows and explains the contents of this kit.

![Supplies for this project](/images/posts/2020-01-20-adruino-switch-led/project-supplies.jpg)

## Circuit

Below is a Fritzing image that serves as instructions for project assembly. Watch the video if you don't understand a step or two in the process.

![Project components](/images/posts/2020-01-20-adruino-switch-led/mega-switched-led-components.svg)

[Download Fritzing file](/images/posts/2020-01-20-adruino-switch-led/mega-toggle-led.fzz).

## Programming

Once the project is assembled are wired, create the code in the [Arduino IDE](https://www.arduino.cc/en/main/software). Below is the code for this project. Do not copy and paste. Type the code and include your own comments (`//`) that explain what each line does. This will help annotate the code for later review and help you understand what each line accomplishes.

<script src="https://gist.github.com/stevencombs/b988f757c5ffd8cc99d3177b56b62118.js"></script>

```
int ledPin = 12;
int buttonPin = 9;
int toggleState = false;

void setup()
{
  pinMode(ledPin, OUTPUT);
  pinMode(buttonPin, INPUT_PULLUP);
}

void loop()
{
  if (digitalRead(buttonPin) == false) {
  toggleState = !toggleState;
  digitalWrite(ledPin, toggleState);
  }
  while (digitalRead(buttonPin) == false);
  delay(50);
}
```
[Download the code](/images/posts/2020-01-20-adruino-switch-led/mega-toggled-led.ino).

[View code as GIST that includes comprehensive comments](https://gist.github.com/stevencombs/b988f757c5ffd8cc99d3177b56b62118).

Once the code is entered, upload to the MEGA using the Arduino IDE.

## Upload to Mega

Uploading the code is simple if the Arduino IDE is installed and setup properly.

1. Select `Tools` / `Board` from the Arduino IDE.
2. Select the `Arduino/Geninuino MEGA or MEGA 2560` from the Arduino boards available.
3. Select the serial port used to connect the Arduino to the computer. This will vary based on computer and operating system.
4. Select the upload button in the Arduino IDE toolbar menu (⮊).

If the program is correct and contains no errors, the IDE will compile the code and sent to the MEGA.

## Operation

Verify that the LED connected to the MEGA turns on when you press the push-button and off when you press the push-button again. If it is not working properly, verify the code, make necessary changes, and then upload the program again.

## Summing up

Hopefully this project was a great way to learn more about the MEGA, the Elegoo kits, and the Arduino IDE. I would love to read your comments. If you have them, drop them in the comments section below.

## References

Here are the pages I referenced for this project:

1. [Arduino button tutorial](https://www.arduino.cc/en/tutorial/button)
2. [LED resistor calculator](https://www.digikey.com/en/resources/conversion-calculators/conversion-calculator-led-series-resistor?_ga=2.47531951.968511582.1579365631-286915608.1579365631&_gac=1.181821269.1579365633.Cj0KCQiA9orxBRD0ARIsAK9JDxTauk9R4xTKrslBCN1JgI0T9SqCEZ2rH3MH9jL-MBPtQopC1jNAoK4aAiXiEALw_wcB)
3. [Resistor color code calculator](https://www.digikey.com/en/resources/conversion-calculators/conversion-calculator-resistor-color-code-4-band)
