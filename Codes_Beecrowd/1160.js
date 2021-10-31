var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');
let i = 1, anos = 0;

var [T] = lines[0].split('\n').map(item => parseInt(item));
for (; i <= T; i++) {
    x = lines[i].split(' ').map(item => parseFloat(item));
    anos = crescimento(x[0], x[1], x[2], x[3]);
    if (anos > 100)
        console.log("Mais de 1 seculo.");
    else
        console.log(crescimento(x[0], x[1], x[2], x[3]) + " anos.");
}

function crescimento(a, b, g1, g2) {
    let anos = 1, ca = 0, cb = 0;
    ca = porcentagemEsoma(a, g1);
    cb = porcentagemEsoma(b, g2);
    while (ca <= cb && anos <= 100) {
        anos++;
        ca = porcentagemEsoma(ca, g1);
        cb = porcentagemEsoma(cb, g2);
    }
    return anos;
}

function porcentagemEsoma(total, porcento) {
    let x = 0;
    x = (porcento * total) / 100;
    return parseInt(x + total);
}