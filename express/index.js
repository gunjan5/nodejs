var express = require('express');

var app = express();

app.get('/', function(req, res) {
  res.send('<h1>Hello</h1> <em>Express</em>');
});

app.get('/me', function(req, res) {
  res.send('@Gunjan_Patel1 <br> Github: gunjan5');
});

app.get('/who/:name?/:title?', function(req, res) {
  var name = req.params.name;
  var title = req.params.title;
  res.send('<h2>' + name + '</h2> the <h2> <em>' + title + '</em> </h2> was here!!!');
});

var server = app.listen(4000, function() {
  console.log('listening on port 4000 on localhost');
});
