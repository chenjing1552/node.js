/*
* 1.安装  express-session
*
* 2.引入

 var session = require("express-session");


 3.设置官方文档提供的中间件

 app.use(session({
	 secret: 'keyboard cat',  // sign the session ID cookie. 加密方式
	 resave: false,  //是指每次请求都重新设置session cookie，假设你的cookie是10分钟过期，每次请求都会再设置10分钟
	 saveUninitialized: true,  //是指无论有没有session cookie，每次请求都设置个session cookie ，默认给个标示为 connect.sid

	//cookie: { secure: true }  //secure: 应用在https
 }))



4.使用

设置值
 req.session.username = "张三";

获取值 req.session.username




* */


var express = require("express");
var app = express();
var session = require("express-session");


app.use(session({
	secret: 'keyboard cat',  // sign the session ID cookie. 加密方式
	resave: false,  //是指每次请求都重新设置session cookie，假设你的cookie是10分钟过期，每次请求都会再设置10分钟
	saveUninitialized: true,  //是指无论有没有session cookie，每次请求都设置个session cookie ，默认给个标示为 connect.sid

	//cookie: { secure: true }  //secure: 应用在https
}))

app.get("/",function(req,res){
	//username

	if(req.session.username){  /*没有登录*/
		res.send(req.session.username+'：欢迎回来');  /*获取session*/

	}else{
		res.send('您还没有登录');

	}
});

app.get("/login",function(req,res){

	req.session.username='张三';  /*设置session */

	res.send('登录成功');
});

app.listen(3000);