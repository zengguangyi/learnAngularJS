/*
*2016.7.13
*其他文件系统任务
*/

/*
*1.验证路径的存在性
*fs.exists(path,callback);
*fs.existsSync(path);
*/
// var fs = require('fs');

// console.log(fs.existsSync("06-01-text.txt") ? "path existsSync" : "path is not existsSync");

// fs.exists("06-01-text.txt",function(exists){
// 	console.log(exists ? "path exists" : "path is not exist");
// });


/*
*2.获取文件信息
*fs.stat(path,callback(err,stat));
*fs.statSync(path);直接返回stats对象
**isFile();isDirectory();isSocket();
*/
// var fs = require('fs');

// var statObj = fs.statSync("06-01-text.txt");
// console.log(statObj);

// fs.stat("06-01-text.txt",function(err,stat){
// 	if(err){
// 		console.log("ERROR: " + err);
// 		return 0;
// 	}
// 	console.log(stat.isFile() + ";"+ stat.isDirectory() + ";" + stat.isSocket() + ";" + stat.isFIFO());
// 	console.log(stat);
// });


/*
*3.列出文件
*fs.readdir(path,callback(err,entries));
*fs.readdirSync(path);
*以下为遍历文件夹下所有文件及文件夹
*/
// var fs = require('fs');
// var path = require('path');

// function WalkDirs(dirPath){
// 	console.log("---" + dirPath + "---");
// 	fs.readdir(dirPath,function(err,entries){
// 		if(err){
// 			console.log("readdirERROR: " + err);
// 			return 0;
// 		}
// 		for(var value of entries){
// 			var fullpath = path.join(dirPath,value);//拼接完整的路径
// 			(function(fullpath){
// 				fs.stat(fullpath,function(err,stats){
// 					if(err){
// 						console.log("statERROR: " + err);
// 						return 0;
// 					}
// 					if(stats.isFile()){
// 						console.log(fullpath);
// 					}else if(stats.isDirectory()){
// 						console.log("\n");
// 						WalkDirs(fullpath);
// 					}
// 				});
// 			})(fullpath);//由于回调函数引用外部循环变量fullpath，闭包，故用立即执行
// 		}
// 	});
// }

// WalkDirs("../learnJS");


/*
*4.删除文件
*fs.unlink(path,callback(err));
*fs.unlinkSync(path);
*/
// var fs = require('fs');

// fs.unlink("06-05-fsOtherDir/newforUnlink.txt",function(err){
// 	console.log(err ? "file delete failed" : "file deleted");
// });



/*
*5.截断文件
*指通过把文件结束处设置为比当前值小的值来减小文件的大小
*你可能需要截断不断增长但不包含关键数据的文件（如，临时日志）
*fs.truncate(path,length,callback(err));
*fs.truncateSync(path,len);
*/
// var fs = require('fs');

// function p1(path){
// 	return new Promise(function(resolve,reject){
// 		fs.stat(path,function(err,stats){
// 			if(err){
// 				reject("statERROR: " + err);
// 			}else{
// 				resolve(
// 				{
// 					"before": stats.size,
// 					"path": path
// 				});
// 			}
// 		});
// 	});
// }
// function p2(re){
// 	return new Promise(function(resolve,reject){
// 		fs.truncate(re.path,20,function(err){
// 			if(err){
// 				reject("truncateERROR: " + err);
// 			}else{
// 				fs.stat(re.path,function(err,stats){
// 					re.after = stats.size;
// 					resolve(re);
// 				});
// 			}
// 		});
// 	});
// }
// p1("06-05-fsOtherDir/truncate.txt").then(p2)
// .then(function(result){
// 	console.log(result);
// });



/*
*6.建立和删除目录
*fs.mkdir(path,[mode],callback(err));
*fs.mkdirSync(path,[mode]);
*fs.rmdir(path,callbcak(err));
fs.rmdirSync(path);
*可选的mode允许指定新目录的访问模式
*/
// var fs = require('fs');

// fs.mkdir("06-05-fsOtherDir/mkdir",function(err){
// 	console.log(err ? ("mkdir failed: " + err) : "mkdir done");
// });

// setTimeout(function(){
// 	fs.rmdir("06-05-fsOtherDir/mkdir",function(err){
// 		console.log(err ? ("mkdir delete failed: " + err) : "mkdir deleted");
// 	});
// },1000);



/*
*7.重命名文件和目录
*fs.rename(oldPath,newPath,callbcak(err));
*fs.renameSync(oldPath,newPath);
*/
// var fs = require('fs');
// var oldname = "06-05-fsOtherDir/rename.txt";
// var newname = "06-05-fsOtherDir/newname.txt";

// fs.rename(oldname,newname,function(err){
// 	console.log(err ? ("rename failed: " + err) : "rename done");

// 	setTimeout(function(renew,old){
// 		fs.rename(renew,old,function(err){
// 			console.log(err ? ("renew failed: " + err) : "renew done");
// 		});
// 	},1000,newname,oldname);
// });



/*
*8.监视文件更改入
*fs.watchFile(path,[options],callbcak(curr,prev));
*options,一个对象，包含persistent(持续)和interval属性
*若想只要文件被监视就继续运行，则persistent为true，interval轮询时间
*/
// var fs = require('fs');

// var options = {
// 	persistent: true,
// 	interval: 3000
// }
// fs.watchFile("06-05-fsOtherDir/watchFile.txt",options,function(curr,prev){
// 	console.log("curr: " + curr.mtime + " and " + curr.size + "bytes");//之后
// 	console.log("prev: " + prev.mtime + " and " + prev.size + "bytes");//之前
// });