var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var [diai, dia1] = lines[0].split(' ').map(item => parseInt(item));
var [hi, a, mi, b, si] = lines[1].split(' ').map(item => parseInt(item));
var [diaf, dia2] = lines[2].split(' ').map(item => parseInt(item));
var [hf, c, mf, d, sf]= lines[3].split(' ').map(item => parseInt(item));
var w = 0, x = 0, y = 0, z = 0;

// segundos
if(si > sf){
    z = (60 - si) + sf;
    y = -1;
}else if(si < sf){
    z = sf - si;
}else if(si === sf){
    z = 0;
}

// minutos
if(mi > mf){
    y = y + ((60 - mi) + mf);
    x = -1;
    if(y === -1){
        y = 59;
        x = -2;
    }
}else if(mi < mf){
    y = y + (mf - mi);
}else if(mi === mf){
    if(y === -1){
        y = 59;
        x = -1;
    }
}
// horas
if(hi > hf){
    x = x + ((24 - hi) + hf);
        w = -1;
}else if(hi < hf){
        x = hf - hi;   
}else if(hi === hf){
    if(x === -1){
        w = x;
        x = x + (24 - hi) + hf;
    }else
        x = 0;
}
// dias
    w = w + (dia2 - dia1);
console.log(w + " dia(s)");
console.log(x + " hora(s)");
console.log(y + " minuto(s)");
console.log(z + " segundo(s)");

