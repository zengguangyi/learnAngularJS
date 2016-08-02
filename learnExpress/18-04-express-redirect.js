/*
*2016.7.25
*重定向,redirect
*可以把客户端请求重定义到同一服务器的不同位置，或完全不同服务器
*/

var express = require('express'),
	app = express();

app.listen(80);

app.get("/first",function(req,res){
	// res.write("you will go to /second in 2 second");
	// setTimeout(function(){
	// 	res.redirect("/second");
	// },2000);
	res.redirect("/second");
});
app.get("/second",function(req,res){
	res.send("Response from second");
});
app.get("/baidu",function(req,res){
	res.redirect("http://www.baidu.com");
});
app.get("/level/hello/a",function(req,res){
	res.redirect("../hello/b");
});
app.get("/level/hello/b",function(req,res){
	res.send("Response from /level/b");
});