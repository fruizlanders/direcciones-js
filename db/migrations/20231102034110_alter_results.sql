-- migrate:up

ALTER TABLE results
ADD image_url VARCHAR(100);

-- migrate:down

ALTER TABLE results
DROP COLUMN image_url;
