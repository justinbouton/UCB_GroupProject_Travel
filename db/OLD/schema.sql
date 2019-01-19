DROP database if exists triplan_db;

CREATE database triplan_db;

USE triplan_db;

CREATE TABLE users(
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(60) not null,
    email NVARCHAR(45) not null UNIQUE,
    password_hash NVARCHAR(16) not null
);

CREATE TABLE trips(
    trip_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    trip_name NVARCHAR(45) not null,
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);

CREATE TABLE dates (
    date_id DATE PRIMARY KEY,
    trip_id INT not null,
    FOREIGN KEY (trip_id) REFERENCES trips(trip_id)  
);

CREATE TABLE locations (
    location_name VARCHAR(60) PRIMARY KEY,
    date_id DATE,
    FOREIGN KEY (date_id) REFERENCES dates(date_id)  
);

CREATE TABLE activities (
    activity_name VARCHAR(255) not null PRIMARY KEY,
    location_name VARCHAR(60),
    FOREIGN KEY (location_name) REFERENCES locations(location_name)  
);