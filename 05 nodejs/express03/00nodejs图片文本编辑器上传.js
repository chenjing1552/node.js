/**
 * Created by Administrator on 2017/5/11 0011.
 */

/**

 八、	express  xheditor文本编辑器使用
 1.	下载xheditor 放入程序静态目录中：

 注意: 必须设置静态目录  app.use(express.static(path.join(__dirname, 'static')));

 http://xheditor.com/download.html

 2.在模板中引入 xheditor
 <script src="./xheditor/jquery/jquery-1.11.2.min.js" charset="utf-8"></script>
 <script src="./xheditor/xheditor-1.2.2.min.js" charset="utf-8"></script>
 <script src="./xheditor/xheditor_lang/zh-cn.js" charset="utf-8"></script>

 3.在模板中定义 textarea 显示编辑器

 <textarea name="yuwen" id="content" cols="120" rows="30"></textarea>

 4.配置参数

 $('#content').xheditor({
        tools:'full',
        skin:'default',
        width:500, height:400,
        upImgUrl:"/upload",
        upImgExt:"jpg,jpeg,gif,png"
    });

 5.在服务中书写上传方法








 */
var express=require('express');
var multiparty = require('multiparty');
var bodyParser = require('body-parser')

var DB=require('./model/db')

var Mongo=require('mongodb');

var ObjectID=Mongo.ObjectID;


var app=new express();
app.use(express.static('./static'));



app.use('/static',express.static('./static'));

//post回去数据
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())




//指定模板引擎
app.set('view engine','ejs');

//指定模板位置
app.set('views', __dirname + '/views');



app.get('/',function(req,res){
    //res.render('index');

   // console.log(DB);

    DB.find('article',{},function(err,data){
        res.render('index',{

            "list":data
        })
    })

    //查询数据

})




app.get('/add',function(req,res){
    res.render('add');

})
app.post('/addPost',function(req,res){

    var form = new multiparty.Form();
    form.uploadDir='./static/upload'  /*设置图片上传的路径*/

    form.parse(req, function(err, fields, files) {
        console.log(fields);

        var title=fields.title[0];
        var catid=fields.catid[0];
        var content=fields.content[0];

        DB.insertOne('article',{
            "title":title,
            "catid":catid,
            "content":content
        }, function (err,data) {
            if(err){
                console.log(err);
                return;
            }

            res.redirect('/');
        })

    });



})

//新闻详情

app.get('/newscontent',function(req,res){

    var id=req.query.id;

    DB.find('article',{"_id":new ObjectID(id)},function(err,data){

        console.log(data);
        res.render('newscontent',{

            "news":data[0]
        })
    })




})



//给编辑器提供的上传图片的接口
app.post('/upload',function(req,res){


    var form = new multiparty.Form();
    form.uploadDir='./static/upload'  /*设置图片上传的路径*/

    form.parse(req, function(err, fields, files) {

        //fields post过来的表单的文本内容
        //
        //files 包含吗了post过来的图片信息

        console.log(fields);

        console.log(files);

        var path=files.filedata[0].path;


        res.json({"err":"","msg":path})  /*给编辑器返回地址信息*/

    });
})

app.listen(8000,'127.0.0.1');
