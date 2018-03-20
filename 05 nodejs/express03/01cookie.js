
/*
* cookie-parser可以设置和获取cookie


1.安装   cnpm instlal cookie-parser --save

2.引入var cookieParser = require('cookie-parser');

3.设置cookie

 res.cookie("name",'zhangsan',{maxAge: 900000, httpOnly: true});

 //HttpOnly 默认false不允许 客户端脚本访问


4.获取cookie

 req.cookies.name

*
* */

var express  = require('express');
var cookieParser = require('cookie-parser');

var app = express();

//使用cookie必须要使用cookie-parser中间件
app.use(cookieParser());


app.get("/",function(req,res){
    res.send("猜你喜欢" + req.cookies.citys);
});


/*猜你喜欢 记录用户的喜好  /lvyou?city=北京     /lvyou?city=济南    /lvyou?city=深圳 */
app.get("/lvyou",function(req,res){
    //得到get请求，用户查询的目的地

    var city=req.query.city;
    if(req.cookies.citys){  /*获取cokie的内容 有值读取 赋值给cityArray*/

        var arrCity=req.cookies.citys;
    }else{
        var arrCity=[];  /*没有值  第一次进来  arrCity空*/
    }

    arrCity.push(city)

    res.cookie("citys",arrCity,{maxAge: 900000, httpOnly: true});

    res.send(city+'浏览器成功');





});
app.listen(3001);


//参考文件http://blog.csdn.net/fangaoxin/article/details/6952954/
