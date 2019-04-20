---
layout: post
title: 'PlexBerryPi'
date: 2019-04-20 11:30:57
comments: 'yes'
categories:
  - raspberrypi
---

Let's create a Raspberry Pi Plex server, or PlexBerryPi. These instructions will do their best to be platfrom agnostic; however, I completed this entire process using the [Elementary OS Linux][1] distribution. These instructions will assume the reader has moderate Raspberry Pi setup skills, but even someone who is new can likely do a bit of Google research and complete these steps.

# Build List

* [Raspberry Pi 3 or higher][2]
* [8Gb microSD Card][3]
* [1Tb or larger external USB drive][4]

# Download Raspbian Stretch Lite and Etcher

Download the non-GUI version of Raspbian Stretch Lite from:

<https://www.raspberrypi.org/downloads/raspbian/>

Download and install Etcher from:

<https://etcher.io/>

# Install Raspbian Stretch Lite on the microSD card

Follow the steps below to install Raspbain Stretech Lite on a microSD card using the Etcher:

1. Place the microSD into a card reader
2. Install the card reader into a desktop or laptop computer
3. Open the Etcher app
4. Click the `Select image` button and locate the Raspbian Stretch Lite distribution downloaded earlier
5. Select the microSD card (if it is the only microSD connected to the computer, Etcher will automatically select it)
6. Click the `Flash!` button
7. Enter the computer authentication information (usually requests user password)

Etcher will display a progress indictor as well as an estimated ETA.

![The Etcher interface][etcher-interface]

Once complete, remove the microSD card and insert into the the Raspberry Pi as shown in the image below:

![Insert the microSD card][insert-microSD]


[1]: https://elementary.io/
[2]: https://amzn.to/2IR2w7t
[3]: https://amzn.to/2IRCEbn
[4]: https://amzn.to/2DRVxrd
[5]:
[6]:

[etcher-interface]: https://lh3.googleusercontent.com/4SPUSG1WK-MFSlWhUdHqgN1loWs4VgYKyfR-W2Ub02BfdP_cWASR8gSUYsLtpaYi1a21ciy7dyEjIsOKsxdJKhqSJd4NU3dt2Jm3jlVKWf00Q5ye8zpcYjrABIQNvH-2I_LxpHj_GDoaajsFOOwYVHs9VBqC-oJmbYaq4S7ElCnN98uIOrz6G8LH2xuYB7UaFDeCGiRd90iX9GA6imA1EYo29Xw3pdGe_2VVV5rXGuSgmYQKqtIIvOinnYA1MexHIuVMptkIu7ki8GAa_VGKQIAJAd4iGrVKCUI19YbKE3qBsAu3X3oMZv10Y-A3MydCR9VLu9BgiBN2glvsDApgqNCRyKxwmDg8PtlUecfptZ-DqnQFJxcqLsuEDWJFNPX5x4uCxJwQ8ZncrSh2nmtndZBOhSXFH3VQL9tc8S3DB9gW5Ka-pg5j_vcpfuUevln2Ehd2RbzHf5S3h5gJlLe_Ik-_zpYBvhMDqqM8JyJYtf2mIQ8HbNknTHInpDr9HI9CFHX27kE0mQsHbFh7CoBC2gmqWd4-xZMqjI33aS3RLlDoD1XhI2D1XEAJMa1Ua2mG6DzVCNBM38LW5w7veC6UbmpwXlO4GHpqP2AJbZlj=w800-h413-no
[insert-microSD]: 
