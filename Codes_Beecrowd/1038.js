var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var [a, b] = input.split(' ').map(item => parseInt(item));
var valor;
/*
1 - Cachorro-quente  R$ 4.00
2 - X-salada         R$ 4.50
3 - X-bacon          R$ 5.00
4 - Torrada simples  R$ 2.00
5 - Refrigerante     R$ 1.50
*/

// a = cod item; b = qtdd item

if(a === 1){
    valor = b * 4.00;
    console.log("Total: R$ " + valor.toFixed(2));
} else if(a === 2){
    valor = b * 4.50;
    console.log("Total: R$ " + valor.toFixed(2));
}else if(a === 3){
    valor = b * 5.00;
    console.log("Total: R$ " + valor.toFixed(2));
}else if(a === 4){
    valor = b * 2.00;
    console.log("Total: R$ " + valor.toFixed(2));
}else if(a === 5){
    valor = b * 1.50;
    console.log("Total: R$ " + valor.toFixed(2));
}