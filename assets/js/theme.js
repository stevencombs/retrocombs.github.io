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
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch (e) {}
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

/* Slots start collapsed in CSS. Reveal the label and box only when a unit
   is filled. Collapse again on unfilled, and after ~7s with no status
   (blocked script, no request, or a hang). Do not use display:none. */
(function () {
  try {
    var q = window.location && window.location.search || "";
    var dev = /(?:^|[?&])ads-placeholder=1(?:&|$)/.test(q);
    if (!dev && window.localStorage) dev = window.localStorage.getItem("rc-ads-placeholder") === "1";
    if (dev) document.documentElement.classList.add("rc-ads-dev");
  } catch (e) {}

  function slotOf(ins) {
    if (!ins || !ins.closest) return null;
    if (ins.closest("template")) return null;
    return ins.closest(".rc-ad");
  }

  function collapse(slot) {
    if (!slot) return;
    slot.classList.remove("rc-ad--filled");
    slot.classList.add("rc-ad--unfilled");
    slot.setAttribute("aria-hidden", "true");
    slot.style.setProperty("height", "0", "important");
    slot.style.setProperty("margin", "0", "important");
    slot.style.setProperty("padding", "0", "important");
    slot.style.setProperty("overflow", "hidden", "important");
    slot.style.setProperty("border", "0", "important");
  }

  function reveal(ins) {
    var slot = slotOf(ins);
    if (!slot) return;
    slot.classList.remove("rc-ad--unfilled");
    slot.classList.add("rc-ad--filled");
    slot.removeAttribute("aria-hidden");
    slot.style.removeProperty("height");
    slot.style.removeProperty("margin");
    slot.style.removeProperty("padding");
    slot.style.removeProperty("overflow");
    slot.style.removeProperty("border");
    var box = slot.querySelector(".rc-ad__box");
    if (!box) return;
    box.style.setProperty("background", "none", "important");
    box.style.setProperty("border", "0", "important");
    box.style.setProperty("border-radius", "0", "important");
    box.style.setProperty("min-height", "0", "important");
    box.style.setProperty("height", "auto", "important");
    box.style.setProperty("padding", "0", "important");
  }

  function settle(ins) {
    if (!ins || !ins.getAttribute) return;
    var status = ins.getAttribute("data-ad-status");
    if (status === "filled") reveal(ins);
    else if (status === "unfilled") collapse(slotOf(ins));
  }

  function scan(root) {
    if (!root || !root.querySelectorAll) return;
    var nodes = root.querySelectorAll("ins.adsbygoogle");
    for (var i = 0; i < nodes.length; i++) settle(nodes[i]);
  }

  if (window.MutationObserver) {
    scan(document);
    var observer = new MutationObserver(function (mutations) {
      for (var i = 0; i < mutations.length; i++) {
        var mutation = mutations[i];
        if (mutation.type === "attributes") {
          settle(mutation.target);
          continue;
        }
        for (var j = 0; j < mutation.addedNodes.length; j++) {
          var node = mutation.addedNodes[j];
          if (!node || node.nodeType !== 1) continue;
          if (node.matches && node.matches("ins.adsbygoogle")) settle(node);
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
  }

  window.setTimeout(function () {
    var slots = document.querySelectorAll("ins.adsbygoogle");
    for (var i = 0; i < slots.length; i++) {
      var ins = slots[i];
      if (ins.closest && ins.closest("template")) continue;
      if (!ins.getAttribute("data-ad-status")) collapse(slotOf(ins));
    }
  }, 7000);
})();
