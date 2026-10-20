(function () {
  var topics = document.getElementById("topics");
  var topicsBtn = topics && topics.querySelector("button");
  var menuBtn = document.querySelector(".menu-btn");

  if (topicsBtn) {
    topicsBtn.addEventListener("click", function () {
      var open = topics.classList.toggle("open");
      topicsBtn.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  if (menuBtn) {
    menuBtn.addEventListener("click", function () {
      var open = document.body.classList.toggle("mnav");
      menuBtn.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  document.addEventListener("click", function (event) {
    if (topics && !topics.contains(event.target)) {
      topics.classList.remove("open");
      if (topicsBtn) topicsBtn.setAttribute("aria-expanded", "false");
    }
  });

  document.addEventListener("keydown", function (event) {
    if (event.key !== "Escape") return;
    if (topics) {
      topics.classList.remove("open");
      if (topicsBtn) topicsBtn.setAttribute("aria-expanded", "false");
    }
    document.body.classList.remove("mnav");
    if (menuBtn) menuBtn.setAttribute("aria-expanded", "false");
  });
})();
