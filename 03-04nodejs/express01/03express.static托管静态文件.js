/**
 * Created by Administrator on 2017/5/10 0010.
 */
var express=require('express');

var fs=require('fs');

var app=new express();
//express  express.static托管静态文件

//index.html

app.use(express.static('static'));  /*中间件    实现了静态页面服务器的功能*/


//配置路由
app.get('/login',function(req,res){
    res.send('执行登录操作')

})

app.get('/register',function(req,res){
    res.send('执行注册操作')

})




app.listen(3002,'127.0.0.1');
