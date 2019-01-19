<<<<<<< HEAD
-- FOR REFERENCE ONLY
-- UTILIZING SEQUELIZE


-- create database
DROP DATABASE IF EXISTS triplan_db;
CREATE DATABASE triplan_db;
=======
DROP database if exists triplan_db;

CREATE database triplan_db;

>>>>>>> b884853b5f3d43a8022dcf65dabbc0c38ab07eab
USE triplan_db;

CREATE TABLE users(
<<<<<<< HEAD
    user_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL
);

-- create trip table
CREATE TABLE trips(
    trip_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    trip_name NVARCHAR(45) NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);

-- create date table
CREATE TABLE dates (
    date_id DATE PRIMARY KEY,
    trip_id INT NOT NULL,
    FOREIGN KEY (trip_id) REFERENCES trips(trip_id)
);

-- create locations table
CREATE TABLE locations (
    location_name VARCHAR(60) NOT NULL PRIMARY KEY,
    date_id DATE NOT NULL,
    FOREIGN KEY (date_id) REFERENCES dates(date_id)
);

-- create activities table
CREATE TABLE activities (
    activity_name VARCHAR(255) NOT NULL PRIMARY KEY,
    location_name VARCHAR(60) NOT NULL,
    FOREIGN KEY (location_name) REFERENCES locations(location_name)
=======
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
>>>>>>> b884853b5f3d43a8022dcf65dabbc0c38ab07eab
);