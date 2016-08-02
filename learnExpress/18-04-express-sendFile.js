/*
*2016.7.25
*发送文件，辅助方法res.sendFile(path,[options],[callback]);
*/

var express = require('express'),
	app = express();

app.listen(80);

app.get("/image",function(req,res){
	res.status(200);
	res.sendFile("QQs.txt",{
		maxAge: 1,//24*60*60*60*1000,最长期限
		root: "image",
		headers: {
			"Content-Type": "text/plain" //设置不了？？？？
		}
	},function(err){
		if(err){
			console.error(err);
		}else{
			console.log("request txt success");
			console.log(req.headers);
		}
	});
});
app.get("/html",function(req,res){
	res.sendFile("express-html.html",{
		root: "image"
	},function(err){
		if(err){
			console.error(err);
		}else{
			console.log("request html success");
			console.log(req.headers);
		}
	});
});
app.get("/ab05.jpg",function(req,res){
	res.sendFile("ab05.jpg",{
		maxAge: 1,//24*60*60*60*1000,最长期限
		root: "image"
	},function(err){
		if(err){
			console.error(err);
		}else{
			console.log("request jpg success");
			console.log(req.headers);
		}
	});
});

// var express = require('express'),
// 	fs = require('fs'),
// 	app = express();

// app.listen(80);

// app.get("/image",function(req,res){
// 	var image = fs.createReadStream("image/QQs.txt");
// 	res.status(200);

// 	image.pipe(res);
// });
