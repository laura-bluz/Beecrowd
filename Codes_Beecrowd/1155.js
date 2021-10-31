//S = 1 +  1/2  + 1/3 + … + 1/100

let s = 0, i = 1;

while (i <= 100) {
    s = s + 1/i;
    i++;
}
console.log(s.toFixed(2));