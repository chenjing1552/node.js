/**
 * Created by Administrator on 2017/5/7 0007.
 */

var http=require('http');

var app=http.createServer(function(req,res){

    //  res.write('hello nodejs');
    res.writeHead(200,{"Content-Type":"text/html;charset='utf-8'"});
    res.write('你好nodejs');


    run();  /*调用自定义的方法，注意放在end前面*/


    res.end();/*结束响应  程序执行完成以后必须写 res.end()*/


})

app.listen(8200,'127.0.0.1');  /*配置服务器的端口 和地址*/


function run(){

    console.log('执行了run方法');
}

