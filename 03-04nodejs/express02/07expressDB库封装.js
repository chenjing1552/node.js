/**
 * Created by Administrator on 2017/3/1 0001.
 */
var express=require('express');

var app=new express();   /*实例化 express*/
//通过 Express 内置的 express.static 可以方便地托管静态文件，例如图片、CSS、JavaScript 文件等。
var bodyParser = require('body-parser');
var Db=require('./model/db');




app.get('/add',function(req,res){

    //"name":name,
    //    "age":age,
    //    "gonghao":gonghao,
    //    "bumeng":bumeng

    var name='掌声';
    var age='10';

    Db.insertOne('user',{
        "name":name,
        "age":age
    },function(err,data){
        if(err){
            console.log(err);
        }
        console.log(data);
        res.send(' 成功');

    })





})


app.listen(8010);
