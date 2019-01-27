# UCB_GroupProject_Travel

[Triplan is desgined to simplify group travel][https://ucbgroupprojecttravel.herokuapp.com/]


## TECHNOLOGIES:
* NodeJS, Express, MySql, Squelize and Handlebars.


## SETUP:
* From your Mac Terminal directory, git clone this repo.
* Run npm init -y; npm i
* Setup a MySql database, mysql -u root -p, enter your password, CREATE database triplan_db; exit
* Create a config/config.json file add the following:
{
    "development": { 
        "username": "root",
        "password": "your-mysql-password", 
        "database": "triplan_db",
        "host": "localhost",
        "dialect": "mysql"
    }
}


Now that you have cloned the repo, installed the nessary npm modules, setup the database and config file you can run the application. 


## RUN:
* From your Mac Terminal directory, nodemon server.js
* Once the program loads you will see 'Nice! Database looks fine.'
* Open a browser of choice, navigate to localhost:8080
* From the homepage you can register for a new account or login if you've already created an account.
* From the Dashboard you can add new trip interaries, archive or delete.

Thanks for checking out our UCB group project!
