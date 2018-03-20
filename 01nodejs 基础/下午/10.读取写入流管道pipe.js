const fs = require('fs')
const zlib = require('zlib')

var fileReadStream = fs.createReadStream('data.json')
var fileWriteStream = fs.createWriteStream('data.json.gz')




fileReadStream
  .pipe(zlib.createGzip())
  .pipe(fileWriteStream);


fileWriteStream.on('pipe', (source) => {
  console.log(source)
})