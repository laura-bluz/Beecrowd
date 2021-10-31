var input = require('fs').readFileSync('/Users/User/Desktop/Judge/Códigos/stdin', 'utf8');
var lines = input.split('\n');

let [n] = input.split('\n').map(item => parseFloat(item));
let i = 0, x = [], teste = 0;

x[i] = n.toFixed(4);
for (; i < 100;) {
    console.log("N[" + i + "] = " + x[i].toLocaleString('en-US', { minimumFractionDigits: 4, useGrouping: false }));
    i++;
    x[i] = x[i - 1] / 2;
    
}
