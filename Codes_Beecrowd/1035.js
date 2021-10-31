var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var [a, b, c, d] = lines[0].split(' ').map(item => parseInt(item));
var x = 0, y = 0;

/*if((b > c) && (d > a)){
    x = c + d;
    y = a + b;
    if(x  > y){
        if(c > 0 && d > 0){
            if(a % 2 === 0){   
                console.log("Valores aceitos");
            }else{
                console.log("Valores nao aceitos");
            }
        }else{
            console.log("Valores nao aceitos");
        }
    }
    else{
        console.log("Valores nao aceitos");
    }
} else{
    console.log("Valores nao aceitos");
}*/

if(b > c && d > a && (c + d) > (a + b) && c > 0 && d > 0 && a % 2 === 0) {
    console.log("Valores aceitos");  
} else{
    console.log("Valores nao aceitos");
}