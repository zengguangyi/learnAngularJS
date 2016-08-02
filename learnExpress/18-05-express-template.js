/*
*2016.7.26
*模板引擎
*/

var express = require('express'),
	jade = require('jade'),
	ejs = require('ejs'),
	app = express();

app.listen(80);

app.set("views","views");//模板文件的根目录
app.set("view engine","jade");//指定呈现模板时，如果视图中缺省文件拓展名，应使用默认的模板引擎拓展

app.engine("jade",jade.__express);//模板拓展名注册模板引擎，callbcak是支持Express的呈现功能函数
app.engine("html",ejs.renderFile);

app.locals.title = "Hello";//本地对象，包含映射到模板中定义的变量名称的属性
app.locals.one = "apple";
app.locals.two = "banana";
app.locals.three = "orange";
app.locals.four = "heheh";

app.get("/jade",function(req,res){
	res.render("user_jade");
});

app.get("/ejs",function(req,res){
	// app.render("user_ejs.html",function(err,html){
	// 	if(err){
	// 		console.error(err);
	// 	}else{
	// 		res.send(html);
	// 	}
	// });
	res.render("user_ejs.html");//区别在于app.render有回调函数
});