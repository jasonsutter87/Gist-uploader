const http = require('http')

http.createServer(function (req, res) {
  res.writeHead(200);
  res.write('Hello World');
  res.end();
}).listen(8080);
console.log('Listening on port 8080');
