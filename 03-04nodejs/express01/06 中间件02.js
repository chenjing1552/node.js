/**
 * Created by Danny on 2015/9/22 10:22.
 */
var express = require("express");
var fs = require("fs");

var app = express();

//index.html   news.html    /login
//
////当你不写路径的时候，实际上就相当于"/"，就是所有网址

app.use(function(req,res,next){

    var pathname=req.url;
    fs.readFile('./static'+pathname, function (err, data) {


        if(err){
            console.log(err);
            next();
            return;
        }

        console.log(data);
        //res.send(data);

        res.write(data);

        res.end();

    })

})



app.get("/login",function(req,res){
    res.send("login");
})

app.get("/register",function(req,res){
    res.send("register");
})

app.listen(3000);

