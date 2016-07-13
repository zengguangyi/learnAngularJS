/*
*2016.7.6
*console(控制台)模块
*/

//console.log();

//console.info([data],[...]);和console.log一样
// console.info("Here is console.info");

/*
*console.error([data],[...]);与console.log相同，但输出也被发送到stderr
*stderr -- 标准错误输出设备
*/
// console.error("Here is console.error()");

//console.warn([data],[...]);与console.error相同
// console.warn("Here is console.warn()");

//console.dir(Obj);把JS对象的字符串表示形式写到控制台
// console.dir({name:"guangyi",type:"Object"});

/*
*console.time(label);把一个精度为毫秒的当前时间戳赋给一个字符串label
*console.timeEnd(label);创建当前时间与赋值给label的时间戳之间的差值，并输出结果
*/
// console.time("for");
// for(var i = 0; i < 1000; i ++){}
// console.timeEnd("for");

/*
*trace(label)把代码当前的栈跟踪信息写到staerr
*/
// console.trace("traceMask");

// function doTask(){
//     doSubTask(1000,10000);
// }
// function doSubTask(countX,countY){
//     for(var i=0;i<countX;i++){
//         for(var j=0;j<countY;j++){}
//     }
//     console.trace("doTask");
// }
// doTask();

/*
*assert(expression,[message]);如果expression计算结果为false，把消息和栈跟踪信息写到控制台
*assert()函数是一个调试中经常使用的断言工具函数
*/
// function Cat(name,age,score){
// 	this.name = name;
// 	this.age = age;
// 	this.score = score;
// }
// // var cat_one = new Cat("黑猫",6,90);
// var cat_one = new Cat("黑猫",6,89);
// console.assert(cat_one.score >= 90,"Here is console.assert()|这猫没90分");