/**
 * Created by Administrator on 2017/5/12 0012.
 */
//封装数据库操作


var Mongo=require('mongodb');

var Config=require("./config.js")

var MongoClient=Mongo.MongoClient;

var ObjectID=Mongo.ObjectID;

//数据库连接的方法
function _connectDB(callback){

    MongoClient.connect(Config.dbUrl,function(err,db){

        if(err){
            console.log(err);
            return;
        }
        callback(db);

    })

}

//封装插入数据的方法
//json  数据

exports.insertOne=function(collectionName,json,callback){

    _connectDB(function(db){
        db.collection(collectionName).insertOne(json,function(err,data){

            callback(err,data);
        })

    })

}

//封装插入数据的方法
//json  数据

