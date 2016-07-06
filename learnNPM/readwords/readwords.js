/*
*2016.7.6
*调用自己创建的censorify模块(本地)
*npm install ../censorify/censorify-0.1.1.tgz
*npm install censorifyGuangyi(发布到注册表的)
*/
var censor = require("censorifyGuangyi");
console.log(censor.getCensoredWords());