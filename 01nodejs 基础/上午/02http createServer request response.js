/**
 * Created by Administrator on 2017/5/7 0007.
 */
/*
 如果我们使用PHP来编写后端的代码时，需要Apache 或者 Nginx 的HTTP 服务器，并配上 mod_php5 模块和php-cgi，来处理客户端的请求相应。
 不过对 Node.js 来说，概念完全不一样了。使用 Node.js 时，我们不仅仅 在实现一个应用，同时还实现了整个 HTTP 服务器。
* */

//1.引入http模块
var http=require('http');



//2.用http模块创建服务

    /*
     req获取信息   （request）
     res 返回信息 （response）
     * */
var app=http.createServer(function(req,res){

        //  res.write('hello nodejs');
        res.writeHead(200,{"Content-Type":"text/html;charset='utf-8'"});
        res.write('你好 nodejs113333214214');

    //res.write(1232);






        res.end();/*结束响应  程序执行完成以后必须写 res.end()*/

})

app.listen(3001,'127.0.0.1');  /*配置服务器的端口 和地址*/





