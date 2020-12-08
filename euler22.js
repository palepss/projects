/*
Using names.txt (right click and 'Save Link/Target As...'),
a 46K text file containing over five-thousand first names, begin by sorting it into alphabetical order. 
Then working out the alphabetical value for each name, multiply this value by its alphabetical position 
in the list to obtain a name score. For example, when the list is sorted into alphabetical order, 
COLIN, which is worth 3 + 15 + 12 + 9 + 14 = 53, is the 938th name in the list. So, COLIN would obtain a
 score of 938 × 53 = 49714. What is the total of all the name scores in the file?
 
 1. realizar a leitura do arquivo e armazenra em memoria;
 2. ordenar em ordem alfabetica;
 3. calcular score de cada nome baseado na posição da letra;
 4. somar todos os scores
 */

 //importar o arquivo 
var fs = require("fs");
eulerArquivo = "eulerArquivo.txt";
var nomes = [];
fs.readFile(eulerArquivo, "utf-8", function(err, data){
    if (err) {
        console.log(err);
    } else {
        nomes = data.split(","); //split = separa o texto pela virgula
        nomes.sort(); //ordenar array de nomes em ordem alfabetica

        //variaveis inseridas fora dos for's e if's porque serão usadas desde o início e não perder o valor.
        var alfabeto = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
        var somaTotal = 0
        var maiorScore = 0;
        var nomeMaiorScore = "";

        var menorScore = 1000000;
        var nomeMenorScore = "";

        //for passando em cada nome 
        for (var i = 0; i < nomes.length; i++) {
            var nome = nomes[i];
            var soma = 0;
            
            //for passando em cada uma das letras do nome da interaão 
            for (var j = 0; j < nome.length; j++){
                var letra = nome[j];

                //encontra a posição da letra no alfabeto
                var valor = alfabeto.indexOf(letra); //indexof = achar a posição de um elemento. O +1 para a letra A começar em 1.
                if (valor !== -1){
                soma += valor + 1;
                }
            }
            //faz o calculo do score
            var score = soma * (i + 1);
            somaTotal += score;

            //if para descobrir maior score/nome
            if (score > maiorScore){
                maiorScore = score;
                nomeMaiorScore = nome;
            }

            if (score < menorScore) {
                menorScore = score;
                nomeMenorScore = nome;
            }
        }
        console.log(somaTotal);
        console.log(nomeMaiorScore + " " + maiorScore);
        console.log(nomeMenorScore + " " + menorScore);
    }
});