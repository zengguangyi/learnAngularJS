/*
*2016.7.21
*util模块
*提供实用函数格式化字符串、将对象转换为字符串、检查对象类型、执行对输出流的同步写入、对象继承的增强
*/
var util = require('util');

//格式化字符串,util(format,[...]);%s、%d、%j(指定一个JSON可转换为字符串的对象)、%如果后保留为空则不作为占位符
console.log(util.format("%s=%s","item1"));
console.log(util.format("%s=%s","item1","item2"));
console.log(util.format("%s!!","item1","item2"));
console.log(util.format(1,"item1","item2"));

//检查对象类型
console.log("\ninstanceof : " + ([1,2,3] instanceof Array));
console.log("util.isArray() : " + util.isArray([1,2,3]));
console.log("util.isObject() : " + util.isObject({name:123}));
console.log("util.isRegExp() : " + util.isRegExp(/\d+/));

//同步写入输出流
