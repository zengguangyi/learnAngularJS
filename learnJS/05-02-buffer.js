/*
*2016.7.10
*Buffer,缓冲数据是由一系列的大端或小端格式字节组成的
*/

/*
*new Buffer(sizeInBytes);字节大小
***var buf256 = new Buffer(256);

*new Buffer(octetArray);
***var bufOctets = new Buffer([0x6f,0x63,0x74,0x65,0x74,0x73]);一个八位字节的缓冲区

*new Buffer(string,[encoding]);
***var bufUTF8 = new Buffer("Some utf8 TEXT \u00b6 \u30c6 \u20ac","utf8");        
*/


/**************************************************************************
*写入缓冲区
*buffer.write(string,[offerset],[length],[encoding]);
*buffer[offerset] = value;
*buffer.fill(value,[offerset],[end]);
*writeInt8(value,offerset,[]noAssert);
*writeInt16LE(value,offerset,[]noAssert);
*writeInt16BE(value,offerset,[]noAssert);
**************************************************************************/
// var buf256 = new Buffer(13);
// buf256.fill(0);
// buf256.write("add some text");
// console.log(buf256.toString());
// buf256.write("ha",9,2);
// console.log(buf256.toString());
// buf256[9] = 43;
// console.log(buf256.toString());
// console.log(buf256.toString('base64'));
// //对应ASCII表
// console.log(buf256);//buffer是2位16进制（8位2进制）
// console.log(buf256.toJSON());//JSON转换出来的是10进制


/**************************************************************************
*从缓冲区读取
*buffer.toString([encoding],[start],[end]);
*stringDecoder.write(buffer);返回缓冲区的解码字符串版本
*buffer[offset];返回缓冲区在制定offset的10进制值
*readInt8(offset,[noAssert]);
*readInt16LE(offset,[noAssert]);
*readInt16BE(offset,[noAssert]);
**************************************************************************/
// var bufUTF8 = new Buffer("some utf8 text \u00b6 \u30c6 \u20ac","utf8");
// console.log(bufUTF8.toString());

// var StringDecoder = require('string_decoder').StringDecoder;
// var decoder = new StringDecoder('utf8');
// console.log(decoder.write(bufUTF8));

// console.log(bufUTF8[0]);

// console.log(bufUTF8[0].toString(8)); //8进制

// console.log(bufUTF8.readUInt32BE(18).toString(16));


/**************************************************************************
*确定缓冲区长度
*Buffer.byteLength(string,[encoding]);
*Buffer(string).length;
*确定字符串将在缓冲区占用的字节长度用byteLength
**************************************************************************/
// console.log("sometext \u00b6".length); //返回字符串长度

// var bufutf8 = new Buffer("sometext \u00b6","utf8");
// console.log(bufutf8.toString());

// console.log(bufutf8.length);
// console.log(Buffer.byteLength(bufutf8)); //返回字节长度

// // console.log(Buffer.byteLength("sometext \u00b6","utf8"));

// // console.log(Buffer("sometext \u00b6").length);


/**************************************************************************
*复制缓冲区
*buf.copy(targetBuffer,[targetStart],[sourceStart],[sourceEnd]);
*sourceBuffer[index] = destinat[index];
**************************************************************************/
// var bufutf8 = new Buffer("some text",'utf8');

// var bufFullcopy = new Buffer(9);
// bufutf8.copy(bufFullcopy);
// console.log(bufFullcopy.toString());

// var str_length = Buffer.byteLength(bufutf8.toString('utf8',3,6));
// var bufcpoy2 = new Buffer(str_length);
// // bufutf8.copy(bufcpoy2,0,3,6);
// // console.log(bufcpoy2);
// // console.log(bufcpoy2.toString());

// bufutf8.copy(bufcpoy2,1,3,6);
// console.log(bufcpoy2);
// console.log(bufcpoy2.toString());


/**************************************************************************
*对缓冲区切片
*slice([start],[end]);创建切片，返回新的缓冲区（新Buffer对象）
*!引用相同的内存!
*与副本不同，编辑一个切片，则原缓冲区确实会改变
**************************************************************************/
// var numbers = new Buffer("123456789",'utf8');
// console.log(numbers.toString());

// var num_slice = numbers.slice(2, 7);
// console.log(num_slice.toString());

// num_slice[1] = "A".charCodeAt(0);
// num_slice[num_slice.length - 1] = "A".charCodeAt(0);
// console.log(numbers.toString());
// console.log(num_slice.toString());


/**************************************************************************
*拼接缓冲区
*concat(list,[totalLength]);
*list,buffer列表，根据出现在列表中的顺序拼接
*totalLength.可选，定义缓冲区最大字节数,给出值执行更快
**************************************************************************/
var buf1 = new Buffer("buffer one ",'utf8');
var buf2 = new Buffer("buffer two",'utf8');
var buf_concat = Buffer.concat([buf1,buf2]);
console.log(buf_concat.toString());