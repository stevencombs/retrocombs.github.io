---
layout: pages
title: Search Page 2
---

<div id="home-search" class="home">
     <script>
         (function() {
             var cx = '<Your CSE id>';
             var gcse = document.createElement('script');
             gcse.type = 'text/javascript';
             gcse.async = true;
             gcse.src = (document.location.protocol == 'https:' ? 'https:' : 'http:') +
             '//www.google.com/cse/cse.js?cx=' + cx;
             var s = document.getElementsByTagName('script')[0];
             s.parentNode.insertBefore(gcse, s);
         })();
     </script>
     <gcse:search queryParameterName="searchString"></gcse:search>
</div>

<div id="search" align="center" style="margin-top:20px;">
  <form role="search" method="get" action="/search/" class="form-inline">
     <div class="form-group">
       <input style="height:36px;font-size:12pt;width: 100%"; id="searchString" name="searchString"
              placeholder="Search on this blog..." type="text"><br/>
       <input style="width: 100%" class="btn" id="searchButton" name="googleSearchName" type="submit" value="Search">
     </div>
  </form>
</div>
