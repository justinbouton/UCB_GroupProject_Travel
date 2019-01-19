const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const exphbs = require("express-handlebars")
const session = require("express-session")
const passport = require("passport")
const env = require("dotenv").load()

// For BodyParser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// For Passport & Express Session
app.use(session({ secret: 'secret',resave: true, saveUninitialized:true})); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions

// For Handlebars
app.use(express.static("./public"))
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
app.get("/", function(req, res) {
    res.render("index");
})

//Models
const models = require("./models")

// Routes
const authRoute = require("./routes/auth.js")(app, passport);

//load passport strategies
require('./config/passport/passport.js')(passport, models.user);

//Sync Database
models.sequelize.sync().then(function() {
    console.log('Nice! Database looks fine')
}).catch(function(err) {
    console.log(err, "Something went wrong with the Database Update!")
});

//make app listen on port
const PORT = process.env.PORT || 8080;

app.listen(PORT, function(err) {
    if (!err) {
        console.log("Site is live")
    } else {
        console.log(err)
    }
});