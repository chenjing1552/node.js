/**
 * Created by Administrator on 2017/5/9 0009.
 */



function getData(callback){
    console.log('1');
    var name='';

    setTimeout(function(){  /*异步*/

        name='张三';
        console.log('3');
        callback(name);
    },1000);
    console.log('2');


}

//console.log(getData());

getData(function(d){
    console.log(d);

})