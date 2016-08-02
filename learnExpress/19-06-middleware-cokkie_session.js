/*
*2016.7.30
*实现会话，cookie-session,会话被存储在req.session中
*/
var express = require('express'),
	cookieParser = require('cookie-parser'),
	cookieSession = require('cookie-session'),//底层利用cookie-parser,添加前要添加cookie-parser
	app = express();

app.use(cookieParser())
.use(cookieSession({secret:'zengguangyi'}));

app.get("/library",(req,res)=>{
	console.log(req.cookies);
	if(req.session.restricted){
		res.send('You have been in the restricted section ' + req.session.restrictedCount + ' time.');
	}else{
		res.send('Welcome to library');
	}
});

app.get("/restricted",(req,res)=>{
	req.session.restricted = true;
	if(!req.session.restrictedCount){
		req.session.restrictedCount = 1;
	}else{
		req.session.restrictedCount += 1;
	}
	res.redirect("/library");
});

app.listen(80);