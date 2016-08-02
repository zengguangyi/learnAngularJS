/*
*2016.7.22
*配置Express
*npm install express
*/

//express对象提供set(setting,value);enable(setting);disable(setting);
// var express = require('express');
// var app = express();
// // app.set("env","testing");
// // console.log(app.get("env"));
// // console.log(app.get("jsonp callback name"));


//启动Express服务器
// var express = require('express'),
// 	http = require('http'),
// 	url = require('url'),
// 	app = express();

// http.createServer(app).listen(8080);

// app.get("/",function(req,res){
// 	var urlObj = url.parse(req.url);

// 	console.log("url :\n" + JSON.stringify(urlObj,null,2));
	
// 	res.send("Hello " + urlObj.pathname + ",I am Express");
// });
// app.get("/login",function(req,res){
// 	var str = "login page";
// 	console.log(str);
// 	res.send(str);
// });
// app.post("/save",function(req,res){
// 	var str = "save page";
// 	console.log(str);
// 	res.send(str);
// });
// app.all("/user",function(req,res){
// 	var str = "user page";
// 	console.log(str);
// 	res.send(str);
// });
// app.all("/user/*",function(req,res){
// 	var str = "/user/* page";
// 	console.log(str);
// 	res.send(str);
// });


/*
*路由中应用参数
*查询字符串；POST参数；正则；定义的参数
*/

//查询字符串
// var express = require('express'),
// 	http = require('http'),
// 	url = require('url');
// 	qstring = require('querystring');

// var app = express();
// http.createServer(app).listen(8080);

// app.get("/find",function(req,res){
// 	var urlObj = url.parse(req.url);
// 	var queryObj = qstring.parse(urlObj.query);
// 	console.log(queryObj);
// 	if(queryObj.author && queryObj.title){
// 		res.send("Finding Book:<br/>Author: " + queryObj.author + " Title: " + queryObj.title);		
// 	}else{
// 		res.send("Finding Wrong!");
// 	}
// });


//正则
// var express = require('express'),
// 	http = require('http');

// var app = express();

// http.createServer(app).listen(8080);

// app.get(/^\/book\/(\w+)\:(\w+)?$/,function(req,res){
// 	console.log(req.params);//req.params是与URL路径中条目相匹配的数组
// 	res.send("Get Book: Chapter: " + req.params[0] + ":" + req.params[1]);
// });


//使用已定义的参数来应用路由参数
// var express = require('express'),
// 	http = require('http');

// var app = express();
// http.createServer(app).listen(8080);

// app.get("/user/:userid",function(req,res){
// 	// console.log(req.query);
// 	// res.send("hello," + req.url);
// 	// res.send("Get userid : " + req.param(":userid"));//req.param,express4.14.0过时
// });
// app.param("userid",function(req,res,next,value){//已定义参数的回调函数，路由之前调用
// 	console.log(value);
// 	res.send("userid : " + value);
// 	next();
// });