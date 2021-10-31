var input = require('fs').readFileSync('/Users/User/Desktop/Judge/Códigos/stdin', 'utf8');
var lines = input.split('\n');

var x = input.split('\n').map(item => parseInt(item));

let i = 1;
console.log("N[0] =", x[0]); 
for (; i < 10; i++) {
     x[i] = x[i-1] * 2;
     console.log("N[" + i + "] =", x[i]);   
}