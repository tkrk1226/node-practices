const connect = require("connect");
const serveStatic = require("serve-static");
const connectRoute = require("connect-route");

const port = 9010;
const fs = require("serve-static");
const app = connect(); // 함수를 바로 export 시킨다.

app.use(connectRoute(function(router){

    // Controller와 비슷
    router.get("/", function(req, resp){
        resp.writeHead(200, {
            'Content-Type' : 'text/html'
        });
        // body
        resp.end("<h1>Main</h1>");
    });

    router.get("/user", function(req, resp){
        resp.writeHead(200, {
            'Content-Type' : 'text/html'
        });
        // body
        resp.end("<h1>User</h1>");
    });
}));

// default Servlet Hanlder와 느낌이 비슷
app.use(serveStatic(__dirname + "/public"));
app.listen(port, function(){
    console.log("http server running on " + port);
});