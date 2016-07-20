var http = require('http');

var options = {
	hostname: "localhost",
	port: "8080",
	path: "/httptest.html"
}

http.request(options,function(res){
	var serverData = "";
	res.on("data",function(chunk){
		serverData += chunk;
	});	
	res.on("end",function(){
		console.log(serverData);
	});
}).end();