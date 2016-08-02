/*
*2016.7.30
*应用基本的HTTP身份验证
*/


/*全局范围内实现基本HTTP身份验证*/
// var express = require('express'),
// 	basicAuth = require('basic-auth-connect'),
// 	app = express();

// app.use(basicAuth(function(user,pass){
// 	return (user === 'zengguangyi' && pass === "gy123");
// }));

// app.get("/",(req,res)=>{
// 	res.send("Successful Authentication");
// });

// app.listen(80);


/*为单独路由实现基本HTTP身份验证*/
var express = require('express'),
	basicAuth = require('basic-auth-connect'),
	app = express();

app.get("/one",(req,res)=>{
	res.send("Welcome to OnePage");
});

app.get("/two",basicAuth((user,passwd)=>{
	return (user === "yi" && passwd === "123");
}),(req,res)=>{
	res.send("Welcome to TwoPage");
});

app.listen(80);