---
layout: post
title: 'Master the MEGA65 Keyboard Addendum'
date: 2022-05-29
author: 'Steven B. Combs, Ph.D.'
email: 'retrocombs@icloud.com'
comments: yes
permalink: keyboard-master-addendum
category: mega65
---

My [Master the MEGA65 Keyboard](https://www.stevencombs.com/master-mega65-keyboard) created a lot of conversation. I knew during the creation of that content that I was going to miss, or mis-explain, concepts and I was ready for the comments and suggestions to roll in. The MEGA65 community didn't let me down and in this blog post and companion video, I've captured the best additions to further our knowledge of the MEGA65 and continue to build a mastery of the keyboard.

I want to thank everyone who contributed to this addendum and I've done my best to give proper attribution and with a first name or handle. If you'd like your entire name listed, along with a link, or if I missed a recommendation, please drop me an [email](mailto:retrocombs@icloud.com) and I'll correct on this blog post.

----

**Table of Contents**



----

## Support the Blog and Channel

You can now support me via [my Buy Me A Coffee page](https://www.buymeacoffee.com/retroCombs/) with a one-time activity or become a full member via my fun Commodore inspired membership levels. When you support the channel, you get additional content and fun extras. Check out [the membership levels](https://www.buymeacoffee.com/retroCombs) to learn more.

Thank you to these members for supporting me at [the C128 and MEGA65 level](https://www.buymeacoffee.com/retroCombs/membership); making them retroCombs (executive) producers:

**Producers:**

- [Jamie's Hack Shack](https://www.youtube.com/channel/UC-otrG2r_FluXkR8lUYWdPg)
- The Lovely Accountant

**Executive Producers:**

- Boba Fett
- [Mislav Krleža](https://twitter.com/KrlezaMislav)
- [Mindrail](https://twitter.com/mindrail)

## Companion YouTube Video

Title: _Title_

In the video below, I ...

<div style="position:relative;padding-top:56.25%;"><p><iframe src="link" frameborder="0" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true" style="position:absolute;top:0;left:0;width:100%;height:100%;"></iframe></p></div>

## Video Errata

None as of 2022-05-29.

## Links Mentioned in this Episode

Below are the links I mention in this blog post and companion video. All Amazon links are affiliate links. I’d like to thank everyone for your support of the blog and the YouTube channel by starting your purchases here!

1. [Master the MEGA65 Keyboard](https://www.stevencombs.com/master-mega65-keyboard)
2. [MEGA65 Computer](https://www.mega65.org)
3. [MEGA65 FileHost](https://files.mega65.org)

## Additional Keyboard Mastery Skills

Let's jump right into the addendum staring with a way to boot to differing ROM versions.

### Boot Various ROMs

I showed how to boot to a specific core, but Anton shared that you can boot to one of ten ROMs. The key to this trick is to name the ROMs with the format `MEGA65#.ROM` with `#` a value from 1 to 0.

<!-- Test with a ROM without a # -->

Here's an example:

1. Load the most current ROM and name it `MEGA65.ROM`
2. Load the first C65 ROM (911001) and name it `MEGA651.ROM`
3. Load the second C65 ROM (911210) and name it `MEGA652.ROM`
4. Load the OpenROM and name it `MEGA653.ROM`
4. Hold the 1, 2, or 3 key while you power up the MEGA65 to boot the different ROM.

> **NOTE:** Remember that the original C65 ROMs are owned by Cloanto. If you own a DevKit or a MEGA65 you do have rights to the ROM; however, if you don't, you can purchase them inexpensively ($10 USD) as part of [Cloanto's C64 Forever](https://www.c64forever.com/). 

This is handy if you want a nostalgic experience to run the original C65 ROMs or to test various MEGA65 ROMs like the [Open ROM](https://files.mega65.org?id=8aec2fba-3b0a-4677-80ae-7a7f5f4f0cb8).

### SHIFT + ENTER

Deft reminded me of a feature I use all the time but failed to mention in the previous video. How to enter a line of text and then press enter to jump the next line. Instead of pressing ENTER, press SHIFT + ENTER and the MEGA65 won't parse the line.

This is hand for demonstrations where you want to type instructions or greetings on the screen, move to the next line, and not receive a syntax error.

### HELP

Paul reminded me of another tap on the keyboard I use but failed to include. I mentioned in the video that the HELP key didn't do anything. That was wrong!

The HELP key has a purpose and that is to identify a line of code with a syntax error. When a BASIC program syntax error occurs, press the HELP key and the MEGA65 will list the first line with an error.

This key is indispensable during BASIC programming sessions.

<!-- load the submarine tracking program, break a line about mid way and then use HELP -->

### ↑ Key

Bit Shifter watched my last video noted may curiosity about why the ↑ key does nothing beside input an up arrow and my suggestion that it do something useful.

He went to work and made it more useful. In the latest [MEGA65.ROM](https://files.mega65.org?id=54e69439-f25e-4124-8c78-22ea7ddc0f1c), you can now use the key to RUN a file on a disk. For example; instead of typing:

`RUN "FILENAME"`

You can now save keystrokes and type:

`↑ "FILENAME"`

This makes it a great addition to the `/ "FILENAME"` command which is equivalent to `LOAD "FILENAME"` and remember, for both examples, the closed quotation mark is optional; saving even more keystrokes. Thanks Bit Shifter!

### CAPS LOCK

Deft shared that CAPS LOCK super power (ramping the processor speed to 40 Mhz) works in C64 mode.

This is useful when listing long C64 BASIC programs or loading software from legacy devices.

### Window Mode

When using window mode (ESC + T) There are two ways to exit. I mentioned the first option in the previous video.

1. RUN/STOP + RESTORE
2. Press HOME twice

I'm learning that windows can be handy and am going to explore them in more detail.

### Function Keys

Dan came in with the next two recommendations regarding function keys but before I share his tips, let me add another:

You can toggle function key, err, functions, with these two commands: `KEY ON` to enable function keys and `KEY OFF` to disable function keys. You can use this in either immediate mode or in BASIC. As a reminder, the command `KEY` will list the function key assignments as shown below:

```
KEY 1,CHR$(27)+"X"
KEY 2,CHR$(27)+"@"
KEY 3,"DIR"+CHR$(13)
KEY 4,"DIR "+CHR$(34)+"*=PRG"+CHR$(34)+CHR$(13)
KEY 5,"{f10}"
KEY 6,"KEY6"+CHR$(141)
KEY 7,"{f12}"
KEY 8,"MONITOR"+CHR$(13)
KEY 9,"{f9}"
KEY 10,"KEY10"+CHR$(141)
KEY 11,"{f11}"
KEY 12,"KEY12"+CHR$(141)
KEY 13,CHR$(27)+"O"
KEY 14,"{inst}"+CHR$(27)+"O"
KEY 15,"HELP"+CHR$(13)
KEY 16,"RUN "+CHR$(34)+"*"+CHR$(34)+CHR$(13)
```

This is where Dan's tip comes in. The sixteen function keys (F1-F14, HELP, and Shift + RUN) are programmable using the `KEY` command. In my list taken from the XEMU emulator, there's a mix of PETSCII control codes, shown between the `{` and `}`, and `CHR$` codes. Below is a screen capture of that listing that shows the PETSCII characters:

![KEY Command Listing](https://www.stevencombs.com/images/mega65/key-command.png)

You'll see strings with inverted characters that are PETSCII control codes and CHR$(...) codes that can't appear inside a quoted string. 27=Escape, 13=Return, 34=double quote, 141=line feed (like Return but doesn't register the command).

The default definition for F2 is ESC @, which as you noted means "erase to end of screen." F6, F10, and F12 print "KEY6" "KEY10" or "KEY12", respectively, and a line feed, as a way of setting up a KEY command that you can cursor up to and type after to define them to something else. Try: KEY6,"RETROCOMBS"

You can save and load key definitions to and from disk if you have a custom set that you want to keep. See the User's Guide entry on the KEY command.

### Save Program

If you pressed the RESET button and then realize, that you forgot to save your BASIC program, no need to panic. Press NEW + RESTORE. Important to note that this will not work if you use an AUTOBOOT.C65 program since that will overwrite the BASIC program in memory.

### MEGA65 Color Palette BASIC Program

Since this video, I did release my MEGA65 Color Palette program [version 1.5 on the FileHost](https://files.mega65.org?id=1813f548-7280-4b73-9112-abc24b90892b). This new version includes the updates below:

1. Title decorations
2. Column headings
3. Color HEX codes (thanks Tayger!)

![MEGA65 Color Palette BASIC program version 1.5](https://www.stevencombs.com/images/mega65/mega65-color-palette-version)

## Join the Fun

Don't miss the retro-computing fun. <font color="red">SUBSCRIBE</font> to my [YouTube channel](https://www.youtube.com/stevencombs) and check out [my other posts](https://www.stevencombs.com).

Help make this content better! Leave your comments, corrections, additions, and thoughts in the comments below. You can email me at [retrocombs@icloud.com](mailto:retrocombs@icloud.com). Thanks for reading and if you are inclined, please let others know about the blog using the hashtag #retroCombs.

🕹️ retroCombs, OUT!
f