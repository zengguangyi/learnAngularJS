var http = require('http');

var server = http.createServer(function(req,res){
	var jsonData = "";
	req.on("data",function(chunk){
		jsonData += chunk;
	});
	req.on("end",function(){
		var jsonObj = JSON.parse(jsonData);
		var resObj = {
			"message": "Hello," + jsonObj.name,
			"howOld": jsonObj.name + " is " + jsonObj.age
		}

		res.writeHead(200);
		res.end(JSON.stringify(resObj));
		
	});

	
}).listen(8080);