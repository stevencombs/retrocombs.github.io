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
  if (tpl && window.matchMedia("(min-width: 1024px)").matches && tpl.content && tpl.content.querySelector(".rc-ad")) {
    var rail = document.querySelector("aside.rail");
    if (!rail) {
      var mainCol = document.querySelector(".page-main");
      if (mainCol) {
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
    }
    if (rail) rail.appendChild(tpl.content.cloneNode(true));
  }

  function pushAll() {
    var slots = document.querySelectorAll("ins.adsbygoogle");
    for (var i = 0; i < slots.length; i++) {
      var ins = slots[i];
      if (ins.closest && ins.closest("template")) continue;
      if (ins.getAttribute("data-rc-pushed") === "1") continue;
      if (ins.getAttribute("data-adsbygoogle-status")) continue;
      ins.setAttribute("data-rc-pushed", "1");
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    }
  }

  function pushAfterLayout() {
    requestAnimationFrame(function () {
      requestAnimationFrame(pushAll);
    });
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", pushAfterLayout);
  else pushAfterLayout();
})();

/* Browsers without :has() still need the striped wrapper removed when a unit is unfilled. */
(function () {
  if (!window.MutationObserver) return;

  function hideIfUnfilled(ins) {
    if (!ins || ins.getAttribute("data-ad-status") !== "unfilled") return;
    var slot = ins.closest ? ins.closest(".rc-ad") : null;
    if (!slot) return;
    slot.style.setProperty("display", "none", "important");
  }

  function scan(root) {
    if (!root || !root.querySelectorAll) return;
    var nodes = root.querySelectorAll("ins.adsbygoogle");
    for (var i = 0; i < nodes.length; i++) hideIfUnfilled(nodes[i]);
  }

  scan(document);
  var observer = new MutationObserver(function (mutations) {
    for (var i = 0; i < mutations.length; i++) {
      var mutation = mutations[i];
      if (mutation.type === "attributes") {
        hideIfUnfilled(mutation.target);
        continue;
      }
      for (var j = 0; j < mutation.addedNodes.length; j++) {
        var node = mutation.addedNodes[j];
        if (!node || node.nodeType !== 1) continue;
        if (node.matches && node.matches("ins.adsbygoogle")) hideIfUnfilled(node);
        scan(node);
      }
    }
  });
  observer.observe(document.documentElement, {
    subtree: true,
    childList: true,
    attributes: true,
    attributeFilter: ["data-ad-status"]
  });
})();
