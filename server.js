// http://localhost:8080으로 접속할때, 메세지를 보냄

var http = require('http')
var os = require('os');

var handleRequest = function(request, response) {
    console.log('Received request for URL: ' + request.url)
    response.writeHead(200);
    response.end('Hello World')
};

var www = http.createServer(handleRequest);
www.listen(8080);
console.log(os.hostname() + " Server listening..");