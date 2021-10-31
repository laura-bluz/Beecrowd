var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var a = "", b = "", c = "";

[a, b, c]= input.split('\n').map(linha => linha.replace('\r','') );

var vert = 'vertebrado', mami = 'mamifero', oni = 'onivoro', herb = 'herbivoro';
var ave = 'ave', carn = 'carnivoro';
var invert = 'invertebrado', inseto = 'inseto', hema = 'hematofago', anel = 'anelideo';

if(a === vert && b === ave){
    if(c === carn){
        console.log("aguia");
    }else
        console.log("pomba");
}else if(a === vert && b === mami){
    if(c === oni){
        console.log("homem");
    }else
        console.log("vaca");
}
// parte de baixo
if(a === invert && b === inseto){
    if(c === hema){
        console.log("pulga");
    }else
        console.log("lagarta");
}else if(a === invert && b === anel){
    if(c === hema){
        console.log("sanguessuga");
    }else
        console.log("minhoca");
}