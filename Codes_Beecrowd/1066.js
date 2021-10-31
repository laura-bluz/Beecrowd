var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let a = input.split('\n').map(item => parseInt(item));
let i = 0, pares = 0, impares = 0, positivos = 0, negativos = 0;

for(; i < 5; i++){
    if((a[i] % 2) === 0)
        pares++;
    if((a[i] % 2) !== 0)
        impares++;
    if((a[i] > 0))
        positivos++;
    if((a[i] < 0))
        negativos++;
}

console.log(pares + " valor(es) par(es)");
console.log(impares + " valor(es) impar(es)");
console.log(positivos + " valor(es) positivo(s)");
console.log(negativos + " valor(es) negativo(s)");