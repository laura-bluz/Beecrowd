var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var [a, b, c]= lines[0].split(' ').map(item => parseFloat(item));
var p, area;

if(((a + b) > c) && ((b + c) > a) && ((a + c) > b)){
    console.log("Perimetro = " + (a + b + c).toFixed(1));
}else{
    area = ((a + b) * c) / 2;
    console.log("Area = " + area.toFixed(1));
}
