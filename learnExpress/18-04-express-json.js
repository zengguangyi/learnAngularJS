/*
*2016.7.24
*发送JSON响应
*res.json(status,[object]);
*res.json([object]);
*res.jsonp(status,[object]);
*res.jsonp([object]);
*/

var express = require('express'),
	fs = require('fs'),
	app = express();

app.listen(80);

var jsonObj = {
	name: "guangyi",
	age: "20"
};

// app.set("json spaces",4);

app.get("/index",function(req,res){
	var index = fs.createReadStream("18-04-express-jsonhtml.html");
	res.status(200);
	res.set("Content-Type","text/html");
	index.pipe(res);
});

app.get("/json",function(req,res){
	res.status(200).json(jsonObj);
});

app.get("/jsonp",function(req,res){
	app.set("jsonp callback name","cb");
	res.status(200).jsonp(jsonObj);
});

app.get("/error",function(req,res){
	res.status(404);
	res.send("Request Error");
});
