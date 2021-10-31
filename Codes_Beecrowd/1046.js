var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var [a, b]= lines[0].split(' ').map(item => parseInt(item));
var hora;
if(a >= b){
    hora = (24 - a) + b;
    console.log("O JOGO DUROU " + hora + " HORA(S)");
}else{
    hora = b - a;
    console.log("O JOGO DUROU " + hora + " HORA(S)");
}