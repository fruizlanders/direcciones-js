-- migrate:up

INSERT INTO positions (latitude, longitude, location_id) VALUES (-12.086065,  -77.032111, 1 );
INSERT INTO positions (latitude, longitude, location_id) VALUES (-12.080595,  -77.034447, 1 );
INSERT INTO positions (latitude, longitude, location_id) VALUES (-12.083731,  -77.030797, 1 );
INSERT INTO positions (latitude, longitude, location_id) VALUES (-12.08644,  -77.028653, 1 );
INSERT INTO positions (latitude, longitude, location_id) VALUES (-12.083619,  -77.042599, 1 );
INSERT INTO positions (latitude, longitude, location_id) VALUES (-12.082773,  -77.0426, 1 );
INSERT INTO positions (latitude, longitude, location_id) VALUES (-12.085063,  -77.039504, 1 );
INSERT INTO positions (latitude, longitude, location_id) VALUES (-12.084859,  -77.048178, 1 );
INSERT INTO positions (latitude, longitude, location_id) VALUES (-12.081674,  -77.031101, 1);

INSERT INTO positions (latitude, longitude, location_id) VALUES (-12.086065, -77.032111, 2);
INSERT INTO positions (latitude, longitude, location_id) VALUES (-12.080595, -77.034447, 2);
INSERT INTO positions (latitude, longitude, location_id) VALUES (-12.083731, -77.030797, 2);
INSERT INTO positions (latitude, longitude, location_id) VALUES (-12.08644, -77.028653, 2);
INSERT INTO positions (latitude, longitude, location_id) VALUES (-12.083619, -77.042599, 2);
INSERT INTO positions (latitude, longitude, location_id) VALUES (-12.082773, -77.0426, 2);
INSERT INTO positions (latitude, longitude, location_id) VALUES (-12.085063, -77.039504, 2);
INSERT INTO positions (latitude, longitude, location_id) VALUES (-12.084859, -77.048178, 2);
INSERT INTO positions (latitude, longitude, location_id) VALUES (-12.081674, -77.031101, 2);

INSERT INTO positions (latitude, longitude, location_id) VALUES  (-12.086065, -77.032111, 3);
INSERT INTO positions (latitude, longitude, location_id) VALUES  (-12.093772, -77.03911, 3);
INSERT INTO positions (latitude, longitude, location_id) VALUES  (-12.092385, -77.040148, 3);
INSERT INTO positions (latitude, longitude, location_id) VALUES  (-12.102069, -77.038724, 3);
INSERT INTO positions (latitude, longitude, location_id) VALUES  (-12.085536, -77.031314, 3);
INSERT INTO positions (latitude, longitude, location_id) VALUES  (-12.087535, -77.056854, 3);
INSERT INTO positions (latitude, longitude, location_id) VALUES  (-12.094481, -77.055289, 3);
INSERT INTO positions (latitude, longitude, location_id) VALUES  (-12.097951, -77.034347, 3);
INSERT INTO positions (latitude, longitude, location_id) VALUES  (-12.102152, -77.03864, 3);

INSERT INTO positions (latitude, longitude, location_id) VALUES  (-12.086065, -77.032111, 4);
INSERT INTO positions (latitude, longitude, location_id) VALUES  (-12.091761, -77.025267, 4);
INSERT INTO positions (latitude, longitude, location_id) VALUES  (-12.097851, -77.039963, 4);
INSERT INTO positions (latitude, longitude, location_id) VALUES  (-12.096839, -77.040075, 4);
INSERT INTO positions (latitude, longitude, location_id) VALUES  (-12.090398, -77.043093, 4);
INSERT INTO positions (latitude, longitude, location_id) VALUES  (-12.088445, -77.024344, 4);
INSERT INTO positions (latitude, longitude, location_id) VALUES  (-12.096355, -77.05102, 4);

INSERT INTO positions (latitude, longitude, location_id) VALUES  (-12.087983, -77.085284, 5);
INSERT INTO positions (latitude, longitude, location_id) VALUES  (-12.06293, -77.087668, 5);
INSERT INTO positions (latitude, longitude, location_id) VALUES  (-12.050816, -77.056429, 5);
INSERT INTO positions (latitude, longitude, location_id) VALUES  (-12.05459, -76.997483, 5);
INSERT INTO positions (latitude, longitude, location_id) VALUES  (-12.02836, -77.019586, 5);
INSERT INTO positions (latitude, longitude, location_id) VALUES  (-12.034973, -77.025645, 5);
INSERT INTO positions (latitude, longitude, location_id) VALUES  (-12.041553, -76.979972, 5);
INSERT INTO positions (latitude, longitude, location_id) VALUES  (-12.064084, -77.03839, 5);

INSERT INTO positions (latitude, longitude, location_id) VALUES  (-12.087983, -77.085284, 6);
INSERT INTO positions (latitude, longitude, location_id) VALUES  (-12.086283, -77.056217, 6);
INSERT INTO positions (latitude, longitude, location_id) VALUES  (-12.042477, -77.00462, 6);
INSERT INTO positions (latitude, longitude, location_id) VALUES  (-12.039731, -77.097345, 6);
INSERT INTO positions (latitude, longitude, location_id) VALUES  (-12.181762, -76.956584, 6);
INSERT INTO positions (latitude, longitude, location_id) VALUES  (-12.004151, -77.078752, 6);
INSERT INTO positions (latitude, longitude, location_id) VALUES  (-12.156863, -77.0087, 6);

-- migrate:down

DELETE FROM positions;
