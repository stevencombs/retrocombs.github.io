---
layout: post
title: 'Goodbye TextExpander, hello Dash'
date: '2015-05-28 15:34'
comments: 'yes'
categories:
  - apple
---

For several years TextExpander has been my go to Mac text expansion utility. There was a brief switch to aText; however, I came back to TextExpander because it has more polish and better community support. Recently a new version of TextExpander was released (version 5.0). Version 5 includes a few new features, most notably the ability to identify and create expansion snippets automatically. For me, this feature was not compelling for the $19 upgrade price. I decided not to upgrade.

I then realized I had three separate utilities installed on my Mac that include text expansion capabilities:

1. [TextExpander]()
2. [Alfred]()
3. [Dash]()

I experimented with text expansion using Alfred in the past. I remembered that it works, but it was less than ideal and a rather laborious process to create expansion snippets. I checked that option off the list.

I then remembered that Dash featured code snippets; however, I had not tried to use them in the past. Before I dive into my experience using Dash as a text expansion utility, let me provide a synopsis of Dash's capabilities.

# About Dash

Below is the official description for Dash:

> Dash is an API Documentation Browser and Code Snippet Manager. Dash stores snippets of code and instantly searches offline documentation sets for 150+ APIs (for a full list, see below). You can even generate your own docsets or request docsets to be included.

# Docsets?

For those unfamiliar with programming, think of an API Documentation Browser as a search tool to locate programming commands and concepts within an electronic catalog of user manuals. As an example:

I am programming in Python and I cannot remember the proper syntax, usage, scope or options for the print command. I can use Dash to search  the Python docset for the print command. Dash will provide the information shown in the image below.

![](/images/posts/2015-05-28-dash-python-print-example.png)

Dash does not come with docsets preinstalled. You choose the docsets you need based on the tasks you perform. Once chosen, Dash downloads docsets to your Mac so they are available when you are offline. There are over a hundred different docsets that range from Markdown, to Python, to Swift.

# Cheatsheets

Dash also provides access to cheatsheets. I have cheatsheets for [Atom](http://www.atom.io) and [iTerm2](https://www.iterm2.com/downloads.html) installed. When I forget a keystroke or features in one of these applications, I use Dash to jog my memory. Even better, Dash integrates with Alfred. I use Alfred to perform a search and Dash displays the results.

# Create your own

Docsets and cheatsheets are very programming language centric; however, you can also create your own. You could create an email/phone directory for your organization, a list of comic books, or a company procedural manual. Once created you can then deploy these personalized docsets or cheatsheets to others. For someone who dabbles in various programming lanaguages such as; Python, Ruby and Arduino and writes extensively in Markdown, Dash is a life-saver.

# Text expansion with snippets

So how does this get us back to text expansion? I mentioned earlier that Dash also includes a snippet function. Coders use snippets tools to store code they reuse or as a reference for a later project. You could use various tools to save snippets, but it really makes sense to save programming snippets in the same tool used to review docsets. If you find a line or two of code in a docset that you want to reuse, you can highlight it, righ-click and save it to your Dash snippets. The snippets library can be saved in any location. I save mine to my Dropbox folder which is then synced to all my other Macs.

Snippet insertion into other applications, such as Atom or Mail, is done by the use of an abbreviation. For instance:

You have the code snippet below you want to insert into Atom.

``` Python
words = ['cat', 'window', 'defenestrate']
for w in words[:]:  # Loop over a slice copy of the entire list.
     if len(w) > 6:
     words.insert(0, w)
```

Instead of copying and pasting this template for a Python list, you can instead assign a snippet abbreviation such as:

`,,pylist`

Notice the two `,,` before the abbreviation `pylist`. These characters ensure you don't accidentally type the abbreviation but require you to be more intentional. Not required, but a good practice.

Snippets don't have to be lines of code though. When Dash is running, expansion of the abbreviation to any type of text occurs in any Mac application. For instance, I have the following snippets to save keystrokes:

| Abbr.   | Expansion                                              |
|:--------|:-------------------------------------------------------|
| wsc     | <http://www.stevencombs.com>                           |
| @@g     | <steven.combs@gmail.com>                               |
| ,,date  | inserts the current date                               |
| ,,green | #006B54 : the college's official green hex code        |
| ,,apple |  : because I can never remember the keyboard shortcut |

I currently have around 80 snippets and they work flawlessly in all applications. For general text expansion capabilities, Dash if flawless.

# Customize snippets

An area where I thought I might miss TextExpander was in the use of …  

Dash is $19. Get expansion and docsets for the cost of a TextExpander update.
