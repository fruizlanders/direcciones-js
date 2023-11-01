-- migrate:up

INSERT INTO doctors (id, cmp, names, last_names, email, phone, image_url, dni, user_id) VALUES (1, 45954, "VALDIVIA CABALLERO", "JOSÉ JESÚS", "jovaldiv@ulima.edu.pe", "999-888-777", "profile-default.png", "12345705", 29);

-- migrate:down

DELETE FROM doctors;