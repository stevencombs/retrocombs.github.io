---
layout: post
title: 'BUILD & CODE: Elegoo Arduino starter kit servo, LED, and encoder project'
author: 'Steven B. Combs, Ph.D.'
email: 'steven.combs@gmail.com'
date: '2020-03-15'
comments: 'yes'
category: arduino
permalink: arduino-servo-encoder
tags:
  - buildandcode
  - arduino
  - ide
  - elegoo
  - electronics
  - maker
  - video
  - servo
  - encoder
  - tutorial
---

Expanding on my previous [OPEN THE BOX](https://www.stevencombs.com/arduino/2020/01/11/elegoo-mega-starter-kit.html) and [LED and pushbutton Arduino](https://www.stevencombs.com/arduino/2020/01/20/arduino-hello-world.html) projects, this post provides instructions to control a servo motor with and encoder on an ELEGOO Arduino Mega 2560; with a twist (pun intended)!

This project will not only introduce the student, or new Arduino user, to micro servo control using a rotary encoder but also how to assemble a complete hardware and coding system using custom programming functions (subroutines).

This post includes the components, files, images, video, resources, and steps necessary to recreate the project.

![Arduino MEGA 2560 with encoder, LED, and servo](/images/posts/2020-03-15-arduino-micro-servo/arduino-led-encoder-servo.jpg)

## Objective

Using an [Elegoo branded Arduino MEGA 2560 (MEGA) (#ad)](https://amzn.to/362vn2V), or common Arduino variants, and various electronic components, create a hardware and software solution that will use a rotary encoder to control a micro servo. Before the micro servo can be controlled, the user must press a momentary switch. When this switch is pressed, a red LED will illuminate indicating the encoder control is now active. When the momentary switch is pressed again, the encoder control is deactivated.

## Video

Below is a step-by-step video I produced for this project.

<div style="position:relative;padding-top:56.25%;">
  <p><iframe src="https://www.youtube.com/embed/pVdh0EwnERk" frameborder="0" allowfullscreen
    style="position:absolute;top:0;left:0;width:100%;height:100%;"></iframe></p>
</div>

## Bill of Materials (BOM)

All equipment for this project, with Amazon links (#ad), is listed below:

> **NOTE:** If you don't want to source the electronic parts individually, purchase the [$59 Elegoo MEGA 2560 Most Complete Starter Kit (#ad)](https://amzn.to/2Rqsio6). It contains everything you need for this exercise and much, much, more! It's a great value and is often on sale. You can even [view a video I produced](https://youtu.be/jY8Jj0Rim70) that shows and explains the contents of this kit.

1 - [Elegoo MEGA 2560](https://amzn.to/362vn2V): The MEGA is overkill, but is the device I recommend for students. The additional digital I/O ports provide the option to create more complex projects.

1 - [USB Cable](https://amzn.to/2uX7xst): Used to upload code from the Arduino IDE and to provide power to the MEGA.
https://www.stevencombs.com/arduino/2020/01/11/elegoo-mega-starter-kit.html

1 - [Arduino IDE](https://www.arduino.cc/en/main/software): Use the link to the left and follow the instructions to download and install the IDE on your computer.

1 - [Elegoo Breadboard](https://amzn.to/377CB7e): Use the breadboard to prototype the project.

12 - [Male to male breadboard jumper wires](https://amzn.to/2ufQf9z): Prototyping on the breadboard a snap with these wires and you need various sizes and colors!

1 - [1K Ω (ohm) resistor](https://amzn.to/2u8s8Ke): Connect this resistor between the power source and the LED. This resistor is larger than necessary but will ensure we protect our LED when we apply power. The color code for a 1K Ω resistor is Brown, Black, Red, and Gold.

1 - [Red LED](https://amzn.to/2UcAKZq): I use a standard red LED as a power indicator.

1 - [Rotary Encoder](https://amzn.to/3dmU7YE): This device will provide rotational control of the servo motor.

1 - [Micro Servo SG90](https://amzn.to/3cDgtol): A micro servo that is easily powered by an Arduino and controlled by the encoder above.

1 - [Small 5" needle nose pliers](https://amzn.to/2G003Hy) (optional): Used to insert resistor legs into the breadboard. More tips in the video.

1 - [Volt/Ohm multimeter (optional)](https://amzn.to/2ufV9mZ): Optional but you should own one!

Below is an image of all the materials required for this build and code project.

![Materials for this project](/images/posts/2020-03-15-arduino-micro-servo/arduino-servo-encoder-materials.jpg)

## Circuit

Below is a Fritzing image that serves as instructions for project assembly. Watch the video if you don't understand a step or two in the process.

![Fritzing project components](/images/posts/2020-03-15-arduino-micro-servo/arduino-led-encoder-servo_bb.png)

[Download Fritzing file](/images/posts/2020-03-15-arduino-micro-servo/arduino-led-encoder-servo.fzz).

[View/Print a Google Doc](https://docs.google.com/document/d/1zsiHF412hbn_6jT24qbFMkBAfLY20gssL4km8vUDkak/edit?usp=sharing) that contains a Fritzing construction image and code on a 2 page document. Print and use the document to construct and code your own project.

## Programming

Once the components are placed and wired, code the project in the [Arduino IDE](https://www.arduino.cc/en/main/software). Below is the code for this project. Do not copy and paste. Type the code and include your own comments (`//`) to explain each line. These comments will remind you later what each line accomplishes.

<script src="https://gist.github.com/stevencombs/4d800dbfed5fac867992ad30c50044ad.js"></script>

[Download the code](/images/posts/2020-03-15-arduino-micro-servo/encoder-servo-led-switch/encoder-servo-led-switch.ino).

[View code as GIST on GITHUB and fork your own copy](https://gist.github.com/stevencombs/4d800dbfed5fac867992ad30c50044ad).

## Upload to Arduino Mega 2560

Uploading the code is easy; if the Arduino IDE is installed and setup properly.

1. Select _Tools_ / _Board_ from the Arduino IDE.
2. Select the _Arduino/Geninuino MEGA or MEGA 2560_ from the Arduino boards available.
3. Select the serial port used to connect the Arduino to the computer. This will vary based on computer and operating system.
4. Select the upload button in the Arduino IDE toolbar menu.

If the program contains no errors, the IDE will compile the code and send it to the MEGA.

## Operation

Rotate the encoder, nothing will happen. Press the encoder button and the LED will glow. Rotating the encoder clockwise will cause the servo to move clockwise and vice versa. Press the encoder button again to disable servo controls.

## Summing Up

This project took me much longer than I expected. For some reason, the logic to toggle encoder control on and off required much trail, error, and code refining. When I first started, the code was twice as long! This project introduces users to the power of functions and updates older programmers on the use of these modern subroutines. I don't see Arduino programmers using this feature often and believe their use is key to bug squashing and troubleshooting. I'm not sure I would have overcome my programming challenges had I not split this program into `loop()`, `servo()`, and `button()` functions.

Hopefully this project was a great way to learn more about the MEGA, the Elegoo kit components, servo motors, encoder, functions, and the Arduino IDE. I would love to read your comments. If you have any, drop them in the comments section below.

<hr>

## Reference

Below is the primary reference for this project:

[In-Depth: How Rotary Encoder Works and Interface It with Arduino](https://lastminuteengineers.com/rotary-encoder-arduino-tutorial/)
