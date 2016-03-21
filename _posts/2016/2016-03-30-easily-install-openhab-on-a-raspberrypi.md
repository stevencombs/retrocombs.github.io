---
layout: post
title: 'Easily install openHAB on a Raspberry Pi'
date: 'March 20, 2016'
comments: 'yes'
categories:
  - raspberrypi
---

This post shares the process I use to install [openHAB][8291-0001], the "vendor and technology agnostic open source automation software for your home," on a Raspberry Pi 2. While I use the Raspberry Pi 2, this process should work on any variant. After scouring the web, I found multiple tutorials, but none worked for me exclusively. After much experimentation, my process became an amalgam of several online resources.

My tutorial assumes you have a working [Raspberry Pi][8291-0002] running the [Raspian Operating System][8291-0003] with Internet connectivity. I connect to the Raspberry Pi remotely using [SSH][8291-0004] on my Mac, but you can use the *Terminal* to follow these steps directly on the Raspberry Pi.

# Very Java Version
openHAB makes extensive use of [Java][8291-0005] and version 1.6 or higher is required. The first step is to ensure our Raspberry Pi includes a recent version of Java.

```
java -version
```

The Raspberry Pi will present the version of Java installed as shown below.

```
java version "1.8.0_65"
Java(TM) SE Runtime Environment (build 1.8.0_65-b17)
Java HotSpot(TM) Client VM (build 25.65-b01, mixed mode)
```

In my case, I have an install version of `1.8.0_65`. I'm good to go. If your version does not meet the requirement, use the following commands in the terminal:

```
sudo apt-get update
```

This will update your Raspbian (Debian) packages. Type the following:

```
sudo apt-get dist-upgrade
```

After a bit of time, the Raspian OS will update; including Java.

# Add the openHAB repositories

We can install openHAB from a download, but being able to install from the `apt-get` package manager makes the install easier and allows easy updates. Before we can use `apt-get` we will add the openHAB repositories to Raspian.

First we download the repository key:

```
wget -qO - 'https://bintray.com/user/downloadSubjectPublicKey?username=openhab' | sudo apt-key add -
```

We now add the repository to our apt sources list:

```
echo "deb http://dl.bintray.com/openhab/apt-repo stable main" | sudo tee /etc/apt/sources.list.d/openhab.list
```

With the new repository in our list, we update our list of available applications:

```
sudo apt-get update
```

No errors should display and we are now ready to install openHAB from the repository.

# Install openHAB

The command below will install openHAB on the Raspberry Pi.

```
sudo apt-get install openhab-runtime
```

# Start the openHAB server

If all went according to plan, we can now run the openHAB server:

```
sudo /etc/init.d/openhab start
```

The Raspberry Pi will display the following to verify server operation:

```
[ ok ] Starting openhab (via systemctl): openhab.service.
```

# openHAB Status

Check the status of the openHAB installation with the command below:

```
sudo /etc/init.d/openhab status
```

## Stop the openHAB server

Use the command below to stop the server:

```
sudo /etc/init.d/openhab stop
```

The Raspberry Pi will display the following to verify the server has stopped:

```
[ ok ] Stopping openhab (via systemctl): openhab.service.
```

# Just the start

The install is just the start of my openHAB journey. As I learn to control my home with openHAB and the Raspberry Pi, I will continue to add additional instructions. For now, if this install process works for you, please drop a comment below and let me know. I'm looking forward to my openHAB experiments.

[comment]: <> (source: https://github.com/openhab/openhab/wiki/Linux---OS-X)
[comment]: <> (URL: http://localhost:8080/openhab.app?sitemap=yourname)

[8291-0001]: http://www.openhab.org/
[8291-0002]: http://www.amazon.com/s/ref=as_li_ss_tl?url=search-alias%3Dcomputers&field-keywords=raspberry+pi&linkCode=ll2&tag=stevenccom-20&linkId=2d763c65ad763020ae7df5b164423328
[8291-0003]: https://www.raspbian.org/
[8291-0004]: https://en.wikipedia.org/wiki/Secure_Shell
[8291-0005]: https://java.com/download
