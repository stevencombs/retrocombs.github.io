---
layout: pages
title: Hello World - a computer languages comparison
---

<!-- Insert Blinking Cursor Image -->
<!-- Convert below to Blog Post when complete -->
*DRAFT PAGE UPDATED: November, 11th, 2014*

As an amateur coder, I often dabble in multiple languages such as Ruby, C, Arduino, Java, etc. Each language has a unique structure and specific syntax requirements (add a semi-colon at the end anyone?). 

To help jog my memory, I thought it would be beneficial for me to create a page that demonstrates the same program in multiple languages. This will serve as a primer to each language as well as a comparison. I will stick to modern languages and am likely to add more in the future. The list below contains the first languages I will work through.

If you are looking for an app to try out various languages, might I suggest [CodeRunner](!mas). It’s available in the Mac app store and is my go to app when I want to try out a snippet of code.
<!-- End Blog Post -->

<!-- Add introduction to page here from excerpts above -->

# Preparation
Many programmers create an outline of a program before they type a single line of code. This sometimes takes the form of either [pseudo code](!wiki) or a [flow chart](!wiki). I will present both, but before doing so, I will also provide a description of the program in paragraph form.

## Notes and assumptions
As I began to write the program in various languages, there are assumptions made:

* functions are a necessary programming skill
* functions allow reuse of code chunks
* there are many ways, in a single language, to solve this code project
* my code will follow, as closely as a language allows, my psuedo code
* my code will focus on the Mac OS where necessary

## Description
This program will prompt the user for a number of breaks, the amount of time between each break (in seconds) and a URL. If the number of breaks is equal to zero, the program will display a scathing message ("If you don't need a break, why'd you ask?") and exit. If the number of breaks is one or more, the program will execute. If the number of breaks is greater than 12, the program will display a scathing message ("You work too hard. Get a social life now!") and exit.

At each break interval, the requested URL will open in the default browser as a reminder to take a break.

> The inspiration for this program is from the first assignment found in the Udacity course, [Introduction to the basics of programming using Python](https://www.udacity.com/course/ud036). It is a good example of how to use Python to create useful programs and implement into your daily workflow.

## Pseudo Code
Pseudo code is a program outline that does not include any programming language specific code but is a plain english line-by-line description. Below is the pseudo code for the description above.

> **TIP:** It is useful to copy the actual outline and paste it into the an [integrated development environment](!wiki) (IDE) or program editor. After the outline is pasted, I convert each line to a comment. A good IDE, such as [Atom](!g) or [Sublime Text 3](!s), will provide a tool to do this automatically. This process creates an outline for my work.

add comments:

* program name
* program language
* program author
	
load functions (if needed and based on language):

function to prompt user:

* prompt for number of breaks
* prompt for interval between breaks
* prompt for URL
* if number of breaks is 0
	* print message "If you don't need a break, why'd you ask?"
	* quit program
* if number of breaks is greater than 12
	* print message "You work too hard. Get a social life now!"
	* quit program

function for loop:

* do while breaks is less than or equal to requested breaks
	* wait for requested period
	* run function to load web page
	* breaks is equal to breaks plus one

function to load web page:

* open default system web browser
* load requested URL

run prompt user function
run loop program function
run load URL function

## Flow Chart
A [flow chart](iwiki) is a graphical representation of programming code and is often used during the planning process. Below is the flow chart for the program described above.

*Coming soon…*

# Languages

There are numerous programming languages available and the number can be overwhelming. To reiterate, the purpose of this page is to demonstrate the use of code to do something beneficial; prompt you to take a break during the day. You will not want to learn each languague, but this quick one page guide might assist you in determining which languge you would like to learn by displaying the unique syntax of each. When complete, I will provide my personal thoughts regarding each language.

## Applescript

*Coming soon…*

## Arduino

*Coming soon…*

## C

*Coming soon…*

## Java

*Coming soon…*

## Javascript

*Coming soon…*

## Processing

*Coming soon…*

## Python

```python
webbrowser.open('http://www.stevencombs.com')
```
## Ruby

*Coming soon…*

## Swift

*Coming soon…*