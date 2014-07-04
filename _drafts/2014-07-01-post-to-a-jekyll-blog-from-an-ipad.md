---
layout: post
title: "Post to a Jekyll blog from an iPad"
date: "2014-07-01"
comments: true
category: web
---

In an [earlier post][1], I discussed my move from [Blogger](https://www.blogger.com) to a [Jekyll blog](http://jekyllrb.com/) hosted on [GitHub](https://github.com/). One of the negatives of the move I identified was the inability to post to my blog from an iPad. I noted this was not possible because there is currently no way to manage a GitHub repository on an iOS device.

<!-- update earlier post to include edit and link to this post -->

Some ways around this include, [waiting until you get home][2], [using a remote connection][3] to a Mac and an iPhone only app, [Octopage](https://itunes.apple.com/us/app/octopart/id592802548?mt=8&uo=4&at=10l9vL). Since Octopage does not offer an iPhone version, I’m really not interested as I’m not a fan of running iPhone only apps on my iPad. I also think the option I present may even be a better solution as it allows me to use the wonderful iOS text editor [Editorial](https://itunes.apple.com/us/app/editorial/id673907758?mt=8&uo=4&at=10l9vL).

While my solution doesn't require Editorial, its use makes my workflow much easier. For those who don’t know, Editorial includes a built-in web browser. This allows you to write, and research all within the same app. No need to switch to another browser. You can also include bookmarks within the editor to quickly launch sites within the app. I will use both of these features as the basis for my all-in-one Jekyll blog posting solution.

I am a relatively new user of GitHub and what some may already know, I recently discovered. You can add files to a GitHub repository using a web browser. GitHub includes a rudimentary web browser based editor that you can use to create/edit code or text files.

In Editorial, I created a bookmark to my blog's GitHub `_posts` online directory. In the image below I show this bookmark.

![Editorial bookmark to GitHub](http://www.stevencombs.com/images/posts/2014-07-01-editorial-posts-bookmark.png)

When I tap the Editorial bookmark, GitHub provides an online list of the `_posts` directory within its built in web browser as shown in the image below.

![Online GitHub page to Jekyll _posts](http://www.stevencombs.com/images/posts/2014-07-01-jekyll-posts.png)

See the **`+`** symbol highlighted? That's the secret sauce. If you click the **`+`** symbol, GitHub will present a new online form as shown in the image below.

![Online GitHub new file form page](http://www.stevencombs.com/images/posts/2014-07-01-jekyll-posts-form.png)

Add the title of the post, copy the markdown from the Editorial edit window, return to the web browser view and then paste the markdown code. Update the commit information at the bottom of the page (including optional notes) and then click the `Commit new file` at the bottom-right of the page. The post is now added to your blog.

That's pretty simple. Given Editorial's amazing extensibility through the built in Python interpreter, I have to wonder if this process can be automated. Maybe some enterprising programmer out there can figure this one out. Doubtful I'll have time to do so. Still, that's a pretty easy solution that allows me to use my iPad for a complete Jekyll blog posting solution.

[1]: http://www.stevencombs.com/web/2014/06/13/why-i-moved-from-blogger-to-jekyll.html "Why I moved from Blogger to Jekyll"
[2]: http://www.garron.me/en/blog/blogging-from-ipad-jekyll-dropbox.html "Blogging from the iPad with Jekyll"
[3]: http://www.candlerblog.com/2012/04/01/remote-octopress-workflow/ "Remote Blogging with Octopress"
