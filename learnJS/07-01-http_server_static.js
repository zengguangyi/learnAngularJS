//静态文件服务
var http = require('http'),
path = require('path'),
url = require('url'),
fs = require('fs');

var ROOT_DIR = "07-01-httptest";

http.createServer(function(req,res){
	// console.log(url.parse(req.url));
	var pathname = url.parse(req.url).pathname;
	var filepath = path.join(ROOT_DIR,pathname);
	
	fs.stat(filepath,function(err,stats){
		if(!err && (stats.isFile() || stats.isDirectory())){
			if(stats.isDirectory()){
				console.log("200 Dir:" + req.url);
				res.writeHead(200);
				filepath = path.join(filepath,"index.html"); //若是目录则检索目录下的index.html
				var fd = fs.createReadStream(filepath);
				fd.on('data',function(chunk){
					console.log(chunk.toString('utf8'));
				});
				fd.pipe(res);
			}
			if(stats.isFile()){
				console.log("200 " + req.url);
				res.writeHead(200);
				var fd = fs.createReadStream(filepath);
				fd.pipe(res);
				fd.on('data',function(chunk){
					console.log(chunk.toString('utf8'));
				});
			}

			fd.on("error",function(err){ //若目录下没有index.html或打开错误,则404
				console.log("404 " + err);
				res.writeHead(404);
				res.end("404 not found");
			});
		}else{
			console.log("404 " + req.url);
			res.writeHead(404);
			res.end("404 not found");
		}

		// if(!err && stats.isFile()){
		// 	console.log("200 " + req.url);
		// 	res.writeHead(200);
		// 	var fd = fs.createReadStream(filepath);
		// 	fd.pipe(res);
		// 	fd.on('data',function(chunk){
		// 		console.log(chunk.toString('utf8'));
		// 	});
		// }else{
		// 	console.log("404 " + req.url);
		// 	res.writeHead(404);
		// 	res.end("404 not found");
		// }
	});
}).listen(8080);

console.log("Server is running at http://127.0.0.1:8080");