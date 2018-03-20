/**
 * Created by Administrator on 2017/5/10 0010.
 */
var express=require('express');

var fs=require('fs');

var app=new express();
//express  express.static托管静态文件


app.get('/list',function(req,res){

    res.send('新闻列表');
})



app.get('/content/:aid',function(req,res){


    //console.log(req.url);

    //http://127.0.0.1:3002/content/12
    var aid=req.params.aid; /*拿到了动态传值       content/12   12*/

    res.send('新闻详情'+aid);
})


app.listen(3002,'127.0.0.1');
