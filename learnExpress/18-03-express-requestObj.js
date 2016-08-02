/*
*2016.7.22
*Request对象
*/

/******************************************************************
*originalUrl:请求的原始URL字符串
*protocol:协议的字符串，如http、https
*ip:请求的ip地址
*path:请求url的路径部分
*host:请求的主机名(过时，用hostname)
*method:HTTP方法，GET、POST等
*query:请求的URL的查询字符串部分,对象
*fresh:布尔值，当最后的修改与当前匹配时为true
*stale:布尔值，当最后的修改与当前匹配时为flase
*secure:布尔值，当建立TLS连接时为true
*acceptsCharset(charset):方法，如果由charset指定的字符集受支持则返回true(过时，使用acceptsCharsets,返回字符集)
*get(header):返回header的值的方法
*headers:请求标头的对象形式
******************************************************************/
var express = require('express'),
	app = express();

app.listen(8080);

app.get("/user/:userid",function(req,res){
	var result = {
		"originalUrl": req.originalUrl,
		"protocol": req.protocol,
		"ip": req.ip,
		"path": req.path,
		"hostname": req.hostname,
		"method": req.method,
		"method": req.method,
		"fresh": req.fresh,
		"stale": req.stale,
		"secure": req.secure,
		"acceptsCharsets('utf8')": req.acceptsCharsets('utf8'),
		"get('connection')": req.get('connection'),
		"headers": req.headers
	};
	console.log("originalUrl:\t\t\t" + req.originalUrl);
	console.log("protocol:\t\t\t" + req.protocol);
	console.log("IP:\t\t\t\t" + req.ip);
	console.log("path:\t\t\t\t" + req.path);
	// console.log("host:\t" + req.host);
	console.log("hostname:\t\t\t" + req.hostname);
	console.log("method:\t\t\t\t" + req.method);
	console.log("query:\t\t\t\t" + JSON.stringify(req.method));
	console.log("fresh:\t\t\t\t" + req.fresh);
	console.log("stale:\t\t\t\t" + req.stale);
	console.log("secure:\t\t\t\t" + req.secure);
	// console.log("acceptsCharset('utf8'):\t" + req.acceptsCharset('utf8'));
	console.log("acceptsCharsets('utf8'):\t" + req.acceptsCharsets('utf8'));
	console.log("get('connection'):\t\t" + req.get('connection'));
	console.log("headers:\t\t\t" + JSON.stringify(req.headers,null,4));
	
	// console.log(req);
	res.set("Content-Type","application/json");
	// res.end("Hello , user Request\n" + JSON.stringify(result,null,4));
	res.send(JSON.stringify(result,null,4));
});