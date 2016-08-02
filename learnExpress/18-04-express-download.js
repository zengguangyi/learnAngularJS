/*
*2016.7.25
*发送下载响应,res.download(path,[filename],[callback])
*path:文件路径
*filename:指定应该在Content-Disposition标头中发送的不同的文件名
*callback:在文件下载完成后执行
*/

var express = require('express'),
	app = express();

app.listen(80);

app.get("/download",function(req,res){
	res.status(200);
	res.download("image/ab05.jpg","anglebaby.jpg",function(err){
		if(err){
			console.error(err);
		}else{
			console.log("request download success");
			console.log(req.headers);
		}
	});
});