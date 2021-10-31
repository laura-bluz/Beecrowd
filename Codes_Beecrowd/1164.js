var input = require('fs').readFileSync('/Users/User/Desktop/Judge/Códigos/stdin', 'utf8');
var lines = input.split('\n');

var [N] = lines[0].split('\n').map(item => parseInt(item));
var x = input.split('\n').map(item => parseInt(item));

for (let i = 1; i <= N; i++) {
    if (verificarNroPerfeito(x[i]))
        console.log(x[i] + " eh perfeito");
    else
        console.log(x[i] + " nao eh perfeito");
}

function verificarNroPerfeito(n) {
    let x = 0, soma = 0;
    if (n % 2 !== 0)
        return false;
    x = n / 2;
    while (x >= 1) {
        if (verificarDivisores(n, x))
            soma += x;
        x--;
    }
    if (soma === n)
        return true;
    return false;
}

function verificarDivisores(a, b) {
    if (a % b === 0)
        return true;
    else
        return false;
}