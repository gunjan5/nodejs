var express = require('express');

var app = express();

app.get('/', function(req, res) {
  res.send('<h1>Hello</h1> <em>Express</em>');
});

app.get('/me', function(req, res) {
  res.send('@Gunjan_Patel1 <br> Github: gunjan5');
});

var server = app.listen(4000, function() {
  console.log('listening on port 4000 on localhost');
});
