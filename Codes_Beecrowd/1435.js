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
                process.stdout.write(distanciaMatriz(num, li, col) + "");
            }
            else {
                if (distanciaMatriz(num, li, col) >= 10)
                    process.stdout.write(distanciaMatriz(num, li, col) + "  ");
                else
                    process.stdout.write(distanciaMatriz(num, li, col) + "   ");
            }
        }
        process.stdout.write("\n");
    }
}

function distanciaMatriz(tam, x, y) {
    let lat = tam + 1;
    let zx = x - 0;
    let latx = lat - x;
    let resultx = 0, resulty = 0;

    if (zx < latx)
        resultx = zx;
    else
        resultx = latx;

    let zy = y - 0;
    let laty = lat - y;

    if (zy < laty)
        resulty = zy;
    else
        resulty = laty;


    if (resultx < resulty)
        return resultx;
    return resulty;
}