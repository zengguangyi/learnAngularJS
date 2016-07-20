var net = require('net');

function writeData(socket,data){
	var success = !socket.write(data);
	if(!success){
		(function(socket,data){
			socket.on("drain",function(){
				writeData(socket,data);
			});
		})(socket,data);
	}
}

function getConnection(connName){
	var client = net.connect({port: 8107,host: "localhost"},function(){
		console.log("Clinet: " + connName + "connected");
		console.log("Client: localAddress" + this.localAddress + " : " + this.localPort);
		console.log("Client: remoteAddress" + this.remoteAddress + " : " + this.remotePort);

		this.setTimeout(500);
		this.setEncoding("utf8");
		this.on("data",function(chunk){
			console.log(connName + " from Server: " + chunk);
			this.end();
		});
		this.on("end",function(){
			console.log(connName + " Client disconnected");
		});
		this.on("error",function(err){
			console.log(connName + " Error: " + JSON.stringify(err));
		});
		this.on("timeout",function(){
			console.log("Scoket time out");
		});
		this.on("close",function(){
			console.log("Socket close");
		});
	});

	return client;

}

var one = getConnection("one");
var two = getConnection("two");
var three = getConnection("three");

writeData(one,"hahah,one?");
writeData(two,"hahah,22222?");
writeData(three,"hahah,hello three");