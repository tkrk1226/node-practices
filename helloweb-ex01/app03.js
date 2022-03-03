const connect = require("connect");
const serveStatic = require("serve-static");

// 요청 핸들러 등록, 어떤 요청이 들어오던지 이 함수가 실행이 된다.

const port = 9010;
const fs = require("serve-static");
const app = connect(); // 함수를 바로 export 시킨다.

// 정적자원 요청을 serveStatic에게 요청, url mapping
// mine type?
app.use(serveStatic(__dirname + "/public"));

app.listen(port, function(){
    console.log("http server running on " + port);
});