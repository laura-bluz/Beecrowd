const { ifError } = require('assert');

var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var [a,b,c] = input.split(' ').map(item => parseInt(item));

if(a > b && a > c && b > c){
    console.log(a + "\n" + b + "\n" + c);
}
else if( b > a && b > c && c > a ){
        console.log(b + "\n" + c + "\n" + a);
}else if(c > b && c > a && b > a){
    console.log(c + "\n" + b + "\n" + a);
}else if(b > a && b > c && a > c){
    console.log(b + "\n" + a + "\n" + c);
}else if(a > c && a > b && c > b){
    console.log(a + "\n" + c + "\n" + b);
}else if(c > a && c > b && a > b){
    console.log(c + "\n" + a + "\n" + b);
}
console.log("\n" + a + "\n" + b + "\n" + c);
//c = ""+c;
//process.stdout.write((""+c));
/* x.sort();
console.log(x); */