---
layout: post
title: 'Master the MEGA65 Keyboard Addendum'
date: 2022-07-01
author: 'Steven B. Combs, Ph.D.'
email: 'retrocombs@icloud.com'
comments: yes
permalink: master-mega65-keyboard-addendum
category: mega65
---

My [Master the MEGA65 Keyboard](/master-mega65-keyboard) created a lot of conversation. I knew during the creation of that content that I was going to miss, or mis-explain, concepts and I was ready for the comments and suggestions to roll in. The MEGA65 community didn't let me down and in this blog post and companion video, I've captured the best additions to further our knowledge of the MEGA65 and continue to build a mastery of the keyboard.

![MEGA65 Dev Kit Keyboard](/images/mega65/dev-kit-keyboard.jpg)

I want to thank everyone who contributed to this addendum and I've done my best to give proper attribution and with a first name or handle. If you'd like your entire name listed, along with a link, or if I missed a recommendation, please drop me an [email](mailto:retrocombs@icloud.com) and I'll correct on this blog post.

----

**Table of Contents**

<!-- TOC -->

- [Support the Blog and Channel](#support-the-blog-and-channel)
- [Companion YouTube Video](#companion-youtube-video)
- [Video Errata](#video-errata)
- [Links Mentioned in this Episode](#links-mentioned-in-this-episode)
- [Additional Keyboard Mastery Skills](#additional-keyboard-mastery-skills)
  - [Boot Various ROMs](#boot-various-roms)
  - [SHIFT + RETURN](#shift--return)
  - [HELP](#help)
  - [↑ Key](#↑-key)
  - [CAPS LOCK](#caps-lock)
  - [Window Mode](#window-mode)
  - [Function Keys](#function-keys)
  - [Save Program](#save-program)
- [Conclusion](#conclusion)
- [Join the Fun](#join-the-fun)

<!-- /TOC -->

----

## Support the Blog and Channel

You can now support me via [my Buy Me A Coffee page](https://www.buymeacoffee.com/retroCombs/) with a onetime activity or become a full member via my fun Commodore inspired membership levels. When you support the channel, you get additional content and fun extras. Check out [the membership levels](https://www.buymeacoffee.com/retroCombs) to learn more.

Thank you to these members for supporting me at [the C128 and MEGA65 level](https://www.buymeacoffee.com/retroCombs/membership); making them retroCombs (executive) producers:

**Producers:**

- [Jamie's Hack Shack](https://www.youtube.com/channel/UC-otrG2r_FluXkR8lUYWdPg)
- The Lovely Accountant

**Executive Producers:**

- Boba Fett
- [Mislav Krleža](https://twitter.com/KrlezaMislav)
- [Mindrail](https://twitter.com/mindrail)

## Companion YouTube Video

Title: _‌Master the MEGA65 Keyboard Addendum_

<div style="position:relative;padding-top:56.25%;"><p><iframe src="https://www.youtube.com/embed/1eoSACw2cKM" frameborder="0" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true" style="position:absolute;top:0;left:0;width:100%;height:100%;"></iframe></p></div>

## Video Errata

None as of 2022-07-01.

## Links Mentioned in this Episode

Below are the links I mention in this blog post and companion video. All Amazon links are affiliate links. I’d like to thank everyone for your support of the blog and the YouTube channel by starting your purchases here!

1. [Master the MEGA65 Keyboard](/master-mega65-keyboard)
2. [MEGA65 Computer](https://www.mega65.org)
3. [MEGA65 FileHost](https://files.mega65.org)

## Additional Keyboard Mastery Skills

Let's jump right into the addendum, starting with a way to boot to different ROM versions.

### Boot Various ROMs

I showed how to boot to a specific core, but Anton shared you can boot to one of ten ROMs. The key to this trick is to name the ROMs with the format `MEGA65#.ROM` with `#` a value from 1 to 0.

Here's an example:

1. Load the most current ROM and name it `MEGA65.ROM`
2. Load the first C65 ROM (911001) and name it `MEGA651.ROM`
3. Load the second C65 ROM (911210) and name it `MEGA652.ROM`
4. Load the Open ROM and name it `MEGA653.ROM`
4. Hold the 1, 2, or 3 key while you power up the MEGA65 to boot the different ROM.

> **NOTE:** Remember that the original C65 ROMs are owned by Cloanto. If you own a DevKit or a MEGA65, you have rights to the ROM; however, if you don't, you can purchase them inexpensively ($10 USD) as part of [Cloanto's C64 Forever](https://www.c64forever.com/).

This is handy if you want a nostalgic experience to run the original C65 ROMs or to test various MEGA65 ROMs like the [Open ROM](https://files.mega65.org?id=8aec2fba-3b0a-4677-80ae-7a7f5f4f0cb8).

### SHIFT + RETURN

Deft reminded me of a feature I use all the time but failed to mention in the previous video. How to enter a line of text and then press enter to jump the next line. Instead of pressing ENTER, press SHIFT + RETURN and the MEGA65 won't parse the line.

This is hand for demonstrations where you want to type instructions or greetings on the screen, move to the next line, and not receive a syntax error.

### HELP

Paul reminded me of another tap on the keyboard I use but failed to include. I mentioned in the video that the HELP key did nothing. That was wrong!

Use the HELP key to identify a line of code with a syntax error. When a BASIC program syntax error occurs, press the HELP key and the MEGA65 will list the first line with an error.

This key is indispensable during BASIC programming sessions.

### ↑ Key

Bit Shifter watched the last video and noted my curiosity about why the ↑ key does nothing beside input an up arrow and my suggestion that it do something useful.

He went to work and made it more useful. In the latest [MEGA65.ROM](https://files.mega65.org?id=54e69439-f25e-4124-8c78-22ea7ddc0f1c), you can now use the key to RUN a file on a disk. For example; instead of typing:

`RUN "FILENAME"`

You can now save keystrokes and type:

`↑ "FILENAME"`

This makes it a great addition to the `/ "FILENAME"` command, which is equivalent to `LOAD "FILENAME"` and remember, for both examples, the closed quotation mark is optional; saving even more keystrokes. Thanks Bit Shifter!

### CAPS LOCK

Deft shared that CAPS LOCK super power (ramping the processor speed to 40 Mhz) works in C64 mode.

This is useful when listing long C64 BASIC programs or loading software from legacy devices.

### Window Mode

When using window mode (ESC + T) There are two ways to exit. I mentioned the first option in the previous video.

1. RUN/STOP + RESTORE
2. Press HOME twice

I'm learning that windows can be handy and am going to explore them in more detail.

### Function Keys

Dan came in with the next two recommendations regarding function keys, but before I share his tips, let me add another:

You can toggle function key operation with these two commands: `KEY ON` to enable function keys and `KEY OFF` to disable function keys. You can use this in either immediate mode or in BASIC. The command `KEY` alone will list the function key assignments as shown below:

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

![KEY Command Listing](/images/mega65/key-command.png)

CHR$ codes don't have a PETSCII equivalent and cannot appear inside a quote. This listed include:

- 27 = Escape
- 13 = Return
- 34 = Double Quote
- 141 = Line Feed (Does Not Parse the Command)

In my original video I pondered, why do F6, F10, and F12 just print "KEY6" "KEY10" or "KEY12"? Dan suggests this is a way of setting up a KEY command to make modifications. Cursor up to and type after to define each one. As an example, use the `KEY` command to list the functions and then scroll up to the F6 entry and replace with:

`KEY6,"RETROCOMBS"` followed by ENTER

When you press F6, the MEGA65 will now display RETROCOMBS. And we all want our MEGA65's to print RETROCOMBS? Don't we?

While not part of this video, you can save these modifications to the `AUTOBOOT.C65` file on a disk or disk image and they will load automatically when you reset or power cycle the MEGA65.

### Save Program

If you pressed the RESET button and then realize that you forgot to save your BASIC program, no need to panic. Type `NEW RESTORE`. Important to note that this will not work if you use an AUTOBOOT.C65 program since that will overwrite the BASIC program in memory.

## Conclusion

I suspect there are other things I missed. If there are, post them in the comments and if enough of you continue to provide great tips, I might consider another addendum. With the speed at which developers add features, this may be a necessity.

## Join the Fun

Don't miss the retro-computing fun. <font color="red">SUBSCRIBE</font> to my [YouTube channel](https://www.youtube.com/stevencombs) and check out [my other posts]().

Help make this content better! Leave your comments, corrections, additions, and thoughts in the comments below. You can email me at [retrocombs@icloud.com](mailto:retrocombs@icloud.com). Thanks for reading and if you are inclined, please let others know about the blog using the hashtag #retroCombs.

🕹️ retroCombs, OUT!
