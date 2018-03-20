/**
 * Created by Administrator on 2017/5/7 0007.
 */
//安装一个第三方模块silly-datetime 格式化日期

//https://www.npmjs.com/package/silly-datetime

//1.下载silly-datetim包
//
// npm i silly-datetime --save



var sd = require('silly-datetime');


var d=sd.format(new Date(), 'YYYY-MM-DD HH:mm');

console.log(d);




