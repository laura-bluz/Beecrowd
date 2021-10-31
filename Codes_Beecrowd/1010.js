var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var [a, b, c]= lines[0].split(' ').map(item => parseFloat(item));
var [d, e, f]= lines[1].split(' ').map(item => parseFloat(item));

valor = ((b * c) + (e * f));
console.log("VALOR A PAGAR: R$ " + valor.toFixed(2));

/* var [a, b, c, d]= input.split('\n').map(item => (item));
var valor;

valor = ((a[3] * c) + (b[3] * d));
console.log("VALOR A PAGAR: R$ " + valor.toFixed(2)); */