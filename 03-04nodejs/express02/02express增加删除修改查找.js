/**

 1.操作数据库 启动数据库服务

 2、安装  express  mongodb
 */


var express=require('express')

var MongoClient = require('mongodb').MongoClient;

var url = 'mongodb://localhost:27017/news';   /*操作的数据库*/


var app=new express();   /*实例化 express*/
//通过 Express 内置的 express.static 可以方便地托管静态文件，例如图片、CSS、JavaScript 文件等。

app.use(express.static('./static'));

//指定模板引擎
app.set('view engine','ejs');

//指定模板位置
app.set('views', __dirname + '/views');

app.get('/insert',function(req,res){
 //给数据库插入一个数据



   MongoClient.connect(url,function(err,db){  /*连接数据库*/
      if(err){ /*数据库连接失败*/

        console.log(err);
        return;
      }
   //增加数据
     db.collection('user').insertOne({"name":'张三','age':33,"sex":'男'},function(err,data){

     if(err){
       console.log('插入数据失败');
      return;
     }

     console.log('成功');
    })


  })


})

app.listen(8000);
