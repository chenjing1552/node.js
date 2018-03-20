/**

 */

//1.nodejs
var http=require('http');

var ejs = require("ejs");

var fs=require("fs");

var app=http.createServer(function(req,res){

    res.writeHead(200,{"Content-Type":"text/html;charset='utf-8'"});

    fs.readFile('./views/index.html',function(err,htmlData){

        //htmlData

        var data={ //后台数据

            'title':'这是后台的一个title',

            arr:['1111','2222','3332223']
        };


        var html = ejs.render(htmlData.toString(), data);  /*1.模板   2.数据*/


        res.end(html);  /* res.write(res);  res.end() */




    })




})

app.listen(3003,'127.0.0.1');  /*配置服务器的端口 和地址*/





