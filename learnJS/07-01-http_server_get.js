var http = require('http');

var message = [
	"hello one",
	"hello 2",
	"hello three"];
var server = http.createServer(function(req,res){
	res.setHeader("Content-Type","text/html");
	res.writeHead(200);
	res.write('<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><title>Sample Http Server</title></head>');
	res.write('<body>');
	for(var value of message){
		res.write('\n<p>' + value + '<p>');
	}
	res.write('\n</body></html>');
	res.end();
}).listen(8080);