---
layout: page
title: Quick Picks preview
permalink: /quick-picks-preview
description: Component preview of the retroCombs Quick Picks block.
sitemap: false
search: false
ads: false
robots: noindex, nofollow
quick_picks:
  - label: "Example pick"
    name: "TrimUI Brick"
    note: "EXAMPLE card. On a real post this line comes from Steven's own testing."
    review: "/trimui-brick-first-look"
  - label: "Example pick"
    name: "TrimUI Smart Pro"
    note: "EXAMPLE card with no buy button, the way a No affiliate link product shows."
    review: "/trimui-smart-pro-review"
---

Preview of `_includes/quick-picks.html`, for the top of comparison and roundup posts. These cards are EXAMPLES with no buy links. On a real post, each button link comes from Affiliate Links.txt through Revenue, and the block gets `rel="sponsored noopener"` and the top-of-post disclosure automatically. No prices are shown.

{% include quick-picks.html items=page.quick_picks %}
