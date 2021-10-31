var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let [x, y] = input.split('\n').map(item => parseInt(item));
let valores = 0;
if(x > y){
    aux = y;
    y = x;
    x = aux;
}

for (let i = x; i <= y; i++) {
    if ((i % 13) !== 0)
        valores = valores + i;
}
console.log(valores);