var http=require('http');

var url=require('url');

var fs=require('fs');

var app=http.createServer(function(req,res){

  res.writeHead(200,{"Content-Type":"text/html;charset=UTF-8"});

  //console.log(req);

  console.log(url.parse('http://www.baidu.com'));

  //parse 第一个参数  地址
  //
  //parse  第二个参数是不是把query转换为对象
  //
  //parse 第三个参数是否显示 host



  //format  和parse相反


  res.end('成功');

  //url.parese(req)



  //url.resolve(from, to)

  //b = url.resolve('http://example.com/', '/one')

  ////http://example.com/one





})

app.listen(3000);

