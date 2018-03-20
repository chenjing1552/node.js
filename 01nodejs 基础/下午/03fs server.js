/**
 * Created by Administrator on 2017/3/16 0016.
 */

//nodejs 提供的文件操作模块

var fs=require('fs');

/*
 fs.stat()    fs.mkdir()

 fs.writeFile()    fs.appendFile()  fs.readFile()    fs.readdir()   fs.rename()   fs.rmdir()  fs.unlink()

* */






//1.fs.stat  检测是文件还是目录

    //参数 1.错误  2.返回的信息

    fs.stat('html',function(error,state){

        if(error){

            console.log(error);
            return;
        }
        //
        //
        //state.isDirectory();  /*目录返回 true  false*/
        //
        //state.isFile();   /*文件返回 true  false*/


        console.log(`目录:${state.isDirectory()},文件：${state.isFile()}`);


    })


//2.创建文件夹fs.mkdir

//fs.mkdir('js',function(err){
//    if(err){  /*错误*/
//
//        console.log(err);
//        return;
//    }
//    console.log('创建成功');
//
//})
//




//不存在的时候创建目录  存在不做操作

//fs.stat() //检测是目录还是文件

//fs.mkdir() 创建
//
//fs.stat('css',function(err,state){
//
//    if(err){  /*不存在   创建*/
//
//        fs.mkdir('css',function(error){
//            if(error){
//
//                console.log(error);//创建失败
//
//                return;
//            }
//
//            console.log('成功');
//        })
//
//    }
//
//})
//
//
//














//3.写入文件  会覆盖以前的内容 fs.writeFile()      给文件追加内容fs.appendFile()

//
//var str='这是写入的内容这是写入的内容这是写入的内容这是写入的内容这是写入的内容'

//fs.writeFile('text.txt',str,function(err){
//
//    if(err){
//
//        console.log(err);
//        return;
//    }
//    console.log('成功');
//
//})
//

//
//
//var str='这是写入的\n111111内容这是写入的内容这是写入的内容这是写入的内容这是写入的内容11'
//
//fs.appendFile('t.txt',str,function(err){
//
//    if(err){
//
//        console.log(err);
//        return;
//    }
//    console.log('成功');
//
//})







//5.读取文件    fs.readFile()


fs.readFile('./html/index.html',function(err,data){
    if(err){

        console.log(err);
        return;
    }

    //console.log(data);    /*Buffer 二进制的内容*/
    console.log(data.toString());


})


//fs.readFileSync


//
//fs.readFile('./html/index.html',(err,data)=>{
//
//    if(err){
//
//        console.log(err);
//        return;
//    }
//
//    //console.log(data);    /*Buffer 二进制的内容*/
//    console.log(data.toString());
//
//})
//






//6.readdir读取目录         返回文件夹里面的所有的文件和目录

//
//fs.readdir('html',function(err,files){
//
//    if(err){
//
//        console.log(err);
//        return;
//    }
//
//   console.log(files);
//
//})





//7.fs.rename 1.重新命名       2.实现剪切功能


//fs.rename('./html/test.txt','./html/t1.txt',function(err){
//
//    if(err){
//
//        console.log(err);
//
//        return;
//    }
//    console.log('chenggong');
//
//})


//
//fs.rename('./html/t1.txt','./html/css/text.txt',function(err){
//
//    if(err){
//
//        console.log(err);
//
//        return;
//    }
//    console.log('chenggong');
//
//})




//fs.rmdir 删除目录

//fs.rmdir('haha',function(err){
//    if(err){
//
//        console.log(err);
//        return;
//    }
//  console.log('成功了');
//
//})


//fs.rmdir('haha',(err)=>{
//    if(err){
//
//        console.log(err);
//        return;
//    }
//  console.log('成功了');
//
//})



//fs.rmdir('t.txt',(err)=>{   /*没法删除文件*/
//    if(err){
//
//        console.log(err);
//        return;
//    }
//  console.log('成功了');
//
//})




//删除文件  fs.unlink


fs.unlink('t.txt',(err)=>{
    if(err){

        console.log(err);
        return;
    }
  console.log('成功了');

})


