//from - http://socket.io/get-started/chat/

var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

var serverPort = 3000;
var serverUrl = '0.0.0.0';

app.get('/', function(req, res){
	res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
	console.log('user connected');

	socket.on('chatMessage', function(data){
		console.log('--> ' + data);
		io.emit('chatMessage', data);
	});

	socket.on('disconnect', function(){
		console.log('user disconnect');
	});

});

http.listen(serverPort, serverUrl, function(){
	console.log('listening on 3000');
});