var express = require('express');
var bodyParser = require("body-parser");
var app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function (req, res) {
    res.json({leds:"Hola leds"});
});

app.get('/temperatua', function (req, res) {
    res.json("temperatua");
});


var port =  4000;

app.listen(port, function () {
  console.log('Run leds ' + port + '!');
});