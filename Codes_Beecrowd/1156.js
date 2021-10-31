//S = 1 + 3/2 + 5/4 + 7/8 + ... + 39/?

let s = 0, i = 1, j = 1;

while (j <= 39) {
    s = s + (j/i);
    i *= 2;
    j += 2;
}
console.log(s.toFixed(2));