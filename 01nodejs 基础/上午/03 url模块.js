/**
 * Created by Administrator on 2017/5/7 0007.
 */
//url.parse   url.format   url.resolve

var http=require('http');

//1.引入url模块
var url=require('url');

var app=http.createServer(function(request,response){

    response.writeHead(200,{"Content-Type":'text/html;charset="utf-8"'});


    console.log(url);


    //console.log(request.url);

    /*
     /?name=zhangsan&age=20
     /favicon.ico
    * */


    //http://127.0.0.1:8000/?name=zhangsan&age=20

   // console.log(request.url);  /*/?name=zhangsan&age=20         获取url的值*/


    //console.log(url.parse(request.url,true));
    //



    //需求：http://127.0.0.1:8000/?name=zhangsan&age=20  这个地址里面拿到 name 和age



    //


    //过滤/favicon.ico

//http://127.0.0.1:8000/?name=zhangsan&age=20
    if(request.url!='/favicon.ico'){   /*过滤无效的请求*/

      // console.log(request.url);

        //console.log(url.parse(request.url,true));

        var urlPath=url.parse(request.url,true);


        //
        var name=urlPath.query.name;

        var age=urlPath.query.age;


        console.log(name+'--'+age);

        response.write(name+'--'+age);


    }

    response.write('哈哈哈');
    response.end();



})

app.listen(8000,'127.0.0.1');






