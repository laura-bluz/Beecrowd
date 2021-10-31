var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let x = input.split('\n').map(item => parseInt(item));
let y = input.split(' ').map(item => parseInt(item));
y.shift();
let c = 0, inter = 0, gremio = 0, empate = 0;

for (let i = 0; ; i++) {
    c = c + 1;
    if (x[i] > y[i / 2]) {
        inter++;
    } else if (x[i] < y[i / 2]) {
        gremio++;
    } else if (x[i] === y[i / 2])
        empate++;

    i++;
    console.log("Novo grenal (1-sim 2-nao)");
    if (x[i] !== 1) {
        console.log(c, "grenais");

        console.log("Inter:" + inter);
        console.log("Gremio:" + gremio);
        console.log("Empates:" + empate);
        if (gremio > inter) {
            console.log("Gremio venceu mais");
        } else if (gremio < inter) {
            console.log("Inter venceu mais");
        } else if (gremio === inter)
            console.log("Nao houve vencedor");
        process.exit();
    }
}