var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let [a, ...n] = input.split(' ').map(item => parseInt(item));
let x = 0, soma = 0, i = 0;

for (; ; i++) {
    if (n[i] > 0) {
        x = n[i];
        break;
    }
}
i = 0;
while(i <= a){
    soma = soma + i;
    i++;
}
i = 0;
while(i < x){
    soma = soma + i;
    i++;
}
console.log(soma);
