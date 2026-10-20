/* retroCombs site search: header button + "/" or Ctrl/Cmd-K overlay + /search?q= page.
   Index: /search.json (built by Jekyll from posts, pages and topics). Engine: MiniSearch (vendored).
   No third-party requests, no cookies, no ads. */
(function () {
  'use strict';
  var CFG = Object.assign({
    index: '/search.json',
    lib: '/assets/js/minisearch-7.2.0.min.js',
    base: '',            /* prefix for result links (empty on the real site) */
    page: '/search',     /* full results page */
    limit: 8,            /* results in the overlay */
    pageLimit: 50
  }, window.RC_SEARCH || {});

  var STOP = ' a an and are as at be but by for from how i in is it my of on or so the this to was what when where which who why with you your ';
  var MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  var engine = null, docs = null, loading = null;

  /* ---------- text helpers ---------- */
  function fold(s) {
    return String(s || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/['\u2019]/g, '');
  }
  function chunks(text) { return fold(text).split(/\s+/).filter(Boolean); }
  /* "TI-99/4A" -> ti, 99, 4a, ti994a ; "Plus/4" -> plus, 4, plus4 */
  function tokenizeDoc(text) {
    var out = [];
    chunks(text).forEach(function (c) {
      var p = c.split(/[^a-z0-9]+/).filter(Boolean);
      out.push.apply(out, p);
      if (p.length > 1) out.push(p.join(''));
    });
    return out;
  }
  /* Query compounds are searched as one joined term, so "plus/4" == "plus4" and "TI-99" prefixes "ti994a". */
  function tokenizeQuery(text) {
    var out = [];
    chunks(text).forEach(function (c) {
      var p = c.split(/[^a-z0-9]+/).filter(Boolean);
      if (p.length) out.push(p.join(''));
    });
    return out;
  }
  function processTerm(t) { return STOP.indexOf(' ' + t + ' ') >= 0 ? null : t; }
  function esc(s) { return String(s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); }
  function fmtDate(d) { if (!d) return ''; var p = d.split('-'); return MONTHS[+p[1] - 1] + ' ' + (+p[2]) + ', ' + p[0]; }
  function reEsc(s) { return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); }

  /* Highlight regex: each matched term may appear with separators ("plus4" -> "Plus/4") and as a word prefix. */
  function highlighter(terms) {
    terms = terms.filter(function (t) { return t && t.length > 0; }).sort(function (a, b) { return b.length - a.length; });
    if (!terms.length) return null;
    var alts = terms.map(function (t) { return t.split('').map(reEsc).join("[-/.'\u2019]?"); });
    return new RegExp('(^|[^A-Za-z0-9])(' + alts.join('|') + ')([A-Za-z0-9]*)', 'gi');
  }
  function mark(text, re) {
    if (!re) return esc(text);
    var out = '', last = 0, m;
    var folded = text.normalize('NFD').replace(/[\u0300-\u036f]/g, ''); /* same length for Latin text */
    if (folded.length !== text.length) folded = text;
    re.lastIndex = 0;
    while ((m = re.exec(folded))) {
      var start = m.index + m[1].length, end = start + m[2].length + m[3].length;
      out += esc(text.slice(last, start)) + '<mark>' + esc(text.slice(start, end)) + '</mark>';
      last = end;
      if (m[0].length === 0) re.lastIndex++;
    }
    return out + esc(text.slice(last));
  }
  function snippet(doc, re, size) {
    size = size || 170;
    var text = doc.x || doc.s || '';
    var pos = -1;
    if (re) { re.lastIndex = 0; var m = re.exec(text); if (m) pos = m.index + m[1].length; }
    if (pos < 0) { var lead = doc.s || text; return mark(lead.length > size ? lead.slice(0, size).replace(/\s+\S*$/, '') + '\u2026' : lead, re); }
    var start = Math.max(0, pos - 60);
    if (start > 0) { var sp = text.indexOf(' ', start); start = (sp > -1 && sp < pos) ? sp + 1 : start; }
    var end = Math.min(text.length, start + size);
    if (end < text.length) { var sp2 = text.lastIndexOf(' ', end); if (sp2 > pos) end = sp2; }
    return (start > 0 ? '\u2026' : '') + mark(text.slice(start, end), re) + (end < text.length ? '\u2026' : '');
  }

  /* ---------- index ---------- */
  function loadLib() {
    if (window.MiniSearch) return Promise.resolve();
    return new Promise(function (res, rej) {
      var s = document.createElement('script'); s.src = CFG.lib; s.async = true; s.onload = res; s.onerror = rej; document.head.appendChild(s);
    });
  }
  function load() {
    if (loading) return loading;
    var t0 = performance.now();
    loading = Promise.all([loadLib(), fetch(CFG.index).then(function (r) { if (!r.ok) throw new Error('index ' + r.status); return r.json(); })])
      .then(function (r) {
        var ta = document.createElement('textarea');
        var dec = function (v) { if (!v || v.indexOf('&') < 0) return v; ta.innerHTML = v; return ta.value; };
        docs = r[1].map(function (d, i) { d.id = i; d.t = dec(d.t); d.s = dec(d.s); d.x = dec(d.x); return d; });
        engine = new window.MiniSearch({
          fields: ['t', 'c', 'g', 's', 'x'],
          extractField: function (d, f) { var v = d[f]; return Array.isArray(v) ? v.join(' ') : v; },
          tokenize: tokenizeDoc,
          processTerm: processTerm,
          searchOptions: {
            tokenize: tokenizeQuery,
            processTerm: processTerm,
            boost: { t: 6, c: 3, g: 2, s: 1.5, x: 1 },
            prefix: true,
            fuzzy: function (term) { return term.length >= 5 ? 0.2 : false; },
            boostDocument: function (id) { var p = docs[id].p; return p === 2 ? 1.6 : p ? 1.15 : 1; }
          }
        });
        engine.addAll(docs);
        window.RC_SEARCH_STATS = { docs: docs.length, ms: Math.round(performance.now() - t0) };
      });
    loading.catch(function () { loading = null; });
    return loading;
  }
  function search(q, limit) {
    q = q.trim();
    if (!q || !engine) return { hits: [], partial: false };
    var hits = engine.search(q, { combineWith: 'AND' }), partial = false;
    if (!hits.length) { hits = engine.search(q, { combineWith: 'OR' }); partial = hits.length > 0; }
    /* nudge results whose title holds every query word (5-letter prefix, so "upgrade" ~ "Upgrading") */
    var qt = tokenizeQuery(q).filter(processTerm).map(function (t) { return t.slice(0, 5); });
    hits.forEach(function (h) {
      var tt = tokenizeDoc(docs[h.id].t);
      if (qt.length && qt.every(function (w) { return tt.some(function (x) { return x.indexOf(w) === 0; }); })) h.score *= 1.4;
    });
    hits.sort(function (a, b) { return b.score - a.score; });
    var terms = [];
    hits.slice(0, limit).forEach(function (h) { h.terms.forEach(function (t) { if (terms.indexOf(t) < 0) terms.push(t); }); });
    tokenizeQuery(q).forEach(function (t) { if (processTerm(t) && terms.indexOf(t) < 0) terms.push(t); });
    /* typo note: matched words that are not prefix matches of what was typed ("comodore" -> "commodore") */
    var typed = tokenizeQuery(q).filter(processTerm), fixes = {};
    hits.slice(0, limit).forEach(function (h) {
      h.terms.forEach(function (t) { if (!typed.some(function (w) { return t.indexOf(w) === 0; })) fixes[t] = (fixes[t] || 0) + 1; });
    });
    var fix = Object.keys(fixes).sort(function (a, b) { return fixes[b] - fixes[a]; })[0] || '';
    var exact = typed.every(function (w) { return hits.slice(0, limit).some(function (h) { return h.terms.some(function (t) { return t.indexOf(w) === 0; }); }); });
    return { hits: hits.slice(0, limit), total: hits.length, partial: partial, re: highlighter(terms), fix: exact ? '' : fix };
  }
  function hitHTML(h, re, i, idPrefix) {
    var d = docs[h.id];
    var meta = d.p === 2 ? '<span class="rcs-kind">Topic</span>' + d.c.map(function (c) { return '<span class="rcs-topic">' + esc(c) + '</span>'; }).join('')
      : d.p ? '<span class="rcs-kind">Page</span>'
      : '<time datetime="' + esc(d.d) + '">' + fmtDate(d.d) + '</time>' + d.c.map(function (c) { return '<span class="rcs-topic">' + esc(c) + '</span>'; }).join('');
    return '<li role="option" id="' + idPrefix + i + '" aria-selected="' + (i === 0) + '"><a href="' + esc(CFG.base + d.u) + '" tabindex="-1">' +
      '<span class="rcs-title">' + mark(d.t, re) + '</span>' +
      '<span class="rcs-meta">' + meta + '</span>' +
      '<span class="rcs-snip">' + snippet(d, re) + '</span></a></li>';
  }
  var SUGGEST = ['MEGA65', 'Commodore', 'Plus/4', 'TI-99/4A', 'Raspberry Pi', 'LEGO', 'Wyze', 'Arduino'];

  /* ---------- overlay ---------- */
  var dlg, input, list, status, allLink, sel = 0, current = { hits: [] };
  function build() {
    if (dlg) return;
    dlg = document.createElement('dialog');
    dlg.className = 'rcs';
    dlg.setAttribute('aria-label', 'Search retroCombs');
    dlg.innerHTML =
      '<div class="stripes" aria-hidden="true"><i></i><i></i><i></i><i></i><i></i></div>' +
      '<form class="rcs-bar" role="search" action="' + esc(CFG.page) + '" method="get">' +
      '<svg aria-hidden="true" viewBox="0 0 24 24" width="22" height="22"><circle cx="10.5" cy="10.5" r="6.5" fill="none" stroke="currentColor" stroke-width="2.4"/><path d="M15.5 15.5 21 21" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/></svg>' +
      '<input id="rcs-q" name="q" type="search" autocomplete="off" autocapitalize="off" spellcheck="false" enterkeyhint="go" placeholder="Search posts, pages and topics" ' +
      'role="combobox" aria-autocomplete="list" aria-expanded="false" aria-controls="rcs-list" aria-label="Search retroCombs">' +
      '<button type="button" class="rcs-close" aria-label="Close search">Esc</button></form>' +
      '<div class="rcs-status" role="status" aria-live="polite"></div>' +
      '<ul id="rcs-list" class="rcs-list" role="listbox" aria-label="Results"></ul>' +
      '<div class="rcs-foot"><span class="rcs-keys"><kbd>\u2191</kbd><kbd>\u2193</kbd> move <kbd>Enter</kbd> open <kbd>Esc</kbd> close</span><a class="rcs-all" href="' + esc(CFG.page) + '">All results \u2192</a></div>';
    document.body.appendChild(dlg);
    input = dlg.querySelector('input'); list = dlg.querySelector('.rcs-list'); status = dlg.querySelector('.rcs-status'); allLink = dlg.querySelector('.rcs-all');
    input.addEventListener('input', render);
    input.addEventListener('keydown', onKey);
    dlg.querySelector('.rcs-close').addEventListener('click', close);
    dlg.addEventListener('click', function (e) { if (e.target === dlg) close(); }); /* backdrop */
    dlg.addEventListener('close', function () { document.documentElement.classList.remove('rcs-lock'); });
    list.addEventListener('mousemove', function (e) { var li = e.target.closest('li[role=option]'); if (li) select([].indexOf.call(list.children, li), false); });
    list.addEventListener('click', function (e) { var a = e.target.closest('.rcs-sugg'); if (a) { e.preventDefault(); input.value = a.textContent; render(); input.focus(); } });
  }
  function open(q) {
    build();
    if (!dlg.open) { dlg.showModal(); document.documentElement.classList.add('rcs-lock'); }
    if (typeof q === 'string') input.value = q;
    input.focus(); input.select();
    if (!engine) { status.textContent = 'Loading search\u2026'; }
    load().then(render, function () { status.textContent = 'Search could not load. Try the search page.'; });
    render();
  }
  function close() { if (dlg && dlg.open) dlg.close(); }
  function render() {
    var q = input.value;
    allLink.href = CFG.page + (q.trim() ? '?q=' + encodeURIComponent(q.trim()) : '');
    if (!engine) return;
    if (!q.trim()) {
      current = { hits: [] };
      status.textContent = '';
      list.innerHTML = '<li class="rcs-empty"><b>Try a topic</b><span>' + SUGGEST.map(function (s) { return '<a class="rcs-sugg" href="' + esc(CFG.page) + '?q=' + encodeURIComponent(s) + '">' + esc(s) + '</a>'; }).join('') + '</span></li>';
      input.setAttribute('aria-expanded', 'false'); input.removeAttribute('aria-activedescendant');
      return;
    }
    current = search(q, CFG.limit);
    if (!current.hits.length) {
      status.textContent = 'No results for \u201c' + q.trim() + '\u201d';
      list.innerHTML = '<li class="rcs-empty"><b>No matches.</b><span>Check the spelling or browse <a href="' + esc(CFG.base) + '/categories">all topics</a>.</span></li>';
      input.setAttribute('aria-expanded', 'false');
      return;
    }
    status.textContent = (current.partial ? 'No exact match. Showing close matches: ' : '') + current.total + ' result' + (current.total === 1 ? '' : 's') + (current.fix ? ' \u00b7 including \u201c' + current.fix + '\u201d' : '');
    list.innerHTML = current.hits.map(function (h, i) { return hitHTML(h, current.re, i, 'rcs-opt-'); }).join('');
    input.setAttribute('aria-expanded', 'true');
    select(0, false);
  }
  function select(i, scroll) {
    var items = list.querySelectorAll('li[role=option]');
    if (!items.length) return;
    sel = (i + items.length) % items.length;
    items.forEach(function (li, k) { li.setAttribute('aria-selected', String(k === sel)); });
    input.setAttribute('aria-activedescendant', items[sel].id);
    if (scroll !== false) items[sel].scrollIntoView({ block: 'nearest' });
  }
  function onKey(e) {
    if (e.key === 'Escape') { e.preventDefault(); close(); return; } /* type=search would otherwise just clear the box */
    if (e.key === 'ArrowDown') { e.preventDefault(); select(sel + 1); }
    else if (e.key === 'ArrowUp') { e.preventDefault(); select(sel - 1); }
    else if (e.key === 'Enter') {
      var a = list.querySelector('li[aria-selected=true] a');
      if (a && !e.isComposing) { e.preventDefault(); if (e.metaKey || e.ctrlKey) window.open(a.href, '_blank'); else location.href = a.href; }
      /* no hit selected: the form submits to /search?q= */
    }
  }

  /* ---------- /search page ---------- */
  function initPage(root) {
    var form = root.querySelector('form'), box = root.querySelector('input[name=q]'), out = root.querySelector('.rcs-results'), info = root.querySelector('.rcs-count');
    var q0 = new URLSearchParams(location.search).get('q') || '';
    box.value = q0;
    function run() {
      var q = box.value.trim();
      var url = location.pathname + (q ? '?q=' + encodeURIComponent(q) : '');
      history.replaceState(null, '', url);
      document.title = (q ? q + ' \u00b7 ' : '') + 'Search \u00b7 retroCombs';
      if (!q) { info.textContent = docs ? 'Search ' + docs.length + ' posts and pages.' : ''; out.innerHTML = ''; return; }
      var r = search(q, CFG.pageLimit);
      info.textContent = r.hits.length ? (r.partial ? 'No exact match. Close matches for \u201c' + q + '\u201d: ' : '') + r.total + ' result' + (r.total === 1 ? '' : 's') + (r.partial ? '' : ' for \u201c' + q + '\u201d') + (r.fix ? ' (including \u201c' + r.fix + '\u201d)' : '') : 'No results for \u201c' + q + '\u201d.';
      out.innerHTML = r.hits.map(function (h, i) { return hitHTML(h, r.re, i, 'rcs-p-'); }).join('');
    }
    form.addEventListener('submit', function (e) { e.preventDefault(); run(); });
    box.addEventListener('input', run);
    info.textContent = 'Loading search\u2026';
    load().then(run, function () { info.textContent = 'Search could not load.'; });
    if (!q0) box.focus();
  }

  /* ---------- wiring ---------- */
  function typing(el) { return el && (el.isContentEditable || /^(INPUT|TEXTAREA|SELECT)$/.test(el.tagName)); }
  document.addEventListener('keydown', function (e) {
    if ((e.key === 'k' || e.key === 'K') && (e.metaKey || e.ctrlKey) && !e.altKey) { e.preventDefault(); open(); return; }
    if (e.key === '/' && !e.metaKey && !e.ctrlKey && !e.altKey && !typing(document.activeElement) && !(dlg && dlg.open)) { e.preventDefault(); open(''); }
  });
  document.addEventListener('click', function (e) {
    var t = e.target.closest('[data-rc-search]');
    if (!t || e.metaKey || e.ctrlKey || e.shiftKey) return;
    e.preventDefault(); open();
  });
  /* warm the index when the user shows intent */
  ['pointerover', 'focusin', 'touchstart'].forEach(function (ev) {
    document.addEventListener(ev, function (e) { if (e.target.closest && e.target.closest('[data-rc-search]')) load(); }, { passive: true });
  });
  var mac = /Mac|iPhone|iPad/.test(navigator.platform || navigator.userAgent);
  document.querySelectorAll('[data-rc-search] .rcs-mod').forEach(function (k) { k.textContent = mac ? '\u2318K' : 'Ctrl K'; });
  var pageRoot = document.getElementById('rcs-page');
  if (pageRoot) initPage(pageRoot);
  window.RCSearch = { open: open, close: close, load: load, search: function (q, n) { return search(q, n || 10).hits.map(function (h) { var d = docs[h.id]; return { title: d.t, url: d.u, date: d.d, topics: d.c, page: !!d.p, score: Math.round(h.score * 10) / 10, terms: h.terms }; }); } };
})();
