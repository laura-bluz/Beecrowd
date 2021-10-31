var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let [a] = lines[0].split('\n').map(item => parseInt(item));
let x = input.split('\n').map(item => parseInt(item));
//let r = "";
for (let i = 1; i <= a; i++) {
    if (((x[i] % 2) === 0) && (x[i] > 0)) {
        console.log("EVEN POSITIVE"); // par e positivo
    } else if (((x[i] % 2) === 0) && (x[i] < 0)) {
        console.log("EVEN NEGATIVE"); // par e negativo
    } else if (((x[i] % 2) != 0) && (x[i] > 0)) {
        console.log("ODD POSITIVE");  // impar e positivo
    } else if (((x[i] % 2) != 0) && (x[i] < 0)) {
        console.log("ODD NEGATIVE"); // impar e negativo
    } else if (x[i] === 0)
        console.log("NULL"); // zero
}

/*for (let i = 1; i <= a; i++) {
    if (x[i] === 0) {
        r = "NULL";
    } else {
        if (x[i] % 2 === 0)
            r = "EVEN";
        else
            r = "ODD";
        if (x[i] > 0)
            r = r + " POSITIVE";
        else
            r = r + " NEGATIVE";
    }
    console.log(r);
}*/