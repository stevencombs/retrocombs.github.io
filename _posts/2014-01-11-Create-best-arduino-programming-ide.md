---
layout: post
title: Create the best Arduino programming IDE using Peppermint OS, Sublime Text and Stino
date: 2014-01-11 17:00:39
comments: true
category: technology
---

<img border="0" src="http://3.bp.blogspot.com/-P3kE77jeAh8/UtGX3D4GkbI/AAAAAAABOkE/G5rKnB8pqIA/s1600/PeppermintOS-SublimeText-Arduino.png" align="right" height="200" width="200" /> In a previous post I demonstrated the install of the Arduino IDE on a [Peppermint OS 4](http://peppermintos.com/guide/software/) install. Today I want to take this a bit further and show you how to create an Arduino programming environment that knocks the socks of the original Arduino IDE. 

Before you begin, you must have Java and the official [Arduino IDE](http://arduino.cc/en/main/software) software installed on your Peppermint OS box. Directions are [here](http://goo.gl/RHa3f3). Once that process is complete, click the link below to learn how you can use Sublime Text 2 and a package known as [Stino](https://github.com/Robot-Will/Stino) to upgrade your Arduino programming environment.

I will use Peppermint OS; however, these instructions should work with most Debian based Linux distributions.

### Why use Sublime Text 2 and the Stino package?

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

### Install Sublime Text 2:

The heart of our new enhanced Arduino IDE is <a href="http://www.sublimetext.com/2">Sublime Text 2</a>. As the time of this writing, a beta version of Sublime Text 3 is available. These instructions will not work for this version; however, savvy Linux users can probably modify my instructions to get a functional install. Let’s begin and install Sublime Text 2 on Peppermint OS.

* Open the Terminal via mouse or the keyboard shortcut: `ctrl` + `alt` + `t`
* Type the command: `sudo apt-get install sublime-text–2` 
* Enter your password at the prompt followed by `return`.

Peppermint OS will search for all dependencies and software necessary for the install.

Some seasoned Linux users may wonder why we don’t need to install repositories (or server locations that contain the software). Peppermint OS already includes them! Yet another reason Arduino fans should consider Peppermint OS as their Linux distro of choice."

* When prompted, allow the install by entering `Y` at the prompt.

### Load Sublime Text 2:

Let’s verify our install of Sublime Text 2 and make sure things are operational.

* Choose Programming | Sublime Text 2 from the Peppermint OS start menu as shown in the image below. Sublime Text 2 will load.

<img border="0" src="http://2.bp.blogspot.com/-dkileqzsEzw/UtGYmzssAI/AAAAAAABOkM/Rd8K5qC9CGw/s1600/Programming-SublimeText2menuitem-2.png" height="388" width="640" />

Those familiar with basic text editors will find Sublime Text 2 familiar. The lack of icons and buttons may confuse new users. Hang in there and trust me. Once we get those Arduino controls in there, it will all begin to make sense.

“If you are curious about Sublime Text 2 usage and features, let me suggest [this series of videos](https://www.youtube.com/playlist?list=PLLnpHn493BHEYF4EX3sAhVG2rTqCvLnsP).”

### Install the Sublime Text Package Manager:

Now that we have a functional Sublime Text 2 install, its time to make it Arduino aware. We utilize the package feature of Sublime Text 2 to do this. Natively, Sublime Text 2 does not include a package manager; however, the folk(s) over at <https://sublime.wbond.net> have created the standard in Sublime Text package managers.

Package Manager makes it easy to add other features to Sublime Text 2 as you become more comfortable with its use in other activities besides Arduino programming.

* Click [here](https://sublime.wbond.net/installation#st2) to visit the Sublime Text 2 Package Control installation page.
* Highlight and copy the appropriate code that is similar to the code found in the image below. Make sure you grab the code for Sublime Text 2 and not Sublime Text 3. My link will present the code you need by default.

<img border="0" src="http://1.bp.blogspot.com/-QWQoDR4lP1g/UtGYwg2OlgI/AAAAAAABOkU/x5hPH4DjRfQ/s1600/Install+Code.png" height="400" width="392" />

* Activate the Sublime Text 2 console using `ctrl` + `
* Paste the text copied from the web site into the console.
* Restart Sublime Text 2.

### Install the Stino Arduino package:

With the install of the Package Manager in the previous section, this is now an easy task.

* Activate the Command Palette (shown in the image below) using `shift` + `command` + `p`.

<img border="0" src="http://4.bp.blogspot.com/-lRdWogAr4lE/UtGY4xBX4-I/AAAAAAABOkc/Y3OlENWQ2jA/s1600/command+palette.png" height="360" width="640" />

* Activate the Command Palette using `shift` + `command` + `p`.
* Type: `Install` `Package` and use arrow keys and select the Install Package option.
* Hit `return`. The status bar at the bottom of the page will display an animated prompt while it updates the repository listing as shown in the image below.

<img border="0" src="http://3.bp.blogspot.com/-52jL6TZLYJM/UtGZSMxJGII/AAAAAAABOkk/Ei09r2wAC-A/s1600/animatedstatusbar.png" height="400" width="400" />

* An alphabetical list of packages appears.
* Type `arduino`. The list will narrow down the available options.
* Use the arrow keys to select the Arduino-like IDE package.
* Hit `return`. Package Manager will download and install the package.
* An Arduino menu item will appear on the right-hand side of the Sublime Text 2 main menu as shown in the image below.

<img border="0" src="http://3.bp.blogspot.com/-7b-lkOMmBM/UtGaTnhlLdI/AAAAAAABOkw/VYh0fa8hpbE/s1600/StinoArduinoMenu-2.png" height="374" width="640" />

### Configure and use the Stino Arduino package:

Stino package the location of the official Arduino IDE install. Stino is Sublime Text 2 conduit to that software and it’s libraries. Make sure you have the Arduino IDE installed before completing the steps below.

* Select Arduino | Preferences | Select Arduino Application Folder from the Sublime Text 2 main menu. A prompt will appear.
* Immediately press `return` and the prompt will display the home account file structure.
* Navigate using either the keyboard or the cursor keys to the following location: `/usr/share/arduino/`
* Press `return`. This will set the location of the Arduino IDE and its libraries.
* Attach an Arduino board to your Peppermint OS box via a [USB cable](https://www.amazon.com/dp/B001TH7GUA?tag=docstechnotes-20&amp;camp=0&amp;creative=0&amp;linkCode=as4&amp;creativeASIN=B001TH7GUA&amp;adid=06HRGQC78A3T02GSA04C&amp;). 
 
Don’t have an Arduino? Get a great deal on an [Arduino at Amazon](http://www.amazon.com/s/?encoding=UTF8&camp=1789&creative=390957&field-keywords=Arduino&linkCode=ur2&tag=bricinmypockb-20&url=search-alias%3Delectronics&linkId=LISU5PL6NIEETUSF).

* Connect an Arduino to complete the final steps.
* Select Arduino | Serial Port | /dev/??? from the Sublime Text 2 main menu. There should be a single entry where ??? is a substitute for something similar to ttyACM0.
* Select Arduino | Arduino AVR Boards from the Sublime Text 2 main menu and select the board attached to your computer.

Well, that wasn’t too bad. Now the moment we have all been waiting for!

### Compile and upload sample code:

Finally, we will enter, compile and upload our first program to an Arduino board. I will make things easy and include some sample code for you to use. The Arduino program below will blink the on-board LED.

* Copy and paste this code into a new Sublime Text 2 document.

    <pre><code>const int ledPin = 13;
    void setup() {
        pinMode(ledPin, OUTPUT);
    }
    void loop() {
        digitalWrite(ledPin, HIGH);
        delay(1000);
        digitalWrite(ledPin, LOW);
        delay(500);
    }</pre></code>

* Save the code to any location you desire (Desktop maybe???) and give it the name Blinky.ino. Stino will compile the package and upload it to the Arduino.
* You will have a blinky Arduino as shown in the image below.

<img border="0" src="http://3.bp.blogspot.com/-93o7NCmtsw/UtGU0xseHMI/AAAAAAABOj4/QZnI8nAnE7A/s1600/ArduinoBlinky-9.jpg" height="298" width="400" />

You are now ready to use the Stino package to create an amazing new [physical computing](http://en.wikipedia.org/wiki/Physicalcomputing) project. And when you do, please share it in the comments below.

### Conclusion

New users to Linux have learned the basics of Linux software installation, Sublime Text 2 package management and Stino Arduino package use. In fact, if you “sorta/kinda” understood what were were doing, you have the skills to experiment with some other interesting installs and configurations. If nothing else, you now have installed on your Peppermint OS (or other Debian distro variant) what I consider to be the most powerful Arduino development platform available.
