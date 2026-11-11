(function () {
  var tile = document.getElementById("archive-tile");
  var row1 = document.getElementById("blog-row-1");
  var row2 = document.getElementById("blog-row-2");
  if (!tile || !row1 || !row2 || !window.fetch) return;

  var src = tile.getAttribute("data-src");
  if (!src) return;

  var photo = tile.querySelector(".archive-photo");
  if (photo) {
    photo.addEventListener("error", function () {
      photo.hidden = true;
      photo.removeAttribute("src");
    });
  }

  fetch(src, { credentials: "same-origin" })
    .then(function (res) {
      if (!res.ok) throw new Error("status");
      return res.json();
    })
    .then(function (posts) {
      if (!Array.isArray(posts) || !posts.length) return;
      var now = new Date();
      var cutoff = new Date(now.getFullYear() - 5, now.getMonth(), now.getDate());
      var seen = {};
      var links = document.querySelectorAll("#from-blog .post:not(.archive-tile) a");
      for (var i = 0; i < links.length; i++) {
        var href = links[i].getAttribute("href");
        if (href) seen[href] = true;
      }
      var eligible = [];
      for (var j = 0; j < posts.length; j++) {
        var post = posts[j];
        if (!post || !post.title || !post.url || !post.date) continue;
        if (seen[post.url]) continue;
        if (!olderThan(post.date, cutoff)) continue;
        eligible.push(post);
      }
      if (!eligible.length) return;
      fill(tile, eligible[Math.floor(Math.random() * eligible.length)]);
      balanceRows(row1, row2);
      tile.hidden = false;
    })
    .catch(function () {});

  function olderThan(iso, cutoff) {
    var parts = String(iso).slice(0, 10).split("-");
    if (parts.length !== 3) return false;
    var y = parseInt(parts[0], 10);
    var m = parseInt(parts[1], 10);
    var d = parseInt(parts[2], 10);
    if (!y || m < 1 || m > 12 || d < 1 || d > 31) return false;
    var posted = new Date(y, m - 1, d);
    if (posted.getFullYear() !== y || posted.getMonth() !== m - 1 || posted.getDate() !== d) return false;
    return posted.getTime() < cutoff.getTime();
  }

  function fill(node, post) {
    var year = node.querySelector(".archive-year");
    if (year) year.textContent = post.year || String(post.date).slice(0, 4);
    var time = node.querySelector("time");
    var day = String(post.date).slice(0, 10);
    if (time) {
      time.setAttribute("datetime", day);
      time.textContent = day;
    }
    var link = node.querySelector("h4 a");
    if (link) {
      link.href = post.url;
      link.textContent = post.title;
    }
    var excerpt = node.querySelector(".archive-excerpt");
    if (excerpt) excerpt.textContent = post.excerpt || "";
    if (photo && post.image) {
      photo.alt = post.image_alt || post.title;
      photo.src = post.image;
      photo.hidden = false;
    }
    var pill = node.querySelector(".pill");
    if (!pill) return;
    if (post.topic && post.topic_url) {
      pill.href = post.topic_url;
      pill.textContent = post.topic;
      pill.hidden = false;
    } else if (post.categories && post.categories.length) {
      pill.href = "/categories";
      pill.textContent = String(post.categories[0]);
      pill.hidden = false;
    }
  }

  function balanceRows(firstRow, secondRow) {
    var first = rowPosts(firstRow);
    var second = rowPosts(secondRow);
    if (first.length === 4 && second.length === 4) {
      secondRow.insertBefore(first[3], second[0]);
      second[3].hidden = true;
    }
  }

  function rowPosts(row) {
    var found = [];
    for (var i = 0; i < row.children.length; i++) {
      var child = row.children[i];
      if (!child.classList) continue;
      if (!child.classList.contains("post") || child.classList.contains("archive-tile")) continue;
      found.push(child);
    }
    return found;
  }
})();
