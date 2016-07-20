/*
*2016.7.19
*/
var net = require('net');

var client = net.connect({port:8080,host:"localhost"},function(){
	console.log("Client: client connected");
	client.write("Client to Server: 123456");
});
client.on("connect",function(){
		console.log("Server: connected");
	});

client.on("data",function(chunk){
	console.log(chunk.toString());
	client.end();
});
client.on("end",function(){
	console.log("Client: end");

});
