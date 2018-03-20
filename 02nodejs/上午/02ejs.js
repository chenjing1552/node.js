/**
 ejs  nodejs的模板引擎

 它是nodejs后台和前端html页面的一个桥梁


 可以把后台的数据渲染到前台html页面上面


 1.安装
 npm install ejs

 npm install ejs  --save



 package.json管理模块依赖


 */

var ejs = require("ejs");

//前台模板 html页面
var string = "好高兴啊，今天我买了iphone<%= a %>s  <%= title %>";


//后台数据  nodejs
var data = {
    a : 7,
   title:'哈哈哈'
};

//数据绑定
var html = ejs.render(string, data);  /*1.模板   2.数据*/
//输出
console.log(html);