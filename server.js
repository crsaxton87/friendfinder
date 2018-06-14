// Dependencies
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

// Exported data
const friends = require("./app/data/friends");

// Express Setup
const app = express();
const PORT = process.env.PORT || 8080;

// Set up Express to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Express static
app.use(express.static("app"));

// Exported routes
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// Starts the server to begin listening
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});

