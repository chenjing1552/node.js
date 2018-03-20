var async = require('async')

//series: 串行执行，一个函数数组中的每个函数，每一个函数执行完成之后才能执行下一个函数。

//parallel：并行(parallel)  并行无关联   一个函数数组中的每个函数同步执行。
//
//console.time('test');
//async.series([
//
//    function(callback){
//
//          setTimeout(function(){
//             callback(null, 'one')
//         }, 2000)
//
//    }, function (callback) {
//        setTimeout(function(){
//            callback(null, 'one')
//        }, 3000)
//    }
//], function (err,data) {
//
//    console.log(data);
//    console.timeEnd('test');
//
//})

//console.time('test')
//// 串行无关联
// async.series([
//     function (callback) {
//         setTimeout(function(){
//             callback(null, 'one')
//         }, 2000)
//     },
//     function (callback) {
//         setTimeout(function(){
//             callback(null, 'two')
//         }, 5000)
//     }
// ], function(err, results){
//   console.log(results)
//   console.timeEnd('test')
// })
////
// async.series({
//   one: function (callback) {
//     setTimeout(function(){
//       callback(null, '1')
//     }, 1000)
//   },
//   two: function (callback) {
//     setTimeout(function(){
//       callback(null, '2')
//     }, 2000)
//   }
// }, function(err, results){
//   console.log(results)
//   console.timeEnd('test')
// })

console.time('test');
// 并行无关联
 async.parallel({
   one:function (callback) {
     setTimeout(function(){
       callback(null, 'one')
     }, 2000)
   },
    two:function (callback) {
     setTimeout(function(){
       callback(null, 'two')
     }, 5000)
   }
 }, function(err, results){
    console.log(results)
    console.timeEnd('test')
 })

// 串行有关联
//async.waterfall([
//  function (callback) {
//    callback(null, 'one', 'two')
//  },
//  function (arr1, arr2, callback) {
//    callback(null, arr1, arr2, 'three')
//  },
//  function (arr1, arr2, arr3, callback) {
//    callback(null, [arr1, arr2, arr3, 'done'])
//  }
//], function(err, results){
//  console.log(results)
//})