/**
 * Created by Administrator on 2017/5/9 0009.
 */
var str='css/dmb.header.html';

//indexOf()

var start=str.lastIndexOf('.');

var end=str.length;

var str1=str.slice(start,end);

//str.substring('开始'，‘结束’)
//
//str.substr('开始'，'长度')

console.log(str1);