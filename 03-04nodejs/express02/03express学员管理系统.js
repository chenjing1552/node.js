//模块  express   cnpm install express -save

//   mongodb      cnpm install mongodb -save


//   ejs        cnpm install ejs  -save


//body-parser   cnpm install body-parser  -save


//cnpm install 表示安装package.json里面所有的依赖


//需求：1.学员列表    2.增加学员  3.修改学员   4.删除学员

var urlModel=require('url');
var express=require('express');
var MongoClient=require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectID;  /*用来操作mongodb自己生成_id*/


var bodyParser = require('body-parser')


var url="mongodb://127.0.0.1:27017/news";

var app=new express();


app.set('view engine','ejs');  /*使用ejs模板引擎*/

app.set('views', __dirname + '/views');  /*设置模板的路径*/


//post回去数据
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())



///css/basic.css  配置静态路由 用于加载静态js css 图片

app.use(express.static('static'));

///  static/upload/2KJfulk-lqlB7-dUcDnKYT76.jpg



app.get('/',function(req,res){  //1.学员列表

    //res.send('所有的学员信息');
    //查询学员信息
    MongoClient.connect(url,function(err,db){
        if(err){
            console.log(err);
            return;
        }
        //查询信息
       var result=db.collection('user').find();

      //  console.log(result);

        var list=[];

        result.each(function(err,doc){

            if(doc!=null){

                list.push(doc);
            }else{

                db.close();

                console.log(list);

                //渲染模板

                res.render('index',{
                    list:list
                });
            }

        })


    })



    //res.render('index',{});



})

//显示添加用户的页面
app.get('/add',function(req,res){  //2.增加学员

    res.render('add',{});
})


//提交数据
app.post('/addPost',function(req,res){  //2.增加学员

    //res.render('add',{});

    console.log(req.body);

    //获取文本框的值 写入数据库

    var name=req.body.name;
    var age=req.body.age;
    var num=req.body.xuehao;

    MongoClient.connect(url,function(err,db){
        if(err){
            console.log(err);
            return;
        }
        //写入数据
        db.collection('user').insertOne({"name":name,"age":age,"num":num},function(err){

            if(err){
                console.log(err);
                return;
            }
            //成功
            //res.redirect('/');	//重定向请求。

            res.render('success',{
                msg:'增加用户成功'
            })

        })


    })


})




app.get('/edit/:id',function(req,res){  //1.学员列表


    var id=req.params.id;
    console.log(id);

    //那这个ID的学员信息
    MongoClient.connect(url,function(err,db){
        if(err){
            console.log(err);
            return;
        }
        //查询信息
        var result=db.collection('user').find({"_id":new ObjectId(id)});  /*注意写法*/

        var list=[];

        result.each(function(err,doc){

            if(doc!=null){

                list.push(doc);
            }else{

                db.close();

                console.log(list);
                //渲染模板

                res.render('edit',{

                    userInfo:list[0]
                });
            }

        })


    })


})

app.post('/editPost',function(req,res){  //1.学员列表
    //干啥  获取数据
    //获取文本框的值 写入数据库
    var id=req.body.id;  /*获取隐藏表单里面的数据*/
    var name=req.body.name;
    var age=req.body.age;
    var num=req.body.xuehao;

    MongoClient.connect(url,function(err,db){

        if(err){
            console.log(err);
            return;
        }
        db.collection('user').updateOne({"_id":new ObjectId(id)},{$set:{
            "name":name,
            "age":age,
            "num":num
        }},function(err){
            if(err){
                console.log(err);
                return;
            }
            //
            res.render('success',{
                msg:'修改数据成功'
            })

        })


    })


})



app.get('/delete',function(req,res){  //1.学员列表
    //console.log(urlModel);
    var id=urlModel.parse(req.url,true).query.id;
    //
    ////console.log(id);
    //res.send('删除学员信息');

    MongoClient.connect(url,function(err,db){

        db.collection('user').deleteOne({"_id":new ObjectId(id)},function(err){

            if(err){
                console.log(err);
                return;
            }
            //
            res.render('success',{
                msg:'删除数据成功'
            })
        });

    })


})




app.listen(3001,'127.0.0.1');





