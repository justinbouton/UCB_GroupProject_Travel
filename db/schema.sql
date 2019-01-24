-- create database
DROP DATABASE IF EXISTS triplan_db;
CREATE DATABASE triplan_db;
USE triplan_db;

-- create user table
CREATE TABLE users(
    user_id INT NOT NULL AUTO_INCREMENT,
    username VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL,
    password VARCHAR(255) NOT NULL,
    PRIMARY KEY (user_id)
);

