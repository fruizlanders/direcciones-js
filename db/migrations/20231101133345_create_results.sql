-- migrate:up

CREATE TABLE results (
  id	INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
  description	TEXT,
  created_at DATETIME,
  updated_at DATETIME,
  pacient_id	INTEGER NOT NULL,
  doctor_id	INTEGER NOT NULL,
  FOREIGN KEY (pacient_id) REFERENCES pacients (id),
  FOREIGN KEY (doctor_id) REFERENCES doctors (id)
);

-- migrate:down

DROP TABLE IF EXISTS results;
