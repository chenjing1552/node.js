/**
 * Created by Danny on 2015/9/22 10:22.
 *
 *
 express 中间件：路由匹配之前或者路由匹配之后做的一系列的操作


 * */

var express=require('express');

var app=new express();


app.use(function(req,res,next){  /*匹配任何路由*/
    //res.send('中间件');

    console.log(new Date());

    next();  /*表示匹配完成这个中间件以后程序继续向下执行*/

})


app.get('/',function(req,res){

    res.send('根');

})

app.get('/index',function(req,res){

    res.send('首页');

})



app.get('/user/login',function(req,res){  /*匹配到一个路由就不继续向下执行*/

    res.send('login');
})

app.get('/user/:actoin',function(req,res){

    var actoin=req.params.actoin;
    res.send('user-'+actoin);
})








app.listen(3000,'127.0.0.1');