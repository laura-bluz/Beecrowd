var input = require('fs').readFileSync('/Users/User/Desktop/Judge/Beecrowd/Codes_Beecrowd/stdin', 'utf8');
var lines = input.split('\n');

let op = lines[0].split('\n').map(item => item);
op = op[0].trim()

var vet = [], k = 0, soma = 0, media = 0;
let mat = [], aux = 11;

vet = input.split('\n').map(item => parseFloat(item));
vet.shift()

for (let li = 0; li < 12; li++) {
    mat[li] = [];
    for (col = 0; col < 12; col++) {
        mat[li][col] = vet[k];
        if (col < li && col > aux)
            soma = mat[li][col] + soma;
        k++;
    }
    aux--;
}
if (op === 'S')
    console.log(soma.toFixed(1));
else if (op === 'M')
    console.log((soma / 30).toFixed(1));