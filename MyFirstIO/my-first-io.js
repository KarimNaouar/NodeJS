const fs= require('fs')
let buf=fs.readFileSync(process.argv[2])
const str = buf.toString()
let n=str.split('\n').length-1
// console.log(str)
console.log(n)