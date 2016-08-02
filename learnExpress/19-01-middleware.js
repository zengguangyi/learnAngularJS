/*
*2016.7.27
*中间件
*路由级中间件和应用级中间件一样，只是它绑定的对象为 express.Router()
*app.use([path],middleware);path默认为/，middleware是函数，next是要执行的下一个中间件函数
*/

// var express = require('express'),
// 	app = express();

// app.listen(80);

// /***应用级中间件***/
// // 一个中间件栈，处理指向 /user/:id 的 GET 请求
// app.get('/user/:id', function (req, res, next) {
//   // 如果 user id 为 0, 跳到下一个路由
//   if (req.params.id == 0) next('route');
//   // 否则将控制权交给栈中下一个中间件
//   else next(); //
// }, function (req, res, next) {
//   // 渲染常规页面
//   // res.render('regular');
//   res.send('regular');
// });

// // 处理 /user/:id， 渲染一个特殊页面
// app.get('/user/:id', function (req, res, next) {
// 	// res.render('special');
// 	res.send('special');
// });


// /***路由级中间件***/
// var router = express.Router();
// // 一个中间件栈，处理指向 /user/:id 的 GET 请求
// router.get('/user/:id', function (req, res, next) {
//   // 如果 user id 为 0, 跳到下一个路由
//   if (req.params.id == 0) next('route');
//   // 负责将控制权交给栈中下一个中间件
//   else next(); //
// }, function (req, res, next) {
//   // 渲染常规页面
//   // res.render('regular');
//   res.send('regular');
// });

// // 处理 /user/:id， 渲染一个特殊页面
// router.get('/user/:id', function (req, res, next) {
//   console.log(req.params.id);
//   // res.render('special');
//   res.send('special');
// });

// // 将路由挂载至应用
// app.use('/', router);


/**************************************************************/

// var express = require('express'),
// 	bodyparser = require('body-parser'),//把POST请求正文中的JSON数据解析为req.body属性
// 	session = require('express-session'),//提供相当强大的对话实现
// 	app = express();

// 	app.listen(80);

// //把body-parser中间件绑定到所有路径
// app.use("/",bodyparser.json()).use("/",session());//分配多个中间件

// app.get("/reqbody",(req,res)=>{
// 	console.log(req.body);
// });


/*使用query中间件，4.x中内置于请求解析器中*/
// var express = require('express'),
// 	app = express();

// app.listen(80);
// //localhost/query?id=20&name=yi
// app.get("/query",(req,res,next)=>{
// 	var id = req.query.id;
// 	var name = req.query.name;
// 	console.log(id + name);
// 	next();
// },(req,res)=>{
// 	res.send("hahah");
// });
