var i = 0, j = 1, x = 0;

while (i <= 2) {
   j = 1 + i;
   x = 0.2;
   console.log('I=' + i + " J=" + (j));
   console.log('I=' + i + " J=" + (j + 1));
   console.log('I=' + i + " J=" + (j + 2));
   while (x < 1 && i < 2) {
      console.log('I=' + (i + x).toFixed(1) + " J=" + (j + x));
      console.log('I=' + (i + x).toFixed(1) + " J=" + (j + 1 + x));
      console.log('I=' + (i + x).toFixed(1) + " J=" + (j + 2 + x));
      x = x + 0.2;
   }
   i++;
}
