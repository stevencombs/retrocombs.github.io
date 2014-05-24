---
layout: post
title: Integrate Google+ comments into Blogger Template
date: 2014-04-14 19:19:19
comments: true
category: code
---

__{Update: I no longer use Blogger; however, this was a popular post, so I am reposting for those who may need this information.}__

When I migrated to a new Blogger template on my old blogging platform, one of the things I did not notice (and not sure how I didn't) was that my comments were missing. I know the simple solution is to insert this small snippet into my custom Blogger template:

<script src="https://gist.github.com/stevencombs/9556035.js"></script>

The problem was I didn't know where to put it. I tried several locations and received a lot of errors. Others may have the same problem. Below are the steps from my solution.

1. Visit [Blogger in Draft][1] (my preferred web interface for Blogger).
2. Select Template from the left–hand menu.
3. Select the Edit HTML button to display your custom template.
4. Click in the template window, tap `⌘+A` to select the entire text and tap `⌘+C` top copy the text to the clipboard.
5. Paste the text into a text file for safe keeping. I put mine in [nvALT][2].
6. Copy the code snippet above.
7. Search (`⌘+F`) for a section of text similar to that found in my screen shot below. See apologies below.
8. Hit `↩` a few times to provide space for the code snippet.
9. Paste the code snippet.
10. Click the Save template button at the top of the page.
11. If no errors, open another tab in your browser and view a blog post.

If you do receive an error, immediately undo (`⌘+Z`) and once again save your template. Try again in another location. Don't worry if things go awry. You have a backup of your template in a text file. You did preform steps 4 and 5? Simply replace the botched up template with your pristine copy.

<a href="http://2.bp.blogspot.com/-pXfpvpca2QY/UyNkOyEo_3I/AAAAAAABPyk/ctc1nFZ4i_o/s1600/Google++Comments+in+Blogger+Code+Snippet.png" /><img border="0" src="http://2.bp.blogspot.com/-pXfpvpca2QY/UyNkOyEo_3I/AAAAAAABPyk/ctc1nFZ4i_o/s1600/Google++Comments+in+Blogger+Code+Snippet.png" height="436" width="640" /></a>
Click image for larger view.

I wish I could be a more specific as to the location of the code snippet, but each custom template is different. Hope this helps someone. If it does, drop a comment below.

[1]: http://draft.blogger.com/
[2]: http://brettterpstra.com/projects/nvalt/