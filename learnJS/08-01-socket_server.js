/*
*2016.7.19
*/
var net = require('net');

var server = net.createServer(function(client){
	
	client.on("data",function(data){
		console.log("Server: " + data.toString());
		client.write("Server: to Client,please stop");
	});
	client.on("end",function(){
		console.log("Server: disconnected");
	});
});
server.listen(8080,function(){
	console.log("Server: 8080 is listening...");
});