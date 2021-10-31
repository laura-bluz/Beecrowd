var input = require('fs').readFileSync('/Users/User/Desktop/Judge/Códigos/stdin', 'utf8');
var lines = input.split('\n');

var x = input.split('\n').map(item => parseInt(item));

for (let i = 0; i < 10; i++) {
    console.log("X["+i+"] =", trocaValor(x[i]));
}

function trocaValor(a) {
    if (a === 0 || a < 0) {
        a = 1;
    }
    return a;
}