-- migrate:up

CREATE TABLE positions (
  id	INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
  latitude	FLOAT,
  longitude	FLOAT,
  location_id INT,
  FOREIGN KEY (location_id) REFERENCES locations (id)
);

-- migrate:down

DROP TABLE IF EXISTS positions;
