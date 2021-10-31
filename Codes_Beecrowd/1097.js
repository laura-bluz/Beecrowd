var i = 1, j = 7;

for(; i <= 9; i = i + 2){
   console.log('I=' + i + " J=" + j);
   j = j - 1;
   console.log('I=' + i + " J=" + j);
   j = j - 1;
   console.log('I=' + i + " J=" + j);
   j = j + 4;
}
/* // ---- maneira do Junior
var i = 1, j = 7;

for(; i <= 9; i = i + 2){
   console.log('I=' + i + " J=" + j - 1));
   console.log('I=' + i + " J=" + (j - 1));
   console.log('I=' + i + " J=" + (j - 2));
   j = j + 2;
}*/