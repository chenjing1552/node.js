const fs = require('fs')

fs.readdir('logs', (error, files) => {
  if (error) {
    console.log(error)
  } else {
    console.log(files)
  }
})
