var http = require('http'),
querystring = require('querystring');

function page(strReq,dateReq,serverRes){
	var page = '<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><title>external</title></head>' +
	'<body>' +
	'<form method="POST">' +
	'NO. <input name="date"><br/>' +
	'<input type="submit" value="submit">' + 
	'</form>';

	if(strReq && dateReq){
		page += '<h1>Api Date</h1><p>' + dateReq + '</p><p>' + strReq + '</p>';

	}

	page += '</body></html>';

	serverRes.end(page); //server的response，刷新页面
}

function getDataFromApi(serverJsonObj,serverRes){
	var options = {
		// hostname: "op.juhe.cn",
		// path: "/onebox/weather/query?cityname=%E6%B8%A9%E5%B7%9E&key=8593f3225a8f2d8892f4f1ac50345a07",
		hostname: "gank.io",
		path: "/api/day/history",
		method: "GET",
		// headers: {'Content-type':'text/html'}
	}
	var str = "";

	http.request(options,function(response){
		response.on("data",function(chunk){
			str += chunk;
		});
		response.on("end",function(){
			var i = 0;
			if(serverJsonObj.date){
				i = serverJsonObj.date;
			}

			var date = JSON.parse(str).results[i]
			console.log(date);

			page(str,date,serverRes); //把请求Api获得的数据传给page页面
			
		});
	}).end();
}


var server = http.createServer(function(req,res){
	var dataFromBrowser = "";
	console.log(req.method);
	if(req.method == "POST"){
		req.on("data",function(chunk){ //获取表单POST过来的数据
			dataFromBrowser += chunk;
		});
		req.on("end",function(){
			// console.log(dataFromBrowser);
			dataFromBrowserObj = querystring.parse(dataFromBrowser);
			// console.log(dataFromBrowserObj);
			getDataFromApi(dataFromBrowserObj,res); //若有POST则执行Client.request去请求api
		});
	}else{
		page(null,null,res);//若不是POST过来数据(即第一次加载)则直接输出初始的页面
	}
	
	res.writeHead(200);
	
}).listen(8080);