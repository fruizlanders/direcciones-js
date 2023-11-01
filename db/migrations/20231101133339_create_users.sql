-- migrate:up

CREATE TABLE users (
  id	INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
  user	VARCHAR(30),
  password	VARCHAR(30),
  pacient_id	INTEGER NOT NULL,
  FOREIGN KEY (pacient_id) REFERENCES pacients (id)
);

-- migrate:down

DROP TABLE IF EXISTS users;
