const express = require("express");

const router = express.Router();


router.route('').get(function(req, res){
    res.render('user/info', {
        no : req.query.no || 0
    });
});

// 순서로 적용 가능
router.route('/join').get(function(req, res){
    res.render('user/join');
});

router.route('/api').get(function(req, res){
    vo = {
        no : 10,
        name : '둘리',
        email : "tkrk1226@naver.com",
        gender : 'male'
    }

    //res.writeHead(200, {
    //    'Content-Type' : 'application/json'
    //})
    //res.end(JSON.stringify(vo));
    res.send(vo);
});

router.route('/join').post(function(req, res){
    console.log(req.body); // json 객체로 form, json 등등을 추출 가능
    res.redirect("/");
});

router.route('/:no').get(function(req, res){
    res.render('user/info', {
        no : req.params.no || 0
    });
});

/*
router.route('').get(function(req, res){
    res.render('user/index'); // views/main/index
});
*/

module.exports = router;
