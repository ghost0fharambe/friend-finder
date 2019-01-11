var express = require('express');
var router = express.Router();
var data = require('/CodingCamp/MyHomework/friend-finder/app/data/friends.js');


router.get('/api/friends', function (req, res) {
    //res.send('hello');
    res.json(data);
});

router.post('/api/friends', function (req, res) {
    var dataObj = req.body;
    console.log(dataObj);
    data.push(dataObj);

    res.json(dataObj);
})

module.exports = router