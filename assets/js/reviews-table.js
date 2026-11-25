/* Sortable /reviews table. No dependencies.
   Without JavaScript the table stays in its server order (newest first).
   Each header gets a button. Text columns sort A to Z first, numeric
   columns (rating, price, date) sort high to low first. Blank cells
   always sort last. */
(function () {
  "use strict";
  var table = document.querySelector("[data-reviews-table]");
  if (!table || !table.tBodies.length) return;
  var tbody = table.tBodies[0];
  var heads = Array.prototype.slice.call(table.tHead.rows[0].cells);
  var status = document.querySelector("[data-reviews-status]");
  var rows = Array.prototype.slice.call(tbody.rows);
  rows.forEach(function (row, i) { row.setAttribute("data-order", i); });

  function key(row, col) {
    var cell = row.cells[col];
    return cell ? (cell.getAttribute("data-sort") || "").trim() : "";
  }

  function sortBy(col, dir) {
    var type = heads[col].getAttribute("data-sort-type");
    var sign = dir === "ascending" ? 1 : -1;
    var sorted = rows.slice().sort(function (a, b) {
      var ka = key(a, col), kb = key(b, col);
      if (ka === "" && kb !== "") return 1;
      if (kb === "" && ka !== "") return -1;
      var c = 0;
      if (ka !== "" && kb !== "") {
        c = type === "number" ? (parseFloat(ka) - parseFloat(kb)) : ka.localeCompare(kb, undefined, { sensitivity: "base", numeric: true });
      }
      if (c === 0) return parseInt(a.getAttribute("data-order"), 10) - parseInt(b.getAttribute("data-order"), 10);
      return c * sign;
    });
    var frag = document.createDocumentFragment();
    sorted.forEach(function (row) { frag.appendChild(row); });
    tbody.appendChild(frag);
    heads.forEach(function (th, i) {
      if (i === col) th.setAttribute("aria-sort", dir);
      else th.removeAttribute("aria-sort");
    });
    if (status) {
      status.textContent = "Sorted by " + heads[col].getAttribute("data-label") + ", " + (dir === "ascending" ? (type === "number" ? "low to high" : "A to Z") : (type === "number" ? "high to low" : "Z to A")) + ".";
    }
  }

  heads.forEach(function (th, col) {
    var label = th.textContent.trim();
    th.setAttribute("data-label", label);
    var btn = document.createElement("button");
    btn.type = "button";
    btn.className = "rc-reviews__sort";
    btn.innerHTML = '<span>' + label + '</span><span class="rc-reviews__arrow" aria-hidden="true"></span>';
    th.textContent = "";
    th.appendChild(btn);
    btn.addEventListener("click", function () {
      var current = th.getAttribute("aria-sort");
      var first = th.getAttribute("data-sort-first") === "desc" ? "descending" : "ascending";
      var next = current ? (current === "ascending" ? "descending" : "ascending") : first;
      sortBy(col, next);
    });
  });
  table.classList.add("is-sortable");
})();
