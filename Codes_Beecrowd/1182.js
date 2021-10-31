var input = require('fs').readFileSync('/Users/User/Desktop/Judge/Códigos/stdin', 'utf8');
var lines = input.split('\n');

let [C] = lines[0].split('\n').map(item => parseInt(item));
let op = lines[1].split('\n').map(item => item);
op = op[0].trim()

var vet = [], k = 0, soma = 0, media = 0;
let mat = [];

vet = input.split('\n').map(item => parseFloat(item));
vet.shift()
vet.shift()

for (let li = 0; li < 12; li++) {
    mat[li] = [];
    for (col = 0; col < 12; col++) {
        mat[li][col] = vet[k];
        if (col === C) {
            soma = mat[li][C] + soma;
        }
        k++;
    }
}
if (op === 'S')
    console.log(soma.toFixed(1));
else if (op === 'M')
    console.log((soma / 12).toFixed(1));