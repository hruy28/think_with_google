var express = require('express');
var fs = require('fs');

var app = express();

app.set('views',__dirname + '/views');
app.use(express.static(__dirname+'/public'));

app.listen(8000);
console.log('Server is now running ...');
