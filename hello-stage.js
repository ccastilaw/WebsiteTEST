var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\nstaging.Tejasre test site is working\nCody is awesome');
}).listen(3001, 'localhost');
console.log('Server running at http://localhost:3001/');
