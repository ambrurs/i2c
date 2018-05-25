var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var path = require('path');
var cors = require('cors')

app.use(express.static(path.join(__dirname + '/public')));



app.get('/', function (req,res) { 
    res.sendFile(__dirname + '/index.html');
});

    io.on('connection', function (socket) {

        console.log("Conectado al socket", socket.id);

        socket.on('on', function (){
            console.log("Entre a encender");
            socket.broadcast.emit('onServer', "on");
          });
        


          socket.on('off', function (){
            console.log("Entre a apagar");
            socket.broadcast.emit('offServer', "off");
          });


          socket.on('temperatua', function(){
            console.log("Entre a revisar la temperatura");
            socket.broadcast.emit('temp', "temperatura");
          });

          socket.on('tempResponse', function(data){
            socket.broadcast.emit('temp', data);
          });


    });


http.listen(8083, function(){

  console.log("Escuchando por el puerto 8083");
});    