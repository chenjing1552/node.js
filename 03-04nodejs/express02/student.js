/**
 * Created by Administrator on 2017/5/12.
 */
var express = require('express');
var app = new express();
app.set('view engine','ejs');

var MongoClient=require('mongodb').MongoClient;
var DBurl = "mongodb://127.0.0.1:27017/news";
var ObjectId = require('mongodb').ObjectID;

var multiparty = require('multiparty');

app.use(express.static('static'));

var url = require('url');


//学员列表
app.get('/',function(req,res){
    MongoClient.connect(DBurl,function(error,db){
        if(error){
            console.log(error);
            return;
        }
        var result = db.collection('student').find();
        var arr = [];
        result.each(function(err,doc){
            if(doc != null){
                arr.push(doc);
            }else{
                console.log(arr);
                res.render('index',{stuList:arr})
            }
        })
    })
})

//增加
app.get('/add',function(req,res){
    res.render('add');

})


//增加post
app.post('/addPost',function(req,res) {
    //res.send('sddd');
    var form = new multiparty.Form();
    //图片要上传到哪里
    form.uploadDir = './static/upload'
    /*设置图片上传的路径*/
    form.parse(req, function(err, fields, files) {  /*解析post过来的数据*/
        //console.log(fields.name[0]);  /*获取name  fields表单的数据*/
        //console.log(files.face[0].path);

        console.log(fields);

    })

})




//修改
app.get('/edit/:id',function(req,res){
    var oId = req.params.id;
    MongoClient.connect(DBurl,function(error,db){
        if(error){
            console.log(error);
            return;
        }
        var result = db.collection('student').find({'_id':new ObjectId(oId)});
        var arr = [];
        resule.each(function(err,doc){
            if(doc != null){
                arr.push(doc);
            }else{
                console.log(arr);
                res.render('edit',{editList:arr[0]})
            }
        })
    })

})

//修改post
app.post('/editPost',function(req,res) {
    var form = new multiparty.Form();

    //图片要上传到哪里

    form.uploadDir = './static/upload'
    /*设置图片上传的路径*/
    form.parse(req, function (err, fields, files) {  /*解析post过来的数据*/
        //console.log(fields.name[0]);  /*获取name  fields表单的数据*/
        //console.log(files.face[0].path);
        var oId = fields.id[0]
        var stuName = fields.stuName[0];
        var stuId = fields.stuId[0];
        var stuAge = fields.stuAge[0];
        var stuInfo = fields.stuInfo[0];
        var face = files.face[0].path;
        MongoClient.connect(DBurl, function (error, db) {
            if (error) {
                console.log(error);
                return;
            }
            db.collection('student').updateOne({'_id':new ObjectId(oId)},{$set:{
                "stuName":stuName,
                "stuId":stuId,
                "stuAge":stuAge,
                "stuInfo":stuInfo,
                "face":face
            }},function(err){
                if(err){
                    console.log(err);
                    return;
                }
                res.render('success',{msg:'修改数据成功'})
            })
        })
    })
})

//删除
app.get('/delet',function(req,res){
    var oId = url.parse(req.url,true).query.id;
    MongoClient.connect(DBurl, function (error, db){

        db.collection('student').deleteOne({'_id':new ObjectId(oId)},function(err){

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

app.listen(3000,'127.0.0.1')