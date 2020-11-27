var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var i = 0;
var num = 0;
while (i < numeros.length) {
     num = numeros[i];
     i++;
     if (num % 2 === 0) {
         console.log(num + " é par");
         continue;
     }
    console.log(num + " é impar");
}