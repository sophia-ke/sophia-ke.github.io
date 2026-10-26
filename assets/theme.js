/* Auto day/night appearance — like macOS "Auto" appearance.
   Dark between 19:00 and 07:00 in the visitor's local time. Runs before first paint (loaded in <head>).
   Override for testing: ?theme=dark / ?theme=light / ?theme=auto (remembered for the session). */
(function () {
  var q = /[?&]theme=(dark|light|auto)/.exec(location.search);
  var mode = q ? q[1] : null;
  try { if (mode) sessionStorage.setItem('sk_theme', mode); else mode = sessionStorage.getItem('sk_theme'); } catch (e) {}
  function isNight() { var h = new Date().getHours(); return h >= 19 || h < 7; }
  function apply() {
    var dark = mode === 'dark' ? true : mode === 'light' ? false : isNight();
    document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light');
    var m = document.querySelector('meta[name="theme-color"]'); if (m) m.setAttribute('content', dark ? '#1E1E1E' : '#ffffff');
    var t = dark ? 'dark' : 'light';
    var a = document.getElementById('favSvg'); if (a) a.href = 'assets/favicon-' + t + '.svg';
    var b = document.getElementById('favPng'); if (b) b.href = 'assets/favicon-' + t + '.png';
    var c = document.getElementById('favApple'); if (c) c.href = 'assets/apple-touch-icon-' + t + '.png';
  }
  apply();
  // re-check each minute so a page left open flips at sunset / sunrise
  setInterval(function () { if (!mode || mode === 'auto') apply(); }, 60000);
})();
