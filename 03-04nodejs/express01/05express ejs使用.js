/**

 ejs nodejs的模板引擎
 1.安装ejs

 cnpm install ejs --save

 2.app.set("view engine","ejs");  //这是express的模板引擎 ejs

3. res.render("haha",{
      "news" : ["我是小新闻啊","我也是啊","哈哈哈哈"]
    });

 渲染模板  参数1：模板名称            参数2：数据    数据必须是个对象

 */


var express=require('express');

var fs=require('fs');

var app=new express();

app.set("view engine","ejs");//设置模板引擎

app.set('views', __dirname + '/views');  /*设置模板的路径*/


//默认ejs加载的模板在views 这个文件夹下面,默认情况下面ejs模板引擎的后缀名必须是 .ejs


app.get('/', function (req,res) {

    res.render('index',{
        title:'这是index'
    });

})


app.get('/news', function (req,res) {

    var data={
        list:['新闻1','新闻2','新闻3','新闻4','新闻4'], /*回头这个数据是数据库拿到的*/

        content:'<h2>我是后台的html代码</h2>'
    }
    res.render('news',data);

})




app.get('/db', function (req,res) {

    var data={};

    fs.readFile('db.txt',function(err,result){
        data.title=result.toString();
        console.log(result);

        res.render('db',data);

    })


    //var data={
    //    list:['新闻1','新闻2','新闻3','新闻4','新闻4']  /*回头这个数据是数据库拿到的*/
    //}
    //res.render('db',data);

})






app.listen(3000,'127.0.0.1');


