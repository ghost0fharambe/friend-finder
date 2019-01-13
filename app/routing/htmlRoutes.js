//Dependencies
//=========================================================================
var express = require('express');
var path = require('path');
var router = express.Router();

//HTML Routes
//=========================================================================
router.get('/', function (req, res) {
    res.sendFile(path.resolve(__dirname, '../public/home.html'));
});

router.get('/survey', function (req, res) {
    res.sendFile(path.resolve(__dirname, '../public/survey.html'));
});

//Export
//=========================================================================
module.exports = router