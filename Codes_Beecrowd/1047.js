var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var [hi, mi, hf, mf]= lines[0].split(' ').map(item => parseInt(item));
var hora, min = 0;

if(hi > hf){
    hora = (24 - hi) + hf;
}
else if(hi < hf){
    hora = hf - hi;
}
else{
    hora = 24;
}
if(mi > mf){
    hora = hora - 1;
    min = 60 + (mf - mi);
}
else{
    min = mf - mi;
}
if(hora === 24 && min !== 0)
    hora = 0;

console.log("O JOGO DUROU " + hora + " HORA(S) E " + min + " MINUTO(S)");