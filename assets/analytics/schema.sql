CREATE TABLE IF NOT EXISTS events (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  ts INTEGER NOT NULL,
  sid TEXT, vid TEXT,
  page TEXT, type TEXT, data TEXT,
  ref TEXT, ip TEXT, geo TEXT, ua TEXT, lang TEXT, screen TEXT
);
CREATE INDEX IF NOT EXISTS idx_events_ts ON events(ts);
CREATE INDEX IF NOT EXISTS idx_events_sid ON events(sid);
