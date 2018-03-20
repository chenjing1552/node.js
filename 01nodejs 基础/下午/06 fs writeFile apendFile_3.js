const fs = require('fs')

fs.writeFile('logs/hello.log', '您好 ~ \n', (error) => {
  if(error) {
    console.log(error)
  } else {
    console.log('成功写入文件')
  }
})

fs.appendFile('logs/hello.log', 'hello ~ \n', (error) => {
  if(error) {
    console.log(error)
  } else {
    console.log('成功写入文件')
  }
})

