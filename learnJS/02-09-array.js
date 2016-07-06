/*
*2016.7.6
操作Array对象的内置方法
*/

var myArr = ["Monday","Tuesday","Wednesday","Thursday","Friday"];
//遍历
// for(value of myArr){
// 	console.log(value);
// }

//concat(arr1,arr2,...)返回一个数组和作为参数传递的数组的副本
// var arr1 = ["weekend"];
// var concat_arr = myArr.concat(arr1);
// console.log(concat_arr);

/*
*indexOf(value)返回数组中value的第一个索引，没有则返回-1
*lastIndexOf(value)返回数组中value的最后一个索引，没有则返回-1
*/
// var indexOf_arr = myArr.indexOf("Wednesday");
// console.log(indexOf_arr);

//join(separator)把一个数组中所有元素连接为由separator分隔的单个字符串，如果没有指定分隔符，默认逗号作为分隔符
// var join_str = myArr.join("-->");
// console.log(join_str);

//pop删除数组的最后一个元素，并返回该元素
// var pop_element = myArr.pop();
// console.log(myArr);
// console.log(pop_element);

//push(item1,item2,...)添加一个或多个元素到数组的结尾，返回数组的新长度
// var item1 = "week";
// var newArr_length = myArr.push(item1,"item2");
// console.log(myArr);
// console.log(newArr_length);

//reverse()反转数组中所有元素的顺序
// var reverse_arr = myArr.reverse();
// console.log(reverse_arr);
// console.log(myArr);

/*
*shift()删除数组中的第一个元素，并返回该元素
*unshift()添加新元素到数组开头，返回新的长度
*/
// var shift_element = myArr.shift();
// console.log(myArr);
// console.log(shift_element);
// var newShift_length = myArr.unshift("111","222");
// console.log(myArr);
// console.log(newShift_length);

//slice(start,end)返回索引start和end(不含)之间的元素
// var slice_arr = myArr.slice(1,4);
// console.log(slice_arr);

/*
*sort(sortFunction)对数组元素排序(根据ASCII码进行排序)，sortFunction可选
*__|___-1___|___0___|___1___|__
*/
// var sort_arr = myArr.sort();
// console.log(sort_arr);
// console.log(myArr);
// var sortFun_arr = [10, 20, 1, 2];
// sortFun_arr.sort(function(x,y){
// 	if (x < y){
// 		return -1;
// 	}
// 	if(x > y){
// 		return 1;
// 	}
// 	return 0;
// });
// console.log(sortFun_arr);

/*
*splice(index,count,item1,item2)在index索引处，删除count个条目，然后在index处插入作为参数传入的任意可选条目
*返回被删除的元素组成的新数组
*/
// var splice_arr = myArr.splice(1,3,"1","2","3");
// console.log(splice_arr);
// console.log(myArr);

//toString()返回一个数组的字符串形式
// var toString_str = myArr.toString();
// console.log(toString_str);
// console.log(toString_str[2]);
// console.log(myArr);

//valueOf()返回数组对象的原始值