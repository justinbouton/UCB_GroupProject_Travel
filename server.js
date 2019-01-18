const express = require("express")
const bodyParser = require("body-parser")
const cookieParser = require("cookie-parser")
const mysql = require("mysql")
const path = require("path")
const exphbs = require("express-handlebars")
const session = require("express-session")
const passport = require("passport")
const LocalStrategy = require("passport-local").Strategy

const app = express()

// Users routes
const login = require("./routes/login.js")
const registration = require("./routes/registration.js")
const logout = require("./routes/logout.js")
const users = require("./routes/users.js")

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("./public"))

// For BodyParser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Set Handlebars.
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Express session
app.use(
    session({
      secret: 'secret',
      resave: true,
      saveUninitialized: true
    })
);

// Routes
app.get("/", function(req, res) {
    res.render("login")
})

// app.use("/", login)
// app.use("/", registration)
// app.use("/", users)
// app.use("/", logout)

const PORT = process.env.PORT || 8080;

app.listen(PORT, function(err) {
    if (!err) {
        console.log("Site is live")
    } else {
        console.log(err)
    }
});