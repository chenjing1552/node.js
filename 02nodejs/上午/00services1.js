var http=require('http');

var fs=require('fs');

var app=http.createServer((req,res)=>{

	var pathName=req.url;  //获取url的路径   news.json?24214215

	console.log(pathName);

	if(pathName=='/' ){
		pathName='/index.html'
	}

	//console.log('1');

	if(pathName!='/favicon.ico'){
		//加载url获取的pathName
		fs.readFile('./static'+pathName,function(err,data){

			//console.log(data); Buffer
			//console.log('3');

			if(err){  /*找不到文件加载404*/
				  console.log(err);
				  fs.readFile('./static/404.html',function(error,relData){

					  res.writeHead(404,{"Content-Type":"text/html;charset='utf-8'"});
					  res.write(relData.toString());
					  res.end();  /*注意异步   还有拿到数据以后才能结束响应*/
				  })
			}else{
				res.writeHead(200,{"Content-Type":"text/html;charset='utf-8'"});
				res.write(data.toString());
				res.end();  /*注意异步   还有拿到数据以后才能结束响应*/

			}

		})

	}

	//console.log('2');



})


app.listen(3002,"127.0.0.1");
