//blocking
const fs = require('fs')
const path = require('path')

const result= fs.readFileSync(path.join(__dirname,))
console.log(result)
console.log('hi')