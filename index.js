const express = require('express');
const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.use(express.static(__dirname + '/public'));


io.on('connection', function(socket){
  console.log('a user connected');
    socket.on('chat message', function(msg){
    console.log('message: ' + msg);
  });
});

io.emit('some event', { for: 'everyone' });

io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
});

http.listen(8000
	, () => {
		console.log("Servidor Listo")
	});