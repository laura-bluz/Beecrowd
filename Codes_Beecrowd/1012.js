var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var [a, b, c] = lines[0].split(' ').map(item => parseFloat(item));
var tri, circ, trapez, quad, retang;

tri = (a * c) /2;
console.log("TRIANGULO: " + tri.toFixed(3));

circ = 3.14159 * (c * c);  
console.log("CIRCULO: " + circ.toFixed(3));

trapez = ((a + b)/2) * c;
console.log("TRAPEZIO: " + trapez.toFixed(3));

quad = b * b;
console.log("QUADRADO: " + quad.toFixed(3));

retang = a * b;
console.log("RETANGULO: " + retang.toFixed(3));