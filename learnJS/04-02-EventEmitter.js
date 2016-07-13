/*
*2016.7.8
*事件发送器和事件监听器
*/

/*********************************************************
*EventEmitter对象，events模块
*emit(eventName,[args]);触发eventName事件
**********************************************************/
// var events = require('events');
// var emitter = new events.EventEmitter();
// emitter.on("simpleEvent",function(){
// 	console.log("on simpleEvent");
// });
// emitter.emit("simpleEvent");



/*********************************************************/
// var events = require('events');
// function Student(name,age){
// 	this.name = name;
// 	this.age = age;
// 	events.EventEmitter.call(this);
// }
// Student.prototype.__proto__ = events.EventEmitter.prototype;
// Student.prototype.send = function(){
// 	this.emit("run",{name:this.name,age:this.age});
// }

// var xiaoming = new Student("小明",3);
// xiaoming.on("run",function(data){
// 	console.log(data.name + " is running!!He is just " + data.age + " years old");
// });

// xiaoming.send();
/*********************************************************/


/*********************************************************/
// var events = require('events');

// function Account(){
// 	this.balance = 0;
// 	events.EventEmitter.call(this);
// }
// Account.prototype.__proto__ = events.EventEmitter.prototype;
// Account.prototype.deposit = function(amount){
// 	this.balance += amount;
// 	this.emit("balanceChanged");
// }
// Account.prototype.withdraw = function(amount){
// 	this.balance -= amount;
// 	this.emit("balanceChanged");
// }

// function displayBalance(){
// 	console.log("Account balance : " + this.balance);
// }
// function checkOverdraw(){
// 	if(this.balance < 0){
// 		console.log("Account overdraw!");
// 	}
// }
// function checkGoal(acc,goal){
// 	if(acc.balance > goal){
// 		console.log("Goal Achieved!");
// 	}
// }

// var account = new Account();
// account.on("balanceChanged",displayBalance);
// account.on("balanceChanged",checkOverdraw);
// account.on("balanceChanged",function(){
// 	checkGoal(this,1000);
// });

// account.deposit(220);
// account.deposit(320);
// account.deposit(600);
// account.withdraw(1200);