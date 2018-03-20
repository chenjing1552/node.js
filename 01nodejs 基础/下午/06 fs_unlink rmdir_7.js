const fs = require('fs')

fs.readdirSync('logs').map((file) => {
  fs.unlink(`logs/${file}`, (error) => {
    if (error) {
      console.log(error)
    } else {
      console.log(`成功的删除了文件: ${file}`)
    }
  })
})

fs.rmdir('logs', (error) =>{
  if (error) {
    console.log(error)
  } else {
    console.log('成功的删除了目录：logs')
  }
})