var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let [n] = input.split('\n').map(item => parseInt(item));
let i = 2, atual = 1, anterior = 0, aux = 0, string = "";

//process.stdout.write('' + anterior);
//process.stdout.write(' ' + atual);
string = String(anterior);
string += " "+atual;

for (; i < n; i++) {
    aux = anterior + atual; 
    anterior = atual;  
    atual = aux; 
    string += ' '+ aux;
}
console.log(string.trim());