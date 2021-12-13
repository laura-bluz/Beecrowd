var input = require('fs').readFileSync('C:/Users/Laura/Desktop/Beecrowd/Codes_Beecrowd/stdin.js', 'utf8');
var lines = input.split('\n');

var N = input.split('\n').map(item => parseInt(item));
var i = 0;

while (N[i] !== 0) {
    if (i !== 0)
        process.stdout.write("\n");
    imprimeMatriz(N[i]);
    i++;
}

process.stdout.write("\n");
function imprimeMatriz(num) {
    for (let li = 1; li <= num; li++) {
        process.stdout.write("  ");
        for (let col = 1; col <= num; col++) {
            if (col === num) {
                process.stdout.write(calculaItem(num, li, col) + "");
            }
            else {
                if (calculaItem(num, li, col) >= 10)
                    process.stdout.write(calculaItem(num, li, col) + "  ");
                else
                    process.stdout.write(calculaItem(num, li, col) + "   ");
            }
        }
        process.stdout.write("\n");
    }
}

function calculaItem(tam, x, y) {
    let i = 0;

    while ((x + i) != y && (y + i) != x) {
        i++;
    }
    return i + 1;
}//teste