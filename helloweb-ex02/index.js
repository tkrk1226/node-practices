//console.log("start package");

const http = require("http");
const path = require("path");
const express = require("express");

const helloRouter = require('./routes/hello');

const port = 9010;

// Application Setup
const application = express()
    // 1. static resource
    .use(express.static(path.join(__dirname , "assets"))) // 적당한 위치를 잡아주면 된다.
    // 2. request body parser
    .use(express.urlencoded({extended: true})) // application/x-www-form-urlencoded
    .use(express.json())     // application/json
    // 3. view engine
    // 4. request router
    .all('*', function(req, res, next){
        res.locals.req = req;
        res.locals.res = res;

        next(); // 이걸 써야 다음 라우팅이 가능, chain이 계속 가능하다.
    })
    .use('/hello', helloRouter);

// Server Setup
http
    .createServer(application)
    .on('listening', function(){
        console.log("http server runs on " + port);
    })
    .on('error', function(){
        console.error(error);
    })
    .listen(port);
