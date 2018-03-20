/**
 * Created by Administrator on 2017/5/8 0008.
 */

var name='zhangsan111';

var app={

    getName:function(){

        console.log(name);
    }
}

//exports.name=name;  /*暴露name*/


exports.app=app;  /*暴露app对象*/
