/*
*2016.7.13
*文件系统，fs模块
*/

//异步
// var fs = require('fs');
// fs.open("06-01-text","w",function(err,fd){
// 	if(!err){
// 		console.log("open fd and close");
// 		fs.close(fd);
// 	}
// });


//同步
// var fs = require('fs');
// var fd = fs.openSync("06-01-text","w");
// console.log("openSync fd and closeSync");
// fs.closeSync(fd);


/*****************************************************************************
*简单文件写入，writeFile(path,data,[options],callback);
*data写入String或Buffer
*option,可选,指定一个对象(字符串编码encoding,模式mode,标志flag)
*****************************************************************************/
// var fs = require('fs');

// var data = {
// 	"name": "guangyi",
// 	"age": 20
// }
// data = JSON.stringify(data) + "\n";

// var option = {"encoding":"utf8","flag":"a"}

// fs.writeFile('06-01-text.txt',data,option,function(err){
// 	if(err){
// 		console.log("Error: " + err);
// 	}else{
// 		console.log("OK 06-01-text.txt");
// 	}
// });


/*****************************************************************************
*同步文件写入
*fs.writeSync(fd,data,offset,length,position);
*offset指定写入的data开始的索引；length指定要写入的字节数；
*position指定在文件中开始写入的位置
*****************************************************************************/
// var fs = require('fs');

// var arr = ["one","two","three","4"];
// var fd = fs.openSync("06-01-text.txt","w");
// while(arr.length){
// 	var data = arr.pop() + " ";
// 	var bytes = fs.writeSync(fd,data,null,null,null);
// 	console.log("writeSync: " + data + "\t" + bytes + "bytes");
// }
// fs.closeSync(fd);


/*****************************************************************************
*异步文件写入
*fs.write(fd,data,offset,length,position,callback);
*offset指定写入的data开始的索引；length指定要写入的字节数；
*position指定在文件中开始写入的位置(???写了这为null，不会输出控制台)
*****************************************************************************/
// var fs = require('fs');

// var arr = ["one","two","three","5"];

// function writeArr(fd){
// 	if(arr.length){
// 		var data = arr.pop() + " ";
// 		fs.write(fd,data,null,null,function(err,bytes){
// 			if(err){
// 				console.log("WriteError: " + err);
// 			}else{
// 				console.log("writing " + data + "(" + bytes + ")bytes");
// 				writeArr(fd);
// 			}
// 		});
// 	}else{
// 		console.log("arr done");
// 		fs.close(fd);
// 	}
// }

// fs.open("06-01-text.txt","w",function(err,fd){
// 	if(err){
// 		console.log("OpenError: " + err);
// 	}else{
// 		writeArr(fd);
// 	}
// });


/*****************************************************************************
*流式文件写入
fs.createWriteStream(path,[option]);
*****************************************************************************/
// var fs = require('fs');

// var ws = fs.createWriteStream("06-01-text.txt"); //相当于创建一个Writable对象

// var arr = ["1","4","three","5"];
// while(arr.length){
// 	var data = arr.pop() + " ";
// 	ws.write(data,(function(n){
// 		console.log(n);
// 	})(data));
// }
// ws.on("finish",function(){
// 	console.log("Finish");
// });
// ws.end();


/*****************************************************************************
*简单文件读取
*****************************************************************************/
// var fs = require('fs');
// var option = {
// 	"encoding": "utf8",
// 	"flag": "r"
// }
// var fd = fs.readFile("06-01-text2.txt",option,function(err,data){
// 	if(!err){
// 		console.log(data);
// 	}
// });


/*****************************************************************************
*同步文件读取
*****************************************************************************/
// var fs = require('fs');
// var fd = fs.openSync("06-01-text2.txt","r");
// // var str = "";

// do{
// 	var buf = new Buffer(10);
// 	buf.fill();

// 	var bytes = fs.readSync(fd,buf,3,5,null);
// 	// str += buf.toString();

// 	console.log(buf + " " + bytes);
// }while(bytes > 0)


/*****************************************************************************
*异步文件读取
*****************************************************************************/
// var fs = require('fs');

// var str = "";

// function Reader(fd){
// 	var buf = new Buffer(5);
// 	buf.fill("");

// 	fs.read(fd,buf,0,5,null,function(err,bytes,data){  //buf内字节长度为5，则设置读取长度为5，每次就只读5字节
// 		if(err){
// 			console.log("ReadError: " + err);
// 		}else{
// 			if(bytes > 0){
// 				str += data; //data或者buf都可以，把每次读取的数据拼接到str
// 				console.log("read: " + data + "(" + bytes + ")bytes");
// 				Reader(fd);
// 			}else{
// 				console.log("-----------Done----------");
// 				console.log(str);
// 			}

// 		}
// 	});
// }

// fs.open("06-01-text2.txt","r",function(err,fd){
// 	if(err){
// 		console.log("OpenError: " + err);
// 	}else{
// 		Reader(fd);
// 	}
// });


/*****************************************************************************
*流式文件读取
*****************************************************************************/
// var fs = require('fs');

// var fd = fs.createReadStream("06-01-text2.txt");

// fd.on("data",function(chunk){
// 	console.log("data: " + chunk);
// });
// fd.on("error",function(err){
// 	console.log("Error: " + err);
// });



/*****************************************************************************
*Readable->fs.createWriteStream->fs.createReadStream
*****************************************************************************/
var stream = require('stream');
var util = require('util');

util.inherits(Reader,stream.Readable);

function Reader(opt){
	stream.Readable.call(this,opt);
	this.str = "writed from Reader";
	this.index = 0;
}
Reader.prototype._read = function() {
	if(this.index == 0){
		this.push(this.str);
		console.log("Reader: " + this.str);
		this.index += 1;
	}else{
		this.push(null);
	}
};

var fs = require('fs');
var options = {
	"encoding": "utf8",
	"flag": "w"
}

var p1 = new Promise(function(resolve,reject){
	var ws = fs.createWriteStream("06-01-text2.txt",options);

	var r = new Reader();
	ws.write("start...\n");
	r.pipe(ws);

	ws.on("finish",function(){
		resolve("ws writed");
	});
});

function p2(re){
	return new Promise(function(resolve,reject){
		var rs = fs.createReadStream("06-01-text2.txt");
		rs.on("data",function(chunk){
			console.log(re);
			resolve("rs reading:\n" + chunk);
		});
	});
}

p1.then(p2)
.then(function(result){
	console.log("---result---\n" + result);
});