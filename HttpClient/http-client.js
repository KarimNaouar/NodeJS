let http = require('http')

http.get(process.argv[2], function (data) {
  data.setEncoding('utf8')
  data.on('data', console.log)
  data.on('error', console.error)}).on('error', console.error)
