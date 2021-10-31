var input = require('fs').readFileSync('/Users/User/Desktop/Judge/Códigos/stdin', 'utf8');
var lines = input.split('\n');

var [N] = lines[0].split('\n').map(item => parseInt(item));
var x = input.split('\n').map(item => parseInt(item));

for (let i = 1; i <= N; i++) {
    if (verificarNroPrimo(x[i]))
        console.log(x[i] + " eh primo");
    else
        console.log(x[i] + " nao eh primo");
}

function verificarNroPrimo(n) {
    let x = 2;
    if (n === 2)
        return true;
    if (n % 2 === 0)
        return false;
    while (x < parseInt(n / 2)) {
        if (verificarDivisores(n, x)) {
            return false;
        }
        x++;
    }
    return true;
}

function verificarDivisores(a, b) {
    if (a % b === 0)
        return true;
    else
        return false;
}