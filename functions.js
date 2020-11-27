var nome = process.argv[2];

function saudacao (nome) {
    console.log("olá " + nome + " seja vem vindo!");
}
saudacao(nome);

function ola(nome){
    console.log("olá " + nome + " seja vem vindo!");
    return ola;
}
ola(nome);