var input = require('fs').readFileSync('/Users/User/Desktop/Judge/Códigos/stdin', 'utf8');
var lines = input.split('\n');

let [n] = input.split('\n').map(item => parseInt(item));
let x = lines[1].split(' ').map(item => parseInt(item));
let menor = 0, i = 1, posi = 0;

menor = x[0];
for (; i < n; i++) {
    if (menor > x[i]) {
        menor = x[i];
        posi = i;
    }
}
console.log("Menor valor: " + menor);
console.log("Posicao: " + posi);