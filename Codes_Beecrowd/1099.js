var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var [N] = lines[0].split('\n').map(item => parseInt(item));
var x = input.split('\n').map(item => parseInt(item));
var y = input.split(' ').map(item => parseInt(item));
var  i = 1;

for (let i = 1; i <= N; i++) {
  if (x[i] > y[i]) {
    aux = x[i];
    x[i] = y[i];
    y[i] = aux;
  }
  console.log(somarImparesNoIntervalo(x[i], y[i]));
}

function somarImparesNoIntervalo(a, b) {//ela funciona
  let valor = 0;
  a++;
  while (a < b) {
      if ((a % 2) !== 0) {
          valor = valor + a;
      }
      a++;
  }
  return valor;
}