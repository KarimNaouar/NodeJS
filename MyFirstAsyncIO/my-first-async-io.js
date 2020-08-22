const fs= require('fs') 
fs.readFile(process.argv[2], function (err, buff){
const str = buff.toString()
let n=str.split('\n').length-1
// console.log(str)
console.log(n)
})
