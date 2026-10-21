(function () {
  var blocks = document.querySelectorAll("[data-post-cards]");
  if (!blocks.length) return;

  Array.prototype.forEach.call(blocks, function (block) {
    var button = block.querySelector(".post-cards-more");
    if (!button) return;
    var step = parseInt(button.getAttribute("data-step") || "24", 10);
    var left = button.querySelector(".post-cards-left");

    button.addEventListener("click", function () {
      var hidden = block.querySelectorAll("a.post-card[hidden]");
      var count = Math.min(step, hidden.length);
      for (var i = 0; i < count; i++) hidden[i].hidden = false;
      var remain = block.querySelectorAll("a.post-card[hidden]").length;
      if (!remain) {
        button.remove();
        return;
      }
      if (left) left.textContent = remain + " left";
    });
  });
})();
