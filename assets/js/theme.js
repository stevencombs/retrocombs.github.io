(function () {
  var dropdowns = Array.prototype.slice.call(document.querySelectorAll("header.site .dd"));
  var menuBtn = document.querySelector(".menu-btn");

  function closeDropdown(dd) {
    dd.classList.remove("open");
    var btn = dd.querySelector("button");
    if (btn) btn.setAttribute("aria-expanded", "false");
  }

  function openDropdown(dd) {
    dropdowns.forEach(function (other) {
      if (other !== dd) closeDropdown(other);
    });
    dd.classList.add("open");
    var btn = dd.querySelector("button");
    if (btn) btn.setAttribute("aria-expanded", "true");
  }

  dropdowns.forEach(function (dd) {
    var btn = dd.querySelector("button");
    if (!btn) return;
    btn.addEventListener("click", function () {
      if (dd.classList.contains("open")) closeDropdown(dd);
      else openDropdown(dd);
    });
    btn.addEventListener("keydown", function (event) {
      if (event.key !== "ArrowDown") return;
      event.preventDefault();
      openDropdown(dd);
      var first = dd.querySelector(".menu a");
      if (first) first.focus();
    });
  });

  if (menuBtn) {
    menuBtn.addEventListener("click", function () {
      var open = document.body.classList.toggle("mnav");
      menuBtn.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  document.addEventListener("click", function (event) {
    dropdowns.forEach(function (dd) {
      if (!dd.contains(event.target)) closeDropdown(dd);
    });
  });

  document.addEventListener("keydown", function (event) {
    if (event.key !== "Escape") return;
    dropdowns.forEach(function (dd) {
      if (!dd.classList.contains("open")) return;
      var btn = dd.querySelector("button");
      closeDropdown(dd);
      if (btn) btn.focus();
    });
    document.body.classList.remove("mnav");
    if (menuBtn) menuBtn.setAttribute("aria-expanded", "false");
  });
})();

(function () {
  var tpl = document.getElementById("rc-ad-sidebar");
  if (!tpl || !window.matchMedia("(min-width: 1024px)").matches) return;
  if (!tpl.content || !tpl.content.querySelector(".rc-ad")) return;

  var rail = document.querySelector("aside.rail");
  if (!rail) {
    var mainCol = document.querySelector(".page-main");
    if (!mainCol) return;
    var layout = document.createElement("div");
    layout.className = "layout";
    var col = document.createElement("div");
    while (mainCol.firstChild) col.appendChild(mainCol.firstChild);
    rail = document.createElement("aside");
    rail.className = "rail";
    rail.setAttribute("aria-label", "Sidebar");
    layout.appendChild(col);
    layout.appendChild(rail);
    mainCol.appendChild(layout);
  }

  rail.appendChild(tpl.content.cloneNode(true));
  (window.adsbygoogle = window.adsbygoogle || []).push({});
})();
