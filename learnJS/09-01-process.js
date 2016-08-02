/*
*2016.7.21
*process模块
*/

process.stdin.on("data",function(data){
	console.log("Console Input: " + data);
});

console.log("Current directory: " + process.cwd());