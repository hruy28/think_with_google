var express = require('express');
var app = express();
var path = require('path');

app.use(express.static(__dirname+'/public'));
app.set('views',__dirname + '/views');

app.get('/index.html', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/views/index.html'));
});
app.get('/micromoments.html', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/views/micromoments.html'));
});
app.get('/consumer_trend.html', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/views/consumer_trend.html'));
});
app.get('/video.html', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/views/video.html'));
});

var port_number = 8000;
app.listen(port_number);
console.log('Server is now running on port ' + port_number);
