/*
*2016.7.30
*发送和接收cookie
*/
 var express = require('express'),
 	cookieParser = require('cookie-parser'),
 	app = express();

app.use(cookieParser());
 app.get("/",(req,res)=>{
 	console.log(req.cookies);
 	if(!req.cookies.hasVisited){
 		res.cookie("hasVisited","1",{
 			maxAge: 60*60*1000,
 			httpOnly: true,//只能由服务器访问
 			path: "/"//该cookie应用路径
 		});
 	}
 	res.send("sending cookie...");
 });

 app.listen(80);