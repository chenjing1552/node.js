const fs = require('fs')

fs.rename('js/hello.log', 'js/greeting.log', (error) =>{
  if (error) {
    console.log(error)
  } else {
    console.log('重命名成功')
  }
})