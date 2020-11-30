var palavra = (process.argv[2]);
var palavraInvertida = "";

// for de forma crescente
/*For(var i = 0; i < palavra.length; i++){
//    palavraInvertida += palavra[i];
}*/

//for de forma decrescente
for (var i = palavra.length -1; i >= 0; i--);{
    palavraInvertida += palavra[i];
}

if (palavra === palavraInvertida){
    console.log(palavra + " é palindromo");
} else {
        console.log(palavra + " não é palindromo")
}
console.log(palavraInvertida);