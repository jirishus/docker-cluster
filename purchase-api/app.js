var express = require('express');
var app = express();
var Port = 3005;

app.get('/', function(req, res) {
  res.send('message to send');
});

app.listen(Port);

console.log('app listening on port: ' + Port);
