/*Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be:
1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.
*/

//encontrar sequencia fibonacci até 4.000.000
var sequencia = [1, 2];
var valor = 3;
//o proximo nimero de soma na posição 4
var i = 3;
while (valor <= 4000000){
    sequencia.push(valor);  // comando que coloca um elemento no fim da lista // esse comando inteiro tem valor de if. A verificação está sendo no começo
    valor = sequencia[i - 1] + sequencia[i - 2];
    i++; //para puxar o ultimo valor e somar
}

//console.log(sequencia);


//sequencia de números pares na sequencia fibonacci
var pares = []
var soma = 0
for (var j = 0; j < sequencia.length; j++){
    if(sequencia[j] % 2 === 0){
        //pares.push(sequencia[j]); //seria no caso de criar 3 etapas do problema, mas já vamos somar os numeros pares em sequencia
        soma += sequencia[j];
    }

}

//somar os numeros pares
//foi incorporado na parte 2
/*var soma = 0;
for(var k = 0; k < pares.length; k++){
    soma +=pares[k];
} */

console.log(soma);