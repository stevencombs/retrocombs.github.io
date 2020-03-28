---
layout: post
title: 'Mac mini Media Center (MmMC) software winner'
date: 2012-03-13 19:19:19
author: 'Steven B. Combs, Ph.D.'
email: 'steven.combs@gmail.com'
comments: true
category: apple
---

I've been asked by a few, "What media center software do you use?" I've been quite coy with my answer because up and until now, I've not been able to determine a clear and definite winner.

![][1]

Well today I am happy to go on record and make a decision. Hit the link below to find out which media center software I use on my MmMC. Keep in mind that this is not a formal review of all media center software, but I do hit some highlights from each as I qualify why I feel my selection is the best. Read my selection by hitting the link below:

First let me start by listing the three media center software that were under consideration and briefly talk about why two of them were dropped out of contention:

## Boxee
Boxee [recently announced][3] that they were no longer going to support the PC platform past version 1.5. They will instead focus their development dollars on their [Boxee Box][4] and other set-top devices. While I spent several, and I mean several, hours configuring Boxee to work on the MmMC, I was never quite sure that this would be my software of choice. It was often buggy and on several occasions would cause the MmMC to hang and/or require a reboot. Since the PC platform is dead, I have have removed it from the MmMC and it is no longer in consideration. One down!

## XBMC
Up next for consideration is XBMC. XBMC is the original media center software for the Mac and has an extremely large and loyal Mac fan base. It has a beautiful interface that is very "tweakable" although cumbersome. The large user community means that you can easily find answers to your support questions. With the recent beta version release of [XBMC 11.0: Eden Beta 2][5], XBMC expands on its ease of use and configurability options.

XBMC includes an add-ons capability to further expand the feature set or easily consume other web-based media such as YouTube, TWiT, Crackle, etc. Add-ons are also provided that will tag video, display captioning and download some incredible background images that add to the overall media center experience. XBMC is gorgeous! It is also very good and for some may be just what they are looking for. I really want to like XBMC, but until they add some features, I feel there is a better solution and that is Plex.

## Plex
I'm a huge Plex fan and it is my choice for Mac mini media center software. As a side note, there are also versions available for Windows and Linux if you are so inclined. Plex is based on the XBMC platform and is a fork of that open source code. That is important to note as all the core features you find in XBMC are also available in Plex (save for an new Airplay feature in XBMC that is sorely missing in Plex, but I have a hack for that below). However, the coders at Plex have really taken the concept of content access several steps further. Let's dive into the Plex features by asking a series of questions.

![][6]

### Can I watch video and listen to audio on my MmMC on the go?
There's iOS and Android app for that. These apps automatically tunnel through the Internet to your home MmMC and actually stream, via transcoding, your content to those devices. So even if the video on your MmMC isn't encoded properly, the Plex Media Server will take care of the dirty work.

To start streaming your content, [create a Plex account][7]. Take that account information and plug it into the preferences on your Plex Media Center MmMC install. Ensure that you have the Plex Media Server software installed and running. This is a [separate download][8] from the [Plex Media Center application][9]. Configure the Plex Media Server to start upon MmMC boot-up so that your content is always available. Fire up your mobile app. Plug in your username and password on those devices and voila. You now have anywhere access to MmMC content.

![][10]

Video streamed to the Kindle Fire and iPad is gorgeous if you are on your local network. If you are on 3G or a remote network, the video adjusts to your bandwidth automatically and may become a bit jittery or pixelated. Very watchable though. Quality also depends on your providers upload speeds.

### What about watching content on another Mac or PC?
If you need access to your content on another computer and not a mobile device, you install the Plex Media Center software, plug in your Plex account credentials and you can then use the Plex Media Center software on that computer to view the content on your MmMC. Except for a bit of latency, it's almost like being back home. Now how cool is that?

Can I watch on any other devices? (Recent addition to the original post)
You betcha and one of my favorites is watching on our [Roku][11]. If you search the Roku channels list, you will find the Plex app. It's free! Just install it, run and it will search out any Plex Media Servers on your local network. Something I failed to mention earlier, that is especially appropriate here, is the fact that no matter which device you view content from, Plex remembers where you left off. So you can start watching on your MmMC, watch a bit more on your mobile device, and then finish up that episode or move on your [Roku][11].

### What about add-ons?
When it comes to add-ons, Plex also tops its competitors in number and functionality. Plex provides many more stable channels (read channels that actually work) to access content from several online video and audio providers (TWiT, Hulu, YouTube, Pandora, etc). For instance, I was not able to find a Netflix add-on in the default XBMC add-on channel listing; however, a very quick inspection in the Plex add-ons quickly revealed a Netflix channel that works (unlike my Boxee experience). If I am in error in these comments, I'm sure the passionate XBMC users out there will let me know. Now if there were only a [TCM][12] channel. We do love those great old movies.

### Can I view web content? You know, YouTube?
Plex shines when you want to consume video you find on the web on your large HDTV. If you took the extra step above to create an online account, you can now use the >[ Plex It!][13] bookmarklet to post web video directly to your Plex queue. It works like this. You browse a site and find a video you don't have time to watch or would rather see on a larger screen on the comfort of your couch (a movie trailer for instance). You select the Plex It! bookmarklet from your Chrome, or other browser, bookmarks. The bookmarklet will search out the embedded video and automatically add it to your queue. You can then fire up Plex on your MmMC at home, navigate to your queue, and then select the video to view. The queue is also available online, so you can watch from your browser late as well.

Plex also provides a unique e-mail address that you can use to send video from your mobile devices. Simply e-mail the link of the page that includes the video to the unique address and Plex will parse out this information, locate the video and add it to your queue. These two features work well with [Vimeo][14] and [YouTube][15] currently. Other sites are hit and miss.

### Can I share my content with friends and family?
A very interesting feature is included when you create an online Plex account. You can share content with other Plex accounts. Think about that for a moment. Friends and family can also stream your content to their devices once you add them to your friends list. Plex even takes this a step further and allows you to specify which content is available to your friends.

![][16]

### Yeah, but can it AirPlay?
If you have an iOS device, you can locate video on that device and then send it to your MmMC. As mentioned, this ability is not built into Plex by default, but you can follow [these slightly geeky instructions][17] to enable this feature. This hack only works for video currently, as the AirPlay audio specification apparently uses FairPlay DRM. Even though this is a hack, I have found it to be pretty stable. My hope is that as the new XMBC core code is folded into Plex, we will find the feature integrated in later versions.

### So how does it look on your HDTV?
Granted, Plex in its previous version (v9.3.4 and earlier) didn't have the gorgeous XBMC interface, but [the new beta version][18] (v0.9.5.2) has fixed this with a wonderful new default theme. The basic user interface is now attractive and very usable. You will need to tweak the interface settings a bit for your specific application, but this is easily accomplished. If you don't like the built-in theme, you can download alternatives from within the software.

### Great features, but how does video look?
I have my MmMC configured to output 720p rather than 1080p. I've done this for a several reasons. First, the MmMC doesn't have to work as hard pushing pixels. Second, most of my Plex content is ripped from my DVD collection (SD 480p). Third, I often remote control the MmMC through the built in Mac screen sharing feature. The lower resolution provides a much smoother refresh rate that makes the MmMC easier to control remotely. Lastly, I don't see a major difference in quality when viewing my content.

The bottom line is that Plex spits out some great looking video with my setup based on my content formats. I've yet to find something it can't view, save for an .mkv download – and those are always suspect. When trying out XBMC, I had a couple of files that I could hear, but not see. Boxee was worse. So once again, in my case, Plex had the leg up.

## Conclusion
I could go on and on about Plex and have really just hit the tip of the features iceberg; however, you owe it to yourself to download both the Media Center and Server software and give it a shot on your MmMC. The first time you fire up video on your iPhone or Kindle from the train, work, or school, you'll be hooked. Plex, for now, is what I consider to be the best media center software for my MmMC.

Have a question about my set up? Drop a comment below. Need me to describe a feature in a later post? I take requests so you can drop those below as well. You can also add to these Tech Notes by sharing your experiences with Plex, XBMC or Boxee. Found an error or three. Let me know because as I mention, I am my own worst editor.

[1]: http://3.bp.blogspot.com/-ClmRWvS4OVs/Tjrnz1e0j3I/AAAAAAAA3Io/VDuOltF_sgE/s200/Boxed+Mac+Mini.PNG
[3]: http://blog.boxee.tv/2011/12/26/boxee-1-5-fall-software-update/#.Tyms3ZZSQbk
[4]: http://goo.gl/ef8S1
[5]: http://xbmc.org/natethomas/2012/01/22/xbmc-11-0-eden-beta-2-available-now/
[6]: http://4.bp.blogspot.com/-SvwFe3pXg1c/Tzl7lFl_ceI/AAAAAAAA5Og/FFoRNNdDOtc/s400/Plex+Screen+Shot.png
[7]: https://my.plexapp.com/
[8]: http://goo.gl/4bYSm
[9]: http://goo.gl/RASeJ
[10]: http://3.bp.blogspot.com/-jYfBamSfa-0/Tzl7x574bjI/AAAAAAAA5Oo/bflv4xo4E7k/s320/Photo+Feb+03,+16+09+28.png
[11]: http://goo.gl/P4OQS
[12]: http://draft.blogger.com/www.tcm.com
[13]: https://my.plexapp.com/queue/help
[14]: http://draft.blogger.com/www.vimeo.com
[15]: http://draft.blogger.com/www.youtube.com
[16]: http://4.bp.blogspot.com/-BIYUElEdVio/Tzl8DHXHUoI/AAAAAAAA5Ow/eeDwKTAlFHM/s320/My+Plex+Login.png
[17]: http://forums.plexapp.com/index.php/topic/25356-airplayer-for-plex-how-to-install/
[18]: http://www.plexapp.com/download/mac-download-new.php
