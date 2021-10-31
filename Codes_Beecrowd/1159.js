var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var x = input.split('\n').map(item => parseInt(item));

for (let i = 0; ; i++) {
    if (x[i] === 0)
        break;
    console.log(somarNumerosParesConsec(x[i]));
}

function somarNumerosParesConsec(a) {
    let soma = 0, j = 0;
    for (; j < 5; a++) {
        if ((a % 2) === 0) {
            soma = soma + a;
            j++;
        }
    }
    return soma;
}
