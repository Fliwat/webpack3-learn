// es module
import sum from './sum'

// commonjs
var minus = require('./minus')

// amd
require(['./muti'], function(muti) {
  console.log('muti(2, 3) =', muti(2, 3))
})

console.log('sum(24, 23) =', sum(24, 23))
console.log('minus(24, 23) =', minus(24, 23))