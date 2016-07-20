/*
*2016.7.15
*nodeJS中实现http服务
*/

/***********************************************************************
*url对象
**url字符串转换为url对象:
***url.parse(urlStr,[parseQueryString],[slashesDenoteHost]);
***parseQueryString为布尔值,true则query(查询字符串部分)解析为对象字面量
***slashesDenoteHost为布尔值(测试结果，true/false一样)
**url.format(urlObj);将url对象转换为字符串形式
***********************************************************************/
// var url = require('url');
// var urlStr = "http://user:pass@host.com:80/resource/path?query=string#hash"

// var urlObj = url.parse(urlStr);
// console.log(urlObj);

// var urlObj = url.parse(urlStr,true,false);
// console.log(urlObj);

// var urlObj = url.parse(urlStr,true,true);
// console.log(urlObj);

// var urlString = url.format(urlObj);
// console.log("\nurlString--- " + urlString);



/***********************************************************************
*解析url组件
*用与浏览器相同的方式解析url的组件，让你在服务器操作url字符串
*例如你想要在处理一个请求之前更改URL位置，因为该资源已经移动或更改了参数
*url.resolve(from,to);
***********************************************************************/
// var url = require('url');

// var originalUrl = "http://user:pass@host.com:80/resource/path?query=string#hash";
// var newResource = "/another/path?querynew";

// console.log(url.resolve(originalUrl,newResource));


/***********************************************************************
*处理查询字符串和表单参数
*querystring.parse(str,[seq],[eq],[options]);
**seq,指定解析时的分隔符，默认&
**eq，指定解析时的赋值运算符。默认=
***********************************************************************/
// var qstring = require('querystring');
// var params = qstring.parse("name=Brad&color=red&color=blue");
// console.log(params);

/*--------------------------------*/

// var url = require('url'),
// 	urlStr = "http://user:pass@host.com:80/resource/path?query=string&color=red&color=blue#hash"

// var urlObj = url.parse(urlStr);
// console.log("---urlObj.query---");
// console.log(urlObj.query);

// var querystring = require('querystring'),
// 	params = querystring.parse(urlObj.query);
// console.log("---querystring.parse---");
// console.log(params);

// console.log("---querystring.stringify---");
// console.log(querystring.stringify(params));


/***********************************************************************
*http.ClientRequest对象
*http.request(options,callback(IncomingMessage));
*options定义如何把客户端的HTTP请求打开并发送到服务器：
**host：请求发往的服务器的域名或IP地址，默认为localhost;
**hostname：与host相同，但对url.parse()的支持优于host;
**port：远程服务器的端口，默认80;
**localAddress：网络连接绑定的本地接口;
**socketPath：Unix域套接字（使用host:port或socketPath）;
**method：指定HTTP请求方法的字符串，GET、POST、CONNECT、OPTIONS等，默认GET
**path：指定所请求得资源路径，默认/。如/book.html?chapter=12;
**headers：包含请求标头的对象，{'content-length':'750','content-type':'text/plain'}
**auth：基本身份验证，它的形式为:user:passwd,用于计算Authorization头
**agent：Agent(代理)行为的定义

*事件：
**response
***********************************************************************/
// var http = require('http');

// http.createServer(function(req,res){
// 	// res.write("hi"); 

// }).listen(8080);

// var options = {
// 	hostname: 'localhost',
// 	path: '/',
// 	port: '8080',
// 	method: 'POST'
// };
// var req = http.request(options,function(response){
// 	var str = "";
// 	response.on("data",function(chunk){
// 		str += chunk;
// 	});
// 	response.on("end",function(){
// 		console.log(str);
// 	});
// });
// req.end();



/*
*http.createServer([requestListener]);
*/
// var http = require('http');

// http.createServer(function(request,response){
// 	console.log(request.method + " : " + request.url);
// 	response.writeHead(200,{'Content-Type': 'text/html'});
// 	response.end("<p>hello</p>");
// }).listen(8080);

// console.log("8080 running");

/*-----------------------------------*/
//静态文件服务
var http = require('http'),
	path = require('path'),
	url = require('url'),
	fs = require('fs');

var ROOT_DIR = "07-01-httptest";

http.createServer(function(req,res){
	var pathname = url.parse(req.url).pathname;
	var filepath = path.join(ROOT_DIR,pathname);
	
	fs.stat(filepath,function(err,stats){
		if(!err && stats.isFile()){
			console.log("200 " + req.url);
			res.writeHead(200);
			var fd = fs.createReadStream(filepath);
			fd.pipe(res);
			fd.on('data',function(chunk){
				console.log(chunk.toString('utf8'));
			});
		}else{
			console.log("404 " + req.url);
			res.writeHead(404);
			res.end("404 not found");
		}
	});
}).listen(8080);

console.log("Server is running at http://127.0.0.1:8080");

//客户端
//...