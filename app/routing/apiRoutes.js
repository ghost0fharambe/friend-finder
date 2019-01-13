var express = require('express');
var router = express.Router();
var data = require('/CodingCamp/MyHomework/friend-finder/app/data/friends.js');


router.get('/api/friends', function (req, res) {
    //res.send('hello');
    res.json(data);
});

router.post('/api/friends', function (req, res) {
    loopScores(req);
    var dataObj = req.body;
    data.push(dataObj);
    res.json(dataObj);
})

module.exports = router

function loopScores(req) {
    var diffArrays = []
    for (var i = 0; i < data.length; i++) {
        console.log(findDifference(req.body.scores, data[i].scores))
        var diffArrays = findDifference(req.body.scores, data[i].scores)
        //console.log(diffArrays);
        var totalDifference = diffArrays.reduce(add, 0);
        console.log(totalDifference);
    }
}

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

function add(a, b) {
    return a + b;
};