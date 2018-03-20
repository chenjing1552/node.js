const fs = require('fs')

fs.readFile('logs/hello.log', 'utf8', (error, data) =>{
  if (error) {
    console.log(error)
  } else {
    console.log(data)
  }
})

