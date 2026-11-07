/* retroCombs YoloBox overlay. Options: ?slot=NAME  ?refresh=SECONDS (default 60, min 5)  ?fit=cover  ?sound=0 (mute entry cue)
   Reads slots.json (cache-busted) to learn each slot's file + version, preloads the image,
   and swaps only after a good load, so a failed fetch or mid-deploy keeps the current image. */
(function () {
  var SLOTS = ['thumbnail', 'bugzap', 'support', 'gear', 'news', 'demo', 'lower-third'];
  var me = document.currentScript;
  var base = me && me.src ? me.src.replace(/[^\/]*$/, '') : '';
  var q = new URLSearchParams(location.search);
  var slot = String(window.YOLOBOX_SLOT || q.get('slot') || '').toLowerCase();
  if (SLOTS.indexOf(slot) < 0) slot = 'thumbnail';
  var secs = Math.max(5, parseInt(q.get('refresh'), 10) || 60);
  var el = document.getElementById('t');
  if (q.get('fit') === 'cover') el.style.objectFit = 'cover';
  var shown = '', requested = '', failed = {};
  // Same file-backed HTML Audio approach and default volume (1) as Super Chat.
  // Browser autoplay rejection is deliberately silent; images must never depend on audio.
  var entry = null;
  if (['gear', 'news', 'demo'].indexOf(slot) >= 0 && q.get('sound') !== '0') {
    entry = new Audio(base + 'assets/' + slot + '-entry.mp3');
    entry.preload = 'auto';
    entry.addEventListener('error', function () {}, true);
  }
  function playEntry() {
    if (!entry) return;
    try {
      entry.currentTime = 0;
      var p = entry.play();
      if (p && p.catch) p.catch(function () {});
    } catch (err) {} // YoloBox Extreme web-overlay audio still needs hardware testing.
  }

  function show(url) {
    if (url === shown) return;
    requested = url;
    var img = new Image();
    img.onload = function () {
      if (!img.naturalWidth || url === shown || url !== requested) return;
      el.src = img.src; shown = url; el.style.visibility = 'visible';
      playEntry();
    };
    img.onerror = function () {          // cached/broken copy: retry soon with a fresh URL
      failed[url] = (failed[url] || 0) + 1;
      if (failed[url] === 1) setTimeout(function () { show(url); }, 2000);
    };
    img.src = failed[url] ? url + '&r=' + Date.now() : url;
  }

  function tick() {
    var x = new XMLHttpRequest();
    x.open('GET', base + 'slots.json?v=' + Date.now());
    x.timeout = 15000;
    x.onload = function () {
      if (x.status !== 200) return;
      var e;
      try { e = JSON.parse(x.responseText)[slot]; } catch (err) { return; }
      if (e && /^[a-z-]+\.(png|jpg)$/.test(e.file)) {
        show(base + e.file + '?v=' + encodeURIComponent(e.v || ''));
      }
    };
    x.send();
  }

  tick();
  setInterval(tick, secs * 1000);
})();
