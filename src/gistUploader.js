const http = require('http');
const fs = require('fs');

http.createServer(function (req, res) {
  res.writeHead(200);
  fs.readFile(process.argv[2], function(error, contents) {
    res.write(contents);
    res.end();
  });
}).listen(8080);
console.log('Listening on port 8080');
