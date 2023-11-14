---
layout: post
title: 'HOWTO: Say goodbye to TextExpander and hello to Dash'
date: '2015-09-16'
author: 'Steven B. Combs, Ph.D.'
email: 'retrocombs@icloud.com'
comments: 'yes'
categories:
  - apple
tags:
  - howto
  - apple
  - mac
  - textexpander
  - dash
  - text
  - expansion
---

For several years [TextExpander](https://smilesoftware.com/TextExpander/) has been my go to Mac text expansion utility. There was a brief switch to [aText](https://itunes.apple.com/us/app/atext/id488566438?mt=12&uo=4&at=10l9vL); however, I came back to TextExpander because it has more polish and better community support. Recently a new version of TextExpander was released (version 5.0). Version 5 includes new features, most notably the ability to identify and create expansion snippets automatically. For me, this feature did not compel me to purchase the $19 upgrade.

> **What is a text expansion utility?** It is a utility application that allows you to type a short string of text that automatically expands to a longer string. For instance, I type `itcc` and it expands to `Ivy Tech Community College`as soon as I type hit the space bar. Most text expansion utilities include additional features, but this is the primary use.

There were three separate utilities installed on my Mac that include text expansion capabilities:

1. [TextExpander](https://smilesoftware.com/TextExpander/)
2. [Alfred](https://itunes.apple.com/us/app/alfred/id405843582?mt=12&uo=4&at=10l9vL)
3. [Dash](https://itunes.apple.com/us/app/dash-3-api-docs-snippets./id449589707?mt=12&uo=4&at=10l9vL)

I experimented with text expansion using Alfred in the past. It works, but it is less than ideal and it is a laborious process to create and utilize expansion snippets. Alfred is best when used as an application/file launcher and search tool.

Dash includes a code snippets (or text expansion) feature that has proven to be just what I need. Before I dive into my decision to use Dash as my go to text expansion utility, let me provide a brief synopsis of Dash's primary capabilities.

# About Dash

Below is the official description for Dash:

> Dash is an API Documentation Browser and Code Snippet Manager. Dash stores snippets of code and instantly searches offline documentation sets for 150+ APIs (for a full list, see below). You can even generate your own docsets or request docsets to be included.

# Docsets?

For those unfamiliar with programming, think of an API Documentation Browser as a search tool to locate programming commands and concepts within an electronic catalog of user manuals. As an example:

While programming in Python and I cannot remember the proper syntax, usage, scope or options for the `print` command. I use Dash to search the Python docset for the `print` command. Dash provides the information shown in the image below.

![](/images/posts/2015-09-16-goodbye-textexpander-hello-dash/python-print-example.png)

Docsets are not preinstalled. You choose the docsets you need based on the tasks you perform. Once chosen, Dash downloads docsets to your Mac so they are available when you are offline and also checks regularly to see if updates are available. There are over a hundred different docsets that range from Markdown, to Python, to Swift.

# Cheatsheets

Dash also provides access to cheatsheets. I use cheatsheets for [Atom](http://www.atom.io) and [iTerm2](https://www.iterm2.com/downloads.html). When I forget a keystroke or features in one of these applications, I use Dash to jog my memory. Even better, Dash integrates with Alfred. I use Alfred to perform a search and Dash displays the results.

# Create your own

Docsets and cheatsheets are programming language centric; however, you can also create your own. You could create an email/phone directory for your organization, a list of comic books, or a company procedural manual. Once you create this reference you can then share these personalized docsets or cheatsheets with others. For someone who dabbles in various programming lanaguages such as Python, Ruby and Arduino and writes extensively in Markdown; Dash is a life-saver.

# Text expansion with snippets

So how does this get us back to text expansion? I mentioned earlier that Dash also includes a snippet function. Coders use snippets to store code they reuse or as a reference for later projects. You can use various tools to save snippets, but it really makes sense to have Dash save programming snippets in the same tool you use to search docsets and cheatsheets. If you find a line or two of code in a docset that you want to reuse, you can highlight it, right-click and save it to your Dash snippets. Dash will sync snippets, docsets, and cheatsheets to all your Macs.

Snippet insertion into other applications, such as [Atom](http://www.atom.io) or [CodeRunner](https://itunes.apple.com/us/app/coderunner/id433335799?mt=12&uo=4&at=10l9vL), is done by the use of an abbreviation. For instance, you want to insert the line of code below into Atom or the Python interpreter:

``` Python
words = ['cat', 'window', 'defenestrate']
for w in words[:]:  # Loop over a slice copy of the entire list.
     if len(w) > 6:
     words.insert(0, w)
```

Instead of copying and pasting this code/template for a Python list, you instead type a snippet abbreviation such as:

`,,pylist`

Notice the two `,,` before the abbreviation `pylist`. These characters ensure you don't accidentally type the abbreviation but require you to be more intentional. Not required, but a good practice.

Snippets don't have to be lines of code though. When Dash is running, expansion of the abbreviation to any type of text occurs in any Mac application. For instance, I have the following sample snippets to save keystrokes:

| Abbr.   | Expansion                                              |
|:--------|:-------------------------------------------------------|
| wsc     | <http://www.stevencombs.com>                           |
| @@g     | <steven.combs@gmail.com>                               |
| ,,date  | inserts the current date                               |
| ,,green | #006B54 : the college's official green hex code        |
| ,,apple |  : because I can never remember the keyboard shortcut |

I currently have around 80 snippets and they work flawlessly in all applications. For general text expansion, Dash if flawless. Dash allows you to use tags to organize your snippets. This makes snippets easy to search and categorize. Below is a screenshot of Dash that displays the tags I use to keep my snippets organized.

![](/images/posts/2015-09-16-goodbye-textexpander-hello-dash/snippet-tags.png)

This list grows regularly as I find other ways to use Dash to reduce typing.

# Snippet variables

An additional power of snippets is the use of variables. Dash provides basic variables that allow you to customize snippets on the fly. For instance, I have a snippet that rapidly formats an email to our scheduler when I need to host a meeting. I type `yamr` and Dash prompts me for the meeting subject, participants, location and amount of time. Once I enter that information, the snippet expands into a formatted list of meeting requirements.

Dash also provides simple variables such as date and time. I type `,,date` and Dash will expand the current date. Very handy when I eSign documents. `,,time` will, of course, expand the time. Finally, Dash includes a cursor location variable to set the location of the cursor after the snippet expands.

# Sorry TextExpander

Granted, TextExpander is far more capable and provides advanced features that Dash will likely never include; however, I will continue to use Dash and there is no reason for me to upgrade both applications on a regular basis when Dash handles 95% of my text expansion needs. If you are new to text expansion applications, I highly recommend you try Dash first and enjoy the other capabilities the software provides. You will find snippets very easy to create and once you get started, the creation of new snippets is very addicting. TextExpander has been removed from all my Macs for several months now and I have yet to miss it.
