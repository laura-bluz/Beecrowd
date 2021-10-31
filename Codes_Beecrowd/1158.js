var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var [N] = lines[0].split('\n').map(item => parseInt(item));
var x = input.split('\n').map(item => parseInt(item));
var y = input.split(' ').map(item => parseInt(item));
x.shift();
y.shift();
let soma = 0, somaimpar = 0;

for (let i = 0; i < N; i++) {
    console.log(somarNumerosImparesConsec(x[i], y[i]));
}

function somarNumerosImparesConsec(a, b) {
    let soma = 0, j = 0;
    for (; j < b; a++) {
      if ((a % 2) !== 0) {
        soma = soma + a;
        j++;
      }
    }
    return soma;
  }

