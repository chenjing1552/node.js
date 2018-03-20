/**
 * Created by Administrator on 2017/3/1 0001.
 */
var express=require('express');

var app=new express();   /*实例化 express*/
//通过 Express 内置的 express.static 可以方便地托管静态文件，例如图片、CSS、JavaScript 文件等。

var mongoDb = require('mongodb');
var MongoClient=mongoDb.MongoClient;
var ObjectID = mongoDb.ObjectID;

var dbUrl = 'mongodb://localhost:27017/news';   /*数据库连接的地址和数据库*/
//指定模板引擎
app.set('view engine','ejs');
//指定模板位置
app.set('views', __dirname + '/views');

app.use(express.static('./static'));


/*显示首页  用户列表*/
app.get('/api',function(req,res){
    /*数据库查询user的数据*/

    var userList=[];

    MongoClient.connect(dbUrl,function(err,db){

        if(err){
            console.log(err);
            console.log('数据库连接失败');
            return;
        }

        var rel=db.collection('user').find();

        rel.each(function(error,doc){

            if(doc!=null){
                userList.push(doc);
            }else{
                          //
               // /*userList转换成json 输出到页面*/
               res.json({"result":userList,"success":true});   /*返回json数据*/


            }
        })


    })




})


app.listen(8010,'10.36.141.141');
