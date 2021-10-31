var input = require('fs').readFileSync('/Users/User/Desktop/Judge/Códigos/stdin', 'utf8');
var lines = input.split('\n');

var N = input.split('\n').map(item => parseInt(item));

let i = 19, x = [], j = 0;
for (; i >= 0; i--) {
    x[i] = N[i];
    console.log("N["+j+"] = "+x[i]);
    j++;
}