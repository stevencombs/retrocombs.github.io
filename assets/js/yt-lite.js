(function () {
  function seconds(value) {
    if (!value) return "";
    if (/^\d+$/.test(value)) return value;
    var clock = /^(\d+)m(\d+)s$/.exec(value);
    if (clock) return String(parseInt(clock[1], 10) * 60 + parseInt(clock[2], 10));
    var only = /^(\d+)s$/.exec(value);
    return only ? only[1] : "";
  }

  function play(link) {
    if (link.getAttribute("data-playing") === "1") return;
    var id = link.getAttribute("data-id");
    if (!id) return;
    link.setAttribute("data-playing", "1");
    var title = link.getAttribute("data-title") || "YouTube video";
    var start = seconds(link.getAttribute("data-start"));
    var src = "https://www.youtube-nocookie.com/embed/" + encodeURIComponent(id) + "?autoplay=1&rel=0";
    if (start) src += "&start=" + start;
    var iframe = document.createElement("iframe");
    iframe.src = src;
    iframe.title = title;
    iframe.setAttribute("allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share");
    iframe.setAttribute("allowfullscreen", "");
    iframe.referrerPolicy = "strict-origin-when-cross-origin";
    var frame = link.querySelector(".frame");
    if (!frame) return;
    while (frame.firstChild) frame.removeChild(frame.firstChild);
    frame.appendChild(iframe);
  }

  document.addEventListener("click", function (event) {
    var link = event.target.closest && event.target.closest("a.yt-lite");
    if (!link) return;
    event.preventDefault();
    play(link);
  });
})();
