var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var [a] = lines[0].split(' ').map(item => parseInt(item));
var tempo;
/*tempo = a / 3600;
console.log(Math.floor(tempo));
tempo = a % 3600; // minutos
tempo = tempo / 60;
console.log(Math.floor(tempo));
tempo = a % 60;
console.log(Math.floor(tempo)); // segundos */
console.log(Math.floor(a / 3600) + ":" + Math.floor((a % 3600) / 60)+ ":" + Math.floor(a % 60));    
