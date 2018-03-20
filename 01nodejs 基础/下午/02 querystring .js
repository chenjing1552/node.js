var http=require('http');

var url=require('url');

const querystring = require('querystring');

//
console.log(querystring.parse('name#%E5%BC%A0%E4%B8%89,age#20',',','#'));



//console.log(querystring.parse('name=张三&age=20'));

console.log(querystring.stringify({ name: '张三', age: '20' },',','#'))


  //http://nodejs.cn/api/querystring.html


  //querystring.stringify  字符串转换为对象





  //querystring.parse   foo=bar&abc=xyz&abc=123


  //escape  url编码
  //
  //unescape  url解码


console.log(querystring.unescape('%E5%BC%A0%E4%B8%89'));


console.log(querystring);

console.log(querystring.escape('你好'));