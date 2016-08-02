/*
*2016.7.30
*处理post正文数据
*/
var express = require('express'),
	bodyParser = require('body-parser'),
	jade = require('jade'),
	ejs = require('ejs'),
	app = express();

app.set("views","views");
app.set("view engine","jade");
app.engine("jade",jade.__express);
app.engine("html",ejs.renderFile);

app.use(bodyParser()).use(express.static("image",{maxAge:60*60*1000}));

app.get("/",(req,res)=>{
	app.locals.post_str = "hahah";
	res.render("19-04-middleware-post-html.html");

});

app.post("/",(req,res)=>{
	app.locals.post_str = req.body.name + " is " + req.body.age + " years old.";
	res.render("19-04-middleware-post-html.html");	
	console.log(req.body);
});

app.listen(80);