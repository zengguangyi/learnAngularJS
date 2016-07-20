var http = require('http');

var options = {
	hostname: "localhost",
	port: "8080",
	method: "GET"
};

function handleResponse(response){
	var serverData = "";

	response.on("data",function(chunk){
		serverData += chunk;
	});
	response.on("end",function(){
		console.log("Response Status: " + response.statusCode);
		console.log("Response HttpVersion: " + response.httpVersion);
		console.log("Response Headers: " + JSON.stringify(response.headers));
		console.log("Response Url: " + response.url);
		console.log("Response Method: " + response.method);
		console.log("serverData:\n" + serverData);
	});
}

http.request(options,function(response){
	handleResponse(response);
}).end();