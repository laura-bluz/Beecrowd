var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var [a] = lines[0].split(' ').map(item => parseFloat(item));
var tx;
if(a >= 0.00 && a <= 2000.00)
    console.log("Isento");
else if(a > 2000.00 && a <= 3000.00){
    tx = (a - 2000.00) * (8 / 100);
    console.log("R$ " + tx.toFixed(2));
}
else if(a > 3000.00 && a <= 4500.00){
    tx = 80 + (18 / 100) * (a - 3000.00);
    console.log("R$ " + tx.toFixed(2));
}else if(a > 4500.00){
    tx = (80 + 270 ) + (28/100) * (a - 4500.00);
    console.log("R$ " + tx.toFixed(2));
}