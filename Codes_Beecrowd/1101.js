var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let x = input.split('\n').map(item => parseInt(item));
let y = input.split(' ').map(item => parseInt(item));
let aux = 0;
y.shift();

for (let i = 0; ; i++) {
  if(x[i] <= 0 || y[i] <= 0)
    break;  
  if (x[i] > y[i]) {
      aux = x[i];
      x[i] = y[i];
      y[i] = aux;
    }
    console.log("Sum="+ somarNumerosNoIntervalo(x[i], y[i]));
}

function somarNumerosNoIntervalo(a, b) {
    let soma = 0;
      while (a <= b) {
        process.stdout.write((a + " "));
            soma = soma + a;
        a++;
      }
    return soma;
}