// Dependencies
//=========================================================================
var express = require("express");
var path = require("path");
var htmlRoutes = require('./app/routing/htmlRoutes');
var apiRoutes = require('./app/routing/apiRoutes');
//var data = require('./app/data/friends.js');

// Sets up the Express App
//=========================================================================
var app = express();
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
//=========================================================================
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

//Sets routes
//=========================================================================
app.use(htmlRoutes);
app.use(apiRoutes);


//Sets Server to listen
//=========================================================================
app.listen(PORT, function () {
    console.log("Server listening on: http://localhost:" + PORT);
});