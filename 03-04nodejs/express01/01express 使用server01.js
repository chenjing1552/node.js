/**
 * Created by Administrator on 2017/5/10 0010.

 安装express


 1.cd 你自己的目录


 2.npm init生成package.json   //模块化管理


3.npm install express --save      /cnpm install express --save               //--svae-dev



 (--save把这个包的名称写入package.json  ，删掉node_modules  执行npm install / cnpm install 把所有的依赖重新下载下来)



 4.引入express     var express=require('express');

 5.实例化  var app=new express();

 6.监听端口  app.listen(3000,"127.0.0.1");

 7.配置路由
 app.get('/news',function(req,res){
    res.send('新闻');
})


 */
var express=require('express');  /*引入express*/

var app=new express(); /*实例化express 赋值给app*/

//配置路由   匹配URl地址实现不同的功能

app.get('/',function(req,res){

    res.send('首页');

})

app.get('/search',function(req,res){

    res.send('新闻');

    //?keyword=华为手机&enc=utf-8&suggest=1.his.0.0&wq

})

app.get('/login',function(req,res){

    res.send('登录');

})
app.get('/register',function(req,res){

    res.send('注册');

})






app.listen(3000,"127.0.0.1");