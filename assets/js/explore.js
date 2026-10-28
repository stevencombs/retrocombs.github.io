(function () {
  var root = document.querySelector("[data-explore]");
  if (!root) return;

  var list = root.querySelector(".post-cards");
  var more = root.querySelector(".post-cards-more");
  var live = root.querySelector("[data-explore-count]");
  var empty = root.querySelector("[data-explore-empty]");
  var panel = root.querySelector(".explore-panel");
  var topicSelect = root.querySelector("[data-explore-topic]");
  var sortSelect = root.querySelector("[data-explore-sort]");
  var queryInput = root.querySelector("[data-explore-q]");
  var cards = list ? Array.prototype.slice.call(list.querySelectorAll("a.post-card")) : [];
  var pageSize = parseInt(root.getAttribute("data-page-size") || "24", 10);
  var defaultSort = root.getAttribute("data-default-sort") || "newest";
  var shown = pageSize;
  var plural = {
    review: "reviews",
    "first-look": "first looks",
    "how-to": "how-tos",
    companion: "companions",
    bench: "bench posts",
    editorial: "editorials",
    livestream: "livestreams",
    art: "art posts"
  };
  var singular = {
    review: "review",
    "first-look": "first look",
    "how-to": "how-to",
    companion: "companion",
    bench: "bench post",
    editorial: "editorial",
    livestream: "livestream",
    art: "art post"
  };

  function readState() {
    var params = new URLSearchParams(window.location.search);
    return {
      kinds: splitParam(params.get("kind")),
      channel: params.get("channel") || "",
      topic: params.get("topic") || "",
      bands: splitParam(params.get("band")),
      sort: params.get("sort") || defaultSort,
      q: params.get("q") || ""
    };
  }

  function splitParam(value) {
    if (!value) return [];
    return value.split(",").map(function (part) {
      return part.trim();
    }).filter(Boolean);
  }

  function writeState(state) {
    var params = new URLSearchParams();
    if (state.kinds.length) params.set("kind", state.kinds.join(","));
    if (state.channel) params.set("channel", state.channel);
    if (state.topic) params.set("topic", state.topic);
    if (state.bands.length) params.set("band", state.bands.join(","));
    if (state.sort && state.sort !== defaultSort) params.set("sort", state.sort);
    if (state.q) params.set("q", state.q);
    var query = params.toString();
    var next = window.location.pathname + (query ? "?" + query : "") + window.location.hash;
    var current = window.location.pathname + window.location.search + window.location.hash;
    if (next !== current) history.replaceState(null, "", next);
  }

  function ratingOf(card) {
    var raw = card.getAttribute("data-rating");
    if (raw == null || raw === "") return null;
    var value = parseFloat(raw);
    return isNaN(value) ? null : value;
  }

  function dateOf(card) {
    var value = parseInt(card.getAttribute("data-date") || "0", 10);
    return isNaN(value) ? 0 : value;
  }

  function titleOf(card) {
    return card.getAttribute("data-title") || "";
  }

  function matches(card, state) {
    var kind = card.getAttribute("data-kind") || "";
    if (state.kinds.length && state.kinds.indexOf(kind) === -1) return false;
    if (state.channel && (card.getAttribute("data-channel") || "") !== state.channel) return false;
    if (state.topic) {
      var topics = (card.getAttribute("data-topics") || "").split(/\s+/);
      if (topics.indexOf(state.topic) === -1) return false;
    }
    if (state.bands.length && state.bands.indexOf(card.getAttribute("data-band") || "") === -1) return false;
    if (state.q) {
      var needle = state.q.toLowerCase();
      if (titleOf(card).toLowerCase().indexOf(needle) === -1) return false;
    }
    return true;
  }

  function compare(sort) {
    return function (a, b) {
      if (sort === "az") {
        return titleOf(a).localeCompare(titleOf(b), undefined, { sensitivity: "base" });
      }
      if (sort === "oldest") return dateOf(a) - dateOf(b) || titleOf(a).localeCompare(titleOf(b));
      if (sort === "score" || sort === "low") {
        var ar = ratingOf(a);
        var br = ratingOf(b);
        if (ar == null && br == null) return dateOf(b) - dateOf(a);
        if (ar == null) return 1;
        if (br == null) return -1;
        if (ar !== br) return sort === "score" ? br - ar : ar - br;
        return dateOf(b) - dateOf(a);
      }
      return dateOf(b) - dateOf(a) || titleOf(a).localeCompare(titleOf(b));
    };
  }

  function countText(count, state) {
    if (state.kinds.length === 1) {
      var id = state.kinds[0];
      var noun = count === 1 ? (singular[id] || "post") : (plural[id] || "posts");
      return "Showing " + count + " " + noun;
    }
    return "Showing " + count + (count === 1 ? " post" : " posts");
  }

  function syncControls(state) {
    Array.prototype.forEach.call(root.querySelectorAll("button[data-kind]"), function (button) {
      var id = button.getAttribute("data-kind");
      var pressed = id ? state.kinds.indexOf(id) !== -1 : state.kinds.length === 0;
      button.setAttribute("aria-pressed", pressed ? "true" : "false");
    });
    Array.prototype.forEach.call(root.querySelectorAll("button[data-channel]"), function (button) {
      var id = button.getAttribute("data-channel") || "";
      button.setAttribute("aria-pressed", id === state.channel ? "true" : "false");
    });
    Array.prototype.forEach.call(root.querySelectorAll("button[data-band]"), function (button) {
      var id = button.getAttribute("data-band");
      var pressed = id ? state.bands.indexOf(id) !== -1 : state.bands.length === 0;
      button.setAttribute("aria-pressed", pressed ? "true" : "false");
    });
    if (topicSelect) topicSelect.value = state.topic;
    if (sortSelect) sortSelect.value = state.sort;
    if (queryInput && queryInput.value !== state.q) queryInput.value = state.q;
  }

  function syncPanel(state) {
    if (!panel) return;
    var narrow = window.matchMedia("(max-width: 760px)").matches;
    if (!narrow) {
      panel.open = true;
      return;
    }
    var active = state.kinds.length || state.channel || state.topic || state.bands.length || state.q || state.sort !== defaultSort;
    if (active) panel.open = true;
  }

  function apply(reset) {
    if (reset) shown = pageSize;
    var state = readState();
    var matched = cards.filter(function (card) { return matches(card, state); });
    matched.sort(compare(state.sort));
    if (list) {
      matched.forEach(function (card) { list.appendChild(card); });
      cards.forEach(function (card) {
        if (matched.indexOf(card) === -1) list.appendChild(card);
      });
    }
    matched.forEach(function (card, index) { card.hidden = index >= shown; });
    cards.forEach(function (card) {
      if (matched.indexOf(card) === -1) card.hidden = true;
    });
    var remain = Math.max(0, matched.length - shown);
    if (more) {
      more.hidden = remain === 0;
      var left = more.querySelector(".post-cards-left");
      if (left) left.textContent = remain + " left";
    }
    if (empty) empty.hidden = matched.length !== 0;
    if (live) {
      var text = countText(matched.length, state);
      if (live.textContent !== text) live.textContent = text;
    }
    syncControls(state);
    return state;
  }

  function toggleList(listName, id) {
    var state = readState();
    if (!id) {
      state[listName] = [];
    } else {
      var index = state[listName].indexOf(id);
      if (index === -1) state[listName].push(id);
      else state[listName].splice(index, 1);
    }
    writeState(state);
    apply(true);
  }

  Array.prototype.forEach.call(root.querySelectorAll("button[data-kind]"), function (button) {
    button.addEventListener("click", function () {
      toggleList("kinds", button.getAttribute("data-kind"));
    });
  });
  Array.prototype.forEach.call(root.querySelectorAll("button[data-channel]"), function (button) {
    button.addEventListener("click", function () {
      var state = readState();
      state.channel = button.getAttribute("data-channel") || "";
      writeState(state);
      apply(true);
    });
  });
  Array.prototype.forEach.call(root.querySelectorAll("button[data-band]"), function (button) {
    button.addEventListener("click", function () {
      toggleList("bands", button.getAttribute("data-band"));
    });
  });
  if (topicSelect) {
    topicSelect.addEventListener("change", function () {
      var state = readState();
      state.topic = topicSelect.value;
      writeState(state);
      apply(true);
    });
  }
  if (sortSelect) {
    sortSelect.addEventListener("change", function () {
      var state = readState();
      state.sort = sortSelect.value || defaultSort;
      writeState(state);
      apply(true);
    });
  }
  if (queryInput) {
    queryInput.addEventListener("input", function () {
      var state = readState();
      state.q = queryInput.value;
      writeState(state);
      apply(true);
    });
  }
  if (more) {
    more.addEventListener("click", function () {
      shown += pageSize;
      apply(false);
    });
  }
  window.addEventListener("popstate", function () { apply(true); });

  var initial = apply(true);
  syncPanel(initial);
  var desktop = window.matchMedia("(min-width: 761px)");
  if (desktop.addEventListener) {
    desktop.addEventListener("change", function () { syncPanel(readState()); });
  }
})();
