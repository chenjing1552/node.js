const fs = require('fs')

fs.stat('input.txt', (error, stats) =>{
  if(error){
    console.log(error)
  } else {
      console.log(`文件：${stats.isFile()}`)
    console.log(`目录：${stats.isDirectory()}`)
  }
})