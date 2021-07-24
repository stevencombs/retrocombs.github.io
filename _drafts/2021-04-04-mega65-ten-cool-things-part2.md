<!--

In my last video, I shared the first 5 cool things you will do with a MEGA65, plus a bonus. In this video, I cover numbers 6 through 10 and throw in one more bonus for a cool dozen.

Before I complete my list, I'd like to make a correction to the first video. I demonstrated a few games and those games were incorrectly recorded in NTSC mode. If you look at, or remember, part one, sprites were not properly located and screens were not rendered properly. As viewers pointed out, these games are programmed for the PAL video format. 

(Show changing MEGA from PAL to NTSC)

Before we begin with my list, here are a few of those games again, in the correct video format.

<!-- Show games playing correctly not with NTSC, but PAL video. -->

Now that you've seen how these games should look, let's get back to my list. Before I do, please remember that there is a wonderful companion blog post that includes all 12 cool things along with all the links you need and additional information from the developers not found in this video. Check it out using the link below and in the video description. NOW, let's get started!

## YouTube Video: _‌Ten cool things you will be able to do with the MEGA65 Computer_

In the video below, I share items six through ten of the ten cool things that will excite Commodore retro-computing fans about the release of the MEGA65.

<div style="position:relative;padding-top:56.25%;"><p><iframe src="link" frameborder="0" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true" style="position:absolute;top:0;left:0;width:100%;height:100%;"></iframe></p></div>

### 6. Load software from multiple storage devices (SD, IEC, internal Floppy Disk)

The MEGA65 includes a port that no other modern Commodore recreation includes, the serial IEEE-488 (IEC) bus. This peripheral bus works with disk drives and printers and its inclusion on the MEGA65 means we can use devices such as the 1541/1571/1581 disk drives, MPS-801 Printer, or even a modern SD2IEC device. Using an original disk drive will provide an authentic user experience; however, the internal floppy on the MEGA65 makes for an integrated experience similar to floppy drives found on the Commodore 128D and the Amiga 500.

At the time of this writing, not all floppy drive controller features are functional; however, the MEGA65 does something interesting. When accessing a .D81 file on the SD Card, the mechanical drive makes access sounds. These are not drive sounds replicated from the SID. The MEGA65 fires up the physical drive to create hardware sounds. It provides an authentic hardware experience to SD card access.

Currently, the MEGA65 can read from the mechanical floppy; however, full drive support is coming soon, to include formatting and writing to both DS/DD and DS/HD floppies. Below is what _gardners_ shared with me:

> Writing to disks doesn't yet work. I'm actively [working on this](https://c65gs.blogspot.com/2021/06/working-on-floppy-writing.html) at the moment. Tonight I am trying to make progress again on writing to floppies. Reading has been working for a long time...This is the penalty (and bonus) of doing everything ourselves from the ground up, including the floppy controller. Because of this we can even read or write Amiga and other disks later, and support HD disks!

An update was posted to the MEGA65 blog called [Work on floppy formatting, CRC calculation and sector writing](https://c65gs.blogspot.com/2021/06/work-on-floppy-formatting-crc.html). It's worth the read and when floppy drive support is complete, the MEGA65 will be the only Commodore-recreation to provide an authentic floppy drive experience. I can't wait!

Until all features of the internal drive are operational, the MEGA65 uses an SD card. Drop as many .D81 files that will fit directly on the SD card and you can access them from the Freezer menu. At this time, The MEGA65 does not support .D64 or other disk image formats.

The MEGA65's storage flexibility is unique among other emulators and hardware recreations. The C64 maxi/mini does not allow the use of original Commodore floppy drives or SD2IEC devices. The MEGA65 provides an original Commodore experience not found in any other recreation.

### 7. Run a C65 specific version of GEOS

In 1984, the Mac was released with its new-fangled mouse and pointer user interface. Two years later, Berkley Softworks brought its own point-and-click operating system to Commodore users and named it GEOS. GEOS is legendary in the Commodore community with versions for the Commodore 64, Commodore 128, and even the Commodore Plus/4. There was even a version ported to the Mac's older 8-bit sibling, the Apple II.

The Commodore 128 version of GEOS was far superior to the Commodore 64 version due to more memory and a higher screen resolutions. I was a heavy user of the Commodore 128 version during college creating college technical writing documents, physics lab reports, and managing my college Pershing Rifles ROTC unit. I mentioned this in more detail in my previous Commodore 128 video; however, almost everyone thought I was using a fancy, and high dollar, Mac. I always enjoyed telling them I created my documents on my Commodore 128; which interestingly is the foundation version for the MEGA65 version of GEOS.

GEOS is famous because it should not have run on an 8-bit machine with a clock speed of 1 Mhz and less that 64 Kb of RAM. Later versions of the Commodore 64, namely the C64C, were available with a GEOS bundle and users could purchase a couple of models of specialized RAM expansion units to make things speedier. Commodore released the 1351 mouse (see above) in response to the popularity of the point-and-click user interface showing up in productivity software, but my guess is GEOS was the reason for more mouse sales. 

It's fun to imagine what GEOS could have been on the Commodore 65; however, we don't have to! Developer _falk_ will bring GEOS to the MEGA65 and he's been kind enough to share his early work with me.

Understanding that there are components of GEOS, in an updated version for the PC called Breadbox Ensemble, tied up in a rights dispute I asked _falk_ about the right to distribute a MEGA65 version. Here's what he shared:

> MEGA has the right to distribute GEOS with the MEGA65 machine including all Commodore files. TopDesk 1.x is open-sourced by permission of the original owner GEOS-USER-CLUB Germany. The GEOS kernal is based on a reverse engineered source available at <https://github.com/mist64>. CONFIGURE is based on a reverse engineering project at <https://mumu21.se/>. All other Apps/Tools binaries are bundled without source for the MEGA65 release.

Sounds like we have the rights issues all worked out. Let's see what it looks like. Currently, GEOS is work in progress, but shows great promise with increased speed, higher resolutions, and a ton of memory. As mentioned earlier, add the mouSTer and a modern mouse and you have an 8-bit GEOS powerhouse. With additional development, there's no reason this version of GEOS could't rival a Mac of the same period. It's exciting to see GEOS in active development and _falk_ tells me:

> The plan is to open-source the core system soon, so that contributions and team work in different development areas become possible.

_falk_ shared his roadmap features:

> GEOS M65 targets GEOS 128 compatibility on the one side, but the flexibility to use all MEGA65 hardware capabilities. Both are progressing…GeoPaint 128 and GeoWrite 128 are more usable. Currently working toward DeskTop 128 support. Besides different high-res video modes support for TopDesk 65, the plan is to introduce high-color video. Drive support goes from all the serial connected Commodore drives, via the native F011 MEGA 65 drives (physical and mounted SD .D81) to RAM drives supporting the MEGA65 internal HyperRAM. Joystick and 1351 mouse support is implemented and support high resolution modes.

_falk_ finished his comments by telling me there is more testing and bug fixes; however, there are lots of features and ideas on the roadmap. It will be fun to watch the development of GEOS and it mature; as it should have in the 1980s.

### 8. Manage the MEGA65 using a modern PC

Modern retro-computing recreations rely on external storage, such as USB drives and SD cards, to replace aging tape and disk drive units. The MEGA65 is no different; however, while many devices such as The C64 required you to physically remove a USB Drive and move it to another computer to manage the contents, the MEGA65 team provides the hardware and software tools you need to connect it directly to a Mac, Linux, or Windows computer. 

Hardware connection is a simple USB cable and the software you use is [M65 Connect](https://files.mega65.org?id=ed66f21e-297c-4320-8930-5008509619db) for Mac, Linux, and Windows (Now in version 1.6). Connect the MEGA65 to a computer, turn it on, load M65 Connect on the remote computer, and you can access and manage your SD Card and access additional features such as:

* Drag and drop a `.D81` or `.PRJ` file on to the M65 Connect windows to load software
* Send files (PRJ, SID, Bitstream, Hickup, ROM, and BASIC)
* Create and apply ROM patches
* Create and send CORE files
* View and save Console text
* Reset the MEGA65
* Change MEGA65 to C64 mode
* Switch between PAL and NTSC mode
* Take a screen capture of the MEGA65
* Control the MEGA65 using the remote keyboard

In the future, these same tasks will be accomplished without a USB connection using the Ethernet port when the MEGA65 is connected to the network.

In item #7, I showed you how to play a `.MOD` files. Using M65 Connect, I can play a SID file on the MEGA65 with a simple drag and drop. 

### 9. Play C64 `.SID` and Amiga `.MOD` files

I must admit, I changed number 7 based on a comment made on the [MEGA65 Discord channel](https://discord.com/channels/719326990221574164/719326990221574168) after I published the first five. *Gurce*  commented that he hoped *M3wP*'s wonderful `.MOD` player, Manche ([pronounced Man-chae](https://translate.google.com/?sl=de&tl=en&text=Manche&op=translate)) would make the list. I read the comment and thought, that's much better than one of the items on my list. I started my research and asked _Gurce_ for assistance. After setting up the MEGA65 to run Manche, I immediately realized it's addition to the list was a good decision. Manche does an excellent job highlighting the four soft SID chips and four-channel stereo 16-bit digital audio capabilities of the MEGA65.

But before I played `.MOD` files, I wondered if I could play `.SID` Files. As we saw in the previous section, M65 Connect supports .SID files and playing them is as simple as a drag-and-drop. If you need SID files, check out the [High Voltage SID Collection](https://www.hvsc.c64.org).

In my first five items, I shared that the MEGA65 has features that rival the Amiga. Playing `.MOD` files is one of those features. If you aren't familiar with `.MOD` files and their Amiga history, here's a quick summary from [Wikipedia](https://en.wikipedia.org/wiki/MOD_(file_format)):

> MOD is a computer file format used to represent music, and was the first module file format. MOD files use the `.MOD` file extension, except on the Amiga which doesn't rely on filename extensions; instead, it reads a file's header to determine filetype. A MOD file contains a set of instruments in the form of samples, a number of patterns indicating how and when the samples are to be played, and a list of what patterns to play in what order…The first version of the format was created by Karsten Obarski for use in the Ultimate Soundtracker; tracker software released for the Amiga computer in 1987. The format has since been supported by hundreds of playback programs and dozens of other trackers (such as the [BassonTracker Amiga MOD Tracker and Player](https://www.stef.be/bassoontracker/?file=demomods%2Flotus20.mod))

You can find `.MOD` files on the [MOD Archive](https://modarchive.org/index.php).

> **TIP:** If you'd like to play `.MOD` files on a Mac, Linux, or Window computer, download the open source software, [VLC Media Player](https://www.videolan.org). Surprisingly, it does a great job supporting this file format.

Here's what makes Manche unique:

- You load Manche from MEGA65 mode and it launches into C64 mode (using a MEGA65 trick)
- It uses a high resolution screen
- It reads the `.MOD` files not from a `.D81` file, but from the files you load directly onto the SD card
- Press `F1` and then enter the name of the file on the SD card to load
- Press the ␣ bar to toggle play and pause

Manche is in early beta and there are features I'd like to see including:

- a directory listing
- Fast-forward and rewind features
- instrument listing and meters

If you get stuck, below are instructions from _Gurce_.

1. Place the `.MOD` files directly on the SD card (not on a .D81 disk)
2. Mount MANCHE via the freeze-menu
3. Hold ⇧ and tap the [R/S] key.
4. Press F1 to bring up a cursor towards the top-left.
5. Type in the name of the mod file on your sd-card.
6. Press ⏎.
7. Press ␣ to toggle music playback.

_Gurce_ was a huge help in not only making the suggestion, but helping me troubleshoot Manche on my MEGA65. That should be a "cool thing" itself; "working with a wonderful community of developers and fans."

### 10. Install additional cores

The MEGA65 is built on top of a Xilinx Artix A7 200T [FPGA](https://en.wikipedia.org/wiki/Field-programmable_gate_array). The beauty of an FPGA is ability to configure the circuitry to act like other digital devices, such as our favorite retro-computers. While the MEGA65's primary design is to be a modern remake of the in development Commodore 65, it includes enough space, or slots, where you can install other "cores" to configure the FPGA to replicate other computers. Current cores include the Gameboy and ZX Spectrum; however, we can look forward to Atari, Amiga, and other retro-computing cores for the MEGA65.

Adding cores is a simple process. Place them on the SD card, boot into the MEGA65 core utility by holding the `No Scroll` key down and turning on the power switch. Select a core to flash by holding down the [ctrl] + the corresponding slot number (1 through 7). The core utility will recognize the cores available on the SD card. Select the core, press the return key, and prepare to wait for ≈ 10 minutes. Once the core is flashed, select it and hit ⏎. You can always swap the core later by returning to the core utility screen and selecting another core. The last core selected will always be the default.

Using the new cores is a simple process. Flash the cores to one of 7 available slots on the MEGA65, configure your SD card, and away you go! The Game Boy SD card instructions are simple; create a folder called `/gbc` and place your Gameboy or Gameboy Color (Gameboy Advanced is not supported) `.ROM` files in the folder. Plug in a joystick (I'm a huge fan of [Hyperkin Ranger](https://amzn.to/3hK1iOD) and [Trooper](https://amzn.to/3BeG03y) controllers), select a game, and enjoy.

The ZX Spectrum SD card configuration includes a few additional steps, but [follow the instructions on GitHub](https://github.com/sy2002/zxuno4mega65/wiki/Getting-Started) and you will have it running in no time. There's something not natural about running ZX Spectrum software on a Commodore computer.

> At the time of this writing, the ZX Spectrum core does not support the HDMI connection. Use the VGA connection for output to a monitor.

"But retroCombs, I can do this on a [MiSTer](https://github.com/MiSTer-devel/Main_MiSTer/wiki)!" You can; however, my personal gripe about cores on various devices is the keyboard and original experience. The ZX Spectrum core on my MEGA will always be a curiosity. Why? Great question! It's the keyboard, retro-computing enthusiast friend of mine. When you add a ZX Spectrum core to the MEGA65, you have to figure out the keyboard mapping because the MEGA65 keyboard a Commodore layout, not a ZX Spectrum layout. This is why I backed the [ZX Spectrum Next 2](https://www.kickstarter.com/projects/spectrumnext/zx-spectrum-next-issue-2). I want an original hardware experience that includes an accurate keyboard.

![MiSTer](https://github.com/MiSTer-devel/Main_MiSTer/wiki/pictures/MiSTer.jpg)
A MiSTer, Source: [MiSTer-Devel GitHub page](https://github.com/MiSTer-devel)

I might throw and Amiga core on the MEGA65 when it's available, along with other Commodore cores; however, the Gameboy and ZX Spectrum cores don't appeal to me on this machine. There are far too many obtainable recreations that provide an more authentic device experience.

### Bonus 2: Make a phone call

What? You can make a phone call on the MEGA65. Well, no (at least not now, but could a VOIP application find its way to the MEGA65?); however, there is a companion device in development, the MEGAphone. What's a MEGAphone? First, it's a handheld MEGA65. That's right, all the processing power and retro-computing goodness of the MEGA65 in the palm of your hand. The MEGAphone includes a touch screen, on-screen keyboard, and game controls for on-the-go gaming. I do like a handheld device (and I'll prove it in an upcoming blog post and companion videos).

![MEGAphone1](https://mega65.org/assets/images/portfolio/grid-portfolio8.jpg)
Source: [MEGA65](https://mega65.org)

Second, its a phone with a "careful security design of the hardware, that isolates all the 'untrustable' parts, like the cellular modem." The design will provide a secure phone, with exceptional longevity, that you can trust due to the open nature of the hardware/software solution that is no longer serviceable by the service provider, but by the consumer. Watch Paul Gardner-Stephen's [FPGA based mobile phone: *Creating a truly open and trustable mobile communications device*
](https://youtu.be/KuNB4ocZDXA) presentation on YouTube to learn more (and be entertained at the same time).

Third, it's a mesh networking device that uses UHF packet radio. In the event of an emergency or pandemic, the mesh networking can spring into action to allow communication and data transfer to essential workers or public service officials. Adding a solar powered rechargeable battery will ensure the device has unlimited power for these emergencies. Oh, and you can use that same network to play games over UHF!

![MEGAphone2](https://mega65.org/assets/images/portfolio/grid-portfolio9.jpg)
Source: [MEGA65](https://mega65.org)

Fourth, it will use a Raspberry Pi compute module to allow the installation of Android with a focus on accessibility features. As the father of a special needs child, I appreciate this added focus on making the MEGAphone not only a fun device, but one that can help provide access for those with disabilities. Utilizing a compute module will allow the MEGAphone to continue to receive hardware and Android updates for many years to come; unlike current phone designs.

There's much more to learn about this device. Work on the MEGAPhone and the MEGA65 in tandem supports the development of each platform. This will be another  project to follow. You can read all the details at the [MEGAphone PCB Changes](https://c65gs.blogspot.com/2020/11/megaphone-pcb-changes.html) blog post.
