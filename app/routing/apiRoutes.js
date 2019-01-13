//Dependencies
//=========================================================================
var express = require('express');
var router = express.Router();
var data = require('/CodingCamp/MyHomework/friend-finder/app/data/friends.js');
var match;

//API Routes
//=========================================================================
router.get('/api/friends', function (req, res) {
    res.json(data);
});

router.post('/api/friends', function (req, res) {
    loopScores(req);
    var dataObj = req.body;
    data.push(dataObj);
    res.json(match);
});

module.exports = router

//Functions
//=========================================================================

//Function to loop through arrays of scores
function loopScores(req) {

    //Empty array to hold total difference
    var totalDArray = []

    //For Looping through data from friends.js and populate totalDArray
    for (var i = 0; i < data.length; i++) {
        var diffArrays = findDifference(req.body.scores, data[i].scores)
        var totalDifference = diffArrays.reduce(add, 0);
        totalDArray.push(totalDifference);
    }
    findLowest(totalDArray);
};

//Function to find the differences between integers in arrays
function findDifference(a1, a2) {
    var result = [],
        longerLength = a1.length >= a2.length ? a1.length : a2.length;
    for (i = 0; i < longerLength; i++) {
        if (a1[i] !== a2[i]) {
            if (a1[i] > a2[i]) {
                result.push(a1[i] - a2[i]);
            } else {
                result.push(a2[i] - a1[i]);
            }
        }
    }
    return result;
};

//Add function for reduce method
function add(a, b) {
    return a + b;
};

//Function to find the lowest number in array
function findLowest(arr) {
    var lowestDiff = Math.min(...arr);
    var closeMatchIndex = arr.indexOf(lowestDiff);
    match = returnMatch(data[closeMatchIndex])
};

//Function that returns a number
function returnMatch(match) {
    return match;
};