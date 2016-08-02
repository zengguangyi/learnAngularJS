/*
*2016.7.30
*实现会话身份验证,express-session
*/
var express = require('express'),
	bodyParser = require('body-parser'),
	cookieParser = require('cookie-parser'),
	session = require('express-session'),
	app = express();

app.use(bodyParser.urlencoded({extended:true}))
.use(cookieParser())
.use(session({
	secret: "zengguangyi",
	cookie: 60*60*1000,
	resave: false,
	saveUninitialized: true
}));

app.get("/inside",(req,res)=>{
	if(req.session.user){
		res.send('<h2>' + req.session.success + '</h2>' +
			'<p>You have entered the insidePage</p><br/>' +
			'<a href="/logout">logout</a>');
	}else{
		req.session.error = "Acess denied";
		res.redirect("/login");
	}
});

app.get("/login",(req,res)=>{
	var response = '<form method="POST">' +
	'Username:<input type="text" name="username"/><br/>' +
	'Passwd:<input type="password" name="passwd"/><br/>' +
	'<input type="submit" value="Submit"/></form>';

	if(req.session.user){
		res.redirect("/inside");
	}else if(req.session.error){
		response += '<h2>' + req.session.error + '</h2>'
	}

	res.type("html");
	res.send(response);
});
app.post("/login",(req,res)=>{
	var user = {
		username: req.body.username,
		passwd: "123"
	}

	if(req.body.username && req.body.passwd === user.passwd){
		req.session.regenerate(function(){
			req.session.user = user;
			req.session.success = "Authenticated as " + user.username;
			res.redirect("/inside");
		});//移除并创建一个新的req.session对象，重置会话
	}else{
		req.session.regenerate(function(){
			req.session.error = "Authentication failed.";
			res.redirect("/login");
		});
		// res.redirect("/login");
	}
});

app.get("/logout",(req,res)=>{
	req.session.destroy(function(){
		res.redirect("/login");
	});//移除req.session对象
});

app.listen(80);