/*
*2016.7.11
*stream
*/

/*******************************************************************************
*Readable流,以方便读取从其他来源进入应用程序的数据
*自定义Readable流对象，首先要继承Readable流的功能，使用ytil模块的inherits()方法
*还要调用一个用push()来输出Readable对象的数据的_read方法
*push()调用应推入的是一个String、Buffer或者null
**my.pause();暂停**my.resume();恢复
*******************************************************************************/
// var stream = require('stream');
// var util = require('util');
// util.inherits(MyFunc,stream.Readable); //利用inherits，MyFunc继承stream.Readable

// function MyFunc(opt){
// 	stream.Readable.call(this,opt);//创建对象调用的实例
// 	this.data = ["one","two",3,"4"];
// 	this.index = 0;
// }
// MyFunc.prototype._read = function() {
// 	if(this.index >= this.data.length){
// 		this.push(null);
// 	}else{
// 		console.log("ha");
// 		this.push(String(this.data[this.index]));
// 		this.index += 1;
// 	}
// };

// var my = new MyFunc();

// console.log("read(): " + my.read()); //直接用read()读取第一个数据

// my.on("data",function(chunk){
// 	console.log("chunk: " + chunk);
// });
// my.on("error",function(err){
// 	console.log("Error: " + err);
// });
// my.on("end",function(){
// 	console.log("END");
// });


/*******************************************************************************
*Writable流，旨在提供把数据写入一种可以轻松在代码其他区域被使用的形式的机制
*事件：
**drain:当write()调用返回false后，当准备好写如更多数据时，发出此事件
**finish:当end()在Writable对象上被调用，所有数据被刷新，且不会有更多数据被接受
**pipe:当pipe()方法在Readable流上被调用，以添加到此Writable为目的时，发出事件
**unpipe:当pipe()方法在Readable流上被调用，以删除到此Writable为目的时，发出事件
*方法：
**write(chunk,[encoding],[callback]);
**end(chunk,[encoding],[callback]);
*******************************************************************************/
// var stream = require('stream');
// var util = require('util');

// util.inherits(Writer,stream.Writable); //继承Writable流对象

// function Writer(opt){
// 	stream.Writable.call(this,opt);
// 	this.arr = new Array();
// }
// Writer.prototype._write = function(data,encoding,callback) {
// 	this.arr.push(data.toString());//向arr中push进data
// 	console.log("Adding " + data);
// 	callback();//回调必须有
// };

// var myW = new Writer();

// for(var i=0;i<6;i++){
// 	myW.write("item" + i,'utf8',(function(n){
// 		console.log("haha" + n);
// 	})(i));
// }
// myW.end();

// myW.on("finish",function(){
// 	console.log(myW.arr);
// });


/*******************************************************************************
*Duplex(双向\双工)流
*******************************************************************************/
// var stream = require('stream');
// var util = require('util');

// util.inherits(MyDuplex,stream.Duplex);

// function MyDuplex(opt){
// 	stream.Duplex.call(this,opt);
// 	this.arr = new Array();
// }
// MyDuplex.prototype._read = function readItem(size){
// 	var chunk = this.arr.shift();
// 	if(chunk == "stop"){
// 		this.push(null);
// 	}else{
// 		if(chunk){
// 			this.push(chunk);
// 		}else{
// 			setTimeout(readItem.bind(this),500,size);
// 		}
// 	}
// }
// MyDuplex.prototype._write = function(data,encoding,callback){
// 	this.arr.push(data.toString());
// 	callback();
// }

// var my = new MyDuplex();
// my.on("data",function(chunk){
// 	console.log("data: " + chunk);
// });
// my.on("end",function(){
// 	console.log("END");
// });

// for(var i=0;i<5;i++){
// 	my.write("item" + i,'utf8');
// }
// my.write("stop",'utf8');


/*******************************************************************************
*Transform(变换)流
**不需要实现write()和read()原型方法，作为直通函数提供
*_transform(chunk,encoding,callback);应接受来自write()请求的数据，修改并推出!
*_flush(callback);
*******************************************************************************/
// var stream = require('stream');
// var util = require('util');

// util.inherits(MyTransform,stream.Transform);

// function MyTransform(opt){
// 	stream.Transform.call(this,opt);
// }
// MyTransform.prototype._transform = function(data,encoding,callback){
// 	obj = data ? JSON.parse(data.toString()) : "";
// 	this.emit("object",obj);
// 	obj.run = true;
// 	this.push(JSON.stringify(obj));
// 	callback();
// }
// MyTransform.prototype._flush = function(callback) {
// 	callback();
// };

// var my = new MyTransform();

// my.on("object",function(obj){
// 	console.log("name: " + obj.name + " color: " + obj.color);
// });
// my.on("data",function(data){
// 	console.log("data: " + data.toString() + "\n");
// });

// for(var i=0;i<5;i++){
// 	my.write('{"name": "Name'+ i +'","color": "Color' + i + '"}');
// }


/*******************************************************************************
*pipe();管道传输
*******************************************************************************/
// var stream = require('stream');
// var util = require('util');

// util.inherits(Reader,stream.Readable);
// util.inherits(Writer,stream.Writable);

// function Reader(opt){
// 	stream.Readable.call(this,opt);
// 	this.arr = ["one","two","three","4"];
// 	this.index = 0;
// }
// Reader.prototype._read = function(size){
// 	if(this.index >= this.arr.length){
// 		this.push(null);
// 	}else{
// 		this.push(this.arr[this.index]);
// 		this.index ++;
// 	}
// }

// function Writer(opt){
// 	stream.Writable.call(this,opt);
// 	this.w_arr = new Array();
// }
// Writer.prototype._write = function(data,encoding,callback){
// 	if(data){
// 		this.w_arr.push(data.toString());
// 		console.log("Writing: " + data.toString());
// 	}
// 	callback();
// }

// var r = new Reader();
// var w = new Writer();

// r.pipe(w);
// w.on("finish",function(){
// 	console.log(w.w_arr);
// });



/*******************************************************************************
*Zlib压缩与解压缩数据
*注意，压缩数据需要花费cpu周期，在考虑成本前，应确信压缩数据会带来好处
*支持：
**gzip/gunzip
**deflate/inflate
**deflateRaw/inflateRaw

!!压缩/解压缩缓冲区
**function(buffer,callback);
*******************************************************************************/
//压缩/解压缩缓冲区
// var zlib = require('zlib');
// var input = "..........................text..........";
// console.log("input (" + Buffer.byteLength(input) + "): " + input);

// zlib.gzip(input,function(err,buffer){
// 	if(!err){
// 		console.log("gzip (" + buffer.length + "): " + buffer.toString('base64'));

// 		zlib.gunzip(buffer,function(err,buffer){
// 			if(!err){
// 				console.log("gunzip (" + buffer.length + "): " + buffer.toString());
// 			}
// 		});

// 		zlib.unzip(buffer,function(err,buffer){
// 			if(!err){
// 				console.log("unzip gzip (" + buffer.length + "): " + buffer.toString());
// 			}
// 		});
// 	}
// });

//压缩/解压缩流
var zlib = require('zlib');
var gzip = zlib.createGzip();

var fs = require('fs');
var inFile = fs.createReadStream("04-02-nexttick.txt");
var outFile = fs.createWriteStream("05-02-streamzip.gz");

inFile.pipe(gzip).pipe(outFile);
console.log("inFile.pipe(gzip).pipe(outFile);");

setTimeout(function(){
	var gunzip = zlib.createGunzip({flush: zlib.Z_FULL_FLUSH});
	var inFile = fs.createReadStream("05-02-streamzip.gz");
	var outFile = fs.createWriteStream("05-02-streamzip.txt");

	inFile.pipe(gunzip).pipe(outFile);
	console.log("inFile.pipe(gunzip).pipe(outFile);");
},1000);