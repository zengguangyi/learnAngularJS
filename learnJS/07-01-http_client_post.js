var http = require('http');

var options = {
	hostname: "localhost",
	port: "8080",
	method: "POST"
};

function handleResponse(response){
	var serverData = "";
	response.on("data",function(chunk){
		serverData += chunk;
	});
	response.on("end",function(){
		console.log(serverData);

		var jsonObj = JSON.parse(serverData);

		console.log("message: " + jsonObj.message);
		console.log("howOld: " + jsonObj.howOld);
	});
}

var client = http.request(options,function(response){
	handleResponse(response);
});
client.write('{"name":"guangyi","age":"20"}');
client.end();