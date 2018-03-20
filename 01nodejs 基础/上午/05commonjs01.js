/**
 * Created by Administrator on 2017/5/7 0007.
 */
/**
 * Created by Administrator on 2017/5/7 0007.
 */

var http=require('http');


var con=require('./config.js');//引入模块   注意：自定义模块引入的时候得加  ./     (./表示当前目录)

var app=http.createServer(function(req,res){

    //  res.write('hello nodejs');
    res.writeHead(200,{"Content-Type":"text/html;charset='utf-8'"});
    res.write('你好 nodejs');

    console.log(con.str);

    res.end();/*结束响应  程序执行完成以后必须写 res.end()*/


})

app.listen(8100,'127.0.0.1');  /*配置服务器的端口 和地址*/



/*模块化


commonjs 模块化的标准 nodejs是它的实现


1.把公共的功能封装成一个模块,这个模块里面的方法或者属性默认外面是没法方法的。我们如果要让外部访问我们的模块，

就必须在模块里面通过  exports.str=str; 暴露模块


2.暴露以后 外部通过require的方式引入这个模块。这个时候就可以使用模块里面暴露的属性和方法。

* */