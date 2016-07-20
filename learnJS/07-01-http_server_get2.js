var http = require('http'),
url = require('url'),
querystring = require('querystring');

var server = http.createServer(function(req,res){
	var urlObj = url.parse(req.url);
	var queryObj = querystring.parse(urlObj.query)
	console.log("query:");
	console.log(queryObj);

	var resJSON = {};

	if(queryObj.name == "zengguangyi"){
		resJSON.result = "success";
		resJSON.name = queryObj.name;
		
		if(queryObj.age){
			resJSON.age = "you said " + queryObj.age;
		}else{
			resJSON.age = "you don't say";
		}

		resJSON.subObj = {
			"subname": "yi",
			"sube": "eee",
			"subwhat": [
				"one",
				"two",
				"three"
			],
			"sub": "subsub"
		};
		resJSON.py = "py";

	}else{
		resJSON.error = "wrong format";
	}

	console.log("resJSON:");
	console.log(resJSON);

	res.writeHead(200);
	res.end(JSON.stringify(resJSON,null,"\t"));
}).listen(8080);