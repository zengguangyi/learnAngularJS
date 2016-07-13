/*********************************************************************************
*2016.7.8
*closure闭包
*相关参数和变量都保存在返回的函数中，这种称为“闭包（Closure）”的程序结构拥有极大的威力
*********************************************************************************/

// function logCar(msg,callback){
// 	process.nextTick(function(){
// 		callback(msg);
// 	});
// }

// var cars = ["car1","car2","car3"];
// for(var value of cars){
// 	var message = "Saw a " + value;
// 	logCar(message,function(){
// 		console.log(message);
// 	});
// }

/************************************/

// function logCar(msg,callback){
// 	process.nextTick(function(){
// 		callback(msg);
// 	});
// }

// var cars = ["car1","car2","car3"];
// for(var value of cars){
// 	var message = "Saw a " + value;
// 	(function(msg){
// 		logCar(msg,function(){
// 			console.log("wahaha " + msg);
// 		});
// 	})(message);
// }



function make_pow(n){
	return function(x){
		console.log(Math.pow(x,n));
	}
}

var pow2 = make_pow(2);
var pow3 = make_pow(3);
pow2(5);
pow3(3);

/*********************************************************************************
*2016.7.9
*链式回调

*********************************************************************************/
// function logCar(car,callback){
// 	console.log(car);
// 	if(cars.length){
// 		process.nextTick(function(){
// 			callback();
// 		});
// 	}
// }

// function logCars(cars){
// 	var car = cars.pop();
// 	logCar(car,function(){
// 		logCars(cars);
// 	});
// }

// var cars = ["car1","car2","car3"];
// logCars(cars);