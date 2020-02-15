---
layout: post
title: Markdown Test Post
date: 1999-01-01 19:19:19
author: {{ site.name }}
email: {{ site.email }}
comments: false
category: web
---

I make numerous changes to the CSS on this blog to refine the conversion of my markdown posts to HTML. I use this post to view the effects made to the final rendering of the markdown files. This post includes the important HTML tags that are affected when Jekyll renders static pages.

I update this page frequently with additional test content. You will notice that I include notes where I need code modifications/corrections as this is still a work in progress.

See the bottom of this post for the raw markdown.

## Text Highlights and Bulleted List

* This is **bold**.
* This is *italicized*.
* This text is ~~strikethrough~~.

## Numbered List

1. List item one
1. List item two

## Superscripts

- ft<sup>2</sup>
- 1^(st)
- 2^(nd)

## Subscript

- H<sub>2</sub>0

## HyperLink

Check out [StevenCombs.com](http://www.stevencombs.com) for my blog posts.

## Image

![This is a test image](http://www.stevencombs.com/images/posts/2014-07-01-editorial-posts-bookmark.png)

> Need to create caption CSS (currently does not render)

## Table

| Tables        | Are           | Cool  |
| ------------- |:------------- | -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |
| raspberry pi	| rock			|   $39	|


## Inline Code

Use this command to update: `sudo apt-get upgrade`

## Code Block

```ruby
# Ruby Getting Started with Programming
# Control flow examples
# Dr. Steven B. Combs, coding novice
puts "Do"
10.times do
	print "Hello. "
end
puts ""
```

## Block Quote

> Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec gravida mauris id eros congue tincidunt. Nunc eget nulla non mi vehicula vehicula. Aenean sed erat. Suspendisse laoreet quam in massa. Sed risus. Nulla vulputate tincidunt lorem. Nulla ac purus.
>
> Etiam vulputate viverra neque. Sed semper, arcu eu lobortis congue, velit mauris scelerisque erat, congue porta odio dui ut nisl. Nunc imperdiet, ipsum et aliquam tempus, nibh neque semper metus, vitae cursus odio turpis sit amet nibh. Praesent eros est, laoreet eget, viverra in, laoreet in, magna. Praesent odio odio, iaculis dictum, pulvinar a, aliquam nec, libero.

## Raw Markdown

You can view and/or [fork the raw markdown code on GitHub](https://github.com/stevencombs/stevencombs.github.io/blob/master/_posts/1999-01-01-markdown-test-post.md) for your own blog.
