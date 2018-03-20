/**
 * Created by Danny on 2015/9/22 10:22.
 */
var express = require("express");

var app = express();


app.set('view engine','ejs');


app.get('/news',function(req,res){

    //var action=req.params['action'];

    res.send('news-');

})

/*处理操作   处理完成让程序继续向下执行*/
app.use('/user/:action',function(req,res,next){

   console.log(new Date());

    next();

})


app.get('/user/:action',function(req,res){
    var action=req.params['action'];
    res.send('用户-'+action);

})

/*中间件相应404*/
app.use(function(req,res){
    //res.render('404',{});
    res.status(404).render('404',{});
})



app.listen(8012);