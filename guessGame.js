/*
Quero que você crie um jogo simples do tipo adivinhe um número. Ele deve gerar um número aleatório de 1 a 100,
depois desafiar o jogador a adivinhar o número em 10 rodadas.
A cada rodada deve ser dito ao jogador se ele está certo ou errado, se estiver errado, deve ser dito se o palpite é muito baixo ou muito alto.
Também deve ser mostrado ao jogador os números que ele tentou adivinhar anteriormente.
O jogo termina se o jogador acertar o número ou acabarem o número de tentativas.
Quando o jogo acabar, deve ser dado ao jogador a opção de jogar novamente. 

1)gerar um número random entre 1 e 100;
2)definir maximo 10 tentativas;
3)pedir o jogador para tentar adivinhar o número;
4)decrementar o número de tentativas;
5)verificar s a tentativa está correta;
5.1) se estiver correta:
    - informar que acertou o numero
    - encerrar o jogo;
5.2) se estiver incorreta, e acabaram as tentativas:
    - informar que ele não venceu
    - encerrar o jogo;
5.3) se estiver incorreta, e ainda existirem tentativas:
    - informar se o numerero é maior ou menor
    - tentar de novo;
*/

//criando input do user
var readline = require("readline");
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// math.round = vai arredondar o numero aleatório criado.
//math.random = vai gerar um float number ex. 0.87878788787614837, ou seja, numero quebrado, por isso, multiplica por 100 e arredonda com o math.round.
var numeroAleatorio = Math.round(Math.random() * 100);
if (numeroAleatorio === 0) {
    numeroAleatorio = 1;
}
// console.log(numeroAleatorio);

var numeroTentativas = 10;

/*function pergunta() criada como ultimo step, apenas acrescentando essa 
linha de comando e pergunta(); abaixo do console.log das duas ultimas verificações para que o promp de comando continue perguntando. Simple step.*/

pergunta();

function pergunta(){
    rl.question("guess a number: ", function(numero){ //requerindo input do user
        numero = parseInt(numero); //convetendo input string em numero
        numeroTentativas--; //decremento das tentativas
        if (numero === numeroAleatorio){
            console.log("Congrats! You made it!");
            rl.close(); //encerra a linha de comando, como se encerrar o sistema
        } else if (numeroTentativas === 0) {
            console.log("suas tentativas acabaram");
            rl.close();
        } else if (numero > numeroAleatorio) {
            console.log("Errou! Você tem " + numeroTentativas + " tentativas." + " O número informado é maior que o sorteado.");
            pergunta(); //permitir que as perguntas continuem sendo feitas até as tentativas acabarem
        } else {
            console.log("Errou! Você tem " + numeroTentativas + " tentativas." + " O número informado é menor que o sorteado.");
            pergunta();
        }
    });
}