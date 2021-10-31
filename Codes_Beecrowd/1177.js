var input = require('fs').readFileSync('/Users/User/Desktop/Judge/Códigos/stdin', 'utf8');
var lines = input.split('\n');

let [n] = input.split('\n').map(item => parseInt(item));
let i = 0, j = 0, x = [];

for (i = 0; i < 1000;) {
    if (n === 0) {
        i = 0;
        console.log(i);
    }
    for (j = 0; j < n && i < 1000; j++) {
        x[i] = j;
        console.log("N[" + i + "] =", x[i]);
        i++;
    }
}