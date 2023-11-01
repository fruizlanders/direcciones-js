-- migrate:up

CREATE TABLE results (
  id	INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
  description	TEXT,
  pacient_id	INTEGER NOT NULL,
  created_at DATETIME,
  updated_at DATETIME,
  FOREIGN KEY (pacient_id) REFERENCES pacients (id)
);

-- migrate:down

DROP TABLE IF EXISTS results;
