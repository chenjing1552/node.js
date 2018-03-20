/**
 * Created by Danny on 2015/9/22 10:22.
 */
var express = require("express");

var app = express();



//静态服务  index.html
app.use('/static',express.static("./static"));   /*匹配所有的路径*/

app.use('/news',express.static("./static"));   /*匹配所有的路径*/

//新的路由
app.get("/images",function(req,res){
    res.send("哈哈");
});

//会自动识别err参数，如果有，那么就这个函数能捕获err
app.use(function(req,res){
    res.status(404).send("没有这个页面！");
});

app.listen(8011);