/*
*2016.7.10
*JSON
*/

//JSON字符串转JS对象
var json_str = '{"name":"guangyi","age":18,"members":["mama","dad"]}';
var json_obj = JSON.parse(json_str);
console.log(typeof json_obj);
console.log(json_obj);
console.log(json_obj.members);


//JS对象转JSON字符串
var obj = {
	"name": "guangyi",
	"age": 20,
	"run": "hahahahah"
};
var str = JSON.stringify(obj);
console.log(typeof str);
console.log(str);