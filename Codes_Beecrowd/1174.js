var input = require('fs').readFileSync('/Users/User/Desktop/Judge/Códigos/stdin', 'utf8');
var lines = input.split('\n');

var A = input.split('\n').map(item => parseFloat(item));

let i = 1;
if (A[0] <= 0)
    console.log("A[0] =", A[0].toFixed(1));
for (; i <= 100; i++) {
    if (A[i] <= 10)
        console.log("A[" + i + "] =", A[i].toFixed(1));
}