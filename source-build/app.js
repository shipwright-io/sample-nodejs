// From https://github.com/homeport/gonut/tree/master/assets/sample-apps/nodejs

var port = (process.env.PORT || 8080);
var http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello, World!\n');
}).listen(port);
