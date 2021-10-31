var input = require('fs').readFileSync('/Users/User/Desktop/Judge/Códigos/stdin', 'utf8');
var lines = input.split('\n');

let n = input.split('\n').map(item => parseInt(item));
let vetpar = [], vetimpar = [], j = 0, i = 0, k = 0;

for (let i = 0; i < 15; i++) {
    if (n[i] % 2 === 0) { // par
        if (k < 5) {
            vetpar[k] = n[i];
            k++;
        }
        else {
            printaVetor('par', vetpar);
            vetpar = [];
            k = 0;
            vetpar[k] = n[i];
            k++;
        }

    }
    else { //impar
        if (j < 5) {
            vetimpar[j] = n[i];
            j++;
        }
        else {
            printaVetor('impar', vetimpar);
            vetimpar = [];
            j = 0;
            vetimpar[j] = n[i];
            j++;
        }
    }
}
printaVetor('impar', vetimpar);
printaVetor('par', vetpar);

function printaVetor(tipo, v) {
    for (let i = 0; i < v.length; i++) {
        console.log(tipo + "[" + i + "] = " + v[i]);
    }
}

// ----- SOLUÇÃO ALTERNATIVA -----
/*for (let i = 0; i < 15; i++) {
    if (n[i] % 2 === 0) { // par
        vetpar[k] = n[i];
        k++;
        if (k === 5) {
            printaVetor('par', vetpar);
            vetpar = [];
            k = 0;
        }
    }
    else { //impar
        vetimpar[j] = n[i];
        j++;
        if (j === 5) {
            printaVetor('impar', vetimpar);
            vetimpar = [];
            j = 0;
        }
    }
}*/