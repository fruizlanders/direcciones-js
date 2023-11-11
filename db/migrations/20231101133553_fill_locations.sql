-- migrate:up

INSERT INTO locations (id, name) VALUES (1, "li1");
INSERT INTO locations (id, name) VALUES (2, "li2");
INSERT INTO locations (id, name) VALUES (3, "si1");
INSERT INTO locations (id, name) VALUES (4, "si2");
INSERT INTO locations (id, name) VALUES (5, "loca1");
INSERT INTO locations (id, name) VALUES (6, "loca2");

-- migrate:down

DELETE FROM locations;
