-- migrate:up

CREATE TABLE pacients (
  id	INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
  code	INTEGER,
  dni	VARCHAR(8),
  names VARCHAR(30),
  last_names VARCHAR(45),
  email VARCHAR(50),
  phone VARCHAR(30),
  image_url VARCHAR(50)
);

-- migrate:down

DROP TABLE IF EXISTS pacients;
