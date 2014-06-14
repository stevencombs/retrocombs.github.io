---
layout: post
title: Why I moved from Blogger to Jekyll
date: 2014-06-13 21:10:20
comments: true
category: web
---

[Blogger](www.blogger.com) was my blogging platform of choice for several years. Blogger was the host for my:

* personal blog: <http://www.stevencombs.com>
* tech blog: <http://www.docstechnotes.com>
* LEGO blog: <http://www.bricksinmypocket.org>

Over the 2014 Memorial Day weekend, I decided to migrate two blogs (personal and tech) to a single [Jekyll](http://jekyllrb.com) blog and host it on [GitHub](http://github.com/). You are reading this post on the new site.

<a href="http://www.stevencombs.com/images/posts/2014-06-13-stevencombs.site.png"><img style="margin-left: 10px; margin-bottom: 10px;" src="http://www.stevencombs.com/images/posts/2014-06-13-stevencombs.site.png" align="center" width="100%" /></a>

I would not recommend every Blogger user make this transition; however, consider it if you have even basic knowledge of the following:

* [command line](http://en.wikipedia.org/wiki/Command_line)
* [Markdown](http://en.wikipedia.org/wiki/Markdown)
* [GitHub](https://github.com/)
* [CSS](http://en.wikipedia.org/wiki/CSS)
* [HTML5](http://en.wikipedia.org/wiki/HTML5)

You do not need to be a master in all of these skills to make the transition, but combine an understanding of the basics, online search skills and a willingness to learn from your mistakes and you will enjoy the transition. Your reward will be new skills and a better understanding of your blog [backend](http://en.wikipedia.org/wiki/Backend) than you ever had using Blogger. This post will not show you how to [set up a Jekyll blog](http://jekyllbootstrap.com/), but rather provides my thoughts on why I made the transition from Jekyll to Blogger.

## Back to the 1990s
Jekyll is a very different blogging platform than Blogger; although you would be hard pressed to notice this visually. While most blogging platforms use a backend database to manage content, Jekyll takes a different approach:

> Jekyll is a simple, blog-aware, static site generator. It takes a template directory containing raw text files in various formats, runs it through Markdown (or Textile) and Liquid converters, and spits out a complete, ready-to-publish static website suitable for serving with your favorite web server. Jekyll also happens to be the engine behind GitHub Pages, which means you can use Jekyll to host your project’s page, blog, or website from GitHub’s servers for **free**.

For those who’ve been around the web and web programming for some time, you might consider static sites a return to the 1990s. In a way it is and I’ve found this to be a very good thing. Because Jekyll removes the database backend, I’ve noticed a huge increase not only in the speed of my site, but also a huge decrease in the time required to write, manage and post my content.

<a href="http://www.stevencombs.com/images/posts/2012-06-05-github-site-files.png"><img style="margin-left: 10px; margin-bottom: 10px;" src="http://www.stevencombs.com/images/posts/2014-06-13-github-site-files.png" align="center" width="100%" /></a>

This is an extremely rudimentary description of Jekyll. If you want more, I recommend you check out their [Welcome](http://jekyllrb.com/docs/home/) page. It’s loaded with some great information including a quick start guide.

## Benefits of Jekyll
While site speed would be reason enough to make the transition, there are other reasons. Below are my favorites.

### Cost:
Using Blogger for years, I am very familiar with the free model and its limitations. What I appreciate about Jekyll, when served on GitHub, is that there are very few limitations. GitHub provides free hosting and due to the nature of GitHub (code sharing), I have access to every bit of code on my site. Nothing is hidden and I am not crippled in any way from making changes (which as you can imagine has caused a few hiccups along the way). GitHub doesn’t even charge to attach a custom domain!

What you do lose is some advanced web technology access such as Perl, Python, PHP, etc. With Jekyll on GitHub you are limited to HTML, CSS and Javascript. Let’s face it though, 95% of those who maintain a blog probably won’t use anything other than those three technologies. I find in my research and experimentation that you can do some amazing things with these three technologies alone!

### Markdown:
Jekyll lets you compose blog posts in several different markup languages such as [HTML](http://en.wikipedia.org/wiki/HTML), [Latex](http://en.wikipedia.org/wiki/LaTeX), [Markdown](http://daringfireball.net/projects/markdown/) and it’s more feature rich sister, [MultiMarkdown](http://fletcherpenney.net/multimarkdown/). I use Markdown for almost all my writing – including business/academic writing. I won’t go into the why’s here, but if you are a Markdown user, you already get it.

Being able to compose my posts natively in Markdown provides me with several benefits:

* Legibility – even though Markdown uses some code to format text, it is extremely legible.
* Speed - I can quickly create and format a Markdown post and not worry about HTML code or heavy WYSIWYG tools.
* Editors – I can use one of several good Markdown editors such as [Editorial](https://itunes.apple.com/us/app/editorial/id673907758?mt=8&uo=4&at=10I9LR&ct=iTunes) on my iPad, [Byword](https://itunes.apple.com/us/app/byword/id420212497?mt=12&uo=4&at=10I9LR&ct=iTunes) on my Mac or iPad, and [Atom](http:atom.io) on my Mac. I use [Marked](https://itunes.apple.com/us/app/marked/id448925439?mt=12&uo=4&at=10I9LR&ct=iTunes) to preview my content before posting.
* Search - Markdown files are simple text files. This allows content to be easily searched and the files quickly found using Spotlight or [Alfred](https://itunes.apple.com/us/app/alfred/id405843582?mt=12&uo=4&at=10I9LR&ct=iTunes)
* Portability – Markdown file content is easily reusable so I can repurpose my content in other documents and presentations. To reformat a Markdown post to a presentation, give [Deckset](https://itunes.apple.com/us/app/deckset-turn-your-notes-into/id847496013?mt=12&uo=4?at=10l9LR) a shot.

### Dropbox and GitHub:
My Jekyll blog is hosted in a GitHub repository. On my Macs, I keep my synced GitHub repository in a [Dropbox](https://db.tt/11cphuY) folder. This keeps every file of my site synced from computer to computer as well as with my GitHub repository, complete with versioning inherent with both Dropbox and GitHub. Now that’s redundancy. Using Dropbox, I have access to any file on any computer or iOS device. I use [Alfred](https://itunes.apple.com/us/app/alfred/id405843582?mt=12&uo=4?at=10l9LR) to quickly locate and edit a blog post and I can use tools like [Atom](http://atom.io) and [Diet Coda](https://itunes.apple.com/us/app/diet-coda/id500906297?mt=8&uo=4?at=10l9LR) to edit the CSS/HTML5/Javascript files.

The only draw back currently is there is no way to make an edit and commit those edit to GitHub natively from my iPad without a remote connection to a Mac. If someone has a way around this, drop a comment below. This really isn’t a huge issue since I can make my commits/posts once I am back at one of my Macs, but it is the one thing that keeps me from being able to use my iPad Air exclusively to manage my blog.

### Maintain a development version on your Mac
You can actually run Jekyll on your computer and host a development version of your site (or a live version if you have a Mac server available and configured). It’s easy to simply copy the Dropbox folder that contains your live site to a new folder, fire up the *Terminal*, navigate to the folder and then issue the following command:

`jekyll serve`

Of course you need to ensure Jekyll is installed on your Mac and the [Jekyll installation documentation](http://jekyllrb.com/docs/installation/) makes this a pretty quick and simple process. Once you have everything configured the way you want it, you simply copy the changes to your live directory and perform a GitHub commit. This is a great way to learn and try out new CSS/HTML5/Javascript technologies.

## Flexibility
Utilizing static pages rather than a database to manage content provides an amazing amount of flexibility not possible with Blogger. For instance, with Blogger, every post and page requires the use of the same site theme. With Jekyll, I can throw styles out the window and create unique pages that are different from my site theme.

As an example, let’s say I want to sell a car. I probably don’t want that page associated with my blog on a long term basis. It is, hopefully, a short term need. With Jekyll I can create a simple HTML page that provides information about the car for sale and then spiff it up a bit with some HTML5 and CSS. This page can then have it’s own unique landing point within my domain like `www.stevencombs.com/car-for-sale`. This is not possible using Blogger.

Another flexibility example is the ability to have individual templates based on categories. If I have a post categorized *technology*, I can have a unique graphic for every post within this category. Again, not possible with Blogger.

## Drawbacks of Jekyll
For all of its strengths, there are a few drawbacks to Jekyll. Below is a bullet list of, what I consider, minor issues:

* Lack of templates - Unlike Blogger, there is not an abundance of templates available. Jekyll just doesn’t have the user base of those two platforms. Be prepared to look like every other Jekyll blog unless you are ready to roll up your sleeves, dig deep and modify the default [Jekyll bootstrap theme’s](http://jekyllbootstrap.com/usage/jekyll-theming.html) CSS.
* Learning curve - To use Jekyll, you need to understand GitHub and [GitHub pages](https://pages.github.com/). This doesn’t necessarily mean new *Terminal* commands as there is a pretty fantastic GUI [GitHub Mac app](https://mac.github.com/). In my case, this was not a drawback, but rather a learning opportunity. For some though, this will be a “non-starter.”
* You can’t post from iOS – I am unable to commit/post to my Jekyll site from an iOS device.
* No dashboard – Blogger provides an online dashboard to modify blog settings and to create posts/pages. Using Jekyll, this is done manually on a file by file basis. While I don’t consider this a drawback, many new bloggers will. Don’t go into Jekyll unless you are comfortable working without a GUI to manage and create posts for your blog. 

## Summing up
Blogger served its purpose for a time and was a very good choice for someone who did not want to be saddled down with monthly hosting fees; however, Jekyll and GitHub together is a home run. If you want to maintain your blog on the cheap (free), have full control over your site design, and have availability to a whole slew of text/code editing tools, you will appreciate the switch. 

As I’ve warned, it does come with a learning curve; however, you’ve nothing to loose. You can keep your Blogger site and build your new site on the side. When you like your new site, just make it live! Porting content from your Blogger site to Jekyll is also pretty easy. The Jekyll site provides all the [tools you need](http://jekyllrb.com/docs/migrations/).

If you do make the switch, or you are already a Jekyll user, drop a comment below and share your site and experience. I would love to see what others are doing given that my site is, like my CSS and HTML5 skills, fairly rudimentary. Although I do like the custom images on the [home page](http://www.stevencombs.com) I created using [iDraw](https://itunes.apple.com/us/app/idraw/id404705039?mt=12&uo=4?at=10l9LR)!
