---
layout: pages
title: ZX Spectrum Next Hub
description: "Start here for the ZX Spectrum Next: my KS3 Issue 5 Quick Start, the NextPi Raspberry Pi Zero accelerator install, and every Next post and video on retroCombs."
permalink: /zx-spectrum-next
redirect_from:
  - /ks2
banner: zxspectrum
banner_alt: "ZX Spectrum topic banner"
ads: light
wide: true
---

{% comment %}
  DRAFT copy, needs Editor review (Wave 2).
  /ks2 redirect target is a VERIFY item in the PR.
  KS2 Issue 4 vs KS3 Issue 5 comparison and troubleshooting FAQ wait on ZX Spectrum Expert.
{% endcomment %}
My ZX Spectrum Next posts and videos, in one place. If you just got a Next, start with the Quick Start. When you are ready to add the Raspberry Pi Zero accelerator, the NextPi guide walks through the install.

{% assign zx_start = "" | split: "" %}
{% assign slugs1 = "zx-spectrum-next-quick-start,zx-spectrum-next-nextpi-install" | split: "," %}
{% for s in slugs1 %}
  {% assign hit = site.posts | where_exp: "p", "p.path contains s" %}
  {% assign zx_start = zx_start | concat: hit %}
{% endfor %}

## Start Here

{% include post-cards.html items=zx_start %}

## More ZX Spectrum

For the classic Spectrum and everything else Sinclair, see the [ZX Spectrum topic page](/zxspectrum).
