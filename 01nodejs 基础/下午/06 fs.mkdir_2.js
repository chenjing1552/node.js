const fs = require('fs')

fs.mkdir('logs', (error) => {
  if(error){
    console.log(error)
  } else {
    console.log('成功创建目录：logs')
  }
})