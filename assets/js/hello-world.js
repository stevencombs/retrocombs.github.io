(function () {
  var jump = document.getElementById("hw-jump");
  var entries = Array.prototype.slice.call(document.querySelectorAll(".hw-entry"));
  var options = document.querySelector(".hw-sort-options");
  if (!jump || !options || !entries.length) return;

  var byId = {};
  entries.forEach(function (entry, index) {
    entry.setAttribute("data-hw-index", String(index));
    var heading = entry.querySelector("h2[id]");
    if (heading) byId[heading.id] = entry;
  });

  var items = Array.prototype.slice.call(jump.children).filter(function (node) {
    return node.nodeType === 1 && node.tagName === "LI";
  });
  items.forEach(function (item) {
    var link = item.querySelector("a[href^='#']");
    if (!link) return;
    var entry = byId[link.getAttribute("href").slice(1)];
    if (!entry) return;
    item.setAttribute("data-year", entry.getAttribute("data-year"));
    item.setAttribute("data-hw-index", entry.getAttribute("data-hw-index"));
    var year = document.createElement("span");
    year.className = "hw-year";
    year.textContent = entry.getAttribute("data-year");
    item.appendChild(document.createTextNode(" "));
    item.appendChild(year);
  });

  var anchor = document.createComment("hw-entries");
  entries[0].parentNode.insertBefore(anchor, entries[0]);

  function byIndex(a, b) {
    return Number(a.getAttribute("data-hw-index")) - Number(b.getAttribute("data-hw-index"));
  }

  function yearOf(node) {
    var value = Number(node.getAttribute("data-year"));
    return value > 0 ? value : 9999;
  }

  function byYear(a, b) {
    return yearOf(a) - yearOf(b) || byIndex(a, b);
  }

  function place(parent, list) {
    var cursor = parent === jump ? null : anchor;
    list.forEach(function (node) {
      if (cursor) {
        cursor.parentNode.insertBefore(node, cursor.nextSibling);
        cursor = node;
      } else {
        parent.appendChild(node);
      }
    });
  }

  function readOrder() {
    try {
      return localStorage.getItem("hw-hello-order") === "year" ? "year" : "alpha";
    } catch (error) {
      return "alpha";
    }
  }

  function storeOrder(mode) {
    try {
      localStorage.setItem("hw-hello-order", mode);
    } catch (error) {}
  }

  function apply(mode) {
    var yearMode = mode === "year";
    var compare = yearMode ? byYear : byIndex;
    place(entries[0].parentNode, entries.slice().sort(compare));
    place(jump, items.slice().sort(compare));
    jump.classList.toggle("is-year", yearMode);
    Array.prototype.forEach.call(options.querySelectorAll("input[name='hw-order']"), function (input) {
      input.checked = input.value === (yearMode ? "year" : "alpha");
    });
  }

  var initial = readOrder();
  apply(initial);
  if (initial === "year" && location.hash) {
    var target = document.getElementById(location.hash.slice(1));
    if (target && target.scrollIntoView) target.scrollIntoView();
  }

  options.addEventListener("change", function (event) {
    var input = event.target;
    if (!input || input.name !== "hw-order") return;
    apply(input.value === "year" ? "year" : "alpha");
    storeOrder(input.value === "year" ? "year" : "alpha");
  });
})();
