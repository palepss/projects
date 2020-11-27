var determinadoNumero = parseInt(process.argv[2]);
//var determinadoNumero = 10;

function primeNumber(num) {
    for (var divisor = 2; divisor < num; divisor++) 
    if (num % divisor == 0) return false;
    return true;
}
for (var i = 2; i < determinadoNumero; i++) if (primeNumber(i)) console.log(i);