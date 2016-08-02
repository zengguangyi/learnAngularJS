/*
*2016.7.21
*os模块,获取操作系统信息
*/
var os = require('os');

console.log("tmpdir :\t" + os.tmpdir());//临时目录的字符串
console.log("endianness :\t" + os.endianness());//大端小端
console.log("hostname :\t" + os.hostname());//主机名
console.log("type :\t\t" + os.type());//返回字符串类型的操作系统类型
console.log("platform :\t" + os.platform());//返回字符串形式的操作系统类型
console.log("arch :\t\t" + os.arch());//返回平台的体系结果
console.log("release :\t" + os.release());//返回操作系统发布版本
console.log("uptime :\t" + os.uptime());//返回以秒为单位的时间戳，表示操作系统已运行多久
console.log("lodaavg :\t" + os.loadavg());//基于UNIX的系统中，返回一个包含[1,5,15]分钟的系统负载值得数组
console.log("totalmem :\t" + os.totalmem());//返回以字节为单位的整数，表示系统内存容量
console.log("freemem :\t" + os.freemem());//系统可用内存
console.log("cpus :\t\t" + JSON.stringify(os.cpus(),null,4));
console.log("networkInterfaces :\t" + JSON.stringify(os.networkInterfaces(),null,4));
console.log("EOL :\t\t" + Buffer.byteLength(os.EOL));//包含操作系统相应的行尾字符