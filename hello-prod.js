var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\nTejasre test site is working\nCody is awesome');
}).listen(3000, 'localhost');
console.log('Server running at http://localhost:3000/');
