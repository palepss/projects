/*
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. 
The sum of these multiples is 23.
Find the sum of all the multiples of 3 or 5 below 1000 
*/

//233168

var multiplos = [];
for (var i = 3; i < 1000; i++){
    //se o numero i, dividido por 3 é igual à zero (resto 0).
    // || == ou.
    if ((i % 3 === 0) || (i % 5 === 0)) {
        //vai adicionar o numero encontrado no array.
        multiplos.push(i);
    }
}
var sum = 0
for (i = 0; i <multiplos.length; i++){
    //sum = sum + multiplos[i]
    sum += multiplos[i];
}
console.log(sum);


