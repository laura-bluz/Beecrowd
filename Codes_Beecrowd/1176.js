var input = require('fs').readFileSync('/Users/User/Desktop/Judge/Códigos/stdin', 'utf8');
var lines = input.split('\n');

let [n] = input.split('\n').map(item => parseInt(item));
let x = input.split('\n').map(item => parseInt(item));
let i = 1, j = 0;

for (; i <= n; i++) {
    console.log("Fib(" + x[i] + ") = " + calculaFibonacci(x[i]));
}

function calculaFibonacci(n) {
    let i = 1, atual = 1, anterior = 0, aux = 0;
    if (n === 0)
        return 0;
    else {
        for (; i < n; i++) {
            aux = anterior + atual; // 0 + 1, 1+1,1+2,
            anterior = atual; // 1, 2,
            atual = aux; // 1, 2, 3
        }
    }
    return atual;
}