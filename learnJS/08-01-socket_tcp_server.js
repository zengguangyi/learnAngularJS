var net = require('net');

function writeData(socket,data){
	var success = !socket.write(data);
	if(!success){
		(function(){
			socket.on("drain",function(){
				writeData(socket,data);
			});
		})(socket,data);
	}
}

var server = net.createServer(function(client){
	console.log("Client connection:");
	console.log("	local = " + client.localAddress + ":" + client.localPort);
	console.log("	remote = " + client.remoteAddress + ":" + client.remotePort);

	client.setTimeout(500);
	client.setEncoding("utf8");
	client.on("data",function(chunk){
		console.log("Received data from client on port " + client.remoteAddress + ":" + chunk.toString());
		console.log("	BytesReceived: " + client.bytesRead);
		writeData(client,"Sending " + chunk.toString());
		console.log("	Bytes sent: " + client.bytesWritten);
	});
	client.on("end",function(){
		console.log("Client disconnected");
		server.getConnections(function(err,count){
			console.log("Remaining Connections: " + count);
		});
	});
	client.on("error",function(err){
		console.log("Socket Error: " + JSON.stringify(err));
	});
	client.on("timeout",function(){
		console.log("Socket time out");
	});
});

server.listen(8107,function(){
	console.log("Server listening: " + JSON.stringify(server.address()));

	server.on("error",function(err){
		console.log("Server Error: " + JSON.stringify(err));
	});
	server.on("close",function(){
		console.log("Server terminated");
	});
});