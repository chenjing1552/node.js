var http=require('http');

var fs=require('fs');

var path=require('path');

var url=require('url');

var app=http.createServer((req,res)=>{

    var pathName=url.parse(req.url).pathname;  //获取url的路径

    //console.log(pathName);

    if(pathName=='/' ){
        pathName='/index.html'
    }
   //获取后缀名
    //css/dmb.header.css
    var extname=path.extname(pathName);

    if(pathName!='/favicon.ico'){
        //加载url获取的pathName
        fs.readFile('./static/'+pathName,function(err,data){

            //console.log(data); Buffer
            //console.log('3');
            if(err){  /*找不到文件加载404*/
                console.log(err);
                fs.readFile('./static/404.html',function(error,relData){

                    res.writeHead(404,{"Content-Type":"text/html;charset='utf-8'"});
                    res.write(relData);

                    res.end();  /*注意异步   还有拿到数据以后才能结束响应*/
                })
            }else{
               getMime(extname, function (mimedata) {
                   var mime=mimedata;
                   res.writeHead(200,{"Content-Type":mime+";charset='utf-8'"});
                   res.write(data);
                 //  console.log(data.toString());

                   res.end();  /*注意异步   还有拿到数据以后才能结束响应*/
               });

            }

        })

    }
    //console.log('2');



})

//根据后缀名获取 返回类型

function getMime(str,callback){   /* .html    .css   .js  */

    //str这个值知道的话 用switch

    //1.获取文件
    fs.readFile('./mime.json',function(err,data){   /*异步*/
        // console.log(data.toString());

        var mimeJson=JSON.parse(data.toString());  /*json 对象*/
     //   console.log(mimeJson['.json']);

       // return mimeJson[str] || 'text/html';
        var mime=mimeJson[str] || 'text/plain';

        callback(mime);
    })

    //readFileSync  同步就涉及到回调

    

}

app.listen(3000,"10.36.141.149");


//json字符串转换成json对象  ‘{name:"zhangsan"}’

//JSON.parse();

//JSON.stringify();



