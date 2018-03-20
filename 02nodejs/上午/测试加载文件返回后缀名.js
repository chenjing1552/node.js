/**
 * Created by Administrator on 2017/5/9 0009.
 */

var  fs=require('fs');

fs.readFile('./mime.json',function(err,data){

   // console.log(data.toString());

    var mimeJson=JSON.parse(data.toString());  /*json 对象*/

    console.log(mimeJson['.json']);


    //
   //var obj= {
   //
   //     "name":'张三'
   // }
    //obj.name

})



