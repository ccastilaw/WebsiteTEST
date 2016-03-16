var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
  res.end('TejasRE.net test is working!')
  res.end('That's right, Cody is awesome')
}).listen(8080, 'localhost');
console.log('Server running at http://localhost:8080/');
