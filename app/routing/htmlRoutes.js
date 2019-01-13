//Dependencies
//=========================================================================
var express = require('express');
var path = require('path');
var router = express.Router();

//HTML Routes
//=========================================================================
router.get('/', function(req, res){
    res.sendFile("/CodingCamp/MyHomework/friend-finder/app/public/home.html");
});

router.get('/survey', function(req, res){
    res.sendFile("/CodingCamp/MyHomework/friend-finder/app/public/survey.html");
});

//Export
//=========================================================================
module.exports = router