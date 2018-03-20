/**
 * Created by Administrator on 2017/5/11 0011.
 */

/**


 1.安装模块
 https://www.npmjs.com/package/multiparty


 cnpm install multiparty --save


 2.看demo

 var multiparty = require('multiparty');


 3. 接收post的数据的地方

 var form = new multiparty.Form();

 form.parse(req, function(err, fields, files) {

     fields post过来的表单的文本内容

     files 包含吗了post过来的图片信息

 });


 4.注意：无论在那个后端语言里面上传图片

    注意：文件图片上传在form表单中必须加入enctype="multipart/form-data"



 upload目录要存在








 */
var express=require('express')

var app=new express();
app.use(express.static('./static'));

app.use('/static',express.static('./static'));

var multiparty = require('multiparty');


//指定模板引擎
app.set('view engine','ejs');

//指定模板位置
app.set('views', __dirname + '/views');

app.get('/',function(req,res){
    res.render('upload');

})

app.post('/up',function(req,res){

        //接收post传过来的数据  图片信息

      var form = new multiparty.Form();

       //图片要上传到哪里

      form.uploadDir='./static/upload'  /*设置图片上传的路径*/
       form.parse(req, function(err, fields, files) {  /*解析post过来的数据*/
           console.log(fields.name[0]);  /*获取name  fields表单的数据*/

           //console.log(files);

           console.log(files.face[0].path);
           res.send(files.face[0].path);


       });



})



app.post('/upload',function(req,res){

    //接收post传过来的数据  图片信息

    var form = new multiparty.Form();

    //图片要上传到哪里

    form.uploadDir='./static/upload'  /*设置图片上传的路径*/
    form.parse(req, function(err, fields, files) {  /*解析post过来的数据*/
        //console.log(err);
        //console.log(fields);  /*获取name  fields表单的数据*/
        ////
        console.log(files);
        //
        //console.log(files.face[0].path);
        //res.send(files.face[0].path);

       var uploadurl=files.filedata[0].path
        //
        res.json({"err":"","msg":uploadurl});
    });

})


app.listen(8000,'127.0.0.1');
