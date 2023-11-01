-- migrate:up

CREATE TABLE users (
  id	INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
  user	VARCHAR(30),
  password	VARCHAR(30)
);

-- migrate:down

DROP TABLE IF EXISTS users;
