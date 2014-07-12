---
layout: post
title: "Alfred Workflow - Remove Duplicate Contextual Menu Items"
date: "2013-04-13"
comments: true
category: alfred
---

Ever right-click on a file to choose an application to use and find multiple duplicate entries for an app (as shown in the image below)? This is a common issue for those of us who update or demo software regularly. I become a bit frustrated with it so I created this [Alfred](http://www.alfredapp.com) workflow to correct the issue.

![](http://2.bp.blogspot.com/-lU3_R1CRxjk/UIb0mkMR6kI/AAAAAAABDEQ/VT4BCpg08v8/s1600/alfred-icon.png)

This Alfred Workflow (PowerPack required) will remove those pesky duplicates quickly. The workflow simply makes it quick and easy to access [a terminal shell script](https://github.com/stevencombs/Remove-Duplicate-Contextual-Menu-Items/blob/master/rdcmi.command) using Alfred. It is a regular extension in my Alfred arsenal.

It was a simple process to create the workflow once the Alfred developers provided the secret sauce via a tweet to help me through a “I should have thought of that” moment.

> @stevencombs simply use the "Run Script" action instead of "Terminal Command" :)
> — Alfred App @alfredapp) March 23, 2013

**Download:**

Click the image below to download the Alfred workflow:

[![](/images/common/alfred-workflow-icon100x80.png)](https://dl.dropboxusercontent.com/u/217516/Alfred%20Extensions/Remove%20duplicate%20contextual%20menu%20items.alfredworkflow)

**Install:**

* Locate the download
* Double-click the _Remove Duplicate Contextual Menu Items.alfredworkflow_ – Alfred 2 will automatically install the workflow

**Usage:**

* Activate Alfred
* type `rdcmi`
* Select Remove Duplicate Contextual Menu Items from the Alfred menu - Finder will restart and an audio acknowledgement will complete the process
* Right-click a file to verify that the duplicates are removed

[View the GitHub Repository](https://github.com/stevencombs/Remove-Duplicate-Contextual-Menu-Items)
