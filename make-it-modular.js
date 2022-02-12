const callback = require('./mymodule.js')

const fs = require('fs')
const pathName = process.argv[2];
const extexsion = process.argv[3];
callback(pathName, extexsion)

