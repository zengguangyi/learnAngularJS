/*
2016.7.5
操作String对象的方法
*/

var myStr = "Teach Yourself jQuery & JavaScript in 24 Hours";

//charAt(index)指定返回索引处的字符
// var charAt_str = myStr.charAt(4);
// console.log(charAt_str);

//charCodeAt(index)返回指定索引处的字符的Unicode值
// var charCodeAt_str = myStr.charCodeAt(2);
// console.log(charCodeAt_str);

//concat(str1,str2,...)连接两个或多个字符串，返回连接后的字符串的副本
// var concat_str = myStr.concat("hahah111 & ","Str222");
// console.log(myStr);
// console.log(concat_str);

//fromCharCode()将Unicode值转换为实际的字符
// var unicode_str = "72";
// var fromCharCode_str = String.fromCharCode(unicode_str,69,76,76,79);
// console.log(fromCharCode_str);

//indexOf(subString)返回指定的subString值第一次出现的位置，如果没有找到subString，返回-1
// var sub_str = "jQuery";
// var indexOf_str = myStr.indexOf(sub_str);
// console.log(indexOf_str);

//lastIndexOf(subString)返回指定的subString值最后出现的位置，如果没有找到subString，返回-1
// var sub_str = "our";
// var lastIndexOf_str = myStr.lastIndexOf(sub_str);
// console.log(myStr.length);
// console.log(lastIndexOf_str);

//match(regex)搜索字符串，并返回正则表达的所有匹配
/*
*match() 方法可在字符串内检索指定的值，或找到一个或多个正则表达式的匹配。
*该方法类似 indexOf() 和 lastIndexOf()，但是它返回指定的值，而不是字符串的位置。
*stringObject.match(searchvalue)
*stringObject.match(regexp)
*/
// var regex_str = /\d+/g;
// var str="1 plus 2 equal 3";
// var match_str = str.match(regex_str);
// console.log(match_str);

/*
*replace() 方法用于在字符串中用一些字符替换另一些字符，或替换一个与正则表达式匹配的子串
*stringObject.replace(regexp/substr,replacement)
*/
// var sub_str = "guangyi";
// var replace_str = "hello username,welcome!";
// console.log(replace_str);
// var new_replace_str = replace_str.replace(/username/,sub_str);
// console.log(replace_str);
// console.log(new_replace_str);

//search(regex)基于正则表达式搜索字符串，并返回第一个匹配的位置
// var regex_str = /\d+/;
// var search_str = myStr.search(regex_str);
// console.log(search_str);

//slice(start,end),片，返回start和end间部分的新字符串
// var slice_str = myStr.slice(6,14);
// console.log(slice_str);

//split(sep,limit),根据分隔符或正则表达式，把字符串分割为子字符串数组，可选的limit参数定义从头开始执行分割的最大数量
// var split_str = myStr.split(" ");
// console.log(split_str);

//substr(start,length)从字符串指定的start位置开始，并按照length长度提取字符
// var substr_str = myStr.substr(6,4);
// console.log(myStr);
// console.log(substr_str);

//substring(from,to)返回字符串索引在from和to（不含）之间的子串(只是to不包含)
// var substring_str = myStr.substring(6,10);
// console.log(substring_str);

/*
*toLowerCase()将字符串转换为小写
*toUpperCase()将字符串转换为大写
*/
// console.log(myStr.toLowerCase());
// console.log(myStr.toUpperCase());

//valueOf()返回原始字符串值???????
// console.log(myStr.valueOf());