var http = require("http");
var fs = require("fs");

http.createServer(function(req, res) {

    if (req.url == "/index") {
      fs.readFile('index.html', function readData(err, data1) {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data1);
      }
    }

    else if (req.url == "/index2") {
      fs.readFile('index2.html', function readData(err, data2) {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data2);
      }
    }
    else {
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.end("404 error! File not found.");
    }
}).listen(8000, "localhost");
