var express = require('express');
var bodyParser = require("body-parser");
var app = express();
var five = require('johnny-five');

var flag = false;
var flag2 = false;

var temperatua = -1;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function (req, res) {
    res.json({temperatua:"Hola motor"});
});

app.get('/motorE', function (req, res) {
    res.json("on");
});

app.get('/motor', function (req, res) {
    res.json("off");
});

var port =  4001;

app.listen(port, function () {
  console.log('Run motor ' + port + '!');
});