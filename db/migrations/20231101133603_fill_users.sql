-- migrate:up

INSERT INTO users (id, user, password) VALUES (1, "20180038", "123");
INSERT INTO users (id, user, password) VALUES (2, "20202370", "123");
INSERT INTO users (id, user, password) VALUES (3, "20171869", "123");
INSERT INTO users (id, user, password) VALUES (4, "20192566", "123");
INSERT INTO users (id, user, password) VALUES (5, "20202712", "123");
INSERT INTO users (id, user, password) VALUES (6, "20184660", "123");
INSERT INTO users (id, user, password) VALUES (7, "20200711", "123");
INSERT INTO users (id, user, password) VALUES (8, "20194065", "123");
INSERT INTO users (id, user, password) VALUES (9, "20192303", "123");
INSERT INTO users (id, user, password) VALUES (10, "20190857", "123");
INSERT INTO users (id, user, password) VALUES (11, "20182686", "123");
INSERT INTO users (id, user, password) VALUES (12, "20142881", "123");
INSERT INTO users (id, user, password) VALUES (13, "20192985", "123");
INSERT INTO users (id, user, password) VALUES (14, "20201166", "123");
INSERT INTO users (id, user, password) VALUES (15, "20202407", "123");
INSERT INTO users (id, user, password) VALUES (16, "30230242", "123");
INSERT INTO users (id, user, password) VALUES (17, "20191291", "123");
INSERT INTO users (id, user, password) VALUES (18, "20191301", "123");
INSERT INTO users (id, user, password) VALUES (19, "20191412", "123");
INSERT INTO users (id, user, password) VALUES (20, "20152154", "123");
INSERT INTO users (id, user, password) VALUES (21, "20191937", "123");
INSERT INTO users (id, user, password) VALUES (22, "20203668", "123");
INSERT INTO users (id, user, password) VALUES (23, "20203703", "123");
INSERT INTO users (id, user, password) VALUES (24, "20192003", "123");
INSERT INTO users (id, user, password) VALUES (25, "20193553", "123");
INSERT INTO users (id, user, password) VALUES (26, "20162609", "123");
INSERT INTO users (id, user, password) VALUES (27, "20172768", "123");
INSERT INTO users (id, user, password) VALUES (28, "20183460", "123");
INSERT INTO users (id, user, password) VALUES (29, "JOVALDIV", "123");

-- migrate:down

DELETE FROM users;
