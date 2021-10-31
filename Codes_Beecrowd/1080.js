var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var valor = input.split('\n').map(item => parseInt(item));
var maior = valor[0], posi = 0, i = 1;

for(; i < 100; i++){
    if(valor[i] > maior){
        maior = valor[i];
        posi = i + 1;
    }
}
console.log(maior);
console.log(posi);

