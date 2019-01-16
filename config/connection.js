//set up mysql
var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "local",
    port: 3306,
    user: username,
    password: password,
    database: triplan.db,
});


con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });

module.exports = connection;
