const http = require("http");

// 요청 핸들러 등록, 어떤 요청이 들어오던지 이 함수가 실행이 된다.

const port = 9010;
const fs = require("fs");


const server = http.createServer(function(req, resp){
    //console.log("request received");
    
    //favicon.ico란?
    console.log(req.url);

    // welcome file이 만들어진 과정
    if(req.url === '/'){
        req.url = '/index.html';
    }

    // url을 다 읽으면 function() 실행
    fs.readFile(__dirname + '/public' + req.url, function(error, data){
        // head
        resp.writeHead(200, {
            'Content-Type' : 'text/html'
        });
        // body
        resp.end(data);
    });
});

server.listen(port, function(){
    console.log("http server running on " + port);
});