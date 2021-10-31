var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let n = input.split('\n').map(item => parseInt(item));
let idade = 0, somatodos = 0;

for (let i = 0;; i++) {
    if (n[i] < 0){
        idade = somatodos / i;
        break;
    }
    else
        somatodos = somatodos + n[i];
}
console.log(idade.toFixed(2));