/*
*2016.7.6
*try/catch异常处理，throw、finally
*/

// try{
// 	var x = disname;
// }catch(err){
// 	console.log(err.name + ': "' + err.message + '" occurred when assigning x.');
// }

//throw抛出错误
function sqrRoot(x){
	try{
		if(x == "")
			throw{message: "Can't Square Root Nothing"};
		if(x < 0)
			throw{message: "Sorry No Imagination"};
		if(isNaN(x)) //isNaN检查是否是非数字值
			throw{message: "Can't Square Root String"}
		return "sqrt("+ x + ") = " + Math.sqrt(x);
	}catch(err){
		return err.message;
	}finally{
		console.log("finally done");
	}
}
function writeIt(){
	console.log(sqrRoot("two"));
	console.log(sqrRoot(""));
	console.log(sqrRoot("4"));
	console.log(sqrRoot("-4"));
}
writeIt();