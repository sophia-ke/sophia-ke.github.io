// Cloudflare Worker: collects events from track.js into D1 and serves a private dashboard.
// Routes:  POST /collect   (from the site)      GET /dash?key=DASH_KEY   (you only)
// Env:     DB (D1 binding), DASH_KEY (secret), ALLOW_ORIGIN (e.g. https://www.sophiake.com)

export default {
  async fetch(req, env) {
    const url = new URL(req.url);
    const origin = req.headers.get('Origin') || '';
    const allow = (env.ALLOW_ORIGIN || '').split(',').map((s) => s.trim()).filter(Boolean);
    const cors = {
      'Access-Control-Allow-Origin': allow.includes(origin) ? origin : (allow[0] || '*'),
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    };
    if (req.method === 'OPTIONS') return new Response(null, { headers: cors });

    if (url.pathname === '/collect' && req.method === 'POST') {
      let body; try { body = await req.json(); } catch { return new Response('bad json', { status: 400, headers: cors }); }
      if (!body || !Array.isArray(body.events)) return new Response('bad', { status: 400, headers: cors });
      const ip = req.headers.get('CF-Connecting-IP') || '';
      const cf = req.cf || {};
      const geo = [cf.city, cf.region, cf.country].filter(Boolean).join(', ');
      const ua = (body.ua || req.headers.get('User-Agent') || '').slice(0, 300);
      const stmt = env.DB.prepare(
        'INSERT INTO events (ts, sid, vid, page, type, data, ref, ip, geo, ua, lang, screen) VALUES (?,?,?,?,?,?,?,?,?,?,?,?)'
      );
      const rows = body.events.slice(0, 50).map((e) => stmt.bind(
        Number(e.t) || Date.now(), String(body.sid || '').slice(0, 40), String(body.vid || '').slice(0, 40),
        String(e.page || body.page || '').slice(0, 200), String(e.type || '').slice(0, 30), JSON.stringify(e.data || {}).slice(0, 4000),
        String(body.ref || '').slice(0, 300), ip, geo, ua, String(body.lang || '').slice(0, 20), `${body.sw || ''}x${body.sh || ''}`
      ));
      if (rows.length) await env.DB.batch(rows);
      return new Response('ok', { headers: cors });
    }

    if (url.pathname === '/dash') {
      if (!env.DASH_KEY || url.searchParams.get('key') !== env.DASH_KEY) return new Response('Not found', { status: 404 });
      const days = Math.min(90, Number(url.searchParams.get('days') || 14));
      const since = Date.now() - days * 864e5;
      const { results } = await env.DB.prepare('SELECT * FROM events WHERE ts > ? ORDER BY ts DESC LIMIT 5000').bind(since).all();
      return new Response(renderDash(results, days, url.searchParams.get('key')), { headers: { 'Content-Type': 'text/html; charset=utf-8', 'Cache-Control': 'no-store' } });
    }
    return new Response('ok');
  },
};

function esc(s) { return String(s ?? '').replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c])); }
function fmt(ts) { return new Date(ts).toLocaleString('en-US', { timeZone: 'America/Los_Angeles', month: 'short', day: 'numeric', hour: 'numeric', minute: '2-digit' }); }
function dur(s) { s = Math.round(s || 0); return s >= 60 ? `${Math.floor(s / 60)}m ${s % 60}s` : `${s}s`; }
function device(ua) { return /Mobile|iPhone|Android/i.test(ua) ? '📱' : '💻'; }
function browser(ua) { return /Edg\//.test(ua) ? 'Edge' : /Chrome\//.test(ua) ? 'Chrome' : /Safari\//.test(ua) ? 'Safari' : /Firefox\//.test(ua) ? 'Firefox' : 'Other'; }
function isBot(ua) { return /bot|crawl|spider|slurp|headless|lighthouse|preview|facebookexternalhit/i.test(ua); }

function renderDash(rows, days, key) {
  // group by session
  const sessions = new Map();
  for (const r of rows.slice().reverse()) {              // chronological
    let s = sessions.get(r.sid);
    if (!s) { s = { sid: r.sid, vid: r.vid, start: r.ts, end: r.ts, ip: r.ip, geo: r.geo, ua: r.ua, ref: r.ref, screen: r.screen, pages: [], clicks: [], secs: {}, seconds: 0 }; sessions.set(r.sid, s); }
    s.end = Math.max(s.end, r.ts);
    let d = {}; try { d = JSON.parse(r.data); } catch {}
    if (r.type === 'page_view') s.pages.push({ page: r.page, ts: r.ts, seconds: 0 });
    if (r.type === 'page_leave') { const p = [...s.pages].reverse().find((x) => x.page === r.page); if (p) p.seconds += d.seconds || 0; s.seconds += d.seconds || 0; for (const k in (d.sections || {})) { const kk = `${r.page} › ${k}`; s.secs[kk] = (s.secs[kk] || 0) + d.sections[k]; } }
    if (r.type === 'click') s.clicks.push({ ts: r.ts, label: d.label, href: d.href, page: r.page });
  }
  const list = [...sessions.values()].filter((s) => !isBot(s.ua)).sort((a, b) => b.start - a.start);

  // aggregates
  const pageViews = {}, projClicks = {};
  for (const s of list) { for (const p of s.pages) pageViews[p.page] = (pageViews[p.page] || 0) + 1; for (const c of s.clicks) if (/^project: /.test(c.label || '')) projClicks[c.label] = (projClicks[c.label] || 0) + 1; }
  const top = (o) => Object.entries(o).sort((a, b) => b[1] - a[1]);
  const uniq = new Set(list.map((s) => s.vid)).size;

  const sessionHtml = list.map((s) => `
    <details class="s">
      <summary>
        <span class="when">${fmt(s.start)}</span>
        <span class="geo">${esc(s.geo || '—')}</span>
        <span class="ip">${esc(s.ip)}</span>
        <span class="dev">${device(s.ua)} ${browser(s.ua)}</span>
        <span class="path">${s.pages.map((p) => esc(p.page.replace('.html', '').replace(/^\//, '') || 'home')).join(' → ')}</span>
        <span class="dur">${dur(s.seconds)}</span>
        ${s.vid && list.filter((x) => x.vid === s.vid).length > 1 ? '<span class="ret">returning</span>' : ''}
      </summary>
      <div class="body">
        ${s.ref ? `<p class="k">From</p><p>${esc(s.ref)}</p>` : ''}
        <p class="k">Pages</p>
        <ul>${s.pages.map((p) => `<li><b>${esc(p.page)}</b> · ${dur(p.seconds)}</li>`).join('')}</ul>
        ${Object.keys(s.secs).length ? `<p class="k">Time per section</p><ul>${Object.entries(s.secs).sort((a, b) => b[1] - a[1]).map(([k, v]) => `<li>${esc(k)} · <b>${dur(v)}</b></li>`).join('')}</ul>` : ''}
        ${s.clicks.length ? `<p class="k">Clicks</p><ul>${s.clicks.map((c) => `<li>${esc(c.label)} <span class="h">${esc(c.href || '')}</span></li>`).join('')}</ul>` : ''}
        <p class="k">Device</p><p class="h">${esc(s.ua)} · ${esc(s.screen)}</p>
      </div>
    </details>`).join('');

  return `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Portfolio visitors</title>
<style>
body{font:15px/1.5 -apple-system,system-ui,Segoe UI,Roboto,sans-serif;color:#111;background:#fafaf8;margin:0;padding:32px 24px;max-width:1100px;margin:0 auto}
h1{font-size:22px;margin:0 0 4px}.sub{color:#777;margin:0 0 24px;font-size:14px}.sub a{color:#111}
.cards{display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:12px;margin:0 0 28px}
.card{background:#fff;border:1px solid #e6e6e2;border-radius:14px;padding:16px}.card .n{font-size:28px;font-weight:600}.card .l{color:#777;font-size:13px}
.card ul{list-style:none;padding:0;margin:6px 0 0;font-size:13px}.card li{display:flex;justify-content:space-between;gap:8px;padding:2px 0;border-top:1px solid #f0f0ee}
h2{font-size:15px;letter-spacing:.08em;text-transform:uppercase;color:#777;margin:28px 0 10px}
details.s{background:#fff;border:1px solid #e6e6e2;border-radius:12px;margin:0 0 8px;overflow:hidden}
summary{display:grid;grid-template-columns:120px 170px 120px 90px 1fr 60px auto;gap:12px;align-items:center;padding:12px 16px;cursor:pointer;font-size:13.5px;list-style:none}
summary::-webkit-details-marker{display:none}summary:hover{background:#f6f6f3}
.when{color:#555}.ip{font-family:ui-monospace,Menlo,monospace;font-size:12px;color:#777}.path{color:#111;font-weight:500;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.dur{text-align:right;color:#555}
.ret{font-size:11px;background:#111;color:#fff;border-radius:999px;padding:2px 8px}
.body{padding:4px 16px 16px;border-top:1px solid #f0f0ee;font-size:13.5px}.body .k{font-size:11px;letter-spacing:.14em;text-transform:uppercase;color:#999;margin:12px 0 4px}.body p{margin:0}.body ul{margin:0;padding-left:18px}.h{color:#999;font-size:12px;word-break:break-all}
@media (max-width:800px){summary{grid-template-columns:1fr 1fr;gap:4px}.path{white-space:normal}}
</style></head><body>
<h1>Portfolio visitors</h1>
<p class="sub">Last ${days} days · ${list.length} sessions · ${uniq} unique visitors · bots filtered · <a href="?key=${esc(key)}&days=7">7d</a> · <a href="?key=${esc(key)}&days=30">30d</a> · <a href="?key=${esc(key)}&days=90">90d</a></p>
<div class="cards">
  <div class="card"><div class="n">${list.length}</div><div class="l">sessions</div></div>
  <div class="card"><div class="n">${uniq}</div><div class="l">unique visitors</div></div>
  <div class="card"><div class="n">${dur(list.reduce((a, s) => a + s.seconds, 0) / Math.max(1, list.length))}</div><div class="l">avg. time on site</div></div>
  <div class="card"><div class="l">Page views</div><ul>${top(pageViews).slice(0, 8).map(([k, v]) => `<li><span>${esc(k)}</span><b>${v}</b></li>`).join('')}</ul></div>
  <div class="card"><div class="l">Project clicks</div><ul>${top(projClicks).slice(0, 8).map(([k, v]) => `<li><span>${esc(k.replace('project: ', ''))}</span><b>${v}</b></li>`).join('') || '<li>none yet</li>'}</ul></div>
</div>
<h2>Sessions</h2>
${sessionHtml || '<p>No visits yet.</p>'}
</body></html>`;
}
