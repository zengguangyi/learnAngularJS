/*
*静态文件服务
*express.static(path,[options]);
**path:指定将在请求中引用的静态文件所在的根目录
**options:
***maxAge:浏览器缓存maxAge(最长保存时间),以毫秒为单位，默认0；
***hidden:布尔值，若true则表示启用隐藏文件传输功能，默认false
***redirect:布尔，若true表示如果请求路径是一个目录则该请求被重定向到尾随/的路径。默认true
***index:根路径的默认文件，默认index.html
*/

var express = require('express'),
	app = express();

app.listen(80);

app.use("/",express.static("image",{maxAge:60*60*1000}));
