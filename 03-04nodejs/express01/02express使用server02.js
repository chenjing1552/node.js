/**
 * Created by Administrator on 2017/5/10 0010.
 */
var express=require('express');

var fs=require('fs');

var app=new express();
//配置路由


app.get('/index',function(req,res){

    fs.readFile('./static/index.html',function(err,data){

        //res.send(data);
           console.log(data);
             res.write(data);

             res.end();

    })




})

app.get('/news',function(req,res){

    res.send('新闻');



})



app.listen(3001,'127.0.0.1');
