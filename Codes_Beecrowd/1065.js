var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let a = input.split('\n').map(item => parseInt(item));
let i = 0, pares = 0;

for(; i < 5; i++){
    if((a[i] % 2) == 0)
        pares++;
}

console.log(pares + " valores pares");