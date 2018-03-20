/**


 body-parser中间件   第三方的   获取post提交的数据

1.cnpm install body-parser --save

 2.var bodyParser = require('body-parser')


 3.设置中间件

 //处理form表单的中间件

 // parse application/x-www-form-urlencoded
 app.use(bodyParser.urlencoded({ extended: false }));  form表单提交的数据

 // parse application/json
 app.use(bodyParser.json());  提交的json数据的数据


 4.req.body



 */
var express = require("express");

var bodyParser = require('body-parser')

var app = express();


//处理form表单的中间件

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());



//body-parser
//模板引擎
app.set("view engine","ejs");

app.get("/",function(req,res){   /*匹配get路由*/
    res.render("form");   /*ejx加载模板*/
});

app.post('/login',function(req,res){  /*匹配post提交数据*/


    console.log(req.body.username);

    res.send('post');


})

//app.get('/login',function(req,res){  /*匹配get数据*/
//    res.send('get');
//
//})
app.listen(3010);