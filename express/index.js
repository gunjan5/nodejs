var express = require('express');

car app = express();

app.get('/', function(req, res) {
  res.send('Hello Express');
});

var server = app.listen(4000, function() {
  console.log('listening on port 4000 on localhost');
});
