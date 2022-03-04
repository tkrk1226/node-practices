const express = require("express");

const router = express.Router();

// hello/01 로 router 분산
router.route('').get(function(req, res){
    res.render('main/index'); // views/main/index
});

module.exports = router;
