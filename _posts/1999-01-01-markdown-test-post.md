---
layout: post
title: Markdown Test Post
date: 1999-01-01 19:19:19
comments: false
category: web
---

# Git Atom Markdown Post Test

I make numerous changes to the CSS on this blog to refine the conversion of my markdown posts to HTML. I use this post to view the effects made to the final rendering of the markdown files. This post includes the important HTML tags that are affected when Jekyll renders static pages. 

I update this page frequently with additional test content. You will notice that I include notes where I need code modifications/corrections as this is still a work in progress. 

See the bottom of this post for the raw markdown.

## Text Highlights

This is **bold**.

This is *italicized*.

This text is ~~strikethrough~~.

## Superscripts
ft<sup>2</sup> - 1^(st) - 2^(nd)

> Need to create `#post.sub` in CSS file.

## Image

![This is a test image](http://www.stevencombs.com/images/posts/2014-07-01-editorial-posts-bookmark.png)

> Need to create caption CSS (currently does not render)

## Bullet List

Check out [StevenCombs.com](http://www.stevencombs.com) for my blog posts.

* Bullet 1
* Bullet 2

## Numbered List

1. List item one
2. List item two

## Table

| Tables        | Are           | Cool  |
| ------------- |:------------- | -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |

  
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

Below is the raw markdown code for this page. [Fork this raw code on GitHub](https://github.com/stevencombs/stevencombs.github.io/blob/master/_posts/1999-01-01-markdown-test-post.md).

```markdown
---
layout: post
title: Markdown Test Post
date: 1999-01-01 19:19:19
comments: false
category: web
---

# Git Atom Markdown Post Test

I use this file to test my CSS changes.

## Image

![This is a test image](http://www.stevencombs.com/images/posts/2014-07-01-editorial-posts-bookmark.png)

## Bullet List

Check out [StevenCombs.com](http://www.stevencombs.com) for my blog posts.

* Bullet 1
* Bullet 2

## Numbered List

1. List item one
2. List item two

## Strikethrough
~~This text has strikethrough~~

## Superscripts
ft<sup>2</sup> - 1^(st) - 2^(nd)

## Table

| Tables        | Are           | Cool  |
| ------------- |:------------- | -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |

  
## Inline Code

Use this command to update: `sudo apt-get upgrade`

## Code Block

ruby
# Ruby Getting Started with Programming
# Control flow examples
# Dr. Steven B. Combs, coding novice
puts "Do"
10.times do
	print "Hello. "
end
puts ""

## Block Quote

> Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec gravida mauris id eros congue tincidunt. Nunc eget nulla non mi vehicula vehicula. Aenean sed erat. Suspendisse laoreet quam in massa. Sed risus. Nulla vulputate tincidunt lorem. Nulla ac purus.
> 
> Etiam vulputate viverra neque. Sed semper, arcu eu lobortis congue, velit mauris scelerisque erat, congue porta odio dui ut nisl. Nunc imperdiet, ipsum et aliquam tempus, nibh neque semper metus, vitae cursus odio turpis sit amet nibh. Praesent eros est, laoreet eget, viverra in, laoreet in, magna. Praesent odio odio, iaculis dictum, pulvinar a, aliquam nec, libero.

## Raw Markdown

Here’s my raw markdown code should you want to duplicate on your page as well. 

[Fork this raw code on GitHub](https://github.com/stevencombs/stevencombs.github.io/blob/master/_posts/1999-01-01-markdown-test-post.md).
```
