# Private visitor analytics (invisible on the site)

What it records per visit: time, IP, city/country, device/browser, referrer,
pages in order, seconds on each page, seconds per section (≥50% visible),
every link/project click, scroll depth. Bots are filtered in the dashboard.

Stack: `assets/track.js` on each page → Cloudflare Worker (`worker.js`) → D1 (SQLite).
Free tier is far more than a portfolio needs. Nothing is visible to visitors.

## One-time setup (≈10 min, in Terminal)

1. `npm i -g wrangler && wrangler login`        (opens Cloudflare sign-up/login — free)
2. `cd assets/analytics`
3. `wrangler d1 create sophiake-analytics`       → copy the `database_id` into wrangler.toml
4. `wrangler d1 execute sophiake-analytics --remote --file=schema.sql`
5. `wrangler secret put DASH_KEY`                → type a long random password (this protects your dashboard)
6. `wrangler deploy`                              → prints a URL like https://sophiake-analytics.<you>.workers.dev
7. In every HTML page, replace `https://REPLACE.workers.dev` in the `<script src="assets/track.js" ...>` tag
   with that URL (search & replace across the folder), then push the site.

## Viewing
Open  https://sophiake-analytics.<you>.workers.dev/dash?key=YOUR_DASH_KEY
(?days=7 / 30 / 90). Bookmark it; don't share the key.

## Exclude yourself
In your own browser, on sophiake.com, open DevTools console once and run:
    localStorage.setItem('sk_optout','1')

## Notes
- Visitors with "Do Not Track" on are skipped. Local/file previews never send anything.
- IP + location are personal data: if you ever get EU traffic, a one-line privacy note on the site
  is the usual practice. Easy switch: in worker.js store `geo` only and set `ip` to '' .
- To wipe data: `wrangler d1 execute sophiake-analytics --remote --command "DELETE FROM events"`
