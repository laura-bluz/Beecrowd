var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let [x, ...z] = input.split('\n').map(item => parseInt(item));
let cont = 1;
/*Faça um programa que leia dois inteiros: X e Z
 (devem ser lidos tantos valores para Z quantos necessários,
até que seja digitado um valor maior do que X para ele)*/
for (let i = 0; ; i++) {
    if (z[i] > x) {
        z = z[i];
        break;
    }
}

/* Conte quantos números inteiros devem ser somados em sequência (considerando o X nesta soma)
 para que a soma ultrapasse a Z o mínimo possível. Escreva o valor final da contagem. */
for (i = x + 1; x <= z; i++) {
    x = x + i;
    cont++; 
}
console.log(cont);