/**
 * Created by Administrator on 2017/5/9 0009.
 */
var events=require('events');

console.log(events);

var E=new events.EventEmitter();


var login=function dologin(){

    console.log('接收到了广播');
}

E.on('dologin',login);


setTimeout(function(){

    E.emit('dologin');
},2000)
