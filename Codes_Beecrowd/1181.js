var input = require('fs').readFileSync('/Users/User/Desktop/Judge/Códigos/stdin', 'utf8');
var lines = input.split('\n');

let [L] = lines[0].split('\n').map(item => parseInt(item));
let op = lines[1].split('\n').map(item => item);
op = op[0].trim()
var vet = [], k = 0, soma = 0, media = 0;
let mat = [];

/*mat[0] = [];
mat[1] = [];*/
vet = input.split('\n').map(item => parseFloat(item));
vet.shift()
vet.shift()
//console.log(M)
/*mat[0][0] = 3
mat[0][1] = 3
mat[0][2] = 3
mat[1][0] = 1
mat[1][1] = 2
mat[1][2] = 3
*/

for (let li = 0; li < 3; li++) {
    mat[li] = [];
    for (col = 0; col < 12; col++) {
        mat[li][col] = vet[k];
        if (li === L) {
            soma = mat[L][col] + soma;
        }
        k++;
    }
}
if (op === 'S')
    console.log(soma.toFixed(1));
else if (op === 'M')
    console.log((soma / 12).toFixed(1));