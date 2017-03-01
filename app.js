var express = require('express')
var app = express()
var path = require('path');

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'dist', '/index.html'));
})

app.use('/static', express.static('dist/static'))

app.listen(80, function () {
  
})