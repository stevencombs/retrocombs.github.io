---
layout: post
title: 'HOWTO: Sublime Text Arduino programming IDE on Peppermint OS'
date: 2014-01-11 17:00:39
author: 'Steven B. Combs, Ph.D.'
email: 'retrocombs@icloud.com'
comments: true
categories:
  - arduino
---

<img style="margin-left: 10px; margin-bottom: 10px;" src="http://3.bp.blogspot.com/-P3kE77jeAh8/UtGX3D4GkbI/AAAAAAABOkE/G5rKnB8pqIA/s1600/PeppermintOS-SublimeText-Arduino.png" align="right" width="250" />In a previous post I demonstrated the [install of the Arduino IDE](http://www.stevencombs.com/linux/2014/01/05/Install-arduino-ide-on-peppermint-os.html) on a [Peppermint OS 4](http://peppermintos.com/guide/software/) install. Today I want to take this a bit further and show you how to create an Arduino programming environment that knocks the socks of the original Arduino IDE.

Before you begin, you must have Java and the official [Arduino IDE](http://arduino.cc/en/main/software) software installed on your Peppermint OS box. Directions are [here](http://goo.gl/RHa3f3). Once that process is complete, click the link below to learn how you can use Sublime Text 2 and a package known as [_Stino_](https://github.com/Robot-Will/Stino) to upgrade your Arduino programming environment.

I will use Peppermint OS; however, these instructions should work with most Debian based Linux distributions.

## Why use Sublime Text 2 and the Stino package?

I will not go into a long rant on why Sublime Text 2 is my go to text editor on both Linux and Mac. A quick Google search will yield many blog posts that handily take care of this task. Quickly though, Sublime Text 2 includes features that the original Arduino IDE simply does not, such as:

* text snippets
* code completion
* document map
* enhanced search and replace
* multiple selections
* tabs
* packages

That last bullet, packages, is the vital component. It allows us to add additional features to the base install of Sublime Text 2. The Stino package simply adds the controls we need to write, compile and upload our code to an Arduino.

You can also configure a Mac with the same setup. My first use of Sublime Text 2 and the Stino package was on a Mac and the install is similar. Seasoned Mac users will be able to complete an install with relative ease. If there’s a need for a Mac version of this post, drop a comment below. And “yes,” this same setup can be accomplished on a Windows box. Please don’t ask me for instructions though. I haven’t had access to a Windows machine in over three years."

## Install Sublime Text 2:

The heart of our new enhanced Arduino IDE is <a href="http://www.sublimetext.com/2">Sublime Text 2</a>. As the time of this writing, a beta version of Sublime Text 3 is available. These instructions will not work for this version; however, savvy Linux users can probably modify my instructions to get a functional install. Let’s begin and install Sublime Text 2 on Peppermint OS.

* Open the _Terminal_ via mouse or the keyboard shortcut: `ctrl` + `alt` + `t`
* Type the command: `sudo apt-get install sublime-text–2`
* Enter your password at the prompt followed by `return`.

Peppermint OS will search for all dependencies and software necessary for the install.

Some seasoned Linux users may wonder why we don’t need to install repositories (or server locations that contain the software). Peppermint OS already includes them! Yet another reason Arduino fans should consider Peppermint OS as their Linux distro of choice."

* When prompted, allow the install by entering `Y` at the prompt.

## Load Sublime Text 2:

Let’s verify our install of Sublime Text 2 and make sure things are operational.

* Choose _Programming_ / _Sublime Text 2_ from the Peppermint OS start menu as shown in the image below. Sublime Text 2 will load.

<img border="0" src="http://2.bp.blogspot.com/-dkileqzsEzw/UtGYmz_ssAI/AAAAAAABOkM/Rd8K5qC9CGw/s1600/Programming-SublimeText2_menu_item-2.png" height="388" width="640" />

Those familiar with basic text editors will find Sublime Text 2 familiar. The lack of icons and buttons may confuse new users. Hang in there and trust me. Once we get those Arduino controls in there, it will all begin to make sense.

“If you are curious about Sublime Text 2 usage and features, let me suggest [this series of videos](https://www.youtube.com/playlist?list=PLLnpHn493BHEYF4EX3sAhVG2rTqCvLnsP).”

## Install the Sublime Text Package Manager:

Now that we have a functional Sublime Text 2 install, its time to make it Arduino aware. We utilize the package feature of Sublime Text 2 to do this. Natively, Sublime Text 2 does not include a package manager; however, the folk(s) over at <https://sublime.wbond.net> have created the standard in Sublime Text package managers.

_Package Manager_ makes it easy to add other features to Sublime Text 2 as you become more comfortable with its use in other activities besides Arduino programming.

* Click [here](https://sublime.wbond.net/installation#st2) to visit the Sublime Text 2 Package Control installation page.
* Highlight and copy the appropriate code that is similar to the code found in the image below. Make sure you grab the code for Sublime Text 2 and not Sublime Text 3. My link will present the code you need by default.

<img border="0" src="http://1.bp.blogspot.com/-QWQoDR4lP1g/UtGYwg2OlgI/AAAAAAABOkU/x5hPH4DjRfQ/s1600/Install+Code.png" height="400" width="392" />

* Activate the Sublime Text 2 console using `ctrl` + `
* Paste the text copied from the web site into the console.
* Restart Sublime Text 2.

## Install the Stino Arduino package:

With the install of the _Package Manager_ in the previous section, this is now an easy task.

* Activate the _Command Palette_ (shown in the image below) using `shift` + `command` + `p`.

<img border="0" src="http://4.bp.blogspot.com/-lRdWogAr4lE/UtGY4xBX4-I/AAAAAAABOkc/Y3OlENWQ2jA/s1600/command+palette.png" height="360" width="640" />

* Activate the _Command Palette_ using `shift` + `command` + `p`.

* Type: `Install` `Package` and use arrow keys and select the _Install Package_ option.

* Hit `return`. The status bar at the bottom of the page will display an animated prompt while it updates the repository listing as shown in the image below.

<img border="0" src="http://3.bp.blogspot.com/-52jL6TZLYJM/UtGZSMxJGII/AAAAAAABOkk/Ei09r2wAC-A/s1600/animated_status_bar.png" height="400" width="400" />

* An alphabetical list of packages appears.

* Type `arduino`. The list will narrow down the available options.

* Use the arrow keys to select the _Arduino-like IDE_ package.

* Hit `return`. _Package Manager_ will download and install the package.

* An _Arduino_ menu item will appear on the right-hand side of the Sublime Text 2 main menu as shown in the image below.

<img border="0" src="http://3.bp.blogspot.com/-7b_-lkOMmBM/UtGaTnhlLdI/AAAAAAABOkw/VYh0fa8hpbE/s1600/Stino_Arduino_Menu-2.png" height="374" width="640" />

## Configure and use the Stino Arduino package:

_Stino_ package the location of the official Arduino IDE install. Stino is Sublime Text 2 conduit to that software and it’s libraries. Make sure you have the Arduino IDE installed before completing the steps below.

* Select _Arduino_ / _Preferences_ / _Select Arduino Application Folder_ from the Sublime Text 2 main menu. A prompt will appear.

* Immediately press `return` and the prompt will display the home account file structure.

* Navigate using either the keyboard or the cursor keys to the following location: `/usr/share/arduino/`

* Press `return`. This will set the location of the Arduino IDE and its libraries.

* Attach an Arduino board to your Peppermint OS box via a [USB cable](https://www.amazon.com/dp/B001TH7GUA?tag=stevenccom-20&amp;camp=0&amp;creative=0&amp;linkCode=as4&amp;creativeASIN=B001TH7GUA&amp;adid=06HRGQC78A3T02GSA04C&amp;).

Don’t have an Arduino? Get a great deal on an [Arduino at Amazon](http://www.amazon.com/s/?_encoding=UTF8&camp=1789&creative=390957&field-keywords=Arduino&linkCode=ur2&tag=stevenccom-20&url=search-alias%3Delectronics&linkId=LISU5PL6NIEETUSF).

* Connect an Arduino to complete the final steps.

* Select _Arduino_ / _Serial Port_ / _/dev/???_ from the Sublime Text 2 main menu. There should be a single entry where ??? is a substitute for something similar to _ttyACM0_.

* Select _Arduino_ / _Arduino AVR Boards_ from the Sublime Text 2 main menu and select the board attached to your computer.

Well, that wasn’t too bad. Now the moment we have all been waiting for!

## Compile and upload sample code:

Finally, we will enter, compile and upload our first program to an Arduino board. I will make things easy and include some sample code for you to use. The Arduino program below will blink the on-board LED.

* Copy and paste this code into a new Sublime Text 2 document.

{% highlight C %}
const int ledPin = 13;
  void setup() {
      pinMode(ledPin, OUTPUT);
  }
  void loop() {
      digitalWrite(ledPin, HIGH);
      delay(1000);
      digitalWrite(ledPin, LOW);
      delay(500);
  }
{% endhighlight %}

* Save the code to any location you desire (Desktop maybe???) and give it the name _Blinky.ino_. _Stino_ will compile the package and upload it to the Arduino.

* You will have a blinky Arduino as shown in the image below.

<img border="0" src="http://3.bp.blogspot.com/-93o7N_Cmtsw/UtGU0xseHMI/AAAAAAABOj4/QZnI8nAnE7A/s1600/Arduino_Blinky-9.jpg" height="298" width="400" />

You are now ready to use the _Stino_ package to create an amazing new [physical computing](http://en.wikipedia.org/wiki/Physical_computing) project. And when you do, please share it in the comments below.

## Conclusion

New users to Linux have learned the basics of Linux software installation, Sublime Text 2 package management and Stino Arduino package use. In fact, if you “sorta/kinda” understood what were were doing, you have the skills to experiment with some other interesting installs and configurations. If nothing else, you now have installed on your Peppermint OS (or other Debian distro variant) what I consider to be the most powerful Arduino development platform available.
