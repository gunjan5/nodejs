var express = require('express');

var app = express();

app.get('/', function(req, res) {
  res.send('Hello Express');
});

var server = app.listen(4000, function() {
  console.log('listening on port 4000 on localhost');
});
