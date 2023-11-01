-- migrate:up

CREATE TABLE doctors (
  id	INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
  cmp	INTEGER,
  dni	VARCHAR(8),
  names VARCHAR(30),
  last_names VARCHAR(45),
  email VARCHAR(50),
  phone VARCHAR(30),
  image_url VARCHAR(50),
  user_id INT,
  FOREIGN KEY (user_id) REFERENCES users (id)
);

-- migrate:down

DROP TABLE IF EXISTS doctors;
