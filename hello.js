var http = require ('http');
var myServer = http.createServer( function(request, response) {
  response.writeHead(200, {"Content-Type": "test/plain"});
  response.write("Hello");
  response.end();
});

myServer.listen(3000);
