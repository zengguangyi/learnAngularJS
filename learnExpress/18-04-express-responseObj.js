/*
*2016.7.22
*Response对象
*/

/*****************************************************************
*get(header);返回所指定的header参数的值
*set(header,value);设置header参数的值
*location(path);
*type(type_string);根据type_string参数设置Content-Type标头
*attachment([filepath]);把Content-Disposition表头设置为attachment,
--并如果指定filepath，则Content-Type头饰基于文件拓展名设置的

*res.status(200);
*res.send(status,[body]);
*res.send([body]);body是String或Buffer对象
*一旦send完成，它就设置res.finished和res.headerSent属性值
*****************************************************************/
var express = require('express'),
	fs = require('fs');
	app = express();

app.listen(8080);

app.get("/",function(req,res){
	// var response = fs.createReadStream("18-04-express-html.html");
	var response = '<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><title>Response Object</title></head><body><h1>Hello Express</h1></body></html>';
	
	res.status(200);
	res.set("Content-Type","text/html");
	// response.pipe(res);
	res.send(response);
	console.log(res.finished);
	console.log(res.headerSent);
});

app.get("/error",function(req,res){
	res.status(404);
	res.send("Wrong Request");
});