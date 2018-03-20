/**
 * Created by Administrator on 2017/3/1 0001.
 */
var express=require('express');

var app=new express();   /*实例化 express*/
//通过 Express 内置的 express.static 可以方便地托管静态文件，例如图片、CSS、JavaScript 文件等。
var bodyParser = require('body-parser');

var mongoDb = require('mongodb');
var MongoClient=mongoDb.MongoClient;
var ObjectID = mongoDb.ObjectID;



var dbUrl = 'mongodb://localhost:27017/sheying';   /*数据库连接的地址和数据库*/
//指定模板引擎
app.set('view engine','ejs');
//指定模板位置
app.set('views', __dirname + '/views');



// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())



app.use(express.static('./static'));


/*显示首页  用户列表*/
app.get('/',function(req,res){
    /*数据库查询user的数据*/

    var userList=[];

    MongoClient.connect(dbUrl,function(err,db){

        if(err){
            console.log(err);
            console.log('数据库连接失败');
            return;
        }

        console.log('数据库连接成功');

        var rel=db.collection('user').find();

        rel.each(function(error,doc){

            if(doc!=null){
                userList.push(doc);
            }else{
                res.render('user/index',{
                    "userList":userList
                })
            }
        })


    })




})

app.get('/add',function(req,res){

    //加载添加数据的模板

    res.render('user/add');
})


app.post('/addPost',function(req,res){

    //接收表单传过来的数据

    console.log(req.body);


    var name=req.body.name;
    var age=req.body.age;
    var gonghao=req.body.gonghao;
    var bumeng=req.body.bumeng;

    MongoClient.connect(dbUrl,function(err,db){
        if(err){
            console.log(err);
            console.log('数据库连接失败');
            return;
        }
        db.collection('user').insertOne({
            "name":name,
            "age":age,
            "gonghao":gonghao,
            "bumeng":bumeng
        },function(error,data){

            if(error){
                console.log(error);
                return;
            }
            /*关闭数据库*/
            db.close();

            //res.render('user/success');

            res.redirect('/');


        })


    })





})

app.get('/edit',function(req,res){


    var id=req.query.id;   //直接获取url get传值


    //数据库查询数据


    var user=[];

    MongoClient.connect(dbUrl,function(err,db){

        if(err){
            console.log(err);
            console.log('数据库连接失败');
            return;
        }

        var rel=db.collection('user').find({"_id":new ObjectID(id)});
        rel.each(function(error,doc){

            if(error){
                console.log('数据查询失败');
                return;
            }

            if(doc!=null){

                user.push(doc)
            }else{  /*doc=null表示数据循环完成*/
                db.close();  /*关闭数据库*/

                console.log(user);
                /*渲染模板*/
                res.render('user/edit',{  /*注意数据必须是对象*/
                    "user":user[0]
                });
            }
        })


    })



})

app.post('/eidtPost',function(req,res){


    var id=req.body.id;
    var name=req.body.name;
    var age=req.body.age;
    var gonghao=req.body.gonghao;
    var bumeng=req.body.bumeng;

    MongoClient.connect(dbUrl,function(err,db){
        if(err){
            console.log(err);
            console.log('数据库连接失败');
            return;
        }

        db.collection('user').updateOne({"_id":new ObjectID(id)},{
            $set: {  /*注意$set*/

                "name":name,
                "age":age,
                "gonghao":gonghao,
                "bumeng":bumeng
            }
        },function(error,data){
            //提示
            /*关闭数据库*/
            db.close();

            //res.render('user/success');

            res.redirect('/');



        })

    })



})


app.get('/delete',function(req,res){

    var id=req.query.id;

    MongoClient.connect(dbUrl,function(err,db){

        if(err){
            console.log(err);
            return;
        }
        db.collection('user').deleteOne({'_id':new ObjectID(id)},function(error){
            if(error){

                console.log(error);
                return;
            }

            res.redirect('/')


        })


    })

})


app.listen(8010);
