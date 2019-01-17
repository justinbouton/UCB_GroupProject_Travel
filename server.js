const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const mysql = require("mysql")
const path = require("path")
const session = require("express-session")
const passport = require("passport")
const LocalStrategy = require("passport-local").Strategy

const PORT = process.env.PORT || 8080;

app.get('/', function(req, res) {
    res.send("Hello!")
})

app.listen(5000, function(err) {
 
    if (!err)
        console.log("Site is live");
    else console.log(err)
 
});