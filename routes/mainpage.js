const express = require('express');
const router = express.Router();

const Video = require('../controller/VideoController');

// TODO: Change to real render
// TODO: Fix bug
router.get('/', function (req, res, next) {
    // Get top 10 like videos
    Video.findTopTenVideos()
        .then(function (list) {
            res.render('mainpage',
                {videos: list},
                function (err, html) {
                    if(err) {
                        console.log(err);
                        console.log(list);
                        res.send("Error");
                    }
                    res.send(html);
                });
        }).catch(next);
});

module.exports = router;
