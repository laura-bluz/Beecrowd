var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var [a, b, c, d] = lines[0].split(' ').map(item => parseFloat(item));
var media1, media2;

media1 = ((a * 2) + (b * 3) + (c * 4) + (d * 1)  ) / (2 + 3 + 4 + 1);
console.log("Media: " + media1.toFixed(1));

if(media1 >= 7){
    console.log("Aluno aprovado.");//6.9 ou menos
}else if(media1 < 5){ //5 ou mais até 6.9
    console.log("Aluno reprovado.");
}else{
    console.log("Aluno em exame.");
    var [d] = lines[1].split(' ').map(item => parseFloat(item));
    console.log("Nota do exame: " + d.toFixed(1));
    media2 = (d + media1) /2;
    if(media2 >= 5)
        console.log("Aluno aprovado.");
    else
        console.log("Aluno reprovado.");
    console.log("Media final: " + media2.toFixed(1));
}