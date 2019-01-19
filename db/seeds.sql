<<<<<<< HEAD
-- FOR REFERENCE ONLY
-- UTILIZING SEQUELIZE


-- choose database
USE triplan_db;

-- insert users
INSERT INTO users (username, email, password)
VALUES  ("supasavina", "savinajia@gmail.com", "savina"),
        ("supajustin", "justnbouton@gmail.com", "justin"),
        ("supatrina", "unknownt@gmail.com", "trina"),
        ("supaandrew", "unknowna@gmail.com", "andrew");

-- insert trips
INSERT INTO trips(trip_id, user_id, trip_name) 
VALUES  (1, 1, "Cabo"),
        (2, 2, "Floria"),
        (3, 3, "NYC"),
        (4, 4, "Cancun");


INSERT INTO dates(date_id,trip_id)
VALUES  ("2019-01-01", 1),
        ("2019-02-02", 2),
        ("2019-03-03", 3),
        ("2019-04-04", 4);


INSERT INTO locations(location_name,date_id)
VALUES  ("Cabo San Lucas, MX", "2019-01-01"),
        ("Orlando, FL", "2019-02-02"),
        ("Cancun, MX", "2019-03-03"),
        ("New York, NY", "2019-04-04");


INSERT INTO activities(activity_name, location_name)
VALUES  ("Playa Santa Maria", "Cabo San Lucas, MX"),
        ("Family visit", "Orlando, FL"),
        ("Playa Tortugas", "Cancun, MX"),
        ("Central Park", "New York, NY");


SELECT * FROM users; 
SELECT * FROM trips; 
SELECT * FROM dates; 
SELECT * FROM locations; 
SELECT * FROM activities; 


=======
INSERT INTO 
users(user_id, username, email, password_hash)
VALUES
(1,"User1","test1@noway.com","password1"),
(2,"User2","test2@noway.com","password2"),
(3,"User3","test3@noway.com","password3");


INSERT INTO 
trips(trip_id, user_id, trip_name) 
VALUES 
(1,1,"Cabo"),
(2,2,"Cancun"),
(3,3,"NYC");


INSERT INTO 
dates(date_id,trip_id)
VALUES
("2019-01-01", 1),
("2019-02-02", 2),
("2019-03-03", 3);


INSERT INTO 
locations(location_name,date_id)
VALUES
("Cabo San Lucas, MX", "2019-01-01"),
("Cancun, MX", "2019-02-02"),
("New York, NY", "2019-03-03");


INSERT INTO 
activities(activity_name, location_name)
VALUES
("Playa Santa Maria", "Cabo San Lucas, MX"),
("Playa Tortugas","Cancun, MX"),
("Central Park","New York, NY");

-- select * from users;
-- select * from trips;
-- select * from dates;
-- select * from locations;
-- select * from activities;
>>>>>>> b884853b5f3d43a8022dcf65dabbc0c38ab07eab

SELECT * FROM activities 
JOIN locations USING(location_name)
JOIN dates USING(date_id)
JOIN trips USING(trip_id)
JOIN users USING(user_id);