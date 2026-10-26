/* Private visitor analytics for sophiake.com — invisible to visitors.
   Sends small JSON batches to a Cloudflare Worker (see assets/analytics/README.md).
   Events: page_view, section dwell time, link/project clicks, page time. */
(function () {
  var S = document.currentScript;
  var ENDPOINT = (S && S.getAttribute('data-endpoint')) || '';
  if (!ENDPOINT || ENDPOINT.indexOf('REPLACE') > -1) return;          // not configured yet → do nothing
  if (/^(localhost|127\.0\.0\.1)$/.test(location.hostname) || location.protocol === 'file:') return;
  if (navigator.doNotTrack === '1') return;
  try { if (localStorage.getItem('sk_optout') === '1') return; } catch (e) {}  // set this in your own browser to exclude yourself

  // ---- session + visitor ids ----
  function rid() { return Math.random().toString(36).slice(2, 10) + Date.now().toString(36); }
  var sid, vid;
  try { sid = sessionStorage.getItem('sk_sid') || rid(); sessionStorage.setItem('sk_sid', sid); } catch (e) { sid = rid(); }
  try { vid = localStorage.getItem('sk_vid') || rid(); localStorage.setItem('sk_vid', vid); } catch (e) { vid = sid; }

  var page = location.pathname.replace(/\/index\.html$/, '/') || '/';
  var queue = [], t0 = Date.now(), sent = false;
  function push(type, data) { queue.push({ t: Date.now(), type: type, page: page, data: data || {} }); if (queue.length >= 12) flush(); }
  function flush(final) {
    if (!queue.length && !final) return;
    var body = JSON.stringify({ sid: sid, vid: vid, page: page, ref: document.referrer || '', ua: navigator.userAgent, sw: screen.width, sh: screen.height, lang: navigator.language, events: queue.splice(0) });
    try {
      if (navigator.sendBeacon) navigator.sendBeacon(ENDPOINT + '/collect', new Blob([body], { type: 'text/plain' }));
      else fetch(ENDPOINT + '/collect', { method: 'POST', body: body, keepalive: true, mode: 'no-cors' });
    } catch (e) {}
  }

  // ---- page view ----
  push('page_view', { title: document.title, w: innerWidth, h: innerHeight });

  // ---- clicks: links, project cards, buttons ----
  document.addEventListener('click', function (e) {
    var a = e.target.closest('a,button');
    if (!a) return;
    var label = (a.getAttribute('aria-label') || a.textContent || '').trim().replace(/\s+/g, ' ').slice(0, 60);
    var href = a.getAttribute('href') || '';
    var proj = a.closest('.project'); if (proj) { var h = proj.querySelector('h3'); label = 'project: ' + ((h && h.textContent.trim()) || label); }
    push('click', { label: label, href: href, tag: a.tagName.toLowerCase() });
    if (href && !/^#/.test(href)) flush(true);                        // leaving the page — send now
  }, true);

  // ---- section dwell time (visible ≥ 50%) ----
  var secs = [].slice.call(document.querySelectorAll('section[id], section, .project'));
  var dwell = {}, started = {};
  function nameOf(el) {
    if (el.classList.contains('project')) { var h = el.querySelector('h3'); return 'project: ' + (h ? h.textContent.trim() : ''); }
    var hd = el.querySelector('h1,h2,h3'); var txt = hd ? hd.textContent.trim().replace(/\s+/g, ' ').slice(0, 40) : '';
    return (el.id && !/^comp-/.test(el.id) ? el.id : '') + (txt ? (el.id && !/^comp-/.test(el.id) ? ' · ' : '') + txt : '') || (el.className || 'section').toString().slice(0, 30);
  }
  if ('IntersectionObserver' in window && secs.length) {
    var io = new IntersectionObserver(function (es) {
      var now = Date.now();
      es.forEach(function (en) {
        var k = nameOf(en.target);
        if (en.isIntersecting) { if (!started[k]) started[k] = now; }
        else if (started[k]) { dwell[k] = (dwell[k] || 0) + (now - started[k]); started[k] = 0; }
      });
    }, { threshold: 0.5 });
    secs.forEach(function (s) { io.observe(s); });
  }
  function closeDwell() {
    var now = Date.now();
    Object.keys(started).forEach(function (k) { if (started[k]) { dwell[k] = (dwell[k] || 0) + (now - started[k]); started[k] = 0; } });
    var out = {}; Object.keys(dwell).forEach(function (k) { if (dwell[k] >= 800) out[k] = Math.round(dwell[k] / 100) / 10; }); // seconds, ≥0.8s
    return out;
  }

  // ---- max scroll depth ----
  var maxScroll = 0;
  addEventListener('scroll', function () { var d = (scrollY + innerHeight) / Math.max(1, document.documentElement.scrollHeight); if (d > maxScroll) maxScroll = d; }, { passive: true });

  // ---- leave: page time + dwell summary ----
  function leave() {
    if (sent) return; sent = true;
    push('page_leave', { seconds: Math.round((Date.now() - t0) / 1000), scroll: Math.round(maxScroll * 100), sections: closeDwell() });
    flush(true);
  }
  addEventListener('pagehide', leave);
  document.addEventListener('visibilitychange', function () {
    if (document.visibilityState === 'hidden') leave();
    else { sent = false; t0 = Date.now(); Object.keys(dwell).forEach(function (k) { delete dwell[k]; }); }
  });
  setInterval(function () { if (queue.length) flush(); }, 15000);
})();
