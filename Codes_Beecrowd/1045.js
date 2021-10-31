var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var [a, b, c]= lines[0].split(' ').map(item => parseFloat(item));
var aux;

// ORDEM DECRESCENTE
if(a > b && a > c && b > c){
    console.log(a + "\n" + b + "\n" + c);
}else if(b > a && b > c && c > a ){
        aux = b;
        b = c;
        c = a;
        a = aux;
}else if(c > b && c > a && b > a){
    aux = c;
    c = b;
    b = a;
    a = aux;
}else if(b > a && b > c && a > c){
    aux = b;
    b = a; 
    a = aux; 
}else if(a > c && a > b && c > b){
    aux = a;
    a = c;
    c = b;
    b = aux;
}else if(c > a && c > b && a > b){
    aux = c;
    c = a;
    a = b;
    b = aux;
}else if((a === b) && (b < c)){
    aux = c;
    b = a;
    a = aux;
    c = b;
}else if((a === b) && (b > c)){
    aux = b;
    b = a;
}else if((a === c) && (c < b)){
    a = b;
    b = c; 
    // 4 2 4
}else if((a == c) && (c > b)){
    aux = a;
    c = b;
    b = aux;
}
else if((b === c) && (a > b)){
    aux = a;
    b = c;
    a = aux;
}else if((b === c) && (a < b)){
    c = a;
    a = b;
}
// TRIANGULOS
if(a >= (b + c)){
    console.log("NAO FORMA TRIANGULO");
}else if(a*a === (b*b + c*c)){
    console.log("TRIANGULO RETANGULO");
}else if((a*a) > ((b*b) + (c*c))){
    console.log("TRIANGULO OBTUSANGULO");
}else if(a*a < (b*b + c*c)){
    console.log("TRIANGULO ACUTANGULO");
}
if(a === b && b === c){
    console.log("TRIANGULO EQUILATERO"); // esse
}
if(((a === b) && (a != c)) || ((a === c) && (a != b) || ((b === c) && (b != a)))){
        console.log("TRIANGULO ISOSCELES");
}