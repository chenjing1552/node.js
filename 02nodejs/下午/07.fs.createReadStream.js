const fs = require('fs')

//流的方式读取文件

/*创建读取流*/
var fileReadStream = fs.createReadStream('mongoDb.txt');



var str='';
var count=0;
//触发多次  读取流
fileReadStream.on('data',function(chunk){  /*数据是一块一块  不是一次读取完成*/

    str+=chunk;
    count++;
})

//读取完成触发的事件
fileReadStream.on('end',function(){  /*数据是一块一块  不是一次读取完成*/

   console.log(count);

    console.log(str);
})


//错误的时候触发的事件
fileReadStream.on('error',function(err){  /*数据是一块一块  不是一次读取完成*/

    console.log(err);
})


