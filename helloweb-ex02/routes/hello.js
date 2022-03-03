const express = require("express");

const router = express.Router();

// hello/01 로 router 분산
router.route('/01').get(function(req, res){
    console.log("!!!!")
    res.writeHead(200, {
        'Content-Type' : 'text/html'
    });
    // body
    res.end("<h1>hello/01</h1>");
});

module.exports = router;

