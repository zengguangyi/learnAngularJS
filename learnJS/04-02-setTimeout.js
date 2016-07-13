/*
*2016.7.7
*nodeJS定时器
*/

/*************************************************************************
*超时定时器setTimeout(callback,delayMilliSeconds,[args])
*setTimeout()返回定时器对象的ID
*var myTimeout = setTimeout(myFunc,1000);
*clearTimeout(myTimeout);取消超时定时器函数
*************************************************************************/
// function Test(timeout,timer){
// 	this.timeout = timeout;
// 	this.timer = timer;
// }
// Test.prototype.set_timeOut = function(args){
// 	console.time(this.timer);
// 	setTimeout(console.timeEnd,this.timeout,this.timer);
// 	console.log(args);
// }

// var t2 = new Test(2000,"twoSecond");
// t2.set_timeOut("t2");

// var t1 = new Test(1000,"oneSecond");
// t1.set_timeOut("t1");


/*************************************************************************
*时间间隔定时器，循环执行，setInterval(callback,delayMilliSeconds,[args])
*setInterval()返回定时器对象的ID
*var myInterval = setInterval(myFunc,1000);
*clearInterval(myInterval);取消超时定时器函数
*************************************************************************/
// function UpdateXYZ(x0,y0,z0){
// 	this.x0 = x0;
// 	this.y0 = y0;
// 	this.z0 = z0;
// }
// UpdateXYZ.prototype.updateConsole = function(x,y,z){
// 	var x0 = this.x0;
// 	var y0 = this.y0;
// 	var z0 = this.z0;
// 	console.log("x = " + x + " y = " + y + " z = " + z);
// 	var timer = setInterval(function(){
// 		x += x0;
// 		y += y0;
// 		z += z0;
// 		console.log("x = " + x + " y = " + y + " z = " + z);

// 		if(x > 30){
// 			clearInterval(timer);
// 		}

// 	},1000);
// }
// var update = new UpdateXYZ(3,2,1);
// update.updateConsole(1,2,3);


/*************************************************************************
*即时定时器，setImmediate(callback,[args]);
*允许你把工作调度为在事件队列中的当前事件完成之后执行;
*调用setImmediate()时，回调函数被放置在事件队列中--
*在遍历事件队列的每次迭代中，在I/O事件有机会被调用后弹出一次;
*************************************************************************/
// function myFun(args){
// 	console.log(args);
// }
// setTimeout(myFun,1000,"setTimeout");
// console.log("hello");
// setImmediate(myFun,"setImmediate");


/*************************************************************************
*事件循环中取消定时器引用--myInterval.unref();
*重新引用--myInterval.ref();
*************************************************************************/


/*************************************************************************
*事件队列上调度
*process.nextTick(callback);此函数调度要在事件循环的下一次循环中运行的工作
*不像Immediate(),nextTick()在I/O事件被触发前执行
*************************************************************************/
// console.time("fsTime");
// var fs = require('fs');
// fs.stat("04-02-nexttick.txt",function(err,stats){
// 	if(stats){
// 		console.log("04-02-nexttick.txt Exists");
// 	}
// });
// console.timeEnd("fsTime");

// setImmediate(function(){
// 	console.log("setImmediate 1 Executed");
// });
// setImmediate(function(){
// 	console.log("setImmediate 2 Executed");
// });

// process.nextTick(function(){
// 	console.time("next1-2");
// 	console.log("nextTick 1 Executed");
// });
// process.nextTick(function(){
// 	console.timeEnd("next1-2");
// 	console.log("nextTick 2 Executed");
// });