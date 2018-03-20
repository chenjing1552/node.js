var mongodb = require('mongodb')

// 创建数据库服务的链接
var server = new mongodb.Server(
  'localhost',
  27017,
  { auto_reconnect: true}
)

// 创建数据的连接
var db = new mongodb.Db(
  'movies',
  server,
  { safe: true }  //安全模式链接
)

// 测试数据库连接
db.open(function(err, db){
  if (err) {
    console.log('log-' + err)
  } else {
    console.log('log-connect mongodb success!')
    db.collection('movie', {safe: true}, function(err, conn){
      if (err) {
        console.log(err)
      } else {
        conn.find({}, {title:1, year:1, _id:0}).limit(3).skip(3).toArray(function(err, res){
          if(!err) {
            res.forEach(function(value){
              console.log(value.title)
            })
          }
        })
      }
    })
  }
})