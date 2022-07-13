var http = require('http');
var port = 8081
//create a server object:
http.createServer(function (req, res) {
  res.write('<h1 style="color:Tomato">Dev Site</h1>');
  res.end();
}).listen(port);
console.log(`http://localhost:${port}`);