/**
 * Created by Administrator on 2017/3/1 0001.
 */
var express=require('express')

var app=new express();   /*实例化 express*/
//通过 Express 内置的 express.static 可以方便地托管静态文件，例如图片、CSS、JavaScript 文件等。

app.use(express.static('./static'));

//指定模板引擎
app.set('view engine','ejs');

//指定模板位置
app.set('views', __dirname + '/views');

app.get('/',function(req,res){
   var data={
       "name":'张三',
        "h":"<h2>这是一个h2的数据</h2>",
        "news" : ["我是小新闻啊","我也是啊","哈哈哈哈"]
    };
    res.render('index',data);
    /*数据库里面查询的数据*/
})

app.listen(80);
