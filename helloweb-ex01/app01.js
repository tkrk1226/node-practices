const http = require("http");

// 요청 핸들러 등록, 어떤 요청이 들어오던지 이 함수가 실행이 된다.
const port = 9010;
const server = http.createServer(function(req, resp){
    //console.log("request received");
    
    // head
    resp.writeHead(200, {
        'Content-Type' : 'text/html'
    });

    // body
    resp.end('<h1>Hello World</h1>')
    
});

server.listen(port, function(){
    console.log("http server running on " + port);
});